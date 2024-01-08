// let floor = document.getElementById("floor");
const list = document.querySelectorAll("#floor li");

list.forEach((item) => {
  item.addEventListener("click", function () {
    // 이전에 클릭한 항목의 'clicked' 클래스 제거
    document.querySelectorAll("#floor li.clicked").forEach((clickedItem) => {
      clickedItem.classList.remove("clicked");
    });

    // 현재 클릭한 항목에 'clicked' 클래스 추가
    this.classList.add("clicked");
  });
});
