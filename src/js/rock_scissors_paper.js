import rockIcon from '../img/rock-scissors-paper/stone.svg';
import scissorsIcon from '../img/rock-scissors-paper/scissors.svg';
import paperIcon from '../img/rock-scissors-paper/paper.svg';

document.addEventListener('DOMContentLoaded', () => {
    const rpsButtons = document.querySelectorAll('.rps-btn');
    const cpuScoreEl = document.getElementById('cpu-score');
    const playerScoreEl = document.getElementById('player-score');
    const resultTextEl = document.getElementById('rps-result-text');
    
    const cpuChoiceContainer = document.getElementById('cpu-choice-container');
    const cpuChoiceIcon = document.getElementById('cpu-choice-icon');
    const cpuChoiceText = document.getElementById('cpu-choice-text');

    const imagePaths = {
        rock: rockIcon,
        scissors: scissorsIcon,
        paper: paperIcon
    };

    const choiceNamesUa = {
        rock: 'Камінь',
        scissors: 'Ножиці',
        paper: 'Папір'
    };

    let playerScore = 0;
    let cpuScore = 0;
    const choices = ['rock', 'scissors', 'paper'];

    rpsButtons.forEach(button => {
        button.addEventListener('click', () => {
            const playerChoice = button.getAttribute('data-choice');
            playRound(playerChoice);
        });
    });

    function playRound(playerChoice) {
        const cpuChoice = choices[Math.floor(Math.random() * choices.length)];
        cpuChoiceContainer.classList.remove('rps-cpu-display-hidden');
        
        cpuChoiceIcon.src = imagePaths[cpuChoice];
        cpuChoiceIcon.alt = choiceNamesUa[cpuChoice];
        cpuChoiceText.textContent = choiceNamesUa[cpuChoice];

        let roundResult = '';
        let resultClass = '';

        if (playerChoice === cpuChoice) {
            roundResult = 'Нічия!';
            resultClass = 'draw';
        } else if (
            (playerChoice === 'rock' && cpuChoice === 'scissors') ||
            (playerChoice === 'scissors' && cpuChoice === 'paper') ||
            (playerChoice === 'paper' && cpuChoice === 'rock')
        ) {
            roundResult = 'Ви виграли раунд!';
            resultClass = 'success';
            playerScore++;
        } else {
            roundResult = 'Комп’ютер виграв раунд!';
            resultClass = 'error';
            cpuScore++;
        }

        playerScoreEl.textContent = playerScore;
        cpuScoreEl.textContent = cpuScore;

        resultTextEl.textContent = roundResult;
        resultTextEl.className = `rps-result-text ${resultClass}`;
    }
});