function greeting(name) {
    console.log(`Привет, ${name}!`);
}
const userName = prompt("Введите ваше имя:");
if (userName) {
    greeting(userName);
} else {
    console.log("Вы не ввели имя.");
}





