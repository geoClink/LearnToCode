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
        checks: ["struct contentview: view", "@state private var count = 0", "var body: some view", "text(\"count:", "button(", "count += 1"],
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
        type: "tf",
        prompt: "True or False: A computed property can return a value without storing it directly.",
        options: ["True", "False"],
        answer: 0,
        explanation: "True. Computed properties derive values from other data."
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
      }
    ]
  }
};

Object.entries(extraQuestionSets).forEach(([topic, levels]) => {
  Object.entries(levels).forEach(([level, questions]) => {
    questionSets[topic][level].push(...questions);
  });
});

const topicMeta = {
  swift: {
    title: "Swift + SwiftUI Basics Trainer",
    subtitle: "Choose a level, then practice Swift and SwiftUI vocab, true/false, and code prompts."
  },
  web: {
    title: "HTML + CSS + JavaScript Basics Trainer",
    subtitle: "Choose a level, then practice web dev vocab, true/false, and code prompts."
  },
  react: {
    title: "React Basics Trainer",
    subtitle: "Choose a level, then practice React vocab, true/false, and code prompts."
  }
};

const studyTips = {
  swift: {
    vocab: "Focus on meanings of Swift keywords and wrappers. Link each term to where you would use it in a real view.",
    tf: "Scan for absolute words like always/never. SwiftUI is state-driven, so many statements depend on state ownership.",
    code: "Write small valid pieces first: declarations, then view/layout, then behavior. Keep syntax clean before adding extras."
  },
  web: {
    vocab: "Map each term to a layer: HTML (structure), CSS (presentation), JavaScript (behavior).",
    tf: "Think about browser runtime behavior: DOM updates, event handling, and CSS layout rules.",
    code: "Build in order: select elements, add behavior, then verify with a quick console or visual check."
  },
  react: {
    vocab: "Tie each concept to the render cycle: props in, state changes, component re-renders.",
    tf: "React questions often hinge on immutability, effect timing, and stable identity (keys/dependencies).",
    code: "Start with component/hook shape, then state, then handlers/effects. Keep dependencies explicit."
  }
};

let activeQuestions = [];

const state = {
  topic: "",
  level: "",
  currentIndex: 0,
  score: 0,
  selectedOption: null,
  answered: false,
  studyMode: false
};

const appTitle = document.getElementById("appTitle");
const appSubtitle = document.getElementById("appSubtitle");
const topicCard = document.getElementById("topicCard");
const topicButtons = document.querySelectorAll(".topic-btn");
const levelCard = document.getElementById("levelCard");
const levelButtons = document.querySelectorAll(".level-btn");
const statusBar = document.getElementById("statusBar");
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("scoreText");
const questionCard = document.getElementById("questionCard");
const questionType = document.getElementById("questionType");
const questionPrompt = document.getElementById("questionPrompt");
const answerArea = document.getElementById("answerArea");
const studyModeToggle = document.getElementById("studyModeToggle");
const studyTip = document.getElementById("studyTip");
const submitBtn = document.getElementById("submitBtn");
const nextBtn = document.getElementById("nextBtn");
const feedback = document.getElementById("feedback");
const resultsCard = document.getElementById("resultsCard");
const finalScore = document.getElementById("finalScore");
const restartBtn = document.getElementById("restartBtn");
const changeLevelBtn = document.getElementById("changeLevelBtn");
const changeTopicBtn = document.getElementById("changeTopicBtn");

function normalize(value) {
  return value.replace(/\s+/g, " ").trim().toLowerCase();
}

function formatLabel(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function setTopicHeader(topic) {
  if (!topicMeta[topic]) {
    appTitle.textContent = "Programming Basics Trainer";
    appSubtitle.textContent = "Choose a topic and level, then practice vocab, true/false, and code writing prompts.";
    return;
  }
  appTitle.textContent = topicMeta[topic].title;
  appSubtitle.textContent = topicMeta[topic].subtitle;
}

function updateStudyTip(questionTypeKey) {
  if (!state.studyMode || !state.topic || !studyTips[state.topic]) {
    studyTip.classList.add("hidden");
    return;
  }

  const tipText = studyTips[state.topic][questionTypeKey];
  if (!tipText) {
    studyTip.classList.add("hidden");
    return;
  }

  studyTip.textContent = `Tip: ${tipText}`;
  studyTip.classList.remove("hidden");
}

function renderQuestion() {
  const question = activeQuestions[state.currentIndex];
  const typeLabel = question.type === "vocab" ? "Vocabulary" : question.type === "tf" ? "True / False" : "Code Writing";

  progressText.textContent = `Question ${state.currentIndex + 1} of ${activeQuestions.length}`;
  scoreText.textContent = `Score: ${state.score}`;
  questionType.textContent = typeLabel;
  questionPrompt.textContent = question.prompt;
  updateStudyTip(question.type);
  feedback.textContent = "";
  feedback.className = "feedback";
  nextBtn.disabled = true;
  state.selectedOption = null;
  state.answered = false;

  if (question.type === "code") {
    const isSwiftTopic = state.topic === "swift";
    const placeholder = isSwiftTopic
      ? "Type Swift / SwiftUI code here..."
      : "Type your answer here...";

    answerArea.innerHTML = `
      <div class="code-editor ${isSwiftTopic ? "swift-editor" : ""}">
        <div class="code-editor-bar">
          <span class="dot red"></span>
          <span class="dot yellow"></span>
          <span class="dot green"></span>
          <span class="editor-title">${isSwiftTopic ? "Swift Practice" : "Code Practice"}</span>
        </div>
        <textarea id="codeInput" class="code-input" placeholder="${placeholder}"></textarea>
      </div>
      <div id="autoFillBar" class="autofill-bar hidden"></div>
    `;

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

function gradeCurrentQuestion() {
  const question = activeQuestions[state.currentIndex];
  let correct = false;

  if (question.type === "code") {
    const codeInput = document.getElementById("codeInput");
    const submission = normalize(codeInput.value);
    correct = question.checks.every((check) => submission.includes(normalize(check)));
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
    state.score += 1;
    scoreText.textContent = `Score: ${state.score}`;
    feedback.textContent = `Correct! ${question.explanation || ""}`;
    feedback.className = "feedback correct";
    return;
  }

  const correction = question.type === "code" ? `Example:\n${question.sample}` : question.explanation;
  feedback.textContent = `Not quite. ${correction}`;
  feedback.className = "feedback incorrect";
}

function goNext() {
  if (state.currentIndex === activeQuestions.length - 1) {
    questionCard.classList.add("hidden");
    resultsCard.classList.remove("hidden");
    finalScore.textContent = `You got ${state.score} out of ${activeQuestions.length} on ${formatLabel(state.topic)} ${formatLabel(state.level)}.`;
    return;
  }

  state.currentIndex += 1;
  renderQuestion();
}

function startQuiz(level) {
  activeQuestions = questionSets[state.topic][level];
  state.level = level;
  state.currentIndex = 0;
  state.score = 0;
  state.selectedOption = null;
  state.answered = false;
  levelCard.classList.add("hidden");
  statusBar.classList.remove("hidden");
  resultsCard.classList.add("hidden");
  questionCard.classList.remove("hidden");
  renderQuestion();
}

function restart() {
  if (!state.topic || !state.level) {
    return;
  }
  startQuiz(state.level);
}

function showLevelSelection() {
  state.level = "";
  activeQuestions = [];
  state.currentIndex = 0;
  state.score = 0;
  state.selectedOption = null;
  state.answered = false;
  statusBar.classList.add("hidden");
  questionCard.classList.add("hidden");
  resultsCard.classList.add("hidden");
  levelCard.classList.remove("hidden");
}

function showTopicSelection() {
  state.topic = "";
  state.level = "";
  activeQuestions = [];
  state.currentIndex = 0;
  state.score = 0;
  state.selectedOption = null;
  state.answered = false;
  setTopicHeader("");
  statusBar.classList.add("hidden");
  questionCard.classList.add("hidden");
  resultsCard.classList.add("hidden");
  levelCard.classList.add("hidden");
  topicCard.classList.remove("hidden");
}

topicButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const topic = button.dataset.topic;
    state.topic = topic;
    setTopicHeader(topic);
    topicCard.classList.add("hidden");
    levelCard.classList.remove("hidden");
  });
});

levelButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const level = button.dataset.level;
    startQuiz(level);
  });
});

submitBtn.addEventListener("click", () => {
  if (state.answered) {
    return;
  }
  gradeCurrentQuestion();
});

studyModeToggle.addEventListener("change", () => {
  state.studyMode = studyModeToggle.checked;
  if (!activeQuestions.length) {
    studyTip.classList.add("hidden");
    return;
  }
  const currentQuestion = activeQuestions[state.currentIndex];
  updateStudyTip(currentQuestion.type);
});

nextBtn.addEventListener("click", goNext);
restartBtn.addEventListener("click", restart);
changeLevelBtn.addEventListener("click", showLevelSelection);
changeTopicBtn.addEventListener("click", showTopicSelection);

showTopicSelection();
