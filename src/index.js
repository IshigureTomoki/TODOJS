import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  const li = document.createElement("li");
  const div = document.createElement("div");
  div.className = "list-row";

  const p = document.createElement("p");
  p.className = "list";
  p.innerText = inputText;

  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";

  completeButton.addEventListener("click", () => {
    //完了ボタンの親の親のタグを未完了リストから削除
    deleteFromIncompleteList(completeButton.parentNode.parentNode);

    //完了リストに追加する要素
    const addTarget = completeButton.parentNode.parentNode;
    const text = addTarget.firstChild.firstChild.innerText;

    addTarget.firstChild.textContent = null;

    const p = document.createElement("p");
    p.className = "list";
    p.innerText = text;

    const backButton = document.createElement("button");
    backButton.innerText = "戻す";

    addTarget.firstChild.appendChild(p);
    addTarget.firstChild.appendChild(backButton);

    document.getElementById("comp").appendChild(addTarget);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    deleteFromIncompleteList(deleteButton.parentNode.parentNode);
  });

  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  li.appendChild(div);

  document.getElementById("im").appendChild(li);
};

//未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("im").removeChild(target);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
