let inputBox = document.getElementById("inputField"); //id를 통해 접근
let addToDo = document.getElementById("addToDo");
// let toDoList = document.getElementById("toDoList");
let todolist = document.getElementById("todolist");

inputBox.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    addTodo();
  }
});

addToDo.addEventListener("click", function () {
  // 버튼에 클릭 이벤트가 발생하면

  var div1 = document.createElement("div"); // html 'li' 태그 만들기
  var div2 = document.createElement("div"); // html 'li' 태그 만들기
  var list = document.createElement("ul"); // html 'li' 태그 만들기
  var button = document.createElement("button");
  var checkBox = document.createElement("input");
  // var br = document.createElement("br");
  div1.className = "to-dos";
  div1.setAttribute("id", "toDoList");
  div2.className = "box";
  button.type = "button";
  button.innerHTML = "X";
  button.className = "delButton";
  checkBox.type = "checkbox";
  checkBox.className = "checkBox";

  var checked = checkBox.checked;

  if (!inputBox.value)
    // 할 일 입력창에 내용이 입력되지 않으면 alert 발생
    alert("내용을 입력해 주세요!");
  else {
    list.innerText = inputBox.value; // <li>입력된 할 일</li>
    div2.appendChild(list);
    div2.appendChild(button);
    // div1.appendChild(list);
    // div1.appendChild(button);
    div1.appendChild(div2);
    div1.appendChild(checkBox);
    todolist.appendChild(div1);

    // toDoList.append(div,list, button, checkBox); // 할 일 리스트창에 자식으로 붙이기
    // toDoList.appendChild(button); // 할 일 리스트창에 자식으로 붙이기
    // toDoList.appendChild(checkBox); // 할 일 리스트창에 자식으로 붙이기
    // toDoList.appendChild(br); // 할 일 리스트창에 자식으로 붙이기

    inputBox.value = ""; // 할 일 입력창 초기화
  }
  button.addEventListener("click", function () {
    todolist.removeChild(div1);

    // toDoList.removeChild(list);
    // toDoList.removeChild(button);
    // toDoList.removeChild(checkBox);
  });
  // checkBox.addEventListener("click", function () {
  //   // 만들어진 list에 클릭 이벤트가 발생하면 줄 긋기
  //   if (checked == true) {
  //     list.style.textDecoration = "line-through";
  //   } else {
  //     list.style.textDecoration = "none";
  //   }
  // });
  checkBox.addEventListener("click", function () {
    if (checkBox.checked) {
      list.style.textDecoration = "line-through";
    } else {
      list.style.textDecoration = "none";
    }
  });
});

// addToDo.addEventListener("click", function () {
//   var button = document.createElement("button");

//   button.type = "button";
//   button.innerHTML = "삭제";
//   button.className = "delButton";
// });
