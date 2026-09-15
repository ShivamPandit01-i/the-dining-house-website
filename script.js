console.log('✅ Script.js Loaded - Improved Version');

function sendMessage() {
    const userInput = document.getElementById('userInput');
    const message = userInput.value.trim();

    if (!message) return;

    addMessageToChat(message, 'user');
    userInput.value = '';
    userInput.focus();

    addMessageToChat('Thinking...', 'bot');

    setTimeout(function() {
        removeLastMessage();
        const response = getResponse(message);
        console.log('Response:', response);
        addMessageToChat(response, 'bot');
    }, 700);
}

function getResponse(userMessage) {
    const msg = userMessage.toLowerCase().trim();
    
    console.log('Processing:', msg);

    // ===== VEGETARIAN RESPONSES =====
    if (msg.includes('vegetarian')) {
        const responses = [
            "🥗 Great question! Our Vegetarian Pasta Primavera (₹750) is made with fresh seasonal vegetables and olive oil.",
            "🥘 Try our Truffle Risotto (₹950)! Creamy arborio rice with black truffle and parmesan - absolutely divine!",
            "🍝 Both our Pasta Primavera (₹750) and Risotto (₹950) are excellent vegetarian choices!",
            "🌿 We specialize in vegetarian fine dining. Call +91-7777-888-999 for custom vegetarian preparations."
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }

    // ===== VEGAN RESPONSES =====
    if (msg.includes('vegan')) {
        const responses = [
            "🌱 For vegan options, I recommend calling us at +91-7777-888-999 to discuss custom preparations.",
            "🥬 Our chef is happy to create vegan dishes! Please call +91-7777-888-999 with your preferences.",
            "🍃 We can modify most dishes for vegan diets. Contact us for personalized recommendations!"
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }

    // ===== PRICE/COST RESPONSES =====
    if (msg.includes('price') || msg.includes('cost') || msg.includes('expensive')) {
        const responses = [
            "💰 Our prices range from ₹450 to ₹1,500 per dish - premium quality ingredients justify the cost!",
            "🏆 Fine dining pricing reflects exceptional quality, expert preparation, and premium ingredients.",
            "⭐ We offer excellent value for premium European fine dining cuisine!",
            "💎 Prices: Lava Cake (₹450), Pasta (₹750), Risotto (₹950), Lamb (₹1,500)"
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }

    // ===== RESERVATION/BOOKING RESPONSES =====
    if (msg.includes('reserv') || msg.includes('book')) {
        const responses = [
            "📅 You can reserve through our website booking form or call +91-7777-888-999. We recommend 2-3 days advance!",
            "🪑 To book a table, use our online form or call us. We accommodate special requests!",
            "📞 Reserve now! Call +91-7777-888-999 or use our website booking. Walk-ins welcome if space available!"
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }

    // ===== HOURS/TIME RESPONSES =====
    if (msg.includes('hour') || msg.includes('open') || msg.includes('time')) {
        const responses = [
            "⏰ Lunch: 12:00 PM - 3:00 PM | Dinner: 6:00 PM - 11:00 PM | Closed Mondays",
            "🕐 We're open for lunch 12-3 PM and dinner 6-11 PM. Closed on Mondays for renovation.",
            "⌚ Operating Hours: Lunch 12 PM-3 PM | Dinner 6 PM-11 PM | Monday: Closed"
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }

    // ===== CLOSED/MONDAY RESPONSES =====
    if (msg.includes('closed') || msg.includes('monday')) {
        const responses = [
            "🚫 We're closed on Mondays. Open Lunch 12-3 PM and Dinner 6-11 PM on other days!",
            "📖 Monday is our rest day. We reopen Tuesday for lunch service.",
            "⛔ Mondays we're closed for maintenance. See you other days!"
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }

    // ===== DIETARY/ALLERGY RESPONSES =====
    if (msg.includes('dietary') || msg.includes('allerg') || msg.includes('gluten') || msg.includes('restriction')) {
        const responses = [
            "🚨 We take allergies seriously! Please mention when booking. Call +91-7777-888-999 for details.",
            "✋ All dietary restrictions accommodated. Gluten-free, nut-free, dairy-free options available!",
            "🛑 We accommodate all dietary needs. Inform us during reservation for safe preparation."
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }

    // ===== ADDRESS/LOCATION RESPONSES =====
    if (msg.includes('address') || msg.includes('location') || msg.includes('where')) {
        const responses = [
            "📍 123 Gourmet Street, Food District, Greater Noida, UP 201301. Easy parking available!",
            "🗺️ Located at 123 Gourmet Street. Close to metro station with ample parking.",
            "📌 Our restaurant: 123 Gourmet Street, Food District. Easily accessible by car or public transport."
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }

    // ===== PHONE/CONTACT RESPONSES =====
    if (msg.includes('phone') || msg.includes('contact') || msg.includes('call')) {
        const responses = [
            "📞 Call us: +91-7777-888-999. Available for reservations and special requests!",
            "☎️ Phone: +91-7777-888-999. We're happy to help with any inquiries!",
            "📱 Reach us at +91-7777-888-999 during business hours for reservations!"
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }

    // ===== SALMON RESPONSES =====
    if (msg.includes('salmon')) {
        const responses = [
            "🐟 Grilled Salmon with Asparagus (₹1,200) - Fresh Atlantic salmon with lemon butter sauce!",
            "🍣 Our signature Salmon dish (₹1,200) features seasonal asparagus and creamy lemon sauce.",
            "🐠 Premium Grilled Salmon (₹1,200) - a customer favorite! Fresh, perfectly cooked!"
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }

    // ===== LAMB RESPONSES =====
    if (msg.includes('lamb')) {
        const responses = [
            "🐑 Herb-Crusted Lamb (₹1,500) - Perfectly seared with herbs and roasted vegetables!",
            "🥩 Our Lamb Masterpiece (₹1,500) features tender meat with aromatic herb crust.",
            "🍖 Premium Herb-Crusted Lamb (₹1,500) - Most popular among our fine dining customers!"
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }

    // ===== DUCK RESPONSES =====
    if (msg.includes('duck')) {
        const responses = [
            "🦆 Duck Breast with Cherry Sauce (₹1,400) - Tender duck with homemade cherry reduction!",
            "🍗 Exquisite Duck Breast (₹1,400) features our signature cherry sauce!",
            "🥘 Premium Duck (₹1,400) - perfectly seared with sophisticated cherry sauce!"
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }

    // ===== RISOTTO RESPONSES =====
    if (msg.includes('risotto')) {
        const responses = [
            "🍚 Truffle Risotto (₹950) - Creamy arborio rice with black truffle and parmesan!",
            "🍝 Luxury Risotto (₹950) featuring black truffle - absolutely divine!",
            "✨ Truffle Risotto (₹950) - Creamy, luxurious, perfect for truffle lovers!"
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }

    // ===== PASTA RESPONSES =====
    if (msg.includes('pasta')) {
        const responses = [
            "🍝 Vegetarian Pasta Primavera (₹750) - Fresh seasonal vegetables with olive oil!",
            "🥗 Our Pasta (₹750) features the finest seasonal vegetables and premium olive oil.",
            "🍜 Delicious Pasta Primavera (₹750) - fresh, vibrant, and perfectly prepared!"
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }

    // ===== DESSERT/CAKE RESPONSES =====
    if (msg.includes('dessert') || msg.includes('cake') || msg.includes('lava')) {
        const responses = [
            "🍰 Chocolate Lava Cake (₹450) - Warm chocolate with vanilla ice cream - perfect ending!",
            "🍫 Indulge in our Lava Cake (₹450) - warm chocolate with cold vanilla ice cream!",
            "🎂 Chocolate Lava Cake (₹450) - Our signature dessert, absolutely heavenly!"
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }

    // ===== MENU RESPONSES =====
    if (msg.includes('menu')) {
        const responses = [
            "📋 Our menu features: Salmon (₹1,200), Risotto (₹950), Lamb (₹1,500), Duck (₹1,400), Pasta (₹750), Lava Cake (₹450)",
            "🍽️ Premium European cuisine: Salmon, Risotto, Lamb, Duck, Pasta, and Desserts - all expertly prepared!",
            "✨ Fine dining menu: Fresh seafood, risotto, prime lamb, duck, seasonal pasta, and chocolate delights!"
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }

    // ===== EVENT/CATERING RESPONSES =====
    if (msg.includes('event') || msg.includes('catering') || msg.includes('private')) {
        const responses = [
            "🎉 Private dining and event catering available! Call +91-7777-888-999 for customized packages.",
            "🎊 We host special events and corporate dinners. Contact us for catering inquiries!",
            "💍 Private dining available for weddings, corporate events, and celebrations!"
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }

    // ===== GROUP/LARGE PARTY RESPONSES =====
    if (msg.includes('group') || msg.includes('party') || msg.includes('large')) {
        const responses = [
            "👥 Groups welcome! For parties larger than 6, call +91-7777-888-999 to arrange seating.",
            "🎭 Large group reservations accommodated. Please call ahead for best experience!",
            "👨‍👩‍👧‍👦 We love hosting groups! Pre-book for seamless dining with your party."
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }

    // ===== GREETINGS =====
    if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey')) {
        const responses = [
            "👋 Welcome to Lumière! Ask me about our menu, hours, reservations, or dietary options!",
            "🍷 Hello! I'm here to help with menu recommendations and restaurant information!",
            "😊 Hi there! Ask me anything about our fine dining experience!"
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }

    // ===== SPECIAL REQUESTS =====
    if (msg.includes('special')) {
        const responses = [
            "✨ We accommodate special requests! Call +91-7777-888-999 or mention in your reservation.",
            "🎁 Special occasions? We can arrange customized experiences!",
            "💝 Let us know your special needs - we're here to make your visit memorable!"
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }

    // ===== DEFAULT RESPONSES =====
    const defaultResponses = [
        "Thank you for your question! For more details, call us at +91-7777-888-999!",
        "I'm here to help! Could you ask about menu items, hours, reservations, or dietary needs?",
        "Great question! For specific requests, our team can help at +91-7777-888-999!",
        "Feel free to ask about our cuisine, hours, or make a reservation!",
        "Need help? Ask about Salmon, Lamb, Duck, Risotto, Pasta, or Lava Cake!"
    ];
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
}

function addMessageToChat(text, sender) {
    const chatBox = document.getElementById('chatBox');
    
    if (!chatBox) {
        console.error('chatBox not found!');
        return;
    }
    
    const messageDiv = document.createElement('div');
    messageDiv.className = 'chat-message ' + sender + '-message';

    const messageP = document.createElement('p');
    messageP.textContent = text;

    messageDiv.appendChild(messageP);
    chatBox.appendChild(messageDiv);

    chatBox.scrollTop = chatBox.scrollHeight;
}

function removeLastMessage() {
    const chatBox = document.getElementById('chatBox');
    if (chatBox && chatBox.lastChild) {
        chatBox.removeChild(chatBox.lastChild);
    }
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

function submitBooking(event) {
    event.preventDefault();
    
    const name = document.querySelector('input[name="name"]').value;
    const date = document.querySelector('input[name="date"]').value;
    const time = document.querySelector('input[name="time"]').value;
    const guests = document.querySelector('input[name="guests"]').value;

    if (!name) {
        alert('Please fill all required fields');
        return;
    }

    alert(
        `✅ Reservation Confirmed!\n\n` +
        `Guest: ${name}\n` +
        `Date: ${date}\n` +
        `Time: ${time}\n` +
        `Guests: ${guests}\n\n` +
        `Phone: +91-7777-888-999`
    );

    event.target.reset();
}

window.addEventListener('load', function() {
    console.log('✅ Page Loaded - AI Assistant Ready!');
});