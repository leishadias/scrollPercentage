const body = document.body;
const html = document.documentElement;
const height = Math.max(
  body.scrollHeight,
  body.offsetHeight,
  html.clientHeight,
  html.scrollHeight,
  html.offsetHeight
);

document.addEventListener("scroll", scrollpercent);
var bartext = document.getElementById("percentText");
function scrollpercent() {
  let val = (window.pageYOffset / (height - window.innerHeight)) * 100;

  val = Math.round(val);
  bartext.innerText = val + "% viewed";
}
