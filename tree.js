const n = 10;

for (let i = 1; i <= n; i++) { // this iterates over no of lines 

  let line = ''; //all charchter and spaces that to be printed in each line
  for (let j = 1; j < n - i + 1; j++) { // loop that adds initial spacs
    line += ' ';
  }
  for (let k = 1; k <= i; k++) { // left half of each list
    line += (k+i-1)%10;
  }
  for (let l = i - 1; l > 0; l--) { //right hafl
    line += (l+i-1)%10;
  }
  console.log(line); //prints everything
}