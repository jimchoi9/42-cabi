document.addEventListener("DOMContentLoaded", () => {
  //페이지가 로딩 되었을 때
  let inputBox = document.getElementById("inputField"); //입력창
  let addButton = document.getElementById("addToDo"); //입력버튼
  let todolist = document.getElementById("todolist"); //리스트

  const addlist = () => {
    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var list = document.createElement("ul");
    var button = document.createElement("button");
    var checkBox = document.createElement("input");
    div1.className = "to-dos";
    div1.setAttribute("id", "toDoList");
    div2.className = "box";
    button.type = "button";
    button.innerHTML = "X";
    button.className = "delButton";
    checkBox.type = "checkbox";
    checkBox.className = "checkBox";

    var checked = checkBox.checked;

    if (inputBox.value == "") alert("할 일을 입력해주세요!");
    else {
      list.innerText = inputBox.value; // <li>입력된 할 일</li>
      div2.appendChild(list);
      div2.appendChild(button);
      div1.appendChild(div2);
      div1.appendChild(checkBox);
      todolist.appendChild(div1);
      inputBox.value = ""; // 할 일 입력창 초기화
    }

    checkBox.addEventListener("click", function () {
      //줄긋기
      if (checkBox.checked) {
        list.style.textDecoration = "line-through";
      } else {
        list.style.textDecoration = "none";
      }
    });
    button.addEventListener("click", function () {
      //삭제
      todolist.removeChild(div1);
    });
  };
  addButton.addEventListener("click", addlist);

  inputBox.addEventListener("keypress", (event) => {
    //엔터키로 입력
    const ENTER = 13;
    if (event.keyCode == 13) {
      addlist();
    }
  });
});
