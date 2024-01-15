const games = [
    { id: 1, title: 'Red Dead Redemption II', price: 19.99, image: 'https://c4.wallpaperflare.com/wallpaper/562/164/960/sunset-the-game-art-rockstar-concept-art-hd-wallpaper-preview.jpg' },
    { id: 2, title: 'GTA V', price: 29.99, image: 'https://c4.wallpaperflare.com/wallpaper/262/188/865/new-grand-theft-auto-v-grand-theft-auto-5-game-wallpaper-preview.jpg' },
    { id: 3, title: 'Mafia II', price: 39.99, image: 'https://c4.wallpaperflare.com/wallpaper/260/958/507/mafia-ii-wallpaper-preview.jpg' },
];

const cart = [];

function renderGameItems() {
    const gameList = document.getElementById('game-list');
    gameList.innerHTML = '';

    games.forEach(game => {
        const gameItem = document.createElement('div');
        gameItem.classList.add('game-item');
        gameItem.innerHTML = `
            <img src="${game.image}" alt="${game.title}">
            <span>${game.title}</span>
            <span>$${game.price.toFixed(2)}</span>
            <button class="buy-btn" onclick="addToCart(${game.id})">Buy</button>
        `;
        gameList.appendChild(gameItem);
    });
}

function addToCart(gameId) {
    const selectedGame = games.find(game => game.id === gameId);
    cart.push(selectedGame);
    renderCart();
}

function renderCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '<h3>Cart Items</h3>';
    
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.innerHTML = `${item.title} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(cartItem);
    });
}

function viewCart() {
    renderCart();
}

function checkout() {
    const whatsappNumber = '+91 8383853597'; 
    const message = encodeURIComponent(`I want to buy the following games:\n${getCartItemsText()}`);
    const whatsappURL = "https://wa.link/96z91m"; 
    console.log(whatsappURL);
    //`https://wa.me/${whatsappNumber}?text=${message}`; 
    
    //'https://wa.link/nku24j';
   
    const whatsappLink = document.createElement('a');
    whatsappLink.href = whatsappURL;

    
    document.body.appendChild(whatsappLink);

    
    whatsappLink.click();

    
    document.body.removeChild(whatsappLink);
}

function getCartItemsText() {
    return cart.map(item => `${item.title} - $${item.price.toFixed(2)}`).join('\n');
}

renderGameItems();