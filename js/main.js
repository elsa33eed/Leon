// change background automaticlly
const background = document.querySelector(".landing"); //select element to change background
const imageArr = ["01.png", "02.png", "03.png", "04.png"]; // make array with background images
setInterval(() => {
  const randomNum = Math.floor(Math.random() * imageArr.length); // make random number
  background.style.backgroundImage = 'url("image/' + imageArr[randomNum] + '")'; //change background
}, 20000);
