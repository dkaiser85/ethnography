const questionsData = {
  M1: {
    poor: [
      "You rated your sense of safety at work as low. Can you describe specific incidents or conditions that made you feel unsafe or disrespected?",
      "How do you think the company could improve the physical and emotional safety of its employees?",
      "Are there any policies or practices that you feel are lacking or inadequate in ensuring a safe work environment?"
    ],
    fair: [
      "You rated your sense of safety at work as fair. What are some areas where you feel safe, and where do you think there is room for improvement?",
      "Can you describe any instances where you felt partially supported or respected, but not fully?",
      "How do you think the company could enhance its safety measures to make you feel more secure?"
    ],
    great: [
      "You rated your sense of safety at work as high. What specific policies or practices do you think contribute to this sense of safety?",
      "Can you describe any instances where you felt particularly supported or respected by your supervisors or colleagues?",
      "How does the company's approach to safety impact your overall job satisfaction and engagement?"
    ]
  },
  M2: {
    poor: [
      "You rated your compensation as low. What aspects of the compensation package do you feel are inadequate, and how does this impact your job satisfaction?",
      "Can you compare the compensation here to what you've experienced in previous roles? What are the key differences?",
      "How do you think the company could improve the compensation package to better meet your needs?"
    ],
    // Add fair and great questions for M2, and so on for other categories...
  }
};

document.getElementById("generateQuestions").addEventListener("click", () => {
  const category = document.getElementById("category").value;
  const score = document.getElementById("score").value;
  const questionsList = document.getElementById("questions-list");

  // Clear previous questions
  questionsList.innerHTML = "";

  // Get questions based on category and score
  const questions = questionsData[category][score] || [];

  // Render questions
  questions.forEach((question) => {
    const listItem = document.createElement("li");
    listItem.textContent = question;
    questionsList.appendChild(listItem);
  });
});
