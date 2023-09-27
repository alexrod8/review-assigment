let greetingMessage = "Good Morning!";

function greetPeople() {
  console.log(greetingMessage);
}

function changeGreetMeeting (message) {
   greetingMessage = message
}
changeGreetMeeting('Good Evening')
greetPeople();
