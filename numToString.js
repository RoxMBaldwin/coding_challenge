// # Converting a Number to a String
//
// Write code that will accept a number and convert it to the
// appropriate string representation.
//
// Basic Requirements:
//
// * Represent numbers to the hundredth position
// * Represent numbers as high as one billion
//
// Examples:
//
// Convert 2523.04
// to "Two thousand five hundred twenty-three and 04/100 dollars"

function numToString(num){

  let answer
  let remainer

  let number = num.toString().split(".")
  let wholeNum = number[0]
  let remainerNum = number[1]

  let numWords = []
  let length = number.length - 1

  const units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
  const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
  const scales = ['', 'thousand', 'million']
  let and =  'and';

  //break case:

  if (remainerNum.length > 2){
    console.log('please enter a remainer to the hundreth position')
  }
  else if (remainerNum){
    remainer = ' and ' + remainerNum.toString() + '/100 dollars'
  }

  wholeNum = wholeNum.toString()
  let start = wholeNum.length
  let chunks = [];

  while (start > 0) {
      end = start;
      chunks.push(wholeNum.slice((start = Math.max(0, start - 3)), end));
  }

  if (chunks.length > scales){
    console.log('')
  }

  for( i = 0; i < chunks.length; i++){
    let chunk = parseInt(chunks[i])
    if (chunk){
      let ints = chunks[i].split('').reverse().map(parseFloat);
      if (ints[1] === 1) {
        ints[0] += 10;
      }
      if ((word = scales[i])) {
      numWords.push(word);
      }
      if ((word = units[ints[0]])) {
        numWords.push(word);
      }
      if ((word = tens[ints[1]])) {
        numWords.push(word);
      }
      if (ints[0] || ints[1]) {
        if (ints[2] || !i && chunks.length) {
            numWords.push(and);
        }
      }
      if ((word = units[ints[2]])) {
        numWords.push(word + ' hundred');
      }
    }
  }
  answer = numWords.reverse().join(' ') + remainer
  console.log(answer);
}

numToString(9558319.23)
