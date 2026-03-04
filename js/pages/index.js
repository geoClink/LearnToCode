const selectedTopicStorageKey = "ltc-selected-topic";
      const progressStorageKey = "ltc-language-progress-v1";
      const rewardStorageKey = "ltc-rewards-v1";
      const totalModules = 14;
      const languageTopics = [
        { key: "bash", label: "Bash / Shell" },
        { key: "csharp", label: "C#" },
        { key: "cpp", label: "C++" },
        { key: "dart", label: "Dart + Flutter" },
        { key: "go", label: "Go" },
        { key: "web", label: "HTML + CSS + JavaScript" },
        { key: "java", label: "Java" },
        { key: "kotlin", label: "Kotlin" },
        { key: "markdown", label: "Markdown" },
        { key: "php", label: "PHP" },
        { key: "python", label: "Python" },
        { key: "react", label: "React" },
        { key: "rust", label: "Rust" },
        { key: "sql", label: "SQL" },
        { key: "swift", label: "Swift + SwiftUI" },
        { key: "typescript", label: "TypeScript" }
      ];

      const additionalCourseTopics = [
        { key: "aiassist", label: "AI Coding Assistants" },
        { key: "cloudkit", label: "CloudKit" },
        { key: "firebase", label: "Firebase" },
        { key: "ides", label: "IDEs" },
        { key: "sourcecontrol", label: "Source Control" }
      ];

      const allHomeTopics = [...languageTopics, ...additionalCourseTopics];

      const topicModuleNames = {
        csharp: {
          "1": "C# Syntax Basics",
          "2": "Classes and Properties",
          "3": "Methods and Types",
          "4": "LINQ and Flow",
          "5": "Debugging C# Syntax",
          "6": "Debugging Null and Async",
          "7": "C# Debug Workflow",
          "8": "Output Prediction Basics",
          "9": "Output Prediction with OOP",
          "10": "C# Mastery",
          "11": "C# Testing Fundamentals",
          "12": "C# Refactoring and Quality",
          "13": "C# Performance and Reliability",
          "14": "C# Real-World Scenarios"
        },
        web: {
          "1": "HTML Foundations",
          "2": "CSS Core Styling",
          "3": "JavaScript Basics",
          "4": "DOM and Events",
          "5": "Debugging HTML/CSS",
          "6": "Debugging JavaScript",
          "7": "Browser Debug Workflow",
          "8": "Output Prediction in JS",
          "9": "Async Output Reasoning",
          "10": "Web Stack Mastery",
          "11": "Web Testing Fundamentals",
          "12": "Web Refactoring and Quality",
          "13": "Web Performance and Reliability",
          "14": "Web Real-World Scenarios"
        },
        java: {
          "1": "Java Syntax Basics",
          "2": "Classes and Objects",
          "3": "Methods and Types",
          "4": "Control Flow",
          "5": "Debugging Java Syntax",
          "6": "Debugging OOP Logic",
          "7": "Java Debug Workflow",
          "8": "Output Prediction Basics",
          "9": "Output Prediction OOP",
          "10": "Java Mastery",
          "11": "Java Testing Fundamentals",
          "12": "Java Refactoring and Quality",
          "13": "Java Performance and Reliability",
          "14": "Java Real-World Scenarios"
        },
        kotlin: {
          "1": "Kotlin Core Syntax",
          "2": "Null Safety",
          "3": "Data Classes and Collections",
          "4": "Coroutines Basics",
          "5": "Debugging Kotlin Syntax",
          "6": "Debugging Null Safety",
          "7": "Kotlin Debug Workflow",
          "8": "Output Prediction Basics",
          "9": "Output Prediction Coroutines",
          "10": "Kotlin Mastery",
          "11": "Kotlin Testing Fundamentals",
          "12": "Kotlin Refactoring and Quality",
          "13": "Kotlin Performance and Reliability",
          "14": "Kotlin Real-World Scenarios"
        },
        markdown: {
          "1": "Markdown Foundations",
          "2": "Headings and Paragraph Flow",
          "3": "Lists and Emphasis",
          "4": "Links and Images",
          "5": "Debugging Markdown Syntax",
          "6": "Debugging Link and Media Issues",
          "7": "Markdown Debug Workflow",
          "8": "Rendered Output Basics",
          "9": "Rendered Output Advanced",
          "10": "Markdown Mastery",
          "11": "Documentation Testing Basics",
          "12": "Docs Refactoring and Clarity",
          "13": "Docs Performance and Maintainability",
          "14": "Markdown Real-World Scenarios"
        },
        go: {
          "1": "Go Fundamentals",
          "2": "Functions and Types",
          "3": "Slices and Maps",
          "4": "Packages and Modules",
          "5": "Debugging Go Syntax",
          "6": "Debugging Errors and Interfaces",
          "7": "Go Debug Workflow",
          "8": "Output Prediction Basics",
          "9": "Output Prediction with Collections",
          "10": "Go Mastery",
          "11": "Go Testing Fundamentals",
          "12": "Go Refactoring and Quality",
          "13": "Go Performance and Reliability",
          "14": "Go Real-World Scenarios"
        },
        rust: {
          "1": "Rust Fundamentals",
          "2": "Ownership and Borrowing",
          "3": "Structs and Enums",
          "4": "Traits and Pattern Matching",
          "5": "Debugging Rust Syntax",
          "6": "Debugging Borrow Checker Issues",
          "7": "Rust Debug Workflow",
          "8": "Output Prediction Basics",
          "9": "Output Prediction with Iterators",
          "10": "Rust Mastery",
          "11": "Rust Testing Fundamentals",
          "12": "Rust Refactoring and Quality",
          "13": "Rust Performance and Reliability",
          "14": "Rust Real-World Scenarios"
        },
        cpp: {
          "1": "C++ Fundamentals",
          "2": "Classes and Functions",
          "3": "Pointers and References",
          "4": "STL Basics",
          "5": "Debugging C++ Syntax",
          "6": "Debugging Memory and Types",
          "7": "C++ Debug Workflow",
          "8": "Output Prediction Basics",
          "9": "Output Prediction with OOP",
          "10": "C++ Mastery",
          "11": "C++ Testing Fundamentals",
          "12": "C++ Refactoring and Quality",
          "13": "C++ Performance and Reliability",
          "14": "C++ Real-World Scenarios"
        },
        php: {
          "1": "PHP Fundamentals",
          "2": "Arrays and Functions",
          "3": "Forms and Request Data",
          "4": "Classes and Routing",
          "5": "Debugging PHP Syntax",
          "6": "Debugging Request and Session Issues",
          "7": "PHP Debug Workflow",
          "8": "Output Prediction Basics",
          "9": "Output Prediction with Arrays",
          "10": "PHP Mastery",
          "11": "PHP Testing Fundamentals",
          "12": "PHP Refactoring and Quality",
          "13": "PHP Performance and Reliability",
          "14": "PHP Real-World Scenarios"
        },
        dart: {
          "1": "Dart Fundamentals",
          "2": "Classes and Null Safety",
          "3": "Collections and Async",
          "4": "Flutter Widget Basics",
          "5": "Debugging Dart Syntax",
          "6": "Debugging Flutter State",
          "7": "Dart/Flutter Debug Workflow",
          "8": "Output Prediction Basics",
          "9": "Output Prediction with Widgets",
          "10": "Dart + Flutter Mastery",
          "11": "Dart Testing Fundamentals",
          "12": "Dart Refactoring and Quality",
          "13": "Dart Performance and Reliability",
          "14": "Dart Real-World Scenarios"
        },
        bash: {
          "1": "Shell Fundamentals",
          "2": "Files and Directories",
          "3": "Variables and Expansion",
          "4": "Pipes and Redirection",
          "5": "Debugging Shell Syntax",
          "6": "Debugging Script Logic",
          "7": "Shell Debug Workflow",
          "8": "Output Prediction Basics",
          "9": "Output Prediction with Pipelines",
          "10": "Bash Mastery",
          "11": "Script Testing Fundamentals",
          "12": "Script Refactoring and Quality",
          "13": "Script Performance and Reliability",
          "14": "Shell Real-World Scenarios"
        },
        python: {
          "1": "Python Syntax Basics",
          "2": "Functions and Data",
          "3": "Lists and Dictionaries",
          "4": "Control Flow",
          "5": "Debugging Python Syntax",
          "6": "Debugging Data Logic",
          "7": "Python Debug Workflow",
          "8": "Output Prediction Basics",
          "9": "Output Prediction Advanced",
          "10": "Python Mastery",
          "11": "Python Testing Fundamentals",
          "12": "Python Refactoring and Quality",
          "13": "Python Performance and Reliability",
          "14": "Python Real-World Scenarios"
        },
        react: {
          "1": "JSX and Components",
          "2": "Props and State",
          "3": "Hooks Fundamentals",
          "4": "Component Patterns",
          "5": "Debugging JSX and Props",
          "6": "Debugging Hooks",
          "7": "React Debug Workflow",
          "8": "Render Output Reasoning",
          "9": "Effect Output Reasoning",
          "10": "React Mastery",
          "11": "React Testing Fundamentals",
          "12": "React Refactoring and Quality",
          "13": "React Performance and Reliability",
          "14": "React Real-World Scenarios"
        },
        sql: {
          "1": "SELECT and WHERE",
          "2": "Joins Fundamentals",
          "3": "Grouping and Aggregates",
          "4": "Subqueries and Filters",
          "5": "Debugging Query Syntax",
          "6": "Debugging Join Logic",
          "7": "SQL Debug Workflow",
          "8": "Output Prediction Basics",
          "9": "Output Prediction with Joins",
          "10": "SQL Mastery",
          "11": "SQL Testing and Validation",
          "12": "SQL Refactoring and Readability",
          "13": "SQL Performance and Indexing",
          "14": "SQL Real-World Scenarios"
        },
        swift: {
          "1": "Swift Core Syntax",
          "2": "Optionals and Types",
          "3": "State and Data Flow",
          "4": "SwiftUI View Composition",
          "5": "Debugging Swift Basics",
          "6": "Debugging SwiftUI State",
          "7": "Debug Review and Fixes",
          "8": "Output Tracing in Swift",
          "9": "Output Tracing in SwiftUI",
          "10": "Swift + SwiftUI Mastery",
          "11": "Swift Testing Fundamentals",
          "12": "Swift Refactoring and Quality",
          "13": "Swift Performance and Reliability",
          "14": "Swift Real-World Scenarios"
        },
        typescript: {
          "1": "TypeScript Foundations",
          "2": "Types and Interfaces",
          "3": "Null Safety and Unions",
          "4": "Type-safe Patterns",
          "5": "Debugging Type Errors",
          "6": "Debugging Runtime Mismatches",
          "7": "TypeScript Debug Workflow",
          "8": "Output Reasoning Basics",
          "9": "Output Reasoning with Types",
          "10": "TypeScript Mastery",
          "11": "TypeScript Testing Fundamentals",
          "12": "TypeScript Refactoring and Quality",
          "13": "TypeScript Performance and Reliability",
          "14": "TypeScript Real-World Scenarios"
        },
        sourcecontrol: {
          "1": "Git Fundamentals",
          "2": "Staging and Commits",
          "3": "Branches and PRs",
          "4": "Collaboration Workflow",
          "5": "Debugging Git Commands",
          "6": "Debugging Merge Issues",
          "7": "Conflict Resolution",
          "8": "Output Prediction in Git",
          "9": "Workflow Decision Making",
          "10": "Source Control Mastery",
          "11": "Git Testing Workflow",
          "12": "Git Refactoring and Hygiene",
          "13": "Git Performance and Scale",
          "14": "Git Real-World Scenarios"
        },
        ides: {
          "1": "IDE Fundamentals",
          "2": "Language and Tool Support",
          "3": "Run and Build Workflow",
          "4": "Debugging Tools",
          "5": "Debugging IDE Setup",
          "6": "Debugging Environment Issues",
          "7": "Toolchain Troubleshooting",
          "8": "Output and Logs Basics",
          "9": "IDE Workflow Decisions",
          "10": "IDE Mastery",
          "11": "IDE Testing Workflow",
          "12": "IDE Refactoring and Quality Tools",
          "13": "IDE Performance and Diagnostics",
          "14": "IDE Real-World Scenarios"
        },
        cloudkit: {
          "1": "CloudKit Fundamentals",
          "2": "Containers and Databases",
          "3": "Records and Zones",
          "4": "Query and Fetch Patterns",
          "5": "Debugging CloudKit Setup",
          "6": "Debugging Account and Auth Issues",
          "7": "CloudKit Conflict Resolution",
          "8": "Output Prediction Basics",
          "9": "Output Prediction with Sync",
          "10": "CloudKit Mastery",
          "11": "CloudKit Testing Workflow",
          "12": "CloudKit Refactoring and Quality",
          "13": "CloudKit Reliability and Recovery",
          "14": "CloudKit Real-World Scenarios"
        },
        firebase: {
          "1": "Firebase Fundamentals",
          "2": "Auth and Identity",
          "3": "Firestore Data Modeling",
          "4": "Rules and Access Patterns",
          "5": "Debugging Firebase Setup",
          "6": "Debugging Auth and Rules",
          "7": "Firebase Debug Workflow",
          "8": "Output Prediction Basics",
          "9": "Output Prediction with Data Flow",
          "10": "Firebase Mastery",
          "11": "Firebase Testing Workflow",
          "12": "Firebase Refactoring and Quality",
          "13": "Firebase Performance and Cost",
          "14": "Firebase Real-World Scenarios"
        },
        aiassist: {
          "1": "AI Assistant Fundamentals",
          "2": "Prompting for Code Tasks",
          "3": "Context and Constraints",
          "4": "Reviewing AI Suggestions",
          "5": "Debugging AI-Generated Code",
          "6": "Security and Privacy Boundaries",
          "7": "AI Pair-Programming Workflow",
          "8": "Output and Behavior Verification",
          "9": "Refactoring AI Drafts",
          "10": "AI Workflow Mastery",
          "11": "Testing AI-Assisted Code",
          "12": "Maintainability and Ownership",
          "13": "Performance and Cost with AI",
          "14": "Real-World Team AI Practices"
        }
      };

      function getModuleName(topic, moduleNumber) {
        const topicNames = topicModuleNames[topic] || {};
        return topicNames[String(moduleNumber)] || `Module ${moduleNumber}`;
      }

      function getProgressStore() {
        try {
          const raw = localStorage.getItem(progressStorageKey);
          if (!raw) {
            return {};
          }
          const parsed = JSON.parse(raw);
          return parsed && typeof parsed === "object" ? parsed : {};
        } catch (error) {
          return {};
        }
      }

      function getRewardStore() {
        try {
          const raw = localStorage.getItem(rewardStorageKey);
          if (!raw) {
            return { moduleBadges: {}, languageBadges: {}, points: 0 };
          }

          const parsed = JSON.parse(raw);
          if (!parsed || typeof parsed !== "object") {
            return { moduleBadges: {}, languageBadges: {}, points: 0 };
          }

          return {
            moduleBadges: parsed.moduleBadges && typeof parsed.moduleBadges === "object" ? parsed.moduleBadges : {},
            languageBadges: parsed.languageBadges && typeof parsed.languageBadges === "object" ? parsed.languageBadges : {},
            points: Number.isFinite(Number(parsed.points)) ? Number(parsed.points) : 0
          };
        } catch (error) {
          return { moduleBadges: {}, languageBadges: {}, points: 0 };
        }
      }

      function getTopicModuleBadgeCount(rewardStore, topic) {
        const topicBadges = rewardStore.moduleBadges && rewardStore.moduleBadges[topic];
        if (!topicBadges || typeof topicBadges !== "object") {
          return 0;
        }
        return Object.keys(topicBadges).length;
      }

      function hasLanguageMasteryBadge(rewardStore, topic) {
        return Boolean(rewardStore.languageBadges && rewardStore.languageBadges[topic]);
      }

      function getTotalModuleBadgeCount(rewardStore) {
        if (!rewardStore.moduleBadges || typeof rewardStore.moduleBadges !== "object") {
          return 0;
        }

        return Object.values(rewardStore.moduleBadges)
          .filter((topicBadges) => topicBadges && typeof topicBadges === "object")
          .reduce((sum, topicBadges) => sum + Object.keys(topicBadges).length, 0);
      }

      function getCompletedModules(store, topic) {
        const topicProgress = store[topic];
        if (!topicProgress || !topicProgress.units || typeof topicProgress.units !== "object") {
          return 0;
        }

        return Object.values(topicProgress.units).filter((unitProgress) => unitProgress && unitProgress.completed).length;
      }

      function getNextModule(store, topic) {
        const topicProgress = store[topic];
        const units = topicProgress && topicProgress.units && typeof topicProgress.units === "object"
          ? topicProgress.units
          : {};

        for (let moduleNumber = 1; moduleNumber <= totalModules; moduleNumber += 1) {
          const key = String(moduleNumber);
          if (!units[key] || !units[key].completed) {
            return key;
          }
        }

        return String(totalModules);
      }

      function renderHomeProgress() {
        const progressGrid = document.getElementById("homeProgressGrid");
        const additionalProgressGrid = document.getElementById("homeAdditionalProgressGrid");
        const courseProgressIntro = document.getElementById("courseProgressIntro");
        const additionalCoursesIntro = document.getElementById("additionalCoursesIntro");
        const rewardsOverview = document.getElementById("rewardsOverview");
        const masteryBadgeList = document.getElementById("masteryBadgeList");
        if (!progressGrid || !additionalProgressGrid) {
          return;
        }

        const store = getProgressStore();
        const rewardStore = getRewardStore();
        const masteryCount = allHomeTopics.filter(({ key }) => hasLanguageMasteryBadge(rewardStore, key)).length;
        const moduleBadgeTotal = getTotalModuleBadgeCount(rewardStore);
        if (courseProgressIntro) {
          const languageMasteryCount = languageTopics.filter(({ key }) => hasLanguageMasteryBadge(rewardStore, key)).length;
          courseProgressIntro.textContent = `Track 14-module completion, rewards, and mastery badges. Total XP: ${rewardStore.points} • Mastery badges: ${languageMasteryCount}/${languageTopics.length}.`;
        }

        if (additionalCoursesIntro) {
          const additionalMasteryCount = additionalCourseTopics.filter(({ key }) => hasLanguageMasteryBadge(rewardStore, key)).length;
          additionalCoursesIntro.textContent = `Track 14-module completion for additional tracks. Mastery badges: ${additionalMasteryCount}/${additionalCourseTopics.length}.`;
        }

        if (rewardsOverview) {
          rewardsOverview.textContent = `Total XP: ${rewardStore.points} • Module badges earned: ${moduleBadgeTotal}/${allHomeTopics.length * totalModules} • Mastery badges: ${masteryCount}/${allHomeTopics.length}.`;
        }

        if (masteryBadgeList) {
          masteryBadgeList.innerHTML = "";
          const earnedMastery = allHomeTopics.filter(({ key }) => hasLanguageMasteryBadge(rewardStore, key));

          if (!earnedMastery.length) {
            const emptyItem = document.createElement("li");
            emptyItem.textContent = "No language mastery badges earned yet. Complete all 14 modules in a language to unlock one.";
            masteryBadgeList.appendChild(emptyItem);
          } else {
            earnedMastery.forEach(({ label }) => {
              const badgeItem = document.createElement("li");
              badgeItem.textContent = `🏆 ${label} Mastery Badge`;
              masteryBadgeList.appendChild(badgeItem);
            });
          }
        }

        progressGrid.innerHTML = "";
        additionalProgressGrid.innerHTML = "";

        function renderProgressRows(targetGrid, topicList) {
          topicList.forEach(({ key, label }) => {
          const completed = getCompletedModules(store, key);
          const clampedCompleted = Math.min(totalModules, Math.max(0, completed));
          const percent = Math.round((clampedCompleted / totalModules) * 100);
          const advancedUnlocked = clampedCompleted >= 10;
          const moduleBadgeCount = getTopicModuleBadgeCount(rewardStore, key);
          const masteryEarned = hasLanguageMasteryBadge(rewardStore, key);
          const nextModule = getNextModule(store, key);
          const isComplete = clampedCompleted >= totalModules;
          const hasStarted = clampedCompleted > 0;
          const moduleStatusList = Array.from({ length: totalModules }, (_, index) => {
            const moduleNumber = index + 1;
            const isModuleCompleted = moduleNumber <= clampedCompleted;
            return {
              moduleNumber,
              isCompleted: isModuleCompleted
            };
          });
          const modulesMarkup = moduleStatusList.map(({ moduleNumber, isCompleted: isModuleCompleted }) => {
            const moduleLabel = getModuleName(key, moduleNumber);
            if (isModuleCompleted) {
              return `<a class="module-chip completed" href="trainer.html?topic=${encodeURIComponent(key)}&unit=${encodeURIComponent(String(moduleNumber))}" title="${moduleLabel}">Module ${moduleNumber}: ${moduleLabel}</a>`;
            }

            return `<span class="module-chip locked" aria-disabled="true" title="${moduleLabel}">Module ${moduleNumber}: ${moduleLabel}</span>`;
          }).join("");
          const moduleCtaLabel = isComplete
            ? `Revisit Module ${totalModules}`
            : hasStarted
              ? `Continue Module ${nextModule}`
              : "Start Course";

          const row = document.createElement("article");
          row.className = `home-progress-row${isComplete ? " completed" : ""}`;
          row.innerHTML = `
            <div class="home-progress-head">
              <strong>${label}${advancedUnlocked ? ' <span class="module-unlocked-badge">Advanced Modules Unlocked</span>' : ''}${isComplete ? ' <span class="language-complete-badge">Complete</span>' : ''}</strong>
              <span>${clampedCompleted}/${totalModules} modules • ${percent}%</span>
            </div>
            <div class="home-progress-track" role="progressbar" aria-label="${label} course progress" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${percent}">
              <span class="home-progress-fill${isComplete ? " completed" : ""}" style="width: ${percent}%"></span>
            </div>
            <div class="home-reward-line">
              <span>🏅 Module badges: ${moduleBadgeCount}/${totalModules}</span>
              <span>${masteryEarned ? "🏆 Language mastery earned" : "🏆 Language mastery locked"}</span>
            </div>
            <div class="home-progress-actions">
              <a class="study-link secondary home-progress-link topic-launch" data-topic="${key}" href="study-guide.html?topic=${encodeURIComponent(key)}">Open Study Guide</a>
              <a class="study-link secondary home-progress-link course-launch" data-topic="${key}" data-next-module="${encodeURIComponent(nextModule)}" href="trainer.html?topic=${encodeURIComponent(key)}&unit=${encodeURIComponent(nextModule)}">${moduleCtaLabel}</a>
              <button type="button" class="study-link secondary home-progress-link module-toggle-btn" aria-expanded="false" aria-controls="moduleList-${key}" data-module-target="moduleList-${key}">View Modules</button>
            </div>
            <div id="moduleList-${key}" class="module-list hidden" aria-label="${label} module progress">
              ${modulesMarkup}
            </div>
          `;

            targetGrid.appendChild(row);
          });
        }

        renderProgressRows(progressGrid, languageTopics);
        renderProgressRows(additionalProgressGrid, additionalCourseTopics);

        document.querySelectorAll(".module-toggle-btn").forEach((button) => {
          button.addEventListener("click", () => {
            const targetId = button.getAttribute("data-module-target");
            if (!targetId) {
              return;
            }

            const moduleList = document.getElementById(targetId);
            if (!moduleList) {
              return;
            }

            const isHidden = moduleList.classList.toggle("hidden");
            const expanded = !isHidden;
            button.setAttribute("aria-expanded", String(expanded));
            button.textContent = expanded ? "Hide Modules" : "View Modules";
          });
        });
      }

      renderHomeProgress();

      document.querySelectorAll(".topic-launch").forEach((link) => {
        link.addEventListener("click", () => {
          const topic = link.dataset.topic;
          if (!topic) {
            return;
          }
          try {
            localStorage.setItem(selectedTopicStorageKey, topic);
          } catch (error) {}

          link.href = `study-guide.html?topic=${encodeURIComponent(topic)}`;
        });
      });

      document.querySelectorAll(".course-launch").forEach((link) => {
        link.addEventListener("click", () => {
          const topic = (link.dataset.topic || "").trim();
          const nextModule = (link.dataset.nextModule || "1").trim() || "1";
          if (!topic) {
            return;
          }

          try {
            localStorage.setItem(selectedTopicStorageKey, topic);
          } catch (error) {}

          link.href = `trainer.html?topic=${encodeURIComponent(topic)}&unit=${encodeURIComponent(nextModule)}`;
        });
      });
