let foobar = (users) => {
    for (let user of users){
        document.write(`<div> ${user.id}, ${user.name}, ${user.age} </div>`);
    }
}
foobar([{id: 1, name: 'John', age: 40}])