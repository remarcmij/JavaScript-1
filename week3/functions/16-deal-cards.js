'use strict';

const playingCards = [
  '♠ 2', '♠ 3', '♠ 4', '♠ 5', '♠ 6', '♠ 7', '♠ 8', '♠ 9', '♠ 10', '♠ J', '♠ Q', '♠ K', '♠ A',
  '♥ 2', '♥ 3', '♥ 4', '♥ 5', '♥ 6', '♥ 7', '♥ 8', '♥ 9', '♥ 10', '♥ J', '♥ Q', '♥ K', '♥ A',
  '♦ 2', '♦ 3', '♦ 4', '♦ 5', '♦ 6', '♦ 7', '♦ 8', '♦ 9', '♦ 10', '♦ J', '♦ Q', '♦ K', '♦ A',
  '♣ 2', '♣ 3', '♣ 4', '♣ 5', '♣ 6', '♣ 7', '♣ 8', '♣ 9', '♣ 10', '♣ J', '♣ Q', '♣ K', '♣ A',
];

// https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa

for (let dealCount = 0; dealCount < 4; dealCount++) {
  const deal = [];
  for (let i = 0; i < 5; i++) {
    deal.push(playingCards[i]);
  }
  console.log(deal);
}
