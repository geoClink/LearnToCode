const topic = new URLSearchParams(window.location.search).get("topic");
      const unitParam = new URLSearchParams(window.location.search).get("unit");
      const validTopics = ["swift", "web", "react", "python", "typescript", "java", "kotlin", "markdown", "go", "rust", "cpp", "php", "dart", "bash", "csharp", "sql", "cloudkit", "firebase", "sourcecontrol", "ides", "aiassist"];
      const selectedTopic = validTopics.includes(topic) ? topic : "";
      const validUnits = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14"];
      const selectedUnit = validUnits.includes(unitParam || "") ? unitParam : "";
      const moduleStudyGateStorageKey = "ltc-module-study-reviewed-v1";
      const backLink = document.getElementById("backToQuizLink");
      const moduleFocusCard = document.getElementById("moduleFocusCard");
      const moduleFocusTitle = document.getElementById("moduleFocusTitle");
      const moduleFocusIntro = document.getElementById("moduleFocusIntro");
      const moduleFocusList = document.getElementById("moduleFocusList");
      const startModuleQuizLink = document.getElementById("startModuleQuizLink");
      const guideExpandAllBtn = document.getElementById("guideExpandAllBtn");
      const guideCollapseAllBtn = document.getElementById("guideCollapseAllBtn");
      const guideFocusModeBtn = document.getElementById("guideFocusModeBtn");
      const guideJumpSelect = document.getElementById("guideJumpSelect");
      const guideReadabilityStatus = document.getElementById("guideReadabilityStatus");
      const interviewTitle = document.getElementById("interviewTitle");
      const interviewIntro = document.getElementById("interviewIntro");
      const interviewTipsList = document.getElementById("interviewTipsList");
      const interviewTestsList = document.getElementById("interviewTestsList");
      const architectureTitle = document.getElementById("architectureTitle");
      const architectureIntro = document.getElementById("architectureIntro");
      const architecturePatternsList = document.getElementById("architecturePatternsList");
      const architectureLanguageList = document.getElementById("architectureLanguageList");
      const completionTitle = document.getElementById("completionTitle");
      const completionIntro = document.getElementById("completionIntro");
      const completionMilestonesList = document.getElementById("completionMilestonesList");
      const completionProductionList = document.getElementById("completionProductionList");
      const completionPortfolioList = document.getElementById("completionPortfolioList");
      const completionRubricList = document.getElementById("completionRubricList");
      const projectIdeLanguage = document.getElementById("projectIdeLanguage");
      const projectIdeTemplate = document.getElementById("projectIdeTemplate");
      const projectCustomTaskInput = document.getElementById("projectCustomTaskInput");
      const projectIdeTaskPrompt = document.getElementById("projectIdeTaskPrompt");
      const projectIdeEditor = document.getElementById("projectIdeEditor");
      const projectIdeLoadStarter = document.getElementById("projectIdeLoadStarter");
      const projectIdeRunReview = document.getElementById("projectIdeRunReview");
      const projectIdeFeedback = document.getElementById("projectIdeFeedback");
      const guideOverviewTitle = document.getElementById("guideOverviewTitle");
      const guideOverviewSubtitle = document.getElementById("guideOverviewSubtitle");
      const guideOverviewMainUse = document.getElementById("guideOverviewMainUse");
      const guideOverviewHistory = document.getElementById("guideOverviewHistory");
      const guideOverviewIndustries = document.getElementById("guideOverviewIndustries");
      const sidebarTopicLinks = document.querySelectorAll(".sidebar-topic-link");

      const projectIdeLanguageNames = {
        swift: "Swift",
        web: "HTML/CSS/JavaScript",
        react: "React",
        python: "Python",
        typescript: "TypeScript",
        java: "Java",
        kotlin: "Kotlin",
        go: "Go",
        csharp: "C#",
        php: "PHP",
        dart: "Dart",
        rust: "Rust",
        cpp: "C++",
        sql: "SQL",
        bash: "Bash",
        firebase: "Firebase",
        cloudkit: "CloudKit",
        aiassist: "AI Coding Assistants"
      };

      const projectIdeTemplates = {
        swift: [
          { id: "swift-api-client", title: "iOS API Client", task: "Build a Swift async API client with loading/error states and Codable parsing.", starter: "struct Item: Codable { let id: Int; let title: String }\n\nfunc loadItems() async throws -> [Item] {\n  let (data, _) = try await URLSession.shared.data(from: URL(string: \"https://example.com/items\")!)\n  return try JSONDecoder().decode([Item].self, from: data)\n}", checks: [{ label: "Uses async/await", terms: ["async", "await"] }, { label: "Uses URLSession", terms: ["urlsession"] }, { label: "Decodes Codable data", terms: ["jsondecoder", "decode"] }] },
          { id: "swift-auth-flow", title: "Auth + Session Flow", task: "Implement login state flow with token/session handling in SwiftUI.", starter: "@MainActor\nfinal class SessionStore: ObservableObject {\n  @Published var token: String?\n  func login(email: String, password: String) async {\n    token = \"temp-token\"\n  }\n}", checks: [{ label: "Uses observable session store", terms: ["observableobject", "published"] }, { label: "Has async login flow", terms: ["async", "login"] }, { label: "Updates token/session", terms: ["token"] }] },
          { id: "swift-offline-cache", title: "Offline Cache Reader", task: "Create a stale-while-revalidate cache workflow for iOS content.", starter: "struct CacheEntry: Codable { let updatedAt: Date; let payload: String }\n\nfunc saveCache(_ entry: CacheEntry) throws {\n  let data = try JSONEncoder().encode(entry)\n  UserDefaults.standard.set(data, forKey: \"cache.entry\")\n}", checks: [{ label: "Defines cache model", terms: ["struct", "cache"] }, { label: "Persists cached data", terms: ["userdefaults", "set("] }, { label: "Encodes/decodes data", terms: ["jsonencoder", "encode"] }] },
          { id: "swift-background-sync", title: "Background Sync Worker", task: "Implement a background sync task and sync-status indicator for iOS.", starter: "@MainActor\nfinal class SyncViewModel: ObservableObject {\n  @Published var status = \"idle\"\n  func runSync() async {\n    status = \"syncing\"\n    status = \"done\"\n  }\n}", checks: [{ label: "Tracks sync state", terms: ["status"] }, { label: "Has async sync function", terms: ["async", "sync"] }, { label: "Updates UI-observable state", terms: ["published"] }] },
          { id: "swift-testing-observability", title: "Service Tests + Logging", task: "Add unit-testable service boundaries and structured logs for a Swift feature.", starter: "protocol ItemService { func load() async throws -> [String] }\n\nstruct ConsoleLogger {\n  func info(_ message: String) { print(\"[INFO] \\\(message)\") }\n}", checks: [{ label: "Defines protocol/service boundary", terms: ["protocol", "service"] }, { label: "Includes logging", terms: ["log", "print("] }, { label: "Prepared for tests", terms: ["func", "load"] }] }
        ],
        web: [
          { id: "web-api-dashboard", title: "Dashboard + Live API", task: "Build a web dashboard with fetch, loading, error, and retry states.", starter: "const output = document.getElementById('output')\n\nasync function loadDashboard() {\n  try {\n    const response = await fetch('/api/dashboard')\n    output.textContent = JSON.stringify(await response.json(), null, 2)\n  } catch (error) {\n    output.textContent = String(error)\n  }\n}", checks: [{ label: "Calls fetch API", terms: ["fetch("] }, { label: "Handles failure", terms: ["catch"] }, { label: "Renders response", terms: ["textcontent", "json"] }] },
          { id: "web-auth-portal", title: "Role-Based Auth Portal", task: "Create login/logout flow with route-level access guards in vanilla web app.", starter: "function isAuthorized(user) {\n  return user && user.role === 'admin'\n}\n\nfunction renderRoute(user) {\n  return isAuthorized(user) ? 'admin-panel' : 'login'\n}", checks: [{ label: "Defines auth/role check", terms: ["role", "authorized"] }, { label: "Switches route/view", terms: ["route", "render"] }, { label: "Handles unauthenticated case", terms: ["login"] }] },
          { id: "web-offline-pwa", title: "Offline-Ready PWA", task: "Add service-worker based offline behavior and stale content fallback.", starter: "self.addEventListener('fetch', (event) => {\n  event.respondWith(caches.match(event.request).then((cached) => cached || fetch(event.request)))\n})", checks: [{ label: "Registers fetch handler", terms: ["addEventlistener('fetch" ] }, { label: "Uses cache strategy", terms: ["caches.match"] }, { label: "Falls back to network", terms: ["fetch(event.request)"] }] },
          { id: "web-file-upload", title: "File Upload Workflow", task: "Implement file upload form with validation and progress feedback.", starter: "async function uploadFile(file) {\n  const formData = new FormData()\n  formData.append('file', file)\n  await fetch('/api/upload', { method: 'POST', body: formData })\n}", checks: [{ label: "Uses FormData", terms: ["formdata"] }, { label: "Posts file to API", terms: ["method: 'post'", "fetch("] }, { label: "Defines upload function", terms: ["upload"] }] },
          { id: "web-observability", title: "Client Monitoring Layer", task: "Capture API timing and front-end errors to a logging endpoint.", starter: "function logClientEvent(type, details) {\n  return fetch('/api/logs', {\n    method: 'POST',\n    headers: { 'Content-Type': 'application/json' },\n    body: JSON.stringify({ type, details, at: Date.now() })\n  })\n}", checks: [{ label: "Posts logs to backend", terms: ["/api/logs", "post"] }, { label: "Sends structured payload", terms: ["json.stringify"] }, { label: "Includes timestamp/event info", terms: ["date.now", "type"] }] }
        ],
        react: [
          { id: "react-query-board", title: "Task Board + Async State", task: "Build React task board with loading/error/success UI states.", starter: "import { useEffect, useState } from 'react'\n\nexport default function TaskBoard() {\n  const [tasks, setTasks] = useState([])\n  const [status, setStatus] = useState('idle')\n\n  useEffect(() => {\n    // fetch tasks\n  }, [])\n\n  return <div>{status}</div>\n}", checks: [{ label: "Uses useState", terms: ["usestate"] }, { label: "Uses useEffect", terms: ["useeffect"] }, { label: "Tracks status state", terms: ["status"] }] },
          { id: "react-auth-routes", title: "Protected Routes", task: "Implement auth context and protected route rendering for React app.", starter: "import { createContext, useContext } from 'react'\n\nconst AuthContext = createContext({ user: null })\nexport function useAuth() { return useContext(AuthContext) }", checks: [{ label: "Defines auth context", terms: ["createcontext", "auth"] }, { label: "Uses context hook", terms: ["usecontext"] }, { label: "References user/session", terms: ["user"] }] },
          { id: "react-form-workflow", title: "Validated Form Workflow", task: "Create a production-style form with validation and submit error handling.", starter: "const [form, setForm] = useState({ email: '' })\nconst [error, setError] = useState('')\n\nasync function handleSubmit(event) {\n  event.preventDefault()\n  if (!form.email) setError('Email required')\n}", checks: [{ label: "Handles submit event", terms: ["handlesubmit", "preventdefault"] }, { label: "Validates input", terms: ["if (!form.email", "error"] }, { label: "Stores form state", terms: ["setform", "usestate"] }] },
          { id: "react-optimistic-crud", title: "Optimistic CRUD", task: "Implement optimistic UI updates for create/delete task actions.", starter: "function addTaskOptimistic(newTask) {\n  setTasks((current) => [newTask, ...current])\n  // call API then reconcile on failure\n}", checks: [{ label: "Uses state update function", terms: ["settasks", "current"] }, { label: "Implements optimistic add/remove", terms: ["optimistic", "api"] }, { label: "Mentions failure rollback", terms: ["failure", "reconcile"] }] },
          { id: "react-observability", title: "Error Boundary + Metrics", task: "Add error boundary and client metrics tracking to a React feature.", starter: "class AppErrorBoundary extends React.Component {\n  componentDidCatch(error) {\n    console.log('ui-error', error)\n  }\n  render() { return this.props.children }\n}", checks: [{ label: "Uses error boundary lifecycle", terms: ["componentdidcatch"] }, { label: "Logs error events", terms: ["console.log", "error"] }, { label: "Wraps children render", terms: ["this.props.children"] }] }
        ],
        python: [
          { id: "python-api-client", title: "Resilient API Client", task: "Write Python service with timeout, retry, and safe parsing.", starter: "import requests\n\ndef fetch_orders(url: str):\n    response = requests.get(url, timeout=5)\n    response.raise_for_status()\n    return response.json()", checks: [{ label: "Uses requests.get", terms: ["requests.get"] }, { label: "Sets timeout", terms: ["timeout="] }, { label: "Parses JSON", terms: ["response.json"] }] },
          { id: "python-auth-service", title: "Auth Token Service", task: "Build token validation middleware for Python API service.", starter: "def validate_token(token: str) -> bool:\n    if not token:\n        return False\n    return token.startswith('Bearer ')", checks: [{ label: "Defines token validation function", terms: ["validate_token"] }, { label: "Checks missing token", terms: ["if not token"] }, { label: "Returns bool decision", terms: ["return"] }] },
          { id: "python-data-pipeline", title: "Data Pipeline Job", task: "Create ETL-style transform function for incoming API records.", starter: "def transform_records(records: list[dict]) -> list[dict]:\n    cleaned = []\n    for record in records:\n        cleaned.append({'id': record.get('id'), 'status': record.get('status', 'unknown')})\n    return cleaned", checks: [{ label: "Defines transform function", terms: ["transform_records"] }, { label: "Loops records", terms: ["for record in records"] }, { label: "Returns transformed data", terms: ["return cleaned"] }] },
          { id: "python-background-worker", title: "Background Worker Queue", task: "Implement queue worker loop with retry and logging.", starter: "import time\n\ndef worker(queue):\n    while True:\n        job = queue.pop(0) if queue else None\n        if not job:\n            break\n        print('processing', job)", checks: [{ label: "Implements worker loop", terms: ["while", "worker"] }, { label: "Processes queue items", terms: ["job", "queue"] }, { label: "Logs or prints processing", terms: ["print("] }] },
          { id: "python-tests-logging", title: "Tests + Structured Logging", task: "Add testable service function and structured log output.", starter: "def log_event(event: str, data: dict) -> dict:\n    payload = {'event': event, 'data': data}\n    print(payload)\n    return payload", checks: [{ label: "Returns log payload", terms: ["payload", "return"] }, { label: "Includes event/data fields", terms: ["event", "data"] }, { label: "Is testable pure function", terms: ["def", "dict"] }] }
        ],
        typescript: [
          { id: "ts-api-layer", title: "Typed API Layer", task: "Create fully typed service/repository API wrapper.", starter: "type User = { id: string; email: string }\n\nexport async function loadUsers(): Promise<User[]> {\n  const response = await fetch('/api/users')\n  return response.json() as Promise<User[]>\n}", checks: [{ label: "Uses TypeScript types", terms: ["type user", ": promise<"] }, { label: "Calls fetch asynchronously", terms: ["await", "fetch("] }, { label: "Returns typed payload", terms: ["user[]"] }] },
          { id: "ts-auth-guards", title: "Auth Guards", task: "Implement role-aware route guard and token validation utility.", starter: "type Session = { token: string; role: 'admin' | 'member' }\n\nexport function canAccess(session: Session | null): boolean {\n  return Boolean(session?.token) && session?.role === 'admin'\n}", checks: [{ label: "Defines typed session model", terms: ["type session"] }, { label: "Implements guard function", terms: ["canaccess"] }, { label: "Checks token and role", terms: ["token", "role"] }] },
          { id: "ts-form-validation", title: "Schema-Validated Forms", task: "Build typed form workflow with runtime validation errors.", starter: "type SignupForm = { email: string; password: string }\n\nexport function validateSignup(form: SignupForm): string[] {\n  const errors: string[] = []\n  if (!form.email) errors.push('email required')\n  return errors\n}", checks: [{ label: "Uses typed form model", terms: ["type signupform"] }, { label: "Returns validation errors", terms: ["errors", "return"] }, { label: "Checks required fields", terms: ["if (!form.email"] }] },
          { id: "ts-queue-worker", title: "Queue Processor", task: "Implement typed queue worker with retry metadata.", starter: "type Job = { id: string; retries: number }\n\nexport async function processJob(job: Job): Promise<void> {\n  if (job.retries > 3) throw new Error('retry limit')\n}", checks: [{ label: "Defines job type", terms: ["type job"] }, { label: "Implements async processor", terms: ["async", "processjob"] }, { label: "Handles retry threshold", terms: ["retries", "throw"] }] },
          { id: "ts-observability", title: "Telemetry + Error Map", task: "Add typed telemetry events and error mapping in service layer.", starter: "type TelemetryEvent = { name: string; level: 'info' | 'error'; at: number }\n\nexport function track(event: TelemetryEvent): void {\n  console.log(event)\n}", checks: [{ label: "Defines telemetry type", terms: ["type telemetryevent"] }, { label: "Logs/tracks event", terms: ["track(", "console.log"] }, { label: "Includes severity/time fields", terms: ["level", "at"] }] }
        ],
        java: [
          { id: "java-rest-service", title: "REST Service Endpoint", task: "Build Java service method + controller response mapping.", starter: "public class UserService {\n  public String createUser(String email) {\n    if (email == null || email.isEmpty()) return \"INVALID\";\n    return \"CREATED\";\n  }\n}", checks: [{ label: "Defines Java class + method", terms: ["class", "public"] }, { label: "Validates input", terms: ["if", "isempty"] }, { label: "Returns explicit status", terms: ["return"] }] },
          { id: "java-auth-filter", title: "JWT Auth Filter", task: "Implement token-based request auth filter in Java backend.", starter: "public boolean isAuthorized(String token) {\n  return token != null && token.startsWith(\"Bearer \" );\n}", checks: [{ label: "Defines auth check", terms: ["authorized", "token"] }, { label: "Checks null token", terms: ["!= null"] }, { label: "Checks Bearer prefix", terms: ["startswith"] }] },
          { id: "java-db-repository", title: "Repository + Persistence", task: "Create repository method for save/find with safe null checks.", starter: "public Optional<User> findUser(String id) {\n  if (id == null) return Optional.empty();\n  return Optional.of(new User());\n}", checks: [{ label: "Uses Optional result", terms: ["optional"] }, { label: "Validates id input", terms: ["if (id == null)"] }, { label: "Returns data path", terms: ["return optional"] }] },
          { id: "java-batch-job", title: "Batch Processing Job", task: "Implement Java batch processor with per-item failure handling.", starter: "public void processBatch(List<String> ids) {\n  for (String id : ids) {\n    try {\n      System.out.println(id);\n    } catch (Exception error) {\n      System.out.println(error.getMessage());\n    }\n  }\n}", checks: [{ label: "Iterates batch list", terms: ["for (string", "ids"] }, { label: "Wraps processing in try/catch", terms: ["try", "catch"] }, { label: "Logs item or error", terms: ["system.out.println"] }] },
          { id: "java-tests-logging", title: "Service Testing Readiness", task: "Refactor Java service for testability and structured logging.", starter: "public class AuditLogger {\n  public void info(String message) {\n    System.out.println(\"INFO: \" + message);\n  }\n}", checks: [{ label: "Defines reusable logger/service", terms: ["class", "logger"] }, { label: "Provides structured log method", terms: ["info", "message"] }, { label: "Ready for injection/testing", terms: ["public", "void"] }] }
        ],
        kotlin: [
          { id: "kotlin-api-repo", title: "Repository + Result State", task: "Build Kotlin repository returning success/error result type.", starter: "sealed class RepoResult<out T> {\n  data class Success<T>(val data: T) : RepoResult<T>()\n  data class Error(val message: String) : RepoResult<Nothing>()\n}\n\nsuspend fun loadUsers(): RepoResult<List<String>> = RepoResult.Error(\"TODO\")", checks: [{ label: "Uses sealed result type", terms: ["sealed class", "result"] }, { label: "Uses suspend function", terms: ["suspend fun"] }, { label: "Returns success/error", terms: ["success", "error"] }] },
          { id: "kotlin-auth-state", title: "Auth State Manager", task: "Implement auth state holder and guarded feature access in Kotlin.", starter: "data class Session(val token: String?, val role: String)\n\nfun canAccessAdmin(session: Session): Boolean {\n  return !session.token.isNullOrBlank() && session.role == \"admin\"\n}", checks: [{ label: "Defines session model", terms: ["data class session"] }, { label: "Checks token null/blank", terms: ["isnullorblank"] }, { label: "Checks role", terms: ["role", "admin"] }] },
          { id: "kotlin-cache-sync", title: "Cache + Sync Coordinator", task: "Create local cache + refresh sync function for Android.", starter: "class CacheStore {\n  private val data = mutableListOf<String>()\n  fun save(items: List<String>) { data.clear(); data.addAll(items) }\n}", checks: [{ label: "Defines cache store class", terms: ["class cachestore"] }, { label: "Maintains mutable list", terms: ["mutablelistof"] }, { label: "Saves synced items", terms: ["save(", "addall"] }] },
          { id: "kotlin-worker", title: "Background WorkManager Task", task: "Implement resilient worker task with retry path in Kotlin.", starter: "class SyncWorker {\n  fun run(): Boolean {\n    return try {\n      true\n    } catch (error: Exception) {\n      false\n    }\n  }\n}", checks: [{ label: "Defines worker-like class", terms: ["class", "worker"] }, { label: "Uses try/catch", terms: ["try", "catch"] }, { label: "Returns success/failure", terms: ["true", "false"] }] },
          { id: "kotlin-observability", title: "Event Tracking + Diagnostics", task: "Add event logging utility and failure diagnostics for Kotlin app.", starter: "fun logEvent(name: String, meta: Map<String, String>) {\n  println(\"event=\\$name meta=\\$meta\")\n}", checks: [{ label: "Defines logging function", terms: ["fun logevent"] }, { label: "Accepts metadata", terms: ["map<", "meta"] }, { label: "Prints structured output", terms: ["println", "event="] }] }
        ],
        go: [
          { id: "go-http-api", title: "HTTP API Endpoint", task: "Build Go handler with JSON request parsing and response output.", starter: "func createUserHandler(w http.ResponseWriter, r *http.Request) {\n  var payload map[string]string\n  _ = json.NewDecoder(r.Body).Decode(&payload)\n  _ = json.NewEncoder(w).Encode(payload)\n}", checks: [{ label: "Defines handler signature", terms: ["http.responsewriter", "*http.request"] }, { label: "Decodes request body", terms: ["json.newdecoder", "decode"] }, { label: "Encodes JSON response", terms: ["json.newencoder", "encode"] }] },
          { id: "go-auth-middleware", title: "Auth Middleware", task: "Implement Bearer token middleware for protected routes in Go.", starter: "func authMiddleware(next http.Handler) http.Handler {\n  return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {\n    token := r.Header.Get(\"Authorization\")\n    if token == \"\" { http.Error(w, \"unauthorized\", http.StatusUnauthorized); return }\n    next.ServeHTTP(w, r)\n  })\n}", checks: [{ label: "Defines middleware wrapper", terms: ["middleware", "http.handler"] }, { label: "Reads Authorization header", terms: ["authorization", "header.get"] }, { label: "Blocks unauthorized requests", terms: ["statusunauthorized", "http.error"] }] },
          { id: "go-db-repository", title: "Repository Query Layer", task: "Create repository query method with context and error return.", starter: "func findUser(ctx context.Context, db *sql.DB, id string) (string, error) {\n  var name string\n  err := db.QueryRowContext(ctx, \"SELECT name FROM users WHERE id = ?\", id).Scan(&name)\n  return name, err\n}", checks: [{ label: "Uses context-aware query", terms: ["queryrowcontext"] }, { label: "Returns value and error", terms: [", error", "return"] }, { label: "Scans query result", terms: ["scan("] }] },
          { id: "go-worker-retries", title: "Queue Worker + Retry", task: "Implement Go worker that retries failed jobs and logs attempts.", starter: "func processJob(job string) error {\n  log.Printf(\"processing %s\", job)\n  return nil\n}", checks: [{ label: "Defines process function", terms: ["func processjob"] }, { label: "Logs job processing", terms: ["log.print"] }, { label: "Returns error result", terms: ["error", "return nil"] }] },
          { id: "go-observability", title: "Request Metrics Middleware", task: "Capture request duration and status for Go API calls.", starter: "func metricsMiddleware(next http.Handler) http.Handler {\n  return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {\n    start := time.Now()\n    next.ServeHTTP(w, r)\n    log.Printf(\"path=%s duration=%s\", r.URL.Path, time.Since(start))\n  })\n}", checks: [{ label: "Measures start time", terms: ["time.now"] }, { label: "Calls next handler", terms: ["servehttp"] }, { label: "Logs duration/path", terms: ["duration", "url.path"] }] }
        ],
        csharp: [
          { id: "csharp-api-endpoint", title: "ASP.NET API Endpoint", task: "Build endpoint with validation and structured response model.", starter: "[HttpPost]\npublic IActionResult CreateUser([FromBody] CreateUserRequest request)\n{\n    if (string.IsNullOrWhiteSpace(request.Email)) return BadRequest();\n    return Ok(new { status = \"created\" });\n}", checks: [{ label: "Defines endpoint method", terms: ["httppost", "iactionresult"] }, { label: "Validates request input", terms: ["isnullorwhitespace", "badrequest"] }, { label: "Returns success payload", terms: ["ok(", "status"] }] },
          { id: "csharp-auth-policy", title: "Auth Policy Guard", task: "Implement policy/role check before sensitive action.", starter: "public bool CanAccess(string role, string token)\n{\n    return !string.IsNullOrWhiteSpace(token) && role == \"Admin\";\n}", checks: [{ label: "Checks token validity", terms: ["isnullorwhitespace", "token"] }, { label: "Checks role authorization", terms: ["role", "admin"] }, { label: "Returns bool guard", terms: ["return", "bool"] }] },
          { id: "csharp-repository", title: "Repository + EF Query", task: "Create repository method for filtered data retrieval.", starter: "public async Task<List<User>> GetActiveUsers(AppDbContext db)\n{\n    return await db.Users.Where(u => u.IsActive).ToListAsync();\n}", checks: [{ label: "Uses async Task return", terms: ["task<", "async"] }, { label: "Filters active records", terms: ["where(", "isactive"] }, { label: "Executes query", terms: ["tolistasync"] }] },
          { id: "csharp-background-job", title: "Background Job Processor", task: "Implement background processing service with error handling.", starter: "public async Task RunJobAsync()\n{\n    try {\n        await Task.Delay(100);\n    }\n    catch (Exception ex) {\n        Console.WriteLine(ex.Message);\n    }\n}", checks: [{ label: "Defines async job method", terms: ["runjobasync", "task"] }, { label: "Uses try/catch", terms: ["try", "catch"] }, { label: "Handles/logs exception", terms: ["console.writeline", "exception"] }] },
          { id: "csharp-telemetry", title: "Telemetry + Diagnostics", task: "Add telemetry logging helper for operation success/failure.", starter: "public void LogEvent(string name, string level)\n{\n    Console.WriteLine($\"event={name} level={level}\");\n}", checks: [{ label: "Defines logging helper", terms: ["logevent"] }, { label: "Includes event level", terms: ["level", "event="] }, { label: "Writes diagnostic output", terms: ["console.writeline"] }] }
        ],
        php: [
          { id: "php-rest-api", title: "REST Endpoint + Validation", task: "Build PHP JSON endpoint with validation and status output.", starter: "$input = json_decode(file_get_contents('php://input'), true);\nif (empty($input['email'])) {\n  echo json_encode(['error' => 'email required']);\n  exit;\n}\necho json_encode(['status' => 'created']);", checks: [{ label: "Parses JSON body", terms: ["json_decode", "php://input"] }, { label: "Validates required field", terms: ["empty(", "email"] }, { label: "Returns JSON response", terms: ["json_encode"] }] },
          { id: "php-auth-guard", title: "Token Auth Guard", task: "Implement token guard for PHP protected endpoints.", starter: "$token = $_SERVER['HTTP_AUTHORIZATION'] ?? '';\nif (!$token) {\n  http_response_code(401);\n  echo json_encode(['error' => 'unauthorized']);\n}", checks: [{ label: "Reads auth header", terms: ["http_authorization"] }, { label: "Handles unauthorized case", terms: ["401", "unauthorized"] }, { label: "Returns JSON error", terms: ["json_encode"] }] },
          { id: "php-repository", title: "PDO Repository Query", task: "Create PDO query helper for safe parameterized reads.", starter: "$stmt = $pdo->prepare('SELECT id, name FROM users WHERE status = :status');\n$stmt->execute(['status' => 'active']);\n$rows = $stmt->fetchAll(PDO::FETCH_ASSOC);", checks: [{ label: "Uses prepared statement", terms: ["prepare("] }, { label: "Executes with params", terms: ["execute(", "status"] }, { label: "Fetches result rows", terms: ["fetchall"] }] },
          { id: "php-queue-worker", title: "Queue Worker Script", task: "Build PHP worker script that processes and logs queued jobs.", starter: "$jobs = ['email-1', 'email-2'];\nforeach ($jobs as $job) {\n  error_log('processing ' . $job);\n}", checks: [{ label: "Loops queued jobs", terms: ["foreach", "jobs"] }, { label: "Logs processing", terms: ["error_log"] }, { label: "Processes each item", terms: ["$job"] }] },
          { id: "php-observability", title: "Request Audit Logging", task: "Capture request metadata and write structured audit logs.", starter: "$log = ['path' => $_SERVER['REQUEST_URI'] ?? '/', 'at' => time()];\nerror_log(json_encode($log));", checks: [{ label: "Captures request metadata", terms: ["request_uri", "path"] }, { label: "Includes timestamp", terms: ["time()", "at"] }, { label: "Writes structured log", terms: ["json_encode", "error_log"] }] }
        ],
        dart: [
          { id: "dart-api-service", title: "Flutter API Service", task: "Implement Dart service for API fetch + model parsing.", starter: "Future<List<String>> loadProjects() async {\n  final response = await http.get(Uri.parse('https://example.com/projects'));\n  return ['ok'];\n}", checks: [{ label: "Uses async Future method", terms: ["future<", "async"] }, { label: "Calls http.get", terms: ["http.get"] }, { label: "Returns parsed list", terms: ["return", "list"] }] },
          { id: "dart-auth-state", title: "Auth State + Routing", task: "Create auth state check and route decision in Flutter app.", starter: "bool isAuthenticated(String? token) {\n  return token != null && token.isNotEmpty;\n}", checks: [{ label: "Defines auth state helper", terms: ["isauthenticated"] }, { label: "Checks token null/empty", terms: ["!= null", "isnotempty"] }, { label: "Returns bool", terms: ["return", "bool"] }] },
          { id: "dart-offline-cache", title: "Offline Cache Store", task: "Add local cache write/read flow for Flutter feature.", starter: "class CacheStore {\n  final Map<String, String> _cache = {};\n  void save(String key, String value) => _cache[key] = value;\n  String? read(String key) => _cache[key];\n}", checks: [{ label: "Defines cache class", terms: ["class cachestore"] }, { label: "Implements save method", terms: ["save(", "_cache"] }, { label: "Implements read method", terms: ["read(", "string?"] }] },
          { id: "dart-background-task", title: "Background Sync Trigger", task: "Create a periodic sync trigger and status update function.", starter: "Future<void> runSync() async {\n  try {\n    // sync data\n  } catch (error) {\n    print(error);\n  }\n}", checks: [{ label: "Defines async sync method", terms: ["future<void>", "runsync"] }, { label: "Wraps sync in try/catch", terms: ["try", "catch"] }, { label: "Logs errors", terms: ["print(error)"] }] },
          { id: "dart-logging", title: "Telemetry Event Logger", task: "Add telemetry logging utility for Flutter actions.", starter: "void trackEvent(String name, Map<String, dynamic> meta) {\n  print({'event': name, 'meta': meta, 'at': DateTime.now().toIso8601String()});\n}", checks: [{ label: "Defines tracking function", terms: ["trackevent"] }, { label: "Includes metadata map", terms: ["map<string, dynamic>", "meta"] }, { label: "Logs timestamped payload", terms: ["datetime.now", "event"] }] }
        ],
        rust: [
          { id: "rust-api-client", title: "HTTP Client + Result", task: "Build Rust API call returning Result with parse/error handling.", starter: "fn fetch_user(id: &str) -> Result<String, String> {\n    if id.is_empty() {\n        return Err(\"missing id\".to_string());\n    }\n    Ok(format!(\"user:{}\", id))\n}", checks: [{ label: "Returns Result type", terms: ["result<"] }, { label: "Handles error path", terms: ["err("] }, { label: "Returns success value", terms: ["ok("] }] },
          { id: "rust-auth-check", title: "Token Guard Function", task: "Implement auth token validation function in Rust.", starter: "fn is_authorized(token: Option<&str>) -> bool {\n    matches!(token, Some(value) if !value.is_empty())\n}", checks: [{ label: "Uses Option for token", terms: ["option<"] }, { label: "Checks token validity", terms: ["is_authorized", "is_empty"] }, { label: "Returns bool", terms: ["-> bool"] }] },
          { id: "rust-data-transform", title: "Data Transform Pipeline", task: "Create transform function that maps input records safely.", starter: "fn normalize_names(values: Vec<String>) -> Vec<String> {\n    values.into_iter().map(|value| value.trim().to_lowercase()).collect()\n}", checks: [{ label: "Uses iterator mapping", terms: ["into_iter", "map("] }, { label: "Normalizes values", terms: ["trim", "to_lowercase"] }, { label: "Collects transformed data", terms: ["collect()"] }] },
          { id: "rust-worker", title: "Worker Loop + Retry Count", task: "Implement worker loop with retry-safe result handling.", starter: "fn process_jobs(jobs: Vec<String>) {\n    for job in jobs {\n        println!(\"processing {}\", job);\n    }\n}", checks: [{ label: "Loops through jobs", terms: ["for", "jobs"] }, { label: "Processes each job", terms: ["processing"] }, { label: "Uses println for diagnostics", terms: ["println!"] }] },
          { id: "rust-logging", title: "Structured Event Logger", task: "Add structured event logging helper for operations.", starter: "fn log_event(event: &str, status: &str) {\n    println!(\"event={} status={}\", event, status);\n}", checks: [{ label: "Defines logging helper", terms: ["fn log_event"] }, { label: "Includes event and status", terms: ["event", "status"] }, { label: "Writes formatted output", terms: ["println!"] }] }
        ],
        cpp: [
          { id: "cpp-api-client", title: "HTTP Adapter Interface", task: "Design C++ API adapter interface and error return contract.", starter: "#include <string>\n\nstruct ApiResult { bool ok; std::string body; };\nApiResult fetchUser(const std::string& id) {\n  if (id.empty()) return {false, \"missing id\"};\n  return {true, \"{}\"};\n}", checks: [{ label: "Defines result struct", terms: ["struct apiresult"] }, { label: "Validates id input", terms: ["id.empty()"] }, { label: "Returns success/failure", terms: ["return {false", "return {true"] }] },
          { id: "cpp-auth-guard", title: "Authorization Guard", task: "Implement token/role authorization check in C++ service logic.", starter: "bool canAccess(const std::string& token, const std::string& role) {\n  return !token.empty() && role == \"admin\";\n}", checks: [{ label: "Defines guard function", terms: ["bool canaccess"] }, { label: "Checks non-empty token", terms: ["!token.empty()"] }, { label: "Checks admin role", terms: ["role == \"admin\""] }] },
          { id: "cpp-repository", title: "Repository Read Function", task: "Create C++ repository-style function with safe optional result.", starter: "#include <optional>\n\nstd::optional<std::string> findUserName(int id) {\n  if (id <= 0) return std::nullopt;\n  return std::string(\"Ava\");\n}", checks: [{ label: "Uses std::optional", terms: ["std::optional"] }, { label: "Validates id before read", terms: ["id <= 0"] }, { label: "Returns nullopt or value", terms: ["std::nullopt", "return std::string"] }] },
          { id: "cpp-worker", title: "Batch Processor", task: "Build C++ batch processor loop with per-item error handling.", starter: "void processItems(const std::vector<std::string>& items) {\n  for (const auto& item : items) {\n    std::cout << item << std::endl;\n  }\n}", checks: [{ label: "Iterates through input items", terms: ["for (const auto& item"] }, { label: "Processes each item", terms: ["processitems"] }, { label: "Logs output", terms: ["std::cout"] }] },
          { id: "cpp-logging", title: "Operational Logging", task: "Add C++ structured logging helper for production diagnostics.", starter: "void logEvent(const std::string& event, const std::string& status) {\n  std::cout << \"event=\" << event << \" status=\" << status << std::endl;\n}", checks: [{ label: "Defines log function", terms: ["void logevent"] }, { label: "Includes event + status", terms: ["event=", "status="] }, { label: "Uses stream output", terms: ["std::cout", "std::endl"] }] }
        ],
        sql: [
          { id: "sql-reporting", title: "Business KPI Report", task: "Write SQL report for active users and order totals.", starter: "SELECT u.id, u.name, COUNT(o.id) AS order_count\nFROM users u\nLEFT JOIN orders o ON o.user_id = u.id\nWHERE u.is_active = 1\nGROUP BY u.id, u.name;", checks: [{ label: "Uses SELECT with aggregate", terms: ["select", "count("] }, { label: "Joins related tables", terms: ["join", "on"] }, { label: "Groups report results", terms: ["group by"] }] },
          { id: "sql-auth-audit", title: "Auth Audit Query", task: "Create SQL query to detect suspicious login attempts by user.", starter: "SELECT user_id, COUNT(*) AS failed_attempts\nFROM login_events\nWHERE status = 'failed'\nGROUP BY user_id\nHAVING COUNT(*) >= 3;", checks: [{ label: "Filters failed events", terms: ["where", "failed"] }, { label: "Groups by user", terms: ["group by user_id"] }, { label: "Uses HAVING threshold", terms: ["having", "count(*)"] }] },
          { id: "sql-data-cleanup", title: "Data Quality Cleanup", task: "Write SQL to detect and clean duplicate business records.", starter: "SELECT email, COUNT(*)\nFROM customers\nGROUP BY email\nHAVING COUNT(*) > 1;", checks: [{ label: "Groups by candidate key", terms: ["group by", "email"] }, { label: "Detects duplicates", terms: ["having", "> 1"] }, { label: "Uses aggregate count", terms: ["count(*)"] }] },
          { id: "sql-batch-update", title: "Safe Batch Update", task: "Create transaction-safe SQL update script for status migrations.", starter: "BEGIN TRANSACTION;\nUPDATE orders\nSET status = 'archived'\nWHERE status = 'completed' AND updated_at < CURRENT_DATE - INTERVAL '90 day';\nCOMMIT;", checks: [{ label: "Uses transaction boundaries", terms: ["begin", "commit"] }, { label: "Updates targeted rows", terms: ["update", "where"] }, { label: "Uses date condition", terms: ["updated_at", "interval"] }] },
          { id: "sql-observability", title: "Latency/Failure Metrics", task: "Write SQL metrics query for API latency and error rates.", starter: "SELECT endpoint, AVG(duration_ms) AS avg_duration, SUM(CASE WHEN status_code >= 500 THEN 1 ELSE 0 END) AS server_errors\nFROM api_logs\nGROUP BY endpoint;", checks: [{ label: "Computes aggregate metrics", terms: ["avg(", "sum("] }, { label: "Uses CASE for error count", terms: ["case when", "status_code"] }, { label: "Groups by endpoint", terms: ["group by endpoint"] }] }
        ],
        bash: [
          { id: "bash-log-health", title: "Log Health Checker", task: "Build shell script that fails CI when critical errors appear.", starter: "#!/usr/bin/env bash\nset -euo pipefail\n\nlog_file=\"app.log\"\nif grep -q \"ERROR\" \"$log_file\"; then\n  echo \"error found\"\n  exit 1\nfi\nexit 0", checks: [{ label: "Uses strict mode", terms: ["set -euo pipefail"] }, { label: "Searches for error pattern", terms: ["grep", "error"] }, { label: "Sets proper exit codes", terms: ["exit 1", "exit 0"] }] },
          { id: "bash-deploy-script", title: "Deploy Script", task: "Create deployment script with safety checks and rollback guard.", starter: "#!/usr/bin/env bash\nset -euo pipefail\n\n[[ -z \"${ENV:-}\" ]] && { echo \"ENV missing\"; exit 1; }\necho \"deploying to $ENV\"", checks: [{ label: "Checks required ENV", terms: ["env", "exit 1"] }, { label: "Uses conditional guard", terms: ["[[", "]]", "&&"] }, { label: "Logs deploy target", terms: ["deploying", "$env"] }] },
          { id: "bash-backup-job", title: "Backup + Retention Job", task: "Implement backup script with retention pruning policy.", starter: "#!/usr/bin/env bash\nset -euo pipefail\n\nmkdir -p backups\ncp data.json \"backups/data-$(date +%F).json\"\nls -1t backups | tail -n +8 | xargs -I{} rm -f \"backups/{}\"", checks: [{ label: "Creates backup file", terms: ["cp", "backups"] }, { label: "Uses date-stamped filename", terms: ["date +%f", "$(date"] }, { label: "Prunes old backups", terms: ["tail -n +", "rm -f"] }] },
          { id: "bash-batch-processor", title: "Batch File Processor", task: "Build script to process multiple files with per-file logging.", starter: "#!/usr/bin/env bash\nset -euo pipefail\n\nfor file in ./inbox/*.txt; do\n  echo \"processing $file\"\ndone", checks: [{ label: "Loops through files", terms: ["for file in"] }, { label: "Processes each file", terms: ["processing", "$file"] }, { label: "Uses robust shell mode", terms: ["set -euo pipefail"] }] },
          { id: "bash-observability", title: "System Metrics Snapshot", task: "Create shell script that records CPU/memory/disk snapshot.", starter: "#!/usr/bin/env bash\nset -euo pipefail\n\necho \"cpu: $(uptime)\"\necho \"disk:\"\ndf -h", checks: [{ label: "Outputs system metrics", terms: ["uptime", "df -h"] }, { label: "Prints structured sections", terms: ["echo", "cpu:"] }, { label: "Uses strict mode", terms: ["set -euo pipefail"] }] }
        ],
        firebase: [
          { id: "firebase-auth-firestore", title: "Auth + Firestore CRUD", task: "Build Firebase auth flow with user-scoped Firestore CRUD.", starter: "import { getAuth } from 'firebase/auth'\nimport { collection, addDoc } from 'firebase/firestore'\n\nasync function addTask(db, title) {\n  const user = getAuth().currentUser\n  if (!user) throw new Error('not authenticated')\n  await addDoc(collection(db, 'tasks'), { title, uid: user.uid })\n}", checks: [{ label: "Uses Firebase auth", terms: ["getauth", "currentuser"] }, { label: "Writes Firestore document", terms: ["adddoc", "collection("] }, { label: "Scopes to user", terms: ["uid", "user.uid"] }] },
          { id: "firebase-security-rules", title: "Security Rules Pattern", task: "Implement read/write rules concept for user-owned docs.", starter: "rules_version = '2';\nservice cloud.firestore {\n  match /databases/{database}/documents {\n    match /tasks/{taskId} {\n      allow read, write: if request.auth != null;\n    }\n  }\n}", checks: [{ label: "Defines firestore rules block", terms: ["service cloud.firestore"] }, { label: "Checks authenticated request", terms: ["request.auth != null"] }, { label: "Applies read/write permissions", terms: ["allow read, write"] }] },
          { id: "firebase-functions", title: "Cloud Function Trigger", task: "Create server-side trigger for task audit logging.", starter: "exports.onTaskCreate = functions.firestore.document('tasks/{taskId}').onCreate((snap, context) => {\n  console.log('task created', context.params.taskId)\n});", checks: [{ label: "Defines firestore trigger", terms: ["firestore.document", "oncreate"] }, { label: "Uses cloud function export", terms: ["exports."] }, { label: "Logs event/context", terms: ["console.log", "taskid"] }] },
          { id: "firebase-offline-sync", title: "Offline Sync UX", task: "Implement optimistic UI with retry for Firestore writes.", starter: "async function saveWithRetry(action) {\n  try {\n    await action()\n  } catch (error) {\n    console.log('retry later', error)\n  }\n}", checks: [{ label: "Wraps write in try/catch", terms: ["try", "catch"] }, { label: "Supports retry flow", terms: ["retry"] }, { label: "Logs failed sync", terms: ["console.log", "error"] }] },
          { id: "firebase-monitoring", title: "Analytics + Error Tracking", task: "Add Firebase analytics/events and error tagging pattern.", starter: "function trackEvent(name, params) {\n  console.log('analytics', { name, params, at: Date.now() })\n}", checks: [{ label: "Defines analytics event function", terms: ["trackevent"] }, { label: "Includes event params", terms: ["params", "name"] }, { label: "Includes timestamp", terms: ["date.now"] }] }
        ],
        cloudkit: [
          { id: "cloudkit-record-crud", title: "Record CRUD + Zone", task: "Build CloudKit record CRUD with private DB usage.", starter: "func saveNote(recordID: CKRecord.ID, title: String, db: CKDatabase) {\n  let record = CKRecord(recordType: \"Note\", recordID: recordID)\n  record[\"title\"] = title as CKRecordValue\n  db.save(record) { _, error in\n    if let error = error { print(error) }\n  }\n}", checks: [{ label: "Creates CKRecord", terms: ["ckrecord("] }, { label: "Saves to CKDatabase", terms: ["db.save", "database"] }, { label: "Handles save error", terms: ["if let error"] }] },
          { id: "cloudkit-sharing", title: "Record Sharing Flow", task: "Implement CloudKit share creation and share metadata handling.", starter: "func createShare(for record: CKRecord) -> CKShare {\n  let share = CKShare(rootRecord: record)\n  share[CKShare.SystemFieldKey.title] = \"Shared Note\" as CKRecordValue\n  return share\n}", checks: [{ label: "Creates CKShare", terms: ["ckshare"] }, { label: "Associates root record", terms: ["rootrecord"] }, { label: "Sets share metadata", terms: ["systemfieldkey", "title"] }] },
          { id: "cloudkit-sync-status", title: "Sync Status Indicator", task: "Create sync status state model and UI-facing updates.", starter: "enum SyncStatus {\n  case idle\n  case syncing\n  case failed(String)\n}\n\nvar status: SyncStatus = .idle", checks: [{ label: "Defines sync status enum", terms: ["enum syncstatus"] }, { label: "Includes failed state", terms: ["failed("] }, { label: "Tracks current status", terms: ["var status"] }] },
          { id: "cloudkit-conflict-merge", title: "Conflict Merge Strategy", task: "Implement deterministic merge strategy for record conflicts.", starter: "func merge(local: CKRecord, remote: CKRecord) -> CKRecord {\n  let result = remote\n  if let localUpdated = local[\"updatedAt\"] as? Date, let remoteUpdated = remote[\"updatedAt\"] as? Date, localUpdated > remoteUpdated {\n    return local\n  }\n  return result\n}", checks: [{ label: "Compares local vs remote", terms: ["local", "remote"] }, { label: "Uses deterministic condition", terms: ["updatedat", ">"] }, { label: "Returns merged record", terms: ["return"] }] },
          { id: "cloudkit-diagnostics", title: "Sync Diagnostics Logging", task: "Add diagnostics log helper for CloudKit operations.", starter: "func logSyncEvent(_ event: String, error: Error?) {\n  if let error = error {\n    print(\"sync event=\\(event) error=\\(error)\")\n  } else {\n    print(\"sync event=\\(event) ok\")\n  }\n}", checks: [{ label: "Defines sync log helper", terms: ["logsyncevent"] }, { label: "Handles optional error", terms: ["if let error"] }, { label: "Logs success/failure", terms: ["sync event", "print("] }] }
        ]
      };

      const quickProjectTemplatesByLanguage = Object.fromEntries(
        Object.entries(projectIdeTemplates).map(([language, templates]) => {
          const quickTemplates = (templates || []).slice(0, 3).map((template, index) => {
            const shortStarter = String(template.starter || "")
              .split("\n")
              .slice(0, 8)
              .join("\n");

            return {
              ...template,
              id: `${template.id}-quick-${index + 1}`,
              title: `Quick: ${template.title}`,
              task: `Quick project (20-45 min): ${template.task}`,
              starter: shortStarter || template.starter,
              checks: Array.isArray(template.checks) ? template.checks.slice(0, 2) : [],
              isQuick: true
            };
          });

          return [language, quickTemplates];
        })
      );

      function getProjectIdeTemplatesForLanguage(language) {
        const baseTemplates = projectIdeTemplates[language] || projectIdeTemplates.web || [];
        const quickTemplates = quickProjectTemplatesByLanguage[language] || [];
        return [...baseTemplates, ...quickTemplates];
      }

      function getProjectMetaByIndex(index) {
        const tiers = [
          { difficulty: "Beginner → Intermediate", timeEstimate: "4-6 hours" },
          { difficulty: "Intermediate", timeEstimate: "6-10 hours" },
          { difficulty: "Intermediate", timeEstimate: "6-10 hours" },
          { difficulty: "Intermediate → Advanced", timeEstimate: "8-12 hours" },
          { difficulty: "Advanced", timeEstimate: "10-16 hours" }
        ];
        return tiers[index] || tiers[tiers.length - 1];
      }

      function getProjectMeta(template, index) {
        if (template && template.isQuick) {
          return {
            difficulty: "Quick Practice",
            timeEstimate: "20-45 min"
          };
        }

        return {
          difficulty: template && template.difficulty ? template.difficulty : getProjectMetaByIndex(index).difficulty,
          timeEstimate: template && template.timeEstimate ? template.timeEstimate : getProjectMetaByIndex(index).timeEstimate
        };
      }

      function parseTimeEstimateToMinutes(timeEstimate) {
        const text = String(timeEstimate || "").toLowerCase().trim();
        if (!text) {
          return Number.MAX_SAFE_INTEGER;
        }

        const rangeMatch = text.match(/(\d+)\s*-\s*(\d+)\s*(min|hour|hours|hr|hrs)/);
        if (rangeMatch) {
          const lower = Number(rangeMatch[1]) || 0;
          const unit = rangeMatch[3];
          return unit.startsWith("min") ? lower : lower * 60;
        }

        const singleMatch = text.match(/(\d+)\s*(min|hour|hours|hr|hrs)/);
        if (singleMatch) {
          const value = Number(singleMatch[1]) || 0;
          const unit = singleMatch[2];
          return unit.startsWith("min") ? value : value * 60;
        }

        return Number.MAX_SAFE_INTEGER;
      }

      function getSortedProjectTemplates(language) {
        const templates = getProjectIdeTemplatesForLanguage(language);
        return templates
          .map((template, index) => {
            const meta = getProjectMeta(template, index);
            return {
              template,
              meta,
              estimatedMinutes: parseTimeEstimateToMinutes(meta.timeEstimate)
            };
          })
          .sort((left, right) => left.estimatedMinutes - right.estimatedMinutes || left.template.title.localeCompare(right.template.title))
          .map((entry) => entry.template);
      }

      function evaluateProjectIdeCode(code, template) {
        const normalized = (code || "").toLowerCase();
        if (!template || !Array.isArray(template.checks)) {
          return { passed: 0, total: 0, lines: ["No checks loaded."] };
        }

        const checkResults = template.checks.map((check) => {
          const terms = Array.isArray(check.terms) ? check.terms : [String(check.terms || "")];
          const passed = terms.every((term) => normalized.includes(String(term).toLowerCase()));
          return { label: check.label, passed };
        });

        const passedCount = checkResults.filter((result) => result.passed).length;
        return {
          passed: passedCount,
          total: checkResults.length,
          lines: checkResults.map((result) => `${result.passed ? "✅" : "⚠️"} ${result.label}`)
        };
      }

      function renderProjectIdeFeedback(template, code) {
        if (!projectIdeFeedback || !template) {
          return;
        }

        const customGoal = (projectCustomTaskInput && projectCustomTaskInput.value.trim()) || "";
        const result = evaluateProjectIdeCode(code, template);
        const scorePercent = result.total ? Math.round((result.passed / result.total) * 100) : 0;
        const readiness = scorePercent >= 75 ? "Ready for next step" : scorePercent >= 45 ? "Needs one more pass" : "Needs foundational fixes";

        const response = [
          "IDE REVIEW RESULT",
          `Task: ${customGoal || template.task}`,
          `Checks passed: ${result.passed}/${result.total} (${scorePercent}%)`,
          `Status: ${readiness}`,
          "",
          ...result.lines,
          "",
          "Next actions:",
          "1) Fill every missing check in your code.",
          "2) Add one edge-case test path (empty input, network fail, invalid data).",
          "3) Refactor one block for readability before shipping."
        ];

        projectIdeFeedback.textContent = response.join("\n");
      }

      function renderProjectIdeTaskOptions(language, preferredTaskId) {
        if (!projectIdeTemplate || !projectIdeTaskPrompt) {
          return;
        }

        const templates = getSortedProjectTemplates(language);
        const selectedTemplate = templates.find((template) => template.id === preferredTaskId) || templates[0];

        projectIdeTemplate.innerHTML = "";
        templates.forEach((template, index) => {
          const meta = getProjectMeta(template, index);
          const option = document.createElement("option");
          option.value = template.id;
          option.textContent = `${template.title} (${meta.difficulty} • ${meta.timeEstimate})`;
          projectIdeTemplate.appendChild(option);
        });

        if (selectedTemplate) {
          const selectedTemplateIndex = templates.findIndex((template) => template.id === selectedTemplate.id);
          const selectedMeta = getProjectMeta(selectedTemplate, selectedTemplateIndex < 0 ? 0 : selectedTemplateIndex);
          projectIdeTemplate.value = selectedTemplate.id;
          projectIdeTaskPrompt.textContent = `${selectedTemplate.task} [Difficulty: ${selectedMeta.difficulty} • Estimated time: ${selectedMeta.timeEstimate}]`;
          if (projectIdeEditor && !projectIdeEditor.value.trim()) {
            projectIdeEditor.value = selectedTemplate.starter;
          }
          renderProjectIdeFeedback(selectedTemplate, projectIdeEditor ? projectIdeEditor.value : "");
        }
      }

      function renderProjectIdeLab() {
        if (!projectIdeLanguage || !projectIdeTemplate || !projectIdeEditor || !projectIdeRunReview || !projectIdeLoadStarter) {
          return;
        }

        const supportedLanguages = Object.keys(projectIdeTemplates)
          .sort((left, right) => (projectIdeLanguageNames[left] || left).localeCompare(projectIdeLanguageNames[right] || right));
        const startingLanguage = supportedLanguages.includes(selectedTopic) ? selectedTopic : "web";

        projectIdeLanguage.innerHTML = "";
        supportedLanguages.forEach((language) => {
          const option = document.createElement("option");
          option.value = language;
          option.textContent = projectIdeLanguageNames[language] || language;
          projectIdeLanguage.appendChild(option);
        });
        projectIdeLanguage.value = startingLanguage;
        renderProjectIdeTaskOptions(startingLanguage);

        projectIdeLanguage.addEventListener("change", () => {
          if (projectIdeEditor) {
            projectIdeEditor.value = "";
          }
          renderProjectIdeTaskOptions(projectIdeLanguage.value);
        });

        projectIdeTemplate.addEventListener("change", () => {
          const templates = getSortedProjectTemplates(projectIdeLanguage.value);
          const selectedTemplate = templates.find((template) => template.id === projectIdeTemplate.value) || templates[0];
          if (!selectedTemplate) {
            return;
          }
          const selectedTemplateIndex = templates.findIndex((template) => template.id === selectedTemplate.id);
          const selectedMeta = getProjectMeta(selectedTemplate, selectedTemplateIndex < 0 ? 0 : selectedTemplateIndex);
          projectIdeTaskPrompt.textContent = `${selectedTemplate.task} [Difficulty: ${selectedMeta.difficulty} • Estimated time: ${selectedMeta.timeEstimate}]`;
          renderProjectIdeFeedback(selectedTemplate, projectIdeEditor.value);
        });

        projectIdeLoadStarter.addEventListener("click", () => {
          const templates = getSortedProjectTemplates(projectIdeLanguage.value);
          const selectedTemplate = templates.find((template) => template.id === projectIdeTemplate.value) || templates[0];
          if (!selectedTemplate) {
            return;
          }
          projectIdeEditor.value = selectedTemplate.starter;
          renderProjectIdeFeedback(selectedTemplate, projectIdeEditor.value);
        });

        projectIdeRunReview.addEventListener("click", () => {
          const templates = getSortedProjectTemplates(projectIdeLanguage.value);
          const selectedTemplate = templates.find((template) => template.id === projectIdeTemplate.value) || templates[0];
          if (!selectedTemplate) {
            return;
          }
          renderProjectIdeFeedback(selectedTemplate, projectIdeEditor.value);
        });
      }

      const overviewByTopic = {
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
          history: "TypeScript was developed by Microsoft and released in 2012. It gained adoption quickly in enterprise and framework ecosystems.",
          industries: ["Enterprise SaaS", "Large-scale product engineering", "Cloud platforms", "Developer tooling companies", "E-commerce and marketplace apps"]
        },
        java: {
          title: "Java",
          subtitle: "Object-oriented language used heavily in enterprise systems and Android ecosystems.",
          mainUse: "Java is used for backend services, enterprise software, and large-scale systems where stability and portability matter.",
          history: "Java was released by Sun Microsystems in 1995 with the 'write once, run anywhere' model.",
          industries: ["Banking and financial services", "Insurance systems", "Telecommunications", "Enterprise resource planning", "Large government systems"]
        },
        kotlin: {
          title: "Kotlin",
          subtitle: "Modern JVM language focused on safety, concision, and Android development productivity.",
          mainUse: "Kotlin is used for Android app development, backend services, and shared mobile code.",
          history: "Kotlin was created by JetBrains in 2011 and became an official Android language in 2017.",
          industries: ["Android consumer apps", "FinTech mobile products", "E-commerce mobile platforms", "Travel and logistics apps", "Streaming and media mobile apps"]
        },
        markdown: {
          title: "Markdown",
          subtitle: "Lightweight markup language for readable technical documentation.",
          mainUse: "Markdown is used for README files, docs, release notes, and project wikis.",
          history: "Markdown was created by John Gruber in 2004 and became a standard across developer workflows.",
          industries: ["Software documentation", "Open-source projects", "Developer education", "Technical writing teams", "Engineering knowledge bases"]
        },
        go: {
          title: "Go",
          subtitle: "Compiled language focused on simplicity, concurrency, and reliable backend services.",
          mainUse: "Go is commonly used for cloud services, APIs, DevOps tooling, and distributed systems.",
          history: "Go was developed at Google and first released in 2009.",
          industries: ["Cloud infrastructure", "Backend API platforms", "DevOps and SRE tooling", "FinTech service platforms", "Developer tools"]
        },
        rust: {
          title: "Rust",
          subtitle: "Systems language focused on memory safety, performance, and concurrency.",
          mainUse: "Rust is used for performance-critical services, CLI tools, and safety-first systems components.",
          history: "Rust began at Mozilla and reached 1.0 in 2015.",
          industries: ["Systems infrastructure", "Security-focused software", "Embedded development", "Game tooling", "High-performance backends"]
        },
        cpp: {
          title: "C++",
          subtitle: "High-performance language used for systems programming and engines.",
          mainUse: "C++ is used when memory control and runtime performance are top priorities.",
          history: "C++ was created by Bjarne Stroustrup in the early 1980s as an extension of C.",
          industries: ["Game development", "Embedded and firmware", "Low-latency finance", "Robotics and simulation", "Desktop performance software"]
        },
        php: {
          title: "PHP",
          subtitle: "Server-side scripting language for web applications and content platforms.",
          mainUse: "PHP is widely used for backend web development, CMS systems, and API-driven business apps.",
          history: "PHP was created in 1994 and became one of the most widely deployed web backend languages.",
          industries: ["E-commerce platforms", "Media and publishing", "Agency web development", "SaaS backends", "Content management systems"]
        },
        dart: {
          title: "Dart + Flutter",
          subtitle: "Language and toolkit combination for cross-platform app development.",
          mainUse: "Dart powers Flutter apps for mobile, web, and desktop from one codebase.",
          history: "Dart launched in 2011; Flutter later accelerated adoption for cross-platform teams.",
          industries: ["Consumer mobile apps", "Startup MVP products", "Cross-platform enterprise apps", "EdTech apps", "Retail and service apps"]
        },
        bash: {
          title: "Bash / Shell",
          subtitle: "Command-line scripting for automation and developer workflows.",
          mainUse: "Bash is used to automate repetitive tasks and orchestrate local or CI/CD workflows.",
          history: "Bash was released in 1989 as the GNU Bourne Again Shell.",
          industries: ["DevOps and infrastructure", "Backend engineering", "Data pipelines", "Cybersecurity operations", "Platform engineering"]
        },
        csharp: {
          title: "C#",
          subtitle: "Modern language for .NET apps across web, cloud, desktop, and games.",
          mainUse: "C# is used for .NET APIs, cloud services, desktop apps, and Unity game development.",
          history: "C# was introduced by Microsoft in 2000 as part of .NET.",
          industries: ["Enterprise software", "Cloud platform services", "Game development", "Healthcare systems", "Manufacturing dashboards"]
        },
        sql: {
          title: "SQL",
          subtitle: "Standard language for managing and querying relational databases.",
          mainUse: "SQL is used to retrieve, join, aggregate, and update structured data.",
          history: "SQL originated in 1970s IBM research and became an ANSI/ISO standard.",
          industries: ["Business intelligence", "Banking transactions", "E-commerce data systems", "Healthcare reporting", "Operations analytics"]
        },
        cloudkit: {
          title: "CloudKit",
          subtitle: "Apple-native cloud framework for private, shared, and public data sync.",
          mainUse: "CloudKit is used to store and sync app data across Apple devices with iCloud identity and sharing support.",
          history: "CloudKit was introduced by Apple in 2014 to provide an iCloud-backed database and sync platform for app developers.",
          industries: ["Consumer iOS apps", "Health and lifestyle apps", "Productivity apps", "Education apps", "Subscription mobile products"]
        },
        firebase: {
          title: "Firebase",
          subtitle: "Backend platform for authentication, databases, storage, analytics, and app services.",
          mainUse: "Firebase is used to accelerate app backend development with managed services like Auth, Firestore, Storage, and Functions.",
          history: "Firebase launched as a real-time backend platform and was acquired by Google in 2014, then expanded into a full app development suite.",
          industries: ["Startup MVP apps", "Mobile consumer apps", "SaaS products", "E-commerce applications", "Cross-platform app teams"]
        },
        sourcecontrol: {
          title: "Source Control (Git + GitHub)",
          subtitle: "Version control workflow for tracking changes and collaborating safely.",
          mainUse: "Source control tracks project history and supports branching, pull requests, and code reviews.",
          history: "Git was created in 2005; GitHub launched in 2008 and standardized collaborative workflows.",
          industries: ["Software startups", "Enterprise engineering teams", "Open-source communities", "Game studios", "Cloud platform teams"]
        },
        ides: {
          title: "IDEs (Development Environments)",
          subtitle: "Tools to write, run, debug, and manage code efficiently.",
          mainUse: "IDEs combine editing, debugging, terminal, and project tooling to improve developer speed and quality.",
          history: "Modern IDEs evolved from early editors with language services, plugins, and integrated toolchains.",
          industries: ["Software product companies", "Enterprise IT teams", "Coding education programs", "Agency development", "Research labs"]
        },
        aiassist: {
          title: "AI Coding Assistants",
          subtitle: "AI tools in IDEs for drafting, refactoring, debugging, and test acceleration.",
          mainUse: "AI coding assistants help developers plan, generate, and review code faster when paired with strict verification workflows.",
          history: "Modern IDE-integrated coding assistants became mainstream in the 2020s as LLM capabilities improved and developer tooling matured.",
          industries: ["Software product teams", "Enterprise engineering", "Startup MVP development", "Developer tooling", "Technical education"]
        }
      };

      const interviewPrep = {
        swift: {
          name: "Swift + SwiftUI",
          tips: [
            "Explain value vs reference types clearly (struct vs class).",
            "Be ready to discuss optionals, safe unwrapping, and common crash causes.",
            "Show practical SwiftUI state/data-flow patterns (@State, @Binding, @ObservedObject).",
            "Demonstrate async/await and main-thread UI update awareness."
          ],
          tests: [
            "Implement array/string logic (reverse, dedupe, frequency map).",
            "Build a small state-driven SwiftUI view with user interaction.",
            "Fix a crash caused by force unwrapping or bad optional handling.",
            "Reason about complexity and optimize a loop-based solution."
          ]
        },
        web: {
          name: "HTML + CSS + JavaScript",
          tips: [
            "Explain semantic HTML and accessibility decisions.",
            "Know core CSS layout tradeoffs (Flexbox vs Grid).",
            "Be comfortable with event handling, scope, and async flow.",
            "Walk through debugging using browser DevTools step by step."
          ],
          tests: [
            "DOM challenge: render/filter/search a list from JSON data.",
            "JavaScript problem solving with arrays, objects, and maps.",
            "Async test using fetch + loading/error states.",
            "CSS layout task for responsive card/dashboard UI."
          ]
        },
        react: {
          name: "React",
          tips: [
            "Explain component composition and one-way data flow.",
            "Discuss hook usage and effect dependency pitfalls.",
            "Show immutable state updates for arrays/objects.",
            "Describe render performance basics and when to optimize."
          ],
          tests: [
            "Build a small component with form state + validation.",
            "Debug stale state or useEffect dependency bugs.",
            "Implement list rendering with stable keys.",
            "Create a custom hook for reusable behavior."
          ]
        },
        python: {
          name: "Python",
          tips: [
            "Write clean, readable code with clear names and structure.",
            "Be ready to explain data structures and complexity tradeoffs.",
            "Show confidence with list/dict/set patterns.",
            "Use robust input validation and error handling."
          ],
          tests: [
            "Classic algorithms: two-sum, anagram, palindrome, merge intervals.",
            "String parsing and dictionary frequency counting tasks.",
            "Write tests for a small function and fix edge cases.",
            "Refactor imperative code into cleaner Pythonic style."
          ]
        },
        typescript: {
          name: "TypeScript",
          tips: [
            "Model domain objects with interfaces/type aliases.",
            "Explain unions, narrowing, and optional/nullable safety.",
            "Use generics when they reduce duplication and improve safety.",
            "Separate type-level guarantees from runtime behavior."
          ],
          tests: [
            "Type a data API response and render safely.",
            "Fix compile errors from unsafe object/property access.",
            "Write a generic utility function with constraints.",
            "Refactor any-heavy code to strict typed code."
          ]
        },
        java: {
          name: "Java",
          tips: [
            "Explain OOP clearly: encapsulation, inheritance, polymorphism.",
            "Discuss collections choice and complexity implications.",
            "Handle nulls/exceptions carefully and intentionally.",
            "Write production-style method signatures and class design."
          ],
          tests: [
            "Implement stack/queue/hashmap based coding challenge.",
            "Design a small class model (e.g., Library, Cart, User).",
            "Debug common issues: NullPointerException, off-by-one, bad loops.",
            "Explain runtime/memory complexity for your solution."
          ]
        },
        kotlin: {
          name: "Kotlin",
          tips: [
            "Explain null safety clearly using nullable types, safe calls, and Elvis operator.",
            "Show idiomatic Kotlin style with data classes and expression-based code.",
            "Discuss coroutine basics and structured concurrency for async flows.",
            "Use readable naming and small functions for maintainable Android/backend code."
          ],
          tests: [
            "Refactor Java-style verbose code into concise Kotlin equivalents.",
            "Fix a nullability bug using safe calls and defaults.",
            "Implement a small data class + collection transformation exercise.",
            "Reason about coroutine scope and cancellation behavior."
          ]
        },
        markdown: {
          name: "Markdown",
          tips: [
            "Keep heading hierarchy consistent and predictable for readers.",
            "Use clear links, concise paragraphs, and examples that are easy to copy.",
            "Verify code fences and tables render correctly in your target platform.",
            "Treat docs updates as part of each feature or bug-fix deliverable."
          ],
          tests: [
            "Fix malformed Markdown syntax in a README snippet.",
            "Write a structured release note with headings, bullets, and links.",
            "Convert plain text instructions into a scannable docs page.",
            "Identify and repair broken relative links across multiple docs files."
          ]
        },
        go: {
          name: "Go",
          tips: [
            "Explain when goroutines/channels are better than shared mutable state.",
            "Return and handle errors explicitly with clear context.",
            "Show package and interface boundaries for maintainable services.",
            "Discuss testing strategy with table-driven tests."
          ],
          tests: [
            "Implement an HTTP handler with validation and structured error responses.",
            "Debug a goroutine/channel deadlock scenario.",
            "Refactor duplicated logic into interfaces + package structure.",
            "Write table-driven tests for edge and happy paths."
          ]
        },
        rust: {
          name: "Rust",
          tips: [
            "Explain ownership, borrowing, and when cloning is acceptable.",
            "Use Result/Option handling instead of panic-driven flow.",
            "Show safe iterator-based transformations.",
            "Discuss trait boundaries and testability."
          ],
          tests: [
            "Fix borrow checker errors without unsafe shortcuts.",
            "Build a small parser using enums + pattern matching.",
            "Refactor unwrap-heavy code to robust Result propagation.",
            "Write tests for failure cases and invariants."
          ]
        },
        cpp: {
          name: "C++",
          tips: [
            "Explain memory ownership choices (stack, smart pointers, RAII).",
            "Choose STL containers based on access patterns.",
            "Use const-correctness for safer APIs.",
            "Discuss performance vs readability tradeoffs clearly."
          ],
          tests: [
            "Fix lifetime/resource leak issues in a class design.",
            "Implement a container-processing function with STL algorithms.",
            "Debug namespace/type mismatch compile errors.",
            "Profile and optimize a hot loop without changing behavior."
          ]
        },
        php: {
          name: "PHP",
          tips: [
            "Validate and sanitize request input at boundaries.",
            "Separate controller, service, and data concerns.",
            "Write clear array/object transformations.",
            "Discuss session/auth safety and error handling."
          ],
          tests: [
            "Build endpoint logic with validation + consistent JSON responses.",
            "Debug missing/invalid request field handling.",
            "Refactor procedural script into testable classes/functions.",
            "Add tests for malformed inputs and unhappy paths."
          ]
        },
        dart: {
          name: "Dart + Flutter",
          tips: [
            "Explain widget composition and state ownership clearly.",
            "Handle async loading/error states predictably.",
            "Use null safety and immutable patterns consistently.",
            "Discuss testing approach for UI and logic layers."
          ],
          tests: [
            "Build a stateful Flutter screen with loading and retry states.",
            "Debug setState misuse causing stale or incorrect UI.",
            "Refactor large widget into reusable components.",
            "Write widget + unit tests for key interactions."
          ]
        },
        bash: {
          name: "Bash / Shell",
          tips: [
            "Quote variables safely to prevent word-splitting bugs.",
            "Check command exit codes and fail clearly.",
            "Use small reusable shell functions for scripts.",
            "Design scripts for repeatability in CI/CD and local use."
          ],
          tests: [
            "Write a script that validates args and exits with useful messages.",
            "Debug a pipeline that fails on spaces/special characters.",
            "Refactor a long script into tested helper functions.",
            "Add safety checks before destructive file operations."
          ]
        },
        csharp: {
          name: "C#",
          tips: [
            "Show understanding of classes, properties, and interfaces.",
            "Be comfortable with LINQ for readable collection transforms.",
            "Explain async/await usage and error-handling strategy.",
            "Use nullable reference types safely."
          ],
          tests: [
            "Collection challenge using LINQ filtering/grouping.",
            "Refactor imperative loops into cleaner C# patterns.",
            "Debug async bug where result/order is incorrect.",
            "Implement object model plus unit-test-style checks."
          ]
        },
        sql: {
          name: "SQL",
          tips: [
            "Memorize query clause order and use aliases consistently.",
            "Explain join types and when each is correct.",
            "Validate assumptions with row counts and sample outputs.",
            "Optimize logically before over-indexing prematurely."
          ],
          tests: [
            "Write joins across 2-3 tables with correct keys.",
            "Aggregation challenge: GROUP BY + HAVING + ORDER BY.",
            "Window-function style ranking/partition problem.",
            "Debug query returning duplicate or missing rows."
          ]
        },
        sourcecontrol: {
          name: "Source Control (Git + GitHub)",
          tips: [
            "Narrate your workflow clearly: branch, small commits, PR, review, merge.",
            "Write descriptive commit messages tied to user impact.",
            "Know conflict-resolution steps and when to rebase vs merge.",
            "Explain why force-push and history rewrites require caution."
          ],
          tests: [
            "Fix a broken branch workflow and recover to clean history.",
            "Resolve merge conflicts and finish merge safely.",
            "Rewrite commits with amend/rebase for clear commit history.",
            "Design a PR strategy for a feature with multiple contributors."
          ]
        },
        ides: {
          name: "IDEs",
          tips: [
            "Explain what an IDE is and how it differs from a basic text editor.",
            "Map major IDEs to the languages/platforms they are strongest for.",
            "Show practical debugging workflow (breakpoints, step over, inspect variables).",
            "Discuss why shared tooling config improves team productivity."
          ],
          tests: [
            "Choose the best IDE for a Swift iOS app and justify your answer.",
            "Configure language extensions and run/debug a starter project.",
            "Diagnose a failing run configuration and fix interpreter/SDK settings.",
            "Set formatter/linter integration and explain team benefits."
          ]
        },
        aiassist: {
          name: "AI Coding Assistants",
          tips: [
            "Explain prompt contracts: scope, constraints, output format, and acceptance checks.",
            "Describe verification workflow before merge: tests, static checks, and code review.",
            "Show how to preserve code ownership and avoid blind copy/paste from AI output.",
            "Discuss privacy/safety boundaries for prompts and project context sharing."
          ],
          tests: [
            "Write a production-ready prompt for a bug fix with clear acceptance criteria.",
            "Review AI-generated code and identify missing edge cases and security checks.",
            "Refactor an AI-produced snippet into team style and architecture conventions.",
            "Design a safe workflow for using AI suggestions in a regulated codebase."
          ]
        }
      };

      const architecturePatterns = [
        "MVC (Model-View-Controller): Separates data, UI, and interaction flow. Great for simple to medium apps when responsibilities are clear.",
        "MVVM (Model-View-ViewModel): Keeps UI state and logic in a ViewModel. Very common for modern UI frameworks and testable front-end structure.",
        "Clean Architecture: Uses layers (domain, data, presentation) with clear boundaries. Useful for larger products with long-term maintainability.",
        "Repository Pattern: Abstracts data access from business logic. Helps when switching between local storage and remote APIs.",
        "Modular / Feature-based Architecture: Splits codebase by feature domains. Improves team collaboration, scalability, and release safety."
      ];

      const architectureByLanguage = {
        swift: {
          name: "Swift + SwiftUI",
          guidance: [
            "MVVM is the most common baseline for SwiftUI apps (@StateObject/@ObservedObject + ViewModel).",
            "Use Repository + Service layers for networking and persistence boundaries.",
            "For complex apps, combine MVVM with Clean Architecture style layering."
          ]
        },
        web: {
          name: "HTML + CSS + JavaScript",
          guidance: [
            "Start with component-style modular JavaScript to separate concerns clearly.",
            "Use feature folders to keep HTML/CSS/JS grouped by screen or capability.",
            "For larger front ends, apply MVVM-like state separation (view vs state/actions)."
          ]
        },
        react: {
          name: "React",
          guidance: [
            "Use component architecture with unidirectional data flow and clear state ownership.",
            "Combine feature-based folders with custom hooks for reusable logic layers.",
            "For larger products, add domain/service layers to avoid business logic in components."
          ]
        },
        python: {
          name: "Python",
          guidance: [
            "For APIs, use layered architecture (routes/controllers, services, repositories).",
            "Keep business rules in service/domain modules, not inside framework glue code.",
            "Use repository abstraction when supporting multiple data sources."
          ]
        },
        typescript: {
          name: "TypeScript",
          guidance: [
            "Use feature-based architecture with strongly typed domain models/interfaces.",
            "MVVM/MVC-like separation works well when UI and business rules both grow.",
            "Use service/repository layers to keep API access decoupled from views."
          ]
        },
        java: {
          name: "Java",
          guidance: [
            "Layered architecture (controller, service, repository) is standard in enterprise Java.",
            "Clean Architecture principles fit well for long-lived backend systems.",
            "Use dependency injection to keep components testable and loosely coupled."
          ]
        },
        kotlin: {
          name: "Kotlin",
          guidance: [
            "Use MVVM + repository patterns for Android apps with clear UI/data separation.",
            "Model state with sealed classes and keep business logic outside UI layers.",
            "Adopt coroutine-based async architecture with explicit scope ownership."
          ]
        },
        markdown: {
          name: "Markdown",
          guidance: [
            "Use a docs style guide (heading levels, tone, examples) to keep content consistent.",
            "Organize docs by feature/use case with shared templates for repeatable sections.",
            "Treat docs validation (link checks, rendering checks) as part of your delivery workflow."
          ]
        },
        go: {
          name: "Go",
          guidance: [
            "Use handler/service/repository layering for clean backend boundaries.",
            "Favor explicit interfaces at package boundaries for testability.",
            "Use context propagation and cancellation in request workflows."
          ]
        },
        rust: {
          name: "Rust",
          guidance: [
            "Organize crates/modules around domain boundaries, not file size.",
            "Use traits to decouple behavior and improve test seams.",
            "Prefer clear ownership boundaries over shared mutable state."
          ]
        },
        cpp: {
          name: "C++",
          guidance: [
            "Use layered architecture with explicit ownership and lifecycle boundaries.",
            "Prefer RAII and smart pointers to avoid manual memory complexity.",
            "Isolate performance-critical modules from high-level orchestration code."
          ]
        },
        php: {
          name: "PHP",
          guidance: [
            "Use MVC-style separation for routing, business logic, and persistence.",
            "Keep request validation centralized at boundary layers.",
            "Adopt service/repository patterns to reduce controller bloat."
          ]
        },
        dart: {
          name: "Dart + Flutter",
          guidance: [
            "Use presentation/state/data separation for scalable Flutter apps.",
            "Keep widget trees declarative and move business logic to controllers/view-models.",
            "Adopt repository + service boundaries for API and persistence layers."
          ]
        },
        bash: {
          name: "Bash / Shell",
          guidance: [
            "Design scripts as small composable steps with clear inputs/outputs.",
            "Treat shell scripts as automation modules in deployment/tooling architecture.",
            "Use guard clauses and logging for observable CI/CD behavior."
          ]
        },
        csharp: {
          name: "C#",
          guidance: [
            "Use layered architecture in ASP.NET projects (API, application, infrastructure).",
            "MVVM is common in desktop/XAML and client-focused .NET apps.",
            "Clean + CQRS patterns are common in larger enterprise codebases."
          ]
        },
        sql: {
          name: "SQL",
          guidance: [
            "Use schema design patterns: normalization for consistency, selective denormalization for performance.",
            "Organize database logic with clear views/procedures when needed for reuse.",
            "Pair SQL design with repository/service layers in application code."
          ]
        },
        sourcecontrol: {
          name: "Source Control (Git + GitHub)",
          guidance: [
            "Use trunk-based or short-lived feature branching with frequent integration.",
            "Adopt PR-based architecture for quality gates (reviews, checks, approvals).",
            "Use commit conventions (type/scope intent) for maintainable project history."
          ]
        },
        ides: {
          name: "IDEs",
          guidance: [
            "Standardize project setup docs and IDE extensions for faster onboarding.",
            "Use shared formatter/linter/test commands so all IDEs produce consistent code quality.",
            "Treat debugger/run configurations as part of team workflow architecture."
          ]
        },
        aiassist: {
          name: "AI Coding Assistants",
          guidance: [
            "Treat AI usage as an engineering subsystem: prompt inputs, output checks, and policy guardrails.",
            "Integrate assistant usage with existing architecture boundaries and review gates.",
            "Adopt reusable prompt templates and verification checklists for consistent team outcomes."
          ]
        }
      };

      const completionByLanguage = {
        swift: {
          name: "Swift + SwiftUI",
          milestones: [
            "Build a counter + list app with navigation and edit/delete actions.",
            "Add async API loading with loading/error/retry states.",
            "Ship a polished feature with previews for empty/loading/error/content states."
          ],
          production: [
            "State ownership is explicit (@State/@Binding/@ObservableObject boundaries).",
            "Core view-model logic has unit tests for happy and edge paths.",
            "Accessibility labels and dynamic type basics are validated."
          ],
          portfolio: [
            "Publish one complete SwiftUI feature with README, screenshots, and test notes."
          ],
          rubric: [
            "Correctness 40%: behavior matches requirements and edge cases.",
            "Readability 20%: clear naming and maintainable structure.",
            "Testing 20%: meaningful unit tests and failure handling.",
            "Architecture 20%: clear state/data-flow boundaries."
          ]
        },
        web: {
          name: "HTML + CSS + JavaScript",
          milestones: [
            "Build an accessible multi-section responsive page.",
            "Add interactive filtering/search with state-driven rendering.",
            "Integrate async API data with loading/error/empty states."
          ],
          production: [
            "Keyboard navigation and visible focus states verified.",
            "Input validation and defensive rendering for bad data.",
            "Performance basics applied (avoid redundant DOM churn)."
          ],
          portfolio: [
            "Ship one responsive app page with README, accessibility notes, and before/after bug fixes."
          ],
          rubric: [
            "Correctness 35% • Accessibility 25% • Maintainability 20% • Performance 20%."
          ]
        },
        react: {
          name: "React",
          milestones: [
            "Create component-based UI with reusable form/list components.",
            "Implement controlled forms and async data workflow.",
            "Refactor into custom hooks + shared state boundaries."
          ],
          production: [
            "State updates are immutable and effects are dependency-safe.",
            "Loading/error states exist for all async branches.",
            "Tests cover interaction flows and edge state transitions."
          ],
          portfolio: [
            "Publish one React feature with architecture diagram and test summary."
          ],
          rubric: [
            "Correctness 35% • State architecture 25% • Testing 20% • Readability/perf 20%."
          ]
        },
        python: {
          name: "Python",
          milestones: [
            "Build a CLI/data-processing tool with argument handling.",
            "Add modular structure and robust exception handling.",
            "Deliver tested module with logging and clear docs."
          ],
          production: [
            "Input validation and explicit error pathways.",
            "Unit tests for happy path + key edge cases.",
            "Clear module boundaries and readable function design."
          ],
          portfolio: [
            "Ship one Python tool with tests, usage examples, and complexity notes."
          ],
          rubric: [
            "Correctness 40% • Code quality 25% • Testing 20% • Reliability 15%."
          ]
        },
        typescript: {
          name: "TypeScript",
          milestones: [
            "Model domain entities with interfaces/unions.",
            "Build typed API flow with runtime validation.",
            "Refactor generic utilities and strict boundary types."
          ],
          production: [
            "No unsafe any on core pathways.",
            "Nullable/unknown inputs are narrowed safely.",
            "Compile-time and runtime checks both present."
          ],
          portfolio: [
            "Publish one typed feature module with contract docs and tests."
          ],
          rubric: [
            "Correctness 35% • Type safety 30% • Testing 20% • Maintainability 15%."
          ]
        },
        java: {
          name: "Java",
          milestones: [
            "Build layered class design (controller/service/repository style).",
            "Implement collection-heavy logic with clear complexity reasoning.",
            "Deliver tested module with robust exception handling."
          ],
          production: [
            "Null/exception paths handled deliberately.",
            "Unit tests cover service logic and failure modes.",
            "Architecture boundaries remain clean and decoupled."
          ],
          portfolio: [
            "Ship one Java service feature with tests and design rationale."
          ],
          rubric: [
            "Correctness 35% • OOP design 25% • Testing 20% • Reliability 20%."
          ]
        },
        kotlin: {
          name: "Kotlin",
          milestones: [
            "Build nullable-safe domain model with collection transforms.",
            "Implement coroutine-based async flow with cancellation awareness.",
            "Deliver cleanly layered Android/backend feature module."
          ],
          production: [
            "No unsafe null shortcuts in core paths.",
            "Coroutine scope ownership is explicit.",
            "Tests cover async + error scenarios."
          ],
          portfolio: [
            "Publish one Kotlin feature with null-safety and async test coverage."
          ],
          rubric: [
            "Correctness 35% • Safety/concurrency 30% • Testing 20% • Readability 15%."
          ]
        },
        markdown: {
          name: "Markdown",
          milestones: [
            "Create a complete project README with setup and troubleshooting.",
            "Build linked multi-page docs with consistent structure.",
            "Ship release notes template with copy-paste examples."
          ],
          production: [
            "Heading hierarchy and links validated.",
            "Examples are current and runnable.",
            "Docs style is consistent across pages."
          ],
          portfolio: [
            "Publish one polished docs set with architecture + usage + FAQ."
          ],
          rubric: [
            "Clarity 35% • Structure 25% • Accuracy 25% • Maintainability 15%."
          ]
        },
        go: {
          name: "Go",
          milestones: [
            "Build a REST handler package with validation + JSON responses.",
            "Add concurrency workflow with goroutine/channel coordination.",
            "Deliver tested service module with clear package boundaries."
          ],
          production: [
            "Errors are returned and wrapped with context.",
            "Concurrency paths avoid races/deadlocks.",
            "Table-driven tests include edge cases."
          ],
          portfolio: [
            "Ship one Go backend feature with tests and API contract notes."
          ],
          rubric: [
            "Correctness 35% • Concurrency safety 25% • Testing 25% • Code clarity 15%."
          ]
        },
        rust: {
          name: "Rust",
          milestones: [
            "Build a small CLI/parser with robust Result handling.",
            "Model domain using enums/traits and pattern matching.",
            "Deliver tested module with clear ownership boundaries."
          ],
          production: [
            "No panic-driven flow in normal control paths.",
            "Ownership and borrowing choices are explicit.",
            "Tests cover error variants and edge data."
          ],
          portfolio: [
            "Publish one Rust utility crate with docs, tests, and benchmark note."
          ],
          rubric: [
            "Correctness 35% • Safety model 30% • Testing 20% • Maintainability 15%."
          ]
        },
        cpp: {
          name: "C++",
          milestones: [
            "Build STL-based feature with clear class boundaries.",
            "Apply RAII/smart pointers in resource-owning module.",
            "Deliver tested performance-aware implementation."
          ],
          production: [
            "Resource ownership is explicit and leak-safe.",
            "Undefined behavior risks are removed/guarded.",
            "Tests and basic profiling support claims."
          ],
          portfolio: [
            "Ship one modern C++ module with tests and profiling summary."
          ],
          rubric: [
            "Correctness 35% • Resource safety 30% • Testing/perf 20% • Design clarity 15%."
          ]
        },
        php: {
          name: "PHP",
          milestones: [
            "Build request handler with validation and structured responses.",
            "Add service/data layers with clear responsibilities.",
            "Deliver tested endpoint with auth/error handling."
          ],
          production: [
            "Inputs are validated and sanitized.",
            "Error paths are explicit with safe defaults.",
            "Tests cover malformed/unauthorized requests."
          ],
          portfolio: [
            "Publish one PHP backend feature with API docs and tests."
          ],
          rubric: [
            "Correctness 35% • Security hygiene 30% • Testing 20% • Maintainability 15%."
          ]
        },
        dart: {
          name: "Dart + Flutter",
          milestones: [
            "Build stateful UI with loading/error/content states.",
            "Refactor into reusable widgets and clean state ownership.",
            "Deliver tested flow for main user interaction path."
          ],
          production: [
            "State updates are predictable and isolated.",
            "Async UI branches are user-friendly and resilient.",
            "Widget and unit tests cover core flows."
          ],
          portfolio: [
            "Ship one Flutter feature with screenshots, tests, and architecture notes."
          ],
          rubric: [
            "Correctness 35% • State architecture 30% • Testing 20% • UX quality 15%."
          ]
        },
        bash: {
          name: "Bash / Shell",
          milestones: [
            "Build parameterized automation script with argument parsing.",
            "Add safe file/process workflow with guard checks.",
            "Deliver CI-ready script with logging and failure handling."
          ],
          production: [
            "Variables are quoted safely.",
            "Scripts fail fast with meaningful exit codes/messages.",
            "Destructive actions require explicit confirmation/guards."
          ],
          portfolio: [
            "Publish one automation script pack with usage examples and failure modes."
          ],
          rubric: [
            "Correctness 35% • Safety 35% • Reliability 20% • Readability 10%."
          ]
        },
        csharp: {
          name: "C#",
          milestones: [
            "Build service endpoint with async and validation.",
            "Apply LINQ/refactoring for readable domain logic.",
            "Deliver tested feature with logging and null-safe paths."
          ],
          production: [
            "Nullable warnings are resolved intentionally.",
            "Async and exception paths are validated.",
            "Unit tests cover business + failure paths."
          ],
          portfolio: [
            "Publish one .NET feature module with test and diagnostics notes."
          ],
          rubric: [
            "Correctness 35% • Architecture 25% • Testing 20% • Reliability 20%."
          ]
        },
        sql: {
          name: "SQL",
          milestones: [
            "Build multi-table query set with joins/aggregations.",
            "Add window-function and CTE-based analytical solution.",
            "Deliver optimized, validated query workflow with safety checks."
          ],
          production: [
            "Join keys/cardinality are verified step by step.",
            "Execution plans are reviewed for expensive scans.",
            "Write operations are guarded with transaction/safety checks."
          ],
          portfolio: [
            "Publish one SQL analysis pack with query rationale and validation notes."
          ],
          rubric: [
            "Correctness 40% • Performance reasoning 25% • Data safety 25% • Readability 10%."
          ]
        },
        sourcecontrol: {
          name: "Source Control (Git + GitHub)",
          milestones: [
            "Execute clean branch → commit → PR workflow repeatedly.",
            "Resolve merge conflicts and preserve intended changes.",
            "Deliver team-ready commit/PR history with clear intent."
          ],
          production: [
            "Commit messages explain user-impactful changes.",
            "PR descriptions include scope, risks, and validation.",
            "History rewriting is used carefully and intentionally."
          ],
          portfolio: [
            "Share one feature branch/PR timeline showing review and iteration quality."
          ],
          rubric: [
            "Workflow correctness 40% • Collaboration quality 30% • History hygiene 30%."
          ]
        },
        ides: {
          name: "IDEs",
          milestones: [
            "Set up language tooling and run/debug baseline project.",
            "Diagnose and fix run configuration/environment issues.",
            "Deliver a reproducible team IDE setup checklist."
          ],
          production: [
            "Shared formatter/linter/debug settings are documented.",
            "Build/test commands run consistently across machines.",
            "Onboarding steps are verified by a fresh teammate path."
          ],
          portfolio: [
            "Publish one IDE onboarding guide with troubleshooting matrix."
          ],
          rubric: [
            "Setup correctness 35% • Troubleshooting depth 35% • Team consistency 30%."
          ]
        },
        aiassist: {
          name: "AI Coding Assistants",
          milestones: [
            "Create reusable prompt templates with acceptance criteria and constraints.",
            "Implement verification checklist for AI-generated code before merge.",
            "Demonstrate AI-assisted delivery with clear ownership and review evidence."
          ],
          production: [
            "Every AI-assisted change includes tests, rationale, and risk notes.",
            "Sensitive data and private context are excluded from prompts.",
            "Team policy defines approved AI usage, review, and escalation paths."
          ],
          portfolio: [
            "Publish one AI-assisted feature write-up with prompt, verification, and final diff rationale."
          ],
          rubric: [
            "Prompt quality 30% • Verification rigor 35% • Safety/compliance 20% • Delivery quality 15%."
          ]
        }
      };

      const moduleFocusByUnit = {
        "1": ["Core syntax and data types", "Variable declarations and constants", "Reading simple code flow"],
        "2": ["Type safety and value handling", "Optionals/null-safety patterns", "Common beginner mistakes"],
        "3": ["State ownership and updates", "Data flow between components/views", "Mutability vs immutability decisions"],
        "4": ["UI/component composition", "Reusable structure and layout", "Clear naming and organization"],
        "5": ["Debugging syntax and compiler errors", "Systematic troubleshooting steps", "Fast bug isolation habits"],
        "6": ["State and logic debugging", "Fixing runtime behavior issues", "Validation and regression checks"],
        "7": ["Integrated debug workflows", "Root-cause analysis", "Preventing repeat defects"],
        "8": ["Output prediction fundamentals", "Step-by-step trace practice", "Reasoning about control flow"],
        "9": ["Advanced output reasoning", "Async/stateful output behavior", "Edge-case output analysis"],
        "10": ["Module synthesis and mastery", "Applying concepts under mixed prompts", "Explaining reasoning clearly"],
        "11": ["Testing foundations", "Assertions and verification strategy", "Happy path + edge case coverage"],
        "12": ["Refactoring for readability", "Maintainability and code quality", "Safe cleanup with behavior preserved"],
        "13": ["Performance and reliability", "Failure handling and resilience", "Production-quality decisions"],
        "14": ["Real-world scenarios", "Architecture and tradeoff thinking", "Portfolio-ready execution"],
      };

      const criticalModuleFocusByTopic = {
        swift: ["Swift concurrency cancellation and actor safety", "Keychain + secure token handling", "Testable MVVM boundaries"],
        web: ["Accessibility and semantic HTML", "XSS/CSRF mitigation habits", "Frontend performance budgets"],
        react: ["State normalization and stale-effect prevention", "Error boundaries and fallback UX", "Data-fetch cache invalidation"],
        python: ["Virtualenv + dependency pinning", "Type hints and runtime validation", "Structured logging + observability"],
        typescript: ["Strict null checks and type narrowing", "Runtime schema validation", "Typed API contract discipline"],
        java: ["Layered architecture boundaries", "Transaction and rollback safety", "Concurrency fundamentals"],
        kotlin: ["Coroutine scope lifecycle safety", "Flow/StateFlow architecture", "Null-safety edge cases"],
        markdown: ["Docs information architecture", "Docs review/versioning workflow", "Production runbook quality"],
        go: ["Context cancellation propagation", "Error-wrapping discipline", "Concurrency race prevention"],
        rust: ["Lifetimes and ownership API design", "Result-driven error modeling", "Safe concurrency defaults"],
        cpp: ["RAII + smart pointer ownership", "Sanitizers/static analysis usage", "Thread synchronization safety"],
        php: ["Input validation and output escaping", "Auth/session hardening", "Database transaction safety"],
        dart: ["State management architecture", "Flutter performance profiling", "Platform integration boundaries"],
        bash: ["Defensive scripting (set -euo pipefail)", "ShellCheck + lint discipline", "Safe quoting and secret handling"],
        csharp: ["Async/await and cancellation tokens", "Dependency injection boundaries", "Observability and diagnostics"],
        sql: ["Index design and query-plan literacy", "Transaction isolation awareness", "Migration and rollback safety"],
        cloudkit: ["Zone sharing and permissions", "Conflict resolution strategy", "Offline sync recovery patterns"],
        firebase: ["Security rules test coverage", "Index/cost planning", "Auth/session edge-case handling"],
        sourcecontrol: ["Branch protection and review policy", "Safe rebase/merge discipline", "Release tagging strategy"],
        ides: ["Debugger-first troubleshooting", "Reproducible workspace setup", "Team lint/format consistency"],
        aiassist: ["Prompt contracts with acceptance criteria", "Output verification discipline", "Policy-safe assistant usage"]
      };

      const criticalCompletionByTopic = {
        swift: ["Add async cancellation paths", "Protect secrets/tokens", "Ship tests for view-model logic"],
        web: ["Pass accessibility checks", "Harden against XSS/CSRF", "Track core web vitals"],
        react: ["Handle loading/error/empty states", "Add boundary-level fallback UI", "Audit render performance"],
        python: ["Pin dependencies", "Validate external input", "Add structured logs"],
        typescript: ["Enable strict TS config", "Validate API payloads at runtime", "Keep shared types versioned"],
        java: ["Define service/repository boundaries", "Guard transaction consistency", "Test threaded edge cases"],
        kotlin: ["Use lifecycle-safe coroutine scopes", "Model state transitions explicitly", "Handle nullability exhaustively"],
        markdown: ["Keep docs versioned with releases", "Document failure/recovery steps", "Add onboarding quickstart"],
        go: ["Propagate context cancellation", "Never ignore error returns", "Race-check concurrency paths"],
        rust: ["Avoid unchecked unwrap in critical paths", "Model domain errors clearly", "Validate borrow/lifetime assumptions"],
        cpp: ["Run sanitizers before release", "Enforce ownership semantics", "Profile critical code paths"],
        php: ["Sanitize and escape user input", "Harden auth/session flows", "Use safe DB query patterns"],
        dart: ["Stabilize state architecture", "Profile widget rebuilds", "Test async UI flows"],
        bash: ["Use strict shell options", "Quote all expansions", "Fail fast with clear exit codes"],
        csharp: ["Use cancellation tokens end-to-end", "Validate nullability contracts", "Instrument logs and metrics"],
        sql: ["Audit query plans", "Use safe migrations", "Wrap writes in correct transactions"],
        cloudkit: ["Test offline/online sync transitions", "Handle conflict merges explicitly", "Monitor sync failures"],
        firebase: ["Write rules tests", "Control read/write costs", "Validate auth + rules interaction"],
        sourcecontrol: ["Protect main branches", "Review every merge path", "Use rollback tags"],
        ides: ["Standardize tool versions", "Document run/debug setup", "Verify clean setup on a fresh machine"],
        aiassist: ["Verify every generated change", "Protect secrets and proprietary context", "Keep ownership and traceability"]
      };

      function formatTopicTitle(topicKey) {
        const map = {
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
          aiassist: "AI Coding Assistants",
        };
        return map[topicKey] || topicKey;
      }

      function markModuleGuideReviewed(topicKey, unitKey) {
        if (!topicKey || !unitKey) {
          return;
        }
        const storageKey = `${topicKey}:${unitKey}`;
        let store = {};
        try {
          const raw = localStorage.getItem(moduleStudyGateStorageKey);
          if (raw) {
            const parsed = JSON.parse(raw);
            if (parsed && typeof parsed === "object") {
              store = parsed;
            }
          }
        } catch (error) {}

        store[storageKey] = Date.now();
        localStorage.setItem(moduleStudyGateStorageKey, JSON.stringify(store));
      }

      function renderModuleFocus(topicKey, unitKey) {
        if (!moduleFocusCard || !moduleFocusList || !moduleFocusTitle || !moduleFocusIntro || !startModuleQuizLink) {
          return;
        }

        if (!topicKey || !unitKey) {
          moduleFocusCard.classList.add("hidden");
          return;
        }

        const focusItems = [
          ...(moduleFocusByUnit[unitKey] || moduleFocusByUnit["1"]),
          ...((criticalModuleFocusByTopic[topicKey] || []).slice(0, 2))
        ];
        moduleFocusCard.classList.remove("hidden");
        moduleFocusTitle.textContent = `${formatTopicTitle(topicKey)} • Module ${unitKey} Study Focus`;
        moduleFocusIntro.textContent = "Study these points, then start the module quiz to apply exactly this module's skills.";

        moduleFocusList.innerHTML = "";
        focusItems.forEach((line) => {
          const item = document.createElement("li");
          item.textContent = line;
          moduleFocusList.appendChild(item);
        });

        startModuleQuizLink.href = `trainer.html?topic=${encodeURIComponent(topicKey)}&unit=${encodeURIComponent(unitKey)}`;
        startModuleQuizLink.addEventListener("click", () => {
          markModuleGuideReviewed(topicKey, unitKey);
        });
      }

      function renderLanguageOverview(topicKey) {
        if (!guideOverviewTitle || !guideOverviewSubtitle || !guideOverviewMainUse || !guideOverviewHistory || !guideOverviewIndustries) {
          return;
        }

        if (!topicKey || !overviewByTopic[topicKey]) {
          guideOverviewTitle.textContent = "Language Snapshot";
          guideOverviewSubtitle.textContent = "Choose a language to see its quick snapshot before you start quiz modules.";
          guideOverviewMainUse.textContent = "Select a language to see what it is most commonly used for.";
          guideOverviewHistory.textContent = "Select a language to see a short history timeline.";
          guideOverviewIndustries.innerHTML = "<li>Select a language to see where it is commonly used in industry.</li>";
          return;
        }

        const overview = overviewByTopic[topicKey];
        guideOverviewTitle.textContent = `${overview.title} Snapshot`;
        guideOverviewSubtitle.textContent = overview.subtitle;
        guideOverviewMainUse.textContent = overview.mainUse;
        guideOverviewHistory.textContent = overview.history;

        guideOverviewIndustries.innerHTML = "";
        overview.industries.forEach((industry) => {
          const item = document.createElement("li");
          item.textContent = industry;
          guideOverviewIndustries.appendChild(item);
        });
      }

      function renderInterviewPrep(topicKey) {
        if (!interviewTipsList || !interviewTestsList || !interviewIntro || !interviewTitle) {
          return;
        }

        interviewTipsList.innerHTML = "";
        interviewTestsList.innerHTML = "";

        if (!topicKey || !interviewPrep[topicKey]) {
          interviewTitle.textContent = "Interview Prep";
          interviewIntro.textContent = "Choose a language to see focused interview tips and common test problems.";
          return;
        }

        const config = interviewPrep[topicKey];
        interviewTitle.textContent = `${config.name} Interview Prep`;
        interviewIntro.textContent = "Use these to guide interview prep and practice sessions.";

        config.tips.forEach((tip) => {
          const item = document.createElement("li");
          item.textContent = tip;
          interviewTipsList.appendChild(item);
        });

        config.tests.forEach((test) => {
          const item = document.createElement("li");
          item.textContent = test;
          interviewTestsList.appendChild(item);
        });
      }

      function renderArchitecturePrep(topicKey) {
        if (!architectureTitle || !architectureIntro || !architecturePatternsList || !architectureLanguageList) {
          return;
        }

        architecturePatternsList.innerHTML = "";
        architectureLanguageList.innerHTML = "";

        architecturePatterns.forEach((pattern) => {
          const item = document.createElement("li");
          item.textContent = pattern;
          architecturePatternsList.appendChild(item);
        });

        if (!topicKey || !architectureByLanguage[topicKey]) {
          architectureTitle.textContent = "Architecture Styles";
          architectureIntro.textContent = "Choose a language to see which architecture styles are most common in real projects.";
          return;
        }

        const config = architectureByLanguage[topicKey];
        architectureTitle.textContent = `${config.name} Architecture Guide`;
        architectureIntro.textContent = "These architecture styles are commonly expected in code reviews and interviews for this stack.";

        config.guidance.forEach((line) => {
          const item = document.createElement("li");
          item.textContent = line;
          architectureLanguageList.appendChild(item);
        });
      }

      function renderCompletionPrep(topicKey) {
        if (!completionTitle || !completionIntro || !completionMilestonesList || !completionProductionList || !completionPortfolioList || !completionRubricList) {
          return;
        }

        completionMilestonesList.innerHTML = "";
        completionProductionList.innerHTML = "";
        completionPortfolioList.innerHTML = "";
        completionRubricList.innerHTML = "";

        if (!topicKey || !completionByLanguage[topicKey]) {
          completionTitle.textContent = "Course Completion Pack";
          completionIntro.textContent = "Choose a language to see capstones, production checklist, portfolio outcomes, and grading rubric.";
          return;
        }

        const config = completionByLanguage[topicKey];
        completionTitle.textContent = `${config.name} Completion Pack`;
        completionIntro.textContent = "Use these milestones and rubric criteria to finish the course at portfolio quality.";

        config.milestones.forEach((line) => {
          const item = document.createElement("li");
          item.textContent = line;
          completionMilestonesList.appendChild(item);
        });

        config.production.forEach((line) => {
          const item = document.createElement("li");
          item.textContent = line;
          completionProductionList.appendChild(item);
        });

        const criticalCompletion = criticalCompletionByTopic[topicKey] || [];
        criticalCompletion.slice(0, 3).forEach((line) => {
          const item = document.createElement("li");
          item.textContent = `Critical: ${line}`;
          completionProductionList.appendChild(item);
        });

        config.portfolio.forEach((line) => {
          const item = document.createElement("li");
          item.textContent = line;
          completionPortfolioList.appendChild(item);
        });

        config.rubric.forEach((line) => {
          const item = document.createElement("li");
          item.textContent = line;
          completionRubricList.appendChild(item);
        });
      }


      if (backLink) {
        if (selectedTopic && selectedUnit) {
          backLink.href = `trainer.html?topic=${encodeURIComponent(selectedTopic)}&unit=${encodeURIComponent(selectedUnit)}`;
          backLink.textContent = "Back to Module Quiz";
        } else {
          backLink.href = "index.html";
          backLink.textContent = "Back to Language Options";
        }
      }

      sidebarTopicLinks.forEach((link) => {
        const topicKey = link.dataset.topic || "";
        if (topicKey && selectedTopic === topicKey) {
          link.classList.add("active");
        }
      });

      renderInterviewPrep(selectedTopic);
      renderArchitecturePrep(selectedTopic);
      renderCompletionPrep(selectedTopic);
      renderModuleFocus(selectedTopic, selectedUnit);
      renderLanguageOverview(selectedTopic);
      renderProjectIdeLab();

      if (selectedTopic) {
        document.querySelectorAll(".guide-section").forEach((section) => {
          section.classList.toggle("hidden", section.dataset.topic !== selectedTopic);
        });
      }

      function setAccordionState(section, expanded) {
        if (!section) {
          return;
        }

        section.classList.toggle("is-collapsed", !expanded);
        const button = section.querySelector(".accordion-toggle");
        if (button) {
          button.setAttribute("aria-expanded", expanded ? "true" : "false");
        }
      }

      function setupAccordionSection(section, expandedByDefault) {
        if (!section || section.dataset.accordionReady === "1") {
          return;
        }

        const heading = Array.from(section.children).find((child) => child.tagName === "H2");
        if (!heading) {
          return;
        }

        const originalHeadingText = heading.textContent || "Section";
        const contentId = `accordion-${section.id || Math.random().toString(36).slice(2, 8)}`;

        const toggleButton = document.createElement("button");
        toggleButton.type = "button";
        toggleButton.className = "accordion-toggle";
        toggleButton.textContent = originalHeadingText;
        toggleButton.setAttribute("aria-controls", contentId);

        heading.textContent = "";
        heading.classList.add("accordion-heading");
        heading.appendChild(toggleButton);

        const content = document.createElement("div");
        content.className = "accordion-content";
        content.id = contentId;

        let nextNode = heading.nextSibling;
        while (nextNode) {
          const currentNode = nextNode;
          nextNode = nextNode.nextSibling;
          content.appendChild(currentNode);
        }

        section.appendChild(content);

        toggleButton.addEventListener("click", () => {
          const expanded = section.classList.contains("is-collapsed");
          setAccordionState(section, expanded);
        });

        section.dataset.accordionReady = "1";
        setAccordionState(section, expandedByDefault);
      }

      const accordionSections = [
        document.getElementById("learningSystemCard"),
        document.getElementById("languageOverviewCard"),
        document.getElementById("interviewPrepCard"),
        document.getElementById("architecturePrepCard"),
        document.getElementById("completionPrepCard"),
        document.getElementById("apiProjectLab"),
        document.getElementById("proDepthCard"),
        ...Array.from(document.querySelectorAll(".guide-section"))
      ].filter(Boolean);

      accordionSections.forEach((section) => {
        const sectionId = section.id || "";
        const isGuideSection = section.classList.contains("guide-section");
        const shouldExpand = (sectionId === "learningSystemCard")
          || (selectedTopic && isGuideSection && section.dataset.topic === selectedTopic)
          || (selectedTopic && ["languageOverviewCard", "interviewPrepCard", "architecturePrepCard", "completionPrepCard", "moduleFocusCard"].includes(sectionId));

        setupAccordionSection(section, shouldExpand);
      });

      function getReadableAccordionSections() {
        return accordionSections.filter((section) => !section.classList.contains("hidden"));
      }

      function getSectionLabel(section) {
        if (!section) {
          return "Section";
        }
        const button = section.querySelector(".accordion-toggle");
        if (button && button.textContent) {
          return button.textContent.trim();
        }
        return section.id || "Section";
      }

      function updateGuideReadabilityStatus() {
        if (!guideReadabilityStatus) {
          return;
        }
        const sections = getReadableAccordionSections();
        const expanded = sections.filter((section) => !section.classList.contains("is-collapsed")).length;
        guideReadabilityStatus.textContent = `Sections expanded: ${expanded}/${sections.length}. Use Focus Mode for cleaner reading and fewer distractions.`;
      }

      function populateGuideJumpSelect() {
        if (!guideJumpSelect) {
          return;
        }

        guideJumpSelect.innerHTML = "";
        const placeholder = document.createElement("option");
        placeholder.value = "";
        placeholder.textContent = "Select section...";
        guideJumpSelect.appendChild(placeholder);

        getReadableAccordionSections().forEach((section) => {
          if (!section.id) {
            return;
          }
          const option = document.createElement("option");
          option.value = section.id;
          option.textContent = getSectionLabel(section);
          guideJumpSelect.appendChild(option);
        });
      }

      if (guideExpandAllBtn) {
        guideExpandAllBtn.addEventListener("click", () => {
          getReadableAccordionSections().forEach((section) => setAccordionState(section, true));
          updateGuideReadabilityStatus();
        });
      }

      if (guideCollapseAllBtn) {
        guideCollapseAllBtn.addEventListener("click", () => {
          getReadableAccordionSections().forEach((section) => {
            const keepExpanded = section.id === "learningSystemCard";
            setAccordionState(section, keepExpanded);
          });
          updateGuideReadabilityStatus();
        });
      }

      if (guideFocusModeBtn) {
        guideFocusModeBtn.addEventListener("click", () => {
          const isEnabled = document.body.classList.toggle("guide-focus-mode");
          guideFocusModeBtn.textContent = isEnabled ? "Disable Focus Mode" : "Enable Focus Mode";
        });
      }

      if (guideJumpSelect) {
        guideJumpSelect.addEventListener("change", () => {
          const targetId = guideJumpSelect.value;
          if (!targetId) {
            return;
          }
          const target = document.getElementById(targetId);
          if (!target) {
            return;
          }
          setAccordionState(target, true);
          target.scrollIntoView({ behavior: "smooth", block: "start" });
          updateGuideReadabilityStatus();
        });
      }

      populateGuideJumpSelect();
      updateGuideReadabilityStatus();
