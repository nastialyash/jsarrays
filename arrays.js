function countVowels(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}


const input = "Hello world";
const result = countVowels(input);
console.log(result); 


const numbers = [5, 12, 7, 3, 22, 10];
const max = Math.max(...numbers);
console.log(max); 


const input2 = [1, 2, 3, 4, 5, 6];
const evenNumbers = input2.filter(num => num % 2 === 0);
console.log(evenNumbers); 