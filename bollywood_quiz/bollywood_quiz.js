const questions = [{
    question: "Which Bollywood actress is known for her iconic red saree in the movie 'Chandni'?",
    a: "Madhuri Dixit",
    b: "Sridevi",
    c: "Juhi Chawla",
    d: "Aishwarya Rai",
    correct: "b",
},
{
    question: "What is 'Lehenga' commonly worn for in Bollywood?",
    a: "Weddings",
    b: "Award shows",
    c: "Movie premieres",
    d: "Beach vacations",
    correct: "a",
},
{
    question: "Who is the designer behind many of Aishwarya Rai's iconic outfits?",
    a: "Manish Malhotra",
    b: "Abu Jani-Sandeep Khosla",
    c: "Sabyasachi Mukherjee",
    d: "Tarun Tahiliani",
    correct: "b",
},
{
    question: "Which actor wore the iconic black leather jacket in the movie 'Dil Chahta Hai'?",
    a: "Aamir Khan",
    b: "Saif Ali Khan",
    c: "Akshaye Khanna",
    d: "Shah Rukh Khan",
    correct: "b",

},
{
    question: "Which designer created Deepika Padukone's outfit for her wedding reception?",
    a: "Anamika Khanna",
    b: "Ritu Kumar",
    c: "Falguni Shane Peacock",
    d: "Sabyasachi Mukherjee",
    correct: "d",
},
{
    question: "What fabric is commonly used in Bollywood for traditional sherwanis?",
    a: "Silk",
    b: "Velvet",
    c: "Cotton",
    d: "Brocade",
    correct: "d",
},
{
    question: "Which Bollywood actress is known for popularizing the 'choli and lehenga' combination?",
    a: "Kareena Kapoor Khan",
    b: "Priyanka Chopra Jonas",
    c: "Katrina Kaif",
    d: "Madhuri Dixit",
    correct: "d",
},
{
    question: "What is a 'Jodhpuri suit' traditionally worn for in Bollywood?",
    a: "Action scenes",
    b: "Wedding sequences",
    c: "Comedy roles",
    d: "Period dramas",
    correct: "b",
},
{
    question: "Which Bollywood fashion trend became popular after the movie 'Dilwale Dulhania Le Jayenge'?",
    a: "Crop tops and skirts",
    b: "Patiala salwar suits",
    c: "Bell-bottom pants",
    d: "Anarkali dresses",
    correct: "b",
},
{
    question: "Who wore the stunning blue saree in the movie 'Devdas'?",
    a: "Aishwarya Rai",
    b: "Madhuri Dixit",
    c: "Kareena Kapoor Khan",
    d: "Rani Mukerji",
    correct: "a",

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
    <h2>Thank you for playing the quiz</h2>
    <h2> Your score is ${right} / ${total} </h2>
    `
}
loadquestion();