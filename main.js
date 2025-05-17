const choices = ['Rock', 'Paper', 'Scissors'];

const getBotChoice = () =>
    choices[Math.floor(Math.random() * choices.length)];

const determineWinner = (player, bot) => {
    if (player === bot) return "It's a tie!";
    if (
        (player === 'Rock' && bot === 'Scissors') ||
        (player === 'Paper' && bot === 'Rock') ||
        (player === 'Scissors' && bot === 'Paper')
    ) return 'You win!';
    return 'You lose!';
};

const updateUI = (player, bot, result) => {
    const resultText = document.getElementById('resultText');
    resultText.classList.add('hidden');

    setTimeout(() => {
        resultText.innerHTML = `
            <strong>You chose:</strong> <span>${player}</span><br>
            <strong>Bot chose:</strong> <span>${bot}</span><br>
            <strong>Result:</strong> <span>${result}</span>
        `;
        resultText.classList.remove('hidden');
    }, 200);
};

const playGame = (choice) => {
    const bot = getBotChoice();
    const result = determineWinner(choice, bot);
    updateUI(choice, bot, result);
};

document.addEventListener('DOMContentLoaded', () => {
    const buttonsContainer = document.getElementById('buttons');

    choices.forEach(choice => {
        const button = document.createElement('button');
        button.innerText = choice;
        button.className = 'game-button';
        button.addEventListener('click', () => playGame(choice));
        buttonsContainer.appendChild(button);
    });
});