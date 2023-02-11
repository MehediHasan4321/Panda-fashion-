const h2Elements = document.getElementsByTagName("h2");
const section = document.getElementById("backpack");
const cards = document.getElementsByClassName("card ");
const btns = document.getElementsByClassName("btn");
let counts = document.getElementById("shoping-icon-count")
const submitBtn= document.getElementById("submit-btn")
const imgTags = document.getElementsByTagName("img")



// All Event Lestener
for(const element of h2Elements){
    element.style.color="lightblue "
}

section.style.backgroundColor = "tomato"

for(const card of cards){
    card.style.borderRadius="30px"
}
for(const btn of btns){
   btn.addEventListener("click",function(){
    this.style.display="none"
   })
}
/* let imgSrc = ""
for(const img of imgTags){
    img.addEventListener("mouseenter",function(){
        this.src="images/banner-images/headphone.png"
        this.style.height = this.height + `px`
        imgSrc= this.src
        
    })
    img.addEventListener("mouseleave",function(e){
        //this.src = imgSrc[0]

    })
}

console.log(imgSrc) */