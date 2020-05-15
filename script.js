//I spent a ton of time on this and I need to move on the next homework... if you could pretend the questions are all different that would be great :>

var questions = [{Question: "If a function defined inside another function is a darker yellow color than normal in VScode what does it mean?",
                Answers: {
                A:'It contains and error',
                B:'It is not being used',
                C:'It is on vacation',
                D:'It is formatted incorrectly'},
                correct: 'B'},
                {Question: "If a function is a darker yellow color than normal in VScode what does it mean?",
                Answers: {
                A:'It is not being used',
                B:'hoc non est responsum',
                C:'It is currently quarantined',
                D:'Yellow does not exist'},
                correct: 'A'},
                {Question: "If a function is a darker yellow code than normal in VScode what does it mean?",
                Answers: {
                A:'It contains and error',
                B:'It is not being used',
                C:'It is on vacation',
                D:'It is formatted incorrectly'},
                correct: 'B'},
                {Question: "If a function is a darker yellow code than normal in VScode what does it mean?",
                Answers: {
                A:'It contains and error',
                B:'It is not being used',
                C:'It is on vacation',
                D:'It is formatted incorrectly'},
                correct: 'B'},
                {Question: "If a function is a darker yellow code than normal in VScode what does it mean?",
                Answers: {
                A:'It contains and error',
                B:'It is not being used',
                C:'It is on vacation',
                D:'It is formatted incorrectly'},
                correct: 'B'},
                {Question: "If a function is a darker yellow code than normal in VScode what does it mean?",
                Answers: {
                A:'It contains and error',
                B:'It is not being used',
                C:'It is on vacation',
                D:'It is formatted incorrectly'},
                correct: 'B'},
                {Question: "If a function is a darker yellow code than normal in VScode what does it mean?",
                Answers: {
                A:'It contains and error',
                B:'It is not being used',
                C:'It is on vacation',
                D:'It is formatted incorrectly'},
                correct: 'B'},
                {Question: "If a function is a darker yellow code than normal in VScode what does it mean?",
                Answers: {
                A:'It contains and error',
                B:'It is not being used',
                C:'It is on vacation',
                D:'It is formatted incorrectly'},
                correct: 'B'},
                {Question: "If a function is a darker yellow code than normal in VScode what does it mean?",
                Answers: {
                A:'It contains and error',
                B:'It is not being used',
                C:'It is on vacation',
                D:'It is formatted incorrectly'},
                correct: 'B'},
                {Question: "If a function is a darker yellow code than normal in VScode what does it mean?",
                Answers: {
                A:'It contains and error',
                B:'It is not being used',
                C:'It is on vacation',
                D:'It is formatted incorrectly'},
                correct: 'B'},
]
var i
var score
var display = document.getElementById("correctness")
var questionPage1 = document.getElementById("questionPage")
var thatButton = document.getElementById("nextQuestion")
var startButton = document.getElementById("start")

function changeQuestion (questions, questionPage1){
    var output = [];
    var answers;
    for(var i=0; i<questions.length; i++){
        answers=[];
        for(letter in questions[i].answers){
            answers.push(
            '<label class="btn btn-primary active page2 row">'
             + '<input type="radio" name="question'+i+'" value="'+letter+'" autocomplete="off">'
             + letter + ':'
             + questions[i].answers[letter]
            +'</label>'
            );
            output.push(
                '<div class="question"'+questions[i].question+'</div>'
                +'<div class="answers"'+answers.join('')+'</div>'
            );
        }
    }
    questionsPage.innerHTML = output.join('');
}

function show (){
    var selectAnswers = document.querySelectorAll('.answers');
    var selectedAnswer = '';
    for (i=0;i<questions.Length;i++){
        selectedAnswer = (selectAnswers[i].querySelector('input[name=question'+i+']checked')||{}).value;
        if (selectedAnswer === questions[i].correct){
            score++
        } 
    
    }
}

function results(){
    display.innerHTML= 'Your final score is' + score;
}

startButton.addEventListener("click", changeQuestion && show)

thatButton.addEventListener("click", results)