let accountBalance = 5500;

document.getElementById('donationButton').onclick = function() {
    document.getElementById('donationSection').style.display = 'block';
    document.getElementById('historySection').classList.add('hidden');
    toggleActiveButton('donationButton');
};

document.getElementById('historyButton').onclick = function() {
    document.getElementById('donationSection').style.display = 'none';
    document.getElementById('historySection').classList.remove('hidden');
    toggleActiveButton('historyButton');
};
document.querySelectorAll('.donate-button').forEach(button => {
    button.onclick = function() {
        const card = this.closest('.donation-card');
        const inputField = card.querySelector('.donation-input');
        const currentAmountSpan = card.querySelector('.current-amount');
        const donationAmount = parseFloat(inputField.value);
        
        if (validateDonation(donationAmount)) {
            accountBalance -= donationAmount;
            currentAmountSpan.innerText = parseFloat(currentAmountSpan.innerText) + donationAmount;
            document.getElementById('accountBalance').innerText = accountBalance;
            addToHistory(card.querySelector('h3').innerText, donationAmount);
            showModal();
            inputField.value = '';
        }
    };
});
document.getElementById('closeModal').onclick = function() {
    document.getElementById('modal').classList.add('hidden');
};
document.getElementById('blogButton').onclick = function() {
    window.location.href = 'blog.html';
};
function validateDonation(amount) {
    if (isNaN(amount) || amount <= 0 || amount > accountBalance) {
        alert('Invalid donation amount.');
        return false;
    }
    return true;
}
function addToHistory(title, amount) {
    const historyList = document.getElementById('historyList');
    const newEntry = document.createElement('li');
    newEntry.innerText = `Donated ${amount} to ${title} on ${new Date().toLocaleString()}`;
    historyList.appendChild(newEntry);
}
function showModal() {
    document.getElementById('modal').classList.remove('hidden');
}
function toggleActiveButton(activeId) {
    const buttons = ['donationButton', 'historyButton'];
    buttons.forEach(buttonId => {
        const button = document.getElementById(buttonId);
        if (buttonId === activeId) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });   
}
