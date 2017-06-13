/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/


function handValue (hand) {
var cardValue;
var value = 0;
  for (var i = 0; i < hand[i].length; i++) {
    cardValue = parseInt(hand);

    //card Value if 2 through 9
  if (cardValue >= 2 || cardValue <= 9) {
      if (hand[i] === '2') {
        value = 2;
      }
      else if (hand[i] === '3') {
        value = 3;
      }
      else if (hand[i] === '4') {
        value = 4;
      }
      else if (hand[i] === '5'){
        value = 5;
      }
      else if (hand[i] === '6') {
        value = 6;
      }
      else if (hand[i] === '7') {
        value = 7;
      }
      else if (hand[i] === '8') {
        value = 8;
      }
      else if (hand[i] === '9') {
        value = 9;
      }
    }
  if (cardValue === 'J' || cardValue === 'Q' || cardValue === 'K') {
    value = 10;
  }
  if (cardValue === 'A') {
    value = 11;
  }
  }
  return;
}
