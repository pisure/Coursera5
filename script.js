// script.js
const menuDropdown = document.getElementById('menuDropdown');
const menuItemsContainer = document.getElementById('menuItems');

menuDropdown.addEventListener('change', function() {
    const selectedOption = menuDropdown.value;
    
    // Lógica para mostrar los elementos correspondientes al menú seleccionado
    if (selectedOption === 'item1') {
        menuItemsContainer.innerHTML = '<ul><li>Entrada 1</li><li>Entrada 2</li></ul>';
    } else if (selectedOption === 'item2') {
        menuItemsContainer.innerHTML = '<ul><li>Plato principal 1</li><li>Plato principal 2</li></ul>';
    } else if (selectedOption === 'item3') {
        menuItemsContainer.innerHTML = '<ul><li>Postre 1</li><li>Postre 2</li></ul>';
    }
});
