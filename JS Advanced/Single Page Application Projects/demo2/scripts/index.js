// NOTE: The comment sections inside the index.html file is an example of how suppose to be structured the current elements.
//       - You can use them as an example when you create those elements, to check how they will be displayed, just uncomment them.
//       - Also keep in mind that, the actual skeleton in judge does not have this comment sections. So do not be dependent on them!
//       - Тhey are present in the skeleton just to help you!


// This function will be invoked when the html is loaded. Check the console in the browser or index.html file.
function mySolution(){
	const sendBtn = Array.from(document.querySelectorAll("button"))[0];
	sendBtn.addEventListener("click", sendQuestion);

	function sendQuestion() {
		let inputElement = Array.from(document.querySelectorAll("textarea"))[0];
		let username = Array.from(document.querySelectorAll("input"))[0];
		const pendingQuestions = document.getElementById("pendingQuestions");

		let pendingQuestionElement = document.createElement("div");
		pendingQuestionElement.classList.add("pendingQuestion");

		let img = document.createElement('img');
		img.setAttribute('src', './images/user.png');
		img.setAttribute('width', '32');
		img.setAttribute('height', '32');

		let spanElement = document.createElement("span");
		spanElement.innerHTML = username.value ? username.value : "Anonymous";

		let questionHolder = document.createElement("p");
		questionHolder.innerHTML = inputElement.value;

		let action = document.createElement("div");
		action.classList.add("actions");

		let btnArchive = document.createElement("button");
		btnArchive.classList.add("archive");
		btnArchive.innerHTML = "Archive";

		btnArchive.addEventListener("click", archiveQuestion);

		let btnOpen = document.createElement("button");
		btnOpen.classList.add("open");
		btnOpen.innerHTML = "Open";

		btnOpen.addEventListener("click", moveQuestionToOpen);

		appendChildren(action, [btnArchive, btnOpen]);
		appendChildren(pendingQuestionElement, [img, spanElement, questionHolder, action]);
		appendChildren(pendingQuestions, [pendingQuestionElement]);

		inputElement.value = "";
		username.value = "";

	}

	function moveQuestionToOpen(event) {
		let oldDivElement = event.target.previousElementSibling.parentElement.parentElement;
		let newDivElement = oldDivElement.cloneNode(true);

		newDivElement.removeAttribute("class", "pendingQuestion");
		newDivElement.setAttribute("class", "openQuestion");

		let [btn1, btn2] = Array.from(newDivElement.getElementsByTagName('button'));
		btn1.remove();
		btn2.remove();

		let action = Array.from(newDivElement.getElementsByTagName("div"))[0];
		let btnReply = document.createElement("button");
		btnReply.setAttribute("class", "reply");
		btnReply.textContent = "Reply";
		btnReply.addEventListener("click", showHideReplyElement);

		appendChildren(action, [btnReply]);

		let replySection = document.createElement('div');
		replySection.setAttribute('class', 'replySection');
		replySection.style.display = 'none';

		let answerInput = document.createElement('input');
		setAtributes(answerInput, [['class', 'replyInput'], ['type', 'text'], ['placeholder', 'Reply to this question here...']]);

		replySection.appendChild(answerInput);

		let btnAnswer = document.createElement('button');
		btnAnswer.setAttribute('class', 'replyButton');
		btnAnswer.textContent = 'Send';
		btnAnswer.addEventListener("click", answer);

		replySection.appendChild(btnAnswer);

		let newOlElement = document.createElement('ol');
		setAtributes(newOlElement, [['class', 'reply'], ['type', '1']]);

		replySection.appendChild(newOlElement);

		newDivElement.appendChild(replySection);

		let openQuestionElement = document.getElementById('openQuestions');
		openQuestionElement.appendChild(newDivElement);
		oldDivElement.remove();
	}

	function answer(event) {
		let inputElement = event.target.previousElementSibling;

		if (inputElement.value !== ""){
			let answer = inputElement.value;
			let olElement = event.target.parentElement.getElementsByTagName('ol')[0];
			let newListElement = document.createElement('li');
			newListElement.textContent = answer;
			olElement.appendChild(newListElement);
			inputElement.value = '';
		}
	}

	function showHideReplyElement(event) {
		if (event.target.parentElement.parentElement.getElementsByTagName('div')[1].style.display === 'none'){
			event.target.parentElement.parentElement.getElementsByTagName('div')[1].style.display = 'block';
			event.target.textContent = 'Back';
		}else{
			event.target.parentElement.parentElement.getElementsByTagName('div')[1].style.display = 'none';
			event.target.textContent = 'Reply';
		}
	}

	function appendChildren(parentElement, children) {
		children.map(child => parentElement.appendChild(child));
	}


	function archiveQuestion(event) {
		let oldDivElement = event.target.parentNode.parentNode;
		oldDivElement.remove();
	}

	function setAtributes(htmlElement, arrayOfAtributes) {
		arrayOfAtributes.map(atr => htmlElement.setAttribute(`${atr[0]}`, `${atr[1]}`));
	}


}
// To check out your solution, just submit mySolution() function in judge system.