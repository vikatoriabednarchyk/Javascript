function foobar(users){
    for (let user of users){
        document.write(`<div>${user.id} ${user.name} ${user.age}</div>`)
    }
}
foobar([
    {id: 1, name: 'John', age: 40},
    {id: 2, name: 'Mary', age: 30},
    {id: 3, name: 'Kate', age: 40},
    {id: 4, name: 'Maria', age: 60},
    {id: 5, name: 'Danya', age: 10}
])