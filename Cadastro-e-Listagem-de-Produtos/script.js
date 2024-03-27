document.addEventListener('DOMContentLoaded', function () {
    const productForm = document.getElementById('productForm');
    const productList = document.querySelector('#productList tbody');
    const addProductBtn = document.getElementById('addProductBtn');
    const removeProductBtn = document.getElementById('removeProductBtn');
    let selectedRow = null; // Variável para armazenar a linha selecionada

    function addProductToTable(productName, productValue, productAvailability) {
      const newRow = document.createElement('tr');
      newRow.innerHTML = `
        <td>${productName}</td>
        <td>R$ ${productValue.toFixed(2)}</td>
        <td>${productAvailability}</td>
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
        addProductToTable(productName, productValue, productAvailability);
        productForm.reset();
      } else {
        alert('Por favor, preencha todos os campos.');
      }
    });
  
    addProductBtn.addEventListener('click', function () {
      productForm.scrollIntoView({ behavior: 'smooth' });
      productForm.reset();
    });

    removeProductBtn.addEventListener('click', function () {
      if (selectedRow) {
        productList.removeChild(selectedRow);
      } else {
        alert('Por favor, selecione um produto para remover.');
      }
    });

    addProductToTable('Produto 1', 19.99, 'sim');
    addProductToTable('Produto 2', 29.99, 'nao');
    addProductToTable('Produto 3', 39.99, 'sim');

    // Adicionando evento de clique na tabela para selecionar o produto
    productList.addEventListener('click', function(event) {
      const target = event.target;

      // Verifica se o elemento clicado é uma célula da tabela
      if (target.tagName === 'TD') {
        // Remove a seleção de outros produtos
        if (selectedRow) {
          selectedRow.classList.remove('selected');
        }

        // Adiciona a classe 'selected' à linha do produto selecionado
        const productRow = target.parentNode;
        productRow.classList.add('selected');
        selectedRow = productRow; // Atualiza a variável com a linha selecionada
      }
    });

    // Adicionando ouvinte de eventos para remover a seleção quando clicar em qualquer lugar fora da tabela
    document.addEventListener('click', function(event) {
      const isClickInsideTable = productList.contains(event.target);
      if (!isClickInsideTable && selectedRow) {
        selectedRow.classList.remove('selected');
        selectedRow = null; // Limpa a variável da linha selecionada
      }
    });
  });
