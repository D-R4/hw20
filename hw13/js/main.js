//создаем константу
/*const birthday = '14.07.2005';
//используем тип данных string
//при попытке изменить содержимое const выдает ошибку
console.log(birthday);


//используем тип данных number
let p = 3.14;
console.log(p)

let name = prompt('Имя')
let addres = prompt('Где живете');
let phone = prompt('Телефон:');


let student = 'Maga Aduev';
let adres = 'Goygova 17';
let tele = +79364782621
console.log(`Студент:${student},адрес:${adres},номер телефона:${tele}`);

//программа
let $ = 58;
let stockRu = 3558;
console.log(stockRu/$);

let a = 5;
let b = 10;
b = 9
c = ++ a + b --;
console.log(c);
*/

/*const a = 7;

if(a<10){
    console.log('константа меньше 10');
} else{
    console.log('константа больше 10')
}

let aa = 12;
let bb = 17;
let cc = 15;

let end = aa < 17 && bb < 17 ? 'yes' : 'no'
console.log(end);



let type = 'vn'
switch(type){
    case('vn1') :
    console.log(vn1);
    break;

    case('vn2') :
    console.log('vn2');
    break;

    case('vn') :
    console.log('vn');
    break;
}

// дополнительные задания по усл опер
let x = 10;
let y = 7;
let end = x > y ? 'x больше, чем y' : 'x не больше, чем y'
console.log(end);


let num = prompt("Введите число");

if(num % 2 == 0){
    alert( 'Число ${ num} четное');
}else{
    alert('Число ${num} нечетное')
}

let num1 = prompt('Введите число')
let num2 = prompt('Введите число')
let num3 = prompt('Введите число')

if(num1 >= num2 && num1 >= num3){
    alert(num1 +  " максимальное число");
}else if(num2 >= num1 && num2 >= num3){
    alert(num2 +  " максимальное число");
}else if(num3 >= num1 && num3 >= num2){
    alert(num3 +  " максимальное число")
}

//дз
function sendNum(a){
    
    if(a < 10){
        console.log('константа меньше 10')
    }else{
        console.log('константа не меньше 10')
    }
}
sendNum(12)


function showMessage(){
    alert("Привет, мир");
}
showMessage()

function message(a){
    console.log(a)
}
message('JavaScript')



let text = "flyEmirate"
function compare(){
    
    if(text === "lorem"){
        console.log('ошибка');
    }else{
        console.log(`содержимое переменной: ${text}`);
    }
}
compare()

let name = 'Ибрагим';//string    

const age = 18; //number

if(age < 15){
    console.log('доступ запрещен');
}else{
    console.log(`Привет, ${name}`);
}


function  viewMoney() {
    console.log( 'Вот вам 10$')
}
viewMoney()

function getMoney(cash) {
    return(`вот вам ${cash}$`)
}
getMoney(222)



function square(x) {
    console.log(x**2);
    
}
square(7)

function max(q, w, e) {
    if(q >= w && q >= e){
        console.log(q + " максимальное число");
    }else if(w >= q && w >= e){
        console.log(w + " максимальное число");
    }else{
        console.log(e + " максимальное число");
    }
}
max(11,9,17)


function diskr(a, b, c){
    console.log(b**2 - 4*a*c);
}
diskr(2,4,14)


function twoNum(aa, bb) {
    if(aa % 2 == 0 && bb % 2 ==0){
        console.log(aa*bb);
    }else if(aa %2 !== 0 && bb % 2 !== 0){
        console.log(aa + bb);
    }else if(aa || bb % 2 !== 0){
        console.log(aa || bb);
    }
    
}
twoNum(4,4);
twoNum(5,5);
twoNum(4,1);
twoNum(1,4);




let man = {
    name: "Ibrahim",
    surname: "Tsuev",
    growth: 184,
    login: "IbraTs",
    password: "TsuevIbragim",
    money$: 100000,
}

man.address = "Grozny"

let pass = prompt("Введите пароль");

function exam(){
    if(man.password === pass){
        console.log(`добро пожаловать ${man.name} ${ man.surname}` );
    }else{
        console.log(`Указанный пароль : "${pass}" не верен. Попробуйте еще раз`);
    }
    
}
exam()*/

/*let a = ['lorem', 123, true, 'ipsum'];
console.log(a.length);

console.log(a[a.length - 1]);
console.log(a[a.length - a.length]);

let em = [22, 'akva', 17, true, 'wolf'];
console.log(em);
em.unshift('ali', 5354, 'borz');   
em.shift();
em.pop();
em.pop();


let number = [1, 3, 5, 7, 9];
number[0] = number[0] + 1;
number[1] = number[1] + 1;
number[2] = number[2] + 1;
number[3] = number[3] + 1;
number[4] = number[4] + 1;
console.log(number);
number.splice(1, 3, '33', '44', '55');
// дз 19*/




//дз20

//forEach
let arr = [10, 2762, 0.42, 192, 3, 28, 1125, 2018, 34, 66, 100];

arr.forEach(function(item, key){
    if(item %2 == 1){
        console.log(item);
    }
})

let arr2 = ['lorem ipsum','javascript','php','css','react', 'git','html','mysql'];

arr2.forEach(function(item,key){
    if(item.length <= 4){
        console.log(item);
    }
})


//FILTER
let num =  [1, -3, 5, 6, -7, 8, 9, -11];

let num1 = num.filter(function(item,key){
    return item < 0
})
console.log(num1);

let num2 = [10, 2762, 0.42, 192, 3, 28, 1125, 2018, 34, 66, 100];
let num3 = num2.filter(function(item,key){
    return item %2 == 0
})
console.log(num3);

let string = ['lorem ipsum','javascript','php','css','react', 'git','html','mysql'];
let string1 = string.filter(function(item,key) {
    return item.length != 3
})
console.log(string1);


//MAP
let num5 = [5, 6, 7, 8, 9]
let num6 = num5.map(function(item,key){
    return item*item
})
console.log(num6);

let ms =  [
    {a: 10, b: 5},
    {a: 20, b: 22},
    {a: 131, b: 55}

]

let ms1 = ms.map(function(item,key){
    return item.a + item.b
})
console.log(ms1);

//REDUCE

let red = [-13, 0, 12, 1662, -0.32, -102, -2]
let red1 = red.filter(function(item,key){
    return item < 0
})//отбираем отриц числа
console.log(red1);
//складываем отобранные отриц числа
let result = red1.reduce(function(sum,item,key,arr){
    return sum + item
},0)
console.log(result);


let redu =  [ {x: 10, y: 'lorem'}, {x: 21, y: 'lorem'}, {x: -17, y: 'lorem'}, {x: 156, y: 'lorem'}]; 
let resultRedu = redu.reduce(function(sum, item, key,arr) {
    return sum + item.x 

},0)
console.log(resultRedu);












