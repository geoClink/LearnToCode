const selectedTopicStorageKey = "ltc-selected-topic";
      const topicAliases = {
        swiftui: "swift",
        "swift + swiftui": "swift",
        html: "web",
        javascript: "web",
        js: "web",
        "html css javascript": "web",
        "html + css + javascript": "web",
        "c#": "csharp",
        "c-sharp": "csharp",
        "c sharp": "csharp",
        kt: "kotlin",
        kotlinlang: "kotlin",
        "android kotlin": "kotlin",
        markdown: "markdown",
        md: "markdown",
        "source control": "sourcecontrol",
        "source-control": "sourcecontrol",
        "version control": "sourcecontrol",
        git: "sourcecontrol",
        github: "sourcecontrol",
        ide: "ides",
        ides: "ides",
        "integrated development environment": "ides",
        "integrated development environments": "ides",
        vscode: "ides",
        "vs code": "ides",
        xcode: "ides",
        intellij: "ides",
        pycharm: "ides",
        ai: "aiassist",
        "ai tools": "aiassist",
        "ai coding": "aiassist",
        "ai assistants": "aiassist",
        "coding ai": "aiassist",
        copilot: "aiassist",
        go: "go",
        golang: "go",
        rust: "rust",
        cpp: "cpp",
        "c++": "cpp",
        "c plus plus": "cpp",
        php: "php",
        dart: "dart",
        flutter: "dart",
        bash: "bash",
        shell: "bash",
        "shell scripting": "bash",
        ts: "typescript"
      };

      function normalizeTopic(value) {
        let decodedValue = "";
        try {
          decodedValue = decodeURIComponent(value || "");
        } catch (error) {
          decodedValue = value || "";
        }

        return decodedValue
          .replace(/\+/g, " ")
          .trim()
          .toLowerCase()
          .replace(/\s+/g, " ");
      }

      function resolveTopic(value, topicMap) {
        const normalized = normalizeTopic(value);
        if (!normalized) {
          return "";
        }
        if (topicMap[normalized]) {
          return normalized;
        }
        const alias = topicAliases[normalized] || "";
        return topicMap[alias] ? alias : "";
      }

      const topicParam = new URLSearchParams(window.location.search).get("topic");

      const topicMeta = {
        swift: {
          title: "Swift + SwiftUI",
          subtitle: "Learn in two phases: Swift fundamentals first, then SwiftUI state and layout patterns for Apple apps.",
          mainUse: "Swift is mainly used to build Apple platform apps with strong type safety. Start with core Swift syntax and data modeling, then move into SwiftUI view/state architecture.",
          history: "Swift was introduced by Apple in 2014 as a modern replacement for Objective-C. SwiftUI arrived in 2019 to simplify UI development with a declarative approach.",
          industries: ["Consumer mobile apps", "Health and wellness apps", "Finance and banking mobile products", "Retail and e-commerce iOS experiences", "Media and entertainment apps"]
        },
        web: {
          title: "HTML + CSS + JavaScript",
          subtitle: "Core technologies of the web for structure, styling, and interactivity.",
          mainUse: "This stack is used to build websites and browser-based applications across desktop and mobile devices.",
          history: "HTML started in the early 1990s, CSS was standardized in the mid-1990s, and JavaScript launched in 1995—together forming the foundation of the modern web.",
          industries: ["SaaS platforms", "Marketing and media websites", "E-commerce storefronts", "Education and e-learning portals", "Government and public service sites"]
        },
        react: {
          title: "React",
          subtitle: "Component-based JavaScript library for interactive user interfaces.",
          mainUse: "React is primarily used to build dynamic front-end applications with reusable components and predictable state-driven rendering.",
          history: "React was created at Facebook and open-sourced in 2013. It popularized component architecture and virtual DOM rendering for large web apps.",
          industries: ["SaaS dashboards", "Social and community platforms", "FinTech web apps", "Healthcare portals", "Enterprise internal tools"]
        },
        python: {
          title: "Python",
          subtitle: "General-purpose language known for readability and rapid development.",
          mainUse: "Python is widely used for scripting, automation, data science, machine learning, backend APIs, and education.",
          history: "Python was created by Guido van Rossum and first released in 1991. Its readable syntax helped it become one of the most popular languages globally.",
          industries: ["Data science and analytics", "AI and machine learning", "Finance and quantitative research", "Cybersecurity automation", "Education and research"]
        },
        typescript: {
          title: "TypeScript",
          subtitle: "Typed superset of JavaScript for safer large-scale applications.",
          mainUse: "TypeScript is used to build maintainable web and server apps by adding static types and stronger tooling to JavaScript projects.",
          history: "TypeScript was developed by Microsoft and released in 2012. It gained adoption quickly in enterprise and framework ecosystems like Angular and React tooling.",
          industries: ["Enterprise SaaS", "Large-scale product engineering", "Cloud platforms", "Developer tooling companies", "E-commerce and marketplace apps"]
        },
        java: {
          title: "Java",
          subtitle: "Object-oriented language used heavily in enterprise systems and Android ecosystems.",
          mainUse: "Java is used for backend services, enterprise software, and large-scale systems where stability and portability matter.",
          history: "Java was released by Sun Microsystems in 1995 with the 'write once, run anywhere' model. It remains a major language in industry and education.",
          industries: ["Banking and financial services", "Insurance systems", "Telecommunications", "Enterprise resource planning (ERP)", "Large government systems"]
        },
        kotlin: {
          title: "Kotlin",
          subtitle: "Modern JVM language focused on safety, concision, and Android development productivity.",
          mainUse: "Kotlin is used for Android app development, backend services, and shared mobile code with Kotlin Multiplatform.",
          history: "Kotlin was created by JetBrains and first released in 2011. Google announced official Android support in 2017, which accelerated its adoption.",
          industries: ["Android consumer apps", "FinTech mobile products", "E-commerce mobile platforms", "Travel and logistics apps", "Streaming and media mobile apps"]
        },
        markdown: {
          title: "Markdown",
          subtitle: "Lightweight markup language for writing clean, portable documentation and readable technical notes.",
          mainUse: "Markdown is used to write README files, technical docs, release notes, project wikis, and knowledge bases with simple plain-text formatting.",
          history: "Markdown was created by John Gruber in 2004 to make writing for the web easier while keeping source text readable. It became a standard in developer workflows through GitHub and static site tools.",
          industries: ["Software documentation", "Open-source projects", "Developer advocacy and education", "Technical writing teams", "Internal engineering knowledge bases"]
        },
        go: {
          title: "Go",
          subtitle: "Compiled language focused on simplicity, concurrency, and reliable backend services.",
          mainUse: "Go is commonly used for cloud services, APIs, DevOps tooling, and distributed systems that need clear code and strong performance.",
          history: "Go was developed at Google and first released in 2009. It was designed to improve developer productivity for large-scale systems programming.",
          industries: ["Cloud infrastructure", "Backend API platforms", "DevOps and SRE tooling", "FinTech service platforms", "Developer tool companies"]
        },
        rust: {
          title: "Rust",
          subtitle: "Systems language focused on memory safety, performance, and fearless concurrency.",
          mainUse: "Rust is used for performance-critical services, CLI tools, systems components, and applications requiring strict safety guarantees.",
          history: "Rust began at Mozilla and reached 1.0 in 2015. It gained adoption for combining low-level control with strong compile-time safety.",
          industries: ["Systems and infrastructure", "Security-focused software", "Embedded development", "Game engines and tooling", "High-performance backend services"]
        },
        cpp: {
          title: "C++",
          subtitle: "High-performance language used for systems programming, engines, and low-level software.",
          mainUse: "C++ is used when fine-grained control over memory and performance is important, including games, embedded software, and real-time systems.",
          history: "C++ was created by Bjarne Stroustrup in the early 1980s as an extension of C with object-oriented and generic programming features.",
          industries: ["Game development", "Embedded and firmware", "Finance low-latency systems", "Robotics and simulation", "Desktop and performance software"]
        },
        php: {
          title: "PHP",
          subtitle: "Server-side scripting language for web applications and content-driven platforms.",
          mainUse: "PHP is widely used for backend web development, content management systems, and API-driven business applications.",
          history: "PHP was created in 1994 and evolved into one of the most deployed web backend languages, powering many content and commerce platforms.",
          industries: ["E-commerce platforms", "Media and publishing", "Agency web development", "SaaS backends", "Content management systems"]
        },
        dart: {
          title: "Dart + Flutter",
          subtitle: "Modern language and UI toolkit combination for cross-platform app development.",
          mainUse: "Dart powers Flutter apps for mobile, web, and desktop with one codebase and a widget-driven UI model.",
          history: "Dart was introduced by Google in 2011. Flutter launched later and accelerated Dart adoption for cross-platform product teams.",
          industries: ["Consumer mobile apps", "Startup MVP products", "Cross-platform enterprise apps", "EdTech apps", "Retail and service apps"]
        },
        bash: {
          title: "Bash / Shell",
          subtitle: "Command-line scripting for automation, tooling, and daily developer workflows.",
          mainUse: "Bash is used to automate repetitive tasks, orchestrate scripts, and run local or CI/CD workflow commands efficiently.",
          history: "Bash was released in 1989 as the GNU Bourne Again Shell and became a standard shell environment across Unix-like systems.",
          industries: ["DevOps and infrastructure", "Backend engineering", "Data engineering pipelines", "Cybersecurity operations", "Platform engineering"]
        },
        csharp: {
          title: "C#",
          subtitle: "Modern language for .NET applications across web, desktop, cloud, and game development.",
          mainUse: "C# is used to build .NET backend APIs, desktop apps, cloud services, and game development with Unity.",
          history: "C# was introduced by Microsoft in 2000 as part of .NET. Over time it evolved with features like LINQ, async/await, and nullable reference types.",
          industries: ["Enterprise software", "Cloud and platform services", "Game development", "Healthcare information systems", "Manufacturing and automation dashboards"]
        },
        sql: {
          title: "SQL",
          subtitle: "Standard language for managing and querying relational databases.",
          mainUse: "SQL is used to retrieve, filter, join, aggregate, and update structured data stored in relational database systems.",
          history: "SQL originated in the 1970s from IBM research and became an ANSI/ISO standard. It remains the core query language for relational data platforms.",
          industries: ["Business intelligence and analytics", "Banking and transactions", "E-commerce data systems", "Healthcare records and reporting", "Logistics and operations data"]
        },
        sourcecontrol: {
          title: "Source Control (Git + GitHub)",
          subtitle: "Version control workflow for tracking code changes, collaborating safely, and shipping with confidence.",
          mainUse: "Source control tracks your project history with commits, helps teams sync work with push/pull, and coordinates code review and merge decisions through branches and pull requests.",
          history: "Git was created by Linus Torvalds in 2005 for distributed version control. GitHub launched in 2008 and helped standardize collaborative workflows with pull requests and code reviews.",
          industries: ["Software startups", "Enterprise engineering teams", "Open-source communities", "Game studios", "Cloud platform teams"]
        },
        ides: {
          title: "IDEs (Development Environments)",
          subtitle: "Tools that help you write, run, debug, and manage code faster with language-aware features.",
          mainUse: "IDEs combine code editing, autocomplete, debugging, terminal integration, and project tools so developers can build software more efficiently and with fewer mistakes.",
          history: "Early IDEs grew from basic code editors in the 1980s and 1990s. Modern IDEs evolved with language servers, plugin ecosystems, Git integration, and cloud tooling for full development workflows.",
          industries: ["Software product companies", "Enterprise IT departments", "EdTech coding programs", "Consulting and agency development", "Research and innovation labs"]
        },
        aiassist: {
          title: "AI Coding Assistants",
          subtitle: "Learn to use AI tools in IDEs safely, effectively, and professionally.",
          mainUse: "AI coding assistants speed up drafting, debugging, and learning, but require strong review, testing, and ownership discipline.",
          history: "AI pair-programming tools accelerated in mainstream IDE workflows after 2021, shifting developer focus toward prompt design, code review rigor, and responsible usage.",
          industries: ["SaaS engineering teams", "Startup product teams", "Enterprise modernization teams", "DevOps/platform groups", "Developer tooling organizations"]
        }
      };

      let storedTopic = "";
      try {
        storedTopic = localStorage.getItem(selectedTopicStorageKey) || "";
      } catch (error) {}

      let referrerTopic = "";
      try {
        if (document.referrer) {
          referrerTopic = new URL(document.referrer).searchParams.get("topic") || "";
        }
      } catch (error) {}

      const safeTopic = resolveTopic(topicParam, topicMeta)
        || resolveTopic(storedTopic, topicMeta)
        || resolveTopic(referrerTopic, topicMeta);
      const title = document.getElementById("topicTitle");
      const subtitle = document.getElementById("topicSubtitle");
      const mainUse = document.getElementById("topicMainUse");
      const historyText = document.getElementById("topicHistory");
      const industriesList = document.getElementById("topicIndustries");
      const chooseUnitLink = document.getElementById("chooseUnitLink");
      const reviewGuideLink = document.getElementById("reviewGuideLink");

      function renderIndustries(items) {
        if (!industriesList) {
          return;
        }

        industriesList.innerHTML = "";
        (items || []).forEach((itemText) => {
          const item = document.createElement("li");
          item.textContent = itemText;
          industriesList.appendChild(item);
        });
      }

      if (safeTopic) {
        const quizUrl = `unit.html?topic=${encodeURIComponent(safeTopic)}`;
        title.textContent = topicMeta[safeTopic].title;
        subtitle.textContent = topicMeta[safeTopic].subtitle;
        mainUse.textContent = topicMeta[safeTopic].mainUse;
        historyText.textContent = topicMeta[safeTopic].history;
        renderIndustries(topicMeta[safeTopic].industries);
        chooseUnitLink.href = quizUrl;
        reviewGuideLink.href = `study-guide.html?topic=${encodeURIComponent(safeTopic)}`;
        try {
          localStorage.setItem(selectedTopicStorageKey, safeTopic);
        } catch (error) {}

        chooseUnitLink.addEventListener("click", (event) => {
          event.preventDefault();
          window.location.href = quizUrl;
        });

        const canonicalUrl = `topic.html?topic=${encodeURIComponent(safeTopic)}`;
        if (window.location.search !== `?topic=${encodeURIComponent(safeTopic)}`) {
          history.replaceState(null, "", canonicalUrl);
        }

      } else {
        title.textContent = "Language Study Path";
        subtitle.textContent = "Pick a language from Home to see details and options.";
        mainUse.textContent = "Main use information appears here after you select a language.";
        historyText.textContent = "Brief history appears here after you select a language.";
        renderIndustries(["Industry relevance appears here after you select a language."]);
        chooseUnitLink.href = "index.html";
        chooseUnitLink.textContent = "Back to Home";
        reviewGuideLink.href = "study-guide.html";
      }
