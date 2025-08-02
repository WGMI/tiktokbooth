// Game state
let currentSlideIndex = 0;
let currentQuestionInSlide = 0;
let selectedAnswer = null;
let questionsAnswered = false;
const questionsPerSlide = 3;
let selectedQuestions = [];
let ogTypeCounts = { "254 OG": 0, "Banger OG": 0, "Certified OG": 0 };

// Sample quiz questions (you can replace these with your own)
const questions = [
    {
        question: "What's your go-to matatu vibe?",
        options: ["I hum and nod the whole ride", "I record Snap stories with my headphones on", "I fall asleep and miss my stop"],
        ogTypes: ["254 OG", "Banger OG", "Certified OG"]
    },
    {
        question: "How do you react when your jam comes on in a club?",
        options: ["Scream and dance like I'm on stage", "Nod and vibe with a drink in hand", "Grab friends for a formation dance"],
        ogTypes: ["254 OG", "Certified OG", "Banger OG"]
    },
    {
        question: "What's your chips masala side dish of choice?",
        options: ["Smokie pasua with guac", "Kachumbari and chili", "Nothing. The chips are the moment"],
        ogTypes: ["254 OG", "Banger OG", "Certified OG"]
    },
    {
        question: "Your ringtone is…",
        options: ["A 'kabambe' ring, and I still jump", "A trap beat", "A Kapuka throwback"],
        ogTypes: ["Certified OG", "Banger OG", "254 OG"]
    },
    {
        question: "How do you pass time in traffic?",
        options: ["Lip sync and act out music videos", "Listen to a curated Spotify playlist", "Freestyle in my head"],
        ogTypes: ["254 OG", "Certified OG", "Banger OG"]
    },
    {
        question: "Your favorite TikTok trend?",
        options: ["Dance challenges all day", "Funny skits and memes", "Sound remixes & edits"],
        ogTypes: ["254 OG", "Certified OG", "Banger OG"]
    },
    {
        question: "Your ideal concert outfit includes…",
        options: ["Sunglasses at night", "Comfy sneakers, music first", "Drip from head to toe"],
        ogTypes: ["254 OG", "Certified OG", "Banger OG"]
    },
    {
        question: "What's the best way to listen to music?",
        options: ["Loudspeaker, everyone must vibe", "Noise-canceling headphones", "In the car with bass maxed"],
        ogTypes: ["254 OG", "Certified OG", "Banger OG"]
    },
    {
        question: "Do you clap after your own dance moves?",
        options: ["Of course! Give me my flowers", "Only if the squad is watching", "Nope, I keep it cool"],
        ogTypes: ["254 OG", "Banger OG", "Certified OG"]
    },
    {
        question: "How do you walk past a reflective window?",
        options: ["Pose like I'm in a fashion show", "Quick glance, adjust my hair", "Don't even look"],
        ogTypes: ["254 OG", "Banger OG", "Certified OG"]
    },
    {
        question: "Your cat walks into the room, you…",
        options: ["Go 'psss psss'", "Ignore it, but watch it like a villain", "Start singing to it"],
        ogTypes: ["Certified OG", "Banger OG", "254 OG"]
    },
    {
        question: "Which Kenyan artist is your forever fave?",
        options: ["Sauti Sol", "Sanaipie Tande", "Nameless"],
        ogTypes: ["Certified OG", "Banger OG", "254 OG"]
    },
    {
        question: "A stranger drops bars in a mat?",
        options: ["Join in", "Secretly rate them", "Pull out your phone and record"],
        ogTypes: ["254 OG", "Certified OG", "Banger OG"]
    },
    {
        question: "What do you do after hearing 'Amapiano to the world!'?",
        options: ["Break into that log drum shuffle", "Smile and keep sipping", "Shout 'Sponono!' and dance"],
        ogTypes: ["Banger OG", "Certified OG", "254 OG"]
    },
    {
        question: "What's your midnight jam?",
        options: ["Kapuka nostalgia", "Afrobeats for the soul", "RnB meets trap"],
        ogTypes: ["254 OG", "Certified OG", "Banger OG"]
    },
    {
        question: "You walk into a room and the music is off. You…",
        options: ["Start a beat with your mouth", "Open Spotify immediately", "Enjoy the silence"],
        ogTypes: ["254 OG", "Banger OG", "Certified OG"]
    },
    {
        question: "Your squad wants to dance but you're tired?",
        options: ["Hype them from the side", "Get up, lead the dance", "Just vibe with your cup"],
        ogTypes: ["Certified OG", "254 OG", "Banger OG"]
    },
    {
        question: "Pick a weekend vibe:",
        options: ["Blankets and Wine", "Gondwana", "Old School RnB Brunch"],
        ogTypes: ["Certified OG", "Banger OG", "254 OG"]
    },
    {
        question: "Your favourite Kenyan phrase?",
        options: ["Aki si this jam slaps", "Ebu replay hiyo chorus", "Sasa hiyo ni banger bro"],
        ogTypes: ["Certified OG", "254 OG", "Banger OG"]
    },
    {
        question: "In the club, you're most likely to be…",
        options: ["On the dancefloor", "At the bar, nodding", "Switching between groups"],
        ogTypes: ["254 OG", "Certified OG", "Banger OG"]
    },
    {
        question: "How do you handle heartbreak?",
        options: ["Old school RnB on repeat", "Beyoncé + Meg = recovery plan", "Sing loudly and dance it off"],
        ogTypes: ["Certified OG", "Banger OG", "254 OG"]
    },
    {
        question: "What's your guilty pleasure song?",
        options: ["Kapuka from 2005", "Boy band ballads", "That viral TikTok hit"],
        ogTypes: ["254 OG", "Certified OG", "Banger OG"]
    },
    {
        question: "Your music playlist name would be…",
        options: ["My Soft Life Soundtrack", "Certified Club Hitlist", "Vibe Tingz"],
        ogTypes: ["Certified OG", "Banger OG", "254 OG"]
    },
    {
        question: "Your house party role?",
        options: ["DJ or aux plug", "Making TikToks in the corner", "Providing snacks and vibes"],
        ogTypes: ["Banger OG", "254 OG", "Certified OG"]
    },
    {
        question: "How many playlists do you have?",
        options: ["Just one long one", "Too many to count", "Depends on the mood"],
        ogTypes: ["Certified OG", "Banger OG", "254 OG"]
    },
    {
        question: "Which artist would you bring back for a concert?",
        options: ["E-Sir", "Aaliyah", "2Pac"],
        ogTypes: ["254 OG", "Certified OG", "Banger OG"]
    },
    {
        question: "How do you react to DJ transition fails?",
        options: ["Laugh and wait", "Boo internally", "Start shouting 'We want better!'"],
        ogTypes: ["Chill OG", "Groove OG", "Vibe OG"]
    },
    {
        question: "What's your pre-game ritual?",
        options: ["Get dressed to a fire playlist", "Curate a vibe in your room", "Dance in the mirror"],
        ogTypes: ["Vibe OG", "Chill OG", "Groove OG"]
    },
    {
        question: "Most underrated music genre?",
        options: ["Benga", "Neo Soul", "Alté"],
        ogTypes: ["Vibe OG", "Chill OG", "Groove OG"]
    },
    {
        question: "What's your karaoke go-to?",
        options: ["Bien or Maandy", "Mary J Blige or Doechii", "Ciza or Diamond"],
        ogTypes: ["Vibe OG", "Chill OG", "Groove OG"]
    }
];

// DOM elements
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultsScreen = document.getElementById('results-screen');
const startBtn = document.getElementById('start-btn');
const playAgainBtn = document.getElementById('play-again-btn');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const progressFill = document.querySelector('.progress-fill');
const finalScoreSpan = document.getElementById('final-score');
const totalScoreSpan = document.getElementById('total-score');
const scoreMessage = document.getElementById('score-message');

// Initialize the game
function initGame() {
    showScreen(startScreen);
    console.log('Game initialized');
}

// Show a specific screen
function showScreen(screen) {
    // Hide all screens
    document.querySelectorAll('.screen').forEach(s => {
        s.classList.remove('active');
    });
    
    // Show the target screen
    screen.classList.add('active');
}

// Start the quiz
function startQuiz() {
    currentSlideIndex = 0;
    currentQuestionInSlide = 0;
    selectedAnswer = null;
    questionsAnswered = false;
    
    // Select 5 random questions
    selectedQuestions = getRandomQuestions(5);
    ogTypeCounts = { "Vibe OG": 0, "Groove OG": 0, "Chill OG": 0 };
    
    showScreen(quizScreen);
    loadQuestion();
}

// Get random questions
function getRandomQuestions(count) {
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// Load the current question
function loadQuestion() {
    const currentQuestionIndex = currentSlideIndex * questionsPerSlide + currentQuestionInSlide;
    const question = selectedQuestions[currentQuestionIndex];
    
    console.log('Loading question:', currentQuestionIndex, question);
    
    questionText.textContent = question.question;
    
    // Update progress bar based on slide index
    const totalSlides = Math.ceil(selectedQuestions.length / questionsPerSlide);
    const progress = ((currentSlideIndex + 1) / totalSlides) * 100;
    progressFill.style.width = progress + '%';
    
    // Clear previous options
    optionsContainer.innerHTML = '';
    
    // Create option buttons (only show 3 options)
    question.options.slice(0, 3).forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-button';
        button.dataset.index = index;
        
        // Create option number flag
        const numberFlag = document.createElement('div');
        numberFlag.className = 'option-number';
        numberFlag.textContent = index + 1;
        button.appendChild(numberFlag);
        
        // Create option text
        const optionText = document.createElement('div');
        optionText.textContent = option;
        optionText.style.fontWeight = 'bold';
        optionText.style.textAlign = 'center';
        button.appendChild(optionText);
        
        button.addEventListener('click', () => selectAnswer(index));
        optionsContainer.appendChild(button);
    });
    
    selectedAnswer = null;
    questionsAnswered = false;
}

// Handle answer selection
function selectAnswer(answerIndex) {
    if (questionsAnswered) return;
    
    selectedAnswer = answerIndex;
    questionsAnswered = true;
    
    // Remove previous selections
    document.querySelectorAll('.option-button').forEach(btn => {
        btn.classList.remove('selected');
    });
    
    // Mark selected answer
    const selectedButton = document.querySelector(`[data-index="${answerIndex}"]`);
    selectedButton.classList.add('selected');
    
    // Track OG type
    const currentQuestionIndex = currentSlideIndex * questionsPerSlide + currentQuestionInSlide;
    const question = selectedQuestions[currentQuestionIndex];
    const selectedOgType = question.ogTypes[answerIndex];
    ogTypeCounts[selectedOgType]++;
    
    // Don't auto-advance - user must swipe to continue
}

// Move to next question
function nextQuestion() {
    currentQuestionInSlide++;
    
    // Check if we need to move to next slide
    if (currentQuestionInSlide >= questionsPerSlide) {
        currentSlideIndex++;
        currentQuestionInSlide = 0;
    }
    
    const currentQuestionIndex = currentSlideIndex * questionsPerSlide + currentQuestionInSlide;
    
    if (currentQuestionIndex < selectedQuestions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

// Show loading screen first, then results after 2 seconds
function showResults() {
    console.log('Showing loading screen');
    
    // Show loading screen first
    showScreen(document.getElementById('loading-screen'));
    
    // After 2 seconds, show the actual results
    setTimeout(() => {
        console.log('Showing results, OG counts:', ogTypeCounts);
        
        // Determine the dominant OG type
        const dominantOgType = Object.keys(ogTypeCounts).reduce((a, b) => 
            ogTypeCounts[a] > ogTypeCounts[b] ? a : b
        );
        
        console.log('Dominant OG type:', dominantOgType);
        
        // Get random icons
        const icons = getRandomIcons(dominantOgType);
        console.log('Selected icons:', icons);
        
        // Update results screen with OG type
        const finalScoreElement = document.getElementById('final-score');
        const scoreMessageElement = document.getElementById('score-message');
        const leftIconElement = document.getElementById('left-icon');
        const centerIconElement = document.getElementById('center-icon');
        const rightIconElement = document.getElementById('right-icon');
        
        if (finalScoreElement) {
            finalScoreElement.textContent = dominantOgType;
        } else {
            console.error('final-score element not found');
        }
        
        if (scoreMessageElement) {
            scoreMessageElement.textContent = getOgTypeDescription(dominantOgType);
        } else {
            console.error('score-message element not found');
        }
        
        // Update icons
        if (leftIconElement) {
            leftIconElement.src = icons.leftIcon;
        }
        if (centerIconElement) {
            centerIconElement.src = icons.centerIcon;
        }
        if (rightIconElement) {
            rightIconElement.src = icons.rightIcon;
        }
        
        showScreen(resultsScreen);
    }, 2000);
}

// Get description for OG type
function getOgTypeDescription(ogType) {
    const descriptions = {
        "254 OG": "For those who vibe to Hip Hop, RnB, and chart-topping Icons across the world.",
        "Banger OG": "For those who groove to Afrobeats, Amapiano, and the latest dance trends.",
        "Certified OG": "For those who chill to Neo Soul, RnB, and laid-back vibes."
    };
    return descriptions[ogType] || "You're a unique vibe!";
}

// Get static icons for results screen
function getRandomIcons(dominantOgType) {
    // Static icon mapping based on OG type
    let centerIcon;
    
    if (dominantOgType === "Certified OG") {
        centerIcon = 'images/icons/chill.png';
    } else if (dominantOgType === "254 OG") {
        centerIcon = 'images/icons/vibe.png';
    } else if (dominantOgType === "Banger OG") {
        centerIcon = 'images/icons/groove.png';
    } else {
        // Fallback for any other OG types
        centerIcon = 'images/icons/chill.png';
    }
    
    // Use static icons for left and right positions
    const leftIcon = 'images/icons/chill.png';
    const rightIcon = 'images/icons/vibe.png';
    
    return { leftIcon, centerIcon, rightIcon };
}

// Event listeners
startBtn.addEventListener('click', startQuiz);
playAgainBtn.addEventListener('click', () => {
    showScreen(startScreen);
});

// Desktop navigation buttons
document.addEventListener('DOMContentLoaded', function() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            if (currentSlideIndex > 0 || currentQuestionInSlide > 0) {
                // Trigger swipe animation
                const questionCard = document.getElementById('question-card');
                questionCard.style.transform = 'translateX(-100px) rotate(-5deg)';
                questionCard.style.transition = 'transform 0.3s ease-out';
                
                setTimeout(() => {
                    previousQuestion();
                    questionCard.style.transform = '';
                    questionCard.style.transition = '';
                }, 300);
            }
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            const currentQuestionIndex = currentSlideIndex * questionsPerSlide + currentQuestionInSlide;
            if (currentQuestionIndex < selectedQuestions.length - 1) {
                // Trigger swipe animation
                const questionCard = document.getElementById('question-card');
                questionCard.style.transform = 'translateX(100px) rotate(5deg)';
                questionCard.style.transition = 'transform 0.3s ease-out';
                
                setTimeout(() => {
                    nextQuestion();
                    questionCard.style.transform = '';
                    questionCard.style.transition = '';
                }, 300);
            } else {
                // Trigger swipe animation for results
                const questionCard = document.getElementById('question-card');
                questionCard.style.transform = 'translateX(100px) rotate(5deg)';
                questionCard.style.transition = 'transform 0.3s ease-out';
                
                setTimeout(() => {
                    showResults();
                    questionCard.style.transform = '';
                    questionCard.style.transition = '';
                }, 300);
            }
        });
    }
});

// Swipe functionality
let startX = 0;
let startY = 0;
let endX = 0;
let endY = 0;
let isDragging = false;
let currentX = 0;
let currentY = 0;
let initialX = 0;
let initialY = 0;

function handleTouchStart(e) {
    // Only enable swipe on mobile devices
    if (window.innerWidth > 768) return;
    
    console.log('Touch start detected');
    isDragging = true;
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
    initialX = startX;
    initialY = startY;
    
    const card = document.getElementById('question-card');
    card.classList.add('swiping');
}

function handleTouchMove(e) {
    // Only enable swipe on mobile devices
    if (window.innerWidth > 768) return;
    
    if (!isDragging) return;
    
    currentX = e.touches[0].clientX;
    currentY = e.touches[0].clientY;
    
    const deltaX = currentX - initialX;
    const deltaY = currentY - initialY;
    
    // Only allow horizontal movement
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
        e.preventDefault();
        
        const card = document.getElementById('question-card');
        const rotation = (deltaX / window.innerWidth) * 20; // Max 20 degrees rotation
        const scale = 1 - Math.abs(deltaX) / (window.innerWidth * 2); // Slight scale down
        
        card.style.transform = `translateX(${deltaX}px) rotate(${rotation}deg) scale(${scale})`;
        
        // Show swipe indicators
        const leftIndicator = document.querySelector('.swipe-indicator.left');
        const rightIndicator = document.querySelector('.swipe-indicator.right');
        
        if (deltaX > 50) {
            rightIndicator.classList.add('show');
            leftIndicator.classList.remove('show');
        } else if (deltaX < -50) {
            leftIndicator.classList.add('show');
            rightIndicator.classList.remove('show');
        } else {
            leftIndicator.classList.remove('show');
            rightIndicator.classList.remove('show');
        }
    }
}

function handleTouchEnd(e) {
    // Only enable swipe on mobile devices
    if (window.innerWidth > 768) return;
    
    if (!isDragging) return;
    
    isDragging = false;
    endX = e.changedTouches[0].clientX;
    endY = e.changedTouches[0].clientY;
    
    const deltaX = endX - startX;
    const deltaY = endY - startY;
    const minSwipeDistance = 50; // Reduced for easier swiping
    
    console.log('Touch end detected', { deltaX, deltaY, minSwipeDistance });
    
    const card = document.getElementById('question-card');
    card.classList.remove('swiping');
    
    // Hide swipe indicators
    const leftIndicator = document.querySelector('.swipe-indicator.left');
    const rightIndicator = document.querySelector('.swipe-indicator.right');
    leftIndicator.classList.remove('show');
    rightIndicator.classList.remove('show');
    
    // Check if it's a horizontal swipe
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > minSwipeDistance) {
        console.log('Valid swipe detected', { deltaX, direction: deltaX > 0 ? 'right' : 'left' });
        
        if (deltaX > 0) {
            // Swipe right - go to previous question
            if (currentSlideIndex > 0 || currentQuestionInSlide > 0) {
                card.classList.add('swipe-right');
                setTimeout(() => {
                    previousQuestion();
                    card.classList.remove('swipe-right');
                    card.style.transform = '';
                }, 300);
            } else {
                // Snap back
                card.style.transform = '';
            }
        } else {
            // Swipe left - go to next question
            const currentQuestionIndex = currentSlideIndex * questionsPerSlide + currentQuestionInSlide;
            console.log('Current question index:', currentQuestionIndex, 'Total questions:', selectedQuestions.length);
            
            if (currentQuestionIndex < selectedQuestions.length - 1) {
                card.classList.add('swipe-left');
                setTimeout(() => {
                    nextQuestion();
                    card.classList.remove('swipe-left');
                    card.style.transform = '';
                }, 300);
            } else {
                // This is the last question, go to results
                console.log('Going to results screen');
                card.classList.add('swipe-left');
                setTimeout(() => {
                    showResults();
                    card.classList.remove('swipe-left');
                    card.style.transform = '';
                }, 300);
            }
        }
    } else {
        // Snap back if swipe wasn't strong enough
        console.log('Swipe not strong enough');
        card.style.transform = '';
    }
}

function previousQuestion() {
    if (currentQuestionInSlide > 0) {
        currentQuestionInSlide--;
    } else if (currentSlideIndex > 0) {
        currentSlideIndex--;
        currentQuestionInSlide = questionsPerSlide - 1;
    }
    loadQuestion();
}

// Add touch event listeners to quiz screen
document.addEventListener('DOMContentLoaded', function() {
    const quizScreen = document.getElementById('quiz-screen');
    quizScreen.addEventListener('touchstart', handleTouchStart, { passive: false });
    quizScreen.addEventListener('touchmove', handleTouchMove, { passive: false });
    quizScreen.addEventListener('touchend', handleTouchEnd, { passive: false });
});

// Initialize the game when the page loads
document.addEventListener('DOMContentLoaded', initGame);

// Prevent context menu on mobile
document.addEventListener('contextmenu', e => e.preventDefault());

// Prevent zoom on double tap (mobile)
let lastTouchEnd = 0;
document.addEventListener('touchend', function (event) {
    const now = (new Date()).getTime();
    if (now - lastTouchEnd <= 300) {
        event.preventDefault();
    }
    lastTouchEnd = now;
}, false); 