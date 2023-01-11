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



// 5) Вивести у консоль піраміду. Змінна вказує кількість рядків, з яких побудується піраміда. Піраміда повинна будуватися в однаковому візуальному вигляді між собою, але строго враховуючи кількість рядків

for(let x = 0; x < 10; x++){ 
    let str = ""; 
    for(let y = 0; y <= x; y++){ 
        str += "$"; } 
        console.log(str); }
        
        
        
        // 4) Створити функцію, яка виведе у консоль номер поверху та номер під'їзду за номером квартири. Поверхів у нас 9, квартир на поверсі по 3
        // let apps = 3*9;
        // let input = prompt ('input appartmet');
        // function Entrance (apps, input){
        //     return input / apps;
        // }
        // let result = Entrance (apps, input)
        
        // console.log('entrance:', Math.ceil(result));
        
        // function Floor (input, result, apps){
        //     return (input-(result-1)*apps)/3;
        // }
        // let result2 = Floor (input, result, apps)
        // console.log ('floor:', result2)
       


function toEntAndFloor(totalApp) {
    
    const Entrance = Math.ceil(totalApp /27);
    const Floor = Math.ceil(totalApp %27/3);
    
    return `Подъезд-${Entrance} Этаж-${Floor}`;
}



console.log(toEntAndFloor(12)); 
console.log(toEntAndFloor(32)); 
console.log(toEntAndFloor(300)); 
console.log(toEntAndFloor(243)); 
console.log(toEntAndFloor(13)); 
console.log(toEntAndFloor(27)); 
