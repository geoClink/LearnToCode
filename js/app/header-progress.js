(function () {
  const progressStorageKey = "ltc-language-progress-v1";
  const rewardStorageKey = "ltc-rewards-v1";
  const selectedTopicStorageKey = "ltc-selected-topic";
  const learningActivityStorageKey = "ltc-learning-activity-v1";
  const moduleCount = 14;
  const quizzesPerModule = 3;
  const trackedTopics = [
    "swift", "web", "react", "python", "typescript", "java", "kotlin", "markdown",
    "csharp", "sql", "go", "rust", "cpp", "php", "dart", "bash",
    "sourcecontrol", "ides", "cloudkit", "firebase"
    ,"aiassist"
  ];

  const topicLabels = {
    swift: "Swift",
    web: "Web",
    react: "React",
    python: "Python",
    typescript: "TypeScript",
    java: "Java",
    kotlin: "Kotlin",
    markdown: "Markdown",
    csharp: "C#",
    sql: "SQL",
    go: "Go",
    rust: "Rust",
    cpp: "C++",
    php: "PHP",
    dart: "Dart",
    bash: "Bash",
    sourcecontrol: "Source Control",
    ides: "IDEs",
    cloudkit: "CloudKit",
    firebase: "Firebase"
    ,aiassist: "AI Assist"
  };

  function parseJSON(value, fallback) {
    if (!value) return fallback;
    try {
      const parsed = JSON.parse(value);
      return parsed && typeof parsed === "object" ? parsed : fallback;
    } catch (error) {
      return fallback;
    }
  }

  function loadProgressStore() {
    return parseJSON(localStorage.getItem(progressStorageKey), {});
  }

  function loadRewardStore() {
    return parseJSON(localStorage.getItem(rewardStorageKey), { points: 0 });
  }

  function loadLearningActivity() {
    return parseJSON(localStorage.getItem(learningActivityStorageKey), { streak: 0, lastDate: "", lastTopic: "", lastUnit: "" });
  }

  function isCompletedUnit(unitProgress) {
    if (!unitProgress || typeof unitProgress !== "object") {
      return false;
    }

    if (Array.isArray(unitProgress.passedQuizParts)) {
      const passed = unitProgress.passedQuizParts
        .map((value) => Number(value))
        .filter((value) => Number.isFinite(value) && value >= 1 && value <= quizzesPerModule);
      if (new Set(passed).size >= quizzesPerModule) {
        return true;
      }
    }

    return Boolean(unitProgress.completed);
  }

  function getTopicProgress(progressStore, topic) {
    const topicProgress = progressStore[topic];
    const units = topicProgress && topicProgress.units && typeof topicProgress.units === "object" ? topicProgress.units : {};
    return units;
  }

  function getCompletedModuleCount(progressStore) {
    let completed = 0;
    trackedTopics.forEach((topic) => {
      const units = getTopicProgress(progressStore, topic);
      for (let unit = 1; unit <= moduleCount; unit += 1) {
        if (isCompletedUnit(units[String(unit)])) {
          completed += 1;
        }
      }
    });
    return completed;
  }

  function getFirstIncompleteUnitForTopic(progressStore, topic) {
    const units = getTopicProgress(progressStore, topic);
    for (let unit = 1; unit <= moduleCount; unit += 1) {
      if (!isCompletedUnit(units[String(unit)])) {
        return String(unit);
      }
    }
    return String(moduleCount);
  }

  function resolveContinueTarget(progressStore, learningActivity) {
    const selectedTopic = (localStorage.getItem(selectedTopicStorageKey) || "").trim().toLowerCase();
    const candidates = [selectedTopic, learningActivity.lastTopic, ...trackedTopics].filter(Boolean);

    for (const topic of candidates) {
      if (!trackedTopics.includes(topic)) {
        continue;
      }
      const unit = getFirstIncompleteUnitForTopic(progressStore, topic);
      if (unit) {
        return { topic, unit };
      }
    }

    return { topic: "swift", unit: "1" };
  }

  function ensureHeaderMeta() {
    const headerInner = document.querySelector(".site-header-inner");
    if (!headerInner) {
      return null;
    }

    let meta = headerInner.querySelector(".site-header-meta");
    if (!meta) {
      meta = document.createElement("div");
      meta.className = "site-header-meta";
      meta.innerHTML = [
        '<span class="header-stat" id="headerStatStreak">Streak: 0</span>',
        '<span class="header-stat" id="headerStatXP">XP: 0</span>',
        '<span class="header-stat" id="headerStatCourse">Course: 0%</span>',
        '<a class="site-nav-link header-continue continue-learning-link" id="headerContinueLink" href="trainer.html">Continue Learning</a>'
      ].join("");
      headerInner.appendChild(meta);
    }

    return meta;
  }

  function renderHeaderProgress() {
    const meta = ensureHeaderMeta();
    if (!meta) {
      return;
    }

    const progressStore = loadProgressStore();
    const rewardStore = loadRewardStore();
    const learningActivity = loadLearningActivity();

    const completed = getCompletedModuleCount(progressStore);
    const total = trackedTopics.length * moduleCount;
    const percent = total > 0 ? Math.round((completed / total) * 100) : 0;
    const xp = Number.isFinite(Number(rewardStore.points)) ? Number(rewardStore.points) : 0;
    const streak = Number.isFinite(Number(learningActivity.streak)) ? Number(learningActivity.streak) : 0;

    const streakEl = document.getElementById("headerStatStreak");
    const xpEl = document.getElementById("headerStatXP");
    const courseEl = document.getElementById("headerStatCourse");
    const continueEl = document.getElementById("headerContinueLink");

    if (streakEl) streakEl.textContent = `Streak: ${streak}`;
    if (xpEl) xpEl.textContent = `XP: ${xp}`;
    if (courseEl) courseEl.textContent = `Course: ${percent}%`;

    if (continueEl) {
      const target = resolveContinueTarget(progressStore, learningActivity);
      continueEl.href = `trainer.html?topic=${encodeURIComponent(target.topic)}&unit=${encodeURIComponent(target.unit)}`;
      continueEl.textContent = `Continue ${topicLabels[target.topic] || target.topic} • Module ${target.unit}`;
    }
  }

  renderHeaderProgress();
})();
