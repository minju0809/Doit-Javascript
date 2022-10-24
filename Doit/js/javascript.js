// // 이름 입력 시 보여주기
// let name = prompt("이름을 입력하세요.");
// document.write("<h1>어서오세요</h1>");
// document.write("<b><big>" + name + "</big></b>님, 환영합니다.<br /><br />");

// // 클릭 시 글자 색 변경하기
// let heading = document.querySelector('#heading');
// heading.onclick = function(color) {
//     heading.style.color = "red";
// }

// // 현재 시간 나타내기
// let now = new Date();
// let display = now.toLocaleTimeString();
// document.write("<h1>현재 시각</h1>");
// document.write("현재 시각은 " + display + " 입니다.<br /><br />");

// 현재 시간 나타내기2
document.write('<p id="current" class="display"></p>');
setInterval(displayNow, 1000);  // 1초마다 시간 계산 함수 실행

function displayNow() {  // 시간 계산 함수
  var now = new Date();     // Date 객체의 인스턴스를 만듦      
  var currentTime = now.toLocaleTimeString();     //  toLocaleTmeString() 메서드를 사용해 지역에 맞는 시간을 가져옴

  document.querySelector("#current").innerHTML = currentTime;   // id="current" 인 요소에 현재 시간 표시
}

// // 나이 계산하기
// function calc() {
//     let currentYear = 2022;
//     let birthYear = prompt("태어난 연도를 입력하세요.","YYYY");;
//     let age;
//     age = currentYear - birthYear + 1;
//     document.querySelector("#result").innerHTML = "당신의 나이는 " + age + "세입니다.";
// }

// // 짝수끼리 더하기
// document.write("<h1>짝수끼리 더하기</h1>");

// let n = 10;
// let sum = 0;

// for(let i = 1; i <= n; i++) {
//     if (i % 2 == 1) {
//         continue
//     }
//     sum += i;

//     document.write(i + " ------ " + sum + "<br /><br />");
// }

// // 팩토리얼 계산하기
// let n = prompt("숫자를 입력하세요.");
// let nFact = 1;
// let i = 2;

// while(i <= n) {
//     nFact *= i;
//     i++;
// }

// document.write(n + "!= " + nFact + "<br /><br />");

// // 구구단
// document.write("<h1>구구단</h1>");
// for(let i = 2; i <= 9; i++) {
//     document.write("<div class='gugudan_div'>");
//     document.write("<h3 class='gugudan_h3'>" + i + "단</h3>");
//     for (let j = 1; j <= 9; j++) {
//         document.write(i +" X " + j + " = " + i * j + "<br>");
//     }
//     document.write("</div>");
// }

// // 3의 배수인지 확인
// let userNumber = prompt("숫자를 입력하세요.");
// let displayArea =	document.querySelector('#result');

// if(userNumber != null) {  // '취소' 버튼을 클릭하지 않았다면
// if (userNumber % 3 === 0) {
//     displayArea.innerHTML = userNumber + "은 3의 배수입니다.";
// }
// else {
//     displayArea.innerHTML = userNumber + "은 3의 배수가 아닙니다.";
// }
// }
// else { // '취소' 버튼을 클릭했다면
// alert("입력이 취소됐습니다.");
// }

document.write("<h1>3의 배수는 몇 개?</h1>");

var count = 0;

for(i=1; i<=100; i++) {
    if (i % 3 == 0) {
        count++;
        document.write(i + ", ");
    }
}
document.write("<p>3의 배수의 갯수 : ", count + "</p>");

// 홀수인지 짝수인지
// document.write("<h2>짝수일까, 홀수일까</h2>");

// var userNumber = prompt("숫자를 입력하시오.");

// if (userNumber != null) {
//   if (userNumber % 2 == 0) document.write(userNumber + "는 짝수입니다.");
//   else document.write(userNumber + "는 홀수입니다.<br /><br />");
// }

// 세션 선택
// let session = prompt("관심 세션을 선택해 주세요. 1-마케팅, 2-개발, 3-디자인","1");

// switch(session) {
//     case "1" : document.write("<p>마케팅 세션은 <strong>201호</strong>에서 진행됩니다.</p>");
//         break;
//     case "2" : document.write("<p>개발 세션은 <strong>203호</strong>에서 진행됩니다.</p>");
//         break;
//     case "3" : document.write("<p>디자인 세션은 <strong>205호</strong>에서 진행됩니다.</p>");
//         break;
//     default: alert("잘못 입력했습니다.");
// }

// 사각형의 너비 구하기
// var width = prompt("사각형의 가로 값: ");
// var height = prompt("사각형의 세로 값: ");
// var square = width * height;

// alert("주어진 사각형의 너비: " + square);

// 입력 내용 표시하기
// var contents = prompt("내용 입력: ");
// document.write(contents);

// for문 반복
var sum = 0;

for (var i = 1; i < 6; i++) {
  sum += i;
}
document.write("1부터 5까지 더하면 " + sum + "<br /><br />");

// 중첩 for문
for (var i = 0; i < 30; i++) {
  document.write("*");
}
document.write("<br>");
for (i = 0; i < 30; i++) {
  document.write("*");
}
document.write("<br>");
for (i = 0; i < 30; i++) {
  document.write("*");
}
document.write("<br>");
for (i = 0; i < 30; i++) {
  document.write("*");
}
document.write("<br>");
for (i = 0; i < 30; i++) {
  document.write("*");
}

document.write("<br><br>");

for (var k = 0; k < 5; k++) {
  for (var i = 0; i < 30; i++) {
    document.write("*");
  }
  document.write("<br>");
}
