//This all for One Element

// var elem1 = document.querySelector('#elem1')
// var img = document.querySelector('#elem1 img')

// elem1.addEventListener("mousemove", (dets) => {
//     img.style.left = dets.x + "px"
//     img.style.top = dets.y + "px"
// })
// elem1.addEventListener("mouseenter", (dets) => {
//     img.style.opacity = 1
// })
// elem1.addEventListener("mouseleave", (dets) => {
//     img.style.opacity = 0
// })

//This is for All Element at One Time

const elem = document.querySelectorAll(".elem");

elem.forEach(function (val) {
  console.log(val.childNodes[3]);

  val.addEventListener("mouseenter", () => {
    val.childNodes[3].style.opacity = 1;
  });
  val.addEventListener("mouseleave", () => {
    val.childNodes[3].style.opacity = 0;
  });
  val.addEventListener("mousemove", (dets) => {
    val.childNodes[3].style.left = dets.x + "px";
    // val.childNodes[3].style.top = dets.y + "px";
  });
});
