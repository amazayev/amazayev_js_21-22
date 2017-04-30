
var x = +prompt ('Введите число');
var n = +prompt ('Введите степень');

function pow (x, n) {
   var result = x;

   for (var i = 1; i < n; i++) {
      result *= x;
   }

return result;
}

alert('Результат возведения в степень = ' + Math.pow (x, n) );
