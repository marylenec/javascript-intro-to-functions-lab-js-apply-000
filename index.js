// describe('shout(string)',() => {})

function shout (string) {
  // do something
  return string.toUpperCase()
}

shout("hello!");

//describe('whisper(string)'

function whisper(string) {
  return string.toLowerCase()
}

whisper("hello");

//describe('logShout(string)'

function logShout(string) {
  var spy = string.toUpperCase();
  console.log(spy);
}

logShout("hello");

//
