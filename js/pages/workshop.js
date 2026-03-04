const languageSelect = document.getElementById("workshopLanguageSelect");
const projectIntro = document.getElementById("workshopProjectIntro");
const projectTypeSelect = document.getElementById("workshopProjectType");
const projectGoalInput = document.getElementById("workshopProjectGoal");
const projectPrompt = document.getElementById("workshopProjectPrompt");
const projectEditor = document.getElementById("workshopProjectEditor");
const projectLoadStarterBtn = document.getElementById("workshopProjectLoadStarter");
const projectRunReviewBtn = document.getElementById("workshopProjectRunReview");
const projectHintBtn = document.getElementById("workshopProjectHint");
const projectRevealBtn = document.getElementById("workshopProjectReveal");
const projectFeedback = document.getElementById("workshopProjectFeedback");
const projectSupport = document.getElementById("workshopProjectSupport");
const debugIntro = document.getElementById("workshopDebugIntro");
const debugStartLink = document.getElementById("workshopDebugStart");

let projectReviewAttempts = 0;
let projectHintLevel = 0;
let projectReferenceRevealed = false;

const languageLabels = {
  bash: "Bash / Shell",
  cloudkit: "CloudKit",
  csharp: "C#",
  cpp: "C++",
  dart: "Dart + Flutter",
  firebase: "Firebase",
  go: "Go",
  java: "Java",
  kotlin: "Kotlin",
  php: "PHP",
  python: "Python",
  react: "React",
  rust: "Rust",
  sql: "SQL",
  swift: "Swift + SwiftUI",
  typescript: "TypeScript",
  web: "HTML + CSS + JavaScript"
};

const projectTrackTemplates = [
  { id: "core", name: "Core Service", objective: "Implement the primary business flow", checks: ["service", "error"] },
  { id: "auth", name: "Identity + Access", objective: "Ship secure identity and role checks", checks: ["auth", "role"] },
  { id: "data", name: "Data Modeling", objective: "Model, validate, and persist domain data", checks: ["model", "save"] },
  { id: "async", name: "Async Workflow", objective: "Handle async operations with user-safe state", checks: ["async", "state"] },
  { id: "resilience", name: "Reliability Hardening", objective: "Add retry/fallback and defensive handling", checks: ["retry", "fallback"] },
  { id: "cache", name: "Caching + Performance", objective: "Introduce cache strategy and invalidation", checks: ["cache", "invalidate"] },
  { id: "observability", name: "Observability", objective: "Add logs/metrics for production diagnosis", checks: ["log", "metric"] },
  { id: "testing", name: "Testing Workflow", objective: "Add tests for happy path and edge cases", checks: ["test", "edge"] },
  { id: "deployment", name: "Release Readiness", objective: "Prepare CI/CD-safe release checks", checks: ["ci", "deploy"] },
  { id: "capstone", name: "Industry Capstone", objective: "Deliver a portfolio-grade production feature", checks: ["readable", "production"] }
];

const languageIndustryProfiles = {
  swift: { domain: "iOS product teams", artifacts: ["SwiftUI Offline Notes", "CloudKit Sync Engine", "Profile Editing Flow", "Background Refresh Service", "Push Notification State", "Keychain Session Guard"], keywords: ["swiftui", "cloudkit", "@state", "async", "keychain"] },
  web: { domain: "frontend web teams", artifacts: ["Responsive Commerce UI", "A11y Navigation System", "PWA Offline Cache", "Form Validation Experience", "Search Results Screen", "Dashboard Widgets"], keywords: ["fetch", "dom", "accessibility", "serviceworker", "cache"] },
  react: { domain: "react frontend teams", artifacts: ["React Data Dashboard", "Error Boundary Layer", "Hook-based Auth Flow", "Query Cache Screen", "Realtime Feed UI", "Design System Component"], keywords: ["usestate", "useeffect", "hook", "query", "boundary"] },
  python: { domain: "python backend/data teams", artifacts: ["ETL Validation Pipeline", "FastAPI Service Layer", "Data Cleaning Job", "Task Queue Worker", "Report Generator", "Audit Logging Service"], keywords: ["def", "async", "except", "pytest", "logging"] },
  typescript: { domain: "typed web platform teams", artifacts: ["Typed API Client", "Contract Validation Layer", "Domain Type Models", "Feature Flag Service", "Admin Workflow UI", "Request Adapter"], keywords: ["type", "interface", "promise", "zod", "strict"] },
  java: { domain: "enterprise java teams", artifacts: ["Order Service Module", "Transaction Boundary Layer", "Authentication Gateway", "Batch Processing Job", "REST Controller Suite", "Repository Pattern Flow"], keywords: ["class", "service", "repository", "test", "transaction"] },
  kotlin: { domain: "android/backend kotlin teams", artifacts: ["Coroutine Feed Loader", "StateFlow ViewModel", "Offline Repository", "Auth Session Handler", "Feature Flag Config", "Crash-safe Form Flow"], keywords: ["suspend", "flow", "stateflow", "when", "data class"] },
  php: { domain: "web backend php teams", artifacts: ["Laravel-style Auth API", "Request Validation Layer", "Billing Endpoint", "Session Security Guard", "Admin Reporting Route", "Queue-backed Email Workflow"], keywords: ["php", "json", "request", "middleware", "session"] },
  go: { domain: "go service teams", artifacts: ["Go HTTP Handler", "Context-aware Worker", "Concurrency-safe Cache", "Queue Consumer", "Metrics Endpoint", "Deployment Health Check"], keywords: ["func", "context", "error", "goroutine", "test"] },
  csharp: { domain: ".NET product teams", artifacts: ["ASP.NET API Endpoint", "CQRS Command Handler", "Role Authorization Filter", "Background Hosted Service", "Telemetry Middleware", "Integration Test Fixture"], keywords: ["controller", "async", "iactionresult", "di", "logger"] },
  rust: { domain: "systems/backend rust teams", artifacts: ["Rust CLI Service", "Ownership-safe Parser", "Async Tokio Worker", "Error Domain Mapper", "Config Loader", "High-throughput Pipeline"], keywords: ["fn", "result", "match", "tokio", "serde"] },
  cpp: { domain: "performance c++ teams", artifacts: ["RAII Resource Manager", "Low-latency Processing Loop", "Thread-safe Queue", "Serialization Module", "Memory-safe Adapter", "Diagnostics Collector"], keywords: ["std::", "class", "thread", "unique_ptr", "return"] },
  sql: { domain: "data/analytics teams", artifacts: ["Revenue Reporting Query", "Index Tuning Pass", "Migration Safety Script", "Access-controlled View", "Data Quality Checks", "OLTP Join Strategy"], keywords: ["select", "join", "where", "index", "transaction"] },
  bash: { domain: "devops/platform teams", artifacts: ["Deployment Automation Script", "Backup Rotation Job", "CI Validation Hook", "Env Bootstrap Script", "Incident Diagnostics Script", "Rollback Utility"], keywords: ["set -euo pipefail", "if", "exit", "bash", "shellcheck"] },
  dart: { domain: "flutter mobile teams", artifacts: ["Flutter State-driven Screen", "Repository + Service Layer", "Offline Task Sync", "Auth Session Guard", "Form Validation UX", "Widget Test Harness"], keywords: ["future", "setstate", "provider", "async", "widget"] },
  cloudkit: { domain: "apple cloud sync teams", artifacts: ["CKRecord Save Flow", "Zone Conflict Resolver", "Sync Retry Strategy", "Share Permissions Guard", "Offline Merge Queue", "CloudKit Diagnostics"], keywords: ["ckrecord", "save", "zone", "sync", "error"] },
  firebase: { domain: "firebase app teams", artifacts: ["Firestore Rules-safe CRUD", "Auth Session Workflow", "Realtime Listener Feed", "Storage Upload Policy", "Cost-aware Query Layer", "Crash + Analytics Wiring"], keywords: ["firestore", "auth", "rules", "collection", "catch"] }
};

function buildLanguageProjectBlueprints(language) {
  const profile = languageIndustryProfiles[language] || languageIndustryProfiles.web;

  return projectTrackTemplates.map((track, index) => {
    const artifact = profile.artifacts[index % profile.artifacts.length];
    const keyword = profile.keywords[index % profile.keywords.length];
    return {
      id: `${track.id}-${index + 1}`,
      title: `${artifact} • ${track.name}`,
      task: `${track.objective} for ${profile.domain}, centered on ${artifact}. Use ${keyword} in a production-style implementation.`,
      checks: [track.checks[0], keyword, track.checks[1]]
    };
  });
}

const languageContexts = {
  swift: { starterHint: "Use SwiftUI state + async/await + Codable.", tokenHints: ["@State", "await", "Codable"] },
  web: { starterHint: "Use semantic HTML + fetch + robust DOM updates.", tokenHints: ["fetch(", "addEventListener", "catch"] },
  react: { starterHint: "Use hooks and component-driven state transitions.", tokenHints: ["useState", "useEffect", "error"] },
  python: { starterHint: "Use clear functions, exceptions, and typed returns.", tokenHints: ["def ", "except", "return"] },
  typescript: { starterHint: "Use strict types and service abstraction.", tokenHints: ["type ", ": Promise", "return"] },
  java: { starterHint: "Use class/service layering and explicit validation.", tokenHints: ["class ", "if", "return"] },
  kotlin: { starterHint: "Use data/sealed classes and coroutine-safe flow.", tokenHints: ["data class", "suspend", "when"] },
  go: { starterHint: "Use handlers/services and explicit error returns.", tokenHints: ["func ", "error", "return"] },
  csharp: { starterHint: "Use endpoint/action patterns with status responses.", tokenHints: ["IActionResult", "BadRequest", "Ok("] },
  php: { starterHint: "Use validated request parsing and JSON responses.", tokenHints: ["json_decode", "if", "json_encode"] },
  dart: { starterHint: "Use async services and strongly typed models.", tokenHints: ["Future<", "async", "return"] },
  rust: { starterHint: "Use Result/Option and explicit error branches.", tokenHints: ["Result<", "Err(", "Ok("] },
  cpp: { starterHint: "Use typed functions, checks, and deterministic returns.", tokenHints: ["std::", "if", "return"] },
  sql: { starterHint: "Use SELECT/JOIN/GROUP BY and safe filtering.", tokenHints: ["SELECT", "JOIN", "WHERE"] },
  bash: { starterHint: "Use strict mode and explicit exit statuses.", tokenHints: ["set -euo pipefail", "if", "exit"] },
  firebase: { starterHint: "Use auth guard + Firestore ops + error handling.", tokenHints: ["getAuth", "collection(", "catch"] },
  cloudkit: { starterHint: "Use CKRecord save flow + completion error checks.", tokenHints: ["CKRecord", "save(", "if let error"] }
};

function getProjectMeta(index) {
  const metadata = [
    { difficulty: "Beginner → Intermediate", timeEstimate: "1-2 hours" },
    { difficulty: "Intermediate", timeEstimate: "2-3 hours" },
    { difficulty: "Intermediate", timeEstimate: "2-4 hours" },
    { difficulty: "Intermediate → Advanced", timeEstimate: "3-5 hours" },
    { difficulty: "Advanced", timeEstimate: "4-6 hours" },
    { difficulty: "Advanced", timeEstimate: "4-7 hours" },
    { difficulty: "Advanced", timeEstimate: "5-8 hours" },
    { difficulty: "Advanced", timeEstimate: "5-8 hours" },
    { difficulty: "Advanced", timeEstimate: "6-9 hours" },
    { difficulty: "Advanced", timeEstimate: "6-10 hours" }
  ];
  return metadata[index] || metadata[metadata.length - 1];
}

function buildProjectTemplatesForLanguage(language) {
  const context = languageContexts[language] || languageContexts.web;
  const label = languageLabels[language] || language;
  const projectBlueprints = buildLanguageProjectBlueprints(language);

  return projectBlueprints.map((blueprint, index) => {
    const meta = getProjectMeta(index);
    return {
      id: `${language}-${blueprint.id}`,
      title: blueprint.title,
      difficulty: meta.difficulty,
      timeEstimate: meta.timeEstimate,
      task: `${blueprint.task} (${label})`,
      checks: [
        { label: "Uses language-specific structure", terms: [context.tokenHints[0]] },
        { label: "Implements core project objective", terms: [blueprint.checks[0]] },
        { label: "Includes reliability/quality handling", terms: [blueprint.checks[1] || "error"] }
      ],
      starter: `// ${label}: ${blueprint.title}\n// ${context.starterHint}\n\n// TODO: ${blueprint.task}\n` 
    };
  });
}

function evaluateProjectSubmission(template, code) {
  const normalized = String(code || "").toLowerCase();
  const checks = Array.isArray(template && template.checks) ? template.checks : [];
  const lines = checks.map((check) => {
    const terms = Array.isArray(check.terms) ? check.terms : [String(check.terms || "")];
    const passed = terms.some((term) => normalized.includes(String(term).toLowerCase()));
    return `${passed ? "✅" : "⚠️"} ${check.label}`;
  });
  const passed = lines.filter((line) => line.startsWith("✅")).length;
  return { passed, total: checks.length, lines };
}

function buildProjectHint(template, hintLevel) {
  const checks = Array.isArray(template && template.checks) ? template.checks : [];
  const hintChecks = checks.slice(0, Math.max(1, Math.min(hintLevel + 1, checks.length)));
  const checklist = hintChecks.map((check, index) => `${index + 1}) ${check.label}`).join("\n");
  return [
    `Hint Level ${Math.max(1, hintLevel + 1)}:`,
    checklist,
    "Tip: implement one check at a time, then rerun IDE review."
  ].join("\n");
}

function buildProjectReference(template, language) {
  const context = languageContexts[language] || languageContexts.web;
  const checks = Array.isArray(template && template.checks) ? template.checks : [];
  const firstCheck = checks[0] && checks[0].terms ? checks[0].terms[0] : "feature";
  const secondCheck = checks[1] && checks[1].terms ? checks[1].terms[0] : "reliability";
  const thirdCheck = checks[2] && checks[2].terms ? checks[2].terms[0] : "quality";

  return [
    `// Reference Solution Outline: ${template.title}`,
    `// 1) Core objective: ${firstCheck}`,
    `// 2) Reliability path: ${secondCheck}`,
    `// 3) Quality path: ${thirdCheck}`,
    `// Language hint: ${context.starterHint}`,
    "",
    "// Implement production-safe flow below:"
  ].join("\n");
}

function renderProjectSupport(template, language) {
  if (!projectSupport || !template) {
    return;
  }

  const supportLines = [
    "PROJECT SUPPORT",
    `Attempts: ${projectReviewAttempts}`,
    projectReviewAttempts < 1
      ? "Run IDE Review first to unlock targeted hints."
      : buildProjectHint(template, projectHintLevel)
  ];

  if (projectReferenceRevealed) {
    supportLines.push("", "REFERENCE SOLUTION", buildProjectReference(template, language));
  } else if (projectReviewAttempts < 2) {
    supportLines.push("", "Reference solution unlocks after 2 review attempts.");
  } else {
    supportLines.push("", "Reference solution unlocked. Click 'Reveal Reference Solution'.");
  }

  projectSupport.textContent = supportLines.join("\n");
}

function resetProjectSupportState(template, language) {
  projectReviewAttempts = 0;
  projectHintLevel = 0;
  projectReferenceRevealed = false;
  renderProjectSupport(template, language);
}

function renderProjectFeedback(template, code) {
  if (!projectFeedback || !template) {
    return;
  }

  const customGoal = projectGoalInput ? projectGoalInput.value.trim() : "";
  const result = evaluateProjectSubmission(template, code);
  const percent = result.total ? Math.round((result.passed / result.total) * 100) : 0;
  const status = percent >= 75 ? "Ready to ship next iteration" : percent >= 45 ? "Needs one more pass" : "Needs foundational updates";

  projectFeedback.textContent = [
    "WORKSHOP IDE REVIEW",
    `Project: ${template.title}`,
    `Goal: ${customGoal || template.task}`,
    `Difficulty: ${template.difficulty} • Time: ${template.timeEstimate}`,
    `Checks passed: ${result.passed}/${result.total} (${percent}%)`,
    `Status: ${status}`,
    "",
    ...result.lines,
    "",
    "Next steps:",
    "1) Complete missing checks.",
    "2) Add one edge-case failure path.",
    "3) Refactor one block for readability."
  ].join("\n");
}

function renderProjectTypeOptions(language) {
  if (!projectTypeSelect || !projectPrompt) {
    return;
  }

  const templates = buildProjectTemplatesForLanguage(language);
  projectTypeSelect.innerHTML = "";

  templates.forEach((template) => {
    const option = document.createElement("option");
    option.value = template.id;
    option.textContent = `${template.title} (${template.difficulty} • ${template.timeEstimate})`;
    projectTypeSelect.appendChild(option);
  });

  const selected = templates[0];
  if (selected) {
    projectTypeSelect.value = selected.id;
    projectPrompt.textContent = `${selected.task} [Difficulty: ${selected.difficulty} • Estimated time: ${selected.timeEstimate}]`;
    if (projectEditor && !projectEditor.value.trim()) {
      projectEditor.value = selected.starter;
    }
    resetProjectSupportState(selected, language);
    renderProjectFeedback(selected, projectEditor ? projectEditor.value : "");
  }
}

function getSelectedProjectTemplate() {
  const language = (languageSelect && languageSelect.value) || "swift";
  const templates = buildProjectTemplatesForLanguage(language);
  return templates.find((template) => template.id === (projectTypeSelect && projectTypeSelect.value)) || templates[0] || null;
}

function updateWorkshopLinks() {
  const topic = (languageSelect && languageSelect.value) || "swift";
  const languageLabel = languageLabels[topic] || topic;

  if (projectIntro) {
    projectIntro.textContent = `Build unique ${languageLabel} industry-style projects directly in Workshop with live IDE review feedback.`;
  }

  if (debugIntro) {
    debugIntro.textContent = `Launch 50 ${languageLabel} workshop-specific debug drills. This set is separate from normal quiz debug questions.`;
  }

  if (debugStartLink) {
    debugStartLink.href = `trainer.html?topic=${encodeURIComponent(topic)}&mode=debug&source=workshop`;
    debugStartLink.textContent = `Start 50 ${languageLabel} Debug Drills`;
  }

  if (projectEditor) {
    projectEditor.value = "";
  }
  renderProjectTypeOptions(topic);
}

if (languageSelect) {
  languageSelect.addEventListener("change", updateWorkshopLinks);
}

if (projectTypeSelect) {
  projectTypeSelect.addEventListener("change", () => {
    const template = getSelectedProjectTemplate();
    const language = (languageSelect && languageSelect.value) || "swift";
    if (!template) {
      return;
    }
    if (projectPrompt) {
      projectPrompt.textContent = `${template.task} [Difficulty: ${template.difficulty} • Estimated time: ${template.timeEstimate}]`;
    }
    resetProjectSupportState(template, language);
    renderProjectFeedback(template, projectEditor ? projectEditor.value : "");
  });
}

if (projectLoadStarterBtn) {
  projectLoadStarterBtn.addEventListener("click", () => {
    const template = getSelectedProjectTemplate();
    const language = (languageSelect && languageSelect.value) || "swift";
    if (!template || !projectEditor) {
      return;
    }
    projectEditor.value = template.starter;
    resetProjectSupportState(template, language);
    renderProjectFeedback(template, projectEditor.value);
  });
}

if (projectRunReviewBtn) {
  projectRunReviewBtn.addEventListener("click", () => {
    const template = getSelectedProjectTemplate();
    const language = (languageSelect && languageSelect.value) || "swift";
    if (!template) {
      return;
    }
    projectReviewAttempts += 1;
    renderProjectSupport(template, language);
    renderProjectFeedback(template, projectEditor ? projectEditor.value : "");
  });
}

if (projectHintBtn) {
  projectHintBtn.addEventListener("click", () => {
    const template = getSelectedProjectTemplate();
    const language = (languageSelect && languageSelect.value) || "swift";
    if (!template) {
      return;
    }
    if (projectReviewAttempts < 1) {
      renderProjectSupport(template, language);
      return;
    }
    projectHintLevel = Math.min(2, projectHintLevel + 1);
    renderProjectSupport(template, language);
  });
}

if (projectRevealBtn) {
  projectRevealBtn.addEventListener("click", () => {
    const template = getSelectedProjectTemplate();
    const language = (languageSelect && languageSelect.value) || "swift";
    if (!template) {
      return;
    }
    if (projectReviewAttempts < 2) {
      renderProjectSupport(template, language);
      return;
    }
    projectReferenceRevealed = true;
    renderProjectSupport(template, language);
  });
}

updateWorkshopLinks();
