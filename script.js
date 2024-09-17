document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    const selectedValueDisplay = document.getElementById('selected-value');
    const submitButton = document.getElementById('submit-vote');
    const usernameInput = document.getElementById('username');
    const joinButton = document.getElementById('join-button');
    const userNameDisplay = document.getElementById('user-name');
    const storyPointDisplay = document.getElementById('story-point');
    const toggleButton = document.getElementById('toggle-show-hide');
    const detailsDiv = document.getElementById('details');
    let selectedValue = null;
    let userName = null;

    // Handle card selection
    cards.forEach(card => {
        card.addEventListener('click', () => {
            cards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');
            selectedValue = card.getAttribute('data-value');
            selectedValueDisplay.textContent = selectedValue;
            storyPointDisplay.textContent = selectedValue;
            submitButton.disabled = false;
        });
    });

    // Handle name join
    joinButton.addEventListener('click', () => {
        userName = usernameInput.value.trim();
        if (userName) {
            userNameDisplay.textContent = userName;
            usernameInput.value = '';
            usernameInput.disabled = true;
            joinButton.disabled = true;
        } else {
            alert('Please enter your name.');
        }
    });

    // Handle submit button
    submitButton.addEventListener('click', () => {
        if (selectedValue && userName) {
            alert(`You (${userName}) voted for ${selectedValue}`);
            cards.forEach(c => c.classList.remove('active'));
            selectedValueDisplay.textContent = 'None';
            storyPointDisplay.textContent = 'None';
            submitButton.disabled = true;
        } else {
            alert('Please select a value and join with your name.');
        }
    });

    // Handle show/hide details
    toggleButton.addEventListener('click', () => {
        if (detailsDiv.classList.contains('hidden')) {
            detailsDiv.classList.remove('hidden');
            toggleButton.textContent = 'Hide Details';
        } else {
            detailsDiv.classList.add('hidden');
            toggleButton.textContent = 'Show Details';
        }
    });
});
