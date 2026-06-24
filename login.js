const loginForm = document.getElementById("loginForm")
const error = document.getElementById("error")

loginForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    const username = document.getElementById("username").value.trim()
    const password = document.getElementById("password").value.trim()

    if(!username || !password){
        error.textContent = "username or password was incorrect.."
        return
    }

    if(username === "admin" && password === "admin"){
        localStorage.setItem("isLoggedIn", true)
        window.location.href = "dashboard.html"
    }else{
        error.textContent = "username or password was incorrect"
    }
})
