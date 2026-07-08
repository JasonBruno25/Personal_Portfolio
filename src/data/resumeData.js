// Please make sure you organize it via latest to oldest

// ensure consistencies
// resume uses: Company, Location, Position, Time Period, then information(which we can use as bullets)
// out line should look like:
// [Company, Location]
// [Position, Time]
export const resumeExperiences = [
    {
        company: "Virginia Tech",
        location: "Blacksburg, VA",
        position: "Research Assistant | LEWAS Labs",
        period: "May 2019 - August 2019",
        bullets: [
            "Developed Python workflows to validate 10,000+ sensor records, ensuring accuracy and reliability of environmental data",
            "Automated real-time data transmission using Arduino-to-Python data pipelines, improving processing efficiency by 25%",
            "Built interactive ArcGIS dashboards to visualize system outputs, enabling faster interpretation and technical decision-making"
        ]
    },
    {
        company: "Fairfax County Park Authority",
        location: "Reston, VA",
        position: "Manager on Duty",
        period: "May 2017 - May 2019",
        bullets: [
            "Supervised 250+ staff across rotating shifts, ensuring safety, compliance, and efficient daily operations",
            "Managed facility operations, scheduling, and financial reporting in a high-traffic public environment",
            "Improved resource allocation strategies, reducing operational downtime by 15% through planning optimization"
        ]
    },
    {
        company: "Latin Tax Inc",
        location: "Alexandria, VA",
        position: "Technician Assistant",
        period: "January 2017 - May 2017",
        bullets: [
            "Provided hands-on technical support for Windows systems and Drake Tax software in a fast-paced production environment",
            "Installed, configured, and maintained secure software systems with updates, patching, and malware prevention protocols",
            "Documented recurring system issues, resolutions, and changes, improving troubleshooting efficiency and knowledge sharing"
        ]
    },
    /* {
        company: "COMPANY",
        location: "LOCATION",
        position: "POSITION",
        period: "PERIOD-PERIOD",
        bullets: [
            "BULLET POINT 1",
            "BULLET POINT 2"
        ]
    } */
];

// projects contain: Class/Organization, Time/Period, Title -- i am not sure how to properly structure this but Gemini suggested:
// [Title, Context (Org/Class)]
// [Key Tech, Date]
export const resumeProjects = [
    {
        title: "Automated Graduate Program Discovery Platform",
        context: "Virginia Tech Capstone Project",
        tech: "Python, Flask, PostgreSQL, AWS EC2, BeautifulSoup, REST APIs",
        date: "August 2025 - December 2025",
        description: "Built an end-to-end data pipeline using Python, PostgreSQL, and Flask to automate graduate program data collection. Developed scalable web scrapers with BeautifulSoup and Requests, achieving 95% accuracy across validation runs. Designed RESTful API endpoints to support dynamic querying, filtering, and retrieval of structured data. Deployed application on AWS EC2, configuring backend services and ensuring reliable cloud-based access."
    },
    {
        title: "Meal Planner",
        context: "Cloud Software Development Team Project",
        tech: "Java, Jakarta EE, JSF, PrimeFaces, MySQL, AWS EC2, REST APIs",
        date: "November 2025 - December 2025",
        description: "Collaborated in a 5-person Agile team to develop a cloud-based meal planning and nutrition tracking web application for college students. Integrated Kroger and TheMealDB APIs to support recipe discovery, ingredient pricing, nutritional analysis, and dynamic meal cost calculation. Implemented secure user authentication, CRUD database operations, multilingual support, PDF/CSV export functionality, and automated email notification using Jakarta EE and MySQL. Deployed the application on AWS EC2 with responsive UI components, REST-based integrations, and secure password hashing for scalable cloud accessibility."
    },
    {
        title: "Google Books Explorer",
        context: "Cloud Software Development",
        tech: "Java, Jakarta EE, PrimeFaces, EJB, MySQL, AWS EC2, Google Books API",
        date: "October 2025",
        description: "Built and deployed a full-stack Jakarta EE web application on AWS EC2 integrating the Google Books API with a persistent MySQL database. Created two session-scoped controllers: one for API search (title/author, sorting, pagination) and another for local database operations with 7 advanced filter types (date ranges, page counts, text fields). Used EJB for transaction management and PrimeFaces for rich UI components. Optimized database queries and API call handling to reduce response latency by 20%."
    },
    {
        title: "Global Flags Database",
        context: "Cloud Software Development",
        tech: "Java, Jakarta EE, PrimeFaces, AWS EC2",
        date: "February 2025",
        description: "Deployed a Java-based web application on AWS EC2 using Jakarta EE and PrimeFaces. Built a session-scoped controller that accepts a country code and returns the country name (via Java Locale) and flag image from an external CDN. Focused on request handling, state management, and cloud deployment configuration."
    },
    {
        title: "Social Media Visualization Tool",
        context: "Data Structures & Algorithms",
        tech: "Java, Data Structures, Algorithms, Swing GUI",
        date: "December 2023",
        description: "Collaborated with a team of four to develop a modular Java application to create a window that can be a data visualization tool with functional systems that analyze and sort engagement metrics from a structured social dataset. Implemented linked lists and custom sorting algorithms to compare follower growth, interaction rates, and engagement. Refactored codebase to improve readability, maintainability, and separation of concerns following software design basis."
    },
    {
        title: "Spotify Playlist App",
        context: "Data Structures & Algorithms",
        tech: "Java, Java GUI, Queue Data Structures",
        date: "November 2023",
        description: "Engineered an interactive Java GUI application using array queue data structures for real-time playlist management. Synchronized frontend UI updates with backend data changes to ensure consistent application state and user experience. Improved application responsiveness through optimized event handling and UI rendering logic."
    },
    /* {
        title: "TITLE",
        context: "CONTEXT",
        tech: "TECH",
        date: "DATE",
        description: "DESCRIPTION"
    } */
];

