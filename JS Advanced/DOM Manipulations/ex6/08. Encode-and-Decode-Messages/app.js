function encodeAndDecodeMessages() {
    let buttons = document.getElementsByTagName('button');
    let textAreas = document.getElementsByTagName('textarea');

    let send = buttons[0];
    let sendTextArea = textAreas[0];

    let receive = buttons[1];
    let receiveTextArea = textAreas[1];

    send.addEventListener('click', sendMessage);
    receive.addEventListener('click', decodeMessage);

    function sendMessage() {
        let text = sendTextArea.value;
        let coded = text.split("")
            .map(c => c.charCodeAt(0) + 1)
            .map(c => String.fromCharCode(c))
            .join("");

        sendTextArea.value = "";
        receiveTextArea.value = coded;
    }

    function decodeMessage() {
        let text = receiveTextArea.value;
        let decoded = text.split("")
            .map(c => c.charCodeAt(0) - 1)
            .map(c => String.fromCharCode(c))
            .join("");

        receiveTextArea.value = decoded;
    }
}