alert('Первая часть');
var number = prompt('Введите число, которое нужно возвести в степень', 0);
var grad = prompt('Введите степень', 0);
var resault = Math.pow(number, grad); 
console.log('Результат возведения в степень = ', resault);

alert('Вторая часть!');
var arr = [];
arr.length = prompt('Введите количество персонала', 5);
console.log(arr.length);
for (var i = 0; i < arr.length; i++) {
    arr[i] = prompt('Введите имя сотрудника');
    console.log(arr);
}
alert('Спабо за предоставленную информацию');
var name =prompt('Введите Ваше имя');
for (i = 0; i < arr.length; i++) {
    if (arr[i] == name){
        
       var check = 1;
        break;
    } else {
    check = 0;
    }
}
if (check == 1){
    alert( name + ', вы успешно вошли' );
} else {
    alert('Сотрудника с именем ' + name + ' нет в базе');
}
