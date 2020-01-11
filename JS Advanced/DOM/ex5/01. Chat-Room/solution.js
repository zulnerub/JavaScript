function solve() {
    const sendBtn = document.getElementById("send");
    const input = document.getElementById("chat_input");

    sendBtn.addEventListener("click", sendText);

    function sendText() {
        let message = input.value;
        let newMessage = document.createElement("div");
        newMessage.classList.add("message", "my-message");
        newMessage.textContent = message;
        document.getElementById("chat_messages").appendChild(newMessage);

        input.value = "";
    }
}


