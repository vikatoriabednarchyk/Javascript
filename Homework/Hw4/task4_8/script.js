function foobar(array){
    document.write(`<ul>`)
    for (let item of array){
        document.write(`<li>${item}</li>`)
    }
    document.write(`</ul>`);
}
foobar(['hello', 50, true])