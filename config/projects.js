export default {
  "magpie-literacy": {
    textColor: "black",
    desc: `For Magpie Literacy, a project was undertaken to revolutionize their cloud infrastructure, transitioning to a fully integrated and optimized AWS environment. This initiative not only involved migrating to AWS but also a comprehensive restructuring to sunset obsolete accounts and realign the AWS Organization structure with the company’s operational framework. The meticulous migration and resource redeployment process were expertly managed through Terraform, ensuring a seamless transition with zero data or configuration loss.
    </br>
    </br>
A critical aspect of this transformation was the refactoring of AWS alongside the integration of supporting tools like Datadog. This ensured enhanced operability and maintained the integrity of the system’s monitoring capabilities. The focus on ensuring a smooth transition was paramount, with special attention given to preserving data integrity and system configurations.
</br>
</br>
In the midst of this migration, I leveraged the opportunity to implement cost optimization strategies based on usage metrics, further enhancing the value of the new infrastructure. Additionally, a thorough security and resiliency audit was conducted, ensuring that the new AWS environment not only met but exceeded industry standards for security and reliability.
</br>
</br>
The integration of the new AWS build with the organization’s Slack and monitoring systems marked a significant advancement in operational efficiency and communication. To support this transformation, I authored comprehensive documentation, detailing the new system architecture, operational procedures, and best practices. This ensured that the transition was not only technical but also knowledge-driven, empowering the team with the understanding and tools necessary for ongoing success.
</br>
</br>
Finally, the project culminated in the safe deletion and suspension of old accounts and resources using Terraform, closing the chapter on the old infrastructure while ushering in a new era of cloud computing excellence for Magpie Literacy. This project stands as a testament to the power of strategic planning, technical expertise, and the seamless integration of cutting-edge technology to drive organizational success.`,
    title: "Magpie Literacy",
    stack: ["AWS", "Terraform", "Datadog"],
    length: "long",
    sector: "EdTech",
    year: "2024",
    to: "/projects/magpie-literacy",
    next: "/projects/poesie-veneziane",
    prev: "/projects/roam", 
    liveLink: "https://learn.magpie.org/",
    architecture: {
      images: [
        { src: "progolf_architecture.jpg", alt: "Architecture Diagram" },
      ],
    },
  },
  "poesie-veneziane": {
    textColor: "black",
    desc: `For Poesie Veneziane, a luxury Italian footwear brand, our engagement began in 2024 with the management of their Shopify platform. We implemented various design enhancements and UI improvements, such as lazy loading, to optimize page load times and provide a seamless shopping experience. Additionally, we leveraged cloud-based solutions to introduce a range of automations, including a streamlined return process, custom discount code generation for birthdays, and targeted marketing initiatives.
    </br>
    </br>
    Ongoing development support has been a cornerstone of this project, allowing us to continually refine and enhance the platform’s performance and functionality. With a focus on operational efficiency and customer engagement, we are committed to supporting the brand’s growth in the luxury e-commerce space.
    </br>
    </br>
    Looking ahead, we are excited to continue collaborating with Poesie Veneziane, exploring new ways to integrate cutting-edge technology and automation to elevate their brand in the digital marketplace.`,
    title: "Poesie Veneziane",
    stack: ["Shopify", "AWS", "JavaScript"],
    length: "medium",
    sector: "Luxury E-commerce",
    year: "2024",
    to: "/projects/poesie-veneziane",
    next: "/projects/kalloghlian-myers",
    prev: "/projects/magpie-literacy",
    liveLink: "https://poesieveneziane.com/",
    architecture: {
      images: [
        { src: "poesie_architecture.jpg", alt: "Shopify Architecture Diagram" },
      ],
    },
  },
  "kalloghlian-myers": {
    textColor: "black",
    desc: `For the project with Kalloghlian Myers LLP, one of Toronto’s premier class-action law firms, I had the unique opportunity to pioneer the integration of AI into legal operations. The objective was ambitious: to develop a localized firm chatbot, leveraging AI to digest comprehensive case information, enabling the client and their team to interact and query the dataset on a case-by-case basis.
</br>
</br>
To achieve this, we harnessed the power of AWS, Slack, and Langchain to construct an event-based architecture that melded seamlessly into the client’s Slack ecosystem. This innovation allowed for app-based prompts within various channels, offering a revolutionary way to access and interact with case data directly from the familiar interface of Slack.
</br>
</br>
One of the primary challenges we faced was managing long call times, a limitation compounded by the need to work within restricted context windows. Additionally, the sensitive nature of case data demanded stringent security measures to ensure confidentiality and compliance with legal standards. Keeping pace with the rapidly evolving AI landscape also posed a significant challenge, requiring us to be agile and forward-thinking in our approach.
</br>
</br>
Despite these hurdles, the pilot project exceeded our expectations. It served as a powerful demonstration of how AI can enhance efficiency and decision-making in legal practices. While the project was exploratory in nature, the insights gained have laid a solid foundation for future developments. We are excited about the potential to continue creating sleek application interfaces that connect and support corporate teams, all while safely leveraging the power of artificial intelligence to streamline operations and enhance service delivery.`,
    title: "Kalloghlian Myers",
    stack: ["AWS", "Slack", "Langchain"],
    length: "long",
    sector: "Legal",
    year: "2023",
    to: "/projects/kalloghlian-myers",
    next: "/projects/manifest-ai",
    prev: "/projects/poesie-veneziane",
    liveLink: "https://www.kalloghlianmyers.com/",
    architecture: {
      images: [
        { src: "progolf_architecture.jpg", alt: "Architecture Diagram" },
      ],
    },
  },
  "manifest-ai": {
    textColor: "black",
    desc: `The Manifest-AI project for Modern Mantra was an ambitious exploration into the realm of generative AI, particularly focused on creating high-resolution “collages” through a unique, iterative approach. In partnership with an AI engineer, we capitalized on the robust capabilities of GPU-equipped EC2 instances, setting the foundation for a pioneering prompt-based generative image pipeline.
</br>
</br>
Central to achieving a truly decoupled service architecture for this project were several AWS services that worked in concert to manage and process long-running jobs, which could take 20-30 minutes for a single asset. Amazon SQS (Simple Queue Service) was integral to managing communication between distributed components of our architecture, ensuring that messages regarding job status and completion were reliably transmitted. Amazon SES (Simple Email Service) facilitated notifications and updates to stakeholders, providing alerts on job progress and completion.
</br>
</br>
Amazon S3 (Simple Storage Service) served as the backbone for storing input data and the generated high-resolution images, enabling scalable and secure access to assets throughout the processing pipeline. The deployment of these services, alongside our primary EC2 instances, exemplified a sophisticated approach to handling intensive computational tasks. This architecture allowed for scalability, reliability, and efficiency, ensuring that even the most resource-intensive jobs were completed smoothly without overburdening any single component of the system.
</br>
</br>
Although the project concluded in the pilot phase due to external factors, it underscored the potential of combining cloud computing with AI to push the boundaries of creative image generation. This initiative was a testament to the power of leveraging advanced AWS services in concert to solve complex problems, providing a scalable and flexible infrastructure capable of supporting innovative AI applications.`,
    title: "Manifest AI",
    stack: ["AWS", "Stable Diffusion", "Typescript"],
    length: "long",
    sector: "AI Art",
    year: "2023",
    to: "/projects/manifest-ai",
    next: "/projects/reading-reimagined",
    prev: "/projects/kalloghlian-myers",
    wip: false,
  },
  "reading-reimagined": {
    textColor: "black",
    desc: `On the Reading Reimagined project, I played a pivotal role in combating childhood illiteracy by focusing on solution design, AWS management, development pipeline automation, security implementation, product documentation, and vendor coordination.<br/>
<br/>
As a core team member, I crafted the technical solution for the platform's RFPs by collaborating with other team members and leveraging my expertise in AWS to ensure scalability, reliability, and cost-effectiveness.<br/>
<br/>
I streamlined the development process by automating the build, test, and deployment stages, enabling rapid and efficient iteration. I also prioritized security by establishing baselines, conducting audits, and implementing industry-standard measures.<br/>
<br/>
To promote clarity and understanding, I authored comprehensive user guides, technical documentation, and training materials. Additionally, I managed vendor relationships, negotiated contracts, and ensured alignment with project goals, fostering success for Reading Reimagined.`,
    title: "Reading Reimagined",
    stack: ["AWS", "Terraform", "Lucidchart"],
    length: "short",
    sector: "EdTech",
    year: "2023",
    to: "/projects/reading-reimagined",
    liveLink: "https://aerdf.org/programs/reading-reimagined/",
    next: "/projects/aeyde",
    prev: "/projects/manifest-ai",
    architecture: {
      images: [
        { src: "progolf_architecture.jpg", alt: "Architecture Diagram" },
      ],
    },
  },
  aeyde: {
    textColor: "black",
    desc: `I had the privilege of working with Aeyde, a high-end footwear and accessory company based in Berlin. My role involved configuring their Shopify Plus store and designing a cloud-native "Back In Stock" service that allowed customers to enroll in product-specific waitlists and be notified when items were back in stock. This project involved several technologies, including AWS, Typescript, the storefront API, data analytics tools such as Looker and Panoply, and a Shopify app.
<br/>
<br/>
The project started with customizations of the Shopify Plus store, which included theme and navigation revisions. I worked with the client to ensure that their store met their business requirements and provided a seamless customer experience.
<br/>
<br/>
Next, I designed the "Back In Stock" service, which was a custom solution that allowed customers to enroll in waitlists for specific products and receive notifications when the products were back in stock. The service was built using cloud-native technologies, including AWS and Typescript, and integrated with the storefront API to manage customer waitlist enrollments and notifications.
<br/>
<br/>
To provide analytics on customer behavior and inventory management, I integrated the service data analytics tools such as Looker and Panoply. This allowed the client to monitor customer waitlist enrollments, track inventory levels, and make data-driven decisions.
<br/>
<br/>
Finally, I developed a companion Typescript app that integrated with the "Back In Stock" service, providing a seamless experience for customers to enroll in waitlists directly from the Shopify store. The app also allowed the client to manage waitlist enrollments and notifications through the Shopify admin panel.
<br/>
<br/>
Overall, working with Aeyde was an exciting project that challenged me to apply my Shopify development skills to build a cloud-native solution that met the client's business requirements while providing an excellent customer experience. The project allowed me to showcase my expertise in Shopify Plus store configuration and complete solution design of a cloud-native service. Reviving the broken system and creating a future-proof solution was a rewarding experience.`,
    title: "Aeyde",
    stack: ["AWS", "Shopify Plus", "Typescript"],
    length: "short",
    sector: "Fashion",
    year: "2023",
    to: "/projects/aeyde",
    liveLink: "https://aeyde.com/",
    next: "/projects/halotrade",
    prev: "/projects/reading-reimagined",
    measurables: {},
    architecture: {
      images: [
        { src: "progolf_architecture.jpg", alt: "Architecture Diagram" },
      ],
    },
  },
  halotrade: {
    textColor: "black",
    desc: `I had the opportunity to lead the development of Halotrade, an enterprise-grade supply chain application. As the lead developer, I was personally responsible for the infrastructure planning, full-stack development, and DevOps of the application. This project was particularly challenging as it required me to apply my cloud engineering skills in a globally distributed environment, using Microsoft Azure.
<br/>
<br/>
As the infrastructure planning lead, I had to make decisions on the cloud architecture, selecting appropriate services, and configuring the virtual machines, network, and storage. I had to ensure that the application was designed with scalability, availability, and performance in mind, and that it was optimized for cost-effectiveness.
<br/>
<br/>
In terms of full-stack development, I had to work on building the front-end, back-end, and database layers of the application. I collaborated with the product manager to ensure that the application met the business requirements, and that it was user-friendly and intuitive.
<br/>
<br/>
Finally, as the DevOps lead, I had to ensure that the application was built using best practices, including continuous integration and delivery (CI/CD) pipelines, automated testing, and monitoring. I had to ensure that the application was secure, using appropriate security baselines, including access controls, encryption, and network security.
<br/>
<br/>
Overall, the Halotrade project challenged me to apply my cloud engineering skills to build an enterprise-grade application that met the business requirements while optimizing for cost and performance. The experience of working with Microsoft Azure in a globally distributed environment has expanded my cloud engineering expertise and prepared me for future cloud engineering projects.`,
    title: "Halotrade",
    stack: ["Azure", "Serverless", "Domain Driven Design"],
    length: "short",
    sector: "Finance",
    year: "2022",
    to: "/projects/halotrade",
    prev: "/projects/aeyde",
    liveLink: "https://halotrade.io/",
    next: "/projects/emkfit",
  },
  emkfit: {
    textColor: "black",
    desc: `I had the opportunity to work with Emkfit, a talented fitness coach, to help her build an online store to reach her customers. My work for this project involved the complete Shopify build, from theme sourcing to store configuration, liquid templating, testing, and deployment.
<br/>
<br/>
To further enhance the customer experience, I leveraged the cloud to develop a custom hosted video solution. This solution allowed Emkfit to create and host her own video content, providing her customers with an immersive fitness experience. The solution was seamlessly integrated into the Shopify store, making it easy for customers to access and view the content.
<br/>
<br/>
In addition to the custom hosted video solution, I used Klaviyo for marketing campaigns and extended analytics. Klaviyo is a powerful marketing platform that helped Emkfit to create and execute targeted marketing campaigns. The extended analytics provided by Klaviyo allowed Emkfit to track the effectiveness of her marketing campaigns, helping her to make data-driven decisions to improve her business.
<br/>
<br/>
The Shopify store I developed for Emkfit provided a seamless customer experience and showcased her brand and products. The added functionality of the custom hosted video solution and the use of Klaviyo for marketing campaigns and extended analytics helped Emkfit to improve her business and reach more customers.`,
    title: "Emkfit",
    stack: ["Shopify", "HTML", "CSS", "JS"],
    length: "tall",
    sector: "Fitness",
    year: "2022",
    to: "/projects/emkfit",
    liveLink: "https://www.emkfit.ca",
    next: "/projects/progolf-berlin",
    prev: "/projects/halotrade",
  },
  "progolf-berlin": {
    textColor: "black",
    desc: `I had the opportunity to work with Pro Golf Berlin, a leading Golf Simulator company based in Berlin, to help them streamline their daily operations and consolidate their systems. My work for this project involved configuring their Shopify store, custom theme configuration, and developing an integrated online booking service.
<br/>
<br/>
The challenge for the client was the inefficiency caused by in-person cash transactions, which slowed down their business. The solution I designed and developed enabled customers to book and pay instantly online, eliminating the need for in-person transactions. This streamlined their daily operations and made it easier for customers to book sessions, saving time for both the client and their customers.
<br/>
<br/>
The online booking service I developed included unique logic for "no shows" and customer cancellations, which helped the client to manage their bookings efficiently. Additionally, the integration of the online booking service allowed the client to sell their merchandise alongside the bookings, which was not possible before. This added revenue stream was an added benefit for the client and helped to improve their bottom line.`,
    title: "ProGolf Berlin",
    stack: ["Shopify", "Javascript", "CSS"],
    length: "short",
    sector: "Golf",
    year: "2022",
    to: "/projects/progolf-berin",
    prev: "/projects/emkfit",
    liveLink: "https://progolfberlin.com/",
    next: "/projects/skin-kravings",
    measurables: {},
    architecture: {
      images: [
        { src: "progolf_architecture.jpg", alt: "Architecture Diagram" },
      ],
    },
  },
  "skin-kravings": {
    textColor: "black",
    desc: `As a Shopify developer, I had the pleasure of working with Skin Kravings, an all-natural curated cosmetics company. My role was to configure their Shopify Plus store, including store migration, app configuration, custom theme changes, and providing general guidance to the client.
<br/>
<br/>
The project started with configuring the Shopify Plus store, which included setting up the necessary features, including payment and shipping options, product pages, and collections. I worked with the client to ensure that their store met their business requirements and provided a seamless customer experience.
<br/>
<br/>
Next, I migrated the client's existing store to Shopify Plus, ensuring that all data was transferred smoothly and without any data loss. I tested the migrated store to ensure that everything was working correctly, including product images, descriptions, and pricing.
<br/>
<br/>
I also configured several apps to improve the client's store, including email marketing, customer reviews, and social media integrations. I ensured that the apps were compatible with the client's store and that they added value to the customer experience.
<br/>
<br/>
I worked on several custom theme changes, including optimizing the theme for page speed, adding custom banners and images, and customizing the checkout process. I ensured that the changes were implemented seamlessly and that they did not negatively impact the customer experience.
<br/>
<br/>
Finally, I provided general guidance to the client on best practices for managing their Shopify Plus store, including optimizing the store for search engines, managing inventory, and handling customer support.
`,
    title: "Skin Kravings",
    stack: ["Shopify Plus", "Javascript", "CSS"],
    length: "short",
    sector: "Beauty",
    year: "2022",
    to: "/projects/skin-kravings",
    prev: "/projects/progolf-berin",
    next: "/projects/5oz",
    liveLink: "https://cleyobeauty.com/",
  },
  "5oz": {
    textColor: "black",
    desc: `Provided Full-Stack refinements onto an existing cargo website. Included web and mobile responsiveness changes, and the addition of a Microsoft Azure hosted serverless newsletter sign up form.`,
    title: "5oz",
    stack: ["Cargo", "Azure", "CSS", "JS"],
    img: "5oz_prev.jpg",
    length: "short",
    sector: "Art",
    year: "2022",
    to: "/projects/5oz",
    next: "/projects/spectral",
    prev: "/projects/skin-kravings",
    liveLink: "https://www.5oz.com/",
  },
  spectral: {
    textColor: "black",
    desc: `A lightweight landing page build for a crypto company providing protocol for programmable creditworthiness. I implemented the provided figma design, ensuring responsiveness/accessibility, and added a functional newsletter form with a serverless backend.`,
    stack: ["HTML", "CSS", "JS", "Azure"],
    title: "Spectral",
    img: "spectral_prev.jpg",
    length: "tall",
    sector: "Crypto",
    year: "2021",
    to: "/projects/spectral",
    prev: "/projects/5oz",
    next: "/projects/roam",
    liveLink: "https://spectral.finance",
  },
  roam: {
    textColor: "black",
    desc: `As the lead developer of an MVP Android build for a security-focused travel/document sharing application, I was responsible for infrastructure planning, full-stack development, and DevOps. Leveraging cloud technologies, specifically Google Cloud Platform (GCP) and Firebase, we were able to develop and deploy a secure and efficient application.
<br/>
<br/>
My work involved extensive planning of the application infrastructure, ensuring it was scalable and met the security requirements of the project. I then used GCP and Firebase to build the application, which included features such as Firebase Authentication, Serverless Functions, and Storage. These technologies allowed us to develop a secure and scalable application that was capable of handling the demands of our users.
<br/>
<br/>
Firebase Authentication was used to authenticate users, ensuring only authorized individuals could access the application. Serverless Functions were used to handle user requests, providing a seamless experience while reducing server load. Firebase Storage was used to store and manage user documents securely.
<br/>
<br/>
The result was a highly secure and efficient application that was deployed to testers. The use of cloud technologies, specifically GCP and Firebase, enabled us to create an MVP build that met the demands of the project while also providing a scalable platform for future development.`,
    title: "Roam",
    stack: ["GCP", "Android", "Firebase"],
    img: "roam_prev.jpg",
    length: "tall",
    sector: "Travel",
    year: "2021",
    to: "/projects/roam",
    next: "/projects/magpie-literacy",
    prev: "/projects/spectral",
    liveLink:
      "https://play.google.com/store/apps/details?id=org.nativescript.roam&ah=a2IKKW6jUgH9cYUv2x3-Bc2J44I",
  },
  // streamhub: {
  //   textColor: "black",
  //   desc: `My culminating project from the Le Wagon Full-Stack Development Boot Camp in Berlin. With a focus on intuitive UI (1-click login), and
  // a clean, refined design, the app consolidated all
  // of a users followed streamers from Twitch, Mixer,
  // and Youtube Gaming into one hub.
  // .`,
  //   title: "StreamHub",
  //   stack: ["Ruby", "Rails", "JS"],
  //   img: "streamHub_prev.jpg",
  //   length: "short",
  //   sector: "Video",
  //   year: "2020",
  //   to: "/projects/streamhub",
  // },
};
