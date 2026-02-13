// Step navigation
function nextStep(stepNumber) {
    const currentStep = document.querySelector('.step:not(.hidden)');
    if (currentStep) {
        currentStep.classList.add('hidden');
    }
    
    const nextStepElement = document.getElementById('step' + stepNumber);
    if (nextStepElement) {
        setTimeout(() => {
            nextStepElement.classList.remove('hidden');
        }, 300);
    }
}

// Open gift box animation
function openGift() {
    const giftBox = document.getElementById('giftBox');
    giftBox.classList.add('opened');
    
    setTimeout(() => {
        nextStep(7);
    }, 1000);
}

// Select individual gift
function selectGift(type) {
    const currentStep = document.querySelector('.step:not(.hidden)');
    if (currentStep) {
        currentStep.classList.add('hidden');
    }
    
    setTimeout(() => {
        document.getElementById('step8-' + type).classList.remove('hidden');
    }, 300);
}

// Show all gifts
function showAllGifts() {
    const currentStep = document.querySelector('.step:not(.hidden)');
    if (currentStep) {
        currentStep.classList.add('hidden');
    }
    
    setTimeout(() => {
        document.getElementById('step8-all').classList.remove('hidden');
    }, 300);
}

// Show temporary message
function showMessage(text) {
    const messageDiv = document.getElementById('tempMessage');
    messageDiv.textContent = text;
    messageDiv.classList.add('show');
    
    setTimeout(() => {
        messageDiv.classList.remove('show');
    }, 1500);
}

// Move "No" button away (fun interaction)
function moveButton(event) {
    const button = event.target;
    const maxX = window.innerWidth - button.offsetWidth - 100;
    const maxY = window.innerHeight - button.offsetHeight - 100;
    
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    
    button.style.position = 'fixed';
    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';
}

// Create floating hearts animation
function createHeart() {
    const heartsContainer = document.querySelector('.hearts-background');
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    
    heart.style.left = Math.random() * 100 + '%';
    
    const duration = Math.random() * 3 + 4;
    heart.style.animationDuration = duration + 's';
    heart.style.animationDelay = Math.random() * 2 + 's';
    
    heartsContainer.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, (duration + 2) * 1000);
}

setInterval(createHeart, 300);

for (let i = 0; i < 15; i++) {
    setTimeout(createHeart, i * 200);
}

// Add click effect
document.addEventListener('click', function(e) {
    if (e.target.tagName === 'BUTTON') return;
    
    const heart = document.createElement('div');
    heart.innerHTML = '💖';
    heart.style.position = 'fixed';
    heart.style.left = e.clientX + 'px';
    heart.style.top = e.clientY + 'px';
    heart.style.fontSize = '30px';
    heart.style.pointerEvents = 'none';
    heart.style.animation = 'rise 2s ease-out';
    heart.style.zIndex = '1000';
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 2000);
});
