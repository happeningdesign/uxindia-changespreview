import Image from "next/image";

export default function About() {
  return (
    <section className="relative w-full flex justify-center items-center px-8 py-12 bg-[#40491C] overflow-x-clip">
      {/* Content */}
      <div className="container relative max-w-[1280px] h-[700px] flex justify-start items-center mx-auto z-1">
        <div className="content flex flex-col gap-3 max-w-[560px] text-[#ffffff] z-1">
          <h2 className="text-[20px]" style={{ fontFamily: "Google Sans" }}>
            Every great product begins with one question:
          </h2>
          <h3
            className="text-[36px] leading-[1.3]"
            style={{ fontFamily: "Shrikhand" }}
          >
            How can we improve someone’s Life?
          </h3>

          <p className="text-[18px]" style={{ fontFamily: "Google Sans" }}>
            Design Pitch an initiative of UMO Design is where the people
            answering that question- students, designers, engineers,
            researchers, and founders. Put human-centered products on a global
            stage at UXINDIA, in front of design leaders, go-to-market
            specialists, and investors.
          </p>
          <p className="text-[18px]" style={{ fontFamily: "Google Sans" }}>
            More than a competition, Design Pitch is a platform to discover,
            celebrate, and support the next generation of human-centered
            products.
          </p>
        </div>

        {/* Illustrations */}
        <Image
          src="/design-pitch/illustrations/graduation-cap.webp"
          alt="Design Pitch"
          width={813}
          height={614}
          priority
          className="w-[500px] sm:w-[700px] lg:w-[813px] h-auto max-w-[813px] absolute top-[-30%] sm:top-[-45%] right-[-40%] sm:right-[-20%] lg:right-[-10%] mx-auto z-[-1]"
        />

        <Image
          src="/design-pitch/illustrations/trophy.webp"
          alt="Design Pitch"
          width={550}
          height={733}
          priority
          className="w-[300px] sm:w-[400px] lg:w-[550px] h-auto max-w-[550px] absolute top-[20%] sm:top-[25%] right-[-45%] sm:right-[-25%] lg:right-[-15%] mx-auto z-[-1]"
        />

        <Image
          src="/design-pitch/illustrations/compass.webp"
          alt="Design Pitch"
          width={265}
          height={353}
          priority
          className="w-[100px] sm:w-[150px] lg:w-[265px] h-auto max-w-[265px] absolute top-[40%] sm:top-[55%] md:top-[60%] right-[10%] sm:right-[10%] lg:right-[20%] mx-auto z-[-1]"
        />

        <Image
          src="/design-pitch/illustrations/lamp.webp"
          alt="Design Pitch"
          width={708}
          height={578}
          priority
          className="w-[450px] sm:w-[550px] lg:w-[708px] h-auto max-w-[708px] absolute top-[65%] sm:top-[65%] md:top-[65%] lg:top-[75%] right-[-25%] sm:right-[5%] lg:right-[20%] mx-auto z-[-1]"
        />

        <Image
          src="/design-pitch/illustrations/bulb.webp"
          alt="Design Pitch"
          width={911}
          height={1077}
          priority
          className="w-[450px] sm:w-[550px] md:w-[650px] lg:w-[750px] h-auto max-w-[750px] absolute top-[90%] sm:top-[65%] md:top-[60%] lg:top-[65%] right-[30%] sm:right-[65%] md:right-[50%] lg:right-[60%] mx-auto z-[-1]"
        />
      </div>
    </section>
  );
}
