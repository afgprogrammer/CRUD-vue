const saveUser = (user) => {
    let users = getUsers(new URLSearchParams(window.location.search)) || []

    users.push(user)

    localStorage.setItem("users", JSON.stringify(users))
}

const editUser = (email, user) => {
    let users = getUsers()
    users.forEach((localUser, index) => {
        if (localUser.email === email) {
            return users[index] = user
        }
    })

    localStorage.setItem("users", JSON.stringify(users))
}

const removeUser = (user) => {
    // @TODO implement remove user form localStorage
}

const getUsers = (filters) => {
    let users = JSON.parse(localStorage.getItem("users"));
    let result = []

    if (filters.get("search") != null && filters.get("search").length > 0) {
        let nameSearch = filters.get("search").split(",")

        nameSearch.forEach((item) => {
            let x = users.filter((user) => user.name.includes(item))
            result = [...result, ...x]
        })
    }

    if (filters.get("age") != null) {
        let ageRange = filters.get("age").split("-")
        let [min, max] = ageRange
        
        let y = users.filter((user) => {
            return parseInt(user.age) >= (min === '' ? 0 : parseInt(min)) && parseInt(user.age) <= parseInt(max)
        })

        result = [...result, ...y]
    }

    if (filters.get("age") === null && filters.get("search") === null)
        result = users

    return result
}

const getUserByEmail = (email) => {
    let users = getUsers()

    let user = users.filter((user) => user.email === email)
        user = new User().fromJSON(user[0])

    return user
}

export {
    saveUser,
    editUser,
    removeUser,
    getUsers,
    getUserByEmail
};
