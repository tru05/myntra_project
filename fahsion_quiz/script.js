const questions = [{
    question: "What type of outfit do you prefer for a casual day out?",
    a: { text: "Comfortable jeans and a t-shirt", style: "Casual" },
    b: { text: "Smart blazer and trousers", style: "Formal" },
    c: { text: "Simple and plain outfit", style: "Minimalist" },
    d: { text: "Hoodie and sneakers", style: "Streetwear" },
},
{
    question: "How do you like to accessorize your look?",
    a: { text: "Casual wristband", style: "Casual" },
    b: { text: "Elegant watch and tie", style: "Formal" },
    c: { text: "Minimal jewelry", style: "Minimalist" },
    d: { text: "Cool cap and chain", style: "Streetwear" },
},
{
    question: "What's your preferred type of footwear?",
    a: { text: "Comfortable sneakers", style: "Casual" },
    b: { text: "Formal leather shoes", style: "Formal" },
    c: { text: "Simple flats", style: "Minimalist" },
    d: { text: "Trendy high-top sneakers", style: "Streetwear" },
},
{
    question: "What kind of bag do you usually carry?",
    a: { text: "Functional backpack", style: "Casual" },
    b: { text: "Sleek briefcase", style: "Formal" },
    c: { text: "Minimalist tote bag", style: "Minimalist" },
    d: { text: "Street-style crossbody bag", style: "Streetwear" },
},
{
    question: "How would you describe your overall fashion style?",
    a: { text: "Relaxed and comfortable", style: "Casual" },
    b: { text: "Sharp and professional", style: "Formal" },
    c: { text: "Simple and understated", style: "Minimalist" },
    d: { text: "Trendy and edgy", style: "Streetwear" },
},
{
    question: "What's your go-to outfit for a friend's party?",
    a: { text: "Jeans and a fun top", style: "Casual" },
    b: { text: "Stylish formal wear", style: "Formal" },
    c: { text: "Monochrome outfit", style: "Minimalist" },
    d: { text: "Graphic tee and ripped jeans", style: "Streetwear" },
},
{
    question: "Which type of kurta do you prefer to wear?",
    a: { text: "Simple cotton kurta", style: "Casual" },
    b: { text: "Silk kurta with intricate designs", style: "Formal" },
    c: { text: "Plain linen kurta", style: "Minimalist" },
    d: { text: "Kurta with bold patterns", style: "Streetwear" },
},
{
    question: "What kind of fabric do you usually prefer?",
    a: { text: "Cotton", style: "Casual" },
    b: { text: "Silk", style: "Formal" },
    c: { text: "Linen", style: "Minimalist" },
    d: { text: "Denim", style: "Streetwear" },
},
{
    question: "How do you prefer to style your hair for everyday look?",
    a: { text: "Loose and natural", style: "Casual" },
    b: { text: "Neatly styled and set", style: "Formal" },
    c: { text: "Sleek and simple", style: "Minimalist" },
    d: { text: "Messy bun or ponytail", style: "Streetwear" },
},
{
    question: "What type of outerwear do you usually go for?",
    a: { text: "Denim jacket", style: "Casual" },
    b: { text: "Tailored coat", style: "Formal" },
    c: { text: "Minimalist trench coat", style: "Minimalist" },
    d: { text: "Oversized hoodie", style: "Streetwear" },
}];

let index = 0;
let questionBox = document.getElementById("quebox");
let optioninputs = document.querySelectorAll(".ans");

const loadquestion = () => {
    if (index === total) {
        return endquiz();
    }
    reset();
    const data = questions[index];
    questionBox.innerText = data.question;

    optioninputs[0].nextElementSibling.innerText = "A" + ' \u00A0 ' + '\u00A0 ' + data.a.text;
    optioninputs[1].nextElementSibling.innerText = "B" + ' \u00A0 ' + '\u00A0 ' + data.b.text;
    optioninputs[2].nextElementSibling.innerText = "C" + ' \u00A0 ' + '\u00A0 ' + data.c.text;
    optioninputs[3].nextElementSibling.innerText = "D" + ' \u00A0 ' + '\u00A0 ' + data.d.text;
};

let total = questions.length;
let styleCount = {
    "Casual": 0,
    "Formal": 0,
    "Minimalist": 0,
    "Streetwear": 0
};

const getans = () => {
    let selectedAnswer = null;
    optioninputs.forEach((input) => {
        if (input.checked) {
            selectedAnswer = input.value;
        }
    });
    return selectedAnswer;
};

const submitquiz = () => {
    const data = questions[index];
    const ans = getans();

    if (ans) {
        styleCount[data[ans].style]++;
    }

    index++;
    loadquestion();
    return;
};

const reset = () => {
    optioninputs.forEach((input) => {
        input.checked = false;
    });
};

const endquiz = () => {
    let maxScore = Math.max(...Object.values(styleCount));
    let styleMessage = [];

    for (let style in styleCount) {
        if (styleCount[style] === maxScore) {
            styleMessage.push(style);
        }

        console.log(styleCount[style]);
    }

    let ans;
    if (styleMessage.length > 1) {
        ans = "Your style types are : ";

        for (const key in styleMessage) {
            ans += styleMessage[key] + " ";
            if (key != styleMessage.length - 1) {
                ans += "and "
            }
        }

    }
    else {
        ans = "Your style type is " + styleMessage[0];
    }
    document.getElementById("box").innerHTML = `
        <h1>Thank you for playing the quiz</h1>
        <h1>${ans}</h1>
    `;
};

loadquestion();
