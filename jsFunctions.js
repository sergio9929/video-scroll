var suavizado = 480;
document.addEventListener("DOMContentLoaded", function (event) {
    document.addEventListener("scroll", videoplay);
    document.getElementById("video").onloadeddata = () => {
        document.getElementById("altura").setAttribute("style", "height:" + document.getElementById("video").duration * suavizado + "px;");
    };
})

function videoplay() {
    var height = document.getElementById("altura").offsetHeight;
    document.getElementById("video").currentTime = height / (height - window.innerHeight) * window.pageYOffset / suavizado;
}