//Problem 7.	Find Youngest Person
//Write a JavaScript function findYoungestPerson(persons) that accepts as parameter an array of persons, finds the youngest person and returns his full name.
// Write a JS program youngestPerson.js to execute your function for the below examples and print the result at the console.

function findYoungestPerson(persons) {

   var minAge = Number.MAX_VALUE;
   for (var i = 0; i< persons.length; i++) {
        if (persons[i].age < minAge) {
            var result = persons[i];
            minAge = persons[i].age;
        }
   }

   if (result) {
       console.log("The youngest person is " + result.firstname + " " + result.lastname);
   } else {
       console.log("Missing age!");
   }
}

var persons = [
        { firstname : 'George', lastname: 'Kolev', age: 32},
        { firstname : 'Bay', lastname: 'Ivan', age: 81},
        { firstname : 'Baba', lastname: 'Ginka', age: 40}];
findYoungestPerson(persons);