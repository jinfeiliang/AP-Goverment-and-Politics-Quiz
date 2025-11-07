const questions = [
  // Unity Basics (20 Questions)
  {
    unit: "Unit 1",
    topic: "Unity Basics",
    question: "What is the main purpose of the Unity Editor?",
    options: [
      "To edit 3D models",
      "To design and manage game objects and scenes",
      "To compile C# scripts",
      "To create shaders only"
    ],
    correct: 1,
    explanation: "The Unity Editor allows developers to create, organize, and test game scenes and objects."
  },
  {
    unit: "Unit 1",
    topic: "Unity Basics",
    question: "Which programming language is primarily used in Unity scripting?",
    options: ["Java", "C#", "Python", "C++"],
    correct: 1,
    explanation: "C# is the standard language used for scripting in Unity."
  },
  {
    unit: "Unit 1",
    topic: "Unity Basics",
    question: "What is a GameObject in Unity?",
    options: [
      "A data structure for storing variables",
      "A basic entity in Unity that can represent characters, props, or environments",
      "A UI element",
      "A compiled script file"
    ],
    correct: 1,
    explanation: "GameObjects are the fundamental building blocks of Unity scenes."
  },
  {
    unit: "Unit 1",
    topic: "Unity Basics",
    question: "Which Unity component defines an object’s position, rotation, and scale?",
    options: ["Transform", "Rigidbody", "Collider", "Renderer"],
    correct: 0,
    explanation: "The Transform component stores position, rotation, and scale in 3D space."
  },
  {
    unit: "Unit 1",
    topic: "Unity Basics",
    question: "Which view allows you to navigate and place objects in a scene?",
    options: ["Game View", "Hierarchy", "Scene View", "Inspector"],
    correct: 2,
    explanation: "The Scene View is where developers visually place and adjust GameObjects."
  },
  {
    unit: "Unit 1",
    topic: "Unity Basics",
    question: "What is the purpose of the Hierarchy window?",
    options: [
      "To display assets in the project",
      "To show all GameObjects in the active scene",
      "To manage build settings",
      "To control camera angles"
    ],
    correct: 1,
    explanation: "The Hierarchy window lists every GameObject currently in the active scene."
  },
  {
    unit: "Unit 1",
    topic: "Unity Basics",
    question: "What does the Inspector window display?",
    options: [
      "Project folders",
      "Properties and components of the selected GameObject",
      "Scripts in the project",
      "Console errors only"
    ],
    correct: 1,
    explanation: "The Inspector displays and allows editing of all components attached to a selected GameObject."
  },
  {
    unit: "Unit 1",
    topic: "Unity Basics",
    question: "Which component is required for a GameObject to be visible in a 3D scene?",
    options: ["Collider", "Rigidbody", "Mesh Renderer", "Canvas"],
    correct: 2,
    explanation: "A Mesh Renderer renders the object’s geometry to the screen."
  },
  {
    unit: "Unit 1",
    topic: "Unity Basics",
    question: "What is a prefab in Unity?",
    options: [
      "A saved GameObject template that can be reused in scenes",
      "A type of C# script",
      "A shader effect",
      "A physics material"
    ],
    correct: 0,
    explanation: "Prefabs let you create, configure, and reuse complex GameObjects easily across scenes."
  },
  {
    unit: "Unit 1",
    topic: "Unity Basics",
    question: "Which menu option do you use to create a new GameObject?",
    options: ["Assets > Import", "GameObject > Create Empty", "File > New Scene", "Window > GameObject"],
    correct: 1,
    explanation: "You can create an empty GameObject via the GameObject menu."
  },

  // Scripting Fundamentals
  {
    unit: "Unit 1",
    topic: "Scripting Fundamentals",
    question: "Which method is called once at the start of a script’s lifetime?",
    options: ["Update()", "Awake()", "Start()", "OnEnable()"],
    correct: 2,
    explanation: "Start() runs once before the first frame update when the script is enabled."
  },
  {
    unit: "Unit 1",
    topic: "Scripting Fundamentals",
    question: "Which Unity method is called every frame?",
    options: ["Start()", "Update()", "Awake()", "FixedUpdate()"],
    correct: 1,
    explanation: "Update() executes once per frame and is used for continuous checks like input handling."
  },
  {
    unit: "Unit 1",
    topic: "Scripting Fundamentals",
    question: "What keyword allows you to access a component attached to the same GameObject?",
    options: ["FindObjectOfType()", "GetComponent()", "Find()", "AddComponent()"],
    correct: 1,
    explanation: "GetComponent<T>() returns the component of type T attached to the same GameObject."
  },
  {
    unit: "Unit 1",
    topic: "Scripting Fundamentals",
    question: "Which C# method detects collisions when using Rigidbody and Collider components?",
    options: ["OnTriggerEnter()", "OnCollisionEnter()", "OnMouseDown()", "Update()"],
    correct: 1,
    explanation: "OnCollisionEnter() is called when two colliders make contact using physics."
  },
  {
    unit: "Unit 1",
    topic: "Scripting Fundamentals",
    question: "What does Time.deltaTime represent?",
    options: [
      "Total game time since start",
      "Time between the current and previous frame",
      "The number of frames per second",
      "A countdown timer"
    ],
    correct: 1,
    explanation: "Time.deltaTime provides the time elapsed since the last frame, useful for smooth movement."
  },
  {
    unit: "Unit 1",
    topic: "Scripting Fundamentals",
    question: "Which class is used to access keyboard input in Unity?",
    options: ["Input", "Keyboard", "PlayerPrefs", "Controls"],
    correct: 0,
    explanation: "The Input class handles keyboard, mouse, and controller input."
  },
  {
    unit: "Unit 1",
    topic: "Scripting Fundamentals",
    question: "Which Unity method is called at a fixed time interval suitable for physics calculations?",
    options: ["Start()", "Update()", "FixedUpdate()", "LateUpdate()"],
    correct: 2,
    explanation: "FixedUpdate() is called at consistent intervals and is used for physics updates."
  },
  {
    unit: "Unit 1",
    topic: "Scripting Fundamentals",
    question: "What is the correct way to destroy a GameObject in code?",
    options: [
      "gameObject.remove()",
      "Destroy(gameObject);",
      "Delete(gameObject);",
      "gameObject = null;"
    ],
    correct: 1,
    explanation: "Destroy(gameObject) safely removes a GameObject from the scene."
  },
  {
    unit: "Unit 1",
    topic: "Scripting Fundamentals",
    question: "Which function is used to load a new scene in Unity?",
    options: [
      "SceneManager.LoadScene()",
      "Application.OpenScene()",
      "Scene.Load()",
      "Game.LoadScene()"
    ],
    correct: 0,
    explanation: "SceneManager.LoadScene() is part of UnityEngine.SceneManagement and loads a scene by name or index."
  },
  {
    unit: "Unit 1",
    topic: "Scripting Fundamentals",
    question: "What is the purpose of a coroutine in Unity?",
    options: [
      "To execute code on another thread",
      "To handle asynchronous events like waiting or timed loops",
      "To render graphics faster",
      "To replace Update() entirely"
    ],
    correct: 1,
    explanation: "Coroutines allow you to pause code execution using yield statements without freezing the game."
  }
];
