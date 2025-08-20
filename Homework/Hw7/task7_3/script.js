function User (id, name, surname, email, phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let users = [
    new User(1, 'vika', 'bednarchyk', 'vika11@gmail.com', '+3029381032'),
    new User(2, 'natalya', 'gyl', 'natalya11@gmail.com', '+30992320391'),
    new User(3, 'katya', 'bila', 'katya11@gmail.com', '+3801903031'),
    new User(4, 'maria', 'voloshyn', 'maria11@gmail.com', '+3898192033'),
    new User(5, 'anna', 'kalnytska', 'anna11@gmail.com', '+3920931033'),
    new User(6, 'oleg', 'petrov', 'oleg11@gmail.com', '+332920134'),
    new User(7, 'kolya', 'figel', 'kolya11@gmail.com', '+3302934290'),
    new User(8, 'danya', 'kovernyk', 'danya11@gmail.com', '+2930232223'),
    new User(9, 'roman', 'sabara', 'roman11@gmail.com', '+3203902902'),
    new User(10, 'alisa', 'savchyn', 'alisa11@gmail.com', '+93290303932')
];

let sortedUsers = users.sort((u1,u2) => {
    return u1.id - u2.id;
})
console.log(sortedUsers);