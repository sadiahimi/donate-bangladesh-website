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