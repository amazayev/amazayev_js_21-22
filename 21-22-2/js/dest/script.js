'use strict';

/////////////////////////////////////////////////////////////////////////////////
var answers1 = {
  answer1: 'correct',
  answer2: 'wrong',
  answer3: 'wrong'
};
var str1 = JSON.stringify(answers1);
console.log(str1);

var answers2 = {
  answer1: 'wrong',
  answer2: 'correct',
  answer3: 'wrong'
};
var str2 = JSON.stringify(answers2);
console.log(str2);

var answers3 = {
  answer1: 'wrong',
  answer2: 'wrong',
  answer3: 'correct'
};
var str3 = JSON.stringify(answers2);
console.log(str2);

/////////////////////////////////////////////////////////////////////////////////
$(function () {
  var html = $('#header').html();

  var header = [{
    title: 'Тест по программированию'
  }];

  var content = tmpl(html, {
    data: header
  });
  $('header').append(content);
});

////////////////////////////////////////////////////////////////////////////////

$(function () {
  var html = $('#question1').html();

  var question1 = [{
    title: 'Вопрос №1',
    content: 'Вариант ответа №'
  }];

  var content = tmpl(html, {
    data: question1
  });
  $('body .question1').append(content);
});

//////////////////////////////////////////////////////////////////////////////
$(function () {
  var html = $('#question2').html();

  var question2 = [{
    title: 'Вопрос №2',
    content: 'Вариант ответа №'
  }];

  var content = tmpl(html, {
    data: question2
  });
  $('body .question2').append(content);
});

////////////////////////////////////////////////////////////////////////////////
$(function () {
  var html = $('#question3').html();

  var question3 = [{
    title: 'Вопрос №3',
    content: 'Вариант ответа №'
  }];

  var content = tmpl(html, {
    data: question3
  });
  $('body .question3').append(content);
});

///////////////////////////////////////////////////////////////////////////////
$(function () {
  var html = $('#check').html();

  var check = [{
    content: 'Проверить свои результаты'
  }];

  var content = tmpl(html, {
    data: check
  });
  $('body .check').append(content);
});

/////////////////////////////////////////////////////////////////////////////////
$(function () {

  var $test = $('button');
  $test.on('click', function () {
    var counter = 0;
    if (q1.answer1[0].checked) counter++;
    if (q2.answer2[1].checked) counter++;
    if (q3.answer3[2].checked) counter++;

    $("input").prop("checked", false);
    var result = void 0;
    if (counter == "0") result = "ВСЕ ПЛОХО! УЧИТЕ ЕЩЕ";
    if (counter == "1") result = "УДОВЛЕТВОРИТЕЛЬНО";
    if (counter == "2") result = "ХОРОШО";
    if (counter == "3") result = "ВЕЛИКОЛЕПНО";

    alert(counter + " правильных ответов" + ". " + "Ваша оценка" + ": " + result);
  });
});
