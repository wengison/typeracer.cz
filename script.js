const snts = [
    {"index": 0, "text": "There's no pretty way to put this. I grew up in the suburbs. I guess most people think of the suburb as a place with all the disadvantages of the city and none of the advantages of the country. And vice versa. But in a way those really were the wonder years for us there in the suburbs. It was kind of a golden age for kids."},
    {"index": 1, "text":"Do you smell that? Napalm, son. Nothing else in the world smells like that. I love the smell of napalm in the morning. You know, one time we had a hill bombed, for twelve hours. Smelled like victory. Someday this war's gonna end."},
    {"index": 2, "text":"And the game was over and the player woke up from the dream. And the player began a new dream. And the player dreamed again, dreamed better. And the player was the universe. And the player was love. You are the player. Wake up."},
    {"index": 3, "text":"Say to all of you, I have been treated this day with no respect. I've earned you all money. I've made you rich and I asked for little. Good. You will not give, I'll take! As for Don Corleone, well, he makes it very clear to me today that he is my enemy. You must choose between us."},
    {"index": 4, "text":"She sits in a corner by the door. There must be more I can tell her if she really wants me to help her. I'll do what I can to show her the way, and maybe one day I will free her, though I know no one can see her."},
    {"index": 5, "text":"I used to bite my tongue and hold my breath, scared to rock the boat and make a mess. So I sat quietly, agreed politely. I guess that I forgot I had a choice. I let you push me past the breaking point. I stood for nothing, so I fell for everything."},
    {"index": 6, "text":"A lot of people say they want to be great, but they're not willing to make the sacrifices necessary to achieve greatness. They have other concerns, whether important or not, and they spread themselves out. That's totally fine. After all, greatness is not for everybody"},
    {"index": 7, "text":"I can see you. Your brown skin shining in the sun. You got that top pulled down and your sunglasses on, baby. And I can tell you my love for you will still be strong, after the boys of summer have gone."},
    {"index": 8, "text":"No more will my green sea go turn a deeper blue. I could not foresee this thing happening to you. If I look hard enough into the setting sun, my love will laugh with me before the morning comes."},
    {"index": 9, "text":"One can't understand everything at once, we can't begin with perfection all at once! In order to reach perfection one must begin by being ignorant of a great deal. And if we understand things too quickly, perhaps we shan't understand them thoroughly."},
    {"index": 10, "text":"It had never occurred to him until then to think that literature was the best plaything that had ever been invented to make fun of people..."},


]
// #1 Environment-------------------------------------------------------------------
function getRandomText() {
    return snts[Math.floor(Math.random()*(snts.length-1))].text;
}
let randomText = getRandomText();
// console.log(randomText);
function getTextLength() {
    return randomText.length;
}
let textlength = getTextLength();

// #2 grid fields-------------------------------------------------------------------
const gridBox = document.querySelector('.grid');
let delkaTextu = getTextLength();
let index = -1;
let actualSymbol = snts[1].text[17];  //bude nejaky querySelector 
let symbolPosition = 0;

class Race {
    constructor(text, size, time) {
        text,size,time
    }
    create() {
        for (let i=0;i<getTextLength();i++) {
            let field = document.createElement('div');
            gridBox.appendChild(field);
            field.classList.add('field');
        }
        let allFields = document.querySelectorAll('.field');
        allFields.forEach(field=> {
            index+=1;
            actualSymbol = randomText[index];
            field.innerHTML = `${actualSymbol}`
        });
    }
    static nextSymbolPosition() {
        symbolPosition+=1;
    }
}
let race = new Race(randomText, textlength, 60);
race.create();

//-------------------------------------------------------------------
//String.fromCharCode(number)
//-------------------------------------------------------------------

let clicked = Boolean;
function checkClicked() {
    let allFields = document.querySelectorAll('.field');
    if (clicked == true) {
        allFields[symbolPosition].style.color = "rgb(71, 255, 47)"
    } else {
        allFields[symbolPosition].style.color = "rgba(199, 55, 55,1)";
    }
}
function textCursor() {
    
}
//Kliknuti klavesy
document.addEventListener('keydown', (e)=> {
    if (e.keyCode == "16") return;
    console.log("predloha: "+(randomText[symbolPosition]).toUpperCase());
    console.log("zmacknuto: "+String.fromCharCode(e.keyCode));
    String.fromCharCode(e.keyCode) === (randomText[symbolPosition]).toUpperCase() ? clicked=true: clicked=false;
    checkClicked();
    Race.nextSymbolPosition();
    console.log(symbolPosition);
    finish();
})

// race ended
function finish() {
    console.log(symbolPosition)
    console.log(textlength)
}




