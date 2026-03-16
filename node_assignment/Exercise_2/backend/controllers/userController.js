let users = []

exports.createUser = (req,res)=>{
    const {username,password,firstName,lastName} = req.body

    const user = {
        id: users.length + 1,
        username,
        password,
        firstName,
        lastName
    }

    users.push(user)

    res.json(user)
}

exports.searchUser = (req,res)=>{
    const query = req.query.username.toLowerCase()

    const result = users.filter(u =>
        u.username.toLowerCase().includes(query)
    )

    res.json(result)
}