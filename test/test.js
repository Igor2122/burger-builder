const ul = document.querySelector('.ul');

const arr = [
   {id: 1, name: 'FE Developer', prevExp: [
      {dev: 'Law Comp'},
      {sales: 'Automotive'}
   ]},
   {id: 1, name: 'UI Developer', prevExp: [
      {dev: 'Hospital '},
      {sales: 'Medicine'}
   ]},
   {id: 1, name: 'UX Developer', prevExp: [
      {dev: 'Marketing'},
      {sales: 'Green Comp'}
   ]},
   
]

// convert js arr of objects to object of objects
let result = arr.reduce((prev, current) => {
   prev [current.id] = current; return prev;
}, {})


arr.map(res=> {

   let experience =res.prevExp.map(exp => {
      return exp.dev + ', ' + exp.sales;
   });
   let li = document.createElement('li');
   li.textContent = res.name + ', ' + experience;
   ul.appendChild(li);
})

