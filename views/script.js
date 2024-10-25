

        let cart = [];

        function addToCart(productName, price) {
            // Create a cart item object
            let cartItem = {
                product: productName,
                price: price,
                quantity: 1
            };

            // Check if the item already exists in the cart
            let existingItem = cart.find(item => item.product === productName);

            if (existingItem) {
                existingItem.quantity += 1; // Increase the quantity
            } else {
                cart.push(cartItem); // Add the new item
            }

            // Show confirmation message
            alert('${productName} added to cart!');

            // Update cart message on the page
            let messageElement = document.querySelector("#cart-message-${productName === 'Sunglasses' ? 1 : 2}");
            messageElement.innerText = 'Added to Cart: ${cartItem.quantity} x ${productName} ($${price})';
        }



    
     
