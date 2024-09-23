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