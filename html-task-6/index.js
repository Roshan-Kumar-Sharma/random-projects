// this is the object containing all the question and answers
const questionsOptionsObj = {
    questions: [
        {
            question: "What is the scientific name of a butterfly?",
            options: ["Apis", "Coleoptera", "Formicidae", "Rhopalocera"],
            correctAnswer: 3,
        },
        {
            question: "How hot is the surface of the sun?",
            options: ["1,233 K", "5,778 K", "12,130 K", "101,300 K"],
            correctAnswer: 1,
        },
        {
            question: "Who are the actors in The Internship?",
            options: [
                "Ben Stiller, Jonah Hill",
                "Courteney Cox, Matt LeBlanc",
                "Kaley Cuoco, Jim Parsons",
                "Vince Vaughn, Owen Wilson",
            ],
            correctAnswer: 3,
        },
        {
            question: "What is the capital of Spain?",
            options: ["Berlin", "Buenos Aires", "Madrid", "San Juan"],
            correctAnswer: 2,
        },
        {
            question:
                "What are the school colors of the University of Texas at Austin?",
            options: [
                "Black, Red",
                "Blue, Orange",
                "White, Burnt Orange",
                "White, Old gold, Gold",
            ],
            correctAnswer: 2,
        },
        {
            question: "What is 70 degrees Fahrenheit in Celsius?",
            options: ["18.8889", "20", "21.1111", "158"],
            correctAnswer: 2,
        },
        {
            question: "When was Mahatma Gandhi born?",
            options: [
                "October 2, 1869",
                "December 15, 1872",
                "July 18, 1918",
                "January 15, 1929",
            ],
            correctAnswer: 0,
        },
        {
            question: "How far is the moon from Earth?",
            options: [
                "7,918 miles (12,742 km)",
                "86,881 miles (139,822 km)",
                "238,400 miles (384,400 km)",
                "35,980,000 miles (57,910,000 km)",
            ],
            correctAnswer: 2,
        },
        {
            question: "What is 65 times 52?",
            options: ["117", "3120", "3380", "3520"],
            correctAnswer: 2,
        },
        {
            question: "How tall is Mount Everest?",
            options: [
                "6,683 ft (2,037 m)",
                "7,918 ft (2,413 m)",
                "19,341 ft (5,895 m)",
                "29,029 ft (8,847 m)",
            ],
            correctAnswer: 3,
        },
        {
            question: "When did The Avengers come out?",
            options: [
                "May 2, 2008",
                "May 4, 2012",
                "May 3, 2013",
                "April 4, 2014",
            ],
            correctAnswer: 1,
        },
        {
            question: "What is 48,879 in hexidecimal?",
            options: ["0x18C1", "0xBEEF", "0xDEAD", "0x12D591"],
            correctAnswer: 1,
        },
        {
            question:
                "Grand Central Terminal, Park Avenue, New York is the world's",
            options: [
                "largest railway station",
                "highest railway station",
                "longest railway station",
                "None of the above",
            ],
            correctAnwer: 1,
        },
        {
            question: "Entomology is the science that studies",
            options: [
                "Behavior of human beings",
                "Insects",
                "The origin and history of technical and scientific terms",
                "The formation of rocks",
            ],
            correctAnwer: 2,
        },
        {
            question: "Who invented the BALLPOINT PEN?",
            options: [
                "Biro Brothers",
                "Waterman Brothers",
                "Bicc Brothers",
                "Write Brothers",
            ],
            correctAnwer: 1,
        },
        {
            question: "What J. B. Dunlop invented?",
            options: [
                "Pneumatic rubber tire",
                "Automobile wheel rim",
                "Rubber boot",
                "Model airplanes",
            ],
            correctAnwer: 1,
        },
        {
            question: "When was barb wire patented?",
            options: ["1874", "1840", "1895", "1900"],
            correctAnwer: 1,
        },
    ],
};

// indicates number of questions
let numberOfQuestions = 10;

// indicates current question index
let currentQuestionIndex = 0;

// it will hold the set of questions for current quiz session  
let questionsForCurrentQuiz = new Set()

// it will hold the response or answers given by user
const enteredAnswers = []

// getting all the required dom elements
const answersCheckLine = document.getElementById('answers-check-line')
const questionBox = document.getElementById('question')
const answersBox = document.getElementById('options')
const myForm = document.getElementById('myForm')
const quiz = document.getElementById('quiz');
const result = document.getElementById('result');
const helpMenu = document.getElementById("help-menu");
const response = document.getElementById("response");

// this function will save response given by the user for each question
function enterAnswer(e){
    e.preventDefault();
    
    response.classList.remove('hide')

    const formData = new FormData(myForm);
    let option = formData.get("option");
    
    let questionNum = questionsForCurrentQuiz[currentQuestionIndex];
    let correctAnswerIndex = questionsOptionsObj.questions[questionNum].correctAnswer
    let correctAnswer = questionsOptionsObj.questions[questionNum].options[correctAnswerIndex];

    enteredAnswers.push({
        option,
        correctAnswer,
        questionNum 
    })
}


// this function will display the result of the quiz 
function endQuiz(){
    quiz.style.display = 'none';
    result.style.display = "block";

    let totalAnswered = 0;
    let correctAnswer = 0
    let wrongAnswer = 0
    let unanswered = 0
    let questionNum
    let answer

    const IDs = [
        {
            id: "total",
            color: "black",
            
        },
        {
            id: "correct",
            color: "green",
        },
        {
            id: "wrong",
            color: "red",
        },
        {
            id: "unanswered",
            color: "gray",
        },
    ]

    totalAnswered = enteredAnswers.length;

    if(totalAnswered){
        enteredAnswers.forEach((answer, index) => {
            if(!answer.option){
                unanswered++
            }
            else if(answer.option === answer.correctAnswer){
                correctAnswer++;
            }
            else{
                wrongAnswer++;
            }
        })

        unanswered = numberOfQuestions - (correctAnswer + wrongAnswer + unanswered);
    }
    
    document.getElementById('total').innerHTML += `<span">${totalAnswered}</span>`

    document.getElementById('correct').innerHTML += `<span style="color:green">${correctAnswer}</span>`

    document.getElementById('wrong').innerHTML += `<span style="color:red">${wrongAnswer}</span>`

    document.getElementById('unanswered').innerHTML += `<span style="color:gray">${unanswered}</span>`
}

// this function will take user to the next question
function nextQuestion(e){
    e.preventDefault();
    currentQuestionIndex++;
    if(currentQuestionIndex >= numberOfQuestions){
        if(currentQuestionIndex === numberOfQuestions){
            answersCheckLine.children[
                currentQuestionIndex - 1
            ].style.background = "red";
        }
        endQuiz()
    }else{
        response.classList.add('hide')
        answersCheckLine.children[currentQuestionIndex-1].style.background = "red";

        redenderQuestionAnswers(currentQuestionIndex)
    }
}

/*
this function create the boxes above the question which will coloured by red if the question is answered, green means the displayed question is the current question and gray means the question to be displayed in future
*/
function createoptionsCheckLine(){
    let line;
    let element;

    for(let i = 0; i < numberOfQuestions; i++){
        element = `<div class="line"></div>`
        line = HTMLdom(element);
        answersCheckLine.append(line);
    }
}

// this function renders the current question and its options on the screen
function redenderQuestionAnswers(currentQuestion){
    answersCheckLine.children[currentQuestionIndex].style.background = "green";

    let questionIndex = questionsForCurrentQuiz[currentQuestion]
    let question = questionsOptionsObj.questions[questionIndex].question;
    questionBox.innerText = question;

    let numOfOption = questionsOptionsObj.questions[questionIndex].options.length;
    let option;
    let answer;
    let char = ['A', 'B', 'C', 'D'];

    answersBox.innerText = "";

    for(let i=0; i<numOfOption; i++){
        answer = questionsOptionsObj.questions[questionIndex].options[i];
        option = `<div>
                    <input type="radio" id="option${i}" name="option" value="${answer}">
                    <label for="option${i}">${char[i]}) ${answer}</label>
                  <div>`;
        option = HTMLdom(option)
        answersBox.append(option);
    }
}

// for each time the quiz is played this function will generate random uniques set of questions
function getTenRandomUniqueQuestions(){
    let randomIndex;
    for (let i = 0; i < numberOfQuestions; i++) {
        randomIndex = Math.floor(Math.random() * 17);
        if (!questionsForCurrentQuiz.has(randomIndex)) {
            questionsForCurrentQuiz.add(randomIndex);
        } else {
            i--;
        }
    }
    questionsForCurrentQuiz = Array.from(questionsForCurrentQuiz)
}

// this function restarts the quiz
function restart(e){
    e.preventDefault()
    location.reload()
}

// this function will display the help menu when clicked
function help(e){
    e.preventDefault()
    let helpMenu = document.getElementById("help-menu");
    helpMenu.classList.toggle('hide');
}

// this is the function which runs when the page is rendered
window.onload = () => {
    quiz.style.display = "block";
    result.style.display = "none";
    helpMenu.classList.toggle('hide');
    response.classList.toggle('hide');
    
    createoptionsCheckLine()

    getTenRandomUniqueQuestions()

    redenderQuestionAnswers(currentQuestionIndex)
}

// this function is used to creat html dom elements
function HTMLdom(element){
    let template = document.createElement('template');
    template.innerHTML = element;
    return template.content.firstChild;
}

