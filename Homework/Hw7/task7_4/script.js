function Client (id, name, surname, email, phone, order){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}
let clients = [
    new Client(1, 'vika', 'bednarchyk', 'vika12@gmail.com', '+392930943', ['shampoo', 'shower gel' ]),
    new Client(2, 'nastya', 'gyl', 'nastya11@gmail.com', '+330230930', ['powder', 'shadows']),
    new Client(3, 'natalya', 'kachmaryk', 'natalya11@gmail.com', '+30940392490', ['nail', 'brush']),
    new Client(4, 'lera', 'kindzerska', 'lera11@gmail.com', '+349302039', ['shower gel', 'nail']),
    new Client(5, 'roman', 'kalnytskiy', 'roman11@gmail.com', '+3040349039', ['book', 'soap']),
    new Client(6, 'halya', 'ahdryhiv', 'halya11@gmail.com', '+3040934933', ['tea', 'coffe']),
    new Client(7, 'vasylyna', 'figel', 'vasylyna11@gmail.com', '+344903043', ['powder', 'lush']),
    new Client(8, 'julia', 'trembach', 'julia11@gmail.com', '+3040434930', ['spf', 'toner']),
    new Client(9, 'oksana', 'bila', 'oksana11@gmail.com', '+44033980430', ['cream', 'soap']),
    new Client(10, 'vika', 'litvinova', 'vika12@gmail.com', '+4934983293', ['shadows', 'lush'])
]
clients.forEach(clients =>
    console.log(`${clients.id}. ${clients.name} ${clients.surname} ${clients.email} ${clients.phone} ${clients.order}`));