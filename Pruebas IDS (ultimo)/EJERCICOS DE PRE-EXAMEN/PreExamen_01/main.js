let transactions = [];
let transactionCount = 0;

function realizarCompra() {
  const selectedProduct = document.querySelector('input[name="product"]:checked').value;
  const productPrice = getPrice(selectedProduct);

  // Mostrar sección de ingreso de monedas
  document.getElementById('paymentSection').style.display = 'block';
  document.getElementById('changeSection').style.display = 'none';
  document.getElementById('summary').style.display = 'none';

  // Reiniciar variables para nueva transacción
  currentTransaction = {
    product: selectedProduct,
    price: productPrice,
    coins: [],
    change: []
  };
  transactions.push(currentTransaction);
}

function getPrice(product) {
  switch (product) {
    case 'A':
      return 270;
    case 'B':
      return 340;
    case 'C':
      return 390;
    default:
      return 0;
  }
}

function ingresarMoneda() {
  const coinValue = parseInt(document.getElementById('coinInput').value);
  if ([10, 50, 100].includes(coinValue)) {
    currentTransaction.coins.push(coinValue);
    const totalEntered = currentTransaction.coins.reduce((acc, curr) => acc + curr, 0);
    if (totalEntered >= currentTransaction.price) {
      calcularCambio(totalEntered);
    }
  }
  document.getElementById('coinInput').value = '';
}

function calcularCambio(totalEntered) {
  const changeAmount = totalEntered - currentTransaction.price;
  let remainingChange = changeAmount;

  while (remainingChange > 0) {
    if (remainingChange >= 100) {
      currentTransaction.change.push(100);
      remainingChange -= 100;
    } else if (remainingChange >= 50) {
      currentTransaction.change.push(50);
      remainingChange -= 50;
    } else if (remainingChange >= 10) {
      currentTransaction.change.push(10);
      remainingChange -= 10;
    }
  }

  mostrarCambio();
}

function mostrarCambio() {
  const changeList = document.getElementById('changeOutput');
  changeList.innerHTML = '';
  currentTransaction.change.forEach(coin => {
    const li = document.createElement('li');
    li.textContent = `${coin}`;
    changeList.appendChild(li);
  });

  document.getElementById('changeSection').style.display = 'block';
  document.getElementById('paymentSection').style.display = 'none';
  document.getElementById('summary').style.display = 'none';
}

function reset() {
  document.getElementById('changeSection').style.display = 'none';
  document.getElementById('paymentSection').style.display = 'none';
  document.getElementById('summary').style.display = 'block';
  transactionCount++;

  const summaryList = document.getElementById('summaryList');
  const li = document.createElement('li');
  li.textContent = `Transacción ${transactionCount}: Producto ${currentTransaction.product}, Precio: ${currentTransaction.price}, Cambio: ${currentTransaction.change.join(', ')}`;
  summaryList.appendChild(li);

  // Reiniciar para una nueva compra
  currentTransaction = null;
}

let currentTransaction = null;