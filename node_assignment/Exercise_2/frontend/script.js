const api = "http://localhost:3000"

const searchInput = document.getElementById("searchUser")
const suggestions = document.getElementById("suggestions")

searchInput.addEventListener("keyup", async () => {

    const query = searchInput.value

    const res = await fetch(`${api}/users/search?username=${query}`)

    const data = await res.json()

    suggestions.innerHTML = ""

    data.forEach(user=>{
        const li = document.createElement("li")
        li.textContent = user.username
        suggestions.appendChild(li)
    })

})

async function loadStudents(){

    const res = await fetch(`${api}/students`)

    const students = await res.json()

    displayStudents(students)
}

function displayStudents(students){

    const table = document.getElementById("studentTable")

    table.innerHTML=""

    students.forEach(student=>{

        const row = document.createElement("tr")

        row.innerHTML = `
        <td>${student.id}</td>
        <td>${student.name}</td>
        <td>${student.branch}</td>
        <td>
        <button onclick="deleteStudent(${student.id})">Delete</button>
        </td>
        `

        table.appendChild(row)

    })
}

async function deleteStudent(id){

    await fetch(`${api}/students/${id}`,{
        method:"DELETE"
    })

    loadStudents()
}

const filter = document.getElementById("branchFilter")

filter.addEventListener("change", async ()=>{

    const branch = filter.value

    const res = await fetch(`${api}/students`)

    const students = await res.json()

    const filtered = branch
        ? students.filter(s => s.branch === branch)
        : students

    displayStudents(filtered)

})

loadStudents()