var modalBtn = document.querySelector(".modal-btn");
var modalBg = document.querySelector(".modal-bg");
var modalClose = document.querySelector(".modal-close")

modalBtn.addEventListener("click", function () {
   modalBg.classList.add("bg-active"); 
});
modalClose.addEventListener("click", function () {
   modalBg.classList.remove("bg-active"); 
});


/* BELOW JS FOR OUR STORY PAGE */
function imageGallery(){
    const highlight = document.querySelector(".gallery-highlight");
    const previews = document.querySelectorAll(".room-preview img");
    
    previews.forEach(preview => {
        preview.addEventListener("click", function(){
            const smallSrc = this.src;
            const bigSrc = smallSrc.replace("small", "big");
            highlight.src = bigSrc;
            console.log(bigSrc);
            previews.forEach(preview => preview.classList.remove('room-active'));
            preview.classList.add('room-active');
        });
    });
}

imageGallery();