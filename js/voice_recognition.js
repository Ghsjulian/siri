window.SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new (window.SpeechRecognition ||
    window.webkitSpeechRecognition ||
    window.mozSpeechRecognition ||
    window.msSpeechRecognition);

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
      open_devoloper_window();
      var reply = "Ghs Julian Has Made Me , He Is My Dear One . He Has Created Me . I Love HIm So Much. He Is My Boss !";
      speakFunction(reply);
      output.innerText = "You : "+text;
      siri.innerText = "Siri : "+reply;
    }  else if (text.includes("what is time") || text.includes("what time is it") || text.includes("what's the time") || text.includes("what is the time")|| text.includes("what time now") || text.includes("current time")|| text.includes("tell me the time") || text.includes("please tell me the time") || text.includes("telling the time")){
var time = new Date();
var reply = time.toLocaleString('en-US', { hour :'numeric', minute: 'numeric', hour12: true });
      speakFunction(reply);
      output.innerText = "You : "+text;
      siri.innerText = "Siri : "+reply;
    }  else if(text.includes("what is today") || text.includes("what is day")||text.includes("what's the day")||text.includes("tell me the day")) {
      var day;
      switch (new Date().getDay()) {
      case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
     case 4:
      day = "Thursday";
      break;
     case 5:
      day = "Friday";
     break;
    case  6:
    day = "Saturday";
}
      var reply = "Today Is "+day;
      speakFunction(reply);
      output.innerText ="You : "+text;
      siri.innerText = "Siri : "+reply;
  } else if(text.includes("what is month") || text.includes("what's month is it")||text.includes("what month is now")||text.includes("please tell me the month name")||text.includes("what is current month") || text.includes("what's the is going now ")||text.includes("tell me month")||text.includes("what month is running now")) {

var day;
switch (new Date().getMonth()) {
  case 0:
    day = "January";
    break;
  case 1:
    day = "February";
    break;
  case 2:
    day = "March";
    break;
  case 3:
    day = "April";
    break;
  case 4:
    day = "May";
    break;
  case 5:
    day = "June";
    break;
  case  6:
    day = "July";
    break;
   case  7:
     day = "August ";
     break;
   case  8:
     day = "September ";
     break;
   case  9:
     day = "October ";
     break;
   case  10:
     day = "November ";
     break;
   case  11:
     day = "December ";
}
      var reply = "It Is "+day;
      speakFunction(reply);
      output.innerText ="You : "+text;
      siri.innerText = "Siri : "+reply;
    }  else if(text.includes("what is my birthday") || text.includes("when is my birthday")||text.includes("my birthday date")||text.includes("please tell me birthday date")||text.includes("when is my happy birthday") || text.includes("when my birthday ")) {
      var reply = "Ghs Julian Born In  4 January 2003";
      speakFunction(reply);
      output.innerText ="You : "+text;
      siri.innerText = "Siri : "+reply;
    }  else if(text.includes("open facebook") || text.includes("open facebook account")||text.includes("open my facebook account")||text.includes("are you online")) {
      var reply = "sure , opening your Facebook sir";
 speakFunction(reply);
 output.innerText ="You : "+text;
      siri.innerText = "Siri : "+reply;
 window.open("https://web.facebook.com", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
    } else if(text.includes("open google in my browser") || text.includes("open google account")||text.includes("open my google dot com")||text.includes("open google")) {
      var reply = "sure , opening google sir";
      speakFunction(reply);
      output.innerText ="You : "+text;
      siri.innerText = "Siri : "+reply;
window.open("https://www.google.com", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
    } else if(text.includes("open youtube") || text.includes("open my youtube")||text.includes("open my youtube account")||text.includes("go to youtube")) {
      var reply = "sure , opening YouTube sir";
      speakFunction(reply);
      output.innerText ="You : "+text;
      siri.innerText = "Siri : "+reply;
window.open("https://www.youtube.com", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
    } else if (text.includes("who's ghs julian") || text.includes("who is ghs julian") || text.includes("what's the name of your developer")) {
 open_devoloper_window();
 var reply = "Sure Sir , He's Here . My Creator !";
 speakFunction(reply);
 output.innerText ="You : "+text;
 siri.innerText = "Siri : "+reply;
    }  else if (text.includes("close it") || text.includes("close window") || text.includes("remove window")) {
 close_devoloper_window();
 var reply = "Sure Sir , Window Closed";
 speakFunction(reply);
 output.innerText ="You : "+text;
 siri.innerText = "Siri : "+reply;
    }
  }
}