"use client";

import React from "react";
import Nav from "@/components/global/nav/Nav";
import Footer from "@/components/global/footer/Footer";

const scheduleData = {
  days: [
    { id: "day1", label: "Pre-Conference Workshops", date: "Sept 23" },
    { id: "day2", label: "Conference Day 1", date: "Sept 24" },
    { id: "day3", label: "Conference Day 2", date: "Sept 25" },
  ],
  day1: [
    {
      time: "8:00 AM",
      type: "break",
      title: "Registrations",
    },
    {
      time: "9:00 AM",
      type: "workshops",
      workshops: [
        {
          room: "Room 1",
          title: "Design Foundations & Principles",
          speaker: {
            name: "John Doe",
            role: "Workshop Leader, UMO Design Foundation",
            image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mohan%202-K9AB5pP4ZHPfre7Q7Go5ODw5e2M2UX.png",
          },
          description: "Learn foundational design principles and practices.",
        },
        {
          room: "Room 2",
          title: "Advanced Design Methodologies",
          speaker: {
            name: "John Doe",
            role: "Workshop Leader, UMO Design Foundation",
            image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kate-LDTO53yItpEnoSxHsyiNn0H6302DJW.png",
          },
          description: "Explore advanced design methodologies.",
        },
        {
          room: "Room 3",
          title: "Emerging Design Trends & Tools",
          speaker: {
            name: "John Doe",
            role: "Workshop Leader, UMO Design Foundation",
            image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kirti%202%202-bzGwR92irRSkBQmceiZr6uK8VKQkWD.png",
          },
          description: "Master emerging design trends and tools.",
        },
      ],
    },
    {
      time: "10:30 AM",
      type: "break",
      title: "Coffee Break",
    },
    {
      time: "11:15 AM",
      type: "workshops",
      workshops: [
        {
          room: "Room 1",
          title: "Design Foundations & Principles (Continued)",
          speaker: {
            name: "John Doe",
            role: "Workshop Leader, UMO Design Foundation",
            image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mohan%202-K9AB5pP4ZHPfre7Q7Go5ODw5e2M2UX.png",
          },
          description: "Learn foundational design principles and practices.",
        },
        {
          room: "Room 2",
          title: "Advanced Design Methodologies (Continued)",
          speaker: {
            name: "John Doe",
            role: "Workshop Leader, UMO Design Foundation",
            image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kate-LDTO53yItpEnoSxHsyiNn0H6302DJW.png",
          },
          description: "Explore advanced design methodologies.",
        },
        {
          room: "Room 3",
          title: "Emerging Design Trends & Tools (Continued)",
          speaker: {
            name: "John Doe",
            role: "Workshop Leader, UMO Design Foundation",
            image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kirti%202%202-bzGwR92irRSkBQmceiZr6uK8VKQkWD.png",
          },
          description: "Master emerging design trends and tools.",
        },
      ],
    },
    {
      time: "12:15 PM",
      type: "break",
      title: "Lunch",
    },
    {
      time: "1:45 PM",
      type: "workshops",
      workshops: [
        {
          room: "Room 1",
          title: "Practical Design Solutions",
          speaker: {
            name: "John Doe",
            role: "Workshop Leader, UMO Design Foundation",
            image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rucha%202-D6aWBOcA3BXuuOmwat1GTMaPDMPrDb.png",
          },
          description: "Develop practical design solutions.",
        },
        {
          room: "Room 2",
          title: "Innovating with Design Thinking",
          speaker: {
            name: "John Doe",
            role: "Workshop Leader, UMO Design Foundation",
            image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mirjam%205-su1y8iJkrQl7NGkUZ6TEnCIEkAa3Go.png",
          },
          description: "Innovate with design thinking.",
        },
        {
          room: "Room 3",
          title: "From Ideas to Impactful Design",
          speaker: {
            name: "John Doe",
            role: "Workshop Leader, UMO Design Foundation",
            image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Donald%202-QrVCcZvm0T90MBDsDxYFH2zLqlunQF.png",
          },
          description: "Transform ideas into impactful designs.",
        },
      ],
    },
    {
      time: "3:15 PM",
      type: "break",
      title: "Coffee Break",
    },
    {
      time: "4:00 PM",
      type: "workshops",
      workshops: [
        {
          room: "Room 1",
          title: "Practical Design Solutions (Continued)",
          speaker: {
            name: "John Doe",
            role: "Workshop Leader, UMO Design Foundation",
            image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rucha%202-D6aWBOcA3BXuuOmwat1GTMaPDMPrDb.png",
          },
          description: "Develop practical design solutions.",
        },
        {
          room: "Room 2",
          title: "Innovating with Design Thinking (Continued)",
          speaker: {
            name: "John Doe",
            role: "Workshop Leader, UMO Design Foundation",
            image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mirjam%205-su1y8iJkrQl7NGkUZ6TEnCIEkAa3Go.png",
          },
          description: "Innovate with design thinking.",
        },
        {
          room: "Room 3",
          title: "From Ideas to Impactful Design (Continued)",
          speaker: {
            name: "John Doe",
            role: "Workshop Leader, UMO Design Foundation",
            image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ravinder%202-Ma6qnJURvXf7yIu5JfMG0c79LiCfRF.png",
          },
          description: "Transform ideas into impactful designs.",
        },
      ],
    },
  ],
  day3: [
    {
      time: "8:00 AM",
      type: "break",
      title: "Registrations",
    },
    {
      time: "9:00 AM",
      type: "sessions",
      sessions: [
        {
          room: "Room 1",
          title: "Opening Remarks",
          speaker: {
            name: "John Doe",
            role: "Design Leader, UMO Design Foundation",
            image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mohan%202-K9AB5pP4ZHPfre7Q7Go5ODw5e2M2UX.png",
          },
          description: "Welcome to Day 3 Design Leadership Conference.",
        },
        {
          room: "Room 2",
          title: "Opening Remarks",
          speaker: {
            name: "John Doe",
            role: "Design Entrepreneur, UMO Design Foundation",
            image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kate-LDTO53yItpEnoSxHsyiNn0H6302DJW.png",
          },
          description: "Welcome to Day 3 Design Entrepreneurship Track.",
        },
      ],
    },
    {
      time: "9:25 AM",
      type: "sessions",
      sessions: [
        {
          room: "Room 1",
          title: "Deep Dive Talk",
          speaker: {
            name: "John Doe",
            role: "Design Strategist, UMO Design Foundation",
            image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kirti%202%202-bzGwR92irRSkBQmceiZr6uK8VKQkWD.png",
          },
          description: "Exploring advanced design strategies and implementation.",
        },
        {
          room: "Room 2",
          title: "Deep Dive Talk",
          speaker: {
            name: "John Doe",
            role: "Design Entrepreneur, UMO Design Foundation",
            image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rucha%202-D6aWBOcA3BXuuOmwat1GTMaPDMPrDb.png",
          },
          description: "Building and scaling design-driven businesses.",
        },
      ],
    },
    {
      time: "10:05 AM",
      type: "sessions",
      sessions: [
        {
          room: "Room 1",
          title: "Spark Session",
          speaker: {
            name: "John Doe",
            role: "Design Innovator, UMO Design Foundation",
            image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mirjam%205-su1y8iJkrQl7NGkUZ6TEnCIEkAa3Go.png",
          },
          description: "Lightning talks on design innovation.",
        },
        {
          room: "Room 2",
          title: "Spark Session",
          speaker: {
            name: "John Doe",
            role: "Design Entrepreneur, UMO Design Foundation",
            image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Donald%202-QrVCcZvm0T90MBDsDxYFH2zLqlunQF.png",
          },
          description: "Quick insights on entrepreneurial design thinking.",
        },
      ],
    },
    {
      time: "10:30 AM",
      type: "break",
      title: "Coffee Break",
    },
    {
      time: "11:15 AM",
      type: "sessions",
      sessions: [
        {
          room: "Room 1",
          title: "Spark Session",
          speaker: {
            name: "John Doe",
            role: "Design Innovator, UMO Design Foundation",
            image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ravinder%202-Ma6qnJURvXf7yIu5JfMG0c79LiCfRF.png",
          },
          description: "Creative approaches to design challenges.",
        },
        {
          room: "Room 2",
          title: "Spark Session",
          speaker: {
            name: "John Doe",
            role: "Design Entrepreneur, UMO Design Foundation",
            image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mohan%202-K9AB5pP4ZHPfre7Q7Go5ODw5e2M2UX.png",
          },
          description: "Entrepreneurial insights from design leaders.",
        },
      ],
    },
    {
      time: "11:40 AM",
      type: "sessions",
      sessions: [
        {
          room: "Room 1",
          title: "Panel Discussion",
          speaker: {
            name: "John Doe",
            role: "Panel Moderator, UMO Design Foundation",
            image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kate-LDTO53yItpEnoSxHsyiNn0H6302DJW.png",
          },
          description: "Discussion on design leadership in modern organizations.",
        },
        {
          room: "Room 2",
          title: "Panel Discussion",
          speaker: {
            name: "John Doe",
            role: "Panel Moderator, UMO Design Foundation",
            image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kirti%202%202-bzGwR92irRSkBQmceiZr6uK8VKQkWD.png",
          },
          description: "Navigating design entrepreneurship and growth.",
        },
      ],
    },
    {
      time: "12:40 PM",
      type: "break",
      title: "Lunch",
    },
    {
      time: "2:10 PM",
      type: "grid-sessions",
      leftSessions: [
        {
          time: "2:10 PM",
          room: "Room 1",
          title: "Deep Dive Talk",
          speaker: {
            name: "John Doe",
            role: "Design Strategist, UMO Design Foundation",
            image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rucha%202-D6aWBOcA3BXuuOmwat1GTMaPDMPrDb.png",
          },
          description: "Advanced strategies for design transformation.",
        },
        {
          time: "2:50 PM",
          room: "Room 1",
          title: "Spark Session",
          speaker: {
            name: "John Doe",
            role: "Design Innovator, UMO Design Foundation",
            image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Donald%202-QrVCcZvm0T90MBDsDxYFH2zLqlunQF.png",
          },
          description: "Final insights and takeaways from the day.",
        },
      ],
      rightSession: {
        room: "Room 2",
        title: "Design Pitch VC Sessions",
        panelists: [
          {
            name: "John Doe",
            role: "VC Investor, UMO Design Foundation",
            image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mirjam%205-su1y8iJkrQl7NGkUZ6TEnCIEkAa3Go.png",
          },
          {
            name: "John Doe",
            role: "VC Investor, UMO Design Foundation",
            image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Donald%202-QrVCcZvm0T90MBDsDxYFH2zLqlunQF.png",
          },
          {
            name: "John Doe",
            role: "VC Investor, UMO Design Foundation",
            image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ravinder%202-Ma6qnJURvXf7yIu5JfMG0c79LiCfRF.png",
          },
          {
            name: "John Doe",
            role: "VC Investor, UMO Design Foundation",
            image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mohan%202-K9AB5pP4ZHPfre7Q7Go5ODw5e2M2UX.png",
          },
        ],
        description: "Pitch your design-driven startup to VCs.",
      },
    },
    {
      time: "3:15 PM",
      type: "break",
      title: "Coffee Break & Networking",
    },
    {
      time: "4:00 PM",
      type: "keynote",
      title: "Closing Ceremony",
      tag: "Main Stage",
      speaker: {
        name: "John Doe",
        role: "Conference Lead, UMO Design Foundation",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ravinder%202-Ma6qnJURvXf7yIu5JfMG0c79LiCfRF.png",
      },
      description: "Closing remarks and key takeaways from the conference.",
    },
  ],
  day1Keynote: [
    {
      time: "9:00 AM",
      type: "keynote",
      title: "The Future of Design Leadership",
      description: "Opening keynote on how design leadership is evolving in the age of AI and rapid technological change.",
      speaker: {
        name: "John Doe",
        role: "Global Head of Design, UMO Design Foundation",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mohan%202-K9AB5pP4ZHPfre7Q7Go5ODw5e2M2UX.png",
      },
      tag: "Keynote",
    },
    {
      time: "10:30 AM",
      type: "dual",
      sessions: [
        {
          title: "Building Design Systems at Scale",
          description: "Learn how to create and maintain design systems that work across global organizations.",
          speaker: {
            name: "John Doe",
            role: "VP Research, UMO Design Foundation",
            image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kate-LDTO53yItpEnoSxHsyiNn0H6302DJW.png",
          },
        },
        {
          title: "Research-Driven Design Decisions",
          description: "Frameworks for integrating user research into strategic design decisions.",
          speaker: {
            name: "John Doe",
            role: "VP Design, UMO Design Foundation",
            image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kirti%202%202-bzGwR92irRSkBQmceiZr6uK8VKQkWD.png",
          },
        },
      ],
    },
    {
      time: "12:00 PM",
      type: "break",
      title: "Networking Lunch",
    },
    {
      time: "1:30 PM",
      type: "tracks",
      tracks: [
        {
          tag: "Leadership",
          title: "Managing Up: Design at the C-Suite",
          speaker: {
            name: "John Doe",
            role: "Director Of Design, UMO Design Foundation",
            image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rucha%202-D6aWBOcA3BXuuOmwat1GTMaPDMPrDb.png",
          },
          description: "Strategies for communicating design value to executive leadership.",
        },
        {
          tag: "Strategy",
          title: "Design Operations Excellence",
          speaker: {
            name: "John Doe",
            role: "Experience Labs Lead, UMO Design Foundation",
            image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mirjam%205-su1y8iJkrQl7NGkUZ6TEnCIEkAa3Go.png",
          },
          description: "Optimizing design workflows and team structures for maximum impact.",
        },
        {
          tag: "Innovation",
          title: "AI-Augmented Design Process",
          speaker: {
            name: "John Doe",
            role: "CDO, UMO Design Foundation",
            image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Donald%202-QrVCcZvm0T90MBDsDxYFH2zLqlunQF.png",
          },
          description: "Integrating AI tools into the design workflow without losing creativity.",
        },
      ],
    },
    {
      time: "3:00 PM",
      type: "panel",
      title: "Panel: The State of Design in 2026",
      description: "Industry leaders discuss trends, challenges, and opportunities in design leadership.",
      panelists: [
        {
          name: "John Doe",
          image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mohan%202-K9AB5pP4ZHPfre7Q7Go5ODw5e2M2UX.png",
        },
        {
          name: "John Doe",
          image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kate-LDTO53yItpEnoSxHsyiNn0H6302DJW.png",
        },
        {
          name: "John Doe",
          image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rucha%202-D6aWBOcA3BXuuOmwat1GTMaPDMPrDb.png",
        },
        {
          name: "John Doe",
          image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Donald%202-QrVCcZvm0T90MBDsDxYFH2zLqlunQF.png",
        },
      ],
      tag: "Panel Discussion",
    },
    {
      time: "4:30 PM",
      type: "dual",
      sessions: [
        {
          title: "Building Inclusive Design Teams",
          description: "Creating diverse, equitable, and inclusive design organizations.",
          speaker: {
            name: "John Doe",
            role: "Co-Founder, UMO Design Foundation",
            image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ravinder%202-Ma6qnJURvXf7yIu5JfMG0c79LiCfRF.png",
          },
        },
        {
          title: "Measuring Design Impact",
          description: "Metrics and frameworks for demonstrating design ROI.",
          speaker: {
            name: "John Doe",
            role: "Experience Labs Lead, UMO Design Foundation",
            image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mirjam%205-su1y8iJkrQl7NGkUZ6TEnCIEkAa3Go.png",
          },
        },
      ],
    },
  ],
  day2: [
    {
      time: "8:00 AM",
      type: "break",
      title: "Registrations",
    },
    {
      time: "9:00 AM",
      type: "keynote",
      title: "Opening Design Leadership Vision",
      description: "Setting the tone for day two with insights on the future of design-led organizations.",
      speaker: {
        name: "John Doe",
        role: "Design Leader, UMO Design Foundation",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mohan%202-K9AB5pP4ZHPfre7Q7Go5ODw5e2M2UX.png",
      },
      tag: "Opening Keynote",
    },
    {
      time: "9:50 AM",
      type: "keynote",
      title: "Grand Keynote: Design at Enterprise Scale",
      description: "Exploring design leadership in large, complex organizational structures.",
      speaker: {
        name: "John Doe",
        role: "Executive Design Lead, UMO Design Foundation",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kate-LDTO53yItpEnoSxHsyiNn0H6302DJW.png",
      },
      tag: "Grand Keynote",
    },
    {
      time: "10:40 AM",
      type: "break",
      title: "Coffee Break",
    },
    {
      time: "11:25 AM",
      type: "keynote",
      title: "Plenary Keynote: Building Design Culture",
      description: "Creating and sustaining a strong design culture within organizations.",
      speaker: {
        name: "John Doe",
        role: "Culture & Design Strategist, UMO Design Foundation",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kirti%202%202-bzGwR92irRSkBQmceiZr6uK8VKQkWD.png",
      },
      tag: "Plenary Keynote",
    },
    {
      time: "12:05 PM",
      type: "keynote",
      title: "Plenary Keynote: Design Ethics in AI",
      description: "Responsible design practices in an AI-driven world.",
      speaker: {
        name: "John Doe",
        role: "Ethical Design Specialist, UMO Design Foundation",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rucha%202-D6aWBOcA3BXuuOmwat1GTMaPDMPrDb.png",
      },
      tag: "Plenary Keynote",
    },
    {
      time: "12:45 PM",
      type: "break",
      title: "Lunch Break",
    },
    {
      time: "2:30 PM",
      type: "panel",
      title: "Panel Discussion: Future of Design Leadership",
      description: "Thought leaders share perspectives on emerging trends and challenges in design leadership.",
      panelists: [
        {
          name: "John Doe",
          image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mohan%202-K9AB5pP4ZHPfre7Q7Go5ODw5e2M2UX.png",
        },
        {
          name: "John Doe",
          image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kate-LDTO53yItpEnoSxHsyiNn0H6302DJW.png",
        },
        {
          name: "John Doe",
          image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rucha%202-D6aWBOcA3BXuuOmwat1GTMaPDMPrDb.png",
        },
      ],
      tag: "Panel Discussion",
    },
    {
      time: "3:40 PM",
      type: "keynote",
      title: "Plenary Keynote: Global Design Perspectives",
      description: "Cross-cultural insights into design leadership practices worldwide.",
      speaker: {
        name: "John Doe",
        role: "Global Design Director, UMO Design Foundation",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mirjam%205-su1y8iJkrQl7NGkUZ6TEnCIEkAa3Go.png",
      },
      tag: "Plenary Keynote",
    },
    {
      time: "5:20 PM",
      type: "keynote",
      title: "Plenary Keynote: The Next Wave of Design",
      description: "What's next in design leadership and innovation.",
      speaker: {
        name: "John Doe",
        role: "Innovation Strategist, UMO Design Foundation",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Donald%202-QrVCcZvm0T90MBDsDxYFH2zLqlunQF.png",
      },
      tag: "Plenary Keynote",
    },
    {
      time: "6:00 PM",
      type: "keynote",
      title: "Grand Keynote: Design's Role in Transformation",
      description: "How design drives organizational and social transformation.",
      speaker: {
        name: "John Doe",
        role: "Design Transformation Expert, UMO Design Foundation",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ravinder%202-Ma6qnJURvXf7yIu5JfMG0c79LiCfRF.png",
      },
      tag: "Grand Keynote",
    },
    {
      time: "4:20 PM",
      type: "break",
      title: "Coffee Break & Networking",
    },
    {
      time: "5:20 PM",
      type: "keynote",
      title: "Plenary Keynote: The Next Wave of Design",
      description: "What's next in design leadership and innovation.",
      speaker: {
        name: "John Doe",
        role: "Innovation Strategist, UMO Design Foundation",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Donald%202-QrVCcZvm0T90MBDsDxYFH2zLqlunQF.png",
      },
      tag: "Plenary Keynote",
    },
    {
      time: "6:00 PM",
      type: "keynote",
      title: "Grand Keynote: Design's Role in Transformation",
      description: "How design drives organizational and social transformation.",
      speaker: {
        name: "Doug",
        role: "Design Transformation Expert",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ravinder%202-Ma6qnJURvXf7yIu5JfMG0c79LiCfRF.png",
      },
      tag: "Grand Keynote",
    },
    {
      time: "6:50 PM",
      type: "break",
      title: "Networking Dinner",
    },
  ],
};

const sessions = scheduleData.day1;

function parseTimeToMinutes(t: string): number | null {
  const m = t.match(/(\d+):(\d+)\s*(AM|PM)/i);
  if (!m) return null;
  let h = parseInt(m[1], 10);
  const min = parseInt(m[2], 10);
  const ap = m[3].toUpperCase();
  if (ap === "PM" && h !== 12) h += 12;
  if (ap === "AM" && h === 12) h = 0;
  return h * 60 + min;
}

function formatDuration(mins: number): string | null {
  if (mins <= 0) return null;
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  if (h && m) return `${h} hr ${m} min`;
  if (h) return `${h} hr`;
  return `${m} min`;
}

export default function SchedulePreviewPage() {
  const [activeDay, setActiveDay] = React.useState("day1");
  const currentSessions = activeDay === "day1" ? scheduleData.day1 : (activeDay === "day2" ? scheduleData.day2 : scheduleData.day3);
  const activeDayIndex = scheduleData.days.findIndex((d) => d.id === activeDay);
  const activeDayLabel = scheduleData.days[activeDayIndex]?.label ?? "";
  const prevDay = activeDayIndex > 0 ? scheduleData.days[activeDayIndex - 1] : null;
  const nextDay = activeDayIndex < scheduleData.days.length - 1 ? scheduleData.days[activeDayIndex + 1] : null;

  return (
    <main>
      <Nav forceSolid={true} />
      <div className="bg-[#0D0D0D] w-full pt-24 pb-16 md:pt-32 md:pb-24 min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="mb-12">
            <p className="font-sans text-[11px] md:text-xs text-[#E85520] font-semibold uppercase tracking-[0.2em] mb-4">
              PREVIEW MODE
            </p>
            <h1 className="font-leadership text-4xl md:text-5xl lg:text-6xl text-white mb-4">
              Leadership Summit 2026
            </h1>
            <p className="font-sans text-base text-white/60">
              September 23-25, 2026 — Leela Bhartiya City, Bengaluru
            </p>
          </div>

          {/* Day tabs */}
          <div className="flex gap-4 mb-12">
            {scheduleData.days.map((day) => (
              <button
                key={day.id}
                onClick={() => setActiveDay(day.id)}
                className={`px-6 py-3 rounded-lg font-sans text-sm font-medium transition-all cursor-pointer ${
                  activeDay === day.id
                    ? "bg-[#E85520] text-white"
                    : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
                }`}
              >
                {day.label}
                <span className="ml-2 text-xs opacity-70">{day.date}</span>
              </button>
            ))}
          </div>

          {/* Schedule */}
          <div className="space-y-6">
            {currentSessions.map((session, index) => {
              // Render time and event as a row
              return (
                <div key={index} className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  {/* Time column - hidden on mobile */}
                  <div className="hidden lg:block lg:col-span-2">
                    <div className="text-sm font-sans text-white/50 sticky top-24">
                      {session.time}
                    </div>
                  </div>

                  {/* Event card */}
                  <div className="lg:col-span-10">
                    {session.type === "keynote" && (
                      <div
                        className="bg-gradient-to-br from-white/8 to-white/[0.02] border border-white/10 rounded-2xl p-6 hover:border-[#E85520]/30 transition-all"
                      >
                        <div className="flex items-center justify-between mb-4 lg:hidden">
                          <span className="px-3 py-1 bg-[#E85520]/20 text-[#E85520] text-xs font-sans font-medium rounded-full">
                            {session.tag}
                          </span>
                          <p className="text-xs text-white/40">
                            {session.time}
                          </p>
                        </div>
                        <div className="flex items-start gap-4">
                          <img
                            src={session.speaker.image}
                            alt={session.speaker.name}
                            className="w-16 h-16 rounded-full object-cover shrink-0"
                          />
                          <div className="flex-1">
                            <h3 className="font-leadership text-xl md:text-2xl text-white mb-2">
                              {session.title}
                            </h3>
                            <p className="font-sans text-sm text-white/60 mb-3">
                              {session.description}
                            </p>
                            <p className="font-sans text-sm text-white/80">
                              <span className="block">{session.speaker.name}</span>
                              <span className="text-white/40 text-xs">{session.speaker.role}</span>
                            </p>
                          </div>
                          <span className="hidden lg:inline-block px-3 py-1 bg-[#E85520]/20 text-[#E85520] text-xs font-sans font-medium rounded-full">
                            {session.tag}
                          </span>
                        </div>
                      </div>
                    )}
                    {session.type === "break" && (
                      (() => {
                        const isLunch = session.title.toLowerCase().includes("lunch");
                        const isDinner = session.title.toLowerCase().includes("dinner");
                        const isRegistration = session.title.toLowerCase().includes("registration");
                        const start = parseTimeToMinutes(session.time);
                        const nextSession = currentSessions[index + 1];
                        const nextStart = nextSession ? parseTimeToMinutes(nextSession.time) : null;
                        const durationLabel =
                          !isRegistration && start !== null && nextStart !== null
                            ? formatDuration(nextStart - start)
                            : null;
                        if (isDinner) return (
                    <div
                      key={index}
                      className="relative overflow-hidden rounded-2xl border border-white/10 min-h-[180px] flex flex-col justify-end"
                    >
                      {/* Background image */}
                      <img
                        src="/uxindia-audience.jpg"
                        alt="Networking Dinner"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
                      {/* Content */}
                      <div className="relative z-10 p-6 flex items-end justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-[#E85520]/80 backdrop-blur-sm rounded-lg flex items-center justify-center shrink-0">
                            <img
                              src="/icons/lunch.svg"
                              alt="dinner"
                              className="w-6 h-6"
                              style={{ filter: "brightness(0) invert(1)" }}
                            />
                          </div>
                          <div>
                            <p className="font-leadership text-xl text-white">{session.title}</p>
                            <p className="font-sans text-xs text-white/60 mt-0.5">Join us for an evening of curated conversations and connections</p>
                          </div>
                        </div>
                        <p className="font-sans text-xs text-white/50 lg:hidden shrink-0">{session.time}</p>
                      </div>
                    </div>
                        );
                        return (
                    <div
                      key={index}
                      className="bg-gradient-to-r from-[#E85520]/10 to-transparent border border-white/10 rounded-xl p-4 flex items-center gap-4"
                    >
                      <div className="w-10 h-10 bg-[#E85520]/20 rounded-lg flex items-center justify-center shrink-0">
                        {isLunch || isDinner ? (
                          // Food plate icon for lunch/dinner
                          <img
                            src="/icons/lunch.svg"
                            alt="lunch"
                            className="w-6 h-6"
                            style={{ filter: "brightness(0) saturate(100%) invert(57%) sepia(71%) saturate(1241%) hue-rotate(7deg)" }}
                          />
                        ) : isRegistration ? (
                          // Ticket icon
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#E85520"
                            strokeWidth="2"
                          >
                            <path d="M2 9a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V9z" />
                            <path d="M9 5v14" />
                          </svg>
                        ) : (
                          // Default coffee icon
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#E85520"
                            strokeWidth="2"
                          >
                            <path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8zM6 1v3M10 1v3M14 1v3" />
                          </svg>
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 flex-wrap">
                          <p className="font-sans text-base text-white font-medium">
                            {session.title}
                          </p>
                          {durationLabel && (
                            <span className="px-2.5 py-0.5 bg-white/10 text-white/70 text-xs font-sans font-medium rounded-full">
                              {durationLabel}
                            </span>
                          )}
                        </div>
                        <p className="font-sans text-xs text-white/40 lg:hidden">
                          {session.time}
                        </p>
                      </div>
                    </div>
                        );
                      })()
                    )}
                    {session.type === "panel" && (
                      <div
                        className="bg-gradient-to-br from-white/8 to-white/[0.02] border border-white/10 rounded-2xl p-6 hover:border-[#E85520]/30 transition-all"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <span className="lg:hidden px-3 py-1 bg-white/10 text-white/70 text-xs font-sans font-medium rounded-full">
                            {session.tag}
                          </span>
                          <p className="lg:hidden text-xs text-white/40">
                            {session.time}
                          </p>
                        </div>
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="font-leadership text-xl md:text-2xl text-white mb-2">
                              {session.title}
                            </h3>
                            <p className="font-sans text-sm text-white/60">
                              {session.description}
                            </p>
                          </div>
                          <span className="hidden lg:inline-block px-3 py-1 bg-white/10 text-white/70 text-xs font-sans font-medium rounded-full shrink-0 ml-4">
                            {session.tag}
                          </span>
                        </div>
                        <div className="flex gap-3 mt-6">
                          {session.panelists.map((panelist, pIndex) => (
                            <img
                              key={pIndex}
                              src={panelist.image}
                              alt={panelist.name}
                              className="w-10 h-10 rounded-full object-cover border-2 border-white/10"
                              title={panelist.name}
                            />
                          ))}
                          {session.panelists.length < 5 && (
                            <div className="w-10 h-10 rounded-full border-2 border-dashed border-white/20 flex items-center justify-center">
                              <span className="text-white/30 text-xs">+{5 - session.panelists.length}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                    {session.type === "workshops" && (
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {session.workshops.map((workshop, wIndex) => (
                          <div
                            key={wIndex}
                            className="bg-gradient-to-br from-white/8 to-white/[0.02] border border-white/10 rounded-2xl p-6 hover:border-[#E85520]/30 transition-all"
                          >
                            <div className="flex items-center justify-between mb-3">
                              <p className="font-sans text-xs text-[#E85520] font-semibold uppercase tracking-wider">
                                {workshop.room}
                              </p>
                              <p className="lg:hidden text-xs text-white/40">
                                {session.time}
                              </p>
                            </div>
                            <h3 className="font-leadership text-lg md:text-xl text-white mb-3">
                              {workshop.title}
                            </h3>
                            <div className="flex items-start gap-3 mb-4">
                              <img
                                src={workshop.speaker.image}
                                alt={workshop.speaker.name}
                                className="w-10 h-10 rounded-full object-cover shrink-0"
                              />
                              <div className="flex-1 min-w-0">
                                <p className="font-sans text-sm text-white/80 font-medium">
                                  <span className="block">{workshop.speaker.name}</span>
                                  <span className="text-white/40 text-xs">{workshop.speaker.role}</span>
                                </p>
                              </div>
                            </div>
                            <p className="font-sans text-xs md:text-sm text-white/60 leading-relaxed">
                              {workshop.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                    {session.type === "sessions" && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {session.sessions.map((sess, sIndex) => (
                          <div
                            key={sIndex}
                            className={`bg-gradient-to-br from-white/8 to-white/[0.02] border border-white/10 rounded-2xl p-6 hover:border-[#E85520]/30 transition-all ${sess.duration ? 'md:row-span-2' : ''}`}
                          >
                            <div className="flex items-center justify-between mb-3">
                              <p className="font-sans text-xs text-[#E85520] font-semibold uppercase tracking-wider">
                                {sess.room}
                              </p>
                              <p className="lg:hidden text-xs text-white/40">
                                {session.time}
                              </p>
                            </div>
                            <h3 className="font-leadership text-lg md:text-xl text-white mb-3">
                              {sess.title}
                            </h3>
                            {sess.panelists ? (
                              // Multiple panelists
                              <>
                                <div className="flex gap-2 mb-4 flex-wrap">
                                  {sess.panelists.map((panelist, pIndex) => (
                                    <img
                                      key={pIndex}
                                      src={panelist.image}
                                      alt={panelist.name}
                                      className="w-10 h-10 rounded-full object-cover border-2 border-white/10"
                                      title={`${panelist.name} - ${panelist.role}`}
                                    />
                                  ))}
                                </div>
                                <div className="mb-4">
                                  <p className="font-sans text-xs text-white/60">
                                    {sess.panelists.length} VC Investors
                                  </p>
                                </div>
                              </>
                            ) : (
                              // Single speaker
                              <div className="flex items-start gap-3 mb-4">
                                <img
                                  src={sess.speaker.image}
                                  alt={sess.speaker.name}
                                  className="w-10 h-10 rounded-full object-cover shrink-0"
                                />
                                <div className="flex-1 min-w-0">
                                  <p className="font-sans text-sm text-white/80 font-medium">
                                    <span className="block">{sess.speaker.name}</span>
                                    <span className="text-white/40 text-xs">{sess.speaker.role}</span>
                                  </p>
                                </div>
                              </div>
                            )}
                            <p className="font-sans text-xs md:text-sm text-white/60 leading-relaxed">
                              {sess.description}
                            </p>
                            {sess.duration && (
                              <p className="font-sans text-xs text-white/40 mt-4 pt-4 border-t border-white/10">
                                Duration: {sess.duration}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                    {session.type === "grid-sessions" && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Left column - stacked sessions */}
                        <div className="grid grid-rows-2 gap-4">
                          {session.leftSessions.map((sess, sIndex) => (
                            <div
                              key={sIndex}
                              className="bg-gradient-to-br from-white/8 to-white/[0.02] border border-white/10 rounded-2xl p-6 hover:border-[#E85520]/30 transition-all"
                            >
                              <div className="flex items-center justify-between mb-3">
                                <p className="font-sans text-xs text-[#E85520] font-semibold uppercase tracking-wider">
                                  {sess.room}
                                </p>
                                <p className="font-sans text-xs text-white/40">
                                  {sess.time}
                                </p>
                              </div>
                              <h3 className="font-leadership text-lg md:text-xl text-white mb-3">
                                {sess.title}
                              </h3>
                              <div className="flex items-start gap-3 mb-4">
                                <img
                                  src={sess.speaker.image}
                                  alt={sess.speaker.name}
                                  className="w-10 h-10 rounded-full object-cover shrink-0"
                                />
                                <div className="flex-1 min-w-0">
                                  <p className="font-sans text-sm text-white/80 font-medium">
                                    <span className="block">{sess.speaker.name}</span>
                                    <span className="text-white/40 text-xs">{sess.speaker.role}</span>
                                  </p>
                                </div>
                              </div>
                              <p className="font-sans text-xs md:text-sm text-white/60 leading-relaxed">
                                {sess.description}
                              </p>
                            </div>
                          ))}
                        </div>
                        {/* Right column - spanning full height */}
                        <div className="bg-gradient-to-br from-white/8 to-white/[0.02] border border-white/10 rounded-2xl p-6 hover:border-[#E85520]/30 transition-all h-full flex flex-col">
                          <div className="flex items-center justify-between mb-3">
                            <p className="font-sans text-xs text-[#E85520] font-semibold uppercase tracking-wider">
                              {session.rightSession.room}
                            </p>
                            <p className="lg:hidden text-xs text-white/40">
                              {session.time}
                            </p>
                          </div>
                          <h3 className="font-leadership text-lg md:text-xl text-white mb-3">
                            {session.rightSession.title}
                          </h3>
                          <p className="font-sans text-xs md:text-sm text-white/60 leading-relaxed mb-4">
                            {session.rightSession.description}
                          </p>
                          <div className="flex-1">
                            <p className="font-sans text-xs text-white/40 uppercase tracking-wider mb-3">
                              VC Investors
                            </p>
                            <div className="space-y-3">
                              {session.rightSession.panelists.map((panelist, pIndex) => (
                                <div key={pIndex} className="flex items-center gap-3">
                                  <img
                                    src={panelist.image}
                                    alt={panelist.name}
                                    className="w-8 h-8 rounded-full object-cover border border-white/10"
                                  />
                                  <div>
                                    <p className="font-sans text-sm text-white/80">{panelist.name}</p>
                                    <p className="font-sans text-xs text-white/40">{panelist.role}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}

            {/* Day ends card */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="hidden lg:block lg:col-span-2" />
              <div className="lg:col-span-10">
                <div className="border border-dashed border-white/15 rounded-xl py-5 px-6 flex items-center justify-center gap-3 text-center">
                  <span className="h-px w-8 bg-white/15" />
                  <p className="font-sans text-sm text-white/50">
                    {activeDayLabel} ends here
                  </p>
                  <span className="h-px w-8 bg-white/15" />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom day navigation */}
          <div className="mt-12 pt-8 border-t border-white/10 flex items-center justify-between gap-4">
            {prevDay ? (
              <button
                onClick={() => {
                  setActiveDay(prevDay.id);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="group flex items-center gap-3 text-left cursor-pointer max-w-[45%]"
              >
                <span className="flex items-center justify-center w-9 h-9 rounded-full bg-white/5 group-hover:bg-[#E85520] transition-colors shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </span>
                <span className="min-w-0">
                  <span className="block font-sans text-[11px] text-white/40 uppercase tracking-wider">Previous</span>
                  <span className="block font-sans text-sm text-white/80 truncate group-hover:text-white transition-colors">{prevDay.label}</span>
                </span>
              </button>
            ) : (
              <div />
            )}

            {nextDay ? (
              <button
                onClick={() => {
                  setActiveDay(nextDay.id);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="group flex items-center gap-3 text-right cursor-pointer max-w-[45%] ml-auto"
              >
                <span className="min-w-0">
                  <span className="block font-sans text-[11px] text-white/40 uppercase tracking-wider">Next</span>
                  <span className="block font-sans text-sm text-white/80 truncate group-hover:text-white transition-colors">{nextDay.label}</span>
                </span>
                <span className="flex items-center justify-center w-9 h-9 rounded-full bg-white/5 group-hover:bg-[#E85520] transition-colors shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </span>
              </button>
            ) : (
              <div />
            )}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
