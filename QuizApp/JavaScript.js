

var intros =[
    {
        intro: "Üdv a javascript kurzuson! <br> Ebben a feladatgyűjteményben végigvezetünk Téged a javascript alapjain. A lecke egy bevezető modullal kezdődik, amelyben azt az elméleti tudást szerezheted meg, amely a tesztfeladatok megoldásához nyújt majd segítséget. Az alábbi gombra kattintva tudsz előre haladni a leckék között."
    },
    {
        intro: "A tesztkérdések során a válaszokat egy-egy szóban kell megfogalmazni. Amennyiben a válaszod helyes, úgy továbbléphetsz a következő kérdésre. Ha elsőre nem sikerül jól megválaszolnod a kérdést, akkor segítségül tippeket adunk Neked. :)"
    },
    {
        intro: "A JavaScript egyike a legelterjedtebb programozási nyelveknek. <br> A továbbiakban a JS rövidítéseként fogunk rá hivatkozni. A JS a weboldaltartalom viselkedésének alakításáért, a webtartalom manipulálásáért felelős."
    },
    {
        intro: 'A JS-ben változókat használunk értékek tárolására. Új változót a "var" kulcsszóval tudunk létrehozni. Erre példa a következő: <br> var elsoValtozom; <br>A változónk neve elsoValtozom. Miután deklaráltunk egy változót értéket adhatunk neki, így: <br> elsoValtozom = 10; <br>Ebben az esetben az elsoValtozom nevű változónk a 10 értéket tárolja.'
    },
    {
        intro: "A JS az úgynevezett gyengén típusos nyelvek közé tartozik. <br>Több programozási nyelvben, ha egy változót deklarálni szeretnénk a változónk neve mellett meg kell adnunk annak típusát is. <br> A JS esetén ez másképp valósul meg."
    }
]

var questions =[
    {
        question: "Javascriptben melyik kulcsszóval deklarálunk változót?",
        answer: "var",
        hint: "Tipp: variable..."
    },
    {
        question: "Mi fut le egy objektum példányosításakor?",
        answer: "konstruktor",
        hint: "Tipp: Konstruálunk egy példányt..."
    },
    {
        question: "Melyik kulcsszóval hozunk létre egy új fukciót?",
        answer: "function",
        hint: "Tipp: Gondolkodj angol nyelven!"
    }
]
var id = 0;
var lastQuestion = questions.length-1;
var lastIntro = intros.length-1;

const QuestionPlaceholder = document.getElementById('question');
const AnswerInput = document.getElementById('answer');
const AnswerContainer = document.getElementById('answer-container');
const SendButton = document.getElementById('send-btn');
const Wrong = document.getElementById('wrong');
const NextButton = document.getElementById('next-btn');
const HomeButton = document.getElementById('home-btn');


const NavbarContainer = document.getElementById('navbar-container-mobile');

Wrong.style.visibility= "hidden";
AnswerInput.style.visibility = "hidden";
SendButton.style.visibility = "hidden";
AnswerContainer.style.display = "none";

QuestionPlaceholder.innerHTML = intros[id].intro;

function SendClicked(){
    if(AnswerInput.value == questions[id].answer){
        console.log("Good");
        Wrong.style.visibility = "hidden";
        AnswerInput.value = "";
        id++;
        
        if(id<=lastQuestion){
            QuestionPlaceholder.innerHTML = questions[id].question;
        }
        else{
            QuestionPlaceholder.innerHTML = "Gratulálunk, sikeresen teljesítetted a kurzust!";
            SendButton.style.visibility = "hidden";
            AnswerInput.style.visibility = "hidden";
            HomeButton.style.visibility = "visible";

        }
        

    }
    
    else{
        Wrong.style.visibility = "visible";
        Wrong.innerHTML = "Helytelen válasz! " + questions[id].hint;
        console.log("Bad");
    }
    
}
function NextClicked(){
    id++;
    if(id<=lastIntro){
        
        QuestionPlaceholder.innerHTML = intros[id].intro;
        
    }
    else{
        id = 0;
        QuestionPlaceholder.innerHTML = questions[id].question;
        AnswerInput.style.visibility = "visible";
        SendButton.style.visibility = "visible";
        AnswerContainer.style.display = "block";
        NextButton.style.display = "none";

    }
    

}

function SetMenuVisibility(){
    if(NavbarContainer.style.display === "none"){
        NavbarContainer.style.display = "block";
    }
    else {
        NavbarContainer.style.display = "none";
    }
}

