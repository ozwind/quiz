let score = 0;
let incorrect = [];
let currentQuestion = 0;
var quizData = [];

function init() {
    reset();

    for (i in questions) {    // indicate correct answer
        questions[i].answer = questions[i].options[0];
    }

    setQuestions();

    $("#selectQuiz").change(function(evt) {
        setQuestions();
        $("*").blur(); // remove keyboard focus
    });

    $("#start").on("click", startQuiz);
    $("#cancel").on("click", reset);
    $("#continue").on("click", reset);
    $("#next").on("click", getNextQuestion);
}

function reset() {
    currentQuestion = 0;
    score = 0;
    incorrect = [];
    $("#quiz").hide();
    $("#results").hide();
    $("#select").show();
}

function setQuestions() {
    var limit = $('#questionLimit');
    limit.empty();

    var quiz = $('#selectQuiz').val();
    quizData = [];

    for (i in questions) {
        var question = questions[i];
        if (quiz === 'all') {      // All
            quizData.push(question);
        }
        else if (quiz === 'worldCapitals' && question.capitalByCountry) {
            quizData.push(question);
        }
        else if (quiz === 'stateCapitals' && question.capitalByState) {
            quizData.push(question);
        }
        else if (quiz === 'usCities' && question.stateByCity) {
            quizData.push(question);
        }
        else if (quiz === 'worldFlags' && (question.countryByFlag || question.flagByCountry)) {
            quizData.push(question);
        }
        else if (quiz === 'movies' && (question.movieByPhrase || question.movieByDirector)) {
            quizData.push(question);
        }
    }

    for (var i = 1; i <= quizData.length; i++) {
        if (i < 6 || (i % 10 == 0 && i < 50) || (i % 50 == 0) || i == quizData.length) {
            var option = $('<option></option>');
            option.attr('value', i);
            option.text(i);
            limit.append(option);
        }
    }

    if (quizData.length < 10) {
        limit.val(quizData.length);
    }
    else {
        limit.val(10);
    }

    incorrect = [];
    document.title = $("#selectQuiz").find(":selected").text();
}

function startQuiz() {
    shuffleArray(quizData);
    showQuestion();
}

function toFlagUrl(name) {
    return "https://flagpedia.net/data/flags/h80/" + name + ".webp";
}

function getLimit() {
    return Number($('#questionLimit').val());
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function showQuestion() {
    var question = quizData[currentQuestion];
    var text;
    var $image = $('#image');

    $image.removeAttr('src');

    if (question.capitalByCountry) {
        text = 'What is the capital of ' + question.capitalByCountry + '?';
    }
    else if (question.capitalByState) {
        text = 'What is the capital of ' + question.capitalByState + '?';
    }
    else if (question.stateByCity) {
        text = question.stateByCity + ' is in which state?';
    }
    else if (question.countryByFlag) {
        text = 'The flag is from which country?';
        $image.attr('src', toFlagUrl(question.countryByFlag));
    }
    else if (question.flagByCountry) {
        text = 'Which flag is from ' + question.flagByCountry + '?';
    }
    else if (question.movieByPhrase) {
        text = 'Which movie is known for the phrase: "' + question.movieByPhrase + '"?';
    }
    else if (question.movieByDirector) {
        text = 'Which movie was directed by "' + question.movieByDirector + '"?';
    }
    
    $("#select").hide();
    $("#results").hide();
    $("#question").text((currentQuestion + 1) + ' of ' + getLimit() + ') ' + text);
    $("#options div").remove();
    
    shuffleArray(question.options);

    for (var i = 0; i < question.options.length; i++) {
        var div = $("<div></div>");
        var radio = $("<input type='radio' name='option' value='" + i + "'>");
        var item = question.flagByCountry
            ? $("<img>").attr("src", toFlagUrl(question.options[i]))
            : $("<label></label>").text(question.options[i]);

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
    const question = quizData[currentQuestion];

    if (selectedOption === undefined) {
        alert("Please select an option.");
        return;
    }

    const choice = question.options[Number(selectedOption)];

    if (choice === question.answer) {
        score++;
    }
    else {
        var item = {};
        if (question.capitalByCountry) {
            item.info = choice + " is not the capital of " + question.capitalByCountry;
        }
        else if (question.capitalByState) {
            item.info = choice + " is not the capital of " + question.capitalByState;
        }
        else if (question.stateByCity) {
            item.info = question.stateByCity + " is not in the state of " + choice;
        }
        else if (question.countryByFlag) {
            item.info = "is not the flag of " + choice;
            item.flag = toFlagUrl(question.countryByFlag);
        }
        else if (question.flagByCountry) {
            item.info = "is not the flag of " + question.flagByCountry;
            item.flag = toFlagUrl(choice);
        }
        else if (question.movieByPhrase) {
            item.info = "The movie " + choice + " is not known by the phrase: \""
                + question.movieByPhrase + "\"";
        }
        else if (question.movieByDirector) {
            item.info = "The movie " + choice + " was not directed by " + question.movieByDirector;
        }
        incorrect.push(item);
    }

    resetOptions();
    currentQuestion++;

    if (currentQuestion === getLimit()) {
        showResults();
    } else {
        showQuestion(currentQuestion);
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
            var info = $("<div></div>").text(item.info);
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