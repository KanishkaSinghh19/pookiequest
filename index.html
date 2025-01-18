<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cute Questionnaire</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      background: url('https://assets.onecompiler.app/436akzcdy/436e38ys2/Screenshot%202025-01-18%20144617.png') no-repeat center center fixed;
      background-size: cover;
      font-family: 'Arial', sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background-attachment: fixed;
      background-blend-mode: multiply;
    }

    .container {
      background-color: rgba(255, 255, 255, 0.85);
      border-radius: 12px;
      padding: 20px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      text-align: center;
      width: 300px;
    }

    .title {
      font-size: 24px;
      font-weight: bold;
      color: #6a5acd;
      margin-bottom: 20px;
    }

    .question-container {
      margin-top: 20px;
    }

    .question-text {
      font-size: 18px;
      margin-bottom: 20px;
      color: #333;
      font-weight: 600;
    }

    .options {
      display: flex;
      flex-direction: column;
    }

    .option-btn {
      background-color: #ff3399;
      border: none;
      color: white;
      padding: 10px;
      margin: 5px;
      border-radius: 8px;
      font-size: 16px;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    .option-btn:hover {
      background-color: #ff66b2;
    }

    .results {
      margin-top: 20px;
      font-size: 18px;
      color: #333;
    }

    .emoticon {
      font-size: 32px;
      margin-left: 10px;
      opacity: 0; /* Hide by default */
      animation: pop 1.5s ease-in-out forwards; /* Add pop animation */
    }

    /* Animation for emoticon popping effect */
    @keyframes pop {
      0% {
        transform: scale(0);
        opacity: 1;
      }
      50% {
        transform: scale(1.5);
      }
      100% {
        transform: scale(1);
      }
    }

    /* Style for thank you message */
    .thank-you-message {
      font-size: 24px;
      font-weight: bold;
      color: #ff3399;
      margin-top: 20px;
      display: none; /* Initially hidden */
    }
  </style>
</head>
<body>
  <div class="container">
    <h1 class="title">Cute Questionnaire</h1>
    <div id="question-container" class="question-container">
      <p id="question-text" class="question-text"></p>
      <div class="options">
        <button class="option-btn" onclick="nextQuestion(1)">Option 1</button>
        <button class="option-btn" onclick="nextQuestion(2)">Option 2</button>
        <button class="option-btn" onclick="nextQuestion(3)">Option 3</button>
      </div>
    </div>
    <div id="results" class="results"></div>
    <div id="thank-you-message" class="thank-you-message">Thank you for your responses cutie 💕</div>
  </div>

  <script>
    let currentQuestion = 0;
    const questions = [
      {
        question: "Hyy, how are you?",
        options: ["Fine", "Not Good"],
        emoticons: ["😍", "😒"]
      },
      {
        question: "When will we meet?",
        options: ["Monday", "Tuesday", "Never"],
        emoticons: ["🥰", "😍", "😢"]
      },
      {
        question: "How much do you like me?",
        options: ["below 50%", "between 50%-80%", "above 80%"],
        emoticons: ["😐", "😍", "🥰"]
      }
    ];

    const results = [];

    function showQuestion() {
      const question = questions[currentQuestion];
      const questionText = document.getElementById("question-text");
      questionText.textContent = question.question;

      const optionButtons = document.querySelectorAll('.option-btn');
      optionButtons.forEach((btn, index) => {
        if (index < question.options.length) {
          btn.textContent = question.options[index];
          btn.style.display = 'inline-block';
        } else {
          btn.style.display = 'none';
        }
      });
    }

    function nextQuestion(optionIndex) {
      const selectedOption = questions[currentQuestion].options[optionIndex - 1];
      const selectedEmoticon = questions[currentQuestion].emoticons[optionIndex - 1];

      // Collect the answer with emoticon
      results.push({ answer: selectedOption, emoticon: selectedEmoticon });

      // Show emoticon animation
      const emoticonDiv = document.getElementById("results");
      const emoticonElem = document.createElement("span");
      emoticonElem.classList.add("emoticon");
      emoticonElem.textContent = selectedEmoticon;

      // Append the emoticon to the result container
      emoticonDiv.appendChild(emoticonElem);

      // Delay the next question until emoticon animation is done
      setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < questions.length) {
          showQuestion();
          emoticonDiv.innerHTML = '';  // Clear previous emoticons
        } else {
          // Show the thank you message after the final question
          document.getElementById("question-container").style.display = 'none';
          document.getElementById("results").style.display = 'none';
          document.getElementById("thank-you-message").style.display = 'block'; // Show "thank you" message
          sendResultsToBackend();
        }
      }, 1000);  // Delay should match the animation duration (1 second here)
    }

function sendResultsToBackend() {
  const data = {
    answers: results, // Use the collected results
  };

  // URL of the local server (update PORT if your backend uses a different one)
  fetch('http://localhost:3000/saveResponses', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data), // Send the responses as JSON data
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log('Success:', data);
      alert('Thank you for your responses!'); // Show confirmation on success
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('Failed to save your responses.'); // Show an error if the request fails
    });
}

    showQuestion();
  </script>
</body>
</html>
