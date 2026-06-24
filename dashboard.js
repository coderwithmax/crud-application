if(!localStorage.getItem("isLoggedIn")){
    window.location.href = "index.html"
}


const userForm = document.getElementById("userForm")
const tableBody = document.getElementById("tableBody")
const message = document.getElementById("message")
const editIndex = document.getElementById("editIndex")
const logout  = document.getElementById("logout")

const fullName = document.getElementById("fullname")
const age  = document.getElementById("age")
const gender = document.getElementById("gender")
const phone = document.getElementById("phone")
const city = document.getElementById("city")
const fariin = document.getElementById("fariin")

let users = JSON.parse(localStorage.getItem("users")) || []

    const renderUsers = ()=>{
    tableBody.innerHTML = ""
    users.forEach((user,index)=>{
        tableBody.innerHTML  += `
        <tr class="bg-gray-200">
    <td class="text-red-500 font-bold line-clamp-3 ">${user.id}</td>
    <td class="p-3 text-center">${user.fullname}</td>
    <td class="p-3 text-center">${user.age}</td>
    <td class="p-3 text-center">${user.gender}</td>
    <td class="p-3 text-center">${user.phone}</td>
    <td class="p-3 text-center">${user.city}</td>
    <td class="p-3 text-center">${user.fariin}</td>
    <td class="flex mt-3 gap-4">
        <button class="bg-orange-500 text-white rounded-lg px-2 " onclick="editUser(${index})">Edit</button>
        <button class="bg-red-500 text-white rounded-lg px-2 " onclick="deleteUser(${index})">Delete</button>
    </td>
</tr>
        
        `
    })

}



userForm.addEventListener("submit",(e)=>{
e.preventDefault()
if(
    fullName.value === ""||
    age.value  === ""||
    gender.value === ""||
    phone.value === ""||
    city.value === "" ||
    fariin.value === ""
){
        message.textContent = "fadlan midkasta horta buuxi"
        return
    }
    message.textContent = ""
    
    const userData = {
        // id: Math.random(100),
        fullname: fullName.value,
        age: age.value,
        gender: gender.value,
        phone: phone.value,
        city: city.value,
        fariin: fariin.value
    }
    if(editIndex.value ===""){
        users.push(userData)
    }else{
        users[editIndex.value] = {
            ...users[editIndex.value],
            fullname: fullName.value,
            age: age.value,
            gender: gender.value,
            phone: phone.value,
            city: city.value,
            fariin: fariin.value
        }
    }

    localStorage.setItem("users",JSON.stringify(users))
    userForm.reset()
    editIndex.value = ""
    renderUsers()

})


function editUser(index){
const user = users[index];
fullname.value = user.fullname
age.value = user.age
gender.value = user.gender
phone.value = user.phone
city.value = user.city
fariin.value = user.fariin

editIndex.value = index
}

function deleteUser(index){
    const confirmDelete = confirm(
        "ma hubaa inaad saarayso..."
    )
    if(!confirmDelete) return
    users.splice(index ,1);
    localStorage.setItem(
        "users",
        JSON.stringify(users)
    )
    renderUsers();
}



logout.addEventListener("click",()=>{
    localStorage.removeItem("isLoggedIn")
    window.location.href = "index.html"
    
})


renderUsers();



