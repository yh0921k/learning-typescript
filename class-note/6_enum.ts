enum Shoes {
  Nike = 'nike',
  Adidas = 'adidas',
}

let myShoes = Shoes.Nike;
console.log(myShoes); // 'nike'

// 예제
enum Answer {
  Yes = 'Y',
  No = 'N',
}
function askQuestion(answer: Answer) {
  if (answer === Answer.Yes) {
    console.log('correct');
  }
  if (answer === Answer.No) {
    console.log('incorrect');
  }
}
askQuestion(Answer.Yes);
// askQuestion('yes');
// askQuestion('예스');
// askQuestion('y');
