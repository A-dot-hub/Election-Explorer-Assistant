/**
 * Election Explorer Assistant
 * State Management & UI Logic
 */

// Application State
const state = {
    view: 'landing', // 'landing', 'journey', 'dashboard'
    currentStep: 0,
    totalSteps: electionData.steps.length,
    quiz: {
        active: false,
        currentQuestion: 0,
        score: 0,
        total: electionData.quiz.length
    }
};

// --- DOM Elements ---

// Navigation
const btnHome = document.getElementById('btn-home');
const navActions = document.getElementById('nav-actions');

// Views
const views = {
    landing: document.getElementById('view-landing'),
    journey: document.getElementById('view-journey'),
    dashboard: document.getElementById('view-dashboard')
};

// Landing
const btnStartJourney = document.getElementById('btn-start-journey');

// Journey Stepper & Card
const stepperNodesContainer = document.getElementById('stepper-nodes');
const stepperProgress = document.getElementById('stepper-progress');
const stepCardWrapper = document.getElementById('step-card-wrapper');

const uiStepIcon = document.getElementById('step-icon');
const uiStepNumber = document.getElementById('step-number');
const uiStepTitle = document.getElementById('step-title');
const uiStepExp = document.getElementById('step-explanation');
const uiStepDetails = document.getElementById('step-details');

const btnLearnMore = document.getElementById('btn-learn-more');
const learnMoreBox = btnLearnMore.parentElement;
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');

// Dashboard & Knowledge
const knowledgeGrid = document.getElementById('knowledge-grid');

// Quiz
const btnStartQuiz = document.getElementById('btn-start-quiz');
const quizIntro = document.getElementById('quiz-intro');
const quizActive = document.getElementById('quiz-active');
const quizResults = document.getElementById('quiz-results');

const uiQProgress = document.getElementById('quiz-progress');
const uiQScore = document.getElementById('quiz-score-display');
const uiQText = document.getElementById('quiz-question');
const uiQOptions = document.getElementById('quiz-options');
const uiQFeedback = document.getElementById('quiz-feedback');
const btnNextQuestion = document.getElementById('btn-next-question');

const uiFinalScoreText = document.getElementById('final-score-text');
const uiScoreCirclePath = document.getElementById('score-circle-path');
const uiFinalMessage = document.getElementById('quiz-final-message');
const btnRetryQuiz = document.getElementById('btn-retry-quiz');


// --- Initialization ---

function init() {
    bindEvents();
    buildStepper();
    buildKnowledgeCards();
}

function bindEvents() {
    btnHome.addEventListener('click', navigateHome);
    btnStartJourney.addEventListener('click', startJourney);
    
    btnPrev.addEventListener('click', prevStep);
    btnNext.addEventListener('click', nextStep);
    btnLearnMore.addEventListener('click', toggleLearnMore);
    
    btnStartQuiz.addEventListener('click', startQuiz);
    btnNextQuestion.addEventListener('click', handleNextQuestion);
    btnRetryQuiz.addEventListener('click', startQuiz);
}

// --- View Router ---

function switchView(viewName) {
    state.view = viewName;
    
    // Hide all
    Object.values(views).forEach(v => {
        v.classList.remove('active');
    });
    
    // Show target
    views[viewName].classList.add('active');
    
    // Toggle Nav Home button
    if(viewName === 'landing') {
        navActions.classList.add('hidden');
    } else {
        navActions.classList.remove('hidden');
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function navigateHome() {
    switchView('landing');
}

// --- Journey Flow Logic ---

function startJourney() {
    state.currentStep = 0;
    updateJourneyUI();
    switchView('journey');
}

function buildStepper() {
    stepperNodesContainer.innerHTML = '';
    for (let i = 0; i < state.totalSteps; i++) {
        const node = document.createElement('div');
        node.className = 'step-node';
        node.innerText = i + 1;
        
        // Allow clicking past steps to navigate back easily
        node.addEventListener('click', () => {
            if (i <= state.currentStep) {
                goToStep(i);
            }
        });
        
        stepperNodesContainer.appendChild(node);
    }
}

function updateStepperUI() {
    // Update progress bar
    const progress = (state.currentStep / (state.totalSteps - 1)) * 100;
    stepperProgress.style.width = `${progress}%`;
    
    // Update nodes
    const nodes = stepperNodesContainer.children;
    for (let i = 0; i < nodes.length; i++) {
        nodes[i].className = 'step-node'; // reset
        if (i < state.currentStep) {
            nodes[i].classList.add('completed');
            nodes[i].innerHTML = '<i class="fa-solid fa-check"></i>';
        } else if (i === state.currentStep) {
            nodes[i].classList.add('active');
            nodes[i].innerHTML = i + 1;
        } else {
            nodes[i].innerHTML = i + 1;
        }
    }
}

function updateJourneyUI() {
    const data = electionData.steps[state.currentStep];
    
    // Animate Card Change
    stepCardWrapper.style.opacity = '0';
    stepCardWrapper.style.transform = 'translateY(10px)';
    
    setTimeout(() => {
        // Reset Learn More state
        learnMoreBox.classList.remove('expanded');
        
        // Inject Data
        uiStepIcon.innerHTML = `<i class="${data.icon}"></i>`;
        uiStepNumber.innerText = `Step ${state.currentStep + 1} of ${state.totalSteps}`;
        uiStepTitle.innerText = data.title;
        uiStepExp.innerText = data.explanation;
        uiStepDetails.innerText = data.learnMore;
        
        // Update Buttons
        btnPrev.disabled = state.currentStep === 0;
        
        if (state.currentStep === state.totalSteps - 1) {
            btnNext.innerHTML = 'Finish Journey <i class="fa-solid fa-flag-checkered"></i>';
            btnNext.classList.remove('btn-primary');
            btnNext.classList.add('btn-primary'); // Keep primary styling but could change color
            btnNext.style.background = 'var(--secondary)'; // Make it green for finish
        } else {
            btnNext.innerHTML = 'Next Step <i class="fa-solid fa-arrow-right"></i>';
            btnNext.style.background = ''; // reset to css default
        }
        
        updateStepperUI();
        
        // Fade in
        stepCardWrapper.style.opacity = '1';
        stepCardWrapper.style.transform = 'translateY(0)';
    }, 200);
}

function toggleLearnMore() {
    learnMoreBox.classList.toggle('expanded');
}

function nextStep() {
    if (state.currentStep < state.totalSteps - 1) {
        state.currentStep++;
        updateJourneyUI();
    } else {
        finishJourney();
    }
}

function prevStep() {
    if (state.currentStep > 0) {
        state.currentStep--;
        updateJourneyUI();
    }
}

function goToStep(index) {
    state.currentStep = index;
    updateJourneyUI();
}

function finishJourney() {
    switchView('dashboard');
}

// --- Dashboard & Knowledge Cards ---

function buildKnowledgeCards() {
    knowledgeGrid.innerHTML = '';
    electionData.knowledgeCards.forEach((card, index) => {
        const el = document.createElement('div');
        el.className = 'k-card';
        // Add staggered animation delay
        el.style.animationDelay = `${0.2 + (index * 0.1)}s`;
        
        el.innerHTML = `
            <div class="k-header">
                <div class="k-title-group">
                    <div class="k-icon"><i class="${card.icon}"></i></div>
                    <h4>${card.title}</h4>
                </div>
                <i class="fa-solid fa-chevron-down k-toggle"></i>
            </div>
            <div class="k-content">
                <p>${card.content}</p>
            </div>
        `;
        
        el.addEventListener('click', () => {
            el.classList.toggle('expanded');
        });
        
        knowledgeGrid.appendChild(el);
    });
}

// --- Quiz Logic ---

function startQuiz() {
    state.quiz.active = true;
    state.quiz.currentQuestion = 0;
    state.quiz.score = 0;
    
    quizIntro.classList.add('hidden');
    quizResults.classList.add('hidden');
    quizActive.classList.remove('hidden');
    
    loadQuestion();
}

function loadQuestion() {
    const qData = electionData.quiz[state.quiz.currentQuestion];
    
    // Reset UI
    uiQFeedback.classList.add('hidden');
    uiQFeedback.className = 'q-feedback hidden'; // clear success/error classes
    btnNextQuestion.classList.add('hidden');
    uiQOptions.innerHTML = '';
    
    // Set Header Info
    uiQProgress.innerText = `Question ${state.quiz.currentQuestion + 1}/${state.quiz.total}`;
    uiQScore.innerText = state.quiz.score;
    uiQText.innerText = qData.question;
    
    // Generate Options
    qData.options.forEach((optText, index) => {
        const btn = document.createElement('button');
        btn.className = 'opt-btn';
        btn.innerHTML = `<span>${optText}</span> <i class="fa-solid fa-circle opt-icon" style="color: var(--border)"></i>`;
        
        btn.addEventListener('click', () => submitAnswer(index, btn));
        uiQOptions.appendChild(btn);
    });
}

function submitAnswer(selectedIndex, selectedBtn) {
    const qData = electionData.quiz[state.quiz.currentQuestion];
    const isCorrect = selectedIndex === qData.answer;
    
    // Lock options
    const options = uiQOptions.querySelectorAll('.opt-btn');
    options.forEach(btn => btn.disabled = true);
    
    // Handle UI updates based on result
    uiQFeedback.classList.remove('hidden');
    
    if (isCorrect) {
        state.quiz.score++;
        uiQScore.innerText = state.quiz.score;
        
        selectedBtn.classList.add('correct');
        selectedBtn.querySelector('.opt-icon').className = 'fa-solid fa-circle-check opt-icon';
        
        uiQFeedback.classList.add('success');
        uiQFeedback.innerHTML = `<i class="fa-solid fa-check-circle"></i> <span class="text">Correct! Well done.</span>`;
    } else {
        selectedBtn.classList.add('wrong');
        selectedBtn.querySelector('.opt-icon').className = 'fa-solid fa-circle-xmark opt-icon';
        
        // Highlight correct option
        const correctBtn = options[qData.answer];
        correctBtn.classList.add('correct');
        correctBtn.querySelector('.opt-icon').className = 'fa-solid fa-circle-check opt-icon';
        
        uiQFeedback.classList.add('error');
        uiQFeedback.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> <span class="text">Incorrect. The right answer is highlighted.</span>`;
    }
    
    // Setup next button
    btnNextQuestion.classList.remove('hidden');
    if (state.quiz.currentQuestion === state.quiz.total - 1) {
        btnNextQuestion.innerHTML = 'See Results <i class="fa-solid fa-flag-checkered"></i>';
    } else {
        btnNextQuestion.innerHTML = 'Next Question <i class="fa-solid fa-arrow-right"></i>';
    }
}

function handleNextQuestion() {
    if (state.quiz.currentQuestion < state.quiz.total - 1) {
        state.quiz.currentQuestion++;
        loadQuestion();
    } else {
        showQuizResults();
    }
}

function showQuizResults() {
    quizActive.classList.add('hidden');
    quizResults.classList.remove('hidden');
    
    const score = state.quiz.score;
    const total = state.quiz.total;
    const percentage = (score / total) * 100;
    
    // Update Score Text
    uiFinalScoreText.innerText = `${score}/${total}`;
    
    // Animate Circular Progress based on percentage
    // stroke-dasharray format: "value, 100"
    setTimeout(() => {
        // Change color based on score
        let strokeColor = 'var(--error)';
        if(percentage >= 80) strokeColor = 'var(--success)';
        else if(percentage >= 50) strokeColor = '#F59E0B'; // Warning yellow
        
        uiScoreCirclePath.style.stroke = strokeColor;
        uiScoreCirclePath.setAttribute('stroke-dasharray', `${percentage}, 100`);
    }, 100);
    
    // Feedback Message
    if (score === total) {
        uiFinalMessage.innerText = "Perfect score! You are a true democratic scholar.";
    } else if (score >= total / 2) {
        uiFinalMessage.innerText = "Good job! You have a solid grasp of the process.";
    } else {
        uiFinalMessage.innerText = "Keep exploring the journey to improve your knowledge!";
    }
}

// Start App
document.addEventListener('DOMContentLoaded', init);
