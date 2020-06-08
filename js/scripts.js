$(document).ready(function(){
  $("#originalSentence").submit(function(event){
    event.preventDefault();
    const sentenceString = $('#sentence').val();
    const words = sentenceString.split(" ");
    const bigWords = words.filter(word => word.length >= 3);
    bigWords.reverse();
    const bigWordsReverse = bigWords.join(' ');
      $('#returnSentence').text(bigWordsReverse);
  });
});

