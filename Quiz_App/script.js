const quizdata = [{
    question: "Which of the following is a client site language?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
},
{
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
},
{
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
},
{
    question: "What does CSS stands for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "b",
}
];

let index = 0;
let correct = 0,
    incorrect = 0,
    total = quizdata.length;
let questionbox = document.getElementById("questionbox");
let allinputs = document.querySelectorAll("input[type='radio']");
const loadquestion = () =>{     //first thing done loading question
    if(total===index){
        return quizend()
    }
    reset()
    const data = quizdata[index]
    questionbox.innerText = `${index+1} ${data.question}`
    allinputs[0].nextElementSibling.innerText = data.a
    allinputs[1].nextElementSibling.innerText = data.b 
    allinputs[2].nextElementSibling.innerText = data.c
    allinputs[3].nextElementSibling.innerText = data.d
}
document.querySelector("#submit").addEventListener(
    "click",
    function (){
       const data = quizdata[index]
       const ans = getans()
       if(ans===data.correct){
        correct++;
       }else{
        incorrect++;
       }
       index++;
       loadquestion()
    }
)
const getans=()=>{
    allinputs.forEach(
        (inputE1)=>{
            if(inputE1.checked){
                ans = inputE1.value;
            }
        }
    )
    return ans;
}
const reset = ()=>{
    allinputs.forEach(
        (inputE1)=>{
            inputE1.checked=false;
        }
    )
}
const quizend = () =>{
    document.getElementsByClassName("container")[0].innerHTML = `
    <div class = "col">
    <h3 class="w-100"> Hii , you've scored ${correct}/${index}</h3>
    </div>
    `
}
loadquestion(index);