var users = [
    ["john","red",5,["ball", "book", "pen"]],
    ["becky","blue",10,["tape", "backpack", "pen"]],
    ["susy","red",55,["ball", "eraser", "pen"]],
    ["tyson","green",1,["book", "pen"]],
   ];

//    1. Create a new array using forEach that has all usernames with a "!" to each of the usernames. Example: ["john!", "becky!", ...].

let exclamArray = [];
let newArray = users.forEach((element) => {
  exclamArray.push(element[0] + '!');
})
console.log('forEach', exclamArray);

// 2. Create another new array using map that has all usernames with a "?" to each of the usernames. Example: ["john?", "becky?", ...].

let uservopros = users.map(user => user[0] + '?')

console.log("Map", uservopros)

// 3. Filter the original array of users to only include users who are on team: red.

let teamRed = users.filter(user => user[1] === 'red')
console.log ("filter for team Red:", teamRed)

// 4. In filtered array find out the total score of all filtered users and print
//  all user's data into table with <tfoot>Final summ</tfoot> tag.

const totalScore = teamRed.reduce((acc, user) => acc + user[2], 0)
console.log('Reduce total score for team Red:', totalScore)

document.write(
  `<table><tfoot >
  <tr>
  <th colspan="4">
  Final summ: ${totalScore}
  </th>
  </tr>
  <tr><th>Name:</th><th>Team:</th><th>Score:</th><th>Items:</th></tr>
  <tr><td>${teamRed[0][0]}</td><td>${teamRed[0][1]}</td><td>${teamRed[0][2]}</td><td>${teamRed[0][3]}</td></tr>
  <tr><td>${teamRed[1][0]}</td><td>${teamRed[1][1]}</td><td>${teamRed[1][2]}</td><td>${teamRed[1][3]}</td></tr>
  
  </tfoot></table>`

)