const show =()=>{
    const shows = document.querySelector("#signup")
    shows.classList.toggle("show")
    document.querySelector(".layer").style.display="block" 
}

const closedialog =()=>{
    const closes = document.querySelector("#signup")
    closes.classList.remove("show")
    document.querySelector(".layer").style.display="none" 

}