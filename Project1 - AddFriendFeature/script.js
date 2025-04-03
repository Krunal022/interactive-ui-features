// alert("work");

var btn = document.querySelector("button");
var stranger = document.querySelector("h3");
flag = 0;

btn.addEventListener("click", () => {
  if (flag == 0) {
    stranger.innerHTML = "Friends";
    stranger.style.color = "green";
    btn.innerHTML = "Remove Friend"
    flag = 1
  }else{
    stranger.innerHTML = "Stranger";
    stranger.style.color = "red";
    btn.innerHTML = "Add Friend"
    flag = 0
  }
});

btn
