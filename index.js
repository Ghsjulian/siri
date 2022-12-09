window.SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new (window.SpeechRecognition ||
    window.webkitSpeechRecognition ||
    window.mozSpeechRecognition ||
    window.msSpeechRecognition)();

recognition.interimResults = true;
recognition.lang = "en-US" || "en-UK" || "en-IN" || "en-BN" || "en-AU";

recognition.onresult = function (event){
  let current = event.resultIndex;
  var result = event.results[current][0].transcript;
  var text    = result.toLowerCase()
var output = document.querySelector(".output__");
var siri = document.querySelector(".siri");
output.innerText ="You : "+text;

if (event.results[0].isFinal) {
    if(text.includes("hi siri") || text.includes("hello siri")) {
      var reply = "yes sir , how can I help you?";
      speakFunction(reply);
      output.innerText = "You : "+text;
      siri.innerText = "Siri : "+reply;
    } else if (text.includes("hi what's your name") || text.includes("hello what is your name") || text.includes("hey what's your name") || text.includes("hey what is your name")){
      var reply = "yes sir , I'm SIRI .";
      speakFunction(reply);
      output.innerText = "You : "+text;
      siri.innerText = "Siri : "+reply;
    } else if (text.includes("hey") || text.includes("hey are you online") || text.includes("are you here") || text.includes("are you there")||text.includes("are you active")||text.includes("are you listen my words") || text.includes("are you hearing my words") || text.includes("are you listening my words")|| text.includes("are you watching me")){
      var reply = "yes sir , I'm here .";
      speakFunction(reply);
      output.innerText = "You : "+text;
      siri.innerText = "Siri : "+reply;
    }  else if(text.includes("hi who is your boss")|| text.includes("who made you")||text.includes("who is your creator") || text.includes("who's your boss") || text.includes("who's your creator") || text.includes("who made you siri")||text.includes("your boss name")) {
      var reply = "Ghs Julian Has Made Me , He Is My Dear One . He Has Created Me . I Love HIm So Much. He Is My Boss !";
      speakFunction(reply);
      output.innerText = "You : "+text;
      siri.innerText = "Siri : "+reply;
    }
  }
}

var speaker = window.speechSynthesis;
    function speakFunction(getCmd) {
    let command = getCmd;
    console.log(getCmd)
    var toSpeak = new SpeechSynthesisUtterance(command);
    var voices = speaker.getVoices();
    toSpeak.voice = voices[8];
    toSpeak.pitch = 1.3;
    toSpeak.rate = 0.9;
    toSpeak.volume = 10;
    toSpeak.lang = "en-IN";
    speaker.speak(toSpeak);
 }


recognition.addEventListener("end", () => {
    recognition.start();
});

recognition.start();