let filteredQuestions = [...questions];
let currentQuestion = 0;
let score = 0;
let userAnswers = [];

const quizContainer = document.getElementById("quiz-container");
const resultDiv = document.getElementById("result");
const scoreDisplay = document.getElementById("score");
const nextBtn = document.getElementById("next-btn");
const unitDropdown = document.getElementById("unitFilter");
const topicDropdown = document.getElementById("topicFilter");

// --- Initialize Filters ---
function populateFilters() {
  const units = [...new Set(questions.map(q => q.unit))];
  units.forEach(unit => {
    const opt = document.createElement("option");
    opt.value = unit;
    opt.textContent = unit;
    unitDropdown.appendChild(opt);
  });
  updateTopicDropdown();
}

// --- Update Topics when Unit changes ---
function updateTopicDropdown() {
  const selectedUnit = unitDropdown.value;
  topicDropdown.innerHTML = '<option value="all">All Topics</option>';

  let topics;
  if (selectedUnit === "all") {
    topics = [...new Set(questions.map(q => q.topic))];
  } else {
    topics = [...new Set(questions.filter(q => q.unit === selectedUnit).map(q => q.topic))];
  }

  topics.forEach(topic => {
    const opt = document.createElement("option");
    opt.value = topic;
    opt.textContent = topic;
    topicDropdown.appendChild(opt);
  });

  applyFilters();
}

// --- Apply Filters ---
function applyFilters() {
  const selectedUnit = unitDropdown.value;
  const selectedTopic = topicDropdown.value;

  filteredQuestions = questions.filter(q => {
    return (
      (selectedUnit === "all" || q.unit === selectedUnit) &&
      (selectedTopic === "all" || q.topic === selectedTopic)
    );
  });

  restartQuiz(false); // reload without resetting filters
}

// --- Quiz Logic ---
function loadQuestion() {
  if (filteredQuestions.length === 0) {
    quizContainer.innerHTML = `<p class="text-center text-gray-600">No questions available for this filter.</p>`;
    nextBtn.classList.add("hidden");
    return;
  }

  const q = filteredQuestions[currentQuestion];
  quizContainer.innerHTML = `
    <div class="mb-6">
      <p class="text-sm text-gray-500 mb-1">${q.unit} • ${q.topic}</p>
      <h2 class="text-xl font-semibold mb-4">${q.question}</h2>
      <div id="options" class="space-y-2">
        ${q.options
          .map(
            (option, index) => `
          <button 
            class="option w-full text-left px-4 py-2 border rounded-lg hover:bg-gray-100" 
            onclick="selectAnswer(${index})"
          >${option}</button>`
          )
          .join("")}
      </div>
    </div>
  `;
}

function selectAnswer(selected) {
  const q = filteredQuestions[currentQuestion];
  const options = document.querySelectorAll(".option");

  options.forEach((btn, index) => {
    btn.disabled = true;
    if (index === q.correct) btn.classList.add("bg-green-200");
    else if (index === selected) btn.classList.add("bg-red-200");
  });

  const explanationDiv = document.createElement("div");
  explanationDiv.className = "mt-3 text-sm text-gray-700";
  explanationDiv.innerHTML = `<strong>Explanation:</strong> ${q.explanation}`;
  quizContainer.appendChild(explanationDiv);

  if (selected === q.correct) score++;
  userAnswers.push(selected);
  nextBtn.classList.remove("hidden");
}

function nextQuestion() {
  currentQuestion++;
  nextBtn.classList.add("hidden");

  if (currentQuestion < filteredQuestions.length) {
    loadQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  quizContainer.innerHTML = "";
  resultDiv.classList.remove("hidden");
  const total = filteredQuestions.length;
  const percentage = ((score / total) * 100).toFixed(1);
  scoreDisplay.textContent = `${score}/${total} (${percentage}%)`;
}

function restartQuiz(resetFilters = true) {
  currentQuestion = 0;
  score = 0;
  userAnswers = [];
  resultDiv.classList.add("hidden");
  nextBtn.classList.add("hidden");
  if (resetFilters) {
    unitDropdown.value = "all";
    topicDropdown.value = "all";
    filteredQuestions = [...questions];
  }
  loadQuestion();
}

populateFilters();
loadQuestion();
