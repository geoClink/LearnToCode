const topicParam = new URLSearchParams(window.location.search).get("topic");
      const topic = (topicParam || "").trim().toLowerCase();
      const topicMeta = {
        swift: "Swift + SwiftUI",
        web: "HTML + CSS + JavaScript",
        react: "React",
        python: "Python",
        typescript: "TypeScript",
        java: "Java",
        kotlin: "Kotlin",
        markdown: "Markdown",
        go: "Go",
        rust: "Rust",
        cpp: "C++",
        php: "PHP",
        dart: "Dart + Flutter",
        bash: "Bash / Shell",
        csharp: "C#",
        sql: "SQL",
        sourcecontrol: "Source Control",
        ides: "IDEs",
        cloudkit: "CloudKit",
        firebase: "Firebase",
        aiassist: "AI Coding Assistants"
      };
      const unitNames = {
        1: "Foundations",
        2: "Core Syntax",
        3: "State Basics",
        4: "Flow Practice",
        5: "Debug Patterns I",
        6: "Debug Patterns II",
        7: "Debug Review",
        8: "Output Reasoning I",
        9: "Output Reasoning II",
        10: "Language Mastery",
        11: "Testing Fundamentals",
        12: "Refactoring and Quality",
        13: "Performance and Reliability",
        14: "Real-World Scenarios"
      };

      const safeTopic = topicMeta[topic] ? topic : "";
      const unitTitle = document.getElementById("unitTitle");
      const unitGrid = document.getElementById("unitGrid");
      const backToTopic = document.getElementById("backToTopic");
      const reviewGuide = document.getElementById("reviewGuide");

      if (safeTopic) {
        unitTitle.textContent = `${topicMeta[safeTopic]} • Select Module (14 Modules)`;
        backToTopic.href = `topic.html?topic=${safeTopic}`;
        reviewGuide.href = `study-guide.html?topic=${safeTopic}`;
      }

      for (let unit = 1; unit <= 14; unit += 1) {
        const link = document.createElement("a");
        link.className = "study-link";
        link.href = safeTopic
          ? `trainer.html?topic=${safeTopic}&unit=${unit}`
          : "trainer.html";
        link.textContent = `Module ${unit}: ${unitNames[unit]}`;
        unitGrid.appendChild(link);
      }
