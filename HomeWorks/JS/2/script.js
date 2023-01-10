// 1) Створити цикл на 10 ітерацій. На кожній ітерації якщо i парне, то вивести в консоль слово Fiz, якщо i не парне, то вивести в консоль слово Buz, якщо i кротну цифру 3, то вивести FizBuz.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log('Fiz');
    }
    if (i % 2 == 1) {
        console.log('Buz')
    }
    if (i % 2 != 0 && i % 2 != 1) {
        console.log('FizBuz') //не знаю как это сделать
    }
  }


// 2) Написати логіку знаходження факторіалу числа 10.

function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
  }
  
  console.log( factorial(10) ); // 3628800


// 3) У пачці паперу 500 аркушів. За тиждень в офісі витрачається 1200 аркушів. Яку найменшу кількість пачок потрібно купити в офіс на 8 тижнів?

let paper = Number(500);
let need = Number(1200);
let time = Number(8);

const packs = (Math.ceil(time * need / paper));

console.log (packs); //20


// 4) Створити функцію, яка виведе у консоль номер поверху та номер під'їзду за номером квартири. Поверхів у нас 9, квартир на поверсі по 3

let floor = Number(9);
let appOnFloor = Number(3);
let entranceApp = (floor * appOnFloor); //27
const app = prompt ('номер квартиры', "");
let entranceNumber = (Math.ceil(app / entranceApp));
console.log(entranceNumber);
let floorNumber = (Math.floor(((entranceNumber-1)*entranceApp-app)/appOnFloor)*-1);
console.log(floorNumber);

// 5) Вивести у консоль піраміду. Змінна вказує кількість рядків, з яких побудується піраміда. Піраміда повинна будуватися в однаковому візуальному вигляді між собою, але строго враховуючи кількість рядків

for(var x = 0; x < 10; x++){ 
    var str = ""; 
    for(var y = 0; y <= x; y++){ 
        str += "$"; } 
    console.log(str); }


