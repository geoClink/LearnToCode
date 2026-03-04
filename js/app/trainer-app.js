const questionSets = {
  swift: {
    beginner: [
      {
        type: "vocab",
        prompt: "In Swift, what does let mean?",
        options: [
          "A mutable variable",
          "A constant value that cannot be changed",
          "A type annotation keyword",
          "A function return keyword"
        ],
        answer: 1,
        explanation: "let creates a constant. Use var for values that can change."
      },
      {
        type: "tf",
        prompt: "True or False: Text(\"Hello\") is valid SwiftUI syntax.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. Text is the base view for displaying strings."
      },
      {
        type: "code",
        prompt: "Write 2-4 lines of Swift that declare `name` as a String constant with value \"Taylor\" and print `Name: <value>` using string interpolation.",
        checks: ["let name: string", "\"taylor\"", "print(", "\\(name)"],
        sample: "let name: String = \"Taylor\"\nprint(\"Name: \\(name)\")",
        autofill: ["let name: String = \"Taylor\"", "print(\"Name: \\(name)\")", "String", "\\(name)"]
      },
      {
        type: "vocab",
        prompt: "Which keyword declares a variable that can change in Swift?",
        options: ["let", "var", "func", "class"],
        answer: 1,
        explanation: "var is used for mutable values."
      },
      {
        type: "tf",
        prompt: "True or False: Swift type annotations can be written like var age: Int = 21.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. Type annotations use a colon followed by the type."
      }
    ],
    medium: [
      {
        type: "vocab",
        prompt: "Which wrapper is commonly used to observe an ObservableObject inside a SwiftUI view?",
        options: ["@Binding", "@State", "@ObservedObject", "@Environment"],
        answer: 2,
        explanation: "@ObservedObject subscribes a view to an ObservableObject's published changes."
      },
      {
        type: "tf",
        prompt: "True or False: A SwiftUI view body must produce something that conforms to View.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. The body property returns some View."
      },
      {
        type: "code",
        prompt: "Write 6-10 lines of SwiftUI that include `@State private var count = 0` inside a `ContentView`, with `var body: some View`, a `Text` showing count, and a Button that increments by 1.",
        checks: ["struct contentview: view", "@state private var count = 0", "var body: some view", "text(\"count:", "button(||button {", "count += 1"],
        sample:
          "struct ContentView: View {\n  @State private var count = 0\n\n  var body: some View {\n    VStack {\n      Text(\"Count: \\(count)\")\n      Button(\"Add 1\") { count += 1 }\n    }\n  }\n}",
        autofill: ["struct ContentView: View {", "@State private var count = 0", "var body: some View {", "VStack {", "Text(\"Count: \\(count)\")", "Button(\"Add 1\") { count += 1 }", "}"]
      },
      {
        type: "vocab",
        prompt: "In SwiftUI, which stack arranges views horizontally?",
        options: ["VStack", "ZStack", "HStack", "List"],
        answer: 2,
        explanation: "HStack places child views from left to right."
      },
      {
        type: "tf",
        prompt: "True or False: @Binding lets a child view read and write a value owned by a parent.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. @Binding passes a two-way connection to state."
      }
    ],
    advanced: [
      {
        type: "vocab",
        prompt: "What does @MainActor help guarantee in Swift concurrency code?",
        options: [
          "Background-only execution",
          "UI-related code executes on the main actor",
          "Automatic error retries",
          "Compile-time memory allocation"
        ],
        answer: 1,
        explanation: "@MainActor isolates code to the main actor, commonly used for UI updates."
      },
      {
        type: "tf",
        prompt: "True or False: You can call async functions from a Task block using await.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. Task creates an asynchronous context where await is valid."
      },
      {
        type: "code",
        prompt: "Write 4-8 lines defining a Swift `Todo` model that conforms to `Identifiable` and `Codable`, with `id: UUID = UUID()` and `title: String`.",
        checks: ["struct todo: identifiable, codable", "let id: uuid = uuid()", "let title: string"],
        sample: "struct Todo: Identifiable, Codable {\n  let id: UUID = UUID()\n  let title: String\n}",
        autofill: ["struct Todo: Identifiable, Codable {", "let id: UUID = UUID()", "let title: String", "}"]
      },
      {
        type: "vocab",
        prompt: "Which protocol is commonly required to decode JSON into Swift models?",
        options: ["Equatable", "Codable", "Hashable", "Sequence"],
        answer: 1,
        explanation: "Codable combines Encodable and Decodable for data conversion."
      },
      {
        type: "code",
        prompt: "Write 5-9 lines of Swift for `func greet(name: String) -> String` that uses `guard !name.isEmpty` and returns `Hello, <name>` with interpolation.",
        checks: ["func greet(name: string) -> string", "guard !name.isempty", "else", "return \"hello, guest\"", "return \"hello, \\(name)\""],
        sample:
          "func greet(name: String) -> String {\n  guard !name.isEmpty else {\n    return \"Hello, Guest\"\n  }\n  return \"Hello, \\(name)\"\n}",
        autofill: ["func greet(name: String) -> String {", "guard !name.isEmpty else {", "return \"Hello, Guest\"", "return \"Hello, \\(name)\"", "}"]
      }
    ]
  },
  web: {
    beginner: [
      {
        type: "vocab",
        prompt: "What does HTML stand for?",
        options: [
          "HyperText Markup Language",
          "HighText Machine Language",
          "Hyperlink and Text Management Language",
          "Home Tool Markup Language"
        ],
        answer: 0,
        explanation: "HTML stands for HyperText Markup Language."
      },
      {
        type: "tf",
        prompt: "True or False: CSS is used to style how web pages look.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. CSS controls presentation and layout."
      },
      {
        type: "code",
        prompt: "Write 2-4 lines of HTML that create an h1 with text Hello Web.",
        checks: ["<h1", "Hello Web", "</h1>"],
        sample: "<h1>Hello Web</h1>"
      },
      {
        type: "vocab",
        prompt: "Which CSS property changes text color?",
        options: ["font-style", "text-transform", "color", "background"],
        answer: 2,
        explanation: "Use color to set the foreground text color."
      },
      {
        type: "tf",
        prompt: "True or False: JavaScript can update page content after the page has loaded.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. JavaScript can modify the DOM at runtime."
      }
    ],
    medium: [
      {
        type: "vocab",
        prompt: "Which JavaScript method is commonly used to attach an event handler to a DOM element?",
        options: ["setInterval", "addEventListener", "querySelector", "appendChild"],
        answer: 1,
        explanation: "addEventListener registers event callbacks like click, input, and submit."
      },
      {
        type: "tf",
        prompt: "True or False: const prevents reassignment, but object properties can still be changed.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. const locks the binding, not deep object mutation."
      },
      {
        type: "code",
        prompt: "Write 4-7 lines of JavaScript that selects a button with id saveBtn and toggles class active on click.",
        checks: ["querySelector", "#saveBtn", "addEventListener", "click", "classList.toggle"],
        sample:
          "const saveBtn = document.querySelector('#saveBtn')\nsaveBtn.addEventListener('click', () => {\n  saveBtn.classList.toggle('active')\n})"
      },
      {
        type: "vocab",
        prompt: "Which array method creates a new array by transforming each element?",
        options: ["forEach", "map", "filter", "find"],
        answer: 1,
        explanation: "map returns a new array with transformed values."
      },
      {
        type: "code",
        prompt: "Write 3-6 lines of CSS that center text in a class named card and add 16px padding.",
        checks: [".card", "text-align", "center", "padding", "16px"],
        sample: ".card {\n  text-align: center;\n  padding: 16px;\n}"
      }
    ],
    advanced: [
      {
        type: "vocab",
        prompt: "Which CSS layout system is designed for two-dimensional layout control (rows and columns)?",
        options: ["Flexbox", "Grid", "Float", "Inline-block"],
        answer: 1,
        explanation: "CSS Grid is designed for two-dimensional layouts."
      },
      {
        type: "tf",
        prompt: "True or False: In fetch, you typically parse JSON by calling await response.json().",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. response.json() parses the body into a JavaScript object."
      },
      {
        type: "code",
        prompt: "Write 4-8 lines of async JavaScript that fetches /api/users, awaits JSON, and logs the data.",
        checks: ["async", "fetch", "await", "response.json", "console.log"],
        sample:
          "async function loadUsers() {\n  const response = await fetch('/api/users')\n  const data = await response.json()\n  console.log(data)\n}"
      },
      {
        type: "vocab",
        prompt: "What does CORS primarily control in browsers?",
        options: [
          "How CSS is minified",
          "Cross-origin request permissions",
          "JavaScript variable scope",
          "Image compression format"
        ],
        answer: 1,
        explanation: "CORS is a browser security policy for cross-origin HTTP requests."
      },
      {
        type: "tf",
        prompt: "True or False: CSS Grid can place items by named areas.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. grid-template-areas lets you assign named layout regions."
      }
    ]
  },
  react: {
    beginner: [
      {
        type: "vocab",
        prompt: "What is JSX in React?",
        options: [
          "A CSS preprocessor",
          "A syntax extension that lets you write HTML-like markup in JavaScript",
          "A built-in database",
          "A package manager"
        ],
        answer: 1,
        explanation: "JSX is a JavaScript syntax extension used to describe UI."
      },
      {
        type: "tf",
        prompt: "True or False: React components should start with a capital letter.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. Component names are capitalized by convention and parsing rules."
      },
      {
        type: "code",
        prompt: "Write 2-4 lines for a React component named Greeting that returns an h1 with text Hello React.",
        checks: ["function Greeting", "return", "<h1", "Hello React"],
        sample: "function Greeting() {\n  return <h1>Hello React</h1>\n}"
      },
      {
        type: "vocab",
        prompt: "How do components usually receive input data from a parent in React?",
        options: ["props", "routes", "reducers", "keys"],
        answer: 0,
        explanation: "Props are the standard way to pass data into child components."
      },
      {
        type: "tf",
        prompt: "True or False: A React component can return only one root JSX element (or a fragment).",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. JSX must return a single root wrapper or fragment."
      }
    ],
    medium: [
      {
        type: "vocab",
        prompt: "What is the primary purpose of useEffect in React?",
        options: [
          "Create routes",
          "Run side effects after render",
          "Define CSS variables",
          "Compile JSX"
        ],
        answer: 1,
        explanation: "useEffect is used for side effects like fetching data or subscriptions."
      },
      {
        type: "tf",
        prompt: "True or False: Directly mutating state objects is recommended in React.",
        options: ["True", "False"],
        answer: 1,
        explanation: "False. State should be updated immutably via setter functions."
      },
      {
        type: "code",
        prompt: "Write 4-8 lines with useState and useEffect that logs count whenever count changes.",
        checks: ["useState", "useEffect", "count", "console.log", "[count]"],
        sample:
          "const [count, setCount] = useState(0)\nuseEffect(() => {\n  console.log(count)\n}, [count])"
      },
      {
        type: "vocab",
        prompt: "What is the typical purpose of a key prop when rendering lists in React?",
        options: [
          "Style each list item",
          "Help React track item identity between renders",
          "Encrypt list data",
          "Sort items alphabetically"
        ],
        answer: 1,
        explanation: "Keys help React reconcile list item changes efficiently."
      },
      {
        type: "tf",
        prompt: "True or False: useEffect runs after render by default.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. Effects run after React commits updates to the DOM."
      }
    ],
    advanced: [
      {
        type: "vocab",
        prompt: "Which hook memoizes a computed value to avoid unnecessary recalculation?",
        options: ["useRef", "useMemo", "useEffect", "useId"],
        answer: 1,
        explanation: "useMemo memoizes computed values based on dependencies."
      },
      {
        type: "tf",
        prompt: "True or False: Using array index as key is always the best choice for dynamic lists.",
        options: ["True", "False"],
        answer: 1,
        explanation: "False. Stable unique keys are preferred, especially when list order can change."
      },
      {
        type: "code",
        prompt: "Write 4-8 lines for a custom hook useToggle that stores a boolean and returns value plus a toggle function.",
        checks: ["function useToggle", "useState", "toggle", "set", "return"],
        sample:
          "function useToggle(initial = false) {\n  const [value, setValue] = useState(initial)\n  const toggle = () => setValue((v) => !v)\n  return [value, toggle]\n}"
      },
      {
        type: "vocab",
        prompt: "Which API is commonly used in React to provide global state without prop drilling?",
        options: ["Context API", "localStorage", "setInterval", "ReactDOM.render"],
        answer: 0,
        explanation: "The Context API shares values across component trees."
      },
      {
        type: "code",
        prompt: "Write 4-8 lines that memoize a filtered array named visibleItems using useMemo with dependencies [items, query].",
        checks: ["useMemo", "visibleItems", "items", "query", "[items, query]"],
        sample:
          "const visibleItems = useMemo(() => {\n  return items.filter((item) => item.name.includes(query))\n}, [items, query])"
      }
    ]
  },
  python: {
    beginner: [],
    medium: [],
    advanced: []
  },
  typescript: {
    beginner: [],
    medium: [],
    advanced: []
  },
  markdown: {
    beginner: [],
    medium: [],
    advanced: []
  },
  java: {
    beginner: [],
    medium: [],
    advanced: []
  },
  kotlin: {
    beginner: [],
    medium: [],
    advanced: []
  },
  csharp: {
    beginner: [],
    medium: [],
    advanced: []
  },
  sql: {
    beginner: [],
    medium: [],
    advanced: []
  },
  go: {
    beginner: [],
    medium: [],
    advanced: []
  },
  rust: {
    beginner: [],
    medium: [],
    advanced: []
  },
  cpp: {
    beginner: [],
    medium: [],
    advanced: []
  },
  php: {
    beginner: [],
    medium: [],
    advanced: []
  },
  dart: {
    beginner: [],
    medium: [],
    advanced: []
  },
  bash: {
    beginner: [],
    medium: [],
    advanced: []
  },
  ides: {
    beginner: [],
    medium: [],
    advanced: []
  },
  sourcecontrol: {
    beginner: [],
    medium: [],
    advanced: []
  },
  cloudkit: {
    beginner: [],
    medium: [],
    advanced: []
  },
  firebase: {
    beginner: [],
    medium: [],
    advanced: []
  },
  aiassist: {
    beginner: [],
    medium: [],
    advanced: []
  }
};

const extraQuestionSets = {
  swift: {
    beginner: [
      {
        type: "vocab",
        prompt: "Which Swift type is best for whole numbers like 3, 42, or 100?",
        options: ["Double", "String", "Int", "Bool"],
        answer: 2,
        explanation: "Int represents whole numbers."
      },
      {
        type: "code",
        prompt: "Write 3-6 lines of Swift that declare a typed city array (`[String]`) and safely print the first city using optional binding.",
        checks: ["let cities: [string]", "if let firstcity = cities.first", "print(firstcity)"],
        sample: "let cities: [String] = [\"Paris\", \"Rome\", \"Tokyo\"]\nif let firstCity = cities.first {\n  print(firstCity)\n}",
        autofill: ["let cities: [String] = [\"Paris\", \"Rome\", \"Tokyo\"]", "if let firstCity = cities.first {", "print(firstCity)", "}"]
      },
      {
        type: "tf",
        prompt: "True or False: In Swift, strings are written with double quotes.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. String literals use double quotes."
      },
      {
        type: "output",
        prompt: "Output Prediction: What is printed by this Swift code? let count = 2; print(\"Count: \\(count)\")",
        options: ["Count: count", "Count: 2", "2", "Nothing"],
        answer: 1,
        explanation: "String interpolation inserts the value of count, so it prints Count: 2."
      },
      {
        type: "debug",
        prompt: "Debug This: Fix the code so it declares a mutable score and then increments it.",
        starterCode: "let score = 0\nscore += 1",
        checks: ["var score = 0", "score += 1"],
        sample: "var score = 0\nscore += 1"
      }
    ],
    medium: [
      {
        type: "vocab",
        prompt: "Which SwiftUI wrapper is commonly used for view-local value changes like toggles or counters?",
        options: ["@State", "@EnvironmentObject", "@Published", "@AppStorage"],
        answer: 0,
        explanation: "@State is used for local mutable view state."
      },
      {
        type: "code",
        prompt: "Write 5-9 lines of SwiftUI that declare `@State private var isOn = false`, add a `Toggle`, and show a `Text` label that changes between On and Off.",
        checks: ["@state private var ison = false", "toggle(", "$ison", "text(ison ?"],
        sample:
          "@State private var isOn = false\n\nVStack {\n  Toggle(\"Notifications\", isOn: $isOn)\n  Text(isOn ? \"On\" : \"Off\")\n}",
        autofill: ["@State private var isOn = false", "VStack {", "Toggle(\"Notifications\", isOn: $isOn)", "Text(isOn ? \"On\" : \"Off\")", "}"]
      },
      {
        type: "code",
        prompt: "Visual Replication: Write 5-10 lines of SwiftUI to recreate the target preview: two circles next to each other in one row.",
        checks: ["hstack", "circle()", "fill(.blue)", "fill(.green)", ".frame("],
        sample:
          "HStack(spacing: 12) {\n  Circle()\n    .fill(.blue)\n    .frame(width: 44, height: 44)\n\n  Circle()\n    .fill(.green)\n    .frame(width: 44, height: 44)\n}",
        autofill: ["HStack(spacing: 12) {", "Circle()", ".fill(.blue)", ".fill(.green)", ".frame(width: 44, height: 44)", "}"],
        visualTarget: "swift-two-circles-row",
        visualTitle: "Target Preview"
      },
      {
        type: "code",
        prompt: "Visual Replication: Write 6-10 lines of SwiftUI to recreate the target preview: a VStack with a title and a button below it.",
        checks: ["vstack", "text(", "button(||button {", "spacing:"],
        sample:
          "VStack(spacing: 10) {\n  Text(\"Profile\")\n    .font(.headline)\n\n  Button(\"Continue\") {\n    print(\"Tapped\")\n  }\n}",
        autofill: ["VStack(spacing: 10) {", "Text(\"Profile\")", ".font(.headline)", "Button(\"Continue\") {", "print(\"Tapped\")", "}", "}"],
        visualTarget: "swift-vstack-title-button",
        visualTitle: "Target Preview"
      },
      {
        type: "tf",
        prompt: "True or False: A computed property can return a value without storing it directly.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. Computed properties derive values from other data."
      },
      {
        type: "output",
        prompt: "Output Prediction: What does this Swift condition print? let isReady = true; print(isReady ? \"Go\" : \"Stop\")",
        options: ["true", "Go", "Stop", "No output"],
        answer: 1,
        explanation: "The condition is true, so the first branch is printed: Go."
      },
      {
        type: "debug",
        prompt: "Debug This: Fix the SwiftUI view so tapping the button updates count.",
        starterCode: "struct CounterView: View {\n  @State private var count = 0\n\n  var body: some View {\n    VStack {\n      Text(\"Count: \\(count)\")\n      Button(\"Add\") {\n        count + 1\n      }\n    }\n  }\n}",
        checks: ["count += 1"],
        sample: "struct CounterView: View {\n  @State private var count = 0\n\n  var body: some View {\n    VStack {\n      Text(\"Count: \\(count)\")\n      Button(\"Add\") {\n        count += 1\n      }\n    }\n  }\n}"
      }
    ],
    advanced: [
      {
        type: "vocab",
        prompt: "What keyword is used to define an asynchronous function in Swift?",
        options: ["sync", "await", "async", "actor"],
        answer: 2,
        explanation: "Functions are marked async to indicate asynchronous behavior."
      },
      {
        type: "code",
        prompt: "Write 5-9 lines of Swift for an enum `LoadState` with cases `idle`, `loading`, `success`, and `failure(Error)`.",
        checks: ["enum loadstate", "case idle", "case loading", "case success", "case failure(error)"],
        sample: "enum LoadState {\n  case idle\n  case loading\n  case success\n  case failure(Error)\n}",
        autofill: ["enum LoadState {", "case idle", "case loading", "case success", "case failure(Error)", "}"]
      },
      {
        type: "tf",
        prompt: "True or False: Actors in Swift help protect mutable state from data races.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. Actors provide isolation for mutable state."
      },
      {
        type: "output",
        prompt: "Output Prediction: What is returned? func greet(_ name: String?) -> String { name ?? \"Guest\" } then greet(nil)",
        options: ["nil", "name", "Guest", "Error"],
        answer: 2,
        explanation: "The nil-coalescing operator returns the fallback value Guest when name is nil."
      },
      {
        type: "debug",
        prompt: "Debug This: Fix the async function so it compiles and returns the fetched title.",
        starterCode: "func loadTitle() async -> String {\n  let title = await fetchTitle()\n  return\n}",
        checks: ["return title"],
        sample: "func loadTitle() async -> String {\n  let title = await fetchTitle()\n  return title\n}"
      }
    ]
  },
  web: {
    beginner: [
      {
        type: "vocab",
        prompt: "Which HTML element is best for a clickable navigation link?",
        options: ["<button>", "<a>", "<div>", "<section>"],
        answer: 1,
        explanation: "Use <a> for navigation links with href destinations."
      },
      {
        type: "code",
        prompt: "Write 3-5 lines of HTML for a labeled text input with id username.",
        checks: ["<label", "for=\"username\"", "<input", "id=\"username\""],
        sample: "<label for=\"username\">Username</label>\n<input id=\"username\" type=\"text\" />"
      },
      {
        type: "tf",
        prompt: "True or False: CSS classes can be reused on multiple elements.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. Classes are designed for reusable styling."
      },
      {
        type: "output",
        prompt: "Output Prediction: What appears in the browser for <h1>Hello</h1>?",
        options: ["A level-1 heading saying Hello", "Nothing", "A JavaScript alert", "A link"],
        answer: 0,
        explanation: "An h1 element renders a top-level heading with the text Hello."
      },
      {
        type: "debug",
        prompt: "Debug This: Fix the HTML so the link works.",
        starterCode: "<a href=\"/about\">About<a>",
        checks: ["</a>"],
        sample: "<a href=\"/about\">About</a>"
      }
    ],
    medium: [
      {
        type: "vocab",
        prompt: "Which JavaScript method returns only elements that pass a condition?",
        options: ["map", "reduce", "filter", "join"],
        answer: 2,
        explanation: "filter creates a new array of matching elements."
      },
      {
        type: "code",
        prompt: "Write 4-8 lines of JavaScript that gets an input with id search and logs its value on input events.",
        checks: ["querySelector", "#search", "addEventListener", "input", "console.log"],
        sample: "const search = document.querySelector('#search')\nsearch.addEventListener('input', (event) => {\n  console.log(event.target.value)\n})"
      },
      {
        type: "tf",
        prompt: "True or False: const arrays can still be mutated with methods like push.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. const prevents reassignment, not mutation of nested data."
      },
      {
        type: "output",
        prompt: "Output Prediction: What does this print? const n = 3; console.log(n * 2)",
        options: ["3", "6", "32", "undefined"],
        answer: 1,
        explanation: "3 multiplied by 2 is 6."
      },
      {
        type: "debug",
        prompt: "Debug This: Fix the event listener so the click handler runs.",
        starterCode: "const btn = document.querySelector('#saveBtn')\nbtn.addEventListener('click', () => {\n  console.log('saved')\n}",
        checks: [");"],
        sample: "const btn = document.querySelector('#saveBtn')\nbtn.addEventListener('click', () => {\n  console.log('saved')\n});"
      }
    ],
    advanced: [
      {
        type: "vocab",
        prompt: "Which HTTP status range generally indicates successful requests?",
        options: ["100s", "200s", "300s", "500s"],
        answer: 1,
        explanation: "2xx status codes are usually successful responses."
      },
      {
        type: "code",
        prompt: "Write 4-8 lines that use try/catch around fetch('/api/cities') and log errors.",
        checks: ["try", "catch", "fetch", "console.log"],
        sample:
          "async function loadCities() {\n  try {\n    const response = await fetch('/api/cities')\n    console.log(await response.json())\n  } catch (error) {\n    console.log(error)\n  }\n}"
      },
      {
        type: "tf",
        prompt: "True or False: Event delegation can reduce the number of event listeners in large lists.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. One parent listener can handle many child interactions."
      },
      {
        type: "output",
        prompt: "Output Prediction: What logs first? console.log('A'); setTimeout(() => console.log('B'), 0); console.log('C');",
        options: ["B", "A", "C", "A then C then B"],
        answer: 3,
        explanation: "Synchronous logs run first (A then C); the timeout callback runs after (B)."
      },
      {
        type: "debug",
        prompt: "Debug This: Fix the async code so `data` gets parsed JSON.",
        starterCode: "async function load() {\n  const response = await fetch('/api/users')\n  const data = response.json\n  return data\n}",
        checks: ["response.json()"],
        sample: "async function load() {\n  const response = await fetch('/api/users')\n  const data = await response.json()\n  return data\n}"
      }
    ]
  },
  react: {
    beginner: [
      {
        type: "vocab",
        prompt: "What do props represent in React?",
        options: [
          "Mutable global state",
          "Inputs passed into a component",
          "Database tables",
          "Only CSS class names"
        ],
        answer: 1,
        explanation: "Props are component inputs passed from parent to child."
      },
      {
        type: "code",
        prompt: "Write 3-6 lines for a component CityTitle that receives a prop name and renders it in an h2.",
        checks: ["function CityTitle", "name", "return", "<h2"],
        sample: "function CityTitle({ name }) {\n  return <h2>{name}</h2>\n}"
      },
      {
        type: "tf",
        prompt: "True or False: React re-renders when state changes through its setter function.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. Setter calls schedule React updates."
      },
      {
        type: "output",
        prompt: "Output Prediction: What does this render? function App(){ return <p>Hello</p> }",
        options: ["A paragraph with Hello", "Nothing", "A button", "An error"],
        answer: 0,
        explanation: "The component returns a paragraph element containing Hello."
      },
      {
        type: "debug",
        prompt: "Debug This: Fix the component so JSX compiles correctly.",
        starterCode: "function Greeting() {\n  return <h1>Hello</h1\n}",
        checks: ["return <h1>hello</h1>"],
        sample: "function Greeting() {\n  return <h1>Hello</h1>\n}"
      }
    ],
    medium: [
      {
        type: "vocab",
        prompt: "Which hook stores data that persists between renders but does not trigger re-renders when changed directly?",
        options: ["useRef", "useEffect", "useMemo", "useContext"],
        answer: 0,
        explanation: "useRef stores mutable values that survive renders."
      },
      {
        type: "code",
        prompt: "Write 4-8 lines using useState for text and an input that updates text onChange.",
        checks: ["useState", "onChange", "set", "value="],
        sample:
          "const [text, setText] = useState('')\n<input value={text} onChange={(event) => setText(event.target.value)} />"
      },
      {
        type: "tf",
        prompt: "True or False: Effects with an empty dependency array typically run once after initial mount.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. [] generally means run once after first render."
      },
      {
        type: "output",
        prompt: "Output Prediction: If count starts at 0, what shows after one `setCount(count + 1)` call and re-render?",
        options: ["0", "1", "2", "undefined"],
        answer: 1,
        explanation: "The next render reflects the updated state value, which is 1."
      },
      {
        type: "debug",
        prompt: "Debug This: Fix the list render so React gets stable keys.",
        starterCode: "{items.map((item) => (\n  <li>{item.name}</li>\n))}",
        checks: ["key={item.id}"],
        sample: "{items.map((item) => (\n  <li key={item.id}>{item.name}</li>\n))}"
      }
    ],
    advanced: [
      {
        type: "vocab",
        prompt: "What problem does memoization in React mainly try to reduce?",
        options: ["Network latency", "Unnecessary recalculations/renders", "Syntax errors", "Package size"],
        answer: 1,
        explanation: "Memoization avoids repeated expensive work when dependencies are unchanged."
      },
      {
        type: "code",
        prompt: "Write 4-8 lines for a React Context creation and provider value for a theme string.",
        checks: ["createContext", "Provider", "value", "theme"],
        sample:
          "const ThemeContext = createContext('light')\n<ThemeContext.Provider value={theme}>\n  {children}\n</ThemeContext.Provider>"
      },
      {
        type: "tf",
        prompt: "True or False: useCallback returns a memoized function reference based on dependencies.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. useCallback memoizes function identity across renders."
      },
      {
        type: "output",
        prompt: "Output Prediction: What logs if `useEffect(() => console.log('run'), [query])` and `query` changes once?",
        options: ["Nothing", "run once", "run twice", "Syntax error"],
        answer: 1,
        explanation: "The effect runs when query changes, so it logs run once for that change."
      },
      {
        type: "debug",
        prompt: "Debug This: Fix the effect dependencies so stale `query` is not captured.",
        starterCode: "useEffect(() => {\n  fetchResults(query)\n}, [])",
        checks: ["[query]"],
        sample: "useEffect(() => {\n  fetchResults(query)\n}, [query])"
      }
    ]
  },
  python: {
    beginner: [
      {
        type: "vocab",
        prompt: "Which keyword defines a function in Python?",
        options: ["func", "def", "function", "lambda"],
        answer: 1,
        explanation: "Python uses def to define named functions."
      },
      {
        type: "tf",
        prompt: "True or False: Python uses indentation to define code blocks.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. Indentation is syntactically significant in Python."
      },
      {
        type: "code",
        prompt: "Write 2-4 lines of Python that set name = 'Ava' and print 'Hello, Ava'.",
        checks: ["name = 'ava'", "print("],
        sample: "name = 'Ava'\nprint(f'Hello, {name}')"
      },
      {
        type: "output",
        prompt: "Output Prediction: What prints? x = 3\nprint(x * 2)",
        options: ["3", "6", "32", "Error"],
        answer: 1,
        explanation: "3 * 2 evaluates to 6."
      },
      {
        type: "debug",
        prompt: "Debug This: Fix the function syntax.",
        starterCode: "def greet(name)\n    print(name)",
        checks: ["def greet(name):", "print(name)"],
        sample: "def greet(name):\n    print(name)"
      }
    ],
    medium: [
      {
        type: "vocab",
        prompt: "What data structure stores key-value pairs in Python?",
        options: ["List", "Tuple", "Set", "Dictionary"],
        answer: 3,
        explanation: "A dictionary maps keys to values."
      },
      {
        type: "tf",
        prompt: "True or False: List comprehensions create a new list.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. They return a new list expression result."
      },
      {
        type: "code",
        prompt: "Write 3-6 lines to create nums = [1,2,3] and print squares using a list comprehension.",
        checks: ["nums = [1, 2, 3]", "[n * n for n in nums]", "print("],
        sample: "nums = [1, 2, 3]\nsquares = [n * n for n in nums]\nprint(squares)"
      },
      {
        type: "output",
        prompt: "Output Prediction: What prints? values = [1, 2, 3]\nprint(len(values))",
        options: ["2", "3", "[1,2,3]", "Error"],
        answer: 1,
        explanation: "len on a 3-item list returns 3."
      },
      {
        type: "debug",
        prompt: "Debug This: Fix the append usage.",
        starterCode: "items = [1, 2]\nitems.add(3)\nprint(items)",
        checks: ["items.append(3)"],
        sample: "items = [1, 2]\nitems.append(3)\nprint(items)"
      }
    ],
    advanced: [
      {
        type: "vocab",
        prompt: "Which keyword is used to handle exceptions in Python?",
        options: ["catch", "except", "trap", "error"],
        answer: 1,
        explanation: "Python catches exceptions with except."
      },
      {
        type: "tf",
        prompt: "True or False: A generator function uses yield.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. yield produces values lazily."
      },
      {
        type: "code",
        prompt: "Write 4-8 lines defining a function safe_div(a,b) that returns None when b == 0.",
        checks: ["def safe_div(a, b):", "if b == 0", "return none", "return a / b"],
        sample: "def safe_div(a, b):\n    if b == 0:\n        return None\n    return a / b"
      },
      {
        type: "output",
        prompt: "Output Prediction: What prints? print('A' + str(2))",
        options: ["A", "2", "A2", "Error"],
        answer: 2,
        explanation: "The string concatenation outputs A2."
      },
      {
        type: "debug",
        prompt: "Debug This: Fix this exception handling block.",
        starterCode: "try:\n    x = 1 / 0\nexcept ZeroDivisionError\n    print('bad')",
        checks: ["except zerodivisionerror:"],
        sample: "try:\n    x = 1 / 0\nexcept ZeroDivisionError:\n    print('bad')"
      }
    ]
  },
  typescript: {
    beginner: [
      {
        type: "vocab",
        prompt: "What TypeScript type would you use for whole numbers?",
        options: ["int", "number", "float", "numeric"],
        answer: 1,
        explanation: "TypeScript uses number for all numeric values."
      },
      {
        type: "tf",
        prompt: "True or False: TypeScript is a superset of JavaScript.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. TypeScript adds static typing to JavaScript."
      },
      {
        type: "code",
        prompt: "Write 2-4 lines declaring a typed variable title: string with value 'Intro' and log it.",
        checks: ["const title: string = 'intro'", "console.log(title)"],
        sample: "const title: string = 'Intro'\nconsole.log(title)"
      },
      {
        type: "output",
        prompt: "Output Prediction: What logs? const n: number = 5; console.log(n + 1)",
        options: ["5", "6", "51", "Error"],
        answer: 1,
        explanation: "n + 1 evaluates to 6."
      },
      {
        type: "debug",
        prompt: "Debug This: Fix the type annotation.",
        starterCode: "let age: string = 21",
        checks: ["let age: number = 21"],
        sample: "let age: number = 21"
      }
    ],
    medium: [
      {
        type: "vocab",
        prompt: "What does an interface usually define in TypeScript?",
        options: ["Loop control", "Object shape", "Runtime class", "Database schema"],
        answer: 1,
        explanation: "Interfaces define structural contracts for objects."
      },
      {
        type: "tf",
        prompt: "True or False: Optional properties are marked with ? in interfaces.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. Example: name?: string"
      },
      {
        type: "code",
        prompt: "Write 4-8 lines for interface User { id: number; name: string } and a variable user of that type.",
        checks: ["interface user", "id: number", "name: string", "const user: user"],
        sample: "interface User {\n  id: number\n  name: string\n}\nconst user: User = { id: 1, name: 'Ava' }"
      },
      {
        type: "output",
        prompt: "Output Prediction: What logs? const flags: boolean[] = [true, false]; console.log(flags[0])",
        options: ["true", "false", "0", "undefined"],
        answer: 0,
        explanation: "flags[0] is true."
      },
      {
        type: "debug",
        prompt: "Debug This: Fix generic array typing.",
        starterCode: "const names: string = ['A', 'B']",
        checks: ["const names: string[] = ['a', 'b']"],
        sample: "const names: string[] = ['A', 'B']"
      }
    ],
    advanced: [
      {
        type: "vocab",
        prompt: "What utility type makes all properties optional?",
        options: ["Readonly", "Required", "Partial", "Pick"],
        answer: 2,
        explanation: "Partial<T> marks all keys optional."
      },
      {
        type: "tf",
        prompt: "True or False: unknown is safer than any for unchecked values.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. unknown requires narrowing before use."
      },
      {
        type: "code",
        prompt: "Write 4-8 lines defining a generic function wrap<T>(value: T): T[] that returns [value].",
        checks: ["function wrap<t>(value: t): t[]", "return [value]"],
        sample: "function wrap<T>(value: T): T[] {\n  return [value]\n}"
      },
      {
        type: "output",
        prompt: "Output Prediction: What logs? const size: number | string = 'L'; console.log(typeof size)",
        options: ["number", "string", "object", "union"],
        answer: 1,
        explanation: "At runtime size is a string value."
      },
      {
        type: "debug",
        prompt: "Debug This: Fix null handling for strict typing.",
        starterCode: "function shout(text: string | null) {\n  return text.toUpperCase()\n}",
        checks: ["if (!text)", "text.touppercase()"],
        sample: "function shout(text: string | null) {\n  if (!text) return ''\n  return text.toUpperCase()\n}"
      }
    ]
  },
  markdown: {
    beginner: [
      {
        type: "vocab",
        prompt: "In Markdown, what symbol is used for a level-1 heading?",
        options: ["#", "*", "-", "```"],
        answer: 0,
        explanation: "A single # creates a level-1 heading, like `# Title`."
      },
      {
        type: "tf",
        prompt: "True or False: A blank line between paragraphs is important in Markdown for clear paragraph separation.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. Most Markdown renderers use blank lines to separate paragraphs reliably."
      },
      {
        type: "code",
        prompt: "Write 3-6 lines of Markdown with a heading `## Daily Notes` and a bullet list containing `Plan`, `Build`, and `Review`.",
        checks: ["## daily notes", "- plan", "- build", "- review"],
        sample: "## Daily Notes\n- Plan\n- Build\n- Review"
      },
      {
        type: "output",
        prompt: "Output Prediction: Which Markdown creates a clickable link to example.com with text `Visit`?",
        options: ["[Visit](https://example.com)", "(Visit)[https://example.com]", "<Visit:example.com>", "{Visit}(example.com)"],
        answer: 0,
        explanation: "Markdown link syntax is `[text](url)`."
      },
      {
        type: "debug",
        prompt: "Debug This: Fix the heading so it renders as level 2.",
        starterCode: "##Heading without space",
        checks: ["## heading without space"],
        sample: "## Heading without space"
      }
    ],
    medium: [
      {
        type: "vocab",
        prompt: "Which syntax makes text bold in standard Markdown?",
        options: ["**bold**", "//bold//", "__bold", "``bold``"],
        answer: 0,
        explanation: "Double asterisks are the common bold syntax."
      },
      {
        type: "tf",
        prompt: "True or False: Numbered lists in Markdown can start each item with `1.` and most renderers will auto-number correctly.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. Many renderers auto-increment ordered list numbering."
      },
      {
        type: "code",
        prompt: "Write 4-8 lines of Markdown for a table with headers `Language` and `Use`, then one row: `Markdown | Documentation`.",
        checks: ["| language | use |", "| --- | --- |", "| markdown | documentation |"],
        sample: "| Language | Use |\n| --- | --- |\n| Markdown | Documentation |"
      },
      {
        type: "output",
        prompt: "Output Prediction: What does this fenced code block language label do? ```js",
        options: ["Requests JavaScript syntax highlighting", "Executes JavaScript automatically", "Converts code to JSON", "Creates a hyperlink"],
        answer: 0,
        explanation: "The language label usually enables syntax highlighting; it does not execute code."
      },
      {
        type: "debug",
        prompt: "Debug This: Fix the Markdown link syntax.",
        starterCode: "[Read Docs](https//example.com/docs)",
        checks: ["[read docs](https://example.com/docs)"],
        sample: "[Read Docs](https://example.com/docs)"
      }
    ],
    advanced: [
      {
        type: "vocab",
        prompt: "What is front matter in Markdown-based static site systems?",
        options: ["Metadata block at top of file", "A list of required headings", "An image optimization setting", "A CSS reset section"],
        answer: 0,
        explanation: "Front matter stores metadata like title, date, and tags at the top of a file."
      },
      {
        type: "tf",
        prompt: "True or False: Many Markdown renderers allow inline HTML when enabled by configuration.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. Inline HTML support depends on renderer and security settings."
      },
      {
        type: "code",
        prompt: "Write 4-8 lines of Markdown that includes a blockquote and a nested bullet list under it.",
        checks: ["> note", "- item one", "- item two"],
        sample: "> Note\n> - Item one\n> - Item two"
      },
      {
        type: "output",
        prompt: "Output Prediction: Which syntax correctly embeds an image with alt text `Diagram`?",
        options: ["![Diagram](diagram.png)", "[Diagram](diagram.png)", "<img=diagram.png>", "!(Diagram)[diagram.png]"],
        answer: 0,
        explanation: "Markdown images use `![alt](url)`."
      },
      {
        type: "debug",
        prompt: "Debug This: Fix the fenced code block so it closes correctly.",
        starterCode: "```python\nprint('hello')\n``",
        checks: ["```python", "print('hello')", "```"],
        sample: "```python\nprint('hello')\n```"
      }
    ]
  },
  java: {
    beginner: [
      {
        type: "vocab",
        prompt: "Which method is the Java entry point?",
        options: ["run()", "start()", "main()", "boot()"],
        answer: 2,
        explanation: "Java programs start at main()."
      },
      {
        type: "tf",
        prompt: "True or False: Java is case-sensitive.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. myVar and myvar are different identifiers."
      },
      {
        type: "code",
        prompt: "Write 2-4 lines inside main that declares int score = 5 and prints it.",
        checks: ["int score = 5;", "system.out.println(score);"],
        sample: "int score = 5;\nSystem.out.println(score);"
      },
      {
        type: "output",
        prompt: "Output Prediction: What prints? int x = 2; System.out.println(x + 3);",
        options: ["2", "3", "5", "23"],
        answer: 2,
        explanation: "x + 3 evaluates to 5."
      },
      {
        type: "debug",
        prompt: "Debug This: Fix the print statement syntax.",
        starterCode: "System.out.println('Hello');",
        checks: ["system.out.println(\"hello\");"],
        sample: "System.out.println(\"Hello\");"
      }
    ],
    medium: [
      {
        type: "vocab",
        prompt: "What keyword creates an object instance in Java?",
        options: ["make", "new", "create", "class"],
        answer: 1,
        explanation: "new constructs a class instance."
      },
      {
        type: "tf",
        prompt: "True or False: Java methods can be overloaded with different parameters.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. Same name, different parameter list is valid."
      },
      {
        type: "code",
        prompt: "Write 4-8 lines for a class User with fields int id and String name.",
        checks: ["class user", "int id;", "string name;"],
        sample: "class User {\n  int id;\n  String name;\n}"
      },
      {
        type: "output",
        prompt: "Output Prediction: What prints? String s = \"Hi\"; System.out.println(s + \" Java\");",
        options: ["Hi", "Java", "Hi Java", "Error"],
        answer: 2,
        explanation: "String concatenation produces Hi Java."
      },
      {
        type: "debug",
        prompt: "Debug This: Fix ArrayList declaration typing.",
        starterCode: "ArrayList<int> nums = new ArrayList<>();",
        checks: ["arraylist<integer> nums = new arraylist<>();"],
        sample: "ArrayList<Integer> nums = new ArrayList<>();"
      }
    ],
    advanced: [
      {
        type: "vocab",
        prompt: "Which keyword is used for inheritance in Java?",
        options: ["implements", "inherits", "extends", "super"],
        answer: 2,
        explanation: "A class extends another class via extends."
      },
      {
        type: "tf",
        prompt: "True or False: Interfaces can define default methods.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. Java interfaces can include default methods."
      },
      {
        type: "code",
        prompt: "Write 4-8 lines for method int add(int a, int b) returning their sum.",
        checks: ["int add(int a, int b)", "return a + b;"],
        sample: "int add(int a, int b) {\n  return a + b;\n}"
      },
      {
        type: "output",
        prompt: "Output Prediction: What prints? int[] nums = {1,2,3}; System.out.println(nums.length);",
        options: ["2", "3", "{1,2,3}", "Error"],
        answer: 1,
        explanation: "Array length is 3."
      },
      {
        type: "debug",
        prompt: "Debug This: Fix try/catch syntax.",
        starterCode: "try {\n  int x = 1 / 0;\n} catch Exception e {\n  System.out.println(e);\n}",
        checks: ["catch (exception e)"],
        sample: "try {\n  int x = 1 / 0;\n} catch (Exception e) {\n  System.out.println(e);\n}"
      }
    ]
  },
  csharp: {
    beginner: [
      {
        type: "vocab",
        prompt: "What keyword declares a variable in C# with inferred type?",
        options: ["auto", "var", "let", "dynamic"],
        answer: 1,
        explanation: "var infers type at compile time from assigned value."
      },
      {
        type: "tf",
        prompt: "True or False: C# statements usually end with semicolons.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. Most C# statements use semicolons."
      },
      {
        type: "code",
        prompt: "Write 2-4 lines declaring string name = \"Mia\" and print it with Console.WriteLine.",
        checks: ["string name = \"mia\";", "console.writeline(name);"],
        sample: "string name = \"Mia\";\nConsole.WriteLine(name);"
      },
      {
        type: "output",
        prompt: "Output Prediction: What prints? int n = 4; Console.WriteLine(n - 1);",
        options: ["3", "4", "5", "Error"],
        answer: 0,
        explanation: "4 - 1 equals 3."
      },
      {
        type: "debug",
        prompt: "Debug This: Fix property declaration syntax.",
        starterCode: "public string Name { get set; }",
        checks: ["public string name { get; set; }"],
        sample: "public string Name { get; set; }"
      }
    ],
    medium: [
      {
        type: "vocab",
        prompt: "Which keyword makes a member accessible without creating an instance?",
        options: ["public", "virtual", "static", "sealed"],
        answer: 2,
        explanation: "static members belong to the type itself."
      },
      {
        type: "tf",
        prompt: "True or False: C# supports string interpolation with $\"...\".",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. Interpolation inserts values with {expr}."
      },
      {
        type: "code",
        prompt: "Write 4-8 lines for a class User with int Id and string Name properties.",
        checks: ["class user", "public int id", "public string name"],
        sample: "class User {\n  public int Id { get; set; }\n  public string Name { get; set; }\n}"
      },
      {
        type: "output",
        prompt: "Output Prediction: What prints? var nums = new List<int> {1,2}; Console.WriteLine(nums.Count);",
        options: ["1", "2", "3", "Error"],
        answer: 1,
        explanation: "List has two elements so Count is 2."
      },
      {
        type: "debug",
        prompt: "Debug This: Fix nullable check before property access.",
        starterCode: "string? name = null;\nConsole.WriteLine(name.Length);",
        checks: ["if (name != null)", "name.length"],
        sample: "string? name = null;\nif (name != null) {\n  Console.WriteLine(name.Length);\n}"
      }
    ],
    advanced: [
      {
        type: "vocab",
        prompt: "What C# keyword marks a method as asynchronous?",
        options: ["await", "task", "async", "thread"],
        answer: 2,
        explanation: "Methods are marked async and await asynchronous calls."
      },
      {
        type: "tf",
        prompt: "True or False: LINQ Select projects each element into a new form.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. Select transforms each sequence element."
      },
      {
        type: "code",
        prompt: "Write 4-8 lines for async Task<string> GreetAsync(string name) returning $\"Hello {name}\".",
        checks: ["async task<string> greetasync(string name)", "return $\"hello {name}\";"],
        sample: "async Task<string> GreetAsync(string name) {\n  return $\"Hello {name}\";\n}"
      },
      {
        type: "output",
        prompt: "Output Prediction: What prints? var x = 10; Console.WriteLine(x > 5 ? \"yes\" : \"no\");",
        options: ["yes", "no", "10", "Error"],
        answer: 0,
        explanation: "x is greater than 5, so yes prints."
      },
      {
        type: "debug",
        prompt: "Debug This: Fix using directive for List<T>.",
        starterCode: "var nums = new List<int>();",
        checks: ["using system.collections.generic;"],
        sample: "using System.Collections.Generic;\nvar nums = new List<int>();"
      }
    ]
  },
  sql: {
    beginner: [
      {
        type: "vocab",
        prompt: "Which SQL command reads data from a table?",
        options: ["INSERT", "UPDATE", "SELECT", "DELETE"],
        answer: 2,
        explanation: "SELECT retrieves rows from tables."
      },
      {
        type: "tf",
        prompt: "True or False: WHERE filters rows before they are returned.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. WHERE applies row-level filtering conditions."
      },
      {
        type: "code",
        prompt: "Write a query selecting all columns from users.",
        checks: ["select *", "from users"],
        sample: "SELECT *\nFROM users;"
      },
      {
        type: "output",
        prompt: "Output Prediction: If users has 3 rows, what does SELECT COUNT(*) FROM users return?",
        options: ["1", "2", "3", "users"],
        answer: 2,
        explanation: "COUNT(*) returns the row count, which is 3."
      },
      {
        type: "debug",
        prompt: "Debug This: Fix clause order.",
        starterCode: "FROM users SELECT name;",
        checks: ["select name", "from users"],
        sample: "SELECT name\nFROM users;"
      }
    ],
    medium: [
      {
        type: "vocab",
        prompt: "Which clause groups rows for aggregate calculations?",
        options: ["ORDER BY", "GROUP BY", "WHERE", "LIMIT"],
        answer: 1,
        explanation: "GROUP BY creates groups used by aggregate functions."
      },
      {
        type: "tf",
        prompt: "True or False: ORDER BY defaults to ascending order.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. ASC is the default sort direction."
      },
      {
        type: "code",
        prompt: "Write a query selecting city and COUNT(*) from users grouped by city.",
        checks: ["select city", "count(*)", "from users", "group by city"],
        sample: "SELECT city, COUNT(*)\nFROM users\nGROUP BY city;"
      },
      {
        type: "output",
        prompt: "Output Prediction: Which runs first, WHERE or ORDER BY?",
        options: ["ORDER BY", "WHERE", "Both same time", "Neither"],
        answer: 1,
        explanation: "WHERE filtering happens before final ordering."
      },
      {
        type: "debug",
        prompt: "Debug This: Fix aggregate filter clause.",
        starterCode: "SELECT city, COUNT(*) FROM users WHERE COUNT(*) > 1 GROUP BY city;",
        checks: ["group by city", "having count(*) > 1"],
        sample: "SELECT city, COUNT(*)\nFROM users\nGROUP BY city\nHAVING COUNT(*) > 1;"
      }
    ],
    advanced: [
      {
        type: "vocab",
        prompt: "Which join returns matching rows from both tables only?",
        options: ["LEFT JOIN", "RIGHT JOIN", "INNER JOIN", "FULL JOIN"],
        answer: 2,
        explanation: "INNER JOIN returns rows where join condition matches on both sides."
      },
      {
        type: "tf",
        prompt: "True or False: HAVING filters grouped results after GROUP BY.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. HAVING applies after aggregation."
      },
      {
        type: "code",
        prompt: "Write a query joining orders o and users u on user_id to select order id and user name.",
        checks: ["from orders o", "join users u", "on o.user_id = u.id", "select o.id", "u.name"],
        sample: "SELECT o.id, u.name\nFROM orders o\nJOIN users u ON o.user_id = u.id;"
      },
      {
        type: "output",
        prompt: "Output Prediction: If a LEFT JOIN has no match on the right table, what appears for right-table columns?",
        options: ["0", "Empty string", "NULL", "The previous row"],
        answer: 2,
        explanation: "Unmatched right-side fields are NULL in LEFT JOIN results."
      },
      {
        type: "debug",
        prompt: "Debug This: Fix ambiguous column reference with aliases.",
        starterCode: "SELECT id, name FROM users u JOIN orders o ON id = user_id;",
        checks: ["select u.id, u.name", "on u.id = o.user_id"],
        sample: "SELECT u.id, u.name\nFROM users u\nJOIN orders o ON u.id = o.user_id;"
      }
    ]
  },
  sourcecontrol: {
    beginner: [
      {
        type: "vocab",
        prompt: "What does `git clone` do?",
        options: ["Creates a commit", "Copies a repository to your machine", "Deletes a branch", "Publishes to production"],
        answer: 1,
        explanation: "`git clone` creates a local copy of a remote repository."
      },
      {
        type: "tf",
        prompt: "True or False: `git add` moves changes into the staging area.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. `git add` stages tracked or new file changes."
      },
      {
        type: "blank",
        prompt: "Fill in the blank: The Git command used to see current staged and unstaged changes is `git ____`.",
        acceptableAnswers: ["status"],
        sample: "status",
        explanation: "`git status` is the default command to inspect current repository state."
      },
      {
        type: "output",
        prompt: "Output Prediction: Which command pair correctly stages all files and creates a commit named initial setup?",
        options: [
          "git add . && git commit -m \"initial setup\"",
          "git status && git branch initial setup",
          "git merge initial setup && git push",
          "git pull && git clone"
        ],
        answer: 0,
        explanation: "`git add .` stages all changes and `git commit -m` creates the commit snapshot."
      },
      {
        type: "output",
        prompt: "Output Prediction: What branch is typically created by default in modern Git hosting?",
        options: ["develop", "master", "main", "release"],
        answer: 2,
        explanation: "Most modern repos default to `main`."
      },
      {
        type: "blank",
        prompt: "Fill in the blank: To push branch `main` to remote `origin`, use `git push ____ ____`.",
        acceptableAnswers: ["origin main"],
        sample: "origin main",
        explanation: "The command format is `git push <remote> <branch>`, so this becomes `git push origin main`."
      },
      {
        type: "vocab",
        prompt: "In Git, what is a commit?",
        options: ["A hosted repository website", "A saved snapshot of staged changes", "A temporary local cache", "A deleted file record"],
        answer: 1,
        explanation: "A commit records staged changes as a snapshot with a message."
      },
      {
        type: "output",
        prompt: "Output Prediction: Which workflow order is best for a normal feature update?",
        options: ["commit → branch → edit → push", "pull latest → create branch → edit/test → add/commit → push → PR → merge", "push → edit → pull → commit", "merge main first, then write code directly on main"],
        answer: 1,
        explanation: "This sequence keeps work isolated, reviewable, and synchronized with the team."
      }
    ],
    medium: [
      {
        type: "vocab",
        prompt: "What is the main purpose of a pull request (PR)?",
        options: ["Delete code", "Review and discuss changes before merging", "Rename files", "Run local tests"],
        answer: 1,
        explanation: "PRs enable collaboration, review, and quality checks before merge."
      },
      {
        type: "tf",
        prompt: "True or False: Rebase rewrites commit history in your branch.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. Rebase creates a linear history by replaying commits."
      },
      {
        type: "blank",
        prompt: "Fill in the blank: The command to create and switch to branch `feature/login` is `git checkout -b ____`.",
        acceptableAnswers: ["feature/login"],
        sample: "feature/login",
        explanation: "Adding the branch name after `git checkout -b` both creates and switches to it."
      },
      {
        type: "output",
        prompt: "Output Prediction: Which command shows which files are staged vs unstaged?",
        options: ["git log", "git status", "git diff --name-only", "git branch"],
        answer: 1,
        explanation: "`git status` is the standard command for current repo state."
      },
      {
        type: "output",
        prompt: "Output Prediction: Which command is used to replace the most recent commit message with a clearer one?",
        options: [
          "git commit --amend -m \"Clear message\"",
          "git reset --hard --message \"Clear message\"",
          "git status --rename-message",
          "git pull --rewrite"
        ],
        answer: 0,
        explanation: "`git commit --amend -m` updates the most recent commit message."
      },
      {
        type: "vocab",
        prompt: "What is the key difference between `git fetch` and `git pull`?",
        options: ["No difference at all", "fetch downloads changes; pull downloads and merges/rebases into current branch", "pull only updates tags", "fetch deletes remote branches"],
        answer: 1,
        explanation: "`fetch` updates remote-tracking refs only, while `pull` also integrates changes into your branch."
      },
      {
        type: "tf",
        prompt: "True or False: You should usually commit directly on `main` for team feature work.",
        options: ["True", "False"],
        answer: 1,
        explanation: "False. Teams usually use feature branches and PR review before merging into main."
      }
    ],
    advanced: [
      {
        type: "vocab",
        prompt: "Which strategy preserves full branch history when combining branches?",
        options: ["Squash merge", "Fast-forward only", "Merge commit", "Cherry-pick"],
        answer: 2,
        explanation: "A merge commit keeps branch structure and history intact."
      },
      {
        type: "tf",
        prompt: "True or False: Force push should be used carefully because it can rewrite shared history.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. Force-pushing can overwrite remote commits and affect teammates."
      },
      {
        type: "blank",
        prompt: "Fill in the blank: To inspect a compact commit graph with branch pointers, use `git log ____ ____ ____`.",
        acceptableAnswers: ["--oneline --graph --decorate"],
        sample: "--oneline --graph --decorate",
        explanation: "These three flags produce a compact graph view with useful branch/HEAD decorations."
      },
      {
        type: "output",
        prompt: "Output Prediction: Which command is best to apply one specific commit from another branch?",
        options: ["git merge", "git cherry-pick", "git pull", "git reset --hard"],
        answer: 1,
        explanation: "`git cherry-pick` applies selected commit(s) onto your current branch."
      },
      {
        type: "output",
        prompt: "Output Prediction: After resolving merge conflicts in files, what should happen before finishing the merge commit?",
        options: [
          "Run git add on resolved files, then commit",
          "Delete .git folder and restart",
          "Run git clone again",
          "Force push immediately without staging"
        ],
        answer: 0,
        explanation: "Resolved files must be staged first so Git knows conflicts were fixed before the merge commit."
      },
      {
        type: "vocab",
        prompt: "What does `origin` usually represent in Git commands like `git push origin main`?",
        options: ["The first commit hash", "Your default remote repository", "The root folder on disk", "A merge strategy"],
        answer: 1,
        explanation: "`origin` is the conventional name for the remote repository you cloned from."
      },
      {
        type: "output",
        prompt: "Output Prediction: Which workflow is safest before opening a PR from a feature branch?",
        options: [
          "Fetch latest, update main, return to feature branch, merge main into feature",
          "Force push feature branch repeatedly without syncing",
          "Delete feature branch and commit on main",
          "Open PR first and sync afterward only if it fails"
        ],
        answer: 0,
        explanation: "Syncing feature work with latest main before PR reduces merge surprises and review churn."
      }
    ]
  },
  ides: {
    beginner: [
      {
        type: "vocab",
        prompt: "What does IDE stand for?",
        options: ["Integrated Development Environment", "Internal Design Engine", "Interactive Deployment Engine", "Indexed Debug Editor"],
        answer: 0,
        explanation: "IDE means Integrated Development Environment."
      },
      {
        type: "tf",
        prompt: "True or False: Xcode is the primary IDE for building Swift iOS apps.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. Xcode is Apple's official IDE for Swift iOS/macOS development."
      },
      {
        type: "blank",
        prompt: "Fill in the blank: The JetBrains IDE focused on Python development is ____.",
        acceptableAnswers: ["pycharm"],
        sample: "PyCharm",
        explanation: "PyCharm is a Python-first IDE with strong refactoring and debugging support."
      },
      {
        type: "vocab",
        prompt: "Which IDE is primarily focused on Python development?",
        options: ["Android Studio", "PyCharm", "Xcode", "SQL Server Management Studio"],
        answer: 1,
        explanation: "PyCharm is a Python-first IDE from JetBrains."
      },
      {
        type: "output",
        prompt: "Output Prediction: Which option best describes a key IDE benefit over a plain text editor?",
        options: ["No project support", "Built-in debugging and code intelligence", "Cannot run code", "No plugin ecosystem"],
        answer: 1,
        explanation: "IDEs provide integrated debugging, autocomplete, and language tooling."
      },
      {
        type: "output",
        prompt: "Output Prediction: Which statement about VS Code language support is accurate?",
        options: [
          "It supports many languages through extensions",
          "It only supports JavaScript",
          "It cannot run debuggers",
          "It has no plugin ecosystem"
        ],
        answer: 0,
        explanation: "VS Code's extension ecosystem enables support for many languages and workflows."
      }
    ],
    medium: [
      {
        type: "vocab",
        prompt: "Which IDE is most commonly used for Java and Kotlin in enterprise and Android-adjacent workflows?",
        options: ["IntelliJ IDEA", "Notepad", "Xcode", "Figma"],
        answer: 0,
        explanation: "IntelliJ IDEA is widely used for Java/Kotlin development."
      },
      {
        type: "tf",
        prompt: "True or False: Breakpoints are used to pause execution and inspect program state while debugging.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. Breakpoints help inspect variables and flow at runtime."
      },
      {
        type: "blank",
        prompt: "Fill in the blank: A good IDE selection workflow checks language + platform fit, debugger quality, extension ecosystem, and team ____.",
        acceptableAnswers: ["standards", "team standards"],
        sample: "standards",
        explanation: "Team standards ensure tooling consistency across formatting, linting, and debugging workflow."
      },
      {
        type: "output",
        prompt: "Output Prediction: You need to build an Android app with Kotlin. Which IDE is the best default choice?",
        options: ["Android Studio", "Xcode", "PyCharm", "SSMS"],
        answer: 0,
        explanation: "Android Studio is the default IDE for Kotlin/Java Android development."
      },
      {
        type: "output",
        prompt: "Output Prediction: Which workflow includes proper IDE debugging before commit?",
        options: [
          "Write code → run locally → set breakpoint → debug variables → commit",
          "Write code → push immediately → debug in production",
          "Write code → skip run/debug → commit",
          "Only lint, never run or debug"
        ],
        answer: 0,
        explanation: "A reliable workflow validates behavior locally and uses breakpoints before committing."
      }
    ],
    advanced: [
      {
        type: "vocab",
        prompt: "What is a Language Server in modern IDE/editor tooling?",
        options: ["A web server for deployment", "A protocol-powered service that provides autocomplete, diagnostics, and navigation", "A backup database", "A build artifact"],
        answer: 1,
        explanation: "Language servers power smart editor features like completion and diagnostics."
      },
      {
        type: "tf",
        prompt: "True or False: Standardizing formatter/linter settings across IDEs reduces merge friction on teams.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. Consistent formatting and lint rules reduce noisy diffs and review overhead."
      },
      {
        type: "blank",
        prompt: "Fill in the blank: A team IDE onboarding should include required extensions, formatter/linter setup, launch config, and successful ____ run.",
        acceptableAnswers: ["test", "tests"],
        sample: "test",
        explanation: "Verifying tests run in the configured IDE confirms onboarding was completed correctly."
      },
      {
        type: "output",
        prompt: "Output Prediction: For a large .NET backend with C#, which IDE is commonly selected for deep platform integration?",
        options: ["Visual Studio", "Xcode", "PyCharm", "Android Studio"],
        answer: 0,
        explanation: "Visual Studio is a common choice for deep C#/.NET tooling integration."
      },
      {
        type: "output",
        prompt: "Output Prediction: Which teammate guidance improves IDE consistency across a team?",
        options: [
          "Use a shared formatter and lint configuration",
          "Everyone chooses random local formatting rules",
          "Disable linting for faster commits",
          "Ignore debug setup differences"
        ],
        answer: 0,
        explanation: "Shared formatter and lint settings prevent noisy diffs and reduce team friction."
      }
    ]
  },
  kotlin: {
    beginner: [
      {
        type: "vocab",
        prompt: "In Kotlin, which keyword is preferred for read-only values?",
        options: ["var", "let", "val", "const"],
        answer: 2,
        explanation: "`val` is read-only after initialization."
      },
      {
        type: "tf",
        prompt: "True or False: Kotlin has built-in null safety with nullable types like String?.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. Nullable types are explicit in Kotlin type system."
      },
      {
        type: "code",
        prompt: "Write 3-6 lines of Kotlin that declares `name` as a read-only String and prints `Hello, <name>`.",
        checks: ["val name", "string", "println", "hello,"],
        sample: "val name: String = \"Taylor\"\nprintln(\"Hello, $name\")"
      },
      {
        type: "vocab",
        prompt: "Which operator safely calls a property or function on a nullable value?",
        options: ["!!", "?.", "::", "->"],
        answer: 1,
        explanation: "The safe-call operator `?.` prevents null pointer crashes."
      },
      {
        type: "output",
        prompt: "Output Prediction: What prints? val n: String? = null; println(n ?: \"Guest\")",
        options: ["null", "Guest", "n", "Error"],
        answer: 1,
        explanation: "Elvis operator (`?:`) uses fallback value when left side is null."
      }
    ],
    medium: [
      {
        type: "vocab",
        prompt: "What is a Kotlin `data class` primarily used for?",
        options: ["Rendering UI", "Representing immutable-ish model data with generated utility methods", "Managing threads", "Database migrations"],
        answer: 1,
        explanation: "Data classes generate useful methods like `copy`, `toString`, and equality."
      },
      {
        type: "tf",
        prompt: "True or False: `when` in Kotlin can be used as an expression that returns a value.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. `when` can directly evaluate to a result."
      },
      {
        type: "code",
        prompt: "Write 4-8 lines defining a Kotlin data class `User` with `id: Int` and `name: String`.",
        checks: ["data class user", "val id: int", "val name: string"],
        sample: "data class User(\n  val id: Int,\n  val name: String\n)"
      },
      {
        type: "output",
        prompt: "Output Prediction: What does this print? val nums = listOf(1,2,3); println(nums.map { it * 2 })",
        options: ["[1, 2, 3]", "[2, 4, 6]", "6", "Error"],
        answer: 1,
        explanation: "`map` transforms each element, doubling all values."
      },
      {
        type: "debug",
        prompt: "Debug This: Fix nullable access so it does not crash.",
        starterCode: "val name: String? = null\nprintln(name.length)",
        checks: ["name?.length", "?:"],
        sample: "val name: String? = null\nprintln(name?.length ?: 0)"
      }
    ],
    advanced: [
      {
        type: "vocab",
        prompt: "In Kotlin coroutines, what does `suspend` indicate?",
        options: ["Function always runs on main thread", "Function can be paused and resumed without blocking a thread", "Function is deprecated", "Function returns only Unit"],
        answer: 1,
        explanation: "`suspend` marks functions that can suspend within coroutine contexts."
      },
      {
        type: "tf",
        prompt: "True or False: Sealed classes are useful for modeling finite UI states like Loading/Success/Error.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. Sealed hierarchies make exhaustive state handling easier."
      },
      {
        type: "code",
        prompt: "Write 5-9 lines for a sealed class `UiState` with `Loading`, `Success(val message: String)`, and `Error(val reason: String)`.",
        checks: ["sealed class uistate", "object loading", "data class success", "data class error"],
        sample: "sealed class UiState {\n  object Loading : UiState()\n  data class Success(val message: String) : UiState()\n  data class Error(val reason: String) : UiState()\n}"
      },
      {
        type: "output",
        prompt: "Output Prediction: What prints? val items = listOf(\"a\",\"b\"); println(items.joinToString(\"-\"))",
        options: ["ab", "a-b", "[a, b]", "Error"],
        answer: 1,
        explanation: "`joinToString("-")` concatenates list items with hyphen separator."
      },
      {
        type: "debug",
        prompt: "Debug This: Fix this coroutine call placement.",
        starterCode: "fun load() {\n  delay(200)\n}",
        checks: ["suspend fun load", "delay(200)"],
        sample: "suspend fun load() {\n  delay(200)\n}"
      }
    ]
  },
  go: {
    beginner: [
      {
        type: "vocab",
        prompt: "In Go, which keyword declares a variable with inferred type?",
        options: ["var", "let", ":=", "const"],
        answer: 2,
        explanation: "`:=` declares and initializes a variable with inferred type in local scope."
      },
      {
        type: "tf",
        prompt: "True or False: Go source files in the same folder usually share one package name.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. Files in a directory are typically part of the same package."
      },
      {
        type: "code",
        prompt: "Write 3-6 lines of Go that declares `name := \"Sam\"` and prints it.",
        checks: [":= \"sam\"", "fmt.println"],
        sample: "package main\nimport \"fmt\"\nfunc main() {\n  name := \"Sam\"\n  fmt.Println(name)\n}"
      }
    ],
    medium: [
      {
        type: "vocab",
        prompt: "Which Go keyword starts a concurrent function execution?",
        options: ["async", "task", "go", "thread"],
        answer: 2,
        explanation: "The `go` keyword launches a goroutine."
      },
      {
        type: "output",
        prompt: "Output Prediction: What prints? nums := []int{1,2,3}; fmt.Println(len(nums))",
        options: ["2", "3", "[1 2 3]", "Error"],
        answer: 1,
        explanation: "len returns the number of elements in the slice, which is 3."
      }
    ],
    advanced: [
      {
        type: "debug",
        prompt: "Debug This: Fix this Go map declaration.",
        starterCode: "scores := map[string]int[]",
        checks: ["map[string]int{}"],
        sample: "scores := map[string]int{}"
      },
      {
        type: "blank",
        prompt: "Fill in the blank: Go interfaces are satisfied ____ by matching method sets.",
        acceptableAnswers: ["implicitly"],
        sample: "implicitly"
      }
    ]
  },
  rust: {
    beginner: [
      {
        type: "vocab",
        prompt: "In Rust, which keyword declares an immutable variable binding by default?",
        options: ["let", "var", "const", "bind"],
        answer: 0,
        explanation: "Rust uses `let` for bindings; bindings are immutable unless marked `mut`."
      },
      {
        type: "tf",
        prompt: "True or False: Rust ownership rules are checked at compile time.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. Ownership and borrowing are enforced by the compiler."
      }
    ],
    medium: [
      {
        type: "code",
        prompt: "Write 3-6 lines of Rust that declares a mutable counter and increments it by 1.",
        checks: ["let mut", "counter", "+= 1"],
        sample: "fn main() {\n  let mut counter = 0;\n  counter += 1;\n  println!(\"{}\", counter);\n}"
      },
      {
        type: "output",
        prompt: "Output Prediction: What does `println!(\"{}\", 2 + 3);` print?",
        options: ["23", "5", "2 + 3", "Error"],
        answer: 1,
        explanation: "It evaluates the expression and prints 5."
      }
    ],
    advanced: [
      {
        type: "debug",
        prompt: "Debug This: Fix missing mutability for push.",
        starterCode: "let nums = vec![1,2];\nnums.push(3);",
        checks: ["let mut nums"],
        sample: "let mut nums = vec![1, 2];\nnums.push(3);"
      }
    ]
  },
  cpp: {
    beginner: [
      {
        type: "vocab",
        prompt: "Which stream is commonly used for console output in C++?",
        options: ["cin", "cout", "print", "stdoutln"],
        answer: 1,
        explanation: "`std::cout` writes output to the standard output stream."
      },
      {
        type: "tf",
        prompt: "True or False: C++ statements usually end with a semicolon.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. Most C++ statements require a trailing semicolon."
      }
    ],
    medium: [
      {
        type: "code",
        prompt: "Write 3-7 lines of C++ that declares `int count = 0;` then increments and prints count.",
        checks: ["int count = 0", "count++", "cout"],
        sample: "#include <iostream>\nint main() {\n  int count = 0;\n  count++;\n  std::cout << count;\n}"
      }
    ],
    advanced: [
      {
        type: "debug",
        prompt: "Debug This: Fix namespace usage for cout.",
        starterCode: "cout << \"Hello\";",
        checks: ["std::cout"],
        sample: "std::cout << \"Hello\";"
      }
    ]
  },
  php: {
    beginner: [
      {
        type: "vocab",
        prompt: "In PHP, which symbol prefixes variable names?",
        options: ["#", "$", "@", "%"],
        answer: 1,
        explanation: "PHP variable names start with `$`."
      },
      {
        type: "tf",
        prompt: "True or False: PHP code is commonly embedded between `<?php` and `?>` tags.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. PHP tags delimit server-side script blocks."
      }
    ],
    medium: [
      {
        type: "code",
        prompt: "Write 2-5 lines of PHP that sets `$name = \"Sam\"` and echoes it.",
        checks: ["$name = \"sam\"", "echo"],
        sample: "<?php\n$name = \"Sam\";\necho $name;"
      }
    ],
    advanced: [
      {
        type: "output",
        prompt: "Output Prediction: What does `echo 2 + 3;` print in PHP?",
        options: ["23", "5", "2 + 3", "Error"],
        answer: 1,
        explanation: "PHP evaluates the numeric expression and prints 5."
      }
    ]
  },
  dart: {
    beginner: [
      {
        type: "vocab",
        prompt: "Which Dart keyword is used for compile-time constants?",
        options: ["let", "var", "const", "finale"],
        answer: 2,
        explanation: "`const` creates compile-time constants in Dart."
      },
      {
        type: "tf",
        prompt: "True or False: Flutter UIs are built from widgets.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. Flutter composes UIs from widget trees."
      }
    ],
    medium: [
      {
        type: "code",
        prompt: "Write 4-8 lines of Dart/Flutter with a `Text('Hello')` inside a `Center` widget.",
        checks: ["center(", "text('hello')"],
        sample: "Widget build(BuildContext context) {\n  return const Center(\n    child: Text('Hello'),\n  );\n}"
      }
    ],
    advanced: [
      {
        type: "debug",
        prompt: "Debug This: Fix setState usage in Flutter callback.",
        starterCode: "onPressed: () {\n  count + 1;\n}",
        checks: ["setstate", "count += 1"],
        sample: "onPressed: () {\n  setState(() {\n    count += 1;\n  });\n}"
      }
    ]
  },
  bash: {
    beginner: [
      {
        type: "vocab",
        prompt: "What does `pwd` output in Bash?",
        options: ["Current file name", "Current working directory", "Parent process id", "Disk usage"],
        answer: 1,
        explanation: "`pwd` prints the current working directory path."
      },
      {
        type: "tf",
        prompt: "True or False: `ls` lists files and folders in the current directory.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. `ls` shows directory contents."
      }
    ],
    medium: [
      {
        type: "code",
        prompt: "Write 2-5 lines of Bash that stores a name variable and echoes `Hello <name>`.",
        checks: ["name=", "echo \"hello $name\""],
        sample: "name=\"Sam\"\necho \"Hello $name\""
      }
    ],
    advanced: [
      {
        type: "debug",
        prompt: "Debug This: Fix Bash if condition spacing.",
        starterCode: "if[ -f app.js ]; then\n  echo \"found\"\nfi",
        checks: ["if [ -f app.js ]"],
        sample: "if [ -f app.js ]; then\n  echo \"found\"\nfi"
      }
    ]
  }
};

Object.entries(extraQuestionSets).forEach(([topic, levels]) => {
  Object.entries(levels).forEach(([level, questions]) => {
    questionSets[topic][level].push(...questions);
  });
});

function injectSwiftModuleSpecificQuestions() {
  const swiftSet = questionSets.swift;
  if (!swiftSet) {
    return;
  }

  const moduleSpecific = [
    {
      level: "beginner",
      moduleUnit: "1",
      question: {
        type: "code",
        prompt: "SwiftUI Module 1 (Swift Core Syntax): Write 2-4 lines declaring `course` as a String constant set to \"SwiftUI\" and print it.",
        checks: ["let course: string", "\"swiftui\"", "print("],
        sample: "let course: String = \"SwiftUI\"\nprint(course)"
      }
    },
    {
      level: "beginner",
      moduleUnit: "2",
      question: {
        type: "code",
        prompt: "SwiftUI Module 2 (Optionals and Types): Write 3-6 lines that unwrap `nickname: String?` with `if let` and print it.",
        checks: ["let nickname: string?", "if let", "print("],
        sample: "let nickname: String? = \"Tay\"\nif let value = nickname {\n  print(value)\n}"
      }
    },
    {
      level: "beginner",
      moduleUnit: "3",
      question: {
        type: "tf",
        prompt: "SwiftUI Module 3 (State and Data Flow): True or False: `@Binding` allows a child view to update parent-owned state.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. `@Binding` creates a two-way reference to parent state."
      }
    },
    {
      level: "beginner",
      moduleUnit: "4",
      question: {
        type: "vocab",
        prompt: "SwiftUI Module 4 (SwiftUI View Composition): Which layout container stacks views vertically?",
        options: ["HStack", "ZStack", "VStack", "List"],
        answer: 2,
        explanation: "`VStack` arranges child views vertically."
      }
    },
    {
      level: "medium",
      moduleUnit: "5",
      question: {
        type: "debug",
        prompt: "SwiftUI Module 5 (Debugging Swift Basics): Fix this code so it increments score.",
        starterCode: "let score = 0\nscore += 1",
        checks: ["var score = 0", "score += 1"],
        sample: "var score = 0\nscore += 1"
      }
    },
    {
      level: "medium",
      moduleUnit: "6",
      question: {
        type: "debug",
        prompt: "SwiftUI Module 6 (Debugging SwiftUI State): Fix the button action so it updates count.",
        starterCode: "@State private var count = 0\nButton(\"Add\") {\n  count + 1\n}",
        checks: ["count += 1"],
        sample: "@State private var count = 0\nButton(\"Add\") {\n  count += 1\n}"
      }
    },
    {
      level: "medium",
      moduleUnit: "7",
      question: {
        type: "debug",
        prompt: "SwiftUI Module 7 (Debug Review and Fixes): Fix the computed property so it compiles.",
        starterCode: "var title: String {\n  return \"Ready\"",
        checks: ["var title: string {", "return \"ready\"", "}"],
        sample: "var title: String {\n  return \"Ready\"\n}"
      }
    },
    {
      level: "medium",
      moduleUnit: "8",
      question: {
        type: "output",
        prompt: "SwiftUI Module 8 (Output Tracing in Swift): What is printed? `let x = 3; let y = x * 2; print(y)`",
        options: ["3", "5", "6", "x"],
        answer: 2,
        explanation: "`y` evaluates to 6."
      }
    },
    {
      level: "medium",
      moduleUnit: "9",
      question: {
        type: "output",
        prompt: "SwiftUI Module 9 (Output Tracing in SwiftUI): If `isOn` is true, what does `Text(isOn ? \"On\" : \"Off\")` display?",
        options: ["Off", "On", "true", "Nothing"],
        answer: 1,
        explanation: "The ternary true branch displays \"On\"."
      }
    },
    {
      level: "medium",
      moduleUnit: "10",
      question: {
        type: "vocab",
        prompt: "SwiftUI Module 10 (Swift + SwiftUI Mastery): Which approach best fits SwiftUI architecture?",
        options: ["Manual UI mutation everywhere", "Derive UI from state", "Use global mutable singletons for all state", "Avoid type checks"],
        answer: 1,
        explanation: "SwiftUI is declarative: UI should derive from state."
      }
    },
    {
      level: "advanced",
      moduleUnit: "11",
      question: {
        type: "vocab",
        prompt: "SwiftUI Module 11 (Swift Testing Fundamentals): Which framework is commonly used for unit tests in Swift?",
        options: ["XCTest", "UIKit", "Combine", "SwiftUI"],
        answer: 0,
        explanation: "XCTest is the standard Swift testing framework."
      }
    },
    {
      level: "advanced",
      moduleUnit: "12",
      question: {
        type: "tf",
        prompt: "SwiftUI Module 12 (Swift Refactoring and Quality): True or False: Refactoring improves code structure without changing expected behavior.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. Refactoring targets internal quality while preserving behavior."
      }
    },
    {
      level: "advanced",
      moduleUnit: "13",
      question: {
        type: "vocab",
        prompt: "SwiftUI Module 13 (Swift Performance and Reliability): Which Swift feature isolates mutable shared state to reduce data races?",
        options: ["actor", "extension", "protocol", "enum"],
        answer: 0,
        explanation: "Actors isolate mutable state across concurrency boundaries."
      }
    },
    {
      level: "advanced",
      moduleUnit: "14",
      question: {
        type: "output",
        prompt: "SwiftUI Module 14 (Swift Real-World Scenarios): What does this return? `func display(_ name: String?) -> String { name ?? \"Guest\" }` when input is nil.",
        options: ["nil", "Guest", "name", "Error"],
        answer: 1,
        explanation: "Nil-coalescing returns \"Guest\" for nil input."
      }
    },
    // MODULE 1 EXPANSION: Swift Core Syntax (need 12 more → Total 20)
    {
      level: "beginner",
      moduleUnit: "1",
      question: {
        type: "vocab",
        prompt: "Module 1: Which Swift keyword declares a mutable variable?",
        options: ["let", "var", "func", "const"],
        answer: 1,
        explanation: "`var` declares a variable that can be changed."
      }
    },
    {
      level: "beginner",
      moduleUnit: "1",
      question: {
        type: "tf",
        prompt: "Module 1: True or False: `let` creates a constant in Swift.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. `let` declares immutable constants."
      }
    },
    {
      level: "beginner",
      moduleUnit: "1",
      question: {
        type: "vocab",
        prompt: "Module 1: What type represents true/false values in Swift?",
        options: ["Int", "Bool", "String", "Double"],
        answer: 1,
        explanation: "`Bool` represents boolean values."
      }
    },
    {
      level: "beginner",
      moduleUnit: "1",
      question: {
        type: "code",
        prompt: "Module 1: Write 2-3 lines declaring `age` as an Int constant with value 25 and print it.",
        checks: ["let age: int", "= 25", "print(age)"],
        sample: "let age: Int = 25\nprint(age)"
      }
    },
    {
      level: "beginner",
      moduleUnit: "1",
      question: {
        type: "tf",
        prompt: "Module 1: True or False: Swift uses double quotes for String literals.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. Strings use double quotes like \"hello\"."
      }
    },
    {
      level: "beginner",
      moduleUnit: "1",
      question: {
        type: "vocab",
        prompt: "Module 1: Which operator is used for string interpolation in Swift?",
        options: ["$", "#", "\\()", "@"],
        answer: 2,
        explanation: "`\\()` embeds expressions in strings."
      }
    },
    {
      level: "beginner",
      moduleUnit: "1",
      question: {
        type: "code",
        prompt: "Module 1: Write 2-3 lines creating constant `city` with \"Paris\" and print \"City: <value>\" using interpolation.",
        checks: ["let city", "\"paris\"", "print(\"city:", "\\(city)"],
        sample: "let city = \"Paris\"\nprint(\"City: \\(city)\")"
      }
    },
    {
      level: "beginner",
      moduleUnit: "1",
      question: {
        type: "output",
        prompt: "Module 1: What prints? `let x = 5; print(x * 2)`",
        options: ["5", "10", "x", "52"],
        answer: 1,
        explanation: "5 * 2 = 10"
      }
    },
    {
      level: "beginner",
      moduleUnit: "1",
      question: {
        type: "vocab",
        prompt: "Module 1: Which type is used for whole numbers in Swift?",
        options: ["Float", "Int", "String", "Character"],
        answer: 1,
        explanation: "`Int` represents integers."
      }
    },
    {
      level: "beginner",
      moduleUnit: "1",
      question: {
        type: "tf",
        prompt: "Module 1: True or False: Comments in Swift use // for single lines.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. // creates single-line comments."
      }
    },
    {
      level: "beginner",
      moduleUnit: "1",
      question: {
        type: "code",
        prompt: "Module 1: Write 3-4 lines declaring `isReady` as a Bool constant set to true and print it with a label.",
        checks: ["let isready: bool", "= true", "print("],
        sample: "let isReady: Bool = true\nprint(\"Ready: \\(isReady)\")"
      }
    },
    {
      level: "beginner",
      moduleUnit: "1",
      question: {
        type: "vocab",
        prompt: "Module 1: What does the + operator do with two strings in Swift?",
        options: ["Subtracts", "Concatenates", "Divides", "Compares"],
        answer: 1,
        explanation: "+ concatenates strings."
      }
    },
    // MODULE 2 EXPANSION: Optionals and Types (need 19 more → Total 20)
    {
      level: "beginner",
      moduleUnit: "2",
      question: {
        type: "vocab",
        prompt: "Module 2: What symbol indicates an optional type in Swift?",
        options: ["!", "?", "&", "#"],
        answer: 1,
        explanation: "? makes a type optional, like String?"
      }
    },
    {
      level: "beginner",
      moduleUnit: "2",
      question: {
        type: "tf",
        prompt: "Module 2: True or False: Optionals can hold nil.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. Optionals represent absence of value."
      }
    },
    {
      level: "beginner",
      moduleUnit: "2",
      question: {
        type: "code",
        prompt: "Module 2: Write 2-4 lines declaring `email: String?` set to nil, then safely unwrap with `if let`.",
        checks: ["var email: string?", "= nil", "if let"],
        sample: "var email: String? = nil\nif let value = email {\n  print(value)\n}"
      }
    },
    {
      level: "beginner",
      moduleUnit: "2",
      question: {
        type: "vocab",
        prompt: "Module 2: Which keyword is used to safely unwrap optionals?",
        options: ["var", "if let", "func", "enum"],
        answer: 1,
        explanation: "`if let` safely unwraps optionals."
      }
    },
    {
      level: "beginner",
      moduleUnit: "2",
      question: {
        type: "tf",
        prompt: "Module 2: True or False: `guard let` can unwrap optionals early.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. `guard let` exits early if nil."
      }
    },
    {
      level: "beginner",
      moduleUnit: "2",
      question: {
        type: "code",
        prompt: "Module 2: Write 3-5 lines using `guard let` to unwrap `name: String?` or return \"No name\".",
        checks: ["guard let", "else", "return"],
        sample: "func display(name: String?) -> String {\n  guard let value = name else { return \"No name\" }\n  return value\n}"
      }
    },
    {
      level: "beginner",
      moduleUnit: "2",
      question: {
        type: "vocab",
        prompt: "Module 2: What operator provides a default value for nil?",
        options: ["??", "!!", "&&", "++"],
        answer: 0,
        explanation: "?? is the nil-coalescing operator."
      }
    },
    {
      level: "beginner",
      moduleUnit: "2",
      question: {
        type: "output",
        prompt: "Module 2: What prints? `let x: Int? = nil; print(x ?? 10)`",
        options: ["nil", "10", "x", "Error"],
        answer: 1,
        explanation: "?? returns 10 when x is nil."
      }
    },
    {
      level: "beginner",
      moduleUnit: "2",
      question: {
        type: "tf",
        prompt: "Module 2: True or False: Force unwrapping with ! can cause crashes if nil.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. ! crashes on nil values."
      }
    },
    {
      level: "beginner",
      moduleUnit: "2",
      question: {
        type: "code",
        prompt: "Module 2: Write 2-3 lines using ?? to print `username` or \"Guest\" if nil.",
        checks: ["let username: string?", "print(username ??"],
        sample: "let username: String? = nil\nprint(username ?? \"Guest\")"
      }
    },
    {
      level: "beginner",
      moduleUnit: "2",
      question: {
        type: "vocab",
        prompt: "Module 2: What does optional chaining use to safely access nested properties?",
        options: ["!",  "?", "&", "*"],
        answer: 1,
        explanation: "? enables optional chaining like user?.name"
      }
    },
    {
      level: "beginner",
      moduleUnit: "2",
      question: {
        type: "tf",
        prompt: "Module 2: True or False: Type inference allows Swift to deduce types automatically.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. Swift infers types from context."
      }
    },
    {
      level: "beginner",
      moduleUnit: "2",
      question: {
        type: "code",
        prompt: "Module 2: Write 2-3 lines declaring `score: Int?` = 100 and use optional binding to print it.",
        checks: ["let score: int?", "if let", "print("],
        sample: "let score: Int? = 100\nif let value = score {\n  print(value)\n}"
      }
    },
    {
      level: "beginner",
      moduleUnit: "2",
      question: {
        type: "vocab",
        prompt: "Module 2: Which type annotation indicates a non-optional String?",
        options: ["String?", "String!", "String", "String??"],
        answer: 2,
        explanation: "String without ? is non-optional."
      }
    },
    {
      level: "beginner",
      moduleUnit: "2",
      question: {
        type: "output",
        prompt: "Module 2: What returns? `func get() -> String? { nil }; get() ?? \"Default\"`",
        options: ["nil", "Default", "Error", "Nothing"],
        answer: 1,
        explanation: "?? provides Default when nil."
      }
    },
    {
      level: "beginner",
      moduleUnit: "2",
      question: {
        type: "tf",
        prompt: "Module 2: True or False: You can compare optionals directly with ==.",
        options: ["True", "False"], 
        answer: 0,
        explanation: "True. Swift supports optional comparison."
      }
    },
    {
      level: "beginner",
      moduleUnit: "2",
      question: {
        type: "code",
        prompt: "Module 2: Write 4-5 lines with `if let` chain unwrapping two optionals `a` and `b`.",
        checks: ["if let", ", let"],
        sample: "let a: Int? = 5\nlet b: Int? = 10\nif let x = a, let y = b {\n  print(x + y)\n}"
      }
    },
    {
      level: "beginner",
      moduleUnit: "2",
      question: {
        type: "vocab",
        prompt: "Module 2: What type represents optional integers?",
        options: ["Int", "Int?", "Optional", "Nil"],
        answer: 1,
        explanation: "Int? is an optional integer."
      }
    },
    {
      level: "beginner",
      moduleUnit: "2",
      question: {
        type: "tf",
        prompt: "Module 2: True or False: Implicitly unwrapped optionals use Int!.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. ! creates implicitly unwrapped optionals."
      }
    },
    // MODULE 3 EXPANSION: State and Data Flow (need 19 more → Total 20)
    {
      level: "beginner",
      moduleUnit: "3",
      question: {
        type: "vocab",
        prompt: "Module 3: Which property wrapper declares local view state?",
        options: ["@Binding", "@State", "@Published", "@Environment"],
        answer: 1,
        explanation: "@State manages local mutable view state."
      }
    },
    {
      level: "beginner",
      moduleUnit: "3",
      question: {
        type: "tf",
        prompt: "Module 3: True or False: @State should be marked private.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. @State is view-private state."
      }
    },
    {
      level: "beginner",
      moduleUnit: "3",
      question: {
        type: "code",
        prompt: "Module 3: Write 3-5 lines with `@State private var name = \"\"` and a TextField bound to it.",
        checks: ["@state private var name", "textfield(", "$name"],
        sample: "@State private var name = \"\"\n\nvar body: some View {\n  TextField(\"Name\", text: $name)\n}"
      }
    },
    {
      level: "beginner",
      moduleUnit: "3",
      question: {
        type: "vocab",
        prompt: "Module 3: What does the $ prefix create for @State properties?",
        options: ["Copy", "Binding", "Constant", "Optional"],
        answer: 1,
        explanation: "$ creates a Binding for two-way access."
      }
    },
    {
      level: "beginner",
      moduleUnit: "3",
      question: {
        type: "tf",
        prompt: "Module 3: True or False: @Binding passes write access to child views.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. @Binding enables child state updates."
      }
    },
    {
      level: "beginner",
      moduleUnit: "3",
      question: {
        type: "code",
        prompt: "Module 3: Write 2-4 lines declaring @ObservedObject with a model conforming to ObservableObject.",
        checks: ["@observedobject var", ": ", "observableobject"],
        sample: "@ObservedObject var viewModel: DataModel\n\nclass DataModel: ObservableObject {\n  @Published var count = 0\n}"
      }
    },
    {
      level: "beginner",
      moduleUnit: "3",
      question: {
        type: "vocab",
        prompt: "Module 3: Which property wrapper publishes changes in ObservableObject?",
        options: ["@State", "@Published", "@Binding", "@Environment"],
        answer: 1,
        explanation: "@Published triggers view updates."
      }
    },
    {
      level: "beginner",
      moduleUnit: "3",
      question: {
        type: "output",
        prompt: "Module 3: If @State var count = 5 and button does `count += 1`, what's count after tap?",
        options: ["5", "6", "0", "Error"],
        answer: 1,
        explanation: "count increments to 6."
      }
    },
    {
      level: "beginner",
      moduleUnit: "3",
      question: {
        type: "tf",
        prompt: "Module 3: True or False: @StateObject creates and owns an observable object.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. @StateObject initializes and persists across view updates."
      }
    },
    {
      level: "beginner",
      moduleUnit: "3",
      question: {
        type: "code",
        prompt: "Module 3: Write 3-4 lines with `@Binding var isOn: Bool` in a child view.",
        checks: ["@binding var ison: bool"],
        sample: "struct ToggleView: View {\n  @Binding var isOn: Bool\n  var body: some View { Toggle(\"Setting\", isOn: $isOn) }\n}"
      }
    },
    {
      level: "beginner",
      moduleUnit: "3",
      question: {
        type: "vocab",
        prompt: "Module 3: What does @EnvironmentObject inject into views?",
        options: ["Local state", "Shared observable object", "Constants", "Functions"],
        answer: 1,
        explanation: "@EnvironmentObject provides shared model access."
      }
    },
    {
      level: "beginner",
      moduleUnit: "3",
      question: {
        type: "tf",
        prompt: "Module 3: True or False: Data flows down and actions flow up in SwiftUI.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. Parent owns state, children call actions."
      }
    },
    {
      level: "beginner",
      moduleUnit: "3",
      question: {
        type: "code",
        prompt: "Module 3: Write 2-3 lines with Toggle bound to `@State var enabled = false`.",
        checks: ["toggle(", "$enabled"],
        sample: "@State private var enabled = false\nToggle(\"Enable\", isOn: $enabled)"
      }
    },
    {
      level: "beginner",
      moduleUnit: "3",
      question: {
        type: "vocab",
        prompt: "Module 3: Which wrapper watches external model changes?",
        options: ["@State", "@Binding", "@ObservedObject", "@AppStorage"],
        answer: 2,
        explanation: "@ObservedObject observes external models."
      }
    },
    {
      level: "beginner",
      moduleUnit: "3",
      question: {
        type: "output",
        prompt: "Module 3: If @State var text = \"Hi\" changes to \"Hello\", does the view update?",
        options: ["Yes", "No", "Sometimes", "Error"],
        answer: 0,
        explanation: "Yes. @State triggers view refresh."
      }
    },
    {
      level: "beginner",
      moduleUnit: "3",
      question: {
        type: "tf",
        prompt: "Module 3: True or False: @AppStorage persists values to UserDefaults.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. @AppStorage syncs with UserDefaults."
      }
    },
    {
      level: "beginner",
      moduleUnit: "3",
      question: {
        type: "code",
        prompt: "Module 3: Write 2-3 lines passing $count binding from parent to ChildView.",
        checks: ["childview(count: $count)"],
        sample: "@State private var count = 0\nChildView(count: $count)"
      }
    },
    {
      level: "beginner",
      moduleUnit: "3",
      question: {
        type: "vocab",
        prompt: "Module 3: What does source of truth mean in SwiftUI?",
        options: ["API response", "Single data owner", "Environment value", "Constant"],
        answer: 1,
        explanation: "Source of truth is the single owner of state."
      }
    },
    {
      level: "beginner",
      moduleUnit: "3",
      question: {
        type: "tf",
        prompt: "Module 3: True or False: Derived values should recompute from state, not duplicate it.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. Compute derived values to avoid sync issues."
      }
    },
    // MODULE 4 EXPANSION: SwiftUI View Composition (need 18 more → Total 20)
    {
      level: "beginner",
      moduleUnit: "4",
      question: {
        type: "vocab",
        prompt: "Module 4: Which stack arranges views horizontally?",
        options: ["VStack", "HStack", "ZStack", "List"],
        answer: 1,
        explanation: "HStack places views left-to-right."
      }
    },
    {
      level: "beginner",
      moduleUnit: "4",
      question: {
        type: "tf",
        prompt: "Module 4: True or False: VStack arranges views vertically.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. VStack stacks top-to-bottom."
      }
    },
    {
      level: "beginner",
      moduleUnit: "4",
      question: {
        type: "code",
        prompt: "Module 4: Write 3-5 lines with VStack containing a Text and Button.",
        checks: ["vstack", "text(", "button("],
        sample: "VStack {\n  Text(\"Title\")\n  Button(\"Tap\") { }\n}"
      }
    },
    {
      level: "beginner",
      moduleUnit: "4",
      question: {
        type: "vocab",
        prompt: "Module 4: Which view shows a single line of text?",
        options: ["Label", "Text", "Button", "Image"],
        answer: 1,
        explanation: "Text displays strings."
      }
    },
    {
      level: "beginner",
      moduleUnit: "4",
      question: {
        type: "tf",
        prompt: "Module 4: True or False: ZStack layers views on top of each other.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. ZStack creates depth layers."
      }
    },
    {
      level: "beginner",
      moduleUnit: "4",
      question: {
        type: "code",
        prompt: "Module 4: Write 3-5 lines with HStack containing two Circle shapes.",
        checks: ["hstack", "circle()"],
        sample: "HStack {\n  Circle().frame(width: 40, height: 40)\n  Circle().frame(width: 40, height: 40)\n}"
      }
    },
    {
      level: "beginner",
      moduleUnit: "4",
      question: {
        type: "vocab",
        prompt: "Module 4: Which modifier adds space inside a view?",
        options: ["margin", "padding", "spacing", "border"],
        answer: 1,
        explanation: ".padding() adds internal space."
      }
    },
    {
      level: "beginner",
      moduleUnit: "4",
      question: {
        type: "output",
        prompt: "Module 4: How many views in `VStack { Text(\"A\"); Text(\"B\") }`?",
        options: ["1", "2", "3", "0"],
        answer: 1,
        explanation: "Two Text views."
      }
    },
    {
      level: "beginner",
      moduleUnit: "4",
      question: {
        type: "tf",
        prompt: "Module 4: True or False: Button takes a label and action closure.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. Button(\"Label\") { action }"
      }
    },
    {
      level: "beginner",
      moduleUnit: "4",
      question: {
        type: "code",
        prompt: "Module 4: Write 2-4 lines with Image systemName and resizable modifier.",
        checks: ["image(systemname:", ".resizable()"],
        sample: "Image(systemName: \"star\")\n  .resizable()\n  .frame(width: 50, height: 50)"
      }
    },
    {
      level: "beginner",
      moduleUnit: "4",
      question: {
        type: "vocab",
        prompt: "Module 4: Which view displays scrollable content?",
        options: ["Stack", "ScrollView", "List", "Grid"],
        answer: 1,
        explanation: "ScrollView enables scrolling."
      }
    },
    {
      level: "beginner",
      moduleUnit: "4",
      question: {
        type: "tf",
        prompt: "Module 4: True or False: Spacer pushes views apart.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. Spacer fills available space."
      }
    },
    {
      level: "beginner",
      moduleUnit: "4",
      question: {
        type: "code",
        prompt: "Module 4: Write 3-4 lines with ZStack showing background color and text overlay.",
        checks: ["zstack", "color.", "text("],
        sample: "ZStack {\n  Color.blue\n  Text(\"Overlay\")\n}"
      }
    },
    {
      level: "beginner",
      moduleUnit: "4",
      question: {
        type: "vocab",
        prompt: "Module 4: Which modifier sets view dimensions?",
        options: [".size", ".frame", ".bounds", ".rect"],
        answer: 1,
        explanation: ".frame(width:height:) sets size."
      }
    },
    {
      level: "beginner",
      moduleUnit: "4",
      question: {
        type: "output",
        prompt: "Module 4: What does `Text(\"Hello\").font(.title)` change?",
        options: ["Color", "Font style", "Padding", "Alignment"],
        answer: 1,
        explanation: ".font() changes text style."
      }
    },
    {
      level: "beginner",
      moduleUnit: "4",
      question: {
        type: "tf",
        prompt: "Module 4: True or False: List automatically creates scrollable rows.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. List provides scrolling by default."
      }
    },
    {
      level: "beginner",
      moduleUnit: "4",
      question: {
        type: "code",
        prompt: "Module 4: Write 2-3 lines creating a rounded rectangle shape.",
        checks: ["roundedrectangle(cornerradius:"],
        sample: "RoundedRectangle(cornerRadius: 10)\n  .fill(Color.blue)\n  .frame(width: 100, height: 100)"
      }
    },
    {
      level: "beginner",
      moduleUnit: "4",
      question: {
        type: "vocab",
        prompt: "Module 4: Which parameter controls spacing between stack children?",
        options: ["gap", "spacing", "margin", "padding"],
        answer: 1,
        explanation: "spacing: sets child gaps in stacks."
      }
    },
    // MODULE 5 EXPANSION: Debugging Swift Basics (need 17 more → Total 20)
    {
      level: "medium",
      moduleUnit: "5",
      question: {
        type: "debug",
        prompt: "Module 5: Fix the syntax error in variable declaration.",
        starterCode: "let name String = \"Sam\"",
        checks: ["let name: string = \"sam\""],
        sample: "let name: String = \"Sam\""
      }
    },
    {
      level: "medium",
      moduleUnit: "5",
      question: {
        type: "debug",
        prompt: "Module 5: Fix the code so the array compiles.",
        starterCode: "let nums: [Int] = [1, \"two\", 3]",
        checks: ["let nums: [int] = [1, 2, 3]"],
        sample: "let nums: [Int] = [1, 2, 3]"
      }
    },
    {
      level: "medium",
      moduleUnit: "5",
      question: {
        type: "debug",
        prompt: "Module 5: Fix the missing return statement.",
        starterCode: "func add(a: Int, b: Int) -> Int {\n  a + b\n}",
        checks: ["return a + b"],
        sample: "func add(a: Int, b: Int) -> Int {\n  return a + b\n}"
      }
    },
    {
      level: "medium",
      moduleUnit: "5",
      question: {
        type: "vocab",
        prompt: "Module 5: What causes \"Use of unresolved identifier\" error?",
        options: ["Missing import", "Undefined variable", "Wrong type", "All of the above"],
        answer: 3,
        explanation: "All can cause this error."
      }
    },
    {
      level: "medium",
      moduleUnit: "5",
      question: {
        type: "debug",
        prompt: "Module 5: Fix the optional unwrapping to prevent crashes.",
        starterCode: "let value: Int? = nil\nprint(value!)",
        checks: ["if let", "value ?? "],
        sample: "let value: Int? = nil\nprint(value ?? 0)"
      }
    },
    {
      level: "medium",
      moduleUnit: "5",
      question: {
        type: "tf",
        prompt: "Module 5: True or False: Compiler errors must be fixed before runtime.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. Code won't build with compile errors."
      }
    },
    {
      level: "medium",
      moduleUnit: "5",
      question: {
        type: "debug",
        prompt: "Module 5: Fix the loop to iterate correctly.",
        starterCode: "for i in 1...5\n  print(i)\n}",
        checks: ["for i in 1...5 {"],
        sample: "for i in 1...5 {\n  print(i)\n}"
      }
    },
    {
      level: "medium",
      moduleUnit: "5",
      question: {
        type: "vocab",
        prompt: "Module 5: Which keyword exits a function early?",
        options: ["break", "return", "exit", "stop"],
        answer: 1,
        explanation: "return exits functions."
      }
    },
    {
      level: "medium",
      moduleUnit: "5",
      question: {
        type: "debug",
        prompt: "Module 5: Fix the string interpolation syntax.",
        starterCode: "let age = 25\nprint(\"Age: {age}\")",
        checks: ["\\(age)"],
        sample: "let age = 25\nprint(\"Age: \\(age)\")"
      }
    },
    {
      level: "medium",
      moduleUnit: "5",
      question: {
        type: "tf",
        prompt: "Module 5: True or False: print() helps debug by showing values.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. print() outputs debug info."
      }
    },
    {
      level: "medium",
      moduleUnit: "5",
      question: {
        type: "debug",
        prompt: "Module 5: Fix the conditional to compile.",
        starterCode: "let x = 10\nif x = 10 {\n  print(\"Match\")\n}",
        checks: ["if x == 10"],
        sample: "let x = 10\nif x == 10 {\n  print(\"Match\")\n}"
      }
    },
    {
      level: "medium",
      moduleUnit: "5",
      question: {
        type: "vocab",
        prompt: "Module 5: What does \"Type mismatch\" error indicate?",
        options: ["Wrong operator", "Incompatible types", "Missing import", "Syntax error"],
        answer: 1,
        explanation: "Type mismatch means incompatible types."
      }
    },
    {
      level: "medium",
      moduleUnit: "5",
      question: {
        type: "debug",
        prompt: "Module 5: Fix the array access to prevent out-of-bounds crash.",
        starterCode: "let arr = [1, 2, 3]\nprint(arr[5])",
        checks: ["if arr.count > 5||arr[safe:||arr.indices.contains"],
        sample: "let arr = [1, 2, 3]\nif arr.indices.contains(0) {\n  print(arr[0])\n}"
      }
    },
    {
      level: "medium",
      moduleUnit: "5",
      question: {
        type: "tf",
        prompt: "Module 5: True or False: guard helps exit early on invalid conditions.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. guard ensures preconditions."
      }
    },
    {
      level: "medium",
      moduleUnit: "5",
      question: {
        type: "debug",
        prompt: "Module 5: Fix the function parameter label.",
        starterCode: "func greet name: String {\n  print(name)\n}",
        checks: ["func greet(name: string)"],
        sample: "func greet(name: String) {\n  print(name)\n}"
      }
    },
    {
      level: "medium",
      moduleUnit: "5",
      question: {
        type: "vocab",
        prompt: "Module 5: Which tool shows compile-time errors in Xcode?",
        options: ["Console", "Issue Navigator", "Debugger", "Instruments"],
        answer: 1,
        explanation: "Issue Navigator lists compile errors."
      }
    },
    {
      level: "medium",
      moduleUnit: "5",
      question: {
        type: "debug",
        prompt: "Module 5: Fix the enum case access.",
        starterCode: "enum Status { case active }\nlet s = Status.Active",
        checks: ["status.active"],
        sample: "enum Status { case active }\nlet s = Status.active"
      }
    },
    // MODULE 6 EXPANSION: Debugging SwiftUI State (need 11 more → Total 20)
    {
      level: "medium",
      moduleUnit: "6",
      question: {
        type: "debug",
        prompt: "Module 6: Fix the @State variable so it can be modified.",
        starterCode: "@State let count = 0",
        checks: ["@state var count"],
        sample: "@State var count = 0"
      }
    },
    {
      level: "medium",
      moduleUnit: "6",
      question: {
        type: "debug",
        prompt: "Module 6: Fix the binding syntax in TextField.",
        starterCode: "TextField(\"Name\", text: name)",
        checks: ["$name"],
        sample: "TextField(\"Name\", text: $name)"
      }
    },
    {
      level: "medium",
      moduleUnit: "6",
      question: {
        type: "vocab",
        prompt: "Module 6: What does missing $ in binding cause?",
        options: ["Crash", "Compile error", "No updates", "Memory leak"],
        answer: 1,
        explanation: "Missing $ causes type mismatch error."
      }
    },
    {
      level: "medium",
      moduleUnit: "6",
      question: {
        type: "debug",
        prompt: "Module 6: Fix the Toggle binding.",
        starterCode: "@State private var isOn = false\nToggle(\"Setting\", isOn: isOn)",
        checks: ["$ison"],
        sample: "@State private var isOn = false\nToggle(\"Setting\", isOn: $isOn)"
      }
    },
    {
      level: "medium",
      moduleUnit: "6",
      question: {
        type: "tf",
        prompt: "Module 6: True or False: @State changes trigger view updates.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. @State refreshes views on change."
      }
    },
    {
      level: "medium",
      moduleUnit: "6",
      question: {
        type: "debug",
        prompt: "Module 6: Fix the missing @State declaration.",
        starterCode: "var counter = 0\nButton(\"Add\") { counter += 1 }",
        checks: ["@state"],
        sample: "@State private var counter = 0\nButton(\"Add\") { counter += 1 }"
      }
    },
    {
      level: "medium",
      moduleUnit: "6",
      question: {
        type: "vocab",
        prompt: "Module 6: What happens if @Binding receives wrong type?",
        options: ["Runtime error", "Compile error", "Silent failure", "Crash"],
        answer: 1,
        explanation: "Type mismatch causes compile error."
      }
    },
    {
      level: "medium",
      moduleUnit: "6",
      question: {
        type: "debug",
        prompt: "Module 6: Fix the ObservableObject conformance.",
        starterCode: "class Model {\n  @Published var name = \"\"\n}",
        checks: [": observableobject"],
        sample: "class Model: ObservableObject {\n  @Published var name = \"\"\n}"
      }
    },
    {
      level: "medium",
      moduleUnit: "6",
      question: {
        type: "tf",
        prompt: "Module 6: True or False: @Published only works in ObservableObject.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. @Published requires ObservableObject."
      }
    },
    {
      level: "medium",
      moduleUnit: "6",
      question: {
        type: "debug",
        prompt: "Module 6: Fix the binding parameter in child view.",
        starterCode: "struct Child: View {\n  var isOn: Bool\n}",
        checks: ["@binding"],
        sample: "struct Child: View {\n  @Binding var isOn: Bool\n}"
      }
    },
    {
      level: "medium",
      moduleUnit: "6",
      question: {
        type: "vocab",
        prompt: "Module 6: Which wrapper observes external observable objects?",
        options: ["@State", "@ObservedObject", "@Binding", "@Environment"],
        answer: 1,
        explanation: "@ObservedObject watches external models."
      }
    },
    // MODULE 7 EXPANSION: Debug Review and Fixes (need 16 more → Total 20)
    {
      level: "medium",
      moduleUnit: "7",
      question: {
        type: "debug",
        prompt: "Module 7: Fix the missing closing brace.",
        starterCode: "func test() {\n  print(\"Hi\")",
        checks: ["}"],
        sample: "func test() {\n  print(\"Hi\")\n}"
      }
    },
    {
      level: "medium",
      moduleUnit: "7",
      question: {
        type: "debug",
        prompt: "Module 7: Fix the array literal syntax.",
        starterCode: "let items = [1, 2, 3,]",
        checks: ["[1, 2, 3]"],
        sample: "let items = [1, 2, 3]"
      }
    },
    {
      level: "medium",
      moduleUnit: "7",
      question: {
        type: "vocab",
        prompt: "Module 7: What causes \"Expected expression\" error?",
        options: ["Missing operator", "Incomplete code", "Wrong type", "All of above"],
        answer: 1,
        explanation: "Incomplete syntax causes this error."
      }
    },
    {
      level: "medium",
      moduleUnit: "7",
      question: {
        type: "debug",
        prompt: "Module 7: Fix the dictionary key-value separator.",
        starterCode: "let dict = [\"a\" = 1, \"b\" = 2]",
        checks: ["\"a\": 1"],
        sample: "let dict = [\"a\": 1, \"b\": 2]"
      }
    },
    {
      level: "medium",
      moduleUnit: "7",
      question: {
        type: "tf",
        prompt: "Module 7: True or False: Unused variables cause warnings, not errors.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. Warnings don't prevent building."
      }
    },
    {
      level: "medium",
      moduleUnit: "7",
      question: {
        type: "debug",
        prompt: "Module 7: Fix the switch statement to be exhaustive.",
        starterCode: "let x = 1\nswitch x {\ncase 1: print(\"One\")\n}",
        checks: ["default:"],
        sample: "let x = 1\nswitch x {\ncase 1: print(\"One\")\ndefault: break\n}"
      }
    },
    {
      level: "medium",
      moduleUnit: "7",
      question: {
        type: "vocab",
        prompt: "Module 7: Which keyword marks code that may fail?",
        options: ["try", "catch", "throw", "fail"],
        answer: 0,
        explanation: "try marks potentially throwing calls."
      }
    },
    {
      level: "medium",
      moduleUnit: "7",
      question: {
        type: "debug",
        prompt: "Module 7: Fix the guard else clause.",
        starterCode: "guard let x = value else\n  print(\"Error\")\n}",
        checks: ["else {"],
        sample: "guard let x = value else {\n  print(\"Error\")\n  return\n}"
      }
    },
    {
      level: "medium",
      moduleUnit: "7",
      question: {
        type: "tf",
        prompt: "Module 7: True or False: Breakpoints pause execution for inspection.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. Breakpoints enable debugging."
      }
    },
    {
      level: "medium",
      moduleUnit: "7",
      question: {
        type: "debug",
        prompt: "Module 7: Fix the closure syntax.",
        starterCode: "let add = { a, b in a + b",
        checks: ["}"],
        sample: "let add = { (a: Int, b: Int) in a + b }"
      }
    },
    {
      level: "medium",
      moduleUnit: "7",
      question: {
        type: "vocab",
        prompt: "Module 7: What does lldb do in Xcode?",
        options: ["Compiles code", "Debugs runtime", "Lints style", "Archives builds"],
        answer: 1,
        explanation: "lldb is the debugger."
      }
    },
    {
      level: "medium",
      moduleUnit: "7",
      question: {
        type: "debug",
        prompt: "Module 7: Fix the missing parameter type.",
        starterCode: "func process(_ value) { }",
        checks: ["_ value:"],
        sample: "func process(_ value: String) { }"
      }
    },
    {
      level: "medium",
      moduleUnit: "7",
      question: {
        type: "tf",
        prompt: "Module 7: True or False: po command prints object descriptions in debugger.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. po evaluates and prints."
      }
    },
    {
      level: "medium",
      moduleUnit: "7",
      question: {
        type: "debug",
        prompt: "Module 7: Fix the struct init parameter label.",
        starterCode: "struct Point { var x, y: Int }",
        checks: ["var x: int"],
        sample: "struct Point { var x: Int, y: Int }"
      }
    },
    {
      level: "medium",
      moduleUnit: "7",
      question: {
        type: "vocab",
        prompt: "Module 7: Which panel shows variable values during debugging?",
        options: ["Console", "Variables View", "Navigator", "Inspector"],
        answer: 1,
        explanation: "Variables View displays current state."
      }
    },
    {
      level: "medium",
      moduleUnit: "7",
      question: {
        type: "debug",
        prompt: "Module 7: Fix the ternary operator syntax.",
        starterCode: "let msg = isReady ? \"Go\" : \"Wait",
        checks: ["\"wait\""],
        sample: "let msg = isReady ? \"Go\" : \"Wait\""
      }
    },
    // MODULE 8 EXPANSION: Output Tracing in Swift (need 17 more → Total 20)
    {
      level: "medium",
      moduleUnit: "8",
      question: {
        type: "output",
        prompt: "Module 8: What prints? `let x = 10; print(x / 2)`",
        options: ["5", "10", "2", "5.0"],
        answer: 0,
        explanation: "Integer division: 10 / 2 = 5"
      }
    },
    {
      level: "medium",
      moduleUnit: "8",
      question: {
        type: "output",
        prompt: "Module 8: What prints? `let s = \"Hi\"; print(s + s)`",
        options: ["HiHi", "Hi Hi", "2", "Error"],
        answer: 0,
        explanation: "String concatenation produces HiHi."
      }
    },
    {
      level: "medium",
      moduleUnit: "8",
      question: {
        type: "vocab",
        prompt: "Module 8: What operator checks for equality?",
        options: ["=", "==", "!=", "==="],
        answer: 1,
        explanation: "== tests equality."
      }
    },
    {
      level: "medium",
      moduleUnit: "8",
      question: {
        type: "output",
        prompt: "Module 8: What prints? `for i in 1...3 { print(i) }`",
        options: ["1 2 3", "123", "1\\n2\\n3", "3"],
        answer: 2,
        explanation: "Prints 1, 2, 3 on separate lines."
      }
    },
    {
      level: "medium",
      moduleUnit: "8",
      question: {
        type: "tf",
        prompt: "Module 8: True or False: 10 % 3 equals 1.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. Modulo gives remainder."
      }
    },
    {
      level: "medium",
      moduleUnit: "8",
      question: {
        type: "output",
        prompt: "Module 8: What prints? `let arr = [1, 2]; print(arr.count)`",
        options: ["1", "2", "3", "0"],
        answer: 1,
        explanation: "Array has 2 elements."
      }
    },
    {
      level: "medium",
      moduleUnit: "8",
      question: {
        type: "vocab",
        prompt: "Module 8: What does ?? operator return if value is nil?",
        options: ["Error", "nil", "Default value", "Empty"],
        answer: 2,
        explanation: "?? provides fallback value."
      }
    },
    {
      level: "medium",
      moduleUnit: "8",
      question: {
        type: "output",
        prompt: "Module 8: What prints? `let b = true; print(!b)`",
        options: ["true", "false", "!b", "0"],
        answer: 1,
        explanation: "! negates to false."
      }
    },
    {
      level: "medium",
      moduleUnit: "8",
      question: {
        type: "tf",
        prompt: "Module 8: True or False: \"5\" + \"5\" produces \"55\".",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. String concatenation."
      }
    },
    {
      level: "medium",
      moduleUnit: "8",
      question: {
        type: "output",
        prompt: "Module 8: What prints? `let x = 4; print(x * x)`",
        options: ["4", "8", "16", "44"],
        answer: 2,
        explanation: "4 * 4 = 16"
      }
    },
    {
      level: "medium",
      moduleUnit: "8",
      question: {
        type: "vocab",
        prompt: "Module 8: Which operator checks if value is in range?",
        options: ["...", "..<", "in", "contains"],
        answer: 0,
        explanation: "... creates closed range."
      }
    },
    {
      level: "medium",
      moduleUnit: "8",
      question: {
        type: "output",
        prompt: "Module 8: What prints? `print(\"Count: \\(2 + 3)\")`",
        options: ["Count: 2 + 3", "Count: 5", "5", "Error"],
        answer: 1,
        explanation: "Interpolation evaluates to 5."
      }
    },
    {
      level: "medium",
      moduleUnit: "8",
      question: {
        type: "tf",
        prompt: "Module 8: True or False: 5 > 3 evaluates to true.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. 5 is greater than 3."
      }
    },
    {
      level: "medium",
      moduleUnit: "8",
      question: {
        type: "output",
        prompt: "Module 8: What prints? `let nums = [10, 20]; print(nums.first!)`",
        options: ["10", "20", "nil", "Error"],
        answer: 0,
        explanation: "first returns 10."
      }
    },
    {
      level: "medium",
      moduleUnit: "8",
      question: {
        type: "vocab",
        prompt: "Module 8: What does && operator do?",
        options: ["Adds", "Logical AND", "Concatenates", "Compares"],
        answer: 1,
        explanation: "&& performs logical AND."
      }
    },
    {
      level: "medium",
      moduleUnit: "8",
      question: {
        type: "output",
        prompt: "Module 8: What prints? `let x = 10, y = 20; print(x < y)`",
        options: ["true", "false", "10", "20"],
        answer: 0,
        explanation: "10 < 20 is true."
      }
    },
    {
      level: "medium",
      moduleUnit: "8",
      question: {
        type: "tf",
        prompt: "Module 8: True or False: nil ?? 0 returns 0.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. ?? provides default."
      }
    },
    // MODULE 9 EXPANSION: Output Tracing in SwiftUI (need 19 more → Total 20)
    {
      level: "medium",
      moduleUnit: "9",
      question: {
        type: "output",
        prompt: "Module 9: If `@State var count = 3`, what does `Text(\"\\(count)\")` show?",
        options: ["count", "3", "@State", "Error"],
        answer: 1,
        explanation: "Displays the value 3."
      }
    },
    {
      level: "medium",
      moduleUnit: "9",
      question: {
        type: "tf",
        prompt: "Module 9: True or False: Button action runs when tapped.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. Closure executes on tap."
      }
    },
    {
      level: "medium",
      moduleUnit: "9",
      question: {
        type: "output",
        prompt: "Module 9: If `@State var show = false`, does `if show { Text(\"Hi\") }` appear?",
        options: ["Yes", "No", "Sometimes", "Error"],
        answer: 1,
        explanation: "No. Condition is false."
      }
    },
    {
      level: "medium",
      moduleUnit: "9",
      question: {
        type: "vocab",
        prompt: "Module 9: What determines when SwiftUI body recomputes?",
        options: ["Timer", "State change", "Manual call", "Random"],
        answer: 1,
        explanation: "State changes trigger body refresh."
      }
    },
    {
      level: "medium",
      moduleUnit: "9",
      question: {
        type: "output",
        prompt: "Module 9: If Button increments count from 0, what shows after 2 taps?",
        options: ["0", "1", "2", "count"],
        answer: 2,
        explanation: "After 2 taps, count is 2."
      }
    },
    {
      level: "medium",
      moduleUnit: "9",
      question: {
        type: "tf",
        prompt: "Module 9: True or False: ForEach renders list items dynamically.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. ForEach creates views from data."
      }
    },
    {
      level: "medium",
      moduleUnit: "9",
      question: {
        type: "output",
        prompt: "Module 9: What renders? `VStack { Text(\"A\"); Text(\"B\") }`",
        options: ["A above B", "A beside B", "Only A", "Only B"],
        answer: 0,
        explanation: "VStack stacks vertically."
      }
    },
    {
      level: "medium",
      moduleUnit: "9",
      question: {
        type: "vocab",
        prompt: "Module 9: Which shows 5 items? `ForEach(0..<5)`",
        options: ["0 items", "4 items", "5 items", "6 items"],
        answer: 2,
        explanation: "0..<5 creates 5 iterations."
      }
    },
    {
      level: "medium",
      moduleUnit: "9",
      question: {
        type: "output",
        prompt: "Module 9: If `@State var name = \"Sam\"`, does TextField update name on typing?",
        options: ["Yes", "No", "Only once", "Error"],
        answer: 0,
        explanation: "Yes. TextField binds to state."
      }
    },
    {
      level: "medium",
      moduleUnit: "9",
      question: {
        type: "tf",
        prompt: "Module 9: True or False: Spacer() fills available space.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. Spacer expands to fill."
      }
    },
    {
      level: "medium",
      moduleUnit: "9",
      question: {
        type: "output",
        prompt: "Module 9: What color shows? `Circle().fill(Color.blue)`",
        options: ["Red", "Blue", "Green", "None"],
        answer: 1,
        explanation: ".fill(Color.blue) makes it blue."
      }
    },
    {
      level: "medium",
      moduleUnit: "9",
      question: {
        type: "vocab",
        prompt: "Module 9: What does .font(.title) change in Text?",
        options: ["Color", "Size/style", "Alignment", "Padding"],
        answer: 1,
        explanation: ".font() changes text size/style."
      }
    },
    {
      level: "medium",
      moduleUnit: "9",
      question: {
        type: "output",
        prompt: "Module 9: Does `Toggle(\"On\", isOn: $enabled)` show switch control?",
        options: ["Yes", "No", "Only iOS", "Error"],
        answer: 0,
        explanation: "Yes. Toggle renders switch."
      }
    },
    {
      level: "medium",
      moduleUnit: "9",
      question: {
        type: "tf",
        prompt: "Module 9: True or False: .padding() adds space inside a view.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. Padding creates internal space."
      }
    },
    {
      level: "medium",
      moduleUnit: "9",
      question: {
        type: "output",
        prompt: "Module 9: If `@State var count = 10` and button does `count -= 1`, what after 1 tap?",
        options: ["10", "9", "11", "0"],
        answer: 1,
        explanation: "Decrements to 9."
      }
    },
    {
      level: "medium",
      moduleUnit: "9",
      question: {
        type: "vocab",
        prompt: "Module 9: Which creates rounded corners?",
        options: ["Border", "Shadow", ".cornerRadius()", "Padding"],
        answer: 2,
        explanation: ".cornerRadius() rounds edges."
      }
    },
    {
      level: "medium",
      moduleUnit: "9",
      question: {
        type: "output",
        prompt: "Module 9: What shows? `Text(\"Score: \\(5 * 2)\")`",
        options: ["Score: 5 * 2", "Score: 10", "10", "Error"],
        answer: 1,
        explanation: "Interpolation evaluates 5 * 2 = 10."
      }
    },
    {
      level: "medium",
      moduleUnit: "9",
      question: {
        type: "tf",
        prompt: "Module 9: True or False: Text can display interpolated values.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. Use \\() for interpolation."
      }
    },
    {
      level: "medium",
      moduleUnit: "9",
      question: {
        type: "output",
        prompt: "Module 9: Does `if true { Text(\"Show\") }` display the text?",
        options: ["Yes", "No", "Sometimes", "Error"],
        answer: 0,
        explanation: "Yes. Condition is true."
      }
    },
    // MODULE 10 EXPANSION COMPLETE: Swift + SwiftUI Mastery (need 18 more → Total 20)
    {
      level: "medium",
      moduleUnit: "10",
      question: {
        type: "vocab",
        prompt: "Module 10: What does MVVM stand for in SwiftUI architecture?",
        options: ["Model View ViewModel", "Multi View Model", "Main View Method", "None"],
        answer: 0,
        explanation: "MVVM separates view logic from models."
      }
    },
    {
      level: "medium",
      moduleUnit: "10",
      question: {
        type: "tf",
        prompt: "Module 10: True or False: ViewModels handle business logic outside views.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. ViewModels separate concerns."
      }
    },
    {
      level: "medium",
      moduleUnit: "10",
      question: {
        type: "code",
        prompt: "Module 10: Write 3-5 lines creating a ViewModel class conforming to ObservableObject.",
        checks: ["class", "viewmodel: observableobject", "@published"],
        sample: "class DataViewModel: ObservableObject {\n  @Published var items: [String] = []\n}"
      }
    },
    {
      level: "medium",
      moduleUnit: "10",
      question: {
        type: "vocab",
        prompt: "Module 10: What pattern passes dependencies explicitly?",
        options: ["Singleton", "Dependency Injection", "Global state", "Hard-coding"],
        answer: 1,
        explanation: "Dependency Injection improves testability."
      }
    },
    {
      level: "medium",
      moduleUnit: "10",
      question: {
        type: "tf",
        prompt: "Module 10: True or False: Computed properties derive values without storage.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. Computed properties calculate on access."
      }
    },
    {
      level: "medium",
      moduleUnit: "10",
      question: {
        type: "code",
        prompt: "Module 10: Write 2-4 lines with computed property returning filtered array.",
        checks: ["var", "filter"],
        sample: "var activeItems: [Item] {\n  items.filter { $0.isActive }\n}"
      }
    },
    {
      level: "medium",
      moduleUnit: "10",
      question: {
        type: "vocab",
        prompt: "Module 10: Which protocol makes structs list-renderable?",
        options: ["Codable", "Identifiable", "Equatable", "Hashable"],
        answer: 1,
        explanation: "Identifiable provides unique IDs for lists."
      }
    },
    {
      level: "medium",
      moduleUnit: "10",
      question: {
        type: "tf",
        prompt: "Module 10: True or False: Protocols define behavior contracts.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. Protocols specify required methods/properties."
      }
    },
    {
      level: "medium",
      moduleUnit: "10",
      question: {
        type: "code",
        prompt: "Module 10: Write 2-3 lines defining protocol with required method.",
        checks: ["protocol", "func"],
        sample: "protocol DataSource {\n  func fetchData() -> [String]\n}"
      }
    },
    {
      level: "medium",
      moduleUnit: "10",
      question: {
        type: "vocab",
        prompt: "Module 10: What makes views reusable across screens?",
        options: ["Singletons", "Component extraction", "Copy-paste", "Global vars"],
        answer: 1,
        explanation: "Extracting components improves reuse."
      }
    },
    {
      level: "medium",
      moduleUnit: "10",
      question: {
        type: "tf",
        prompt: "Module 10: True or False: Extensions add functionality to existing types.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. Extensions enhance types."
      }
    },
    {
      level: "medium",
      moduleUnit: "10",
      question: {
        type: "code",
        prompt: "Module 10: Write 2-3 lines extending String with computed property for length.",
        checks: ["extension string", "var", "count"],
        sample: "extension String {\n  var length: Int { count }\n}"
      }
    },
    {
      level: "medium",
      moduleUnit: "10",
      question: {
        type: "vocab",
        prompt: "Module 10: Which stores app-wide shared state?",
        options: ["@State", "@EnvironmentObject", "@Binding", "Local var"],
        answer: 1,
        explanation: "@EnvironmentObject provides global access."
      }
    },
    {
      level: "medium",
      moduleUnit: "10",
      question: {
        type: "tf",
        prompt: "Module 10: True or False: Modular design improves maintainability.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. Modular code is easier to maintain."
      }
    },
    {
      level: "medium",
      moduleUnit: "10",
      question: {
        type: "code",
        prompt: "Module 10: Write 3-4 lines with enum modeling LoadState (idle, loading, success).",
        checks: ["enum loadstate", "case idle", "case loading", "case success"],
        sample: "enum LoadState {\n  case idle\n  case loading\n  case success(Data)\n}"
      }
    },
    {
      level: "medium",
      moduleUnit: "10",
      question: {
        type: "vocab",
        prompt: "Module 10: What does single responsibility principle mean?",
        options: ["One file", "One purpose per component", "One developer", "One language"],
        answer: 1,
        explanation: "Each component should have one clear purpose."
      }
    },
    {
      level: "medium",
      moduleUnit: "10",
      question: {
        type: "tf",
        prompt: "Module 10: True or False: Separation of concerns improves testability.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. Isolated logic is easier to test."
      }
    },
    {
      level: "medium",
      moduleUnit: "10",
      question: {
        type: "code",
        prompt: "Module 10: Write 2-3 lines with private helper function keeping logic internal.",
        checks: ["private func"],
        sample: "private func validateInput(_ text: String) -> Bool {\n  !text.isEmpty\n}"
      }
    },
    // MODULE 11 EXPANSION COMPLETE: Swift Testing Fundamentals (need 19 more → Total 20)
    {
      level: "advanced",
      moduleUnit: "11",
      question: {
        type: "vocab",
        prompt: "Module 11: What framework provides Swift unit testing?",
        options: ["UITest", "XCTest", "TestKit", "SwiftTest"],
        answer: 1,
        explanation: "XCTest is the standard framework."
      }
    },
    {
      level: "advanced",
      moduleUnit: "11",
      question: {
        type: "tf",
        prompt: "Module 11: True or False: XCTAssert checks test conditions.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. XCTAssert validates expectations."
      }
    },
    {
      level: "advanced",
      moduleUnit: "11",
      question: {
        type: "code",
        prompt: "Module 11: Write 3-5 lines with XCTAssertEqual testing 2 + 2 equals 4.",
        checks: ["xctassertequal", "2 + 2", "4"],
        sample: "func testAddition() {\n  let result = 2 + 2\n  XCTAssertEqual(result, 4)\n}"
      }
    },
    {
      level: "advanced",
      moduleUnit: "11",
      question: {
        type: "vocab",
        prompt: "Module 11: What does TDD stand for?",
        options: ["Test Driven Development", "Type Data Design", "Total Debug Deployment", "None"],
        answer: 0,
        explanation: "TDD writes tests before implementation."
      }
    },
    {
      level: "advanced",
      moduleUnit: "11",
      question: {
        type: "tf",
        prompt: "Module 11: True or False: setUp() runs before each test method.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. setUp() initializes test state."
      }
    },
    {
      level: "advanced",
      moduleUnit: "11",
      question: {
        type: "code",
        prompt: "Module 11: Write 3-4 lines testing array count equals 3.",
        checks: ["xctassertequal", ".count", "3"],
        sample: "func testCount() {\n  let items = [1, 2, 3]\n  XCTAssertEqual(items.count, 3)\n}"
      }
    },
    {
      level: "advanced",
      moduleUnit: "11",
      question: {
        type: "vocab",
        prompt: "Module 11: Which assertion checks for nil?",
        options: ["XCTAssertNil", "XCTAssertNull", "XC TAssertEmpty", "XCTAssertNone"],
        answer: 0,
        explanation: "XCTAssertNil validates nil values."
      }
    },
    {
      level: "advanced",
      moduleUnit: "11",
      question: {
        type: "tf",
        prompt: "Module 11: True or False: tearDown() cleans up after tests.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. tearDown() performs cleanup."
      }
    },
    {
      level: "advanced",
      moduleUnit: "11",
      question: {
        type: "code",
        prompt: "Module 11: Write 3-4 lines testing string isEmpty returns true.",
        checks: ["xctasserttrue", ".isempty"],
        sample: "func testEmpty() {\n  let text = \"\"\n  XCTAssertTrue(text.isEmpty)\n}"
      }
    },
    {
      level: "advanced",
      moduleUnit: "11",
      question: {
        type: "vocab",
        prompt: "Module 11: What tests user interactions in UI?",
        options: ["Unit tests", "UI tests", "Integration tests", "Smoke tests"],
        answer: 1,
        explanation: "UI tests validate interface behavior."
      }
    },
    {
      level: "advanced",
      moduleUnit: "11",
      question: {
        type: "tf",
        prompt: "Module 11: True or False: Test methods must start with 'test'.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. 'test' prefix identifies test methods."
      }
    },
    {
      level: "advanced",
      moduleUnit: "11",
      question: {
        type: "code",
        prompt: "Module 11: Write 2-3 lines testing function throws error.",
        checks: ["xctassertthrowserror"],
        sample: "func testError() {\n  XCTAssertThrowsError(try riskyFunction())\n}"
      }
    },
    {
      level: "advanced",
      moduleUnit: "11",
      question: {
        type: "vocab",
        prompt: "Module 11: Which follows Arrange-Act-Assert pattern?",
        options: ["Test structure", "Error handling", "State management", "UI design"],
        answer: 0,
        explanation: "Arrange-Act-Assert organizes test logic."
      }
    },
    {
      level: "advanced",
      moduleUnit: "11",
      question: {
        type: "tf",
        prompt: "Module 11: True or False: Mocks simulate dependencies in tests.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. Mocks isolate code under test."
      }
    },
    {
      level: "advanced",
      moduleUnit: "11",
      question: {
        type: "code",
        prompt: "Module 11: Write 3-4 lines testing optional is not nil.",
        checks: ["xctassertnotnil"],
        sample: "func testNotNil() {\n  let value: Int? = 10\n  XCTAssertNotNil(value)\n}"
      }
    },
    {
      level: "advanced",
      moduleUnit: "11",
      question: {
        type: "vocab",
        prompt: "Module 11: What measures code covered by tests?",
        options: ["Coverage", "Quality", "Performance", "Complexity"],
        answer: 0,
        explanation: "Test coverage measures code execution."
      }
    },
    {
      level: "advanced",
      moduleUnit: "11",
      question: {
        type: "tf",
        prompt: "Module 11: True or False: XCTAssertFalse checks condition is false.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. XCTAssertFalse validates false conditions."
      }
    },
    {
      level: "advanced",
      moduleUnit: "11",
      question: {
        type: "code",
        prompt: "Module 11: Write 3-4 lines testing ViewModel initialization.",
        checks: ["xctassertequal", "viewmodel"],
        sample: "func testInit() {\n  let vm = ViewModel()\n  XCTAssertEqual(vm.count, 0)\n}"
      }
    },
    {
      level: "advanced",
      moduleUnit: "11",
      question: {
        type: "vocab",
        prompt: "Module 11: Which tests individual functions in isolation?",
        options: ["UI tests", "Unit tests", "Integration tests", "E2E tests"],
        answer: 1,
        explanation: "Unit tests validate individual components."
      }
    },
    // MODULE 12 EXPANSION COMPLETE: Swift Refactoring and Quality (need 17 more → Total 20)
    {
      level: "advanced",
      moduleUnit: "12",
      question: {
        type: "vocab",
        prompt: "Module 12: What improves code without changing behavior?",
        options: ["Adding features", "Refactoring", "Debugging", "Testing"],
        answer: 1,
        explanation: "Refactoring restructures code internally."
      }
    },
    {
      level: "advanced",
      moduleUnit: "12",
      question: {
        type: "tf",
        prompt: "Module 12: True or False: Extract Method creates reusable functions.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. Extracting methods reduces duplication."
      }
    },
    {
      level: "advanced",
      moduleUnit: "12",
      question: {
        type: "code",
        prompt: "Module 12: Write 4-6 lines extracting validation logic into separate function.",
        checks: ["func validate", "bool"],
        sample: "func validate(email: String) -> Bool {\n  email.contains(\"@\") && email.count > 3\n}"
      }
    },
    {
      level: "advanced",
      moduleUnit: "12",
      question: {
        type: "vocab",
        prompt: "Module 12: What principle suggests functions do one thing?",
        options: ["DRY", "Single Responsibility", "KISS", "YAGNI"],
        answer: 1,
        explanation: "Single Responsibility keeps functions focused."
      }
    },
    {
      level: "advanced",
      moduleUnit: "12",
      question: {
        type: "tf",
        prompt: "Module 12: True or False: Magic numbers should become named constants.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. Named constants improve readability."
      }
    },
    {
      level: "advanced",
      moduleUnit: "12",
      question: {
        type: "code",
        prompt: "Module 12: Write 2-3 lines replacing magic number 86400 with constant.",
        checks: ["let", "= 86400"],
        sample: "let secondsPerDay = 86400\nlet days = seconds / secondsPerDay"
      }
    },
    {
      level: "advanced",
      moduleUnit: "12",
      question: {
        type: "vocab",
        prompt: "Module 12: What does DRY stand for?",
        options: ["Don't Repeat Yourself", "Do Right Yesterday", "Debug Run Yield", "None"],
        answer: 0,
        explanation: "DRY avoids code duplication."
      }
    },
    {
      level: "advanced",
      moduleUnit: "12",
      question: {
        type: "tf",
        prompt: "Module 12: True or False: Long functions should be split into smaller ones.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. Smaller functions improve clarity."
      }
    },
    {
      level: "advanced",
      moduleUnit: "12",
      question: {
        type: "code",
        prompt: "Module 12: Write 3-5 lines refactoring nested if into guard.",
        checks: ["guard", "else", "return"],
        sample: "guard let user = getUser() else { return }\nprocess(user)"
      }
    },
    {
      level: "advanced",
      moduleUnit: "12",
      question: {
        type: "vocab",
        prompt: "Module 12: Which improves code readability?",
        options: ["Unclear names", "Comments everywhere", "Clear naming", "Long lines"],
        answer: 2,
        explanation: "Clear naming makes code self-documenting."
      }
    },
    {
      level: "advanced",
      moduleUnit: "12",
      question: {
        type: "tf",
        prompt: "Module 12: True or False: Code reviews catch quality issues early.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. Reviews improve code quality."
      }
    },
    {
      level: "advanced",
      moduleUnit: "12",
      question: {
        type: "code",
        prompt: "Module 12: Write 2-3 lines renaming vague variable 'x' to meaningful name.",
        checks: ["let"],
        sample: "let userCount = users.count // was: let x = users.count"
      }
    },
    {
      level: "advanced",
      moduleUnit: "12",
      question: {
        type: "vocab",
        prompt: "Module 12: What reduces cognitive load when reading code?",
        options: ["Complexity", "Simplicity", "Obscurity", "Verbosity"],
        answer: 1,
        explanation: "Simplicity makes code easier to understand."
      }
    },
    {
      level: "advanced",
      moduleUnit: "12",
      question: {
        type: "tf",
        prompt: "Module 12: True or False: Consistent style improves team productivity.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. Consistency reduces friction."
      }
    },
    {
      level: "advanced",
      moduleUnit: "12",
      question: {
        type: "code",
        prompt: "Module 12: Write 3-4 lines showing early return pattern for validation.",
        checks: ["guard", "return"],
        sample: "func process(_ text: String) {\n  guard !text.isEmpty else { return }\n  // process\n}"
      }
    },
    {
      level: "advanced",
      moduleUnit: "12",
      question: {
        type: "vocab",
        prompt: "Module 12: Which tool enforces style guidelines automatically?",
        options: ["Compiler", "Linter", "Debugger", "Profiler"],
        answer: 1,
        explanation: "Linters check code style."
      }
    },
    {
      level: "advanced",
      moduleUnit: "12",
      question: {
        type: "tf",
        prompt: "Module 12: True or False: Refactoring should have test coverage first.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. Tests ensure refactoring doesn't break behavior."
      }
    },
    // MODULE 13 EXPANSION COMPLETE: Swift Performance and Reliability (need 16 more → Total 20)
    {
      level: "advanced",
      moduleUnit: "13",
      question: {
        type: "vocab",
        prompt: "Module 13: What isolates mutable state in Swift concurrency?",
        options: ["class", "actor", "struct", "enum"],
        answer: 1,
        explanation: "Actors protect state from data races."
      }
    },
    {
      level: "advanced",
      moduleUnit: "13",
      question: {
        type: "tf",
        prompt: "Module 13: True or False: async/await improves concurrent code readability.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. async/await simplifies async code."
      }
    },
    {
      level: "advanced",
      moduleUnit: "13",
      question: {
        type: "code",
        prompt: "Module 13: Write 3-5 lines with async function using Task.",
        checks: ["task", "await"],
        sample: "Task {\n  let data = await fetchData()\n  process(data)\n}"
      }
    },
    {
      level: "advanced",
      moduleUnit: "13",
      question: {
        type: "vocab",
        prompt: "Module 13: Which ensures UI updates happen on main thread?",
        options: ["@Background", "@MainActor", "@Thread", "@UI"],
        answer: 1,
        explanation: "@MainActor runs code on main thread."
      }
    },
    {
      level: "advanced",
      moduleUnit: "13",
      question: {
        type: "tf",
        prompt: "Module 13: True or False: Value types avoid shared mutable state.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. Structs copy on assignment."
      }
    },
    {
      level: "advanced",
      moduleUnit: "13",
      question: {
        type: "code",
        prompt: "Module 13: Write 3-4 lines with actor protecting count property.",
        checks: ["actor", "var count"],
        sample: "actor Counter {\n  var count = 0\n  func increment() { count += 1 }\n}"
      }
    },
    {
      level: "advanced",
      moduleUnit: "13",
      question: {
        type: "vocab",
        prompt: "Module 13: What tool measures app performance?",
        options: ["Debugger", "Instruments", "Console", "Navigator"],
        answer: 1,
        explanation: "Instruments profiles performance."
      }
    },
    {
      level: "advanced",
      moduleUnit: "13",
      question: {
        type: "tf",
        prompt: "Module 13: True or False: Lazy variables defer initialization.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. lazy delays computation."
      }
    },
    {
      level: "advanced",
      moduleUnit: "13",
      question: {
        type: "code",
        prompt: "Module 13: Write 2-3 lines with lazy var for expensive computation.",
        checks: ["lazy var"],
        sample: "lazy var processedData = expensiveComputation()"
      }
    },
    {
      level: "advanced",
      moduleUnit: "13",
      question: {
        type: "vocab",
        prompt: "Module 13: What causes memory leaks with closures?",
        options: ["Strong references", "Retain cycles", "Weak self", "All above"],
        answer: 1,
        explanation: "Retain cycles prevent deallocation."
      }
    },
    {
      level: "advanced",
      moduleUnit: "13",
      question: {
        type: "tf",
        prompt: "Module 13: True or False: [weak self] prevents capture cycles.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. weak breaks strong references."
      }
    },
    {
      level: "advanced",
      moduleUnit: "13",
      question: {
        type: "code",
        prompt: "Module 13: Write 3-4 lines with closure avoiding retain cycle.",
        checks: ["[weak self]"],
        sample: "service.load { [weak self] data in\n  self?.update(data)\n}"
      }
    },
    {
      level: "advanced",
      moduleUnit: "13",
      question: {
        type: "vocab",
        prompt: "Module 13: Which reduces memory usage for large collections?",
        options: ["Copy all", "Lazy sequences", "Force unwrap", "Global vars"],
        answer: 1,
        explanation: "Lazy sequences defer computation."
      }
    },
    {
      level: "advanced",
      moduleUnit: "13",
      question: {
        type: "tf",
        prompt: "Module 13: True or False: Task cancellation should be checked.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. Check Task.isCancelled."
      }
    },
    {
      level: "advanced",
      moduleUnit: "13",
      question: {
        type: "code",
        prompt: "Module 13: Write 3-4 lines checking task cancellation.",
        checks: ["task.iscancelled", "return"],
        sample: "if Task.isCancelled { return }\nawait processNext()"
      }
    },
    {
      level: "advanced",
      moduleUnit: "13",
      question: {
        type: "vocab",
        prompt: "Module 13: What pattern handles errors in async code?",
        options: ["Ignore", "do-catch", "Force try", "Print"],
        answer: 1,
        explanation: "do-catch handles async errors."
      }
    },
    {
      level: "advanced",
      moduleUnit: "13",
      question: {
        type: "tf",
        prompt: "Module 13: True or False: Immutable data is thread-safe.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. Immutable values prevent races."
      }
    },
    // MODULE 14 FINAL EXPANSION: Swift Real-World Scenarios (need 4 more → Total 20)
    {
      level: "advanced",
      moduleUnit: "14",
      question: {
        type: "vocab",
        prompt: "Module 14: What pattern improves app architecture?",
        options: ["God object", "MVVM", "Global state", "Hardcoding"],
        answer: 1,
        explanation: "MVVM separates concerns properly."
      }
    },
    {
      level: "advanced",
      moduleUnit: "14",
      question: {
        type: "tf",
        prompt: "Module 14: True or False: Error handling improves app reliability.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. Proper error handling prevents crashes."
      }
    },
    {
      level: "advanced",
      moduleUnit: "14",
      question: {
        type: "code",
        prompt: "Module 14: Write 4-6 lines with do-catch handling network errors.",
        checks: ["do", "try await", "catch"],
        sample: "do {\n  let data = try await network.fetch()\n  process(data)\n} catch {\n  handleError(error)\n}"
      }
    },
    {
      level: "advanced",
      moduleUnit: "14",
      question: {
        type: "vocab",
        prompt: "Module 14: Which improves production code quality?",
        options: ["No validation", "Logging + monitoring", "Ignoring errors", "Hard-coded values"],
        answer: 1,
        explanation: "Logging and monitoring enable debugging."
      }
    },
    {
      level: "advanced",
      moduleUnit: "14",
      question: {
        type: "tf",
        prompt: "Module 14: True or False: Graceful degradation handles failures safely.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. Apps should handle failures gracefully."
      }
    },
    {
      level: "advanced",
      moduleUnit: "14",
      question: {
        type: "code",
        prompt: "Module 14: Write 3-5 lines with retry logic for failed operations.",
        checks: ["for", "in", "try"],
        sample: "for attempt in 1...3 {\n  if try? operation() != nil { break }\n  await Task.sleep(1_000_000_000)\n}"
      }
    },
    {
      level: "advanced",
      moduleUnit: "14",
      question: {
        type: "vocab",
        prompt: "Module 14: What validates user input before processing?",
        options: ["Skip validation", "Input validation", "Force unwrap", "Ignore errors"],
        answer: 1,
        explanation: "Input validation prevents bad data."
      }
    },
    {
      level: "advanced",
      moduleUnit: "14",
      question: {
        type: "tf",
        prompt: "Module 14: True or False: Production apps need error boundaries.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. Error boundaries contain failures."
      }
    },
    {
      level: "advanced",
      moduleUnit: "14",
      question: {
        type: "code",
        prompt: "Module 14: Write 3-4 lines validating email contains @ symbol.",
        checks: ["func", "validate", ".contains("],
        sample: "func validateEmail(_ email: String) -> Bool {\n  email.contains(\"@\") && email.count >= 5\n}"
      }
    },
    {
      level: "advanced",
      moduleUnit: "14",
      question: {
        type: "vocab",
        prompt: "Module 14: Which tracks app health in production?",
        options: ["Print statements", "Analytics + crash reporting", "Comments", "Nothing"],
        answer: 1,
        explanation: "Analytics and crash reporting monitor health."
      }
    },
    {
      level: "advanced",
      moduleUnit: "14",
      question: {
        type: "tf",
        prompt: "Module 14: True or False: Loading states improve user experience.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. Users need feedback during async operations."
      }
    },
    {
      level: "advanced",
      moduleUnit: "14",
      question: {
        type: "code",
        prompt: "Module 14: Write 3-5 lines showing loading/success/error states enum.",
        checks: ["enum", "case loading", "case success", "case error"],
        sample: "enum ViewState {\n  case loading\n  case success(Data)\n  case error(Error)\n}"
      }
    }
  ];

  moduleSpecific.forEach(({ level, moduleUnit, question }) => {
    if (!Array.isArray(swiftSet[level])) {
      return;
    }

    swiftSet[level].push({
      ...question,
      moduleUnit,
      moduleUnits: [moduleUnit]
    });
  });
}

injectSwiftModuleSpecificQuestions();

function buildSwiftModuleGeneratedQuestion(moduleUnit, questionNumber, concept, variant) {
  const unit = String(moduleUnit);
  const moduleLabel = `Module ${unit}`;
  const templateTypeCycle = unit === "8" || unit === "9" || unit === "10"
    ? ["output", "vocab", "tf"]
    : ["vocab", "tf", "output"];
  const templateType = templateTypeCycle[(questionNumber - 1) % templateTypeCycle.length];

  if (templateType === "tf") {
    return {
      type: "tf",
      prompt: `SwiftUI ${moduleLabel} Practice ${questionNumber} (Set ${variant}): True or False: ${concept.statement}`,
      options: ["True", "False"],
      answer: concept.truthy ? 0 : 1,
      explanation: concept.explanation
    };
  }

  if (templateType === "output") {
    const seedA = (questionNumber % 7) + 2;
    const seedB = (variant % 5) + 1;
    if (unit === "2") {
      return {
        type: "output",
        prompt: `SwiftUI ${moduleLabel} Practice ${questionNumber} (Set ${variant}): What prints? \`let nickname: String? = nil; print(nickname ?? "Guest${seedA}")\``,
        options: [`Guest${seedA}`, "nil", "nickname", `Guest${seedB}`],
        answer: 0,
        explanation: "Nil-coalescing (??) returns the fallback string when the optional is nil."
      };
    }
    if (unit === "4" || unit === "9") {
      return {
        type: "output",
        prompt: `SwiftUI ${moduleLabel} Practice ${questionNumber} (Set ${variant}): If isOn is ${seedA % 2 === 0 ? "true" : "false"}, what does \`Text(isOn ? "On" : "Off")\` show?`,
        options: [seedA % 2 === 0 ? "On" : "Off", seedA % 2 === 0 ? "Off" : "On", "true", "nil"],
        answer: 0,
        explanation: "The ternary expression selects the matching branch for the current boolean state."
      };
    }
    return {
      type: "output",
      prompt: `SwiftUI ${moduleLabel} Practice ${questionNumber} (Set ${variant}): What prints? \`let a = ${seedA}; let b = ${seedB}; print(a + b)\``,
      options: [String(seedA + seedB), String(seedA * seedB), String(seedA), String(seedB)],
      answer: 0,
      explanation: "The print statement outputs the sum of a and b."
    };
  }

  return {
    type: "vocab",
    prompt: `SwiftUI ${moduleLabel} Practice ${questionNumber} (Set ${variant}): Which statement is most accurate about ${concept.term}?`,
    options: [
      concept.correct,
      concept.distractors[0],
      concept.distractors[1],
      concept.distractors[2]
    ],
    answer: 0,
    explanation: concept.explanation
  };
}

function ensureSwiftModuleQuestionTarget(targetPerModule = 50) {
  const swiftSet = questionSets.swift;
  if (!swiftSet || !Number.isFinite(targetPerModule) || targetPerModule <= 0) {
    return;
  }

  const moduleLevelMap = {
    "1": "beginner",
    "2": "beginner",
    "3": "beginner",
    "4": "beginner",
    "5": "medium",
    "6": "medium",
    "7": "medium",
    "8": "medium",
    "9": "medium",
    "10": "medium",
    "11": "advanced",
    "12": "advanced",
    "13": "advanced",
    "14": "advanced"
  };

  const moduleConceptBanks = {
    "1": [
      { term: "let and var", correct: "`let` is immutable and `var` is mutable.", distractors: ["`let` is mutable and `var` is immutable.", "Both always infer to optional types.", "Both are only valid inside classes."], statement: "`let` creates constants and `var` creates mutable values in Swift.", truthy: true, explanation: "Swift uses let for constants and var for variables." },
      { term: "type inference", correct: "Swift infers types from assigned values when possible.", distractors: ["Swift requires explicit types in every declaration.", "Type inference only works in SwiftUI views.", "Type inference is disabled when using print."], statement: "Swift can infer the type of a value from its initializer.", truthy: true, explanation: "Type inference reduces boilerplate while preserving type safety." },
      { term: "String interpolation", correct: "Use `\\(value)` inside a string to embed expressions.", distractors: ["Use `${value}` inside a string.", "Use `%value` in every string.", "Interpolation is only available for Int values."], statement: "Swift string interpolation uses \\(expression) syntax.", truthy: true, explanation: "Interpolation embeds evaluated expressions into strings." },
      { term: "Bool", correct: "`Bool` stores true/false values.", distractors: ["`Bool` stores decimal values.", "`Bool` is the same as `String`.", "`Bool` is only for SwiftUI previews."], statement: "`Bool` is the Swift type for true or false.", truthy: true, explanation: "Bool is the boolean type in Swift." },
      { term: "Int", correct: "`Int` represents whole numbers.", distractors: ["`Int` represents fractional values only.", "`Int` is only valid in arrays.", "`Int` is deprecated in Swift."], statement: "`Int` is used for whole number arithmetic.", truthy: true, explanation: "Use Int for integer values in Swift." }
    ],
    "2": [
      { term: "optional types", correct: "An optional may hold a value or nil.", distractors: ["Optionals can never be nil.", "Optionals are only for strings.", "Optionals force unwrap automatically."], statement: "A value declared as `String?` can be nil.", truthy: true, explanation: "Optional syntax (`?`) indicates the value may be missing." },
      { term: "if let", correct: "`if let` safely unwraps optionals inside a scoped block.", distractors: ["`if let` force unwraps and crashes on nil.", "`if let` is only for arrays.", "`if let` converts any type to string."], statement: "`if let` creates a non-optional constant when unwrapping succeeds.", truthy: true, explanation: "if let safely binds non-nil optional values." },
      { term: "guard let", correct: "`guard let` exits early when unwrapping fails.", distractors: ["`guard let` ignores nil values and continues.", "`guard let` can only be used in classes.", "`guard let` replaces all switch statements."], statement: "`guard let` supports early exits for clearer control flow.", truthy: true, explanation: "guard is commonly used for fail-fast validation." },
      { term: "nil-coalescing", correct: "`??` provides a fallback when an optional is nil.", distractors: ["`??` compares two booleans.", "`??` unwraps arrays only.", "`??` forces a runtime crash on nil."], statement: "The nil-coalescing operator returns the fallback value when needed.", truthy: true, explanation: "Use `optional ?? fallback` to supply defaults." },
      { term: "force unwrap", correct: "`!` should be used carefully because nil will crash.", distractors: ["`!` is always safe with any optional.", "`!` turns every value into Bool.", "`!` is required for String interpolation."], statement: "Force unwrapping a nil optional causes a runtime crash.", truthy: true, explanation: "Prefer safe unwrapping unless you're certain the value exists." }
    ],
    "3": [
      { term: "source of truth", correct: "Keep one owner for mutable state and derive other values.", distractors: ["Duplicate mutable state in all child views.", "Use global variables for every view.", "Avoid state in SwiftUI entirely."], statement: "A single source of truth reduces inconsistent UI updates.", truthy: true, explanation: "One authoritative state owner keeps data flow predictable." },
      { term: "@State", correct: "`@State` stores local mutable state for a SwiftUI view.", distractors: ["`@State` persists data to disk automatically.", "`@State` is only for networking calls.", "`@State` can only hold strings."], statement: "`@State` is intended for view-local state.", truthy: true, explanation: "@State is a property wrapper for local state." },
      { term: "@Binding", correct: "`@Binding` lets child views read and write parent-owned state.", distractors: ["`@Binding` creates independent state copies.", "`@Binding` can only be read-only.", "`@Binding` is a testing-only feature."], statement: "`@Binding` creates a two-way connection to external state.", truthy: true, explanation: "Bindings enable controlled mutation from child views." },
      { term: "derived values", correct: "Compute display values from state instead of duplicating them.", distractors: ["Store every derived value in separate mutable properties.", "Derived values should ignore source state.", "Derived values are only for async code."], statement: "Derived values should be recomputed from source state.", truthy: true, explanation: "Derivation prevents drift between duplicated values." },
      { term: "state updates", correct: "State updates should happen through clear, intentional actions.", distractors: ["Update state from random background threads without coordination.", "Mutate state in every computed property.", "Avoid changing state after initialization."], statement: "Clear update pathways make UI behavior easier to debug.", truthy: true, explanation: "Predictable updates reduce accidental side effects." }
    ],
    "4": [
      { term: "VStack", correct: "`VStack` arranges child views vertically.", distractors: ["`VStack` arranges child views in depth order.", "`VStack` is only for lists with sections.", "`VStack` requires explicit Auto Layout constraints."], statement: "`VStack` stacks subviews top-to-bottom.", truthy: true, explanation: "Use VStack for vertical layout composition." },
      { term: "HStack", correct: "`HStack` arranges child views horizontally.", distractors: ["`HStack` overlaps views by default.", "`HStack` can only hold two views.", "`HStack` is only available on macOS."], statement: "`HStack` lays out views left-to-right.", truthy: true, explanation: "Use HStack for horizontal arrangements." },
      { term: "ZStack", correct: "`ZStack` layers views on top of each other.", distractors: ["`ZStack` forces equal widths automatically.", "`ZStack` can only contain images.", "`ZStack` is deprecated in SwiftUI."], statement: "`ZStack` supports overlay-style compositions.", truthy: true, explanation: "ZStack is useful for layered interfaces." },
      { term: "modifiers", correct: "SwiftUI modifiers return new configured views.", distractors: ["Modifiers mutate views in place only.", "Only one modifier is allowed per view.", "Modifiers work only on Text views."], statement: "SwiftUI modifiers are chained to transform view configuration.", truthy: true, explanation: "Modifiers create declarative, composable UI changes." },
      { term: "view composition", correct: "Break large screens into reusable smaller views.", distractors: ["Put all screen logic in one giant body.", "Avoid extracting reusable components.", "Reusable views are not supported in SwiftUI."], statement: "Composed views improve readability and reuse.", truthy: true, explanation: "Small view components are easier to reason about and test." }
    ],
    "5": [
      { term: "compiler errors", correct: "Fix top compiler errors first because later errors may cascade.", distractors: ["Ignore compiler errors and run anyway.", "Fix random lines first.", "Compiler errors never affect runtime behavior."], statement: "One compile fix can clear many downstream errors.", truthy: true, explanation: "Compiler diagnostics often cascade from the first real issue." },
      { term: "mutability bugs", correct: "Use `var` when mutation is required, not `let`.", distractors: ["Always use `let`, even when incrementing counters.", "`var` is invalid in Swift.", "Mutability has no impact on compile behavior."], statement: "Trying to mutate a `let` constant causes a compile error.", truthy: true, explanation: "Constants cannot be reassigned in Swift." },
      { term: "type mismatch", correct: "Match expected types at assignment and function boundaries.", distractors: ["Swift auto-converts every type without checks.", "Type mismatches only matter in tests.", "Type mismatch errors can be ignored."], statement: "Type mismatches are a common source of Swift compile failures.", truthy: true, explanation: "Strong typing catches incompatibilities early." },
      { term: "increment logic", correct: "Use `+=` or reassignment when changing counters.", distractors: ["`count + 1` mutates count automatically.", "Counters only update inside print statements.", "Incrementing is unsupported in Swift."], statement: "`count + 1` alone does not persist a new value.", truthy: true, explanation: "You must assign the computed value back to the variable." },
      { term: "small repro", correct: "Create minimal failing examples to isolate bugs quickly.", distractors: ["Debug only in the full app every time.", "Add random fixes until it compiles.", "Avoid reducing context when debugging."], statement: "Minimal repros make root causes easier to identify.", truthy: true, explanation: "Smaller test cases reduce noise while debugging." }
    ],
    "6": [
      { term: "@State updates", correct: "Update state inside event handlers using assignment.", distractors: ["Use expressions without assignment to change state.", "Never mutate @State values.", "@State updates only in previews."], statement: "`count += 1` changes @State; `count + 1` does not.", truthy: true, explanation: "State must be assigned a new value to trigger updates." },
      { term: "binding flow", correct: "Use bindings for controlled child write access to parent state.", distractors: ["Pass copied values when child must edit parent state.", "Bindings are read-only.", "Bindings replace all view models."], statement: "Bindings help synchronize parent and child state.", truthy: true, explanation: "@Binding expresses two-way relationships intentionally." },
      { term: "main-thread UI", correct: "UI state updates should occur on the main actor.", distractors: ["UI updates should prefer background threads.", "Threading never matters in SwiftUI.", "Main actor is only for tests."], statement: "Main-thread updates avoid UI consistency issues.", truthy: true, explanation: "SwiftUI expects UI-related mutations on the main actor." },
      { term: "preview troubleshooting", correct: "Use small preview data to debug rendering quickly.", distractors: ["Previews should always call live production APIs.", "Previews cannot simulate different states.", "Previews are unrelated to UI debugging."], statement: "Preview states can reveal layout/state issues early.", truthy: true, explanation: "Multiple preview states are useful for fast iteration." },
      { term: "state ownership", correct: "Keep one owner for mutable state and pass bindings when needed.", distractors: ["Every child should own duplicate mutable state.", "State ownership is irrelevant in SwiftUI.", "Only global singletons should hold state."], statement: "Clear ownership reduces update conflicts.", truthy: true, explanation: "Explicit state ownership keeps data flow predictable." }
    ],
    "7": [
      { term: "debug workflow", correct: "Reproduce, isolate, fix, verify, and regress-test.", distractors: ["Apply random edits and hope for a fix.", "Skip verification after the first pass.", "Avoid writing down root causes."], statement: "A repeatable debug loop improves fix quality.", truthy: true, explanation: "Systematic debugging reduces recurring issues." },
      { term: "root cause", correct: "Document root cause and fix path for future reference.", distractors: ["Only patch symptoms and move on.", "Never record debugging notes.", "Root causes are unnecessary if tests pass once."], statement: "Root-cause notes strengthen future debugging speed.", truthy: true, explanation: "Documented context helps prevent repeated mistakes." },
      { term: "regression checks", correct: "Retest related behavior after fixing a bug.", distractors: ["Retest only the exact failing line.", "Regression testing is optional for all fixes.", "Fixes cannot impact nearby logic."], statement: "Regression checks help catch side effects.", truthy: true, explanation: "A bug fix can impact adjacent behavior." },
      { term: "computed properties", correct: "Keep computed properties side-effect free and deterministic.", distractors: ["Mutate global state in computed properties.", "Perform heavy network calls in computed properties.", "Computed properties should ignore state changes."], statement: "Computed properties should avoid hidden side effects.", truthy: true, explanation: "Pure computed logic is easier to debug and reason about." },
      { term: "naming for clarity", correct: "Descriptive names reduce misunderstanding during debugging.", distractors: ["One-letter names are best for all code.", "Naming has no effect on maintenance.", "Reuse vague names across unrelated contexts."], statement: "Clear naming helps trace logic faster.", truthy: true, explanation: "Readable identifiers improve code review and fixes." }
    ],
    "8": [
      { term: "print tracing", correct: "Trace variable transitions before and after transformations.", distractors: ["Print once at startup and stop.", "Never inspect intermediate values.", "Output tracing is unrelated to logic errors."], statement: "Output tracing reveals where values diverge from expectation.", truthy: true, explanation: "Strategic tracing is useful for reasoning about execution." },
      { term: "arithmetic flow", correct: "Evaluate expressions in order and verify each step.", distractors: ["Guess arithmetic output without checking operators.", "Operator precedence never matters.", "Arithmetic output is random in Swift."], statement: "Stepwise evaluation improves prediction accuracy.", truthy: true, explanation: "Breaking expressions into steps reduces mistakes." },
      { term: "array output", correct: "Index and first/last access determine printed values.", distractors: ["Array prints are always the count.", "first/last are only for strings.", "Array output ignores indexes."], statement: "Understanding array access helps predict output.", truthy: true, explanation: "Array APIs produce specific values based on access methods." },
      { term: "condition output", correct: "Boolean conditions choose control-flow branches.", distractors: ["Conditions do not affect output.", "if statements always run both branches.", "Swift has no boolean branches."], statement: "Control flow directly affects printed output.", truthy: true, explanation: "Branching determines which statements execute." },
      { term: "string interpolation output", correct: "Interpolated expressions are evaluated before printing.", distractors: ["Interpolation prints placeholders literally.", "Interpolation works only with Int.", "Interpolation cannot include expressions."], statement: "Interpolation output reflects evaluated expression values.", truthy: true, explanation: "Swift evaluates expressions inside interpolation syntax." }
    ],
    "9": [
      { term: "ternary rendering", correct: "Ternary expressions choose one view/text branch.", distractors: ["Ternary expressions render both branches.", "Ternary cannot be used in SwiftUI.", "Ternary always returns Bool."], statement: "A SwiftUI ternary returns one branch based on condition value.", truthy: true, explanation: "This is common for concise conditional UI." },
      { term: "state-driven text", correct: "Text labels should derive from current state.", distractors: ["Hard-code labels and ignore state.", "State is irrelevant for Text.", "Text updates only after app restart."], statement: "SwiftUI text output should reflect current state.", truthy: true, explanation: "Declarative UI derives visible output from state." },
      { term: "conditional views", correct: "if/switch in view bodies control what is rendered.", distractors: ["if/switch are invalid in SwiftUI bodies.", "All conditional branches render together.", "Conditional rendering requires UIKit only."], statement: "Conditional blocks can render different SwiftUI views.", truthy: true, explanation: "SwiftUI supports declarative conditional rendering." },
      { term: "list output", correct: "ForEach output depends on data collection values.", distractors: ["ForEach ignores data and prints placeholders.", "ForEach always renders exactly one row.", "ForEach cannot render Text rows."], statement: "ForEach generates output from each data element.", truthy: true, explanation: "Collection-driven rendering is central in SwiftUI." },
      { term: "toggle state", correct: "Toggle-driven booleans can switch visible text or style.", distractors: ["Toggle state cannot drive text output.", "Toggle values are strings only.", "Toggles require manual UI mutation APIs."], statement: "Toggle changes should immediately affect dependent UI output.", truthy: true, explanation: "SwiftUI recomputes body when observed state changes." }
    ],
    "10": [
      { term: "declarative architecture", correct: "Describe UI from state rather than imperative mutation steps.", distractors: ["Manually mutate every view property directly.", "Avoid modeling state explicitly.", "Disable type safety for faster UI."], statement: "SwiftUI architecture is declarative and state-driven.", truthy: true, explanation: "Declarative design improves predictability and reuse." },
      { term: "state models", correct: "Model loading/success/error states explicitly.", distractors: ["Use one string for all app states.", "Skip error states in production UIs.", "State models are unnecessary in SwiftUI."], statement: "Explicit states reduce ambiguous UI behavior.", truthy: true, explanation: "State modeling clarifies transitions and rendering." },
      { term: "modular views", correct: "Split large views into reusable focused components.", distractors: ["Keep all code in one massive body.", "Reuse should be avoided for clarity.", "Only UIKit supports componentization."], statement: "Reusable view modules improve maintainability.", truthy: true, explanation: "Smaller components are easier to test and evolve." },
      { term: "data flow", correct: "Pass data down and events up through explicit boundaries.", distractors: ["Use hidden globals for all updates.", "Allow every view to mutate all shared state.", "Avoid parent-child data contracts."], statement: "Clear data flow improves architecture quality.", truthy: true, explanation: "Explicit boundaries reduce unintended coupling." },
      { term: "integration mindset", correct: "Combine syntax, state, and layout concepts in cohesive features.", distractors: ["Learn concepts in isolation and never integrate.", "Architecture only matters after deployment.", "Ignore feature-level composition patterns."], statement: "Integrated practice builds real SwiftUI proficiency.", truthy: true, explanation: "Production apps require coordinated skills, not isolated snippets." }
    ],
    "11": [
      { term: "XCTest", correct: "XCTest is the standard unit-testing framework in Swift.", distractors: ["SwiftUI is the unit-testing framework.", "UIKit replaces test frameworks.", "Testing in Swift requires third-party tools only."], statement: "XCTest is commonly used for Swift unit tests.", truthy: true, explanation: "XCTest ships with Apple's development tooling." },
      { term: "arrange-act-assert", correct: "Tests are clearer when setup, action, and assertions are explicit.", distractors: ["Combine all test logic into one unreadable block.", "Assertions are optional for good tests.", "Tests should avoid deterministic inputs."], statement: "Arrange-act-assert structure improves test readability.", truthy: true, explanation: "Clear structure makes tests easier to maintain." },
      { term: "deterministic tests", correct: "Stable test data helps keep tests repeatable and reliable.", distractors: ["Random data should drive all unit tests.", "Determinism is unnecessary in CI.", "Tests should depend on live network by default."], statement: "Deterministic tests reduce flaky failures.", truthy: true, explanation: "Repeatable inputs make failures actionable." },
      { term: "assertions", correct: "Assertions verify expected outputs and side effects.", distractors: ["Assertions are only for UI screenshots.", "Assertions should be skipped in fast tests.", "Assertions hide logic bugs."], statement: "Assertions are core to automated test confidence.", truthy: true, explanation: "Without assertions, tests cannot verify behavior." },
      { term: "test boundaries", correct: "Unit tests should focus on small isolated behavior.", distractors: ["Every unit test should boot the full app.", "Unit tests must always call production APIs.", "Isolation makes tests less useful."], statement: "Isolated unit tests identify failures quickly.", truthy: true, explanation: "Smaller scopes improve diagnosis speed." }
    ],
    "12": [
      { term: "refactoring", correct: "Refactoring improves structure without changing intended behavior.", distractors: ["Refactoring means adding random new features.", "Refactoring should always alter external behavior.", "Refactoring is only formatting."], statement: "Behavior-preserving change is a key refactoring principle.", truthy: true, explanation: "Refactoring targets maintainability and clarity." },
      { term: "code smells", correct: "Duplicate logic and long methods signal refactoring opportunities.", distractors: ["Duplicate logic improves reliability.", "Long methods are always better.", "Code smells are compile errors only."], statement: "Code smells indicate potential maintainability problems.", truthy: true, explanation: "Smells guide where to improve design." },
      { term: "naming clarity", correct: "Clear names make code intent easier to review and change.", distractors: ["Vague names improve flexibility.", "Naming has no impact on quality.", "Only comments should express intent."], statement: "Improving naming is a valuable refactoring step.", truthy: true, explanation: "Readable identifiers reduce cognitive load." },
      { term: "small functions", correct: "Smaller focused functions are easier to test and reason about.", distractors: ["Single huge functions are always better.", "Function size has no effect on readability.", "Small functions cannot express complex behavior."], statement: "Function extraction helps isolate responsibilities.", truthy: true, explanation: "Separation of concerns improves maintainability." },
      { term: "safe refactor flow", correct: "Use tests before and after refactors to confirm behavior.", distractors: ["Refactor without tests for maximum speed.", "Tests should be removed before refactoring.", "Refactors never need verification."], statement: "Tests reduce regression risk during refactoring.", truthy: true, explanation: "Verification is essential for safe structural change." }
    ],
    "13": [
      { term: "actors", correct: "Actors isolate mutable state across concurrency boundaries.", distractors: ["Actors are only for UI styling.", "Actors replace every protocol.", "Actors disable async/await."], statement: "Actors help reduce data races in concurrent Swift code.", truthy: true, explanation: "Actor isolation enforces serialized access to mutable state." },
      { term: "Task cancellation", correct: "Check cancellation and exit early for responsive async flows.", distractors: ["Ignore cancellation in all async tasks.", "Cancellation only matters in tests.", "Cancelled tasks should continue heavy work."], statement: "Cancellation handling improves responsiveness and resource usage.", truthy: true, explanation: "Cooperative cancellation avoids wasted work." },
      { term: "performance profiling", correct: "Profile bottlenecks before optimizing implementation details.", distractors: ["Always optimize blindly first.", "Profiling is unnecessary for Swift apps.", "Performance issues cannot be measured."], statement: "Evidence-driven optimization is more reliable than guesswork.", truthy: true, explanation: "Profilers reveal real hotspots." },
      { term: "memory discipline", correct: "Avoid unnecessary allocations in hot paths.", distractors: ["Allocate freely in tight loops without measurement.", "Memory usage never impacts performance.", "ARC removes all memory concerns."], statement: "Allocation patterns can impact runtime performance.", truthy: true, explanation: "Efficient memory behavior supports reliability and speed." },
      { term: "reliability", correct: "Graceful error handling and retries improve reliability.", distractors: ["Crash on every network error.", "Retry forever without limits.", "Reliability is unrelated to error paths."], statement: "Reliability depends on controlled failure handling.", truthy: true, explanation: "Predictable recovery improves production behavior." }
    ],
    "14": [
      { term: "production readiness", correct: "Production apps need validation, logging, and resilient error handling.", distractors: ["Production apps should skip validation for speed.", "Logging is only useful during development.", "Crash reports are unnecessary after launch."], statement: "Operational safeguards are essential in real-world apps.", truthy: true, explanation: "Production readiness includes observability and safety checks." },
      { term: "MVVM boundaries", correct: "Separate view rendering from business and data coordination.", distractors: ["Put all logic in views only.", "Use one global object for all concerns.", "Architecture boundaries reduce performance automatically."], statement: "Clear boundaries improve maintainability in larger SwiftUI apps.", truthy: true, explanation: "Separation of concerns helps scaling and testing." },
      { term: "error UX", correct: "User-friendly error states should guide recovery actions.", distractors: ["Hide all failures from users.", "Show raw stack traces in production UI.", "Errors should always close the app."], statement: "Error UX should provide clear next steps.", truthy: true, explanation: "Helpful messaging improves real-world usability." },
      { term: "observability", correct: "Metrics and crash reporting support faster production diagnosis.", distractors: ["Observability is unnecessary after launch.", "Only local prints are needed in production.", "Metrics replace all testing."], statement: "Observability shortens incident detection and resolution time.", truthy: true, explanation: "Operational signals are key in real deployments." },
      { term: "release discipline", correct: "Use staged rollout and monitoring after release.", distractors: ["Ship globally without checks every time.", "Ignore post-release telemetry.", "Versioning and notes are optional in production."], statement: "Post-release monitoring helps catch issues early.", truthy: true, explanation: "Release discipline reduces user impact from regressions." }
    ]
  };

  const existingPromptKeys = new Set();
  const moduleCounts = {
    "1": 0, "2": 0, "3": 0, "4": 0, "5": 0, "6": 0, "7": 0,
    "8": 0, "9": 0, "10": 0, "11": 0, "12": 0, "13": 0, "14": 0
  };

  ["beginner", "medium", "advanced"].forEach((levelKey) => {
    const list = Array.isArray(swiftSet[levelKey]) ? swiftSet[levelKey] : [];
    list.forEach((question) => {
      if (!question || typeof question !== "object") {
        return;
      }

      const promptKey = normalizePromptForUniqueness(question.prompt);
      if (promptKey) {
        existingPromptKeys.add(promptKey);
      }

      const unit = question.moduleUnit ? String(question.moduleUnit) : "";
      if (unit && Object.prototype.hasOwnProperty.call(moduleCounts, unit)) {
        moduleCounts[unit] += 1;
      }
    });
  });

  Object.keys(moduleCounts).forEach((moduleUnit) => {
    const levelKey = moduleLevelMap[moduleUnit];
    if (!levelKey || !Array.isArray(swiftSet[levelKey])) {
      return;
    }

    const conceptBank = moduleConceptBanks[moduleUnit] || moduleConceptBanks["1"];
    let safety = 0;

    while (moduleCounts[moduleUnit] < targetPerModule && safety < targetPerModule * 20) {
      const questionNumber = moduleCounts[moduleUnit] + 1;
      const concept = conceptBank[(questionNumber - 1) % conceptBank.length];
      const variant = Math.floor((questionNumber - 1) / conceptBank.length) + 1;
      const generatedQuestion = buildSwiftModuleGeneratedQuestion(moduleUnit, questionNumber, concept, variant);
      const promptKey = normalizePromptForUniqueness(generatedQuestion.prompt);
      safety += 1;

      if (!promptKey || existingPromptKeys.has(promptKey)) {
        continue;
      }

      swiftSet[levelKey].push({
        ...generatedQuestion,
        moduleUnit,
        moduleUnits: [moduleUnit]
      });

      existingPromptKeys.add(promptKey);
      moduleCounts[moduleUnit] += 1;
    }
  });
}

ensureSwiftModuleQuestionTarget(60);

const minimumQuestionsPerLanguage = 420;
const minimumQuestionsPerStructuredTrack = 420;
const coreLanguageTopics = ["swift", "web", "react", "python", "typescript", "java", "kotlin", "markdown", "csharp", "sql", "go", "rust", "cpp", "php", "dart", "bash"];
const structuredTrackTopics = ["sourcecontrol", "ides", "cloudkit", "firebase", "aiassist"];
const topicDisplayNames = {
  swift: "Swift + SwiftUI",
  web: "HTML + CSS + JavaScript",
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
  dart: "Dart + Flutter",
  bash: "Bash / Shell",
  sourcecontrol: "Source Control",
  ides: "IDEs",
  cloudkit: "CloudKit",
  firebase: "Firebase",
  aiassist: "AI Coding Assistants"
};

function normalizePromptForUniqueness(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/^\[[^\]]+\]\s*/g, "")
    .replace(/^module\s*\d+\s*:\s*/g, "")
    .replace(/^swiftui\s*module\s*\d+\s*\([^)]*\)\s*:\s*/g, "")
    .replace(/\b(q|question|quiz)\s*\d+\b/g, "")
    .replace(/\b\d+\b/g, "#")
    .replace(/["'`]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

const moduleBucketsByQuestionShape = {
  beginner: ["1", "2", "3", "4"],
  debug: ["5", "6", "7"],
  output: ["8", "9", "10"],
  advanced: ["11", "12", "13", "14"]
};

function resolveQuestionModuleBucket(levelKey, questionType) {
  if (questionType === "debug") {
    return moduleBucketsByQuestionShape.debug;
  }
  if (questionType === "output") {
    return moduleBucketsByQuestionShape.output;
  }
  if (levelKey === "beginner") {
    return moduleBucketsByQuestionShape.beginner;
  }
  if (levelKey === "advanced") {
    return moduleBucketsByQuestionShape.advanced;
  }
  return moduleBucketsByQuestionShape.debug;
}

function assignDeterministicQuestionModule(topicKey, levelKey, question, questionIndex = 0) {
  const explicitUnits = Array.isArray(question && question.moduleUnits)
    ? question.moduleUnits.map((value) => String(value)).filter(Boolean)
    : [];
  if (explicitUnits.length) {
    question.moduleUnits = [...new Set(explicitUnits)];
    question.moduleUnit = question.moduleUnits[0];
    return;
  }

  if (question && question.moduleUnit) {
    question.moduleUnit = String(question.moduleUnit);
    question.moduleUnits = [question.moduleUnit];
    return;
  }

  const moduleBucket = resolveQuestionModuleBucket(levelKey, question && question.type);
  const stableKey = normalizePromptForUniqueness(
    `${topicKey}|${levelKey}|${question && question.type ? question.type : "unknown"}|${question && question.prompt ? question.prompt : ""}`
  );
  const numericIndex = Number.isFinite(Number(questionIndex)) ? Number(questionIndex) : 0;
  const chunkSize = 20;
  const fallbackIndex = Math.floor(Math.max(0, numericIndex) / chunkSize) % moduleBucket.length;
  const fallbackUnit = moduleBucket[fallbackIndex];

  const rankedModules = moduleBucket
    .map((moduleUnit) => {
      const pathKey = resolvePathFromUnit(moduleUnit);
      const focusTerms = buildModuleFocusTerms(topicKey, moduleUnit, pathKey);
      const score = scoreQuestionForModule(question, focusTerms);
      const tieBreaker = hashString(`${stableKey}|${moduleUnit}`);
      return {
        moduleUnit,
        score,
        tieBreaker
      };
    })
    .sort((left, right) => right.score - left.score || left.tieBreaker - right.tieBreaker);

  const moduleUnit = rankedModules.length && rankedModules[0].score > 0
    ? rankedModules[0].moduleUnit
    : fallbackUnit;

  question.moduleUnit = moduleUnit;
  question.moduleUnits = [moduleUnit];
}

function questionMatchesModuleUnit(question, moduleUnitKey) {
  if (!moduleUnitKey || moduleUnitKey === "all") {
    return true;
  }

  const units = Array.isArray(question && question.moduleUnits)
    ? question.moduleUnits.map((value) => String(value))
    : [];

  if (units.length) {
    return units.includes(String(moduleUnitKey));
  }

  if (question && question.moduleUnit) {
    return String(question.moduleUnit) === String(moduleUnitKey);
  }

  return false;
}

const courseCoverageTargets = {
  beginner: 6,
  medium: 6,
  advanced: 6
};

const coverageSkillHints = {
  swift: ["guard", "return", "state", "error"],
  web: ["if", "return", "fetch", "catch"],
  react: ["usestate", "useeffect", "return", "error"],
  python: ["def", "return", "try", "except"],
  typescript: ["type", "return", "async", "promise"],
  markdown: ["#", "-", "link", "format"],
  java: ["class", "public", "return", "try"],
  kotlin: ["fun", "when", "return", "null"],
  csharp: ["public", "return", "async", "null"],
  sql: ["select", "from", "where", "join"],
  go: ["func", "return", "error", "if"],
  rust: ["fn", "result", "match", "return"],
  cpp: ["std::", "return", "if", "class"],
  php: ["function", "return", "if", "json"],
  dart: ["future", "async", "return", "if"],
  bash: ["if", "fi", "echo", "exit"],
  sourcecontrol: ["git", "branch", "merge", "commit"],
  ides: ["debug", "breakpoint", "run", "task"],
  cloudkit: ["ckrecord", "save", "query", "error"],
  firebase: ["auth", "firestore", "rules", "error"],
  aiassist: ["prompt", "verify", "policy", "ownership"]
};

function formatTopicDisplayNameForCoverage(topicKey) {
  return topicDisplayNames[topicKey] || formatLabel(topicKey || "language");
}

function buildCoverageBoosterQuestion(topicKey, levelKey, index) {
  const topicLabel = formatTopicDisplayNameForCoverage(topicKey);
  const hints = coverageSkillHints[topicKey] || ["if", "return", "error", "result"];
  const primary = hints[0];
  const secondary = hints[1] || hints[0];
  const tertiary = hints[2] || hints[1] || hints[0];
  const stageLabel = levelKey === "beginner"
    ? "Foundations"
    : levelKey === "medium"
      ? "Application"
      : "Project Readiness";

  const mode = index % 3;
  if (mode === 0) {
    return {
      type: "vocab",
      prompt: `${topicLabel} ${stageLabel} Coverage Drill ${index + 1}: Which practice best improves production reliability?`,
      options: [
        "Skip validation to code faster",
        "Handle failure paths and keep outputs predictable",
        "Only test happy-path behavior",
        "Avoid code reviews before release"
      ],
      answer: 1,
      explanation: "Production readiness requires explicit validation, failure handling, and predictable outputs."
    };
  }

  if (mode === 1) {
    return {
      type: "tf",
      prompt: `${topicLabel} ${stageLabel} Coverage Drill ${index + 1}: True or False: Clear failure handling and readable structure improve project delivery speed over time.`,
      options: ["True", "False"],
      answer: 0,
      explanation: "True. Teams move faster long-term with readable code and explicit failure paths."
    };
  }

  return {
    type: "code",
    prompt: `${topicLabel} ${stageLabel} Coverage Drill ${index + 1}: Write 3-6 lines that validate input, handle one failure branch, and return a stable result using ${primary}/${secondary}.`,
    checks: [primary, secondary, "return"],
    sample: `// ${topicLabel} sample\n// validate input\nif (invalidInput) {\n  // handle failure\n  return fallbackResult\n}\nreturn stableResult // ${tertiary}`
  };
}

function ensureMinimumCourseCoverage() {
  const levels = Object.keys(courseCoverageTargets);

  Object.keys(questionSets).forEach((topicKey) => {
    const topicSet = questionSets[topicKey] || {};

    levels.forEach((levelKey) => {
      const target = courseCoverageTargets[levelKey] || 0;
      if (!Array.isArray(topicSet[levelKey])) {
        topicSet[levelKey] = [];
      }

      const questions = topicSet[levelKey];
      while (questions.length < target) {
        questions.push(buildCoverageBoosterQuestion(topicKey, levelKey, questions.length));
      }
    });

    questionSets[topicKey] = topicSet;
  });
}

function applyTopicQuestionUniqueness() {
  const levels = ["beginner", "medium", "advanced"];

  Object.entries(questionSets).forEach(([topicKey, topicSet]) => {
    const topicLabel = topicDisplayNames[topicKey] || topicKey;
    const seenPromptsInTopic = new Set();

    levels.forEach((levelKey) => {
      const questions = Array.isArray(topicSet[levelKey]) ? topicSet[levelKey] : [];

      topicSet[levelKey] = questions.filter((question, questionIndex) => {
        if (!question || typeof question !== "object") {
          return false;
        }

        question.topicKey = topicKey;
        assignDeterministicQuestionModule(topicKey, levelKey, question, questionIndex);

        if (typeof question.prompt === "string" && question.prompt.trim()) {
          if (!question.prompt.startsWith(`[${topicLabel}`)) {
            question.prompt = `[${topicLabel}] ${question.prompt}`;
          }

          const normalizedPrompt = normalizePromptForUniqueness(question.prompt);
          const topicPromptKey = `${normalizedPrompt}`;

          if (seenPromptsInTopic.has(topicPromptKey)) {
            return false;
          }

          seenPromptsInTopic.add(topicPromptKey);
        }

        return true;
      });
    });
  });
}

const languageSkillMaps = {
  swift: [
    "optionals and safe unwrapping",
    "value vs reference semantics",
    "@State and @Binding data flow",
    "SwiftUI view composition",
    "protocol-oriented design",
    "Codable model decoding",
    "async/await concurrency",
    "error handling with do/catch",
    "actor isolation for shared state",
    "collection transformations",
    "guard statements for early exits",
    "testable view-model boundaries",
    "CloudKit data sync and conflict resolution",
    "Firebase Auth/Firestore integration boundaries",
    "secure token handling with Keychain",
    "offline-first caching strategy"
  ],
  web: [
    "semantic HTML structure",
    "CSS layout with Flexbox/Grid",
    "accessible form controls",
    "DOM event handling",
    "async fetch error handling",
    "state-driven UI updates",
    "responsive design breakpoints",
    "performance-aware rendering",
    "cross-browser debugging",
    "input validation and sanitization",
    "modular JavaScript functions",
    "network and caching fundamentals"
  ],
  react: [
    "component composition",
    "one-way data flow",
    "useState and immutable updates",
    "useEffect dependency management",
    "custom hook reuse",
    "controlled form inputs",
    "memoization when needed",
    "key stability in lists",
    "state lifting patterns",
    "context usage boundaries",
    "render performance profiling",
    "error/loading UI states"
  ],
  python: [
    "readable function design",
    "list and dict transformations",
    "exception handling strategy",
    "virtual environment workflow",
    "type hints for clarity",
    "module/package organization",
    "iterator and generator usage",
    "test-driven bug prevention",
    "data validation at boundaries",
    "algorithmic complexity awareness",
    "logging for diagnosis",
    "clean refactoring habits"
  ],
  typescript: [
    "interface and type alias modeling",
    "union narrowing techniques",
    "strict null checks",
    "generic utility design",
    "runtime vs compile-time understanding",
    "safe API response typing",
    "discriminated union state models",
    "readonly immutability patterns",
    "module boundary contracts",
    "type-safe refactoring",
    "error-first validation",
    "lint and compiler integration"
  ],
  java: [
    "class and object modeling",
    "encapsulation practices",
    "interface-based design",
    "collection framework choices",
    "exception handling patterns",
    "stream API transformations",
    "dependency injection basics",
    "thread-safety awareness",
    "JVM memory fundamentals",
    "unit testing with mocks",
    "clean package architecture",
    "performance profiling mindset"
  ],
  kotlin: [
    "null safety with nullable types",
    "val vs var mutability",
    "data class usage",
    "when expression modeling",
    "extension function readability",
    "coroutine scope management",
    "suspend function boundaries",
    "sealed classes for state",
    "flow/reactive stream basics",
    "Android lifecycle awareness",
    "repository pattern structure",
    "idiomatic collection operations"
  ],
  markdown: [
    "heading hierarchy structure",
    "ordered and unordered list formatting",
    "link and image syntax correctness",
    "fenced code block conventions",
    "table readability patterns",
    "blockquote and callout usage",
    "inline emphasis best practices",
    "documentation information architecture",
    "cross-linking between docs",
    "front matter metadata organization",
    "docs style consistency",
    "maintainable knowledge base workflows"
  ],
  csharp: [
    "nullable reference handling",
    "class and record modeling",
    "LINQ query transformations",
    "async/await correctness",
    "dependency injection setup",
    "interface-first architecture",
    "exception handling strategy",
    "Entity Framework boundaries",
    "API contract validation",
    "unit testing with mocks",
    "logging and diagnostics",
    "clean solution organization"
  ],
  sql: [
    "SELECT/FROM/WHERE fundamentals",
    "JOIN type selection",
    "GROUP BY and HAVING",
    "subquery reasoning",
    "window function usage",
    "index-aware filtering",
    "transaction consistency",
    "normalization tradeoffs",
    "query plan interpretation",
    "null-safe comparisons",
    "aggregation correctness",
    "safe update/delete practices"
  ],
  go: [
    "package and module layout",
    "goroutine concurrency basics",
    "channel communication patterns",
    "error handling idioms",
    "slice and map operations",
    "interface abstraction",
    "testing with go test",
    "context cancellation",
    "HTTP handler design",
    "dependency boundaries",
    "performance profiling basics",
    "production logging discipline"
  ],
  rust: [
    "ownership and borrowing",
    "mutable vs immutable bindings",
    "result and option handling",
    "pattern matching with match",
    "iterator-driven transformations",
    "trait-based abstraction",
    "lifetime awareness",
    "error propagation with ?",
    "module and crate organization",
    "safe concurrency practices",
    "zero-cost abstraction mindset",
    "testing and benchmarking basics"
  ],
  cpp: [
    "value and reference semantics",
    "memory and RAII patterns",
    "STL container selection",
    "template fundamentals",
    "const correctness",
    "header/source organization",
    "smart pointer usage",
    "move semantics awareness",
    "algorithm library usage",
    "debugger-first troubleshooting",
    "performance profiling habits",
    "modern C++ style guidelines"
  ],
  php: [
    "request lifecycle understanding",
    "array and associative map fluency",
    "function and class structuring",
    "input sanitization",
    "session and auth basics",
    "error handling strategy",
    "database access patterns",
    "composer dependency workflow",
    "routing and controller boundaries",
    "template rendering clarity",
    "testing with PHPUnit basics",
    "secure coding defaults"
  ],
  dart: [
    "null safety fundamentals",
    "class and mixin design",
    "async/await and futures",
    "widget tree composition",
    "state management basics",
    "immutable UI modeling",
    "navigation and routing",
    "form and validation patterns",
    "list and map transforms",
    "testing widgets and logic",
    "performance profiling in Flutter",
    "maintainable app architecture"
  ],
  bash: [
    "shell variable expansion",
    "file and process commands",
    "pipes and redirection",
    "conditional tests",
    "loop and script structure",
    "exit code handling",
    "functions in shell scripts",
    "quoting and escaping safety",
    "command substitution",
    "environment variable usage",
    "automation script reliability",
    "defensive scripting habits"
  ],
  cloudkit: [
    "CloudKit container and database basics",
    "record types, zones, and references",
    "private/shared/public database boundaries",
    "query and predicate modeling",
    "conflict resolution and merge rules",
    "offline-first sync expectations",
    "account status and iCloud availability handling",
    "error handling and retry strategy",
    "schema evolution and migration safety",
    "security roles and data ownership",
    "observability for sync failures",
    "production rollout readiness"
  ],
  firebase: [
    "Firebase project and app setup flow",
    "authentication provider strategy",
    "Firestore document modeling",
    "security rules design and testing",
    "query/index planning",
    "offline cache behavior",
    "Cloud Storage path and ACL boundaries",
    "error handling with typed states",
    "analytics and crash monitoring",
    "cost-aware read/write patterns",
    "environment separation dev/stage/prod",
    "incident response and rollback discipline"
  ],
  aiassist: [
    "prompt clarity and constraints",
    "task decomposition before prompting",
    "context window hygiene",
    "verify before accepting suggestions",
    "test-first acceptance criteria",
    "security/privacy safe prompting",
    "hallucination detection workflow",
    "code ownership and accountability",
    "refactor AI drafts for readability",
    "tool selection per IDE",
    "cost-aware AI usage",
    "team governance for AI workflows"
  ]
};

const criticalSkillAdditionsByTopic = {
  swift: ["swift concurrency cancellation", "access control and API boundaries", "dependency injection for testability"],
  web: ["web accessibility basics (a11y)", "xss/csrf mitigation basics", "bundle and asset performance budgeting"],
  react: ["state normalization strategy", "error boundaries and recovery UX", "query caching and invalidation"],
  python: ["packaging and virtual environment workflow", "type hints with mypy discipline", "logging and structured diagnostics"],
  typescript: ["strict mode and narrowing discipline", "runtime validation at API boundaries", "monorepo/shared type contracts"],
  java: ["dependency injection and inversion of control", "transaction boundaries and rollback", "thread-safety fundamentals"],
  kotlin: ["structured concurrency with coroutine scopes", "flow/stateflow architecture", "android lifecycle-safe async patterns"],
  markdown: ["documentation information architecture", "docs-as-code review workflow", "versioned changelog discipline"],
  csharp: ["async/await deadlock avoidance", "dependency injection patterns", "observability with structured logs/metrics"],
  sql: ["transaction isolation and consistency", "indexing strategy and query plans", "migration/versioning safety"],
  go: ["context propagation and cancellation", "interface-driven service boundaries", "concurrency race prevention"],
  rust: ["lifetime reasoning in APIs", "result/error domain modeling", "unsafe boundaries and audit discipline"],
  cpp: ["sanitizers and static analysis workflow", "threading and synchronization basics", "abi/build system discipline"],
  php: ["owasp web security essentials", "framework routing and middleware boundaries", "database query safety and transactions"],
  dart: ["state management architecture", "flutter rendering/performance profiling", "platform integration boundaries"],
  bash: ["shellcheck and linting workflow", "idempotent deployment scripting", "secure secret/env handling"],
  sourcecontrol: ["branch protection and review policy", "safe rebase/cherry-pick workflow", "release tagging discipline"],
  ides: ["debugger breakpoint strategy", "reproducible toolchain setup", "team-level editor conventions"],
  cloudkit: ["zone sharing and permissions", "conflict merge policy design", "sync observability and recovery"],
  firebase: ["security rules test coverage", "index planning for query scale", "cost controls and quota monitoring"],
  aiassist: ["prompt contracts and acceptance criteria", "source-verification workflow", "policy-safe AI usage"]
};

function mergeCriticalSkillAdditions() {
  Object.entries(criticalSkillAdditionsByTopic).forEach(([topicKey, additions]) => {
    if (!Array.isArray(languageSkillMaps[topicKey])) {
      return;
    }
    const merged = [...languageSkillMaps[topicKey], ...additions.filter(Boolean)];
    languageSkillMaps[topicKey] = Array.from(new Set(merged));
  });
}

mergeCriticalSkillAdditions();

const languagePitfallMaps = {
  swift: ["runtime crashes from force unwraps", "state updates on wrong execution context", "hard-to-test monolithic views"],
  web: ["inaccessible UI behavior", "fragile DOM manipulation bugs", "unhandled network failures"],
  react: ["stale effects and state", "unnecessary re-renders", "prop drilling complexity"],
  python: ["hidden runtime type errors", "poor module boundaries", "untested edge-case regressions"],
  typescript: ["unsafe any usage", "nullability bugs", "incorrect API assumptions"],
  java: ["null pointer exceptions", "rigid coupling between layers", "collection misuse performance issues"],
  kotlin: ["incorrect coroutine scope usage", "nullable handling mistakes", "lifecycle-related async leaks"],
  markdown: ["broken links and stale references", "inconsistent heading structure", "poorly formatted docs that reduce readability"],
  csharp: ["async deadlocks or context issues", "nullable reference warnings ignored", "dependency graph complexity"],
  sql: ["wrong join cardinality", "slow scans from poor filtering", "unsafe write operations"],
  go: ["goroutine leaks", "ignored error returns", "race conditions in shared state"],
  rust: ["borrow checker conflicts", "overuse of unwrap causing panics", "complex lifetime coupling"],
  cpp: ["memory leaks or dangling pointers", "undefined behavior from unsafe access", "template complexity overload"],
  php: ["unsanitized input handling", "global-state coupling", "inconsistent dependency management"],
  dart: ["state rebuild issues", "async setState timing bugs", "overgrown widget classes"],
  bash: ["unsafe quoting", "unchecked command failures", "fragile path assumptions"]
  ,cloudkit: ["sync conflicts causing silent overwrites", "schema mismatch between environments", "iCloud account availability edge-case failures"]
  ,firebase: ["overly permissive security rules", "cost spikes from unbounded reads", "auth/session edge-case regressions"]
  ,aiassist: ["unverified generated code shipped", "sensitive data leakage in prompts", "loss of code ownership"]
};

const languageSuccessMaps = {
  swift: ["predictable state flow", "safer async code", "maintainable SwiftUI structure"],
  web: ["accessible responsive UI", "reliable browser behavior", "easier production debugging"],
  react: ["predictable component behavior", "clean reusable logic", "stable rendering performance"],
  python: ["readable maintainable modules", "faster debugging cycles", "stronger test confidence"],
  typescript: ["safer refactors", "clearer domain contracts", "fewer runtime surprises"],
  java: ["clean enterprise layering", "testable services", "safer object-oriented design"],
  kotlin: ["concise safe Android code", "better state modeling", "robust coroutine flows"],
  markdown: ["clear developer onboarding docs", "faster team knowledge transfer", "higher documentation trust"],
  csharp: ["reliable .NET service behavior", "clear architecture boundaries", "strong diagnostics"],
  sql: ["correct query results", "predictable performance", "safer data operations"],
  go: ["reliable backend services", "clean concurrency workflows", "predictable deployment behavior"],
  rust: ["memory-safe high performance code", "fewer runtime crashes", "strong compile-time guarantees"],
  cpp: ["fast systems-level performance", "clear resource ownership", "robust low-level reliability"],
  php: ["productive web delivery", "safer request handling", "maintainable backend workflows"],
  dart: ["smooth cross-platform apps", "predictable UI state flow", "faster feature iteration"],
  bash: ["repeatable automation", "faster local workflows", "safer deployment scripts"]
  ,cloudkit: ["reliable iCloud-backed sync", "safer data ownership boundaries", "predictable offline recovery"]
  ,firebase: ["faster backend feature delivery", "cross-platform auth consistency", "better product observability"]
  ,aiassist: ["faster implementation with guardrails", "stronger review quality", "safer AI-assisted delivery"]
};

const generatedCodeTemplates = {
  swift: {
    prompt: "Write 6-10 lines of SwiftUI inside a `struct ContentView: View` with `var body: some View`, include `@State private var count = 0`, a Text that shows count, and a Button that increments `count` by 1.",
    checks: ["struct contentview: view", "var body: some view", "@state private var count = 0", "text(\"count:", "button(||button {", "count += 1"],
    sample: "struct ContentView: View {\n  @State private var count = 0\n\n  var body: some View {\n    VStack {\n      Text(\"Count: \\(count)\")\n      Button(\"Add 1\") { count += 1 }\n    }\n  }\n}"
  },
  web: {
    prompt: "Write 4-8 lines of JavaScript that selects #saveBtn and toggles class active on click.",
    checks: ["queryselector", "#savebtn", "addeventlistener", "click", "classlist.toggle"],
    sample: "const saveBtn = document.querySelector('#saveBtn')\nsaveBtn.addEventListener('click', () => {\n  saveBtn.classList.toggle('active')\n})"
  },
  react: {
    prompt: "Write 5-9 lines of React code using useState for a count and a button that increments it.",
    checks: ["usestate", "count", "setcount", "button", "count + 1"],
    sample: "const [count, setCount] = useState(0)\nreturn (\n  <div>\n    <p>{count}</p>\n    <button onClick={() => setCount(count + 1)}>Add</button>\n  </div>\n)"
  },
  python: {
    prompt: "Write 3-7 lines of Python defining a function square_all(nums) that returns squared values.",
    checks: ["def square_all", "return", "for", "** 2"],
    sample: "def square_all(nums):\n    return [n ** 2 for n in nums]"
  },
  typescript: {
    prompt: "Write 4-8 lines of TypeScript defining interface User with id:number and name:string, then a typed variable.",
    checks: ["interface user", "id: number", "name: string", "const user: user"],
    sample: "interface User {\n  id: number\n  name: string\n}\nconst user: User = { id: 1, name: 'Sam' }"
  },
  java: {
    prompt: "Write 4-8 lines of Java with a main method that prints Hello Java.",
    checks: ["class", "public static void main", "system.out.println"],
    sample: "class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Hello Java\");\n  }\n}"
  },
  kotlin: {
    prompt: "Write 3-7 lines of Kotlin creating a data class User(val id:Int, val name:String) and one instance.",
    checks: ["data class user", "val id: int", "val name: string", "val user = user"],
    sample: "data class User(val id: Int, val name: String)\nval user = User(1, \"Sam\")"
  },
  markdown: {
    prompt: "Write 4-8 lines of Markdown with a heading, one paragraph, and a bullet list of two items.",
    checks: ["#", "- ", "- "],
    sample: "## Release Notes\nThis update improves onboarding clarity.\n- Added quick start\n- Fixed broken links"
  },
  csharp: {
    prompt: "Write 4-8 lines of C# defining a Person class with Name property and print one Name.",
    checks: ["class person", "public string name", "console.writeline"],
    sample: "class Person { public string Name { get; set; } }\nvar p = new Person { Name = \"Sam\" };\nConsole.WriteLine(p.Name);"
  },
  sql: {
    prompt: "Write a SQL query selecting city and COUNT(*) from users grouped by city.",
    checks: ["select city", "count(*)", "from users", "group by city"],
    sample: "SELECT city, COUNT(*)\nFROM users\nGROUP BY city;"
  },
  go: {
    prompt: "Write 4-8 lines of Go with a main function that prints Hello Go.",
    checks: ["package main", "func main()", "fmt.println"],
    sample: "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello Go\")\n}"
  },
  rust: {
    prompt: "Write 3-6 lines of Rust that prints Hello Rust.",
    checks: ["fn main()", "println!"],
    sample: "fn main() {\n  println!(\"Hello Rust\");\n}"
  },
  cpp: {
    prompt: "Write 4-8 lines of C++ with main that prints Hello C++.",
    checks: ["#include <iostream>", "int main()", "std::cout"],
    sample: "#include <iostream>\nint main() {\n  std::cout << \"Hello C++\";\n  return 0;\n}"
  },
  php: {
    prompt: "Write 2-5 lines of PHP that declares `$name` and echoes it.",
    checks: ["$name", "echo"],
    sample: "<?php\n$name = \"Sam\";\necho $name;"
  },
  dart: {
    prompt: "Write 4-8 lines of Dart that defines a `main()` and prints Hello Dart.",
    checks: ["void main()", "print("],
    sample: "void main() {\n  print('Hello Dart');\n}"
  },
  bash: {
    prompt: "Write 2-5 lines of Bash that stores `name` and echoes Hello with it.",
    checks: ["name=", "echo"],
    sample: "name=\"Sam\"\necho \"Hello $name\""
  }
};

const generatedDebugTemplates = {
  swift: {
    prompt: "Debug This: Fix the SwiftUI button so it updates count.",
    starterCode: "@State private var count = 0\nButton(\"Add\") {\n  count + 1\n}",
    checks: ["count += 1"],
    sample: "@State private var count = 0\nButton(\"Add\") {\n  count += 1\n}"
  },
  web: {
    prompt: "Debug This: Fix the event listener so the handler block is closed properly.",
    starterCode: "const btn = document.querySelector('#saveBtn')\nbtn.addEventListener('click', () => {\n  console.log('saved')",
    checks: ["})"],
    sample: "const btn = document.querySelector('#saveBtn')\nbtn.addEventListener('click', () => {\n  console.log('saved')\n})"
  },
  react: {
    prompt: "Debug This: Fix state update so clicking increments count.",
    starterCode: "const [count, setCount] = useState(0)\n<button onClick={() => count + 1}>Add</button>",
    checks: ["setcount(count + 1)"],
    sample: "const [count, setCount] = useState(0)\n<button onClick={() => setCount(count + 1)}>Add</button>"
  },
  python: {
    prompt: "Debug This: Fix the function syntax so it runs.",
    starterCode: "def greet(name)\n    print(name)",
    checks: ["def greet(name):", "print(name)"],
    sample: "def greet(name):\n    print(name)"
  },
  typescript: {
    prompt: "Debug This: Fix nullable access to avoid runtime failure.",
    starterCode: "function shout(text: string | null) {\n  return text.toUpperCase()\n}",
    checks: ["text?.touppercase()", "??"],
    sample: "function shout(text: string | null) {\n  return text?.toUpperCase() ?? \"\"\n}"
  },
  java: {
    prompt: "Debug This: Fix the string literal syntax.",
    starterCode: "System.out.println('Hello');",
    checks: ["system.out.println(\"hello\");"],
    sample: "System.out.println(\"Hello\");"
  },
  kotlin: {
    prompt: "Debug This: Fix nullable access so it is safe.",
    starterCode: "val name: String? = null\nprintln(name.length)",
    checks: ["name?.length", "?:"],
    sample: "val name: String? = null\nprintln(name?.length ?: 0)"
  },
  markdown: {
    prompt: "Debug This: Fix the Markdown link syntax.",
    starterCode: "[Docs](https//example.com)",
    checks: ["[docs](https://example.com)"],
    sample: "[Docs](https://example.com)"
  },
  csharp: {
    prompt: "Debug This: Fix C# property syntax.",
    starterCode: "public string Name { get set; }",
    checks: ["public string name { get; set; }"],
    sample: "public string Name { get; set; }"
  },
  sql: {
    prompt: "Debug This: Fix SQL clause order.",
    starterCode: "FROM users SELECT name;",
    checks: ["select name", "from users"],
    sample: "SELECT name\nFROM users;"
  },
  go: {
    prompt: "Debug This: Fix this Go variable declaration.",
    starterCode: "name :=\nfmt.Println(name)",
    checks: [":= \"", "fmt.println"],
    sample: "name := \"Sam\"\nfmt.Println(name)"
  },
  rust: {
    prompt: "Debug This: Fix missing mutability in Rust.",
    starterCode: "let count = 0;\ncount += 1;",
    checks: ["let mut count"],
    sample: "let mut count = 0;\ncount += 1;"
  },
  cpp: {
    prompt: "Debug This: Fix C++ output namespace.",
    starterCode: "cout << \"Hi\";",
    checks: ["std::cout"],
    sample: "std::cout << \"Hi\";"
  },
  php: {
    prompt: "Debug This: Fix PHP variable syntax.",
    starterCode: "name = \"Sam\";\necho name;",
    checks: ["$name", "echo $name"],
    sample: "$name = \"Sam\";\necho $name;"
  },
  dart: {
    prompt: "Debug This: Fix Dart print statement punctuation.",
    starterCode: "print('Hello Dart')",
    checks: ["print('hello dart');"],
    sample: "print('Hello Dart');"
  },
  bash: {
    prompt: "Debug This: Fix Bash variable assignment spacing.",
    starterCode: "name = \"Sam\"\necho \"$name\"",
    checks: ["name=\"sam\"", "echo"],
    sample: "name=\"Sam\"\necho \"$name\""
  }
};

const generatedBlankTemplates = {
  swift: {
    prompt: "Fill in the blank: In Swift, values that cannot be reassigned are declared with ____.",
    acceptableAnswers: ["let"],
    sample: "let"
  },
  web: {
    prompt: "Fill in the blank: The language used to style visual presentation on web pages is ____.",
    acceptableAnswers: ["css"],
    sample: "CSS"
  },
  react: {
    prompt: "Fill in the blank: In React, component input values passed from parent to child are called ____.",
    acceptableAnswers: ["props"],
    sample: "props"
  },
  python: {
    prompt: "Fill in the blank: Python defines named functions with the keyword ____.",
    acceptableAnswers: ["def"],
    sample: "def"
  },
  typescript: {
    prompt: "Fill in the blank: TypeScript interfaces are declared with the keyword ____.",
    acceptableAnswers: ["interface"],
    sample: "interface"
  },
  java: {
    prompt: "Fill in the blank: Java programs begin execution in the ____ method.",
    acceptableAnswers: ["main", "main method"],
    sample: "main"
  },
  kotlin: {
    prompt: "Fill in the blank: In Kotlin, read-only values are declared with ____.",
    acceptableAnswers: ["val"],
    sample: "val"
  },
  markdown: {
    prompt: "Fill in the blank: In Markdown, a level-2 heading starts with ____ followed by a space.",
    acceptableAnswers: ["##"],
    sample: "##"
  },
  csharp: {
    prompt: "Fill in the blank: In C#, a method that can be awaited is marked with the keyword ____.",
    acceptableAnswers: ["async"],
    sample: "async"
  },
  sql: {
    prompt: "Fill in the blank: SQL uses ____ BY to group rows before aggregation.",
    acceptableAnswers: ["group", "group by"],
    sample: "GROUP"
  },
  go: {
    prompt: "Fill in the blank: In Go, the keyword to start a goroutine is ____.",
    acceptableAnswers: ["go"],
    sample: "go"
  },
  rust: {
    prompt: "Fill in the blank: In Rust, mutable bindings are declared with `let ____`.",
    acceptableAnswers: ["mut"],
    sample: "mut"
  },
  cpp: {
    prompt: "Fill in the blank: C++ console output commonly uses `std::____`.",
    acceptableAnswers: ["cout"],
    sample: "cout"
  },
  php: {
    prompt: "Fill in the blank: PHP variables begin with the symbol ____.",
    acceptableAnswers: ["$"],
    sample: "$"
  },
  dart: {
    prompt: "Fill in the blank: Flutter UIs are built from ____.",
    acceptableAnswers: ["widgets", "widget"],
    sample: "widgets"
  },
  bash: {
    prompt: "Fill in the blank: The command that prints the current directory is ____.",
    acceptableAnswers: ["pwd"],
    sample: "pwd"
  },
  sourcecontrol: {
    prompt: "Fill in the blank: The Git command that shows branch and file state is `git ____`.",
    acceptableAnswers: ["status"],
    sample: "status"
  },
  ides: {
    prompt: "Fill in the blank: The IDE focused on Python development from JetBrains is ____.",
    acceptableAnswers: ["pycharm"],
    sample: "PyCharm"
  },
  cloudkit: {
    prompt: "Fill in the blank: CloudKit private user data is stored in the ____ database.",
    acceptableAnswers: ["private", "private database"],
    sample: "private"
  },
  firebase: {
    prompt: "Fill in the blank: In Firebase, Firestore access should be protected by ____ rules.",
    acceptableAnswers: ["security", "security rules"],
    sample: "security"
  },
  aiassist: {
    prompt: "Fill in the blank: AI coding output should be ____ before merge.",
    acceptableAnswers: ["reviewed", "tested"],
    sample: "reviewed"
  }
};

const topicProjectContexts = {
  swift: "an iOS SwiftUI app",
  web: "a production web front end",
  react: "a component-driven React product",
  python: "a Python data-processing service",
  typescript: "a TypeScript web application",
  java: "a Java backend service",
  kotlin: "a Kotlin Android feature",
  markdown: "a technical documentation workflow",
  csharp: "a .NET business API",
  sql: "a relational reporting pipeline",
  go: "a Go microservice",
  rust: "a Rust systems component",
  cpp: "a performance-critical C++ module",
  php: "a PHP web backend",
  dart: "a Flutter mobile app",
  bash: "a shell automation script",
  sourcecontrol: "a Git collaboration workflow",
  ides: "an IDE team setup",
  cloudkit: "an Apple-platform iCloud sync system",
  firebase: "a cross-platform backend product",
  aiassist: "an AI-assisted IDE coding workflow"
};

const topicDomainArtifacts = {
  swift: "state updates and view rendering",
  web: "DOM behavior and layout",
  react: "component state and effects",
  python: "data parsing and function logic",
  typescript: "type-safe model contracts",
  java: "service-layer object behavior",
  kotlin: "null-safe app state",
  markdown: "rendered documentation output",
  csharp: "async service behavior",
  sql: "query correctness and row results",
  go: "concurrency-safe request handling",
  rust: "ownership-safe data flow",
  cpp: "memory and runtime behavior",
  php: "request/response handling",
  dart: "widget and state flow",
  bash: "command and pipeline output",
  sourcecontrol: "branching and merge reliability",
  ides: "debugger and run configuration flow",
  cloudkit: "record sync and conflict handling",
  firebase: "auth state and data consistency",
  aiassist: "prompt quality, verification rigor, and ownership"
};

function buildSupplementalObjectiveQuestion(topicKey, serial, levelKey) {
  const topicName = topicDisplayNames[topicKey] || topicKey;
  const skills = languageSkillMaps[topicKey] || ["core language fundamentals"];
  const pitfalls = languagePitfallMaps[topicKey] || ["hard-to-find production bugs"];
  const outcomes = languageSuccessMaps[topicKey] || ["reliable production code"];
  const projectContext = topicProjectContexts[topicKey] || `${topicName} project work`;
  const domainArtifact = topicDomainArtifacts[topicKey] || "production behavior";
  const skill = skills[serial % skills.length];
  const pitfall = pitfalls[serial % pitfalls.length];
  const outcome = outcomes[serial % outcomes.length];
  const variant = serial % 10;
  const nonCodeTracks = new Set(["sourcecontrol", "ides", "cloudkit", "firebase", "aiassist"]);
  const isNonCodeTrack = nonCodeTracks.has(topicKey);

  if (variant === 0) {
    return {
      type: "vocab",
      prompt: `[${topicName} ${levelKey} ${serial}] In ${projectContext}, which competency most directly improves ${outcome}?`,
      options: [
        `${skill}`,
        "Skipping tests to speed up delivery",
        "Avoiding code review and feedback",
        "Deferring all debugging to production"
      ],
      answer: 0,
      explanation: `Strong ${topicName} engineers rely on ${skill} to ship maintainable, production-ready solutions.`
    };
  }

  if (variant === 1) {
    const isTrue = serial % 2 === 0;
    return {
      type: "tf",
      prompt: isTrue
        ? `[${topicName} ${levelKey} ${serial}] True or False (${projectContext}): Practicing ${skill} reduces the chance of ${pitfall} in ${domainArtifact}.`
        : `[${topicName} ${levelKey} ${serial}] True or False (${projectContext}): Ignoring ${skill} is usually safe for ${domainArtifact} in production work.`,
      options: ["True", "False"],
      answer: isTrue ? 0 : 1,
      explanation: isTrue
        ? `True. ${skill} is a core success skill in ${topicName} workflows.`
        : `False. Ignoring ${skill} often leads to ${pitfall}.`
    };
  }

  if (variant === 2) {
    return {
      type: "output",
      prompt: `[${topicName} ${levelKey} ${serial}] Scenario (${projectContext}): A team skipped ${skill}. Which result is most likely for ${domainArtifact} after release?`,
      options: [
        `${pitfall}`,
        "Fewer bugs and easier maintenance",
        "No change to reliability",
        "Guaranteed performance improvements"
      ],
      answer: 0,
      explanation: `Missing ${skill} commonly creates ${pitfall} in real ${topicName} projects.`
    };
  }

  if (variant === 3) {
    if (isNonCodeTrack) {
      return {
        type: "vocab",
        prompt: `[${topicName} ${levelKey} ${serial}] In ${projectContext}, which workflow action best prevents ${pitfall} around ${domainArtifact}?`,
        options: [
          `${skill}`,
          "Skipping review to save time",
          "Ignoring test or validation checks",
          "Pushing directly without verification"
        ],
        answer: 0,
        explanation: `${skill} is a practical way to avoid ${pitfall} in ${topicName} workflows.`
      };
    }

    const template = generatedCodeTemplates[topicKey];
    if (template) {
      return {
        type: "code",
        prompt: `[${topicName} ${levelKey} ${serial}] ${template.prompt}`,
        checks: template.checks,
        sample: template.sample
      };
    }
  }

  if (variant === 4) {
    if (isNonCodeTrack) {
      return {
        type: "output",
        prompt: `[${topicName} ${levelKey} ${serial}] Scenario (${projectContext}): A team ignored ${skill}. Which outcome is most likely for ${domainArtifact}?`,
        options: [
          `${pitfall}`,
          "Cleaner collaboration and faster reviews",
          "No impact on reliability",
          "Guaranteed success with fewer checks"
        ],
        answer: 0,
        explanation: `Skipping ${skill} usually increases ${pitfall} risk in real ${topicName} work.`
      };
    }

    const template = generatedDebugTemplates[topicKey];
    if (template) {
      return {
        type: "debug",
        prompt: `[${topicName} ${levelKey} ${serial}] ${template.prompt}`,
        starterCode: template.starterCode,
        checks: template.checks,
        sample: template.sample
      };
    }
  }

  if (variant === 5) {
    const template = generatedBlankTemplates[topicKey];
    if (template) {
      return {
        type: "blank",
        prompt: `[${topicName} ${levelKey} ${serial}] ${template.prompt} (Context: ${projectContext}).`,
        acceptableAnswers: template.acceptableAnswers,
        sample: template.sample,
        explanation: `${template.sample} is the expected fill-in answer for this concept in ${topicName}, especially for ${domainArtifact}.`
      };
    }
  }

  if (variant === 6) {
    return {
      type: "output",
      prompt: `[${topicName} ${levelKey} ${serial}] Architecture scenario (${projectContext}): You need maintainable growth and easier testing for ${domainArtifact}. Which decision best supports that goal?`,
      options: [
        `Adopt ${skill} with clear module boundaries and tests`,
        "Keep all logic in one large file to reduce setup time",
        "Skip architecture choices until after production incidents",
        "Rely on manual QA only instead of automated checks"
      ],
      answer: 0,
      explanation: `Using ${skill} with explicit boundaries improves long-term maintainability and testability.`
    };
  }

  if (variant === 7) {
    return {
      type: "vocab",
      prompt: `[${topicName} ${levelKey} ${serial}] Review check (${projectContext}): Which comment is the highest-value feedback before merge to protect ${domainArtifact}?`,
      options: [
        `"Please add/expand tests around ${pitfall} risk and document expected behavior."`,
        "Looks fine, ship quickly and skip review notes.",
        "Use shorter variable names everywhere.",
        "Delete comments and tests to keep code minimal."
      ],
      answer: 0,
      explanation: `High-value reviews focus on correctness, risk coverage, and maintainability.`
    };
  }

  if (variant === 8) {
    return {
      type: "output",
      prompt: `[${topicName} ${levelKey} ${serial}] Refactor scenario (${projectContext}): Which change most improves long-term team velocity while protecting ${domainArtifact}?`,
      options: [
        `Break logic into focused units around ${skill} and add edge-case tests`,
        "Keep one large function to avoid reorganizing files",
        "Remove validation checks so code runs faster",
        "Delay refactoring until critical production failures"
      ],
      answer: 0,
      explanation: `Focused refactoring plus tests improves maintainability and confidence in future changes.`
    };
  }

  if (variant === 9) {
    return {
      type: "tf",
      prompt: `[${topicName} ${levelKey} ${serial}] True or False (${projectContext}): A production-ready submission should include passing tests, clear structure, and defensive handling for edge cases in ${domainArtifact}.`,
      options: ["True", "False"],
      answer: 0,
      explanation: `Production readiness means correctness, maintainability, and resilience under edge conditions.`
    };
  }

  return {
    type: "output",
    prompt: `[${topicName} ${levelKey} ${serial}] In ${projectContext}, which learning focus should come next to improve real-world readiness for ${domainArtifact}?`,
    options: [
      `${skill}`,
      "Avoiding tests and reviews",
      "Copy/paste only development",
      "Skipping debugging workflows"
    ],
    answer: 0,
    explanation: `Mastering ${skill} directly improves long-term success in ${topicName}.`
  };
}

function ensureMinimumQuestionCount(topicKey, minimumCount) {
  const topicSet = questionSets[topicKey];
  if (!topicSet) {
    return;
  }

  const levels = ["beginner", "medium", "advanced"];
  const totalCount = levels.reduce((total, levelKey) => {
    const questions = Array.isArray(topicSet[levelKey]) ? topicSet[levelKey] : [];
    return total + questions.length;
  }, 0);

  if (totalCount >= minimumCount) {
    return;
  }

  const needed = minimumCount - totalCount;
  for (let index = 0; index < needed; index += 1) {
    const serial = totalCount + index + 1;
    const levelKey = levels[index % levels.length];
    topicSet[levelKey].push(buildSupplementalObjectiveQuestion(topicKey, serial, levelKey));
  }
}

function getModuleLevelKey(moduleUnit) {
  const unitNumber = Number(moduleUnit);
  if (!Number.isFinite(unitNumber)) {
    return "medium";
  }
  if (unitNumber <= 4) {
    return "beginner";
  }
  if (unitNumber <= 10) {
    return "medium";
  }
  return "advanced";
}

function buildModuleSpecificSupplementalQuestion(topicKey, moduleUnit, moduleSerial) {
  const moduleKey = String(moduleUnit);
  const levelKey = getModuleLevelKey(moduleKey);
  const stableSerial = (Number(moduleKey) * 1000) + Number(moduleSerial || 1);
  const baseQuestion = buildSupplementalObjectiveQuestion(topicKey, stableSerial, levelKey);
  const topicName = topicDisplayNames[topicKey] || formatLabel(topicKey || "Language");
  const promptWithModule = `Module ${moduleKey} (${topicName}): ${baseQuestion.prompt}`;

  return {
    ...baseQuestion,
    prompt: promptWithModule,
    moduleUnit: moduleKey,
    moduleUnits: [moduleKey]
  };
}

function enforceUniformModuleQuestionPools(targetPerModule) {
  const numericTarget = Number(targetPerModule);
  if (!Number.isFinite(numericTarget) || numericTarget < 1) {
    return;
  }

  const moduleKeys = Object.keys(unitNames).sort((left, right) => Number(left) - Number(right));
  const levelKeys = ["beginner", "medium", "advanced"];

  Object.keys(questionSets).forEach((topicKey) => {
    const topicSet = questionSets[topicKey];
    if (!topicSet || typeof topicSet !== "object") {
      return;
    }

    const selectedByLevel = {
      beginner: [],
      medium: [],
      advanced: []
    };
    const moduleCounts = {};
    moduleKeys.forEach((moduleKey) => {
      moduleCounts[moduleKey] = 0;
    });
    const seenPromptKeys = new Set();

    const ordered = [];
    levelKeys.forEach((levelKey) => {
      const questions = Array.isArray(topicSet[levelKey]) ? topicSet[levelKey] : [];
      questions.forEach((question) => ordered.push({ question, levelKey }));
    });

    ordered.forEach(({ question, levelKey }) => {
      if (!question || typeof question !== "object") {
        return;
      }

      const moduleUnit = String(
        question.moduleUnit ||
        (Array.isArray(question.moduleUnits) && question.moduleUnits.length ? question.moduleUnits[0] : "")
      );

      if (!Object.prototype.hasOwnProperty.call(moduleCounts, moduleUnit)) {
        return;
      }

      if (moduleCounts[moduleUnit] >= numericTarget) {
        return;
      }

      const promptKey = normalizePromptForUniqueness(question.prompt);
      if (!promptKey || seenPromptKeys.has(promptKey)) {
        return;
      }

      selectedByLevel[levelKey].push({
        ...question,
        moduleUnit,
        moduleUnits: [moduleUnit]
      });

      seenPromptKeys.add(promptKey);
      moduleCounts[moduleUnit] += 1;
    });

    moduleKeys.forEach((moduleKey) => {
      const levelKey = getModuleLevelKey(moduleKey);
      let safety = 0;

      while (moduleCounts[moduleKey] < numericTarget && safety < numericTarget * 30) {
        const moduleSerial = moduleCounts[moduleKey] + 1;
        const generated = buildModuleSpecificSupplementalQuestion(topicKey, moduleKey, moduleSerial);
        const promptKey = normalizePromptForUniqueness(generated.prompt);
        safety += 1;

        if (!promptKey || seenPromptKeys.has(promptKey)) {
          continue;
        }

        selectedByLevel[levelKey].push(generated);
        seenPromptKeys.add(promptKey);
        moduleCounts[moduleKey] += 1;
      }
    });

    levelKeys.forEach((levelKey) => {
      topicSet[levelKey] = selectedByLevel[levelKey];
    });
  });
}

function auditUniformModuleQuestionPools(expectedPerModule) {
  const expected = Number(expectedPerModule);
  const moduleKeys = Object.keys(unitNames).sort((left, right) => Number(left) - Number(right));
  const report = {};

  Object.entries(questionSets).forEach(([topicKey, topicSet]) => {
    const counts = {};
    moduleKeys.forEach((moduleKey) => {
      counts[moduleKey] = { total: 0, unique: 0, deficit: Math.max(0, expected), duplicateCount: 0 };
    });

    const uniqueByModule = {};
    moduleKeys.forEach((moduleKey) => {
      uniqueByModule[moduleKey] = new Set();
    });

    ["beginner", "medium", "advanced"].forEach((levelKey) => {
      const questions = Array.isArray(topicSet[levelKey]) ? topicSet[levelKey] : [];
      questions.forEach((question) => {
        const moduleUnit = String(
          question && question.moduleUnit
            ? question.moduleUnit
            : (Array.isArray(question && question.moduleUnits) && question.moduleUnits.length ? question.moduleUnits[0] : "")
        );

        if (!Object.prototype.hasOwnProperty.call(counts, moduleUnit)) {
          return;
        }

        counts[moduleUnit].total += 1;
        const promptKey = normalizePromptForUniqueness(question && question.prompt ? question.prompt : "");
        if (!promptKey) {
          return;
        }

        if (uniqueByModule[moduleUnit].has(promptKey)) {
          counts[moduleUnit].duplicateCount += 1;
          return;
        }

        uniqueByModule[moduleUnit].add(promptKey);
      });
    });

    moduleKeys.forEach((moduleKey) => {
      counts[moduleKey].unique = uniqueByModule[moduleKey].size;
      counts[moduleKey].deficit = Math.max(0, expected - counts[moduleKey].unique);
    });

    report[topicKey] = counts;
  });

  return report;
}

function hasUniformPoolDeficits(report) {
  return Object.values(report || {}).some((moduleMap) =>
    Object.values(moduleMap || {}).some((entry) => entry && Number(entry.deficit) > 0)
  );
}

coreLanguageTopics.forEach((topicKey) => {
  ensureMinimumQuestionCount(topicKey, minimumQuestionsPerLanguage);
});

structuredTrackTopics.forEach((topicKey) => {
  ensureMinimumQuestionCount(topicKey, minimumQuestionsPerStructuredTrack);
});

const topicMeta = {
  swift: {
    title: "Swift + SwiftUI Basics Trainer",
    subtitle: "Two-phase track: Phase 1 Swift fundamentals, then Phase 2 SwiftUI state, layout, output, and debugging."
  },
  web: {
    title: "HTML + CSS + JavaScript Basics Trainer",
    subtitle: "Choose a level, then practice vocab, true/false, output prediction, debug, and code prompts."
  },
  react: {
    title: "React Basics Trainer",
    subtitle: "Choose a level, then practice vocab, true/false, output prediction, debug, and code prompts."
  },
  python: {
    title: "Python Basics Trainer",
    subtitle: "Choose a level, then practice vocab, true/false, output prediction, debug, and code prompts."
  },
  typescript: {
    title: "TypeScript Basics Trainer",
    subtitle: "Choose a level, then practice vocab, true/false, output prediction, debug, and code prompts."
  },
  java: {
    title: "Java Basics Trainer",
    subtitle: "Choose a level, then practice vocab, true/false, output prediction, debug, and code prompts."
  },
  kotlin: {
    title: "Kotlin Basics Trainer",
    subtitle: "Practice null safety, concise syntax, collections, coroutines, and Android-ready coding patterns."
  },
  markdown: {
    title: "Markdown Basics Trainer",
    subtitle: "Practice headings, lists, links, code blocks, documentation structure, output prediction, and formatting fixes."
  },
  csharp: {
    title: "C# Basics Trainer",
    subtitle: "Choose a level, then practice vocab, true/false, output prediction, debug, and code prompts."
  },
  sql: {
    title: "SQL Basics Trainer",
    subtitle: "Choose a level, then practice vocab, true/false, output prediction, debug, and code prompts."
  },
  go: {
    title: "Go Basics Trainer",
    subtitle: "Practice Go syntax, concurrency fundamentals, output prediction, and debugging patterns."
  },
  rust: {
    title: "Rust Basics Trainer",
    subtitle: "Build Rust ownership, borrowing, pattern matching, and reliability-focused coding skills."
  },
  cpp: {
    title: "C++ Basics Trainer",
    subtitle: "Train C++ fundamentals, memory-aware patterns, output reasoning, and debugging workflows."
  },
  php: {
    title: "PHP Basics Trainer",
    subtitle: "Practice practical PHP web-backend syntax, request handling, and debugging skills."
  },
  dart: {
    title: "Dart + Flutter Basics Trainer",
    subtitle: "Train on Dart language fundamentals and Flutter stateful UI patterns."
  },
  bash: {
    title: "Bash / Shell Basics Trainer",
    subtitle: "Build command-line fluency with scripting, pipelines, and automation-safe habits."
  },
  ides: {
    title: "IDEs Basics Trainer",
    subtitle: "Learn IDE fundamentals, language support, debugging workflow, and team tooling practices."
  },
  sourcecontrol: {
    title: "Source Control Basics Trainer",
    subtitle: "Practice Git and collaboration fundamentals with vocab, true/false, output, debug, and command prompts."
  },
  cloudkit: {
    title: "CloudKit Course Trainer",
    subtitle: "Practice Apple-native iCloud data modeling, sync behavior, conflict handling, and production readiness."
  },
  firebase: {
    title: "Firebase Course Trainer",
    subtitle: "Practice auth, Firestore modeling, security rules, observability, and cost-aware production workflows."
  },
  aiassist: {
    title: "AI Coding Assistants Course Trainer",
    subtitle: "Practice prompt design, verification discipline, safe usage policies, and professional AI-assisted coding workflows."
  }
};

const studyTips = {
  swift: {
    vocab: "Focus on meanings of Swift keywords and wrappers. Link each term to where you would use it in a real view.",
    tf: "Scan for absolute words like always/never. SwiftUI is state-driven, so many statements depend on state ownership.",
    code: "Write small valid pieces first: declarations, then view/layout, then behavior. Keep syntax clean before adding extras.",
    output: "Mentally execute each line in order and track the value changes before choosing an answer.",
    debug: "Look for one concrete bug first (state updates, syntax, missing return), then retest mentally."
  },
  web: {
    vocab: "Map each term to a layer: HTML (structure), CSS (presentation), JavaScript (behavior).",
    tf: "Think about browser runtime behavior: DOM updates, event handling, and CSS layout rules.",
    code: "Build in order: select elements, add behavior, then verify with a quick console or visual check.",
    output: "Trace execution step by step, especially async timing and what runs synchronously first.",
    debug: "Fix one syntax/runtime issue at a time and confirm the event/data flow is valid."
  },
  react: {
    vocab: "Tie each concept to the render cycle: props in, state changes, component re-renders.",
    tf: "React questions often hinge on immutability, effect timing, and stable identity (keys/dependencies).",
    code: "Start with component/hook shape, then state, then handlers/effects. Keep dependencies explicit.",
    output: "Predict what each render/effect does and when dependencies trigger reruns.",
    debug: "Check JSX validity, key usage, and hook dependencies to eliminate stale or broken behavior."
  },
  python: {
    vocab: "Focus on indentation, data types, and readable naming. Python rewards clarity and small steps.",
    tf: "Look for statements about whitespace, mutability, and runtime behavior.",
    code: "Start with correct indentation and function shape before adding logic details.",
    output: "Trace top-to-bottom execution and keep a small variable table as values change.",
    debug: "Most Python bugs here are indentation, missing colons, or wrong method names."
  },
  typescript: {
    vocab: "Pair every concept with type safety and compile-time checking.",
    tf: "Watch for differences between TypeScript annotations and JavaScript runtime behavior.",
    code: "Define interfaces/types first, then implement functions that satisfy those contracts.",
    output: "Evaluate JavaScript runtime output, then sanity-check whether the types align.",
    debug: "Common issues: wrong types, missing generics, and optional values not handled safely."
  },
  java: {
    vocab: "Anchor terms to classes, objects, and strong typing fundamentals.",
    tf: "Pay attention to access modifiers, static vs instance usage, and object lifecycle.",
    code: "Write class/function signatures first, then fill in logic with clear types.",
    output: "Follow object creation and method calls line by line to predict printed results.",
    debug: "Look for capitalization, semicolons, and incorrect method signatures first."
  },
  kotlin: {
    vocab: "Tie Kotlin terms to safety and expressiveness: val/var, nullability, data classes, and coroutines.",
    tf: "Watch for statements about null safety, expression syntax, and coroutine behavior.",
    code: "Start with clean function/class signatures, then add concise Kotlin logic.",
    output: "Trace Kotlin expressions and collection transforms step by step.",
    debug: "Fix nullability assumptions and coroutine/suspend misuse first."
  },
  markdown: {
    vocab: "Connect each Markdown term to docs structure: headings, lists, links, code blocks, and tables.",
    tf: "Look for subtle formatting truths, especially spacing, list behavior, and renderer expectations.",
    code: "Write clean Markdown incrementally: heading, paragraph, list/table, then verify syntax markers.",
    output: "Predict rendered result by mentally parsing each Markdown token in order.",
    debug: "Fix one formatting issue at a time: heading spacing, link syntax, list indentation, then preview."
  },
  csharp: {
    vocab: "Connect concepts to .NET patterns: properties, classes, and async tasks.",
    tf: "Many C# questions hinge on nullable behavior and value/reference semantics.",
    code: "Build correct method signatures and braces first, then add expression logic.",
    output: "Track variable updates and interpolation output in order of execution.",
    debug: "Frequent fixes involve type mismatches, missing using directives, or null handling."
  },
  sql: {
    vocab: "Map each keyword to query intent: filter, group, join, sort, or aggregate.",
    tf: "Check clause order carefully: SELECT/FROM/WHERE/GROUP BY/HAVING/ORDER BY.",
    code: "Start with SELECT and FROM, then layer WHERE, grouping, and ordering.",
    output: "Estimate result rows by applying filters and joins step by step.",
    debug: "Most SQL bugs are clause order, ambiguous column names, or missing join conditions."
  },
  go: {
    vocab: "Anchor Go terms to package layout, errors, and concurrency primitives.",
    tf: "Watch for statements about pointers, interfaces, and goroutine/channel behavior.",
    code: "Start with package/import/function shape, then add simple clear logic.",
    output: "Trace values and function calls in order, especially slice/map changes.",
    debug: "Fix compile errors first, then focus on one logic issue at a time."
  },
  rust: {
    vocab: "Tie each term to ownership, borrowing, and safety guarantees.",
    tf: "Look for compile-time safety statements vs runtime assumptions.",
    code: "Write binding and function signatures first, then satisfy ownership rules.",
    output: "Follow expression evaluation and pattern matches step by step.",
    debug: "Handle borrow/move errors first; then refine logic behavior."
  },
  cpp: {
    vocab: "Connect terms to memory, references, STL containers, and compile model.",
    tf: "Watch for syntax details, pointer safety, and object lifetime clues.",
    code: "Build includes/signatures first, then fill logic with clear types.",
    output: "Track variable mutation and stream output in exact execution order.",
    debug: "Fix compile errors and namespace/type issues before deeper logic checks."
  },
  php: {
    vocab: "Map terms to request handling, variables, arrays, and server-side flow.",
    tf: "Watch for subtle syntax details like variable prefixes and string interpolation.",
    code: "Start with valid PHP syntax and predictable output first.",
    output: "Evaluate expression results and echoed values in execution order.",
    debug: "Fix syntax and variable reference issues before refactoring logic."
  },
  dart: {
    vocab: "Tie Dart concepts to null safety, classes, and Flutter widget composition.",
    tf: "Look for statements about rebuilds, state flow, and async futures.",
    code: "Start with clean widget/function skeletons, then add state behavior.",
    output: "Trace state changes and rebuild outcomes step by step.",
    debug: "Fix setState and null-safety issues first, then verify UI output."
  },
  bash: {
    vocab: "Map shell terms to process, file, and pipeline behavior.",
    tf: "Check quoting, variable expansion, and command exit-status assumptions.",
    code: "Write simple script steps first, then add conditionals and loops.",
    output: "Predict command output by tracing expansion and pipeline flow.",
    debug: "Fix spacing/quoting and failed command handling before adding complexity."
  },
  ides: {
    vocab: "Map IDE terms to practical use: editor, debugger, extensions, run config, and language server.",
    tf: "Check whether statements are truly IDE-specific or depend on extensions/workloads.",
    code: "Write setup workflows in clear ordered steps: install, run, debug, validate.",
    output: "Predict the best IDE/tool choice from language and platform constraints.",
    debug: "Fix one tooling issue at a time: SDK/interpreter path, extension, launch config, then rerun."
  },
  cloudkit: {
    vocab: "Map CloudKit terms to real iCloud sync behavior: containers, databases, records, and zones.",
    tf: "Check ownership boundaries, sync assumptions, and conflict-handling statements carefully.",
    code: "Prioritize safe sync flow and predictable merge behavior before implementation details.",
    output: "Predict sync outcomes by tracing record ownership, network state, and conflict rules.",
    debug: "Fix schema/account/setup issues first, then verify retries and merge behavior."
  },
  firebase: {
    vocab: "Map Firebase terms to auth, Firestore, security rules, and production operations.",
    tf: "Watch for claims about rules, indexing, costs, and auth edge cases.",
    code: "Design data model and access rules first, then wire reads/writes safely.",
    output: "Predict app behavior from auth state, rules decisions, and query constraints.",
    debug: "Validate rules/index/auth setup first, then inspect data flow and retries."
  },
  aiassist: {
    vocab: "Connect AI terms to workflow outcomes: prompt scope, acceptance checks, and safety boundaries.",
    tf: "Watch for overconfident claims; verify whether guidance includes tests, evidence, and policy limits.",
    code: "Write explicit prompt contracts first, then require verifiable output and ownership-safe changes.",
    output: "Predict assistant output quality from prompt specificity, constraints, and validation steps.",
    debug: "Fix workflow issues in order: prompt ambiguity, missing checks, unverified output, then rerun review."
  },
  sourcecontrol: {
    vocab: "Tie each Git term to team workflow: branch, commit, pull request, merge, and release safety.",
    tf: "Look for statements about staging, rebasing, and history rewriting risk.",
    code: "Practice command sequences in exact order: branch, add, commit, push, then review.",
    output: "Predict repository state after each command before choosing your answer.",
    debug: "Fix one workflow issue at a time (wrong branch, missing add, bad push target)."
  }
};

let activeQuestions = [];

const unitNames = {
  "1": "Foundations (Q1-60)",
  "2": "Core Syntax (Q61-120)",
  "3": "State Basics (Q121-180)",
  "4": "Flow Practice (Q181-240)",
  "5": "Debug Patterns I (Q241-300)",
  "6": "Debug Patterns II (Q301-360)",
  "7": "Debug Review (Q361-420)",
  "8": "Output Reasoning I (Q421-480)",
  "9": "Output Reasoning II (Q481-540)",
  "10": "Language Mastery (Q541-600)",
  "11": "Testing Fundamentals (Q601-660)",
  "12": "Refactoring and Quality (Q661-720)",
  "13": "Performance and Reliability (Q721-780)",
  "14": "Real-World Scenarios (Q781-840)"
};

const questionsPerQuiz = 20;
const quizzesPerModule = 3;

const modulePassingPercent = 70;

const topicModuleNames = {
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
    "2": "Prompt Contracts and Scope",
    "3": "Context and Source Grounding",
    "4": "IDE Workflow Integration",
    "5": "Debugging Weak Prompts",
    "6": "Debugging Incorrect AI Output",
    "7": "Verification Workflow",
    "8": "Output Prediction Basics",
    "9": "Output Risk and Confidence",
    "10": "AI Workflow Mastery",
    "11": "AI-Assisted Testing Workflow",
    "12": "AI Refactoring and Quality",
    "13": "AI Safety, Privacy, and Reliability",
    "14": "AI Real-World Delivery Scenarios"
  }
};

const learningPaths = {
  guided: {
    label: "Guided Start",
    mode: "mixed",
    unit: "all",
    section: "all"
  },
  debug: {
    label: "Debug Lab",
    mode: "debug",
    unit: "all",
    section: "all"
  },
  output: {
    label: "Output Mastery",
    mode: "output",
    unit: "all",
    section: "all"
  },
  advanced: {
    label: "Advanced Lab",
    mode: "mixed",
    unit: "all",
    section: "all"
  }
};

const defaultPathButtonLabels = {
  guided: "Guided Start (Modules 1-4)",
  debug: "Debug Lab (Modules 5-7)",
  output: "Output Mastery (Modules 8-10)",
  advanced: "Advanced Lab (Modules 11-14)"
};

const swiftPathButtonLabels = {
  guided: "Phase 1: Swift Fundamentals (Modules 1-4)",
  debug: "Phase 2: SwiftUI State & Debug (Modules 5-7)",
  output: "Phase 2: SwiftUI Output Mastery (Modules 8-10)",
  advanced: "Phase 3: Swift Production Readiness (Modules 11-14)"
};

const pathUnitRanges = {
  guided: ["1", "2", "3", "4"],
  debug: ["5", "6", "7"],
  output: ["8", "9", "10"],
  advanced: ["11", "12", "13", "14"]
};

const levelKeyMap = {
  easy: "beginner",
  medium: "medium",
  hard: "advanced"
};

const state = {
  topic: "",
  level: "",
  path: "guided",
  mode: "mixed",
  source: "",
  unit: "all",
  moduleQuizPart: 1,
  moduleQuizTotal: 1,
  fullQuiz: false,
  manualUnitOverride: false,
  section: "all",
  currentIndex: 0,
  score: 0,
  selectedOption: null,
  answered: false
};

const appTitle = document.getElementById("appTitle");
const appSubtitle = document.getElementById("appSubtitle");
const studyGuideLink = document.getElementById("studyGuideLink");
const topicCard = document.getElementById("topicCard");
const topicButtons = document.querySelectorAll(".topic-btn");
const levelCard = document.getElementById("levelCard");
const levelButtons = document.querySelectorAll(".level-btn");
const pathCard = document.getElementById("pathCard");
const pathButtons = document.querySelectorAll(".path-btn");
const languageProgressCard = document.getElementById("languageProgressCard");
const languageProgressTitle = document.getElementById("languageProgressTitle");
const unitProgressText = document.getElementById("unitProgressText");
const languageScoreText = document.getElementById("languageScoreText");
const badgeProgressText = document.getElementById("badgeProgressText");
const resetProgressBtn = document.getElementById("resetProgressBtn");
const courseRoadmapCard = document.getElementById("courseRoadmapCard");
const courseRoadmapTitle = document.getElementById("courseRoadmapTitle");
const courseRoadmapObjective = document.getElementById("courseRoadmapObjective");
const courseRoadmapOutcome = document.getElementById("courseRoadmapOutcome");
const statusBar = document.getElementById("statusBar");
const progressText = document.getElementById("progressText");
const activeUnitText = document.getElementById("activeUnitText");
const scoreText = document.getElementById("scoreText");
const questionCard = document.getElementById("questionCard");
const questionType = document.getElementById("questionType");
const questionPrompt = document.getElementById("questionPrompt");
const answerArea = document.getElementById("answerArea");
const studyTip = document.getElementById("studyTip");
const hintBtn = document.getElementById("hintBtn");
const submitBtn = document.getElementById("submitBtn");
const nextBtn = document.getElementById("nextBtn");
const feedback = document.getElementById("feedback");
const resultsCard = document.getElementById("resultsCard");
const finalScore = document.getElementById("finalScore");
const rewardSummary = document.getElementById("rewardSummary");
const nextModuleBtn = document.getElementById("nextModuleBtn");
const retryModuleBtn = document.getElementById("retryModuleBtn");
const restartBtn = document.getElementById("restartBtn");
const changeSetupBtn = document.getElementById("changeSetupBtn");
const changeLevelBtn = document.getElementById("changeLevelBtn");
const changeTopicBtn = document.getElementById("changeTopicBtn");

const searchParams = new URLSearchParams(window.location.search);
const selectedTopicStorageKey = "ltc-selected-topic";
const topicAliases = {
  "swiftui": "swift",
  "swift + swiftui": "swift",
  "html": "web",
  "javascript": "web",
  "js": "web",
  "html css javascript": "web",
  "html + css + javascript": "web",
  "c#": "csharp",
  "c-sharp": "csharp",
  "c sharp": "csharp",
  "kotlin": "kotlin",
  "kt": "kotlin",
  "kotlinlang": "kotlin",
  "android kotlin": "kotlin",
  "markdown": "markdown",
  "md": "markdown",
  "source control": "sourcecontrol",
  "source-control": "sourcecontrol",
  "version control": "sourcecontrol",
  "git": "sourcecontrol",
  "github": "sourcecontrol",
  "cloud kit": "cloudkit",
  "icloud kit": "cloudkit",
  "icloud": "cloudkit",
  "firebase": "firebase",
  "google firebase": "firebase",
  "ide": "ides",
  "ides": "ides",
  "integrated development environment": "ides",
  "integrated development environments": "ides",
  "vs code": "ides",
  "vscode": "ides",
  "xcode": "ides",
  "intellij": "ides",
  "pycharm": "ides",
  "android studio": "ides",
  "visual studio": "ides",
  "ai assistant": "aiassist",
  "ai assistants": "aiassist",
  "ai coding assistants": "aiassist",
  "coding assistant": "aiassist",
  "code assistant": "aiassist",
  "copilot": "aiassist",
  "github copilot": "aiassist",
  "llm": "aiassist",
  "llms": "aiassist",
  "prompt engineering": "aiassist",
  "ai tools": "aiassist",
  "go": "go",
  "golang": "go",
  "rust": "rust",
  "c++": "cpp",
  "cpp": "cpp",
  "c plus plus": "cpp",
  "php": "php",
  "dart": "dart",
  "flutter": "dart",
  "bash": "bash",
  "shell": "bash",
  "shell scripting": "bash",
  "c": "csharp",
  "ts": "typescript"
};

function resolveTopicKey(rawTopic) {
  let decoded = "";
  try {
    decoded = decodeURIComponent((rawTopic || "").replace(/\+/g, " "));
  } catch (error) {
    decoded = (rawTopic || "").replace(/\+/g, " ");
  }

  const normalized = normalize(decoded);
  if (!normalized) {
    return "";
  }

  if (Object.prototype.hasOwnProperty.call(questionSets, normalized)) {
    return normalized;
  }

  const alias = topicAliases[normalized] || "";
  if (Object.prototype.hasOwnProperty.call(questionSets, alias)) {
    return alias;
  }

  return "";
}

const topicParamRaw = searchParams.get("topic");
const topicParamDirect = (topicParamRaw || "").trim().toLowerCase();
const fullQuizParam = (searchParams.get("full") || "").trim().toLowerCase();
const initialFullQuiz = fullQuizParam === "1" || fullQuizParam === "true" || fullQuizParam === "yes";
const initialTopic = Object.prototype.hasOwnProperty.call(questionSets, topicParamDirect)
  ? topicParamDirect
  : resolveTopicKey(topicParamRaw);

if (initialTopic) {
  try {
    localStorage.setItem(selectedTopicStorageKey, initialTopic);
  } catch (error) {}
}

const unitParamRaw = searchParams.get("unit");
const unitParam = (unitParamRaw || "").trim();
const initialUnit = Object.prototype.hasOwnProperty.call(unitNames, unitParam) ? unitParam : "";
const modeParamRaw = (searchParams.get("mode") || "").trim().toLowerCase();
const allowedInitialModes = new Set(["mixed", "debug", "output", "vocab", "tf", "blank", "code"]);
const initialMode = allowedInitialModes.has(modeParamRaw) ? modeParamRaw : "";
const sourceParamRaw = (searchParams.get("source") || "").trim().toLowerCase();
const initialSource = sourceParamRaw || "";
const progressStorageKey = "ltc-language-progress-v1";
const rewardStorageKey = "ltc-rewards-v1";
const learningActivityStorageKey = "ltc-learning-activity-v1";
const moduleStudyGateStorageKey = "ltc-module-study-reviewed-v1";
const moduleQuestionHistoryStorageKey = "ltc-module-question-history-v1";
let pendingCourseGateMessage = "";
let latestSessionRewards = [];

function createEmptyUnitProgress() {
  return {
    attempts: 0,
    bestScore: 0,
    bestTotal: 0,
    lastScore: 0,
    lastTotal: 0,
    lastPassed: false,
    passedQuizParts: [],
    completed: false
  };
}

function createEmptyTopicProgress() {
  const units = {};
  Object.keys(unitNames).forEach((unitKey) => {
    units[unitKey] = createEmptyUnitProgress();
  });

  return {
    units
  };
}

function loadProgressStore() {
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

const progressStore = loadProgressStore();

function saveProgressStore() {
  localStorage.setItem(progressStorageKey, JSON.stringify(progressStore));
}

function createEmptyRewardStore() {
  return {
    moduleBadges: {},
    languageBadges: {},
    points: 0
  };
}

function loadRewardStore() {
  try {
    const raw = localStorage.getItem(rewardStorageKey);
    if (!raw) {
      return createEmptyRewardStore();
    }

    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") {
      return createEmptyRewardStore();
    }

    return {
      moduleBadges: parsed.moduleBadges && typeof parsed.moduleBadges === "object" ? parsed.moduleBadges : {},
      languageBadges: parsed.languageBadges && typeof parsed.languageBadges === "object" ? parsed.languageBadges : {},
      points: Number.isFinite(Number(parsed.points)) ? Number(parsed.points) : 0
    };
  } catch (error) {
    return createEmptyRewardStore();
  }
}

const rewardStore = loadRewardStore();

function loadLearningActivityStore() {
  try {
    const raw = localStorage.getItem(learningActivityStorageKey);
    if (!raw) {
      return { streak: 0, lastDate: "", lastTopic: "", lastUnit: "", sessions: 0 };
    }

    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") {
      return { streak: 0, lastDate: "", lastTopic: "", lastUnit: "", sessions: 0 };
    }

    return {
      streak: Number.isFinite(Number(parsed.streak)) ? Number(parsed.streak) : 0,
      lastDate: typeof parsed.lastDate === "string" ? parsed.lastDate : "",
      lastTopic: typeof parsed.lastTopic === "string" ? parsed.lastTopic : "",
      lastUnit: typeof parsed.lastUnit === "string" ? parsed.lastUnit : "",
      sessions: Number.isFinite(Number(parsed.sessions)) ? Number(parsed.sessions) : 0
    };
  } catch (error) {
    return { streak: 0, lastDate: "", lastTopic: "", lastUnit: "", sessions: 0 };
  }
}

function saveLearningActivityStore() {
  localStorage.setItem(learningActivityStorageKey, JSON.stringify(learningActivityStore));
}

function toDayKey(date) {
  const localDate = new Date(date.getTime() - (date.getTimezoneOffset() * 60000));
  return localDate.toISOString().slice(0, 10);
}

function getYesterdayKey(dayKey) {
  if (!dayKey) {
    return "";
  }
  const date = new Date(`${dayKey}T00:00:00`);
  if (Number.isNaN(date.getTime())) {
    return "";
  }
  date.setDate(date.getDate() - 1);
  return toDayKey(date);
}

const learningActivityStore = loadLearningActivityStore();

function recordLearningActivity(topic, unitKey) {
  const todayKey = toDayKey(new Date());
  const lastDate = learningActivityStore.lastDate || "";

  if (!lastDate) {
    learningActivityStore.streak = 1;
  } else if (lastDate !== todayKey) {
    const yesterdayKey = getYesterdayKey(todayKey);
    learningActivityStore.streak = lastDate === yesterdayKey
      ? Math.max(1, Number(learningActivityStore.streak) + 1)
      : 1;
  }

  learningActivityStore.lastDate = todayKey;
  learningActivityStore.lastTopic = String(topic || "");
  learningActivityStore.lastUnit = String(unitKey || "");
  learningActivityStore.sessions = Number(learningActivityStore.sessions || 0) + 1;
  saveLearningActivityStore();
}

function loadModuleStudyGateStore() {
  try {
    const raw = localStorage.getItem(moduleStudyGateStorageKey);
    if (!raw) {
      return {};
    }
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch (error) {
    return {};
  }
}

const moduleStudyGateStore = loadModuleStudyGateStore();

function loadModuleQuestionHistoryStore() {
  try {
    const raw = localStorage.getItem(moduleQuestionHistoryStorageKey);
    if (!raw) {
      return {};
    }
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch (error) {
    return {};
  }
}

const moduleQuestionHistoryStore = loadModuleQuestionHistoryStore();

function saveModuleQuestionHistoryStore() {
  localStorage.setItem(moduleQuestionHistoryStorageKey, JSON.stringify(moduleQuestionHistoryStore));
}

function getModuleQuestionHistoryKey(topic, moduleUnit) {
  if (!topic || !moduleUnit || moduleUnit === "all") {
    return "";
  }
  return `${topic}:${moduleUnit}`;
}

function getServedPromptKeys(topic, moduleUnit) {
  const key = getModuleQuestionHistoryKey(topic, moduleUnit);
  if (!key) {
    return [];
  }
  const values = moduleQuestionHistoryStore[key];
  return Array.isArray(values) ? values : [];
}

function clearServedPromptKeys(topic, moduleUnit) {
  const key = getModuleQuestionHistoryKey(topic, moduleUnit);
  if (!key) {
    return;
  }
  moduleQuestionHistoryStore[key] = [];
  saveModuleQuestionHistoryStore();
}

function recordServedPromptKeys(topic, moduleUnit, prompts) {
  const key = getModuleQuestionHistoryKey(topic, moduleUnit);
  if (!key || !Array.isArray(prompts) || !prompts.length) {
    return;
  }

  const existing = Array.isArray(moduleQuestionHistoryStore[key]) ? moduleQuestionHistoryStore[key] : [];
  const merged = [...existing, ...prompts.filter(Boolean)];
  moduleQuestionHistoryStore[key] = Array.from(new Set(merged)).slice(-600);
  saveModuleQuestionHistoryStore();
}

function getModuleStudyGateKey(topic, unitKey) {
  if (!topic || !unitKey || unitKey === "all") {
    return "";
  }
  return `${topic}:${unitKey}`;
}

function hasCompletedModuleStudyGuide(topic, unitKey) {
  const key = getModuleStudyGateKey(topic, unitKey);
  if (!key) {
    return true;
  }
  return Boolean(moduleStudyGateStore[key]);
}

function saveRewardStore() {
  localStorage.setItem(rewardStorageKey, JSON.stringify(rewardStore));
}

function ensureRewardTopic(topic) {
  if (!rewardStore.moduleBadges[topic] || typeof rewardStore.moduleBadges[topic] !== "object") {
    rewardStore.moduleBadges[topic] = {};
  }
  return rewardStore.moduleBadges[topic];
}

function getModuleBadgeCount(topic) {
  const topicBadges = rewardStore.moduleBadges[topic];
  if (!topicBadges || typeof topicBadges !== "object") {
    return 0;
  }
  return Object.keys(topicBadges).length;
}

function hasLanguageMasteryBadge(topic) {
  return Boolean(rewardStore.languageBadges[topic]);
}

function renderRewardProgress(topic) {
  if (!badgeProgressText || !topic) {
    return;
  }

  const moduleBadgeCount = getModuleBadgeCount(topic);
  const masteryText = hasLanguageMasteryBadge(topic) ? "Earned 🏆" : "Not earned yet";
  badgeProgressText.textContent = `Rewards: ${moduleBadgeCount} module badges • Language mastery: ${masteryText} • XP: ${rewardStore.points}`;
}

function awardCompletionRewards(topic, unitKey, modulePassed, wasCompletedBefore) {
  const rewardMessages = [];

  if (!topic || !unitKey || unitKey === "all" || !modulePassed) {
    return rewardMessages;
  }

  const topicBadges = ensureRewardTopic(topic);

  if (!wasCompletedBefore && !topicBadges[unitKey]) {
    topicBadges[unitKey] = true;
    rewardStore.points += 100;
    rewardMessages.push(`🏅 Module badge earned for ${formatUnitLabel(unitKey)} (+100 XP).`);
  }

  if (isCourseFullyCompleted(topic) && !rewardStore.languageBadges[topic]) {
    rewardStore.languageBadges[topic] = true;
    rewardStore.points += 500;
    rewardMessages.push(`🏆 ${formatLabel(topic)} language mastery badge earned (+500 XP).`);
  }

  if (rewardMessages.length) {
    saveRewardStore();
  }

  return rewardMessages;
}

function clearTopicRewards(topic) {
  if (!topic) {
    return;
  }
  delete rewardStore.moduleBadges[topic];
  delete rewardStore.languageBadges[topic];
  saveRewardStore();
}

function ensureTopicProgress(topic) {
  if (!progressStore[topic]) {
    progressStore[topic] = createEmptyTopicProgress();
  }

  const topicProgress = progressStore[topic];
  if (!topicProgress.units) {
    topicProgress.units = {};
  }

  Object.keys(unitNames).forEach((unitKey) => {
    if (!topicProgress.units[unitKey]) {
      topicProgress.units[unitKey] = createEmptyUnitProgress();
    } else if (!Array.isArray(topicProgress.units[unitKey].passedQuizParts)) {
      topicProgress.units[unitKey].passedQuizParts = [];
    }
  });

  return topicProgress;
}

function getModuleQuizCount(topic, moduleUnit) {
  if (topic && moduleUnit && moduleUnit !== "all") {
    return quizzesPerModule;
  }
  return 1;
}

function getQuestionsPerCurrentQuiz(topic, moduleUnit, isFullQuizMode) {
  if (isFullQuizMode) {
    return questionsPerQuiz;
  }

  return questionsPerQuiz;
}

function getPassedQuizParts(topic, unitProgress) {
  if (!unitProgress || !Array.isArray(unitProgress.passedQuizParts)) {
    return [];
  }
  const maxParts = getModuleQuizCount(topic, "1");
  return unitProgress.passedQuizParts
    .map((value) => Number(value))
    .filter((value) => Number.isFinite(value) && value >= 1 && value <= maxParts);
}

function isUnitCompletedForTopic(topic, unitProgress) {
  if (!unitProgress) {
    return false;
  }
  const totalParts = getModuleQuizCount(topic, "1");
  if (totalParts > 1) {
    return getPassedQuizParts(topic, unitProgress).length >= totalParts;
  }
  return Boolean(unitProgress.completed);
}

function getNextRequiredQuizPart(topic, unitKey) {
  if (!topic || !unitKey || unitKey === "all") {
    return 1;
  }

  const topicProgress = ensureTopicProgress(topic);
  const unitProgress = topicProgress.units[unitKey] || createEmptyUnitProgress();
  const totalParts = getModuleQuizCount(topic, unitKey);
  const passedParts = new Set(getPassedQuizParts(topic, unitProgress));

  for (let part = 1; part <= totalParts; part += 1) {
    if (!passedParts.has(part)) {
      return part;
    }
  }

  return totalParts;
}

function calculateLanguageFinalScore(topicProgress) {
  const unitKeys = Object.keys(unitNames);
  const percentages = unitKeys
    .map((unitKey) => ({
      unitKey,
      unitProgress: topicProgress.units[unitKey]
    }))
    .filter(({ unitKey, unitProgress }) => isUnitCompletedForTopic(state.topic, unitProgress) && Number(unitKey) >= 1 && unitProgress.bestTotal > 0)
    .map(({ unitProgress }) => unitProgress)
    .map((unitProgress) => (unitProgress.bestScore / unitProgress.bestTotal) * 100);

  if (!percentages.length) {
    return null;
  }

  const total = percentages.reduce((sum, value) => sum + value, 0);
  return total / percentages.length;
}

function formatPercent(value) {
  return `${Math.round(value)}%`;
}

function renderLanguageProgress() {
  if (!state.topic) {
    languageProgressCard.classList.add("hidden");
    return;
  }

  const topicProgress = ensureTopicProgress(state.topic);
  const totalUnits = Object.keys(unitNames).length;
  const completedCount = Object.keys(unitNames).filter((unitKey) => isUnitCompletedForTopic(state.topic, topicProgress.units[unitKey])).length;
  const finalScore = calculateLanguageFinalScore(topicProgress);

  languageProgressTitle.textContent = `${formatLabel(state.topic)} Progress`;
  unitProgressText.textContent = `Modules completed: ${completedCount}/${totalUnits} • Every module requires ${quizzesPerModule} passed quizzes (${questionsPerQuiz} questions/quiz) at ${modulePassingPercent}%+.`;
  languageScoreText.textContent = finalScore === null
    ? "Final language score: --"
    : `Final language score: ${formatPercent(finalScore)}`;
  renderRewardProgress(state.topic);
  languageProgressCard.classList.remove("hidden");
}

function getModuleFocusText(topic, unitKey) {
  const unitNumber = Number(unitKey);
  const topicLabel = formatLabel(topic);
  const moduleLabel = getModuleNameForTopic(topic, unitKey);

  if (!Number.isFinite(unitNumber)) {
    return `Build practical ${topicLabel} confidence through progressive module checkpoints.`;
  }

  if (unitNumber <= 4) {
    return `Build core ${topicLabel} foundations with ${moduleLabel} before moving to advanced problem-solving.`;
  }
  if (unitNumber <= 7) {
    return `Strengthen troubleshooting skills in ${topicLabel} by completing ${moduleLabel} and related debug patterns.`;
  }
  if (unitNumber <= 10) {
    return `Improve output reasoning and applied decision-making in ${topicLabel} with ${moduleLabel}.`;
  }

  return `Complete production-readiness training in ${topicLabel} through ${moduleLabel} and final scenario modules.`;
}

function getPathRoadmapCopy(pathKey, topic, plannedModule, isFullQuizMode) {
  const topicLabel = formatLabel(topic);
  const moduleLabel = formatUnitLabel(plannedModule);
  const pathLabel = (learningPaths[pathKey] && learningPaths[pathKey].label) || "Guided Start";

  if (isFullQuizMode) {
    return {
      objective: `Objective: Full assessment mode. Start at ${moduleLabel} and measure complete ${topicLabel} readiness across all modules.`,
      outcome: `Expected outcome: Score ${modulePassingPercent}%+ on each module checkpoint to mark the full ${topicLabel} course as complete.`
    };
  }

  if (pathKey === "debug") {
    return {
      objective: `Objective (${pathLabel}): ${moduleLabel}. Practice systematic bug isolation, error reading, and fix validation for ${topicLabel}.`,
      outcome: `Expected outcome: Reach ${modulePassingPercent}%+ to pass this troubleshooting checkpoint and unlock the next debugging module.`
    };
  }

  if (pathKey === "output") {
    return {
      objective: `Objective (${pathLabel}): ${moduleLabel}. Build output prediction accuracy and reasoning speed for ${topicLabel} scenarios.`,
      outcome: `Expected outcome: Reach ${modulePassingPercent}%+ to pass this output checkpoint and unlock the next output reasoning module.`
    };
  }

  if (pathKey === "advanced") {
    return {
      objective: `Objective (${pathLabel}): ${moduleLabel}. Complete high-complexity ${topicLabel} tasks with production-style decisions, bug handling, and delivery tradeoffs.`,
      outcome: `Expected outcome: Reach ${modulePassingPercent}%+ to pass this advanced checkpoint and finish the course with stronger project implementation readiness.`
    };
  }

  return {
    objective: `Objective (${pathLabel}): ${moduleLabel}. Build core fluency and steady fundamentals before progressing to specialized modules.`,
    outcome: `Expected outcome: Reach ${modulePassingPercent}%+ to pass this foundation checkpoint and unlock the next step in your course path.`
  };
}

function renderCourseRoadmap() {
  if (!courseRoadmapCard || !courseRoadmapTitle || !courseRoadmapObjective || !courseRoadmapOutcome) {
    return;
  }

  if (state.source === "workshop" && state.mode === "debug" && !state.fullQuiz) {
    courseRoadmapCard.classList.add("hidden");
    return;
  }

  if (!state.topic) {
    courseRoadmapCard.classList.add("hidden");
    return;
  }

  const plannedModule = state.fullQuiz
    ? getFirstIncompleteModule(state.topic)
    : (state.unit && state.unit !== "all" ? state.unit : getFirstIncompleteModule(state.topic));
  const plannedLabel = formatUnitLabel(plannedModule);
  const topicLabel = formatLabel(state.topic);
  const focusText = getModuleFocusText(state.topic, plannedModule);
  const pathCopy = getPathRoadmapCopy(state.path, state.topic, plannedModule, state.fullQuiz);

  courseRoadmapTitle.textContent = `${topicLabel} Course Roadmap`;
  courseRoadmapObjective.textContent = `${pathCopy.objective} ${focusText}`;
  courseRoadmapOutcome.textContent = pathCopy.outcome;
  courseRoadmapCard.classList.remove("hidden");
}

function assignUnitForCurrentPath() {
  if (!state.topic) {
    state.unit = "all";
    return;
  }

  const range = pathUnitRanges[state.path] || pathUnitRanges.guided;
  const topicProgress = ensureTopicProgress(state.topic);
  const nextUnit = range.find((unitKey) => !isUnitCompletedForTopic(state.topic, topicProgress.units[unitKey]));
  state.unit = nextUnit || range[range.length - 1];
}

function isModulePassed(score, total) {
  if (!total) {
    return false;
  }
  return (score / total) * 100 >= modulePassingPercent;
}

function isCourseFullyCompleted(topic) {
  const topicProgress = ensureTopicProgress(topic);
  return Object.keys(unitNames).every((unitKey) => isUnitCompletedForTopic(topic, topicProgress.units[unitKey]));
}

function getFirstIncompleteModule(topic) {
  const topicProgress = ensureTopicProgress(topic);
  const unitKeys = Object.keys(unitNames);
  const nextUnit = unitKeys.find((unitKey) => !isUnitCompletedForTopic(topic, topicProgress.units[unitKey]));
  return nextUnit || unitKeys[unitKeys.length - 1];
}

function getAllowedModuleForCourse(topic, requestedModule) {
  if (!requestedModule || requestedModule === "all") {
    return requestedModule;
  }

  if (isCourseFullyCompleted(topic)) {
    return requestedModule;
  }

  const firstIncomplete = getFirstIncompleteModule(topic);
  return Number(requestedModule) <= Number(firstIncomplete) ? requestedModule : firstIncomplete;
}

function getPathProgressCopy(pathKey) {
  if (pathKey === "debug") {
    return {
      checkpointLabel: "debugging checkpoint",
      unlockLabel: "next debugging module",
      sequenceLabel: "troubleshooting sequence"
    };
  }

  if (pathKey === "output") {
    return {
      checkpointLabel: "output checkpoint",
      unlockLabel: "next output reasoning module",
      sequenceLabel: "output mastery sequence"
    };
  }

  if (pathKey === "advanced") {
    return {
      checkpointLabel: "advanced checkpoint",
      unlockLabel: "next advanced module",
      sequenceLabel: "advanced course sequence"
    };
  }

  return {
    checkpointLabel: "foundation checkpoint",
    unlockLabel: "next foundation module",
    sequenceLabel: "course sequence"
  };
}

function buildCourseGateMessage(topic, requestedModule, allowedModule, pathKey) {
  if (!requestedModule || requestedModule === "all" || requestedModule === allowedModule) {
    return "";
  }

  const pathInfo = getPathProgressCopy(pathKey);
  const requestedLabel = formatUnitLabel(requestedModule);
  const allowedLabel = formatUnitLabel(allowedModule);
  return `${formatLabel(topic)} ${pathInfo.sequenceLabel} is sequential. ${requestedLabel} is locked until earlier modules are passed. Starting ${allowedLabel} instead.`;
}

function saveUnitProgress() {
  if (!state.topic || !state.unit || state.unit === "all") {
    latestSessionRewards = [];
    return { modulePassed: false, moduleCompletedThisAttempt: false };
  }

  const topicProgress = ensureTopicProgress(state.topic);
  const unitProgress = topicProgress.units[state.unit];
  const wasCompletedBefore = isUnitCompletedForTopic(state.topic, unitProgress);
  const modulePassed = isModulePassed(state.score, activeQuestions.length);

  unitProgress.attempts += 1;
  unitProgress.lastScore = state.score;
  unitProgress.lastTotal = activeQuestions.length;
  unitProgress.lastPassed = modulePassed;

  const moduleParts = getModuleQuizCount(state.topic, state.unit);

  if (modulePassed && moduleParts > 1) {
    const currentPart = Number(state.moduleQuizPart) || 1;
    const existingParts = new Set(getPassedQuizParts(state.topic, unitProgress));
    existingParts.add(currentPart);
    unitProgress.passedQuizParts = Array.from(existingParts).sort((left, right) => left - right);
  } else if (moduleParts <= 1) {
    unitProgress.passedQuizParts = [];
  }

  const nowCompleted = moduleParts > 1
    ? getPassedQuizParts(state.topic, unitProgress).length >= moduleParts
    : modulePassed;

  if (nowCompleted) {
    unitProgress.completed = true;
  }

  const currentPercent = activeQuestions.length > 0 ? state.score / activeQuestions.length : 0;
  const bestPercent = unitProgress.bestTotal > 0 ? unitProgress.bestScore / unitProgress.bestTotal : 0;

  if (currentPercent >= bestPercent) {
    unitProgress.bestScore = state.score;
    unitProgress.bestTotal = activeQuestions.length;
  }

  saveProgressStore();
  const moduleCompletedThisAttempt = nowCompleted && !wasCompletedBefore;
  latestSessionRewards = awardCompletionRewards(state.topic, state.unit, moduleCompletedThisAttempt, wasCompletedBefore);
  recordLearningActivity(state.topic, state.unit);
  renderLanguageProgress();
  return { modulePassed, moduleCompletedThisAttempt };
}

function resetCurrentLanguageProgress() {
  if (!state.topic) {
    return;
  }

  progressStore[state.topic] = createEmptyTopicProgress();
  saveProgressStore();
  clearTopicRewards(state.topic);
  renderLanguageProgress();
}

function normalize(value) {
  return value.replace(/\s+/g, " ").trim().toLowerCase();
}

function normalizeCompact(value) {
  return normalize(value).replace(/[^a-z0-9]+/g, "");
}

function getCheckAlternatives(check) {
  if (typeof check !== "string") {
    return [];
  }
  return check
    .split("||")
    .map((option) => normalize(option))
    .filter(Boolean);
}

function checkMatchesSubmission(normalizedSubmission, compactSubmission, check) {
  const alternatives = getCheckAlternatives(check);
  if (!alternatives.length) {
    return false;
  }
  return alternatives.some((option) => {
    if (normalizedSubmission.includes(option)) {
      return true;
    }
    const compactOption = normalizeCompact(option);
    if (compactOption.length < 3) {
      return false;
    }
    return compactSubmission.includes(compactOption);
  });
}

function formatCheckForDisplay(check) {
  if (typeof check !== "string") {
    return "";
  }
  if (!check.includes("||")) {
    return check;
  }
  return check
    .split("||")
    .map((option) => option.trim())
    .filter(Boolean)
    .join(" OR ");
}

function formatLabel(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function getModuleNameForTopic(topic, unitValue) {
  const topicNames = topicModuleNames[topic] || {};
  return topicNames[unitValue] || unitNames[unitValue] || "General";
}

function formatUnitLabel(unitValue) {
  if (state.source === "workshop" && state.mode === "debug" && !state.fullQuiz) {
    return "Workshop Debug Lab";
  }
  if (unitValue === "all") {
    return "All Modules";
  }
  return `Module ${unitValue}: ${getModuleNameForTopic(state.topic, unitValue)}`;
}

function updateActiveUnitText() {
  if (!activeUnitText) {
    return;
  }
  if (state.source === "workshop" && state.mode === "debug" && !state.fullQuiz) {
    activeUnitText.textContent = "Workshop Debug Lab • 50 Unique Drills";
    return;
  }
  const baseLabel = formatUnitLabel(state.unit);
  if (!state.fullQuiz && state.moduleQuizTotal > 1) {
    activeUnitText.textContent = `${baseLabel} • Quiz ${state.moduleQuizPart}/${state.moduleQuizTotal}`;
    return;
  }
  activeUnitText.textContent = baseLabel;
}

function resolveLevelKey(levelValue) {
  return levelKeyMap[levelValue] || "medium";
}

function resolveProgressiveLevel(unitValue) {
  const unitNumber = Number(unitValue);
  if (!Number.isFinite(unitNumber)) {
    return "medium";
  }
  if (unitNumber <= 3) {
    return "easy";
  }
  if (unitNumber <= 7) {
    return "medium";
  }
  return "hard";
}

function resolvePathFromUnit(unitValue) {
  const unitNumber = Number(unitValue);
  if (!Number.isFinite(unitNumber)) {
    return "guided";
  }
  if (unitNumber <= 4) {
    return "guided";
  }
  if (unitNumber <= 7) {
    return "debug";
  }
  return "output";
}

function applyPathPreset(pathKey) {
  const preset = learningPaths[pathKey] || learningPaths.guided;
  state.path = pathKey in learningPaths ? pathKey : "guided";
  state.mode = preset.mode;
  state.unit = preset.unit;
  state.manualUnitOverride = false;
  state.section = preset.section;
}

function shuffleArray(items) {
  const next = [...items];
  for (let index = next.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [next[index], next[swapIndex]] = [next[swapIndex], next[index]];
  }
  return next;
}

function hashString(value) {
  let hash = 2166136261;
  const text = String(value || "");
  for (let index = 0; index < text.length; index += 1) {
    hash ^= text.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function seededShuffle(items, seedKey) {
  const next = [...items];
  let seed = hashString(seedKey || "ltc-seed") || 1;

  const nextRandom = () => {
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
    return seed / 4294967296;
  };

  for (let index = next.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(nextRandom() * (index + 1));
    [next[index], next[swapIndex]] = [next[swapIndex], next[index]];
  }

  return next;
}

function normalizeToken(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokenize(value) {
  return normalizeToken(value)
    .split(" ")
    .filter((token) => token.length >= 3);
}

const globalModuleFocusTerms = {
  guided: ["foundation", "syntax", "basic", "type", "state", "layout", "function", "array", "flow"],
  debug: ["debug", "fix", "bug", "error", "issue", "troubleshoot"],
  output: ["output", "print", "predict", "result", "trace"],
  advanced: ["advanced", "testing", "refactor", "performance", "reliability", "architecture", "scenario"]
};

const swiftModuleFocusTerms = {
  "1": ["let", "var", "string", "int", "syntax"],
  "2": ["optional", "nil", "if let", "guard", "type"],
  "3": ["state", "binding", "observedobject", "data flow"],
  "4": ["swiftui", "vstack", "hstack", "text", "button", "view"],
  "5": ["debug", "fix", "compile", "error"],
  "6": ["swiftui", "state", "binding", "debug"],
  "7": ["debug", "review", "bug", "fix"],
  "8": ["output", "print", "interpolation", "trace"],
  "9": ["output", "swiftui", "state", "render"],
  "10": ["mastery", "scenario", "reasoning", "integration", "architecture", "api design"],
  "11": ["test", "xctest", "assert", "unit"],
  "12": ["refactor", "clean", "readable", "quality", "code review"],
  "13": ["performance", "memory", "async", "reliability", "cloudkit", "sync", "conflict"],
  "14": ["real", "production", "architecture", "scenario", "firebase", "auth", "firestore", "keychain"]
};

function buildModuleFocusTerms(topic, unitKey, pathKey) {
  const topicModuleLabel = getModuleNameForTopic(topic, unitKey);
  const labelTerms = tokenize(topicModuleLabel);
  const pathTerms = globalModuleFocusTerms[pathKey] || globalModuleFocusTerms.guided;
  const topicSpecific = topic === "swift" ? (swiftModuleFocusTerms[unitKey] || []) : [];
  const combined = [...labelTerms, ...pathTerms, ...topicSpecific].map((term) => normalizeToken(term));
  return [...new Set(combined)].filter(Boolean);
}

function buildQuestionSearchText(question) {
  if (!question || typeof question !== "object") {
    return "";
  }

  const checksText = Array.isArray(question.checks) ? question.checks.join(" ") : "";
  const optionsText = Array.isArray(question.options) ? question.options.join(" ") : "";
  const pieces = [
    question.prompt,
    question.explanation,
    question.sample,
    checksText,
    optionsText,
    question.starterCode
  ];

  return normalizeToken(pieces.filter(Boolean).join(" "));
}

function scoreQuestionForModule(question, focusTerms) {
  const haystack = buildQuestionSearchText(question);
  if (!haystack) {
    return 0;
  }

  let score = 0;
  focusTerms.forEach((term) => {
    if (!term) {
      return;
    }
    if (haystack.includes(term)) {
      score += term.length >= 6 ? 2 : 1;
    }
  });
  return score;
}

function selectQuizQuestions(candidates, targetCount, seedKey, focusTerms = [], moduleUnitKey = "1", topicKey = "", quizPart = 1) {
  if (!Array.isArray(candidates) || !candidates.length) {
    return [];
  }

  const moduleScopedCandidates = candidates.filter((question) => questionMatchesModuleUnit(question, moduleUnitKey));
  if (!moduleScopedCandidates.length) {
    return [];
  }

  const ranked = moduleScopedCandidates.map((question, index) => ({
    question,
    index,
    score: focusTerms.length ? scoreQuestionForModule(question, focusTerms) : 0
  }));

  const focused = ranked.filter((item) => item.score > 0);
  const fallback = ranked.filter((item) => item.score === 0);

  focused.sort((left, right) => right.score - left.score || left.index - right.index);

  const focusedShuffled = seededShuffle(focused, `${seedKey}-focused`);
  const fallbackShuffled = seededShuffle(fallback, `${seedKey}-fallback`);

  const combinedRaw = [...focusedShuffled, ...fallbackShuffled].map((item) => item.question);
  const seenPromptKeys = new Set();
  const combined = combinedRaw.filter((question) => {
    const key = normalizePromptForUniqueness(question && question.prompt ? question.prompt : JSON.stringify(question));
    if (seenPromptKeys.has(key)) {
      return false;
    }
    seenPromptKeys.add(key);
    return true;
  });

  if (!combined.length) {
    return [];
  }

  const isSwiftModuleSession = topicKey === "swift" && moduleUnitKey && moduleUnitKey !== "all" && !String(seedKey || "").includes("|full|");
  let workingPool = combined;

  if (isSwiftModuleSession) {
    const servedSet = new Set(getServedPromptKeys(topicKey, moduleUnitKey));
    const unseenPool = combined.filter((question) => {
      const promptKey = normalizePromptForUniqueness(question && question.prompt ? question.prompt : JSON.stringify(question));
      return !servedSet.has(promptKey);
    });

    if (unseenPool.length >= Math.min(targetCount, combined.length)) {
      workingPool = unseenPool;
    } else {
      clearServedPromptKeys(topicKey, moduleUnitKey);
      workingPool = combined;
    }
  }

  const unitNumber = Number(moduleUnitKey);
  const partNumber = Number(quizPart);
  const normalizedPart = Number.isFinite(partNumber) && partNumber > 0 ? partNumber : 1;
  const offset = Number.isFinite(unitNumber) && unitNumber > 0
    ? ((unitNumber - 1) * targetCount) + ((normalizedPart - 1) * targetCount)
    : (normalizedPart - 1) * targetCount;
  const rotated = [...workingPool.slice(offset % workingPool.length), ...workingPool.slice(0, offset % workingPool.length)];
  const selected = rotated.slice(0, Math.min(targetCount, rotated.length));

  if (isSwiftModuleSession && selected.length) {
    const selectedPromptKeys = selected.map((question) =>
      normalizePromptForUniqueness(question && question.prompt ? question.prompt : JSON.stringify(question))
    );
    recordServedPromptKeys(topicKey, moduleUnitKey, selectedPromptKeys);
  }

  return selected;
}

function buildBalancedSession(questions) {
  if (!Array.isArray(questions) || !questions.length) {
    return [];
  }

  const outputQuestions = questions.filter((question) => question.type === "output");
  const debugQuestions = questions.filter((question) => question.type === "debug");
  const otherQuestions = questions.filter((question) => question.type !== "output" && question.type !== "debug");

  if (!outputQuestions.length || !debugQuestions.length) {
    return shuffleArray(questions);
  }

  const selectedOutput = outputQuestions[Math.floor(Math.random() * outputQuestions.length)];
  const selectedDebug = debugQuestions[Math.floor(Math.random() * debugQuestions.length)];
  const selectedOthers = [...otherQuestions];
  const sessionQuestions = [selectedOutput, selectedDebug, ...selectedOthers];

  return shuffleArray(sessionQuestions);
}

const workshopDebugProfiles = {
  swift: { bad: "let score = 0\nscore += 1", good: "var score = 0\nscore += 1", checks: ["var score", "score += 1"] },
  web: { bad: "const btn = document.querySelector('#save')\nbtn.addEventListener('click', () => {\n  console.log('saved')\n}", good: "const btn = document.querySelector('#save')\nbtn.addEventListener('click', () => {\n  console.log('saved')\n});", checks: ["addeventlistener", ");"] },
  react: { bad: "useEffect(() => {\n  fetchResults(query)\n}, [])", good: "useEffect(() => {\n  fetchResults(query)\n}, [query])", checks: ["useeffect", "[query]"] },
  python: { bad: "def greet(name)\n    print(name)", good: "def greet(name):\n    print(name)", checks: ["def greet(name):", "print(name)"] },
  typescript: { bad: "let age: string = 21", good: "let age: number = 21", checks: ["let age: number", "21"] },
  java: { bad: "System.out.println('Hello');", good: "System.out.println(\"Hello\");", checks: ["system.out.println(\"hello\");"] },
  kotlin: { bad: "val name: String? = null\nprintln(name.length)", good: "val name: String? = null\nprintln(name?.length ?: 0)", checks: ["?.", "?:"] },
  go: { bad: "func main() {\n  var count int\n  count := 1\n}", good: "func main() {\n  count := 1\n  _ = count\n}", checks: [":=", "_ = count"] },
  csharp: { bad: "public string Name { get set; }", good: "public string Name { get; set; }", checks: ["get; set;"] },
  php: { bad: "$input = json_decode(file_get_contents('php://input'));\necho $input->name", good: "$input = json_decode(file_get_contents('php://input'), true);\necho $input['name'];", checks: ["true", "['name']"] },
  dart: { bad: "onPressed: () {\n  count + 1;\n}", good: "onPressed: () {\n  setState(() {\n    count += 1;\n  });\n}", checks: ["setstate", "count += 1"] },
  rust: { bad: "let nums = vec![1,2];\nnums.push(3);", good: "let mut nums = vec![1, 2];\nnums.push(3);", checks: ["let mut", "push(3)"] },
  cpp: { bad: "cout << \"Hello\";", good: "std::cout << \"Hello\";", checks: ["std::cout"] },
  sql: { bad: "FROM users SELECT name;", good: "SELECT name\nFROM users;", checks: ["select", "from users"] },
  bash: { bad: "if[ -f app.js ]; then\n  echo \"found\"\nfi", good: "if [ -f app.js ]; then\n  echo \"found\"\nfi", checks: ["if [ -f", "fi"] },
  firebase: { bad: "const user = getAuth.currentUser\nconst docs = await getDocs(collection(db, 'tasks'))", good: "const user = getAuth().currentUser\nconst docs = await getDocs(collection(db, 'tasks'))", checks: ["getauth()", "getdocs"] },
  cloudkit: { bad: "let record = CKRecord(recordType: \"Note\")\nprivateDB.save(record)", good: "let record = CKRecord(recordType: \"Note\")\nprivateDB.save(record) { _, error in\n  if let error = error {\n    print(error)\n  }\n}", checks: ["save(record)", "if let error"] },
  aiassist: { bad: "Prompt: write login flow\nUse it directly in production", good: "Prompt: Generate a login flow with validation and tests. Return assumptions and edge cases.\nVerification: run tests, review security checks, and confirm requirements before merge.", checks: ["verification", "tests", "requirements"] }
};

const workshopDebugCaseBank = [
  { id: "W01", title: "Checkout Total Drift", scenario: "checkout totals mismatch", focus: "syntax and delimiter correctness", required: "closing delimiter" },
  { id: "W02", title: "Profile Null Crash", scenario: "profile hydration failure", focus: "null/optional safety", required: "nil-safe branch" },
  { id: "W03", title: "Counter Not Updating", scenario: "dashboard counters stale", focus: "state mutation correctness", required: "state mutation" },
  { id: "W04", title: "Async Request Leak", scenario: "request chain breaks", focus: "async flow handling", required: "await flow" },
  { id: "W05", title: "Missing Return Path", scenario: "service response missing", focus: "return/value safety", required: "explicit return" },
  { id: "W06", title: "Type Guard Failure", scenario: "payload type mismatch", focus: "type consistency", required: "type-safe value" },
  { id: "W07", title: "Wrong Function Shape", scenario: "integration contract mismatch", focus: "function signature correctness", required: "signature alignment" },
  { id: "W08", title: "Scope Shadowing", scenario: "variable resolution bug", focus: "scope and variable access", required: "correct scope" },
  { id: "W09", title: "Unhandled Failure", scenario: "network fallback missing", focus: "error handling and fallback", required: "failure branch" },
  { id: "W10", title: "Unsafe Refactor", scenario: "quick fix created hidden bug", focus: "production-safe refactor", required: "stable refactor" },
  { id: "W11", title: "Discount Rule Break", scenario: "discount computation regression", focus: "syntax and delimiter correctness", required: "balanced structure" },
  { id: "W12", title: "Account Alias Panic", scenario: "optional alias missing", focus: "null/optional safety", required: "optional guard" },
  { id: "W13", title: "Toggle State Drift", scenario: "ui toggle inconsistency", focus: "state mutation correctness", required: "deterministic update" },
  { id: "W14", title: "Async Double Fire", scenario: "duplicate request issue", focus: "async flow handling", required: "single async path" },
  { id: "W15", title: "Fallback Not Returned", scenario: "empty response handling", focus: "return/value safety", required: "fallback return" },
  { id: "W16", title: "Conversion Mismatch", scenario: "numeric conversion bug", focus: "type consistency", required: "safe type conversion" },
  { id: "W17", title: "Handler Contract Drift", scenario: "api callback mismatch", focus: "function signature correctness", required: "contract match" },
  { id: "W18", title: "Nested Scope Loss", scenario: "inner block variable loss", focus: "scope and variable access", required: "scope-safe access" },
  { id: "W19", title: "Retry Path Missing", scenario: "transient failure not retried", focus: "error handling and fallback", required: "retry branch" },
  { id: "W20", title: "Risky Cleanup", scenario: "cleanup removed guard rails", focus: "production-safe refactor", required: "readable safety checks" },
  { id: "W21", title: "Config Parser Break", scenario: "config parsing crash", focus: "syntax and delimiter correctness", required: "parser syntax fix" },
  { id: "W22", title: "User Display Nil", scenario: "display name missing", focus: "null/optional safety", required: "default substitution" },
  { id: "W23", title: "Store Drift", scenario: "store snapshot stale", focus: "state mutation correctness", required: "atomic update" },
  { id: "W24", title: "Promise/Task Gap", scenario: "async step skipped", focus: "async flow handling", required: "awaited operation" },
  { id: "W25", title: "Silent Output", scenario: "missing output path", focus: "return/value safety", required: "consistent return path" },
  { id: "W26", title: "Schema Type Fault", scenario: "schema validation mismatch", focus: "type consistency", required: "schema-safe type" },
  { id: "W27", title: "Args Order Bug", scenario: "parameter ordering issue", focus: "function signature correctness", required: "ordered arguments" },
  { id: "W28", title: "Closure Capture Bug", scenario: "captured value stale", focus: "scope and variable access", required: "correct capture" },
  { id: "W29", title: "No Degrade Path", scenario: "service degraded mode missing", focus: "error handling and fallback", required: "graceful fallback" },
  { id: "W30", title: "Over-Compressed Refactor", scenario: "readability dropped", focus: "production-safe refactor", required: "maintainable structure" },
  { id: "W31", title: "UI Action Syntax Fault", scenario: "button action malformed", focus: "syntax and delimiter correctness", required: "action syntax" },
  { id: "W32", title: "Optional Chain Failure", scenario: "nested value absent", focus: "null/optional safety", required: "safe chain" },
  { id: "W33", title: "Mutation Inconsistency", scenario: "cache update mismatch", focus: "state mutation correctness", required: "single source update" },
  { id: "W34", title: "Background Race", scenario: "async race condition", focus: "async flow handling", required: "ordered async step" },
  { id: "W35", title: "Void Path", scenario: "branch returns nothing", focus: "return/value safety", required: "all-branch return" },
  { id: "W36", title: "Bool/String Confusion", scenario: "boolean parsed as text", focus: "type consistency", required: "typed boolean" },
  { id: "W37", title: "Function Shape Drift", scenario: "consumer expects different params", focus: "function signature correctness", required: "consumer-compatible signature" },
  { id: "W38", title: "Variable Escape Bug", scenario: "temporary leaks across scope", focus: "scope and variable access", required: "scoped variable" },
  { id: "W39", title: "Error Bubble Loss", scenario: "failure not surfaced", focus: "error handling and fallback", required: "error propagation" },
  { id: "W40", title: "Refactor Regression", scenario: "feature parity lost", focus: "production-safe refactor", required: "behavior-preserving refactor" },
  { id: "W41", title: "Trace Syntax Drift", scenario: "log statement malformed", focus: "syntax and delimiter correctness", required: "valid statement form" },
  { id: "W42", title: "Missing Data Guard", scenario: "missing record field", focus: "null/optional safety", required: "required field guard" },
  { id: "W43", title: "State Rollback Bug", scenario: "failed write leaves dirty state", focus: "state mutation correctness", required: "rollback-safe update" },
  { id: "W44", title: "Late Await Bug", scenario: "response used too early", focus: "async flow handling", required: "await before use" },
  { id: "W45", title: "Implicit Nil/Null Return", scenario: "undefined return path", focus: "return/value safety", required: "explicit fallback value" },
  { id: "W46", title: "Union Type Mismatch", scenario: "mixed payload typing", focus: "type consistency", required: "narrowed type path" },
  { id: "W47", title: "Callable Signature Mismatch", scenario: "callback arity mismatch", focus: "function signature correctness", required: "arity match" },
  { id: "W48", title: "Loop Scope Collision", scenario: "loop variable reused badly", focus: "scope and variable access", required: "isolated loop scope" },
  { id: "W49", title: "Recovery Path Omitted", scenario: "retry exhausted without fallback", focus: "error handling and fallback", required: "terminal fallback" },
  { id: "W50", title: "Project Hardening Fix", scenario: "final pre-release bug sweep", focus: "production-safe refactor", required: "hardening pass" }
];

function injectWorkshopDebugToken(code, token) {
  const aliases = ["score", "count", "name", "age", "nums", "btn", "record", "input", "user", "docs", "query", "tasks"];
  let transformed = String(code || "");
  aliases.forEach((alias) => {
    const pattern = new RegExp(`\\b${alias}\\b`, "g");
    transformed = transformed.replace(pattern, `${alias}_${token}`);
  });
  transformed = transformed.replace(/#save/g, `#save-${token}`);
  return transformed;
}

function buildWorkshopDebugChecks(profile, token) {
  const baseChecks = Array.isArray(profile && profile.checks) ? profile.checks : [];
  return baseChecks.map((check) => injectWorkshopDebugToken(check, token));
}

function buildWorkshopDebugSession(topic, count) {
  const profile = workshopDebugProfiles[topic] || workshopDebugProfiles.web;
  const topicLabel = formatLabel(topic);

  return workshopDebugCaseBank.map((caseDef, index) => {
    const token = `${topic}-${caseDef.id.toLowerCase()}`;
    const starterBase = injectWorkshopDebugToken(profile.bad, token);
    const sampleBase = injectWorkshopDebugToken(profile.good, token);
    const starterCode = [
      starterBase,
      `// case: ${caseDef.id}`,
      `// scenario: ${caseDef.scenario}`,
      `// required fix: ${caseDef.required}`
    ].join("\n");
    const sample = [
      sampleBase,
      `// resolved case: ${caseDef.id}`,
      `// applied fix: ${caseDef.required}`
    ].join("\n");

    return {
      type: "debug",
      prompt: `Workshop Debug Drill ${index + 1}/50 (${topicLabel}) — ${caseDef.title}. Scenario: ${caseDef.scenario}. Focus: ${caseDef.focus}.`,
      starterCode,
      checks: buildWorkshopDebugChecks(profile, token),
      sample,
      explanation: "Workshop-only curated debug bank. This drill is fully separate from course modules and targets project bug-fix readiness."
    };
  });
}

function buildProjectReadinessQuestion(topic, moduleUnit) {
  const topicLabel = formatLabel(topic);
  const moduleLabel = getModuleNameForTopic(topic, moduleUnit);
  const basePrompt = `Project Readiness Check (${topicLabel}): Convert this feature snippet into production-safe logic with validation, failure handling, and a clear success path.`;
  const projectReadinessByTopic = {
    swift: {
      starterCode: "func saveProfile(name: String?) -> String {\n  return name!\n}",
      checks: ["guard", "return", "else"],
      sample: "func saveProfile(name: String?) -> String {\n  guard let name = name, !name.isEmpty else {\n    return \"Invalid profile\"\n  }\n  return \"Saved: \\(name)\"\n}"
    },
    web: {
      starterCode: "async function submitProfile(data) {\n  const res = await fetch('/api/profile', { method: 'POST', body: JSON.stringify(data) })\n  return res.json()\n}",
      checks: ["if", "throw", "return"],
      sample: "async function submitProfile(data) {\n  if (!data?.name) throw new Error('name required')\n  const res = await fetch('/api/profile', { method: 'POST', body: JSON.stringify(data) })\n  if (!res.ok) throw new Error('request failed')\n  return res.json()\n}"
    },
    default: {
      starterCode: "function saveRecord(input) {\n  return input.value\n}",
      checks: ["if", "error", "return"],
      sample: "function saveRecord(input) {\n  if (!input || !input.value) {\n    return 'error: invalid input'\n  }\n  return `saved:${input.value}`\n}"
    }
  };

  const template = projectReadinessByTopic[topic] || projectReadinessByTopic.default;

  return {
    type: "debug",
    moduleUnit,
    prompt: `${basePrompt} (${moduleLabel})`,
    starterCode: template.starterCode,
    checks: template.checks,
    sample: template.sample,
    explanation: "This advanced checkpoint mirrors real project delivery: validate inputs, guard failure paths, and return predictable outcomes.",
    isProjectReadiness: true
  };
}

function injectProjectReadinessQuestion(selectedQuestions, moduleUnit, targetCount) {
  const unitNumber = Number(moduleUnit);
  if (!Number.isFinite(unitNumber) || unitNumber < 11) {
    return selectedQuestions;
  }

  const readinessQuestion = buildProjectReadinessQuestion(state.topic, moduleUnit);
  const cleaned = (Array.isArray(selectedQuestions) ? selectedQuestions : []).filter((question) => !question.isProjectReadiness);

  if (!cleaned.length) {
    return [readinessQuestion];
  }

  if (cleaned.length >= targetCount) {
    return [...cleaned.slice(0, Math.max(0, cleaned.length - 1)), readinessQuestion];
  }

  return [...cleaned, readinessQuestion];
}

function filterBySegment(questions, segmentKey) {
  if (segmentKey === "all") {
    return [...questions];
  }

  const segment = Number(segmentKey);
  const totalUnits = Object.keys(unitNames).length;
  if (!Number.isFinite(segment) || segment < 1 || segment > totalUnits) {
    return [...questions];
  }

  const chunkSize = Math.max(1, Math.ceil(questions.length / totalUnits));
  const start = (segment - 1) * chunkSize;
  const end = start + chunkSize;
  const sliced = questions.slice(start, end);
  return sliced.length ? sliced : [...questions];
}

function buildSessionForSelections() {
  const topicSet = questionSets[state.topic];
  if (!topicSet) {
    return [];
  }

  if (!state.fullQuiz && state.mode === "debug" && state.source === "workshop") {
    return buildWorkshopDebugSession(state.topic, getQuestionsPerCurrentQuiz(state.topic, state.unit, false));
  }

  if (state.fullQuiz) {
    const allQuestions = [
      ...(Array.isArray(topicSet.beginner) ? topicSet.beginner : []),
      ...(Array.isArray(topicSet.medium) ? topicSet.medium : []),
      ...(Array.isArray(topicSet.advanced) ? topicSet.advanced : [])
    ];

    if (!allQuestions.length) {
      return [];
    }

    const selectedAll = state.mode === "mixed"
      ? allQuestions
      : allQuestions.filter((question) => question.type === state.mode);

    const fullQuizSeed = `${state.topic}|full|${state.path}|${state.mode}`;
    const selected = selectQuizQuestions(selectedAll, questionsPerQuiz, fullQuizSeed, [], "1", state.topic, 1);
    return state.mode === "mixed" ? buildBalancedSession(selected) : selected;
  }

  const levelKey = resolveLevelKey(state.level);

  const levelQuestions = Array.isArray(topicSet[levelKey]) ? topicSet[levelKey] : [];
  const fallbackQuestions = [
    ...(Array.isArray(topicSet.beginner) ? topicSet.beginner : []),
    ...(Array.isArray(topicSet.medium) ? topicSet.medium : []),
    ...(Array.isArray(topicSet.advanced) ? topicSet.advanced : [])
  ];

  const baseQuestions = levelQuestions.length ? levelQuestions : fallbackQuestions;
  if (!baseQuestions.length) {
    return [];
  }

  const moduleUnit = state.unit && state.unit !== "all" ? state.unit : getFirstIncompleteModule(state.topic);
  const questionsThisQuiz = getQuestionsPerCurrentQuiz(state.topic, moduleUnit, state.fullQuiz);
  const byMode = state.mode === "mixed"
    ? [...baseQuestions]
    : baseQuestions.filter((question) => question.type === state.mode);
  const strictModuleByMode = byMode.filter((question) => questionMatchesModuleUnit(question, moduleUnit));

  const allLevelQuestions = [
    ...(Array.isArray(topicSet.beginner) ? topicSet.beginner : []),
    ...(Array.isArray(topicSet.medium) ? topicSet.medium : []),
    ...(Array.isArray(topicSet.advanced) ? topicSet.advanced : [])
  ];
  const allLevelByMode = state.mode === "mixed"
    ? allLevelQuestions
    : allLevelQuestions.filter((question) => question.type === state.mode);
  const strictModuleAllLevels = allLevelByMode.filter((question) => questionMatchesModuleUnit(question, moduleUnit));

  const strictModulePool = strictModuleByMode.length >= questionsThisQuiz
    ? strictModuleByMode
    : strictModuleAllLevels;

  const focusTerms = buildModuleFocusTerms(state.topic, moduleUnit, state.path);
  const moduleSeed = `${state.topic}|${moduleUnit}|${state.path}|${state.mode}|${levelKey}|part-${state.moduleQuizPart}`;
  const selected = selectQuizQuestions(strictModulePool, questionsThisQuiz, moduleSeed, focusTerms, moduleUnit, state.topic, state.moduleQuizPart);
  const withProjectReadiness = injectProjectReadinessQuestion(selected, moduleUnit, questionsThisQuiz);

  if (state.mode === "mixed") {
    return buildBalancedSession(withProjectReadiness);
  }

  return withProjectReadiness;
}

function setTopicHeader(topic) {
  if (studyGuideLink) {
    if (!topic) {
      studyGuideLink.href = "study-guide.html";
    } else if (state.unit && state.unit !== "all") {
      studyGuideLink.href = `study-guide.html?topic=${encodeURIComponent(topic)}&unit=${encodeURIComponent(state.unit)}&return=trainer`;
    } else {
      studyGuideLink.href = `study-guide.html?topic=${encodeURIComponent(topic)}`;
    }
  }

  if (!topicMeta[topic]) {
    appTitle.textContent = "Language Quiz";
    appSubtitle.textContent = "Choose a language from Home to start a quiz.";
    updatePathButtonLabels("");
    return;
  }

  appTitle.textContent = topicMeta[topic].title;
  appSubtitle.textContent = topicMeta[topic].subtitle;
  updatePathButtonLabels(topic);
}

function updatePathButtonLabels(topic) {
  const labels = topic === "swift" ? swiftPathButtonLabels : defaultPathButtonLabels;
  pathButtons.forEach((button) => {
    const pathKey = button.dataset.path;
    button.textContent = labels[pathKey] || defaultPathButtonLabels[pathKey] || button.textContent;
  });
}

function getTypeHint(questionTypeKey) {
  const hints = {
    vocab: "Focus on the exact meaning of the keyword and where it is applied in real code.",
    tf: "Watch for absolute wording (always/never) and test the statement against real-world usage.",
    blank: "Use the language keyword or command that directly completes the sentence with correct technical meaning.",
    output: "Run the code mentally step by step and track how values change after each line.",
    debug: "Find one concrete bug first (syntax, state update, null safety, or function call), then retest mentally.",
    code: "Start with required structure first, then add details; verify each required piece appears in your answer."
  };

  return hints[questionTypeKey] || "Break the prompt into required parts and verify each part before submitting.";
}

function updateStudyTip(question) {
  if (!studyTip || !question) {
    return;
  }

  const topicTip = state.topic && studyTips[state.topic] ? studyTips[state.topic][question.type] : "";
  const typeHint = getTypeHint(question.type);
  const directHint = question.hint || "";
  const checks = Array.isArray(question.checks) ? question.checks : [];

  let questionSpecificHint = directHint;
  if (!questionSpecificHint && (question.type === "code" || question.type === "debug") && checks.length) {
    const checklist = checks.slice(0, 3).map((check) => `"${formatCheckForDisplay(check)}"`).join(", ");
    questionSpecificHint = `Required parts to include: ${checklist}. Keep exact required variable names and structure from the prompt.`;
  }

  if (!questionSpecificHint && question.type === "blank" && Array.isArray(question.acceptableAnswers) && question.acceptableAnswers.length) {
    questionSpecificHint = `Use the exact keyword/term expected by the sentence. This answer is strict and should match the required term exactly.`;
  }

  const hintText = questionSpecificHint || topicTip || typeHint;

  studyTip.textContent = `Hint: ${hintText}`;
  studyTip.classList.add("hidden");

  if (hintBtn) {
    hintBtn.disabled = false;
    hintBtn.textContent = "Show Hint";
  }
}

function showCurrentQuestionHint() {
  if (!studyTip || !hintBtn) {
    return;
  }
  studyTip.classList.remove("hidden");
  hintBtn.disabled = true;
  hintBtn.textContent = "Hint Shown";
}

function buildDetailedCorrectFeedback(question) {
  const explanationText = question.explanation || "Great work. Your answer matches the expected result.";
  const topicReview = state.topic && studyTips[state.topic] ? studyTips[state.topic][question.type] : "";
  const typeReview = getTypeHint(question.type);
  const reinforcement = topicReview || typeReview;

  if (question.type === "code" || question.type === "debug") {
    return `Correct! ${explanationText} Review note: ${reinforcement} Pattern to remember: verify your final solution includes every required element in the prompt.`;
  }

  return `Correct! ${explanationText} Review note: ${reinforcement}`;
}

function buildDetailedIncorrectFeedback(question, context = {}) {
  const isCodeLike = question.type === "code" || question.type === "debug";
  const isBlank = question.type === "blank";

  if (isCodeLike) {
    const normalizedSubmission = context.normalizedSubmission || "";
    const compactSubmission = context.compactSubmission || normalizeCompact(normalizedSubmission);
    const checks = Array.isArray(question.checks) ? question.checks : [];
    const missingChecks = checks.filter((check) => !checkMatchesSubmission(normalizedSubmission, compactSubmission, check));
    const uniqueMissing = [...new Set(missingChecks)];

    if (uniqueMissing.length) {
      const missingLabel = uniqueMissing.slice(0, 5).map((check) => `"${formatCheckForDisplay(check)}"`).join(", ");
      return `Not quite. Missing required part(s): ${missingLabel}. This prompt checks required concepts and key tokens, including exact variable names when required. ${question.type === "debug" ? "One possible fix" : "Example"}:\n${question.sample}`;
    }

    return `Not quite. Your structure is close, but one or more required exact tokens did not match. ${question.type === "debug" ? "One possible fix" : "Example"}:\n${question.sample}`;
  }

  if (isBlank) {
    const acceptedAnswers = Array.isArray(question.acceptableAnswers) ? question.acceptableAnswers : [];
    const expected = acceptedAnswers.length
      ? acceptedAnswers.join(" / ")
      : (question.sample || "");
    return `Not quite. Expected answer: ${expected}.`;
  }

  const correctOption = Array.isArray(question.options) && Number.isInteger(question.answer)
    ? question.options[question.answer]
    : "";
  const explanation = question.explanation || "Review the concept and try again.";
  return `Not quite. Correct answer: ${correctOption || "See explanation"}. ${explanation}`;
}

function buildDetailedIncorrectFeedbackHtml(question, context = {}) {
  const rawSubmission = String(context.rawSubmission || "");
  const normalizedSubmission = context.normalizedSubmission || "";
  const compactSubmission = context.compactSubmission || normalizeCompact(normalizedSubmission);
  const checks = Array.isArray(question.checks) ? question.checks : [];
  const missingChecks = checks.filter((check) => !checkMatchesSubmission(normalizedSubmission, compactSubmission, check));
  const uniqueMissing = [...new Set(missingChecks)];
  const missingLabel = uniqueMissing.length
    ? uniqueMissing.slice(0, 5).map((check) => `"${formatCheckForDisplay(check)}"`).join(", ")
    : "None detected from token checks";
  const missingList = uniqueMissing.length
    ? uniqueMissing.slice(0, 8).map((check) => `- ${formatCheckForDisplay(check)}`).join("\n")
    : "- None";
  const heading = question.type === "debug" ? "One possible fix" : "Example solution";
  const sampleCode = String(question.sample || "");
  const submittedCode = rawSubmission || "(No code submitted)";

  return `<span class="feedback-copy">Not quite. Missing required part(s): ${escapeHtml(missingLabel)}.</span>
<span class="feedback-copy">This prompt checks required concepts and key tokens, including exact variable names when required.</span>
<div class="feedback-code-grid">
  <section class="feedback-code-panel" aria-label="Your submitted code">
    <p class="feedback-code-title">Your Submission</p>
    <pre class="feedback-code-block"><code>${escapeHtml(submittedCode)}</code></pre>
  </section>
  <section class="feedback-code-panel" aria-label="Example fix code">
    <p class="feedback-code-title">${escapeHtml(heading)}</p>
    <pre class="feedback-code-block"><code>${escapeHtml(sampleCode)}</code></pre>
  </section>
  <section class="feedback-code-panel" aria-label="Missing checks list">
    <p class="feedback-code-title">Missing Checks</p>
    <pre class="feedback-code-block"><code>${escapeHtml(missingList)}</code></pre>
  </section>
</div>`;
}

function getVisualChallengeMarkup(question) {
  if (!question || !question.visualTarget) {
    return "";
  }

  if (question.visualTarget === "swift-two-circles-row") {
    const title = question.visualTitle || "Target Preview";
    return `
      <section class="visual-challenge" aria-label="Visual replication challenge">
        <p class="visual-challenge-title">${title}</p>
        <div class="swift-preview-canvas" aria-hidden="true">
          <div class="swift-preview-row">
            <span class="swift-preview-circle circle-navy"></span>
            <span class="swift-preview-circle circle-accent"></span>
          </div>
        </div>
      </section>
    `;
  }

  if (question.visualTarget === "swift-vstack-title-button") {
    const title = question.visualTitle || "Target Preview";
    return `
      <section class="visual-challenge" aria-label="Visual replication challenge">
        <p class="visual-challenge-title">${title}</p>
        <div class="swift-preview-canvas" aria-hidden="true">
          <div class="swift-preview-column">
            <span class="swift-preview-title">Profile</span>
            <span class="swift-preview-button">Continue</span>
          </div>
        </div>
      </section>
    `;
  }

  return "";
}

const defaultEditorPairMap = {
  "(": ")",
  "[": "]",
  "{": "}",
  "\"": "\"",
  "'": "'",
  "`": "`"
};

const editorPairMapByTopic = {
  swift: defaultEditorPairMap,
  web: {
    "(": ")",
    "[": "]",
    "{": "}",
    "<": ">",
    "\"": "\"",
    "'": "'",
    "`": "`"
  },
  react: {
    "(": ")",
    "[": "]",
    "{": "}",
    "<": ">",
    "\"": "\"",
    "'": "'",
    "`": "`"
  },
  python: {
    "(": ")",
    "[": "]",
    "{": "}",
    "\"": "\"",
    "'": "'",
    "`": "`"
  },
  typescript: defaultEditorPairMap,
  java: defaultEditorPairMap,
  kotlin: defaultEditorPairMap,
  markdown: {
    "(": ")",
    "[": "]",
    "\"": "\"",
    "'": "'",
    "`": "`"
  },
  csharp: defaultEditorPairMap,
  sql: {
    "(": ")",
    "[": "]",
    "\"": "\"",
    "'": "'",
    "`": "`"
  },
  go: defaultEditorPairMap,
  rust: defaultEditorPairMap,
  cpp: defaultEditorPairMap,
  php: defaultEditorPairMap,
  dart: defaultEditorPairMap,
  bash: {
    "(": ")",
    "[": "]",
    "{": "}",
    "\"": "\"",
    "'": "'",
    "`": "`"
  }
};

const editorIdeProfileByTopic = {
  swift: "xcode",
  web: "vscode-web",
  react: "vscode-web",
  python: "pycharm",
  typescript: "vscode-web",
  java: "intellij",
  kotlin: "intellij",
  markdown: "vscode-docs",
  csharp: "visual-studio",
  sql: "dbeaver",
  go: "gopls",
  rust: "rust-analyzer",
  cpp: "visual-studio",
  php: "phpstorm",
  dart: "android-studio",
  bash: "vscode-shell"
};

const editorProfileDefaults = {
  xcode: {
    pairMap: defaultEditorPairMap,
    behavior: { indentUnit: "    ", openBlockPattern: /\{\s*$|:\s*$/i }
  },
  "vscode-web": {
    pairMap: { "(": ")", "[": "]", "{": "}", "<": ">", "\"": "\"", "'": "'", "`": "`" },
    behavior: { indentUnit: "  ", openBlockPattern: /\{\s*$|=>\s*$/i }
  },
  pycharm: {
    pairMap: defaultEditorPairMap,
    behavior: { indentUnit: "    ", openBlockPattern: /:\s*$/i }
  },
  intellij: {
    pairMap: defaultEditorPairMap,
    behavior: { indentUnit: "    ", openBlockPattern: /\{\s*$|->\s*$/i }
  },
  "visual-studio": {
    pairMap: defaultEditorPairMap,
    behavior: { indentUnit: "    ", openBlockPattern: /\{\s*$/i }
  },
  dbeaver: {
    pairMap: { "(": ")", "[": "]", "\"": "\"", "'": "'", "`": "`" },
    behavior: { indentUnit: "  ", openBlockPattern: /\b(select|from|where|group by|order by|having|join|on|case|when|then|else|begin)\b\s*$/i }
  },
  gopls: {
    pairMap: defaultEditorPairMap,
    behavior: { indentUnit: "\t", openBlockPattern: /\{\s*$/i }
  },
  "rust-analyzer": {
    pairMap: defaultEditorPairMap,
    behavior: { indentUnit: "    ", openBlockPattern: /\{\s*$|=>\s*$/i }
  },
  phpstorm: {
    pairMap: defaultEditorPairMap,
    behavior: { indentUnit: "    ", openBlockPattern: /\{\s*$|:\s*$/i }
  },
  "android-studio": {
    pairMap: defaultEditorPairMap,
    behavior: { indentUnit: "    ", openBlockPattern: /\{\s*$|=>\s*$/i }
  },
  "vscode-docs": {
    pairMap: { "(": ")", "[": "]", "\"": "\"", "'": "'", "`": "`" },
    behavior: { indentUnit: "  ", openBlockPattern: /^(\s*[-*+]\s+|\s*\d+\.\s+).+/ }
  },
  "vscode-shell": {
    pairMap: { "(": ")", "[": "]", "{": "}", "\"": "\"", "'": "'", "`": "`" },
    behavior: { indentUnit: "  ", openBlockPattern: /\b(do|then|case)\s*$|\{\s*$/i }
  }
};

const tokenSelectionSupportedTopics = new Set([
  "swift",
  "web",
  "react",
  "python",
  "typescript",
  "java",
  "kotlin",
  "markdown",
  "csharp",
  "sql",
  "go",
  "rust",
  "cpp",
  "php",
  "dart",
  "bash"
]);

const tokenRegexByTopic = {
  swift: /[A-Za-z0-9_@]/,
  web: /[A-Za-z0-9_$]/,
  react: /[A-Za-z0-9_$]/,
  python: /[A-Za-z0-9_]/,
  typescript: /[A-Za-z0-9_$]/,
  java: /[A-Za-z0-9_$]/,
  kotlin: /[A-Za-z0-9_$]/,
  markdown: /[A-Za-z0-9_`*#:[\]\[().-]/,
  csharp: /[A-Za-z0-9_@$]/,
  sql: /[A-Za-z0-9_$#@]/,
  go: /[A-Za-z0-9_]/,
  rust: /[A-Za-z0-9_!]/,
  cpp: /[A-Za-z0-9_:#]/,
  php: /[A-Za-z0-9_$]/,
  dart: /[A-Za-z0-9_$]/,
  bash: /[A-Za-z0-9_.$@-]/
};

function getTokenRegex(topic) {
  return tokenRegexByTopic[topic] || /[A-Za-z0-9_]/;
}

function getEditorIdeProfile(topic) {
  return editorIdeProfileByTopic[topic] || "vscode-web";
}

function getEditorPairMap(topic) {
  const explicitPairMap = editorPairMapByTopic[topic];
  if (explicitPairMap) {
    return explicitPairMap;
  }
  const profile = editorProfileDefaults[getEditorIdeProfile(topic)];
  return (profile && profile.pairMap) || defaultEditorPairMap;
}

const editorBehaviorByTopic = {
  swift: { indentUnit: "    ", openBlockPattern: /\{\s*$|:\s*$/i, dedentAfterLinePattern: /^\s*(return|break|continue|throw|fatalError\b.*)\s*$/i },
  web: { indentUnit: "  ", openBlockPattern: /\{\s*$/i },
  react: { indentUnit: "  ", openBlockPattern: /\{\s*$|=>\s*$/i },
  python: { indentUnit: "    ", openBlockPattern: /:\s*$/i, dedentAfterLinePattern: /^\s*(return|break|continue|pass|raise\b.*)\s*$/i },
  typescript: { indentUnit: "  ", openBlockPattern: /\{\s*$|=>\s*$/i },
  java: { indentUnit: "    ", openBlockPattern: /\{\s*$/i, dedentAfterLinePattern: /^\s*(return|break|continue|throw\b.*)\s*$/i },
  kotlin: { indentUnit: "    ", openBlockPattern: /\{\s*$|->\s*$/i, dedentAfterLinePattern: /^\s*(return|break|continue|throw\b.*)\s*$/i },
  markdown: { indentUnit: "  ", openBlockPattern: /^(\s*[-*+]\s+|\s*\d+\.\s+).+/ },
  csharp: { indentUnit: "    ", openBlockPattern: /\{\s*$/i, dedentAfterLinePattern: /^\s*(return|break|continue|throw\b.*)\s*$/i },
  sql: { indentUnit: "  ", openBlockPattern: /\b(select|from|where|group by|order by|having|join|on|case|when|then|else|begin)\b\s*$/i },
  go: { indentUnit: "\t", openBlockPattern: /\{\s*$/i },
  rust: { indentUnit: "    ", openBlockPattern: /\{\s*$|=>\s*$/i, dedentAfterLinePattern: /^\s*(return|break|continue)\s*;?\s*$/i },
  cpp: { indentUnit: "    ", openBlockPattern: /\{\s*$/i, dedentAfterLinePattern: /^\s*(return|break|continue|throw\b.*)\s*;?\s*$/i },
  php: { indentUnit: "    ", openBlockPattern: /\{\s*$|:\s*$/i },
  dart: { indentUnit: "    ", openBlockPattern: /\{\s*$|=>\s*$/i },
  bash: { indentUnit: "  ", openBlockPattern: /\b(do|then|case)\s*$|\{\s*$/i, dedentAfterLinePattern: /^\s*(fi|done|esac)\s*$/i },
  sourcecontrol: { indentUnit: "  ", openBlockPattern: /$^/ },
  ides: { indentUnit: "  ", openBlockPattern: /$^/ },
  aiassist: { indentUnit: "  ", openBlockPattern: /$^/ }
};

function getEditorBehavior(topic) {
  const explicitBehavior = editorBehaviorByTopic[topic];
  if (explicitBehavior) {
    return explicitBehavior;
  }
  const profile = editorProfileDefaults[getEditorIdeProfile(topic)];
  return (profile && profile.behavior) || { indentUnit: "  ", openBlockPattern: /\{\s*$/i };
}

function applyTabIndent(textarea, indentUnit) {
  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;
  const value = textarea.value;

  if (start === end) {
    textarea.value = `${value.slice(0, start)}${indentUnit}${value.slice(end)}`;
    const cursor = start + indentUnit.length;
    textarea.setSelectionRange(cursor, cursor);
    return;
  }

  const lineStart = value.lastIndexOf("\n", start - 1) + 1;
  const selected = value.slice(lineStart, end);
  const lines = selected.split("\n");
  const indented = lines.map((line) => `${indentUnit}${line}`).join("\n");

  textarea.value = `${value.slice(0, lineStart)}${indented}${value.slice(end)}`;
  textarea.setSelectionRange(start + indentUnit.length, end + indentUnit.length * lines.length);
}

function applyShiftTabUnindent(textarea, indentUnit) {
  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;
  const value = textarea.value;
  const lineStart = value.lastIndexOf("\n", start - 1) + 1;

  if (start === end) {
    const beforeCursor = value.slice(lineStart, start);
    if (beforeCursor.endsWith(indentUnit)) {
      textarea.value = `${value.slice(0, start - indentUnit.length)}${value.slice(end)}`;
      const cursor = start - indentUnit.length;
      textarea.setSelectionRange(cursor, cursor);
      return;
    }
    if (beforeCursor.endsWith("\t")) {
      textarea.value = `${value.slice(0, start - 1)}${value.slice(end)}`;
      const cursor = start - 1;
      textarea.setSelectionRange(cursor, cursor);
    }
    return;
  }

  const selected = value.slice(lineStart, end);
  const lines = selected.split("\n");
  let removedTotal = 0;
  const unindented = lines.map((line) => {
    if (line.startsWith(indentUnit)) {
      removedTotal += indentUnit.length;
      return line.slice(indentUnit.length);
    }
    if (line.startsWith("\t")) {
      removedTotal += 1;
      return line.slice(1);
    }
    return line;
  }).join("\n");

  textarea.value = `${value.slice(0, lineStart)}${unindented}${value.slice(end)}`;
  const startShift = Math.min(start - lineStart, indentUnit.length);
  textarea.setSelectionRange(start - startShift, end - removedTotal);
}

function removeOneIndent(indent, indentUnit) {
  if (!indent) {
    return "";
  }
  if (indentUnit === "\t" && indent.endsWith("\t")) {
    return indent.slice(0, -1);
  }
  if (indent.endsWith(indentUnit)) {
    return indent.slice(0, -indentUnit.length);
  }
  if (indent.endsWith("\t")) {
    return indent.slice(0, -1);
  }
  if (indent.endsWith("  ")) {
    return indent.slice(0, -2);
  }
  return "";
}

function applySmartEnter(textarea, topic, behavior) {
  const indentUnit = behavior.indentUnit;
  const openBlockPattern = behavior.openBlockPattern;
  const dedentAfterLinePattern = behavior.dedentAfterLinePattern;
  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;
  const value = textarea.value;
  const lineStart = value.lastIndexOf("\n", start - 1) + 1;
  const lineEnd = value.indexOf("\n", start) === -1 ? value.length : value.indexOf("\n", start);
  const lineText = value.slice(lineStart, lineEnd);
  const currentIndent = (lineText.match(/^\s*/) || [""])[0];
  const beforeCursor = value.slice(lineStart, start);
  const beforeTrimmed = beforeCursor.trimEnd();
  const nextChar = value.slice(start, start + 1);
  const isBlockOpen = openBlockPattern.test(beforeTrimmed);
  let nextIndent = currentIndent;

  if (isBlockOpen) {
    nextIndent += indentUnit;
  }

  if (dedentAfterLinePattern && dedentAfterLinePattern.test(beforeTrimmed)) {
    nextIndent = removeOneIndent(currentIndent, indentUnit);
  }

  if (topic === "markdown") {
    const bulletMatch = beforeTrimmed.match(/^(\s*)([-*+]\s+|\d+\.\s+)/);
    if (bulletMatch) {
      const marker = bulletMatch[2];
      const orderedMatch = marker.match(/^(\d+)\.\s+$/);
      if (orderedMatch) {
        const nextNumber = Number(orderedMatch[1]) + 1;
        nextIndent = `${bulletMatch[1]}${nextNumber}. `;
      } else {
        nextIndent = `${bulletMatch[1]}${marker}`;
      }

      const taskMatch = beforeTrimmed.match(/^(\s*[-*+]\s+)\[( |x|X)\]\s+/);
      if (taskMatch) {
        nextIndent = `${taskMatch[1]}[ ] `;
      }
    }
  }

  if (nextChar === "}" || nextChar === "]" || nextChar === ")") {
    const inserted = `\n${nextIndent}\n${currentIndent}`;
    textarea.value = `${value.slice(0, start)}${inserted}${value.slice(end)}`;
    const cursor = start + 1 + nextIndent.length;
    textarea.setSelectionRange(cursor, cursor);
    return;
  }

  const inserted = `\n${nextIndent}`;
  textarea.value = `${value.slice(0, start)}${inserted}${value.slice(end)}`;
  const cursor = start + inserted.length;
  textarea.setSelectionRange(cursor, cursor);
}

function attachCodeEditorBehaviors(textarea, topic) {
  if (!textarea) {
    return;
  }

  textarea.dataset.ideProfile = getEditorIdeProfile(topic);

  const behavior = getEditorBehavior(topic);
  const indentUnit = behavior.indentUnit;
  const pairMap = getEditorPairMap(topic);
  const closingChars = new Set(Object.values(pairMap));

  textarea.addEventListener("keydown", (event) => {
    const key = event.key;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const value = textarea.value;
    const hasSelection = end > start;
    const nextChar = value.slice(start, start + 1);
    const prevChar = value.slice(start - 1, start);

    if (key === "Tab") {
      event.preventDefault();
      if (event.shiftKey) {
        applyShiftTabUnindent(textarea, indentUnit);
      } else {
        applyTabIndent(textarea, indentUnit);
      }
      return;
    }

    if (key === "Enter") {
      event.preventDefault();
      applySmartEnter(textarea, topic, behavior);
      return;
    }

    if (key === "Backspace" && !hasSelection && pairMap[prevChar] && pairMap[prevChar] === nextChar) {
      event.preventDefault();
      textarea.value = `${value.slice(0, start - 1)}${value.slice(end + 1)}`;
      const cursor = start - 1;
      textarea.setSelectionRange(cursor, cursor);
      return;
    }

    if (pairMap[key] && !event.ctrlKey && !event.metaKey && !event.altKey) {
      event.preventDefault();
      const closing = pairMap[key];

      if ((key === "\"" || key === "'" || key === "`") && nextChar === key && !hasSelection) {
        const cursor = start + 1;
        textarea.setSelectionRange(cursor, cursor);
        return;
      }

      if (hasSelection) {
        const selected = value.slice(start, end);
        textarea.value = `${value.slice(0, start)}${key}${selected}${closing}${value.slice(end)}`;
        textarea.setSelectionRange(start + 1, end + 1);
        return;
      }

      textarea.value = `${value.slice(0, start)}${key}${closing}${value.slice(end)}`;
      const cursor = start + 1;
      textarea.setSelectionRange(cursor, cursor);
      return;
    }

    if (closingChars.has(key) && nextChar === key && !hasSelection) {
      event.preventDefault();
      const cursor = start + 1;
      textarea.setSelectionRange(cursor, cursor);
    }
  });

  if (!tokenSelectionSupportedTopics.has(topic)) {
    return;
  }

  textarea.addEventListener("dblclick", () => {
    const value = textarea.value;
    const baseStart = textarea.selectionStart;
    const baseEnd = textarea.selectionEnd;
    const cursor = baseStart === baseEnd ? baseStart : Math.max(0, baseEnd - 1);
    if (!value || cursor == null) {
      return;
    }

    const tokenRegex = getTokenRegex(topic);
    const isTokenChar = (char) => tokenRegex.test(char);
    let start = cursor;
    let end = cursor;

    if (!isTokenChar(value.charAt(start)) && start > 0 && isTokenChar(value.charAt(start - 1))) {
      start -= 1;
      end = start;
    }

    if (!isTokenChar(value.charAt(start))) {
      return;
    }

    while (start > 0 && isTokenChar(value.charAt(start - 1))) {
      start -= 1;
    }
    while (end < value.length && isTokenChar(value.charAt(end))) {
      end += 1;
    }

    textarea.setSelectionRange(start, end);
  });
}

function renderQuestion() {
  const question = activeQuestions[state.currentIndex];
  if (!question) {
    feedback.textContent = "No questions are available for this selection. Choose a different path or language.";
    feedback.className = "feedback incorrect";
    questionCard.classList.add("hidden");
    showTopicSelection();
    return;
  }

  const typeLabels = {
    vocab: "Vocabulary",
    tf: "True / False",
    blank: "Fill in the Blank",
    output: "Output Prediction",
    debug: "Debug This",
    code: "Code Writing"
  };
  const typeLabel = typeLabels[question.type] || "Practice";

  progressText.textContent = `Question ${state.currentIndex + 1} of ${activeQuestions.length}`;
  updateActiveUnitText();
  scoreText.textContent = `Score: ${state.score}`;
  questionType.textContent = typeLabel;
  if (question.type === "output") {
    questionPrompt.innerHTML = formatOutputPrompt(question.prompt);
  } else {
    questionPrompt.textContent = question.prompt;
  }
  updateStudyTip(question);
  feedback.textContent = "";
  feedback.className = "feedback";
  nextBtn.disabled = true;
  state.selectedOption = null;
  state.answered = false;

  if (question.type === "blank") {
    answerArea.innerHTML = `
      <div class="blank-answer-wrap">
        <label class="blank-answer-label" for="blankInput">Fill in the blank</label>
        <input id="blankInput" class="blank-input" type="text" autocomplete="off" placeholder="Type your answer..." />
      </div>
    `;
    return;
  }

  if (question.type === "code" || question.type === "debug") {
    const isSwiftTopic = state.topic === "swift";
    const placeholder = question.type === "debug"
      ? "Fix the bug(s) in this code..."
      : isSwiftTopic
        ? "Type Swift / SwiftUI code here..."
        : "Type your answer here...";
    const visualMarkup = getVisualChallengeMarkup(question);

    answerArea.innerHTML = `
      ${visualMarkup}
      <div class="code-editor ${isSwiftTopic ? "swift-editor" : ""}">
        <textarea id="codeInput" class="code-input" placeholder="${placeholder}"></textarea>
      </div>
      <div id="autoFillBar" class="autofill-bar hidden"></div>
    `;

    const codeInput = document.getElementById("codeInput");
    if (question.type === "debug" && question.starterCode && codeInput) {
      codeInput.value = question.starterCode;
    }

    attachCodeEditorBehaviors(codeInput, state.topic);

    renderAutoFill(question, isSwiftTopic);
    return;
  }

  answerArea.innerHTML = '<div class="option-list" id="optionsList"></div>';
  const optionsList = document.getElementById("optionsList");

  question.options.forEach((optionText, index) => {
    const button = document.createElement("button");
    button.className = "option-btn";
    button.textContent = optionText;
    button.type = "button";
    button.addEventListener("click", () => {
      if (state.answered) {
        return;
      }
      state.selectedOption = index;
      [...optionsList.children].forEach((child) => child.classList.remove("selected"));
      button.classList.add("selected");
    });
    optionsList.appendChild(button);
  });
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function formatOutputPrompt(promptText) {
  const prompt = String(promptText || "");
  const inlineCodeMatch = prompt.match(/`([^`\n]+)`/);
  if (!inlineCodeMatch) {
    return `<span class="output-prompt-text">${escapeHtml(prompt)}</span>`;
  }

  const code = inlineCodeMatch[1]
    .split(";")
    .map((line) => line.trim())
    .filter(Boolean)
    .join("\n");

  const beforeCode = prompt.slice(0, inlineCodeMatch.index).trim();
  const afterCode = prompt.slice((inlineCodeMatch.index || 0) + inlineCodeMatch[0].length).trim();
  const beforeMarkup = beforeCode ? `<span class="output-prompt-text">${escapeHtml(beforeCode)}</span>` : "";
  const afterMarkup = afterCode ? `<span class="output-prompt-text">${escapeHtml(afterCode)}</span>` : "";

  return `${beforeMarkup}<pre class="output-code-block"><code>${escapeHtml(code)}</code></pre>${afterMarkup}`;
}

function insertSnippetAtCursor(textarea, snippet) {
  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;
  const value = textarea.value;
  const prefix = value.slice(0, start);
  const suffix = value.slice(end);
  const needsNewLine = prefix.length > 0 && !prefix.endsWith("\n");
  const insertion = needsNewLine ? `\n${snippet}` : snippet;

  textarea.value = `${prefix}${insertion}${suffix}`;
  const nextCursor = prefix.length + insertion.length;
  textarea.setSelectionRange(nextCursor, nextCursor);
  textarea.focus();
}

function renderAutoFill(question, isSwiftTopic) {
  const autoFillBar = document.getElementById("autoFillBar");
  const codeInput = document.getElementById("codeInput");

  if (!autoFillBar || !codeInput) {
    return;
  }

  if (!isSwiftTopic || !Array.isArray(question.autofill) || !question.autofill.length) {
    autoFillBar.classList.add("hidden");
    return;
  }

  autoFillBar.classList.remove("hidden");
  autoFillBar.innerHTML = "";

  question.autofill.forEach((snippet) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "autofill-chip";
    button.textContent = snippet;
    button.addEventListener("click", () => insertSnippetAtCursor(codeInput, snippet));
    autoFillBar.appendChild(button);
  });
}

let successAudioContext = null;

function playSuccessSound() {
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) {
      return;
    }

    if (!successAudioContext) {
      successAudioContext = new AudioContextClass();
    }

    const now = successAudioContext.currentTime;

    const firstOscillator = successAudioContext.createOscillator();
    const firstGain = successAudioContext.createGain();
    firstOscillator.type = "sine";
    firstOscillator.frequency.setValueAtTime(659.25, now);
    firstGain.gain.setValueAtTime(0.0001, now);
    firstGain.gain.exponentialRampToValueAtTime(0.08, now + 0.01);
    firstGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.14);
    firstOscillator.connect(firstGain);
    firstGain.connect(successAudioContext.destination);
    firstOscillator.start(now);
    firstOscillator.stop(now + 0.15);

    const secondOscillator = successAudioContext.createOscillator();
    const secondGain = successAudioContext.createGain();
    secondOscillator.type = "sine";
    secondOscillator.frequency.setValueAtTime(987.77, now + 0.11);
    secondGain.gain.setValueAtTime(0.0001, now + 0.11);
    secondGain.gain.exponentialRampToValueAtTime(0.09, now + 0.13);
    secondGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.28);
    secondOscillator.connect(secondGain);
    secondGain.connect(successAudioContext.destination);
    secondOscillator.start(now + 0.11);
    secondOscillator.stop(now + 0.29);
  } catch (error) {
  }
}

function launchConfettiBurst(pieceCount) {
  const colors = ["var(--accent)", "var(--navy-soft)", "var(--tag-text)", "var(--primary)"];
  const totalPieces = Number.isFinite(Number(pieceCount)) ? Number(pieceCount) : 24;

  for (let index = 0; index < totalPieces; index += 1) {
    const piece = document.createElement("span");
    piece.className = "confetti-piece";
    piece.style.left = `${Math.random() * 100}vw`;
    piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    piece.style.setProperty("--confetti-x", `${Math.round(Math.random() * 260 - 130)}px`);
    piece.style.animationDuration = `${900 + Math.floor(Math.random() * 500)}ms`;
    document.body.appendChild(piece);
    setTimeout(() => piece.remove(), 1700);
  }
}

function renderSessionRewards() {
  if (!rewardSummary) {
    return;
  }

  if (!latestSessionRewards.length) {
    rewardSummary.textContent = "";
    rewardSummary.classList.add("hidden");
    return;
  }

  rewardSummary.textContent = `Rewards unlocked: ${latestSessionRewards.join(" ")}`;
  rewardSummary.classList.remove("hidden");
}

function updateNextModuleButton(modulePassed) {
  if (!nextModuleBtn || !state.topic) {
    return;
  }

  nextModuleBtn.classList.add("hidden");

  if (state.fullQuiz || !modulePassed || isCourseFullyCompleted(state.topic)) {
    return;
  }

  if (state.moduleQuizTotal > 1 && state.moduleQuizPart < state.moduleQuizTotal) {
    nextModuleBtn.textContent = `Continue ${formatUnitLabel(state.unit)} (Quiz ${state.moduleQuizPart + 1}/${state.moduleQuizTotal})`;
    nextModuleBtn.classList.remove("hidden");
    return;
  }

  const nextModule = getFirstIncompleteModule(state.topic);
  if (!nextModule || nextModule === state.unit) {
    return;
  }

  nextModuleBtn.textContent = `Go to ${formatUnitLabel(nextModule)}`;
  nextModuleBtn.classList.remove("hidden");
}

function updateRetryModuleButton(modulePassed) {
  if (!retryModuleBtn || !state.topic) {
    return;
  }

  retryModuleBtn.classList.add("hidden");

  if (state.fullQuiz || modulePassed || !state.unit || state.unit === "all") {
    return;
  }

  retryModuleBtn.textContent = `Retry ${formatUnitLabel(state.unit)}`;
  retryModuleBtn.classList.remove("hidden");
}

function goToNextModule() {
  if (!state.topic || !nextModuleBtn || nextModuleBtn.classList.contains("hidden")) {
    return;
  }

  if (!state.fullQuiz && state.moduleQuizTotal > 1 && state.moduleQuizPart < state.moduleQuizTotal) {
    state.moduleQuizPart += 1;
    state.manualUnitOverride = true;
    state.fullQuiz = false;
    startQuiz();
    return;
  }

  const nextModule = getFirstIncompleteModule(state.topic);
  if (!nextModule) {
    return;
  }

  state.fullQuiz = false;
  state.manualUnitOverride = true;
  state.unit = nextModule;
  state.moduleQuizPart = 1;
  state.moduleQuizTotal = getModuleQuizCount(state.topic, nextModule);
  state.level = resolveProgressiveLevel(nextModule);
  startQuiz();
}

function retryCurrentModule() {
  if (!retryModuleBtn || retryModuleBtn.classList.contains("hidden") || !state.topic || !state.unit || state.unit === "all") {
    return;
  }

  state.fullQuiz = false;
  state.manualUnitOverride = true;
  startQuiz();
}

function gradeCurrentQuestion() {
  const question = activeQuestions[state.currentIndex];
  let correct = false;
  const isCodeLike = question.type === "code" || question.type === "debug";
  const isBlank = question.type === "blank";
  let normalizedSubmission = "";
  let compactSubmission = "";
  let rawSubmission = "";

  if (isCodeLike) {
    const codeInput = document.getElementById("codeInput");
    rawSubmission = codeInput ? codeInput.value : "";
    normalizedSubmission = normalize(rawSubmission);
    compactSubmission = normalizeCompact(rawSubmission);
    correct = question.checks.every((check) => checkMatchesSubmission(normalizedSubmission, compactSubmission, check));
  } else if (isBlank) {
    const blankInput = document.getElementById("blankInput");
    normalizedSubmission = normalize(blankInput ? blankInput.value : "");
    if (!normalizedSubmission) {
      feedback.textContent = "Enter your fill-in answer before submitting.";
      feedback.className = "feedback incorrect";
      return;
    }

    const accepted = Array.isArray(question.acceptableAnswers)
      ? question.acceptableAnswers.map((answer) => normalize(answer))
      : [];
    correct = accepted.includes(normalizedSubmission);
  } else {
    if (state.selectedOption === null) {
      feedback.textContent = "Choose an answer before submitting.";
      feedback.className = "feedback incorrect";
      return;
    }
    correct = state.selectedOption === question.answer;
  }

  state.answered = true;
  nextBtn.disabled = false;

  if (correct) {
    playSuccessSound();
    state.score += 1;
    scoreText.textContent = `Score: ${state.score}`;
    feedback.textContent = buildDetailedCorrectFeedback(question);
    feedback.className = "feedback correct";
    return;
  }

  if (isCodeLike) {
    feedback.innerHTML = buildDetailedIncorrectFeedbackHtml(question, {
      rawSubmission,
      normalizedSubmission,
      compactSubmission
    });
  } else {
    feedback.textContent = buildDetailedIncorrectFeedback(question, { normalizedSubmission, compactSubmission });
  }
  feedback.className = "feedback incorrect";
}

function goNext() {
  if (state.currentIndex === activeQuestions.length - 1) {
    latestSessionRewards = [];
    const completionSnapshot = saveUnitProgress();
    questionCard.classList.add("hidden");
    resultsCard.classList.remove("hidden");
    const activePath = learningPaths[state.path];
    const pathLabel = activePath && activePath.label ? activePath.label : "Guided Start";
    const unitLabel = formatUnitLabel(state.unit);
    const topicProgress = ensureTopicProgress(state.topic);
    const finalLanguageScore = calculateLanguageFinalScore(topicProgress);
    const finalLanguageText = finalLanguageScore === null ? "--" : formatPercent(finalLanguageScore);
    const pathInfo = getPathProgressCopy(state.path);
    const modulePercent = activeQuestions.length > 0 ? (state.score / activeQuestions.length) * 100 : 0;
    const modulePassed = completionSnapshot.modulePassed;
    const moduleCompletedThisAttempt = completionSnapshot.moduleCompletedThisAttempt;
    const isModuleParted = !state.fullQuiz && state.moduleQuizTotal > 1;
    const completionLine = state.fullQuiz
      ? `Full assessment score: ${formatPercent(modulePercent)}.`
      : modulePassed
        ? isModuleParted
          ? moduleCompletedThisAttempt
            ? `Module completed (${formatPercent(modulePercent)}). All ${state.moduleQuizTotal} quizzes passed.`
            : `Quiz ${state.moduleQuizPart}/${state.moduleQuizTotal} passed (${formatPercent(modulePercent)}).`
          : `Module passed (${formatPercent(modulePercent)}).`
        : `Module not passed (${formatPercent(modulePercent)}). Score ${modulePassingPercent}%+ to pass this ${pathInfo.checkpointLabel} and unlock the ${pathInfo.unlockLabel}.`;
    const nextStepLine = state.fullQuiz
      ? `Continue by revisiting ${formatUnitLabel(getFirstIncompleteModule(state.topic))} for focused improvement.`
      : modulePassed
        ? isModuleParted && !moduleCompletedThisAttempt
          ? `Continue this module with Quiz ${Math.min(state.moduleQuizPart + 1, state.moduleQuizTotal)}/${state.moduleQuizTotal}.`
          : `Next recommended module: ${formatUnitLabel(getFirstIncompleteModule(state.topic))}.`
        : `Retry ${unitLabel} to continue the ${pathInfo.sequenceLabel}.`;

    finalScore.textContent = `You got ${state.score} out of ${activeQuestions.length} on ${formatLabel(state.topic)} ${formatLabel(state.level)} (${pathLabel}, ${unitLabel}). ${completionLine} ${nextStepLine} Final ${formatLabel(state.topic)} course score: ${finalLanguageText}.`;
    updateNextModuleButton(modulePassed);
    updateRetryModuleButton(modulePassed);
    renderSessionRewards();
    if (latestSessionRewards.length) {
      const languageMasteryUnlocked = latestSessionRewards.some((message) => message.includes("language mastery badge"));
      launchConfettiBurst(languageMasteryUnlocked ? 42 : 24);
    }
    return;
  }

  state.currentIndex += 1;
  renderQuestion();
}

function startQuiz() {
  latestSessionRewards = [];
  if (nextModuleBtn) {
    nextModuleBtn.classList.add("hidden");
  }
  if (retryModuleBtn) {
    retryModuleBtn.classList.add("hidden");
  }
  if (rewardSummary) {
    rewardSummary.textContent = "";
    rewardSummary.classList.add("hidden");
  }
  if (!state.fullQuiz && !state.manualUnitOverride) {
    assignUnitForCurrentPath();
  }
  if (state.fullQuiz) {
    state.unit = "all";
    state.moduleQuizPart = 1;
    state.moduleQuizTotal = 1;
    state.level = "medium";
    state.mode = "mixed";
    pendingCourseGateMessage = "";
  } else {
    const requestedModule = state.unit;
    const allowedModule = getAllowedModuleForCourse(state.topic, requestedModule);
    state.unit = allowedModule;
    pendingCourseGateMessage = buildCourseGateMessage(state.topic, requestedModule, allowedModule, state.path);
    state.moduleQuizTotal = getModuleQuizCount(state.topic, state.unit);
    state.moduleQuizPart = state.manualUnitOverride
      ? Math.min(Math.max(Number(state.moduleQuizPart) || 1, 1), state.moduleQuizTotal)
      : getNextRequiredQuizPart(state.topic, state.unit);
    state.level = resolveProgressiveLevel(state.unit);
  }

  renderCourseRoadmap();
  activeQuestions = buildSessionForSelections();
  if (!activeQuestions.length) {
    const topicFallback = questionSets[state.topic];
    if (topicFallback) {
      activeQuestions = shuffleArray([
        ...(Array.isArray(topicFallback.beginner) ? topicFallback.beginner : []),
        ...(Array.isArray(topicFallback.medium) ? topicFallback.medium : []),
        ...(Array.isArray(topicFallback.advanced) ? topicFallback.advanced : [])
      ]);
    }
  }

  if (!activeQuestions.length) {
    showTopicSelection();
    feedback.textContent = "Unable to start this quiz right now. Please select a different language.";
    feedback.className = "feedback incorrect";
    return;
  }

  state.currentIndex = 0;
  state.score = 0;
  state.selectedOption = null;
  state.answered = false;
  pathCard.classList.add("hidden");
  if (levelCard) {
    levelCard.classList.add("hidden");
  }
  statusBar.classList.remove("hidden");
  resultsCard.classList.add("hidden");
  questionCard.classList.remove("hidden");
  renderQuestion();
  if (pendingCourseGateMessage) {
    feedback.textContent = pendingCourseGateMessage;
    feedback.className = "feedback";
    pendingCourseGateMessage = "";
  }
}

function safeStartQuiz(source) {
  try {
    startQuiz();
  } catch (error) {
    const fallbackTopic = state.topic;
    if (fallbackTopic && Object.prototype.hasOwnProperty.call(questionSets, fallbackTopic)) {
      const fallbackSet = questionSets[fallbackTopic];
      const beginner = Array.isArray(fallbackSet.beginner) ? fallbackSet.beginner : [];
      const medium = Array.isArray(fallbackSet.medium) ? fallbackSet.medium : [];
      const advanced = Array.isArray(fallbackSet.advanced) ? fallbackSet.advanced : [];
      activeQuestions = shuffleArray([...beginner, ...medium, ...advanced]);

      if (activeQuestions.length) {
        state.level = "easy";
        state.path = "guided";
        state.mode = "mixed";
        state.unit = initialUnit || "1";
        state.manualUnitOverride = Boolean(initialUnit);
        state.currentIndex = 0;
        state.score = 0;
        state.selectedOption = null;
        state.answered = false;
        topicCard.classList.add("hidden");
        hideSetupCards();
        statusBar.classList.remove("hidden");
        resultsCard.classList.add("hidden");
        questionCard.classList.remove("hidden");
        renderQuestion();
        return;
      }
    }

    showTopicSelection();
  }
}

function restart() {
  if (!state.topic || !state.path) {
    return;
  }
  startQuiz();
}

function resetSessionState() {
  activeQuestions = [];
  state.currentIndex = 0;
  state.score = 0;
  state.selectedOption = null;
  state.answered = false;
  state.moduleQuizPart = 1;
  state.moduleQuizTotal = 1;
}

function hideSetupCards() {
  if (levelCard) {
    levelCard.classList.add("hidden");
  }
  pathCard.classList.add("hidden");
}

function showLevelSelection() {
  showPathSelection();
}

function showPathSelection() {
  applyPathPreset("guided");
  resetSessionState();
  statusBar.classList.add("hidden");
  questionCard.classList.add("hidden");
  resultsCard.classList.add("hidden");
  hideSetupCards();
  renderLanguageProgress();
  renderCourseRoadmap();
  pathCard.classList.remove("hidden");
}

function showTopicSelection() {
  state.topic = "";
  state.level = "";
  state.fullQuiz = false;
  resetSessionState();
  setTopicHeader("");
  statusBar.classList.add("hidden");
  questionCard.classList.add("hidden");
  resultsCard.classList.add("hidden");
  hideSetupCards();
  languageProgressCard.classList.add("hidden");
  if (courseRoadmapCard) {
    courseRoadmapCard.classList.add("hidden");
  }
  topicCard.classList.remove("hidden");
}

topicButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const topic = button.dataset.topic;
    state.topic = topic;
    state.fullQuiz = false;
    try {
      localStorage.setItem(selectedTopicStorageKey, topic);
    } catch (error) {}
    state.level = "";
    applyPathPreset("guided");
    setTopicHeader(topic);
    renderLanguageProgress();
    renderCourseRoadmap();
    topicCard.classList.add("hidden");
    hideSetupCards();
    safeStartQuiz("topic-button");
  });
});

pathButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.fullQuiz = false;
    applyPathPreset(button.dataset.path);
    safeStartQuiz("path-button");
  });
});

submitBtn.addEventListener("click", () => {
  if (state.answered) {
    return;
  }
  gradeCurrentQuestion();
});

if (hintBtn) {
  hintBtn.addEventListener("click", showCurrentQuestionHint);
}

nextBtn.addEventListener("click", goNext);
restartBtn.addEventListener("click", restart);
if (nextModuleBtn) {
  nextModuleBtn.addEventListener("click", goToNextModule);
}
if (retryModuleBtn) {
  retryModuleBtn.addEventListener("click", retryCurrentModule);
}
changeSetupBtn.addEventListener("click", showPathSelection);
changeLevelBtn.addEventListener("click", showLevelSelection);
changeTopicBtn.addEventListener("click", showTopicSelection);
resetProgressBtn.addEventListener("click", resetCurrentLanguageProgress);

ensureMinimumCourseCoverage();
applyTopicQuestionUniqueness();
enforceUniformModuleQuestionPools(questionsPerQuiz * quizzesPerModule);
applyTopicQuestionUniqueness();
let uniformPoolAudit = auditUniformModuleQuestionPools(questionsPerQuiz * quizzesPerModule);
if (hasUniformPoolDeficits(uniformPoolAudit)) {
  enforceUniformModuleQuestionPools(questionsPerQuiz * quizzesPerModule);
  applyTopicQuestionUniqueness();
  uniformPoolAudit = auditUniformModuleQuestionPools(questionsPerQuiz * quizzesPerModule);
}

if (initialTopic) {
  state.topic = initialTopic;
  state.source = initialSource;
  setTopicHeader(initialTopic);
  renderLanguageProgress();
  renderCourseRoadmap();
  topicCard.classList.add("hidden");
  if (initialFullQuiz) {
    applyPathPreset("guided");
    state.fullQuiz = true;
    state.unit = "all";
    state.manualUnitOverride = true;
  } else if (initialMode) {
    if (initialMode === "debug") {
      applyPathPreset("debug");
    } else if (initialMode === "output") {
      applyPathPreset("output");
    } else {
      applyPathPreset("guided");
    }
    state.fullQuiz = false;
    state.mode = initialMode;
    if (initialUnit) {
      state.unit = initialUnit;
      state.manualUnitOverride = true;
    } else if (initialMode === "debug") {
      state.unit = initialSource === "workshop" ? "all" : "5";
      state.manualUnitOverride = true;
    }
  } else if (initialUnit) {
    const pathFromUnit = resolvePathFromUnit(initialUnit);
    applyPathPreset(pathFromUnit);
    state.fullQuiz = false;
    state.unit = initialUnit;
    state.manualUnitOverride = true;
  } else {
    state.fullQuiz = false;
    applyPathPreset("guided");
  }
  safeStartQuiz("initial-topic");
} else {
  showTopicSelection();
}
