document.getElementById("send-btn").addEventListener("click", function () {
  const userInput = document
    .getElementById("user-input")
    .value.trim()
    .toLowerCase();
  const chatBox = document.getElementById("chat-box");
  const backgroundImage = document.getElementById("background-image");

  // Clear the input field
  document.getElementById("user-input").value = "";

  if (userInput === "else") {
    // Hide chat box and show background image
    chatBox.style.display = "none";
    backgroundImage.style.display = "block";
  } else {
    // Append user message to chat box
    const userMessageDiv = document.createElement("div");
    userMessageDiv.classList.add("message", "user-message");
    userMessageDiv.textContent = userInput;
    chatBox.appendChild(userMessageDiv);

    // Show response from bot
    const botMessageDiv = document.createElement("div");
    botMessageDiv.classList.add("message", "bot-message");
    botMessageDiv.textContent = "I received your message!";
    chatBox.appendChild(botMessageDiv);

    // Scroll to the bottom of the chat box
    chatBox.scrollTop = chatBox.scrollHeight;
  }
});
