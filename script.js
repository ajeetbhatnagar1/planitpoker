document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    const selectedValueDisplay = document.getElementById('selected-value');
    const submitButton = document.getElementById('submit-vote');
    let selectedValue = null;

    cards.forEach(card => {
        card.addEventListener('click', () => {
            // Remove active class from all cards
            cards.forEach(c => c.classList.remove('active'));

            // Set the selected card as active
            card.classList.add('active');
            selectedValue = card.getAttribute('data-value');
            selectedValueDisplay.textContent = selectedValue;
            submitButton.disabled = false;
        });
    });

    submitButton.addEventListener('click', () => {
        alert(`You voted for ${selectedValue}`);
        // Reset selection
        cards.forEach(c => c.classList.remove('active'));
        selectedValueDisplay.textContent = 'None';
        submitButton.disabled = true;
    });
});
