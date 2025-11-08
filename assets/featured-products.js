document.addEventListener('DOMContentLoaded', () => {
  const section = document.querySelector('.featured-products-section');

  if (!section) return;

  section.addEventListener('click', async (e) => {
    if (!e.target.classList.contains('featured-product-add-to-cart')) return;

    const button = e.target;
    const productId = button.dataset.productId;

    button.disabled = true;
    button.textContent = 'Adding...';

    try {
      const response = await fetch('/cart/add.js', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: productId, quantity: 1 }),
      });

      if (!response.ok) throw new Error('Failed to add product');

      // Оновлюємо pop-up корзину Dawn
      const cartResponse = await fetch('/cart?view=mini');
      const cartHTML = await cartResponse.text();
      document.querySelector('cart-drawer').innerHTML = cartHTML;

      // Приховуємо продукт із секції
      const productCard = button.closest('.featured-product-card');
      productCard.remove();

    } catch (err) {
      console.error(err);
      button.disabled = false;
      button.textContent = 'Add to Cart';
    }
  });
});
