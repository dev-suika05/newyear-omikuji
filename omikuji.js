$body = $('body');

let resultList = [
  '大吉','吉','中吉','小吉','末吉','凶'
];

let resultItem;

function resultNum() {
  let minNum = 0;
  let maxNum = resultList.length - 1;

  let randomNum = Math.floor(Math.random() * (maxNum + 1 - minNum)) + minNum;

  $('.js-result-item').html(resultList[randomNum]);
  resultItem = resultList[randomNum];
}
function shareLink () {
  let resultText = resultItem;
  let url = 'https://newyear-omikuji.netlify.app/'
  let urlLink = 'https://twitter.com/intent/tweet?text=あなたのおみくじの結果は'+ resultText +'！%0a%0a'+ url +'';

  $('.js-result-share').attr('href',urlLink);
}

$('.js-start-btn').on('click', function () {
  $body.addClass('is-start');
  resultNum();
  shareLink();
});