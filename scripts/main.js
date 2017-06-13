/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/


function handValue (hand) {
  var cardValue = 0;
  var handValue = 0;
  var aceValue = false;

  for (let i = 0; i < hand.length; i++) {
    if (hand[i] === 'K' || hand[i] === 'Q' || hand[i] === 'J') {
        cardValue = 10;
        handValue += cardValue;
    }
    else if (hand[i] === 'A') {
        cardValue = 1;
        aceValue = true;
        handValue += cardValue;
    }
    else
    {
        cardValue = parseInt(hand[i]);
        handValue += cardValue;
    }
  }
    if (handValue <= 11 && aceValue) {
        handValue += 10;
    }
    console.log(handValue);
  return handValue;
}
