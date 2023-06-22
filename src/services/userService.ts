import User from "../interfaces/User";

export let users: User[] = [
{
    name: "seva",
    email: "seva@gmail.com",
    password:"12345678"
},
{
    name: "seva1",
    email: "seva1@gmail.com",
    password: "01234567"
}
]
export function findUser(userToCheck: User): boolean {
    let user = users.find(
        (user) =>(user.email) == userToCheck.email && user.password == userToCheck.password
    );
    return user != undefined;
}