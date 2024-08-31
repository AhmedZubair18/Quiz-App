const questions = [
    {
    "question": "What is 5 + 7?",
        "a": "10",
        "b": "11",
        "c": "12",
        "d": "13",
    "correctAnswer": "c"
},
{
    "question": "What is the square root of 64?",
        "a": "6",
        "b": "7",
        "c": "8",
        "d": "9",
    "correctAnswer": "c"
},{
    "question": "What is 15 / 3?",
        "a": "3",
        "b": "4",
        "c": "5",
        "d": "6",
    "correctAnswer": "c"
},
{
"question": "What is 12 * 12?",
    "a": "124",
    "b": "144",
    "c": "164",
    "d": "184",
    "correctAnswer": "b"
},
{
    "question": "What is the sum of angles in a triangle?",
    "a": "90 degrees",
    "b": "180 degrees",
    "c": "270 degrees",
    "d": "360 degrees",
    "correctAnswer": "b"
}]

const abc = () => {
    setTimeout(function (){
        alert("Welcome to Quiz App")
    },1000)
}
abc()



let index = 0 
let total = questions.length
let right = 0
    wrong = 0
const quesBox = document.getElementById("quesBox")
const optionInput = document.querySelectorAll(".options")
 
const loadQuestion = () => {
    const data = questions[index]
    if(index === total){
        return endQuiz()
    }
    reset()

    quesBox.innerText = `${index+1} ${data.question}`
    optionInput[0].nextElementSibling.innerText = data.a
    optionInput[1].nextElementSibling.innerText = data.b
    optionInput[2].nextElementSibling.innerText = data.c
    optionInput[3].nextElementSibling.innerText = data.d

}

const submitQuiz = () =>{
    const ans = getAnswer()
    const data = questions[index]
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (!selectedOption) {
        alert('Please select an option!');
      return}
    if(ans === data.correctAnswer){
        right++
    }else{
        wrong++
    }
    index++
    loadQuestion()
}
const getAnswer = () => {
    let answer 
    optionInput.forEach(
        (input) => {
            if(input.checked){
                answer =input.value
            }
        }
    )
    return answer
}

const reset = () => {
    optionInput.forEach(
        (input) => {
            input.checked = false
        }
    )
}

const endQuiz = () => {
    document.getElementById("box").innerHTML = `
    <div style="text-align:center">
    <h2>Thank you for playing </h2>
    <h3> ${right} ${total} are correct </h3>
    </div>
    `

}
loadQuestion()