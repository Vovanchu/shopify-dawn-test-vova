document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.featured-product-add-to-cart');

  buttons.forEach(button => {
    button.addEventListener('click', function() {
      const variantId = this.dataset.variantId;
      const btn = this;

      btn.disabled = true;
      const originalText = btn.textContent;
      btn.textContent = 'Adding...';

      fetch('/cart/add.js', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ id: variantId, quantity: 1 })
      })
      .then(response => response.json())
      .then(data => {
        console.log('Product added:', data);

        document.dispatchEvent(new CustomEvent('cart:refresh'));

        alert('Product added to cart!');

        btn.disabled = false;
        btn.textContent = originalText;

      })
      .catch(error => {
        console.error('Error adding product:', error);
        alert('Error adding product to cart. Please try again.');

        btn.disabled = false;
        btn.textContent = originalText;
      });
    });
  });
});
