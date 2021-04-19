let amount = 100;
let monday = [
  ['Write a tutorial',180],
  ['Some web development',120]
];
let tuesday = [
  ['Keep writing that tutorial',240],
  ['Some more web development',180],
   ['A whole lot of nothing',240]
];

let tasks = [monday,tuesday];

let result = tasks.map(function (days) {
  return days.map(function (tasks) {
    return [tasks[0], tasks[1] /= 60];          
  }).filter(function (tasks) {
    return tasks[1] >= 2;                  
  }).map(function (tasks) {
    return [tasks[0], tasks[1], tasks[1] *= amount];         
  })
}).forEach(function (day) {  
  day.forEach(function (task) { 
  document.write(`<table>
  <tr>
  <td>Task name: ${task[0]}</td>
  <td>Task duration: ${task[1]}</td>
  <td>Task amount: $${task[2]}</td>
  </tr>
    </table>
    `)
  })

})


