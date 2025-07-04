let bar = document.querySelector(".fa-bars");
let nav = document.querySelector(".m-nav-bar")
// This code will run on small screens
if (window.innerWidth < 768) {
    document.querySelectorAll('.line-break').forEach(br => br.remove());
}



bar.addEventListener("click", () => {
    if(nav.style.display === "block"){
        nav.style.display = 'none'
    }else{
        nav.style.display = 'block'
    }
})