const responses = ["a", "b", "c", "a", "c"];
const emojis = ["✔️", "✨", "👀", "😭", "👎"];

const form = document.querySelector('.quiz');
const handleForm = (e) => {
    e.preventDefault();

    const results = [];

    const checkedRadioButtons = document.querySelectorAll("input[type='radio']:checked")

    checkedRadioButtons.forEach((radiobutton, index) => {
        if (radiobutton.value == responses[index]) {
            results.push(true)
        } else {
            results.push(false)
        }
    })

    showResults(results)
    addColors(results)
}
form.addEventListener("submit", handleForm)

const titleResult = document.querySelector('.results h2')
const markResult = document.querySelector('.mark')
const helpResult = document.querySelector('.help')
const showResults = (results) => {
    const errorsNumber = results.filter(result => result === false).length;

    switch (errorsNumber) {
        case 0:
            titleResult.textContent = `🚀✨ Wubba Lubba Dub Dub  ! ✨🚀`;
            helpResult.textContent = "⬇️⬇️⬇️ Contact me ⬇️⬇️⬇️";
            helpResult.style.display = "block";
            markResult.innerHTML = "Score : <span>5 / 5</span>";
            markResult.style.display = "block";
            break;
        case 1:
            titleResult.textContent = `✨ You are almost there ! ✨`;
            helpResult.textContent =
                "Enter another answer in the red box, then re-validate !";
            helpResult.style.display = "block";
            markResult.innerHTML = "Score : <span>4 / 5</span>";
            markResult.style.display = "block";
            break;
        case 2:
            titleResult.textContent = `✨ One more effort ... 👀`;
            helpResult.textContent =
                "Enter another answer in the red boxes, then re-validate !";
            helpResult.style.display = "block";
            markResult.innerHTML = "Score : <span>3 / 5</span>";
            markResult.style.display = "block";
            break;
        case 3:
            titleResult.textContent = `👀 There are still some errors. 😭`;
            helpResult.textContent =
                "Enter another answer in the red boxes, then re-validate !";
            helpResult.style.display = "block";
            markResult.innerHTML = "Score : <span>2 / 5</span>";
            markResult.style.display = "block";
            break;
        case 4:
            titleResult.textContent = `😭 Can do better ! 😭`;
            helpResult.textContent =
                "Enter another answer in the red boxes, then re-validate !";
            helpResult.style.display = "block";
            markResult.innerHTML = "Score : <span>1 / 5</span>";
            markResult.style.display = "block";
            break;
        case 5:
            titleResult.textContent = `👎 Can do better ! 👎`;
            helpResult.style.display = "block";
            helpResult.textContent =
                "Enter another answer in the red boxes, then re-validate !";
            markResult.style.display = "block";
            markResult.innerHTML = "Score : <span>0 / 5</span>";
            break;

        default:
            titleResult.textContent = "Wops, something bad has happened.";
    }
}

const questions = document.querySelectorAll(".question__block");
const addColors = (results) => {
    results.forEach((response, index) => {
        if(results[index]) {
            questions[index].style.backgroundImage = "linear-gradient(to right, #a8ff78, #78ffd6)";
        } else {
            questions[index].style.backgroundImage = "linear-gradient(to right, #f5567b, #fd674c)";
        }
    })
}

const resetColor = (e) => {
    const index = e.target.getAttribute("name").slice(1) - 1;
    const parentQuestionBlock = questions[index];
    parentQuestionBlock.style.background = "#f1f1f1";
    parentQuestionBlock.style.backgroundImage = "none";
    
}
const radioInputs = document.querySelectorAll("input[type='radio']");
radioInputs.forEach(radioInput => radioInput.addEventListener("input", resetColor));