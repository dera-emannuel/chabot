// Function to append messages to the chatbox
function appendMessage(message, sender) {
    const chatbox = document.getElementById('chatbox');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender + '-message');
    messageElement.textContent = message;
    chatbox.appendChild(messageElement);
    chatbox.scrollTop = chatbox.scrollHeight; // Scroll to the bottom
}

// Function to handle user input
function handleUserInput() {
    const userInput = document.getElementById('userInput');
    const message = userInput.value.trim();

    if (message) {
        // Append user message to chatbox
        appendMessage(message, 'user');

        // Clear input
        userInput.value = '';

        // Simulate bot response
        setTimeout(() => {
            botResponse(message);
        }, 1000);
    }
}

// Function to generate bot response
function botResponse(message) {
    let response = '';

    // Simple chatbot logic
    if (message.toLowerCase().includes('hello')) {
        response = 'Hi there! How can I assist you?';
    } else if (message.toLowerCase().includes('help')) {
        response = 'I am here to help. Ask me anything!';
    }else if(message.toLowerCase().includes('name')){
        response = 'I am a chatbot'
    }else if(message.toLowerCase().includes('html')){
        response = 'Hyper Text Markup Language';
    }else if(message.toLowerCase().includes('css')){
        response = 'Cascading style sheet';
    }else if(message.toLowerCase().includes('javascript')){
        response = 'The brain of a Webpage'
    }
    else {
        response = "Sorry, I don't understand that.";
    }

    // Append bot response to chatbox
    appendMessage(response, 'bot');
}

// Add event listener to the send  button
document.getElementById('sendBtn').addEventListener('click', handleUserInput);

// Allow Enter key to send messages
document.getElementById('userInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleUserInput();
    }
});