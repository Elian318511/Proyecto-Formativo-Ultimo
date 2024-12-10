document.addEventListener('DOMContentLoaded', function () {
    const menuContent = document.getElementById('menuContent');
    const billItems = document.getElementById('billItems');
    const calculateTotalBtn = document.getElementById('calculateTotalBtn');
    const totalPriceElem = document.getElementById('totalPrice');
    let totalPrice = 0;

    // Menús de comidas y bebidas
    const foodMenu = `
        <div class="menu-item" data-name="Taco" data-price="1">
            <img src="images/taco.jpg" alt="Taco">
            <p>Taco - $1</p>
            <button class="add-to-bill">Añadir</button>
        </div>

<div class="menu-item" data-name="Taco" data-price="1">
            <img src="images/taco.jpg" alt="Taco">
            <p>Taco - $5</p>
            <button class="add-to-bill">Añadir</button>
        </div>


        <div class="menu-item" data-name="Enchilada" data-price="7">
            <img src="enchiladas.jpg" alt="Enchilada">
            <p>Enchilada - $7</p>
            <button class="add-to-bill">Añadir</button>
        </div>
    
         <!-- Nuevo platillo: Pescado a la Veracruzana -->
    <div class="menu-item" data-name="Pescado a la Veracruzana" data-price="12"> <!-- Aquí defines el nuevo platillo -->
        <img src="pescado-a-la-veracruzana.jpg" alt="Pescado a la Veracruzana"> <!-- Ruta de la imagen -->
        <p>Pescado a <br> la Veracruzana - $12</p> <!-- Nombre y precio del platillo -->
        <button class="add-to-bill">Añadir</button>
    </div>
`;


    const beveragesMenu = `
        <div class="menu-item" data-name="Margarita" data-price="8">
            <img src="imagenes del proyecto formativo/margarita.jpg" alt="Margarita">
            <p>Margarita - $8</p>
            <button class="add-to-bill">Añadir</button>
        </div>
        <div class="menu-item" data-name="Tequila" data-price="10">
            <img src="images/tequila.jpg" alt="Tequila">
            <p>Tequila - $10</p>
            <button class="add-to-bill">Añadir</button>
        </div>
    `;

    // Cargar el menú de comidas inicialmente
    menuContent.innerHTML = foodMenu;

    // Función para añadir un ítem a la factura
    function addToBill(name, price) {
        const existingItem = billItems.querySelector(`[data-name="${name}"]`);
        if (existingItem) {
            // Actualiza la cantidad si ya existe
            const quantityElem = existingItem.querySelector('.quantity');
            const newQuantity = parseInt(quantityElem.textContent) + 1;
            quantityElem.textContent = newQuantity;
        } else {
            // Crea un nuevo elemento en la factura
            const billItem = document.createElement('div');
            billItem.classList.add('bill-item');
            billItem.setAttribute('data-name', name);
            billItem.innerHTML = `
                <span>${name}</span>
                <span>$${price}</span>
                <span class="quantity">1</span>
            `;
            billItems.appendChild(billItem);
        }
        totalPrice += price;
    }

    // Manejar el botón "Añadir" de cada ítem del menú
    menuContent.addEventListener('click', function (event) {
        if (event.target.classList.contains('add-to-bill')) {
            const item = event.target.closest('.menu-item');
            const name = item.getAttribute('data-name');
            const price = parseFloat(item.getAttribute('data-price'));
            addToBill(name, price);
        }
    });

    // Calcular el total
    calculateTotalBtn.addEventListener('click', function () {
        totalPriceElem.textContent = totalPrice.toFixed(2);
    });

    // Cambiar entre menú de comidas y bebidas
    document.getElementById('viewFoodBtn').addEventListener('click', function () {
        menuContent.innerHTML = foodMenu;
    });

    document.getElementById('viewBeveragesBtn').addEventListener('click', function () {
        menuContent.innerHTML = beveragesMenu;
    });
});
