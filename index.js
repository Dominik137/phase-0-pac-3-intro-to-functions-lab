function shout(string) {
    return string.toUpperCase();
  }
function whisper(string) {
    return string.toLowerCase();
}
function logShout (string2) {
    console.log(string2.toUpperCase( ));
}

function logWhisper(string22) {
    console.log(string22.toLowerCase());
}
function sayHiToHeadphonedRoommate(string) {
    var cantHear = "I can't hear you!";
    var yesIndeed = "YES INDEED!";
    var dinner = "I would love to!";
    if (string.toLowerCase(string) === string) {
      return cantHear;
    }
    else if (string.toUpperCase(string) === string) {
      return yesIndeed;
    }
    else if ("Let's have dinner together!" === string) {
      return dinner
    }
  }