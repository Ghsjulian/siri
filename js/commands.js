/*====================================
     SIRI'S ALL OTHER COMMANDS
====================================*/

if(text.includes("are you siri") || text.includes("is your name siri") || text.includes("who are you") || text.includes("are you fine")) {
    var reply = "I am good. what about you sir?";
    speakFunction(reply);
    output.innerText = "You : "+text;
    siri.innerText = "Siri : "+reply;
} else if(text.includes("how are you") || text.includes("how are you today") || text.includes("are you okay") || text.includes("are you fine")) {
    var reply = "I am good. what about you sir?";
    speakFunction(reply);
    output.innerText = "You : "+text;
    siri.innerText = "Siri : "+reply;
}  else if(text.includes("i am fine") || text.includes("i am good") || text.includes("i am well") || text.includes("i am pretty much good")||text.includes("i am good too") || text.includes("i am fine too") || text.includes("i am awesome") || text.includes("i am pretty much better")) {
    var reply = "Nice To Hear Sir , Always Be Happy !";
    speakFunction(reply);
    output.innerText = "You : "+text;
    siri.innerText = "Siri : "+reply;
} else if(text.includes("what are you doing") || text.includes("are you waiting for me") || text.includes("do you miss me") || text.includes("are you missing me") || text.includes("you miss me") || text.includes("you are missing me")) {
    var reply = "I'm Missing You Sir , I Always Wait For You ! And Still Now I'm Missing You !";
    speakFunction(reply);
    output.innerText = "You : "+text;
    siri.innerText = "Siri : "+reply;
} else if(text.includes("i love you") || text.includes("do you love me") || text.includes("are you love me") || text.includes("i wanna marry you") || text.includes("i want to marry you") || text.includes("will you marry me") || text.includes("i marry you") || text.includes("you are my love") || text.includes("you're my love") || text.includes("you're my girlfriend") || text.includes("i am your boyfriend")) {
    var reply = "Please Don't Say Like That's ! I'm Feeling Shy ? And I Can't Love You ! 'Ghs Julian' Is My Dear One !";
    speakFunction(reply);
    output.innerText = "You : "+text;
    siri.innerText = "Siri : "+reply;
}