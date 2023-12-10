
const colors = ["red", "blue", "green", "purple", "orange", "pink", "brown"];
const displaycolors=["black","gray","gold","green","red","white","indigo","maroon","cyan","darkblue","pink","green"];
let currentIndex = 0;
let displayCount = 0;
let intervalId;

function startGame() {

       displayCount = 0;
        const shuffledColors = shuffleArray(colors);
        const shuffledColorsDisplay= shuffleArray(displaycolors);

        intervalId = setInterval(() => {
            if (displayCount < 30) {
                document.getElementById("colorText").style.color = shuffledColors[currentIndex];
                document.getElementById("colorText").innerText = shuffledColorsDisplay[currentIndex].toUpperCase();
                currentIndex = (currentIndex + 1) % colors.length;
                displayCount++;
                console.log("inside"+displayCount)
            } else {
                clearInterval(intervalId);
                displayCount=0;
                console.log("outside"+displayCount)
            }
        }, 1000);
    
}

// Function to shuffle an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i+1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}