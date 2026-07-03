let numbers = [1, 2, 2, 3, 4, 4];
let unique = [];

for (let num of numbers) {
  if (!unique.includes(num)) {
    unique.push(num);
  }
}

console.log(unique);


///////////////////


let name='jeyaraman';
let revName='';


for(let i=name.length-1;i>=0;i--){
    revName+=name[i];
}

console.log(revName);
