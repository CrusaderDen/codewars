/*
https://www.codewars.com/kata/52afd1fe8f7c52a0e1000304/train/javascript

Happy Holidays fellow Code Warriors!
Santa has just revealed his master plan! His goal was to automate as many of his tasks as possible by posting them as challenges in the #hackingholidays section of Codewars. Thanks to the solutions from these challenges, Santa has completed his tasks a week before Christmas! You know what that means...Party at Santa's place! All that's left is to invite everyone. Santa sent out a large amount of invitations, and is patiently waiting for responses.

Who's attending the Party?
Write a function called getAttendees that takes two arguments:

Array containing all the names of the people Santa invited
An array of responses (objects) with the following structure:
{name: 'Easter Bunny', response: 'declined'}
getAttendees should return an array containing the names of all the people who accepted Santa's invitation and the names of those who did not respond to the invitation. Santa is very positive, so he is assuming those who did not respond will show up. Anyone who declined the invitation will not be attending the party. If nobody is attending the party, return an empty array [].

Example:
Javascript/CoffeeScript:

getAttendees( ['Easter Bunny', 'Tooth Fairy', 'Frosty the Snowman', 'Jack Frost'] ,
   [ 
     {name: 'Easter Bunny', response: 'declined'}, 
     {name: 'Jack Frost', response: 'declined'}, 
     {name: 'Tooth Fairy', response: 'accepted'} 
   ] );// => returns ['Tooth Fairy', 'Frosty the Snowman']

*/

function getAttendees(peopleInvited, responses) {
   const declinedNames = responses.filter((p) => p.response === "declined").map((p) => p.name)
   console.log(declinedNames)
   return peopleInvited.filter((p) => !declinedNames.includes(p))
}

const people = [
   "Easter Bunny",
   "Tooth Fairy",
   "Frosty the Snowman",
   "Jack Frost",
   "Cupid",
   "Father Time",
]

const responses = [
   {name: "Easter Bunny", response: "declined"},
   {name: "Jack Frost", response: "declined"},
   {name: "Tooth Fairy", response: "accepted"},
]
console.log(getAttendees(people, responses))
