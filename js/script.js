const cartArray = [];

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
function select(element) {

  console.log(element.parentNode.parentNode.children[0].innerText)

  const playerName = element.parentNode.parentNode.children[0].innerText;
  // console.log(playerName)
  const playerObj = {
    playerName: playerName
  }
  cartArray.push(playerObj);

  // console.log(playerObj)
  // console.log(cartArray.length);
  document.getElementById("total-selected-player").innerText = cartArray.length;
  display(cartArray);
}


