"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

interface CurvedSliderProps {
  images: string[];
  speed?: number;
  gap?: number;
  curve?: number;
  reverse?: boolean;
  height?: string;
}

export default function CurvedSlider({
  images,
  speed = 30,
  gap = 0,
  curve = 8,
  reverse = false,
  height = "100vh",
}: CurvedSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || images.length === 0) return;

    const direction = reverse ? 1 : -1;

    // ── Scene & camera ──────────────────────────────────────────────────────────
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      el.clientWidth / el.clientHeight,
      0.1,
      20,
    );
    camera.position.z = 2;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(el.clientWidth, el.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    el.appendChild(renderer.domElement);

    // ── World-unit measurements ─────────────────────────────────────────────────
    // Compute how many pixels = 1 world unit at z=0 so we can convert gapPx → world
    const vFov = (camera.fov * Math.PI) / 180;
    const worldH = 2 * Math.tan(vFov / 2) * camera.position.z;
    const worldW = worldH * (el.clientWidth / el.clientHeight);
    const pxPerUnit = el.clientWidth / worldW;

    // gap prop is in pixels; convert once to a fixed world-unit gap
    const gapWorld = gap / pxPerUnit;

    // ── Pre-load aspect ratios before building planes ───────────────────────────
    // We must know real image dimensions so scale.x can be set per-image —
    // this locks each image's aspect ratio and prevents any distortion.
    let loadedCount = 0;
    const aspects: number[] = new Array(images.length).fill(0.75);
    let animId: number;
    let cleanupFn: (() => void) | undefined;

    const buildScene = () => {
      // Each plane is 1 world unit tall (fills container height).
      // Width = aspect * 1  →  set via scale.x after load.
      // Spacing = planeWidth + gapWorld  (exact pixel gap between edges).

      // Use a fixed reference plane width for layout calculations.
      // We derive this from the average aspect across all images so
      // spacing is consistent even if images differ slightly in width.
      const avgAspect = aspects.reduce((s, a) => s + a, 0) / aspects.length;
      const refPlaneW = avgAspect; // plane height = 1, width = aspect
      const slotW = refPlaneW + gapWorld; // center-to-center distance

      // Total planes needed:
      //   – visible slots to fill the full screen width with a generous buffer
      //   – plus 3 full loops worth of extra planes for seamless wrap
      const visibleSlots = Math.ceil(worldW / slotW) + 6;
      const loopSlots = images.length * 3;
      const totalSlots = visibleSlots + loopSlots;
      const centerSlot = Math.floor(totalSlots / 2);

      const geometry = new THREE.PlaneGeometry(1, 1, 20, 20);

      for (let i = 0; i < totalSlots; i++) {
        const imgIdx =
          (((i - centerSlot) % images.length) + images.length) % images.length;
        const src = images[imgIdx];
        const aspect = aspects[imgIdx];

        new THREE.TextureLoader().load(src, (texture) => {
          const material = new THREE.ShaderMaterial({
            uniforms: {
              tex: { value: texture },
              curve: { value: curve },
            },
            vertexShader: `
              uniform float curve;
              varying vec2 vertexUV;
              void main(){
                vertexUV = uv;
                vec3 newPosition = position;
                float distanceFromCenter = abs((modelMatrix * vec4(position, 1.0)).x);
                newPosition.y *= 1.0 + (curve / 100.0) * pow(distanceFromCenter, 2.0);
                gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
              }
            `,
            fragmentShader: `
              uniform sampler2D tex;
              varying vec2 vertexUV;
              void main(){
                gl_FragColor = texture2D(tex, vertexUV);
              }
            `,
          });

          const plane = new THREE.Mesh(geometry, material);
          // Lock aspect ratio: scale.x = image width/height, scale.y stays 1 (= worldH fills container)
          plane.scale.x = aspect;
          plane.position.x = direction * (i - centerSlot) * slotW;
          scene.add(plane);
        });
      }

      // ── Animation loop ────────────────────────────────────────────────────────
      const loopWidth = images.length * slotW;
      let time = 0;
      let prevTime = 0;

      const animate = (currentTime: number) => {
        const timePassed = currentTime - prevTime;
        if (Math.abs(scene.position.x) >= loopWidth) time = 0;
        time += direction * timePassed * 0.00001;
        scene.position.x = time * speed;
        renderer.render(scene, camera);
        prevTime = currentTime;
        animId = requestAnimationFrame(animate);
      };
      animId = requestAnimationFrame(animate);

      // ── Resize ───────────────────────────────────────────────────────────────
      const handleResize = () => {
        camera.aspect = el.clientWidth / el.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(el.clientWidth, el.clientHeight);
      };
      window.addEventListener("resize", handleResize);

      cleanupFn = () => {
        cancelAnimationFrame(animId);
        window.removeEventListener("resize", handleResize);
        renderer.dispose();
        if (el.contains(renderer.domElement))
          el.removeChild(renderer.domElement);
      };
    };

    // Pre-load unique images → record aspect → then build
    images.forEach((src, idx) => {
      const img = new window.Image();
      img.onload = () => {
        aspects[idx] = img.naturalWidth / img.naturalHeight;
        loadedCount++;
        if (loadedCount === images.length) buildScene();
      };
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === images.length) buildScene();
      };
      img.src = src;
    });

    return () => {
      cleanupFn?.();
      if (!cleanupFn && el.contains(renderer.domElement)) {
        el.removeChild(renderer.domElement);
      }
    };
  }, [images, speed, gap, curve, reverse]);

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        width: "100%",
        height: height,
        overflow: "hidden",
      }}
    />
  );
}
