var index = 0;
var time = 100;
var timer;
var score = 0;

function render() {
    $('.first').hide();
    $('#second').removeClass('invisible');
    time = questions.length * 20
    timer = setInterval(clockTick, 1000);
    $("#time").html("Your remaining time is: " + time);
}

function clockTick() {
    time--;
    $("#time").html("Your remaining time is: " + time)
    if (time <= 0) {
        end();
    }
}

function setQuestion() {
    $("#questionDiv").html(questions[index].Question);
    $("#A1").html(questions[index].Answers.A);
    $("#A2").html(questions[index].Answers.B);
    $("#A3").html(questions[index].Answers.C);
    $("#A4").html(questions[index].Answers.D);
}

function checking() {
    if ($("input:radio[id=" + questions[index].correct + "]:checked").val() == "on") {
        score++;
        $('#correctness').html("That was correct!")
        $('#scoreDiv').html("Your score is now: " + score)
    } else {
        $('#correctness').html("Oh no! That was incorrect!")
        $('#scoreDiv').html("Your score is now: " + score)
        time -= 20;
    }
}

function end() {
    $('#second').addClass('invisible')
    $('#third').removeClass('invisible')
    $('#resultsDiv').html("Congrats! Your final score is: " + score)
}

$('#start').click(function () {
    render();
    setQuestion();
})

$('#nextQuestion').click(function () {
    if (($("input:radio[name='choices']:checked").val() !== "on")) {
        $("#errorDiv").html("Please select an answer");
        return;
    }
    else { $("#errorDiv").html("") }
    checking();
    if (time <= 0 || index == 4) {
        end();
        return;
    }
    index++;
    setQuestion();
})

$('#tryAgain').click(function () {
    index = 0;
    score = 0;
    $('#third').addClass('invisible');
    $('#correctness').html('')
    $('#scoreDiv').html('')
    render();
    setQuestion();
})