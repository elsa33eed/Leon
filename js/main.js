// change background automaticlly
const background = document.querySelector(".landing"); //select element to change background
const imageArr = ["01.png", "02.png", "03.png", "04.png", "05.png", "06.png"]; // make array with background images
setInterval(() => {
  const randomNum = Math.floor(Math.random() * imageArr.length); // make random number
  background.style.backgroundImage = 'url("image/' + imageArr[randomNum] + '")'; //change background
}, 20000);

// animate skill section progress
let ourSkills = document.querySelector(".skills");
window.onscroll = function () {
  let positionTop = ourSkills.offsetTop;
  let skillsHeight = ourSkills.offsetHeight;
  let windowsHeight = this.innerHeight;
  let myScroll = this.pageYOffset;

  if (myScroll > positionTop + skillsHeight - windowsHeight) {
    let dataProgress = document.querySelectorAll(
      ".skills .container .skill-box .skill-progress span"
    );
    dataProgress.forEach((span) => {
      span.style.width = span.dataset.progress;
    });
  }
};

// start scroll to top buttom
let span = document.querySelector(".up");

window.onscroll = function () {
  // console.log(this.scrollY);
  if (this.scrollY >= 600) {
    span.classList.add("show");
  } else {
    span.classList.remove("show");
  }
};

span.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
