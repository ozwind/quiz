let currentQuestion = 0;
let score = 0;
var quizData = quizes[0];
var incorrect = [];

function init() {
    $("#next").on("click", getNextQuestion);
    $("#cancel").on("click", reset);
    $("#continue").on("click", reset);
    $("#start").on("click", startQuiz);
    initData(quizWorldCapital);
    initData(quizCapital);
    initData(quizState);
    initData(quizCountryGivenFlag);
    initData(quizFlagOfCountry);
    reset();
    changeSelectQuiz();

    $("#selectQuiz").change(function(evt) {
        quizData = quizes[Number(evt.target.value)];
        changeSelectQuiz();
    });
}

function initData(data) {
    for (i in data) {
        if (data[i].flags) {
            data[i].options = [];
            for (j in data[i].flags) {
                data[i].options.push(toFlagUrl(data[i].flags[j]));
            }                
        }

        data[i].answer = data[i].options[0];

        if (data[i].flag) {
            data[i].image = toFlagUrl(data[i].flag);
        }
    }
}

function changeSelectQuiz() {
    var limit = $('#questionLimit');
    limit.empty();

    for (var i = 1; i <= quizData.length; i++) {
        var option = $('<option></option>');
        option.attr('value', i);
        option.text(i);
        limit.append(option);
    }

    limit.val(quizData.length);
    incorrect = [];
    document.title = $("#selectQuiz").find(":selected").text();
}

function getLimit() {
    return Number($('#questionLimit').val());
}

function toFlagUrl(name) {
    return "https://flagpedia.net/data/flags/h80/" + name + ".webp";
}

function showQuestion(questionIndex) {
    var index = questionIndex ? questionIndex : currentQuestion;
    const qData = quizData[index];
    var question;
    if (quizData == quizCapital || quizData == quizWorldCapital) {
        question = 'What is the capital of ' + qData.question + '?';
    }
    else if (quizData == quizState) {
        question = qData.question + ' is in which state?';
    }
    else if (quizData == quizCountryGivenFlag) {
        question = 'The flag is from which country?'
    }
    else if (quizData == quizFlagOfCountry) {
        question = 'Which flag is from ' + qData.question + '?';
    }
    
    var image = $('#image');
    if (qData.image) {
        image.attr('src', qData.image);
    }
    else {
        image.removeAttr('src');
    }
    $("#select").hide();
    $("#results").hide();
    $("#question").text((index + 1) + ' of ' + getLimit() + ') ' + question);
    $("#options div").remove();

    shuffleArray(qData.options);

    for (var i = 0; i < qData.options.length; i++) {
        var div = $("<div></div>");
        var radio = $("<input type='radio' name='option' value='" + i + "'>");
        var item = quizData == quizFlagOfCountry
                 ? $("<img>").attr("src", qData.options[i])
                 : $("<label></label>").text(qData.options[i]);
        div.append(radio, item);
        $("#options").append(div);
    }

    $("#quiz").show();
}

function resetOptions() {
    $('input[name="option"]').prop("checked", false);
}

function getNextQuestion() {
    const selectedOption = $('input[name="option"]:checked').val();
    const qData = quizData[currentQuestion];

    if (selectedOption === undefined) {
        alert("Please select an option.");
        return;
    }
    var answer = qData.options[Number(selectedOption)];
    if (answer === qData.answer) {
        score++;
    }
    else {
        //alert("Correct answer is " + qData.answer);
        var item = {};
        if (quizData == quizCapital || quizData == quizWorldCapital) {
            item.info = answer + " is not the capital of " + qData.question;
        }
        else if (quizData == quizState) {
            item.info = qData.question + " is not in the state of " + answer;
        }
        else if (quizData == quizCountryGivenFlag) {
            item.info = "is not the flag of " + answer;
            item.flag = toFlagUrl(qData.flag);
        }
        else if (quizData == quizFlagOfCountry) {
            item.info = "is not the flag of " + qData.question;
            item.flag = answer;
        }
        if (Object.keys(item).length > 0) {
            incorrect.push(item);
        }
    }
    resetOptions();
    currentQuestion++;

    if (currentQuestion === getLimit()) {
        showResults();
    } else {
        showQuestion(currentQuestion);
    }
}

function reset() {
    currentQuestion = 0;
    score = 0;
    incorrect = [];
    $("#quiz").hide();
    $("#results").hide();
    $("#select").show();
}

function startQuiz() {
    var index = $('#selectQuiz').val();
    quizData = quizes[index];
    shuffleArray(quizData);
    showQuestion();
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function showResults() {
    var limit = getLimit();
    $("#quiz").hide();
    var result = score === limit
               ? `Perfect score. All ${limit} correct.`
               : `${score} out of ${limit} questions answered correctly.`;

    var incorrect$ = $('#incorrect');
    incorrect$.empty();
    for (var i in incorrect) {
        var item = incorrect[i];
        var flag;
         if (item.flag) {
            flag = $("<img>").attr("src", item.flag);
        }
        if (item.info) {
            var elem = $("<div></div>");
            var info = $("<p></p>").text(item.info);
            if (flag) {
                elem.append(flag);
            }
            elem.append(info);
            incorrect$.append(elem);
        }
    }
    $("#score").text(result).show();
    $("#results").show();
}