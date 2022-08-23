

const cartArray = [];
function getVal() {
  const val = document.querySelector('input').value;
  return val;
}
function display(cartProduct) {
  console.log(cartProduct);
  const tableBody = document.getElementById("cart-playerName");
  tableBody.innerHTML = "";
  for (let i = 0; i < cartProduct.length; i++) {
    // console.log(cartArray[i].playerName);
    const name = cartArray[i].playerName;

    const tr = document.createElement("tr");

    tr.innerHTML =
      `<th>${i + 1}</th>
    <td>${name}</td>`;
    tableBody.appendChild(tr);

  }
}

let count = 0;
function select(element) {

  // console.log(element.parentNode.parentNode.children[0].innerText)

  const playerName = element.parentNode.parentNode.children[0].innerText;


  const playerObj = {
    playerName: playerName
  }
  if (count < 5) {
    cartArray.push(playerObj);
    const playerName1 = element.parentNode.parentNode.children[2].querySelectorAll("div.card-actions button")[0].disabled = true;
  }
  else {
    alert("You can't select 5 more player")
  }



  // console.log(cartArray.length);
  document.getElementById("total-selected-player").innerText = cartArray.length;
  if (cartArray.length > 0) {
    document.getElementById("total-cost-player").innerText = cartArray.length * Number(getVal());
  }


  display(cartArray);
  count++;
}
if (cartArray.length === 0) {
  document.getElementById("total-cost-player").innerText = getVal();
}





