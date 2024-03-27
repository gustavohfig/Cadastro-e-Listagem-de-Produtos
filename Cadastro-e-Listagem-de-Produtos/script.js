document.addEventListener('DOMContentLoaded', function () {
    const productForm = document.getElementById('productForm');
    const productList = document.querySelector('#productList tbody');
    const addProductBtn = document.getElementById('addProductBtn');
  
    function addProductToTable(productName, productValue) {
      const newRow = document.createElement('tr');
      newRow.innerHTML = `
        <td>${productName}</td>
        <td>R$ ${productValue.toFixed(2)}</td>
      `;
      productList.appendChild(newRow);
    }

    productForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const productName = document.getElementById('productName').value;
      const productDescription = document.getElementById('productDescription').value;
      const productValue = parseFloat(document.getElementById('productValue').value);
      const productAvailability = document.getElementById('productAvailability').value;
  
      if (productName && productDescription && productValue && productAvailability) {
        addProductToTable(productName, productValue);
        productForm.reset();
      } else {
        alert('Por favor, preencha todos os campos.');
      }
    });
  
    addProductBtn.addEventListener('click', function () {
      productForm.scrollIntoView({ behavior: 'smooth' });
      productForm.reset();
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    const addProductBtn = document.getElementById('addProductBtn');
    const productForm = document.getElementById('productForm');
  
    addProductBtn.addEventListener('click', function () {
      productForm.scrollIntoView({ behavior: 'smooth' });
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    const productList = document.getElementById('productList');
  
    productList.addEventListener('click', function (event) {
      const target = event.target;
     
      if (target.tagName === 'TD') {
        const productName = target.parentNode.cells[0].innerText; 
        const productAvailability = target.parentNode.dataset.available; 
  
        if (productAvailability === 'sim') {
          alert(`O produto "${productName}" está disponível para venda.`);
        } else {
          alert(`O produto "${productName}" não está disponível para venda.`);
        }
      }
    });
  
    function addProductToTable(productName, productValue, productAvailability) {
      const newRow = document.createElement('tr');
      newRow.innerHTML = `
        <td>${productName}</td>
        <td>R$ ${productValue.toFixed(2)}</td>
      `;
      newRow.dataset.available = productAvailability; 
      productList.querySelector('tbody').appendChild(newRow);
    }
  
    addProductToTable('Produto 1', 19.99, 'sim');
    addProductToTable('Produto 2', 29.99, 'nao');
    addProductToTable('Produto 3', 39.99, 'sim');
  });
  
  