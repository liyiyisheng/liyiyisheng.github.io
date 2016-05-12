 window.onload=function () {

     var page1 = document.getElementById("page1");
     var page2 = document.getElementById("page2");
     var page3 = document.getElementById("page3");

    var music = document.getElementById('music');
 var audio = document.getElementsByTagName('audio')[0];
//当音乐停止时，自动停止光标旋转效果
audio.addEventListener("ended", function(event) {
   music.setAttribute("class", "");
   /*music.style.animationPlayState = "paused";
   music.style.webkitanimationPlayState = "paused";*/
},false);

//点击音乐图标，控制音乐播放效果
 // /*/*music.onclick = function () {
 //    if (audio.paused){
 //        audio.play();
 //        this.setAttribute("class", "play")
 //        /*this.style.animationPlayState = "running";*//*只能用于iphone6 p，android4.4以前*/
 //        // /*this.style.webkitanimationPlayState = "running";*/能用于iOS，但android依旧不兼容
 //    }
 //    else{
 //    audio.pause();
 //    this.setAttribute("class", "")
 //    /*this.style.animationPlayState = "paused";*//*只能用于iphone6 p，android4.4以前*/
 //    // /*this.style.webkitanimationPlay*/State = "paused";*/能用于iOS，但android依旧不兼容*/
//      };
 //   };
   music.addEventListener("touchstart", function(event){
    if (audio.paused){
        audio.play();
        this.setAttribute("class", "play")
        }
    else{
    audio.pause();
    this.setAttribute("class", "")
        };
    }, false);
    page1.addEventListener("touchstart",function(event){
        page1.style.display = "none";
        page2.style.display = "block";
        page3.style.display = "block";
        page3.style.top     = "100%"

        setTimeout(function() {
            page2.setAttribute("class","page fadeOut")
            page3.setAttribute("class","page fadeIn")
        },5500);
    }, false); 

 };