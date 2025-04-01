let kartone  = document.querySelector(".photoone")
let karttwo  = document.querySelector(".phototwo")
let kartehree  = document.querySelector(".photothree")
let kartfour  = document.querySelector(".photofour")
let kartfive  = document.querySelector(".photofive")
let kartsix  = document.querySelector(".photosix")
let kartseven  = document.querySelector(".photoseven")

kartone.style.transition = "transform 0.5s ease, width 0.5s ease, height 0.5s ease";

kartone.addEventListener('mouseover', function() {
    setTimeout(() => {
        kartone.style.transform = "scale(1.2)"; 
        kartone.style.width = "450px"; 
        kartone.style.height = "350px";
    }, 500);
});

kartone.addEventListener('mouseout', function() {
    kartone.style.transform = "scale(1)"; 
    kartone.style.width = "250px"; 
    kartone.style.height = "150px"; 
});

karttwo.style.transition = "transform 0.5s ease, width 0.5s ease, height 0.5s ease";

karttwo.addEventListener('mouseover', function() {
    setTimeout(() => {
        karttwo.style.transform = "scale(1.2)"; 
        karttwo.style.width = "300px"; 
        karttwo.style.height = "350px";
    }, 500);
});

karttwo.addEventListener('mouseout', function() {
    karttwo.style.transform = "scale(1)"; 
   karttwo.style.width = "100px"; 
    karttwo.style.height = "150px"; 
});

kartehree.style.transition = "transform 0.5s ease, width 0.5s ease, height 0.5s ease";

kartehree.addEventListener('mouseover', function() {
    setTimeout(() => {
        kartehree.style.transform = "scale(1.2)"; 
        kartehree.style.width = "300px"; 
        kartehree.style.height = "350px";
    }, 500);
});

kartehree.addEventListener('mouseout', function() {
    kartehree.style.transform = "scale(1)"; 
   kartehree.style.width = "100px"; 
    kartehree.style.height = "150px"; 
});

kartfour.style.transition = "transform 0.5s ease, width 0.5s ease, height 0.5s ease";

kartfour.addEventListener('mouseover', function() {
    setTimeout(() => {
        kartfour.style.transform = "scale(1.2)"; 
        kartfour.style.width = "300px"; 
        kartfour.style.height = "350px";
    }, 500);
});

kartfour.addEventListener('mouseout', function() {
    kartfour.style.transform = "scale(1)"; 
   kartfour.style.width = "100px"; 
    kartfour.style.height = "150px"; 
});


kartfive.style.transition = "transform 0.5s ease, width 0.5s ease, height 0.5s ease";

kartfive.addEventListener('mouseover', function() {
    setTimeout(() => {
        kartfive.style.transform = "scale(1.2)"; 
        kartfive.style.width = "300px"; 
        kartfive.style.height = "350px";
    }, 500);
});

kartfive.addEventListener('mouseout', function() {
    kartfive.style.transform = "scale(1)"; 
   kartfive.style.width = "100px"; 
    kartfive.style.height = "150px"; 
});

kartsix.style.transition = "transform 0.5s ease, width 0.5s ease, height 0.5s ease";

kartsix.addEventListener('mouseover', function() {
    setTimeout(() => {
        kartsix.style.transform = "scale(1.2)"; 
        kartsix.style.width = "300px"; 
        kartsix.style.height = "350px";
    }, 500);
});

kartsix.addEventListener('mouseout', function() {
    kartsix.style.transform = "scale(1)"; 
   kartsix.style.width = "100px"; 
    kartsix.style.height = "150px"; 
});

kartseven.style.transition = "transform 0.5s ease, width 0.5s ease, height 0.5s ease";

kartseven.addEventListener('mouseover', function() {
    setTimeout(() => {
        kartseven.style.transform = "scale(1.2)"; 
       kartseven.style.width = "300px"; 
        kartseven.style.height = "350px";
    }, 500);
});

kartseven.addEventListener('mouseout', function() {
    kartseven.style.transform = "scale(1)"; 
    kartseven.style.width = "100px"; 
    kartseven.style.height = "150px"; 
});
