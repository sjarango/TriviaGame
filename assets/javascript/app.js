
var triviaQuestions = [
    {
        question: 'In the anime series "Full Metal Alchemist", what do Alchemists consider the greatest taboo?',
        answers: [
            "Creating a Philosopher's Stone",
            "Creating a Homunculus",
            "Human Transmutation",
            "Calling Edward Short"
        ],
        correctAnswer: '2'
    },
    {
        question: 'In "One Piece", what does "the Pirate King" mean to the captain of the Straw Hat Pirates?',
        answers: [
            "Being the Strongest",
            "Freedom",
            "Can Eat the Most Meat",
            "Being Invincible"
        ],
        correctAnswer: '1'
    },
    {
        question: 'What is the name of the main character of the anime "One-Punch Man"?',
        answers: [
            "Genos",
            "One Punch Man",
            "Caped Baldy",
            "Saitama"
        ],
        correctAnswer: '3'
    }
    ,
    {
        question: 'Who created the animated movie "Spirited Away" (2001)?',
        answers: [
            "Hayao Miyazaki",
            "Mr. Ghibli",
            "Akira Toriyama",
            "Eiichiro Oda"
        ],
        correctAnswer: '0'
    },
    {
        question: 'Who is the main character with yellow hair in the anime Naruto?',
        answers: [
            "Naruto",
            "Sasuke",
            "Sakura",
            "Kakashi"
        ],
        correctAnswer: '0'
    },
    {
        question: 'What is the last name of Edward and Alphonse in the Fullmetal Alchemist series.',
        answers: [
            "Uchiha",
            "Elric",
            "Mustang",
            "Armstrong"
        ],
        correctAnswer: '1'
    },
    {
        question: 'What is the name of the corgi in Cowboy Bebop?',
        answers: [
            "Rex",
            "Guts",
            "Einstein/Ein",
            "Pakkun"
        ],
        correctAnswer: '2'
    },
    {
        question: 'In the "Dragon Ball" franchise, what is the name of Goku\'s brother?',
        answers: [
            "Piccolo",
            "Vegeta",
            "Krillin",
            "Raditz"
        ],
        correctAnswer: '3'
    },
    {
        question: 'In "Hunter x Hunter", what are members in Killua\'s family known for being?',
        answers: [
            "Chefs",
            "Assassins",
            "Doctors",
            "Gangsters"
        ],
        correctAnswer: '1'
    },
    {
        question: 'In "One Piece" who is the mountain bandit that is responsible for taking care of Ace and Luffy when they were children?',
        answers: [
            "Alvida",
            "Curly Dadan",
            "Keimi",
            "Charlotte Linlin"
        ],
        correctAnswer: '1'
    }
];
//console.log(triviaQuestions[0]);

var gifNames = ["image0", "image1", "image2", "image3", "image4", "image5", "image6", "image7", "image8", "image9"];

var userSelect;
var currentQuestion = 0;
var time, seconds; 
var correctAnswer, incorrectAnswer = 0;
var answered, unanswered;

$("#start-button").on("click", function(){
    $(this).hide();
    initializeGame();
});

$("#new-game-button").on("click", function(){
    $(this).hide();
    initializeGame();
});


function initializeGame() {

    $("#current-question-num, .question, .answers, #result-message, #correct-answer, #gif").empty();
    currentQuestion = 0;
    correctAnswer = 0;
    incorrectAnswer = 0;
    unanswered = 0;
    newQuestion();

}

function startTimer() {
    seconds = 15;
    $("#time-left").html("<h3>Time Remaining: " + seconds + "</h3>");
    answered = true;
    // callback to showTimer() for timer to go down
    time = setInterval(showTimer, 1000);
}

function showTimer() {
    seconds--;
    $("#time-left").html("<h3>Time Remaining: " + seconds + "</h3>");
    if(seconds < 1){
        clearInterval(time);
        answered = false;
        
    }
}

function newQuestion () {
    // reset what is on screen with new question
    $("#result-message, #correct-answer, #gif").empty();
    answered = true;

    $('#current-question-num').html("Question #"+ (currentQuestion+1) + "/" + triviaQuestions.length);
    $('.question').html("<h2>" + triviaQuestions[currentQuestion].question + "</h2>");

    for(var i=0; i < triviaQuestions[currentQuestion].answers.length; i++){
        var choices = $("<div>");
        choices.addClass("thisChoice");
        choices.attr("data-choice", i);
        choices.text(triviaQuestions[currentQuestion].answers[i]);
        $(".answers").append(choices);
    }
    startTimer();

    $(".thisChoice").on("click", function(){
        userSelect = $(this).data('index');
        clearInterval(time);

        
    }); 
}

function resultsPage() {

}

function endResults() {
    
}

