const closeBtnRef = document.getElementById("closeBtn")
const closeBtnOkRef = document.getElementById("closeBtnOk")
const wrapperRef = document.getElementById("wrapper")
closeBtnRef.addEventListener("click", ()=>{
    wrapperRef.classList.toggle("pop-up_wrapper_close")
})
closeBtnOkRef.addEventListener("click", ()=>{
    wrapperRef.classList.toggle("pop-up_wrapper_close")
})