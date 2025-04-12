const questions = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Lisbon"],
      answer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      answer: "Mars",
    },
    {
      question: "What is the largest ocean on Earth?",
      options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
      answer: "Pacific Ocean",
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
      answer: "Leonardo da Vinci",
    },
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const scoreElement = document.getElementById("score");
  const nextBtn = document.getElementById("nextBtn");
  
  function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
  
    // Clear previous options
    optionsElement.innerHTML = "";
  
    // Create buttons for options
    currentQuestion.options.forEach(option => {
      const optionBtn = document.createElement("button");
      optionBtn.textContent = option;
      optionBtn.onclick = () => checkAnswer(option);
      optionsElement.appendChild(optionBtn);
    });
  }
  
  function checkAnswer(selectedOption) {
    const correctAnswer = questions[currentQuestionIndex].answer;
  
    if (selectedOption === correctAnswer) {
      score++;
      scoreElement.textContent = score;
    }
  
    // Disable options after an answer is selected
    const buttons = optionsElement.querySelectorAll("button");
    buttons.forEach(button => {
      button.disabled = true;
      if (button.textContent === correctAnswer) {
        button.style.backgroundColor = "#a3e4a1"; // Green for correct
      } else if (button.textContent === selectedOption) {
        button.style.backgroundColor = "#f5a3a3"; // Red for wrong
      }
    });
  
    // Show next button after selecting an answer
    nextBtn.style.display = "inline-block";
  }
  
  function nextQuestion() {
    currentQuestionIndex++;
  
    if (currentQuestionIndex < questions.length) {
      loadQuestion();
      nextBtn.style.display = "none"; // Hide the next button again
    } else {
      quizOver();
    }
  }
  
  function quizOver() {
    questionElement.textContent = "Quiz Over!";
    optionsElement.innerHTML = "";
    nextBtn.style.display = "none";
  }
  
  loadQuestion();
   
  