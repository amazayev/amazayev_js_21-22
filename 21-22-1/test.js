
var x = +prompt ('Введите число');
var n = +prompt ('Введите степень');

  describe("pow", function() {

    function makeTest(x) {
      var expected = Math.pow(x, n);
      it("при возведении " + x + " в степень " + n + "результат: " + expected, function() {
        assert.equal(pow(x, n), expected);
      });
    }
      makeTest(x);
  });
