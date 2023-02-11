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


for (const btn of btns) {
    btn.addEventListener("click",function(){
        counts.innerHTML ++
    })
}
