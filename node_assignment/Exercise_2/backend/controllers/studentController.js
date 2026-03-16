let students = [
    {id:1,name:"Harsh",branch:"CSE"},
    {id:2,name:"Aman",branch:"ECE"},
    {id:3,name:"Dhruv",branch:"CSE"},
    {id:4,name:"Anuj",branch:"ME"}
]

exports.getStudents = (req,res)=>{
    res.json(students)
}

exports.deleteStudent = (req,res)=>{
    const id = parseInt(req.params.id)

    students = students.filter(s => s.id !== id)

    res.json({message:"Student deleted"})
}