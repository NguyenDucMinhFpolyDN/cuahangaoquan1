// var btnSearch = document.querySelector('.search-box__btn')

// btnSearch.addEventListener('click', function(){
//     this.parentElement.classList.toggle('open')
//     this.previousElementSibling.focus();
// })

// product 

const bigImg = document.querySelector(".product-content-left-big-img img")
const smallImg = document.querySelectorAll(".product-content-left-small-img img")
smallImg.forEach(function(imgItem,X){
    imgItem.addEventListener("click", function(){
        bigImg.src = imgItem.src
    })
})




const binhluan = document.querySelector(".binhluan")
const mota = document.querySelector(".mota")
if(binhluan){
    binhluan.addEventListener("click", function(){
        document.querySelector(".product-content-right-bottom-content-mota").style.display = "none"
        document.querySelector(".product-content-right-bottom-content-binhluan").style.display = "block"
    })
}
if(mota){
    mota.addEventListener("click", function(){
        document.querySelector(".product-content-right-bottom-content-mota").style.display = "block"
        document.querySelector(".product-content-right-bottom-content-binhluan").style.display = "none"
    })
}

const butTon = document.querySelector(".product-content-right-bottom-top")
if(butTon){
    butTon.addEventListener("click", function(){
        document.querySelector(".product-content-right-bottom-content-big").classList.toggle("activeB")
    })
}