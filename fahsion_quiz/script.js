const questions = [{
    question: "Which of the following is a famous fashion brand?",
    a: "Apple",
    b: "Nike",
    c: "Google",
    d: "Microsoft",
    correct: "b",
},
{
    question: "What does 'Haute Couture' refer to in fashion?",
    a: "High fashion",
    b: "Street fashion",
    c: "Retro fashion",
    d: "Casual fashion",
    correct: "a",
},
{
    question: "Who is a well-known fashion designer?",
    a: "Albert Einstein",
    b: "Pablo Picasso",
    c: "Coco Chanel",
    d: "Isaac Newton",
    correct: "c",
},
{
    question: "What is 'Prêt-à-Porter' in fashion?",
    a: "Custom-made clothing",
    b: "High-end fashion",
    c: "Ready-to-wear clothing",
    d: "Vintage clothing",
    correct: "c",
},
{
    question: "Which city is known as a global fashion capital?",
    a: "Paris",
    b: "Tokyo",
    c: "New York",
    d: "London",
    correct: "a",
},
{
    question: "What fabric is commonly used in denim jeans?",
    a: "Cotton",
    b: "Silk",
    c: "Wool",
    d: "Polyester",
    correct: "a",
},
{
    question: "Who founded the luxury fashion house Gucci?",
    a: "Louis Vuitton",
    b: "Gianni Versace",
    c: "Ralph Lauren",
    d: "Guccio Gucci",
    correct: "d",
},
{
    question: "What does the term 'Fashionista' refer to?",
    a: "Fashion critic",
    b: "Fashion enthusiast",
    c: "Fashion designer",
    d: "Fashion photographer",
    correct: "b",
},
{
    question: "What is a 'Trench Coat' traditionally made from?",
    a: "Leather",
    b: "Denim",
    c: "Cotton gabardine",
    d: "Wool",
    correct: "c",
},
{
    question: "Which accessory is essential for a 'Little Black Dress' ensemble?",
    a: "Sunglasses",
    b: "Necktie",
    c: "Pearl necklace",
    d: "Baseball cap",
    correct: "c",
}];

let index = 0;

let questionBox = document.getElementById("quebox");

let optioninputs = document.querySelectorAll(".ans")
const loadquestion = () =>{

    if(index === total)
    {
        return endquiz();
    }
    reset();
    const data = questions[index];
    questionBox.innerText = data.question;
    
    
    optioninputs[0].nextElementSibling.innerText = "A" + ' \u00A0 ' + '\u00A0 '+ data.a;
    optioninputs[1].nextElementSibling.innerText = "B" + ' \u00A0 ' + '\u00A0 '+ data.b;
    optioninputs[2].nextElementSibling.innerText = "C" + ' \u00A0 ' + '\u00A0 '+ data.c;
    optioninputs[3].nextElementSibling.innerText = "D" + ' \u00A0 ' + '\u00A0 '+ data.d;
   
}

let total = questions.length;
let right = 0, wrong  = 0;












const getans = () => {
    let selectedAnswer = null;
    optioninputs.forEach((input) => {
        if (input.checked) {
            selectedAnswer = input.value;
        }
    });
    return selectedAnswer;
};


const submitquiz = () =>{
    const data = questions[index];
    const ans = getans();
    console.log(data.correct);
    console.log(ans);

    if(ans === data.correct)
    {
        right++;
    }
    else 
    {
        wrong++;
    }

    index++;
    loadquestion();
    return;
}


const reset = () =>{
    optioninputs.forEach(
        (input)=>{
            input.checked = false;
        }
    )
}

const endquiz = () =>{
    document.getElementById("box").innerHTML = `
    <h1>Thank you for playing the quiz</h1>
    <h2> Your score is ${right} / ${total} </h2>
    `
}
loadquestion();