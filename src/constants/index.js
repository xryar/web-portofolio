export const myProjects = [
  {
    id: 1,
    title: "Golang Online Soccer Field Microservice Backend System",
    description:
      "A microservices-based online futsal field booking system built with Golang, Kafka, and Midtrans. Each service operates independently with its own responsibility to ensure scalability, maintainability, and efficient distributed communication.",
    subDescription: [
       "Developed a distributed system using the microservices architecture pattern with independent services for users, fields, orders, and payments.",
       "Implemented service-to-service communication using Apache Kafka to handle booking events and ensure asynchronous, reliable message processing.",
       "Built multiple backend services in Golang, each responsible for a specific domain (User, Field, Payment, and Order Management).",
       "Integrated Midtrans API for secure and seamless online payment processing.",
       "Designed services to be horizontally scalable, maintainable, and easy to extend for future features.",
       "Applied clean architecture principles, domain separation, and modular repository patterns across services."
    ],
    href: "https://github.com/xryar/golang-online-soccer-field",
    logo: "",
    image: "/assets/projects/golang-online-soccer-field-flow.png",
    tags: [
      {
        id: 1,
        name: "Go",
        path: "/assets/logos/go.svg",
      },
      {
        id: 2,
        name: "Postgre SQL",
        path: "/assets/logos/postgresql.svg",
      },
      {
        id: 3,
        name: "Google Cloud",
        path: "/assets/logos/googlecloud.svg",
      },
      {
        id: 4,
        name: "Apache Kafka",
        path: "/assets/logos/kafka.png",
      },
    ],
  },
  {
    id: 2,
    title: "E-Commerce Backend Service with Golang GRPC",
    description:
      "A high-performance e-commerce backend built using Golang with a gRPC-based architecture. The system includes product, user, cart, and order management, fully integrated with Supabase PostgreSQL and Xendit Payment Gateway for secure and seamless online transactions.",
    subDescription: [
      "Built a monolithic gRPC backend using Golang for high performance and strict type safety.",
      "Implemented product, user authentication, cart, and order modules.",
      "Integrated Xendit API for secure payment flows.",
      "Used Supabase PostgreSQL with optimized schema design.",
      "Secured all gRPC communication with JWT authentication.",
      "Designed Protocol Buffer contracts for clean and consistent APIs."
    ],
    href: "https://github.com/xryar/clean-furniture-backend-service",
    logo: "",
    image: "",
    tags: [
      {
        id: 1,
        name: "Go",
        path: "/assets/logos/go.svg",
      },
      {
        id: 2,
        name: "Supabase",
        path: "/assets/logos/supabase.svg",
      },
      {
        id: 3,
        name: "Postgre SQL",
        path: "/assets/logos/postgresql.svg",
      },
      {
        id: 4,
        name: "gRPC",
        path: "/assets/logos/grpc.svg",
      },
    ],
  },
  {
    id: 3,
    title: "Tabir (Tangan Bicara)",
    description:
      "An AI-driven web application that translates sign language into real-time text using Computer Vision and Deep Learning. I developed the backend system using Hapi.js to handle authentication, data management, and real-time prediction integration.",
    subDescription: [
      "Built a secure backend REST API using Hapi.js with modular architecture.",
      "Implemented JWT authentication and refresh token workflows.",
      "Integrated PostgreSQL for storing user and prediction data.",
      "Supported real-time AI inference from the frontend (TensorFlow.js).",
      "Collaborated with AI and frontend teams to align API flows and improve system reliability."
    ],
    href: "https://github.com/CC25CF093",
    logo: "",
    image: "/assets/projects/tabir-homepage.png",
    tags: [
      {
        id: 1,
        name: "HTML",
        path: "/assets/logos/html5.svg",
      },
      {
        id: 2,
        name: "JavaScripts",
        path: "/assets/logos/javascript.svg",
      },
      {
        id: 3,
        name: "Tailwind CSS",
        path: "/assets/logos/tailwindcss.svg",
      },
      {
        id: 4,
        name: "Hapi.js",
        path: "/assets/logos/hapi.svg",
      },
    ],
  },
  {
    id: 4,
    title: "InventarisHub",
    description:
      "InventarisHub is an Android-based inventory management application designed to help users efficiently manage items, track stock, and view detailed usage history. The app is built with modern Android development tools and follows clean architectural patterns to ensure scalability and maintainability.",
    subDescription: [
      "Built using Kotlin with MVVM and LiveData for reactive and maintainable UI logic.",
      "Implemented Navigation Component with a single-activity multi-fragment architecture.",
      "Integrated REST API via Retrofit and Coroutines for efficient asynchronous data handling.",
      "Used Glide for fast and cached image loading.",
      "Designed features for item input, stock tracking, and historical usage insights."
    ],
    href: "https://github.com/xryar/Inventaris-App",
    logo: "",
    image: "",
    tags: [
      {
        id: 1,
        name: "Kotlin",
        path: "/assets/logos/kotlin.svg",
      },
      {
        id: 2,
        name: "Android App",
        path: "/assets/logos/android.svg",
      },
    ],
  },
  {
    id: 5,
    title: "Gebung - Personal Finance App",
    description:
      "A simple and intuitive finance app for tracking expenses, viewing history, receiving spending limit alerts, and generating AI-based expense predictions.",
    subDescription: [
      "Built with Room Database for local offline transaction storage.",
      "Implemented MVVM + LiveData for clean and maintainable architecture.",
      "Used Coroutines for smooth background processing.",
      "Integrated TensorFlow Lite to generate spending predictions.",
      "Visualized data with MPAndroidChart for better financial insights."
    ],
    href: "https://github.com/xryar/Gebung",
    logo: "",
    image: "/assets/projects/gebung.png",
    tags: [
      {
        id: 1,
        name: "Kotlin",
        path: "/assets/logos/kotlin.svg",
      },
      {
        id: 2,
        name: "Android App",
        path: "/assets/logos/android.svg",
      },
      {
        id: 3,
        name: "TFLite",
        path: "/assets/logos/tflite.svg",
      },
      {
        id: 4,
        name: "Firebase",
        path: "/assets/logos/firebase.svg",
      },
    ],
  },
  {
    id: 6,
    title: "Online Learning Platform",
    description:
      "A web application that allows users to enroll in courses, watch video lectures, and take quizzes.",
    subDescription: [
      "Built using Blazor WebAssembly for a seamless SPA experience.",
      "Implemented video streaming with Azure Media Services.",
      "Added a quiz system with dynamic question generation and real-time grading.",
      "Integrated Stripe API for secure payment processing.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/elearning.jpg",
    tags: [
      {
        id: 1,
        name: "Blazor",
        path: "/assets/logos/blazor.svg",
      },
      {
        id: 2,
        name: "Azure",
        path: "/assets/logos/azure.svg",
      },
      {
        id: 3,
        name: "Stripe",
        path: "/assets/logos/stripe.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
];

export const mySocials = [
  {
    name: "Github",
    href: "https://github.com/xryar",
    icon: "/assets/socials/github.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/aryarizkiandaru/",
    icon: "/assets/socials/linkedIn.svg",
  },
];

export const experiences = [
  {
    title: "Software Developer",
    job: "Security & Defense Projects",
    date: "2021-2023",
    contents: [
      "Enhanced application security and developed new features, adhering to standards set by the Passive Defense Organization and National Cyberspace Center.",
      "Designed and implemented intuitive map interfaces using MapsUI, enhancing user experience and enabling seamless interactive map integration.",
      "Developed applications for industrial automation, leveraging C++ and the Fatek API for PLC communication.",
      "Enhanced responsiveness and usability of applications using Windows Forms and WPF frameworks.",
      "Executed XML to SVG conversions using X-DOM, ensuring dynamic and efficient data visualization.",
    ],
  },
  {
    title: "Back-End Developer",
    job: "Car Manufacture",
    date: "2023-2024",
    contents: [
      "Engineered systems for large-scale data ingestion and analysis, ensuring efficient data processing and storage.",
      "Developed back-end systems enabling vehicle-to-cloud communication for telemetry, diagnostics, and remote control:",
      "✅ Implemented secure APIs, following ISO 26262 automotive safety standards.",
      "✅ Ensured data privacy for customers and partners through industry-compliant protocols.",
      "✅ Delivered remote features like over-the-air updates, real-time tracking, and remote start capabilities.",
    ],
  },
  {
    title: "Freelance Developer",
    job: "Self-Employed",
    date: "2025-Present",
    contents: [
      "Created a personal portfolio using Three.js, React, Vite, and WebAPI to showcase technical expertise.",
      "Continuously enhancing technical skills and expanding expertise in modern web development and back-end technologies.",
    ],
  },
];

export const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Dave",
    username: "@dave",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];