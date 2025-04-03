// var arr = [1,2,3,4,5,6]
// var cltr = ""

// arr.forEach(function(elem){
//     cltr += elem
//     console.log(cltr)
// })


var arr =[
    {dp:"pics/1.webp",
        story:"pics/5.JPG"
    },
    {dp:"pics/2.jpg",
        story:"pics/3.jpg"
    },
    {dp:"pics/3.jpg",
        story:"pics/2.jpg"
    },
    {dp:"pics/4.JPG",
        story:"pics/4.JPG"
    },
    {dp:"pics/5.JPG",
        story:"pics/1.webp"
    }
]

var storiyan = document.querySelector(".storiyan")
clutter = "" 
// var img = document.querySelector("arr[elem.dp]")
arr.forEach(function(elem,idx){
    clutter += `<div class="stories">
            <img id="${idx}" src="${elem.dp}" alt="" />
          </div>`
});

storiyan.innerHTML = clutter;

storiyan.addEventListener("click",function(dets){
    document.querySelector("#full-screen").style.display = "block";
    document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`
    document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`

    setTimeout(function(){
        document.querySelector("#full-screen").style.display = "none"
    },3000)
})


