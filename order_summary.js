function addItems() {
    const categories = ['starter', 'veg', 'nonVeg', 'desserts', 'iceCream'];
    let total = 0;
    const orderTableBody = document.getElementById('orderTableBody');
    orderTableBody.innerHTML = ''; // Clear previous order summary

    categories.forEach(category => {
        const checkboxes = document.querySelectorAll(`input[name="${category}"]:checked`);
        checkboxes.forEach(checkbox => {
            const price = parseFloat(checkbox.value);
            const item = checkbox.getAttribute('data-item');
            const quantity = prompt(`Enter quantity for ${item}:`);

            if (quantity > 0) {
                const itemTotal = price * quantity;
                total += itemTotal;

                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${capitalizeFirstLetter(category)}</td>
                    <td>${item}</td>
                    <td>${quantity}</td>
                    <td>${price}Rs.</td>
                    <td>${itemTotal}Rs.</td>
                `;
                orderTableBody.appendChild(row);
            }
        });
    });

    document.getElementById('grandTotal').textContent = `${total}Rs.`;
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
