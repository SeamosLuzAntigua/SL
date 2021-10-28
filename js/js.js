
window.addEventListener('resize', function(event){
    var logsize;
    var h;
if(window.innerWidth<=window.innerHeight){
    logsize=window.innerWidth;
}else{logsize=window.innerHeight;}

document.getElementById("D_img").width = (logsize/2.5)*2.33;
document.getElementById("D_img").height = (logsize/2.5);

}, true);