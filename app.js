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
const views = {
    landing: document.getElementById('view-landing'),
    journey: document.getElementById('view-journey'),
    dashboard: document.getElementById('view-dashboard'),
    timeline: document.getElementById('view-timeline'),
    voterid: document.getElementById('view-voterid')
};

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

const btnThemeToggle = document.querySelector('.theme-toggle');

// Landing progress
const landingProgressText = document.getElementById('landing-progress-text');
const landingProgressCircle = document.getElementById('landing-progress-circle');


// --- Initialization ---

let currentLang = 'en';

function init() {
    bindEvents();
    buildStepper();
    buildKnowledgeCards();
    buildTimeline();
    buildVoterIdUI();
    updateLandingProgress();
    updateAppLanguage();
    
    // Check initial hash for routing
    if (window.location.hash) {
        const targetView = window.location.hash.substring(1);
        if (views[targetView]) switchView(targetView);
    }
}

function updateAppLanguage() {
    const tl = appTranslations[currentLang];
    if (!tl) return;
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (tl[key]) {
            el.innerHTML = tl[key];
        }
    });

    // Also update voter id UI if currently rendered
    buildVoterIdUI();
}

function bindEvents() {
    btnPrev.addEventListener('click', prevStep);
    btnNext.addEventListener('click', nextStep);
    btnLearnMore.addEventListener('click', toggleLearnMore);
    
    btnStartQuiz.addEventListener('click', startQuiz);
    btnNextQuestion.addEventListener('click', handleNextQuestion);
    btnRetryQuiz.addEventListener('click', startQuiz);
    
    const globalLangSel = document.getElementById('global-lang-select');
    if (globalLangSel) {
        globalLangSel.addEventListener('change', (e) => {
            currentLang = e.target.value;
            updateAppLanguage();
        });
    }
    
    if (btnThemeToggle) {
        // Init theme
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark');
            btnThemeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
        }
        
        btnThemeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark');
            const isDark = document.body.classList.contains('dark');
            btnThemeToggle.innerHTML = isDark ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-regular fa-moon"></i>';
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        });
    }
}

// --- View Router ---

function switchView(viewName) {
    state.view = viewName;
    
    // Hide all
    Object.values(views).forEach(v => {
        v.classList.add('hidden');
        v.classList.remove('active');
    });
    
    // Show target
    views[viewName].classList.remove('hidden');
    views[viewName].classList.add('active');
    
    document.querySelectorAll('.nav-links li').forEach(li => {
        li.classList.remove('active');
        const text = li.innerText.toLowerCase();
        if(text === viewName || 
          (viewName === 'landing' && text === 'home') ||
          (viewName === 'dashboard' && text === 'knowledge base')) {
            li.classList.add('active');
        }
    });

    if (viewName === 'landing') {
        updateLandingProgress();
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// --- Landing Page Logic ---

function updateLandingProgress() {
    // Calculate progress based on current step
    let progressPercentage = 0;
    if (state.currentStep > 0) {
         progressPercentage = Math.round((state.currentStep / (state.totalSteps - 1)) * 100);
    }
    
    if (landingProgressText) landingProgressText.innerText = `${progressPercentage}%`;
    if (landingProgressCircle) {
        setTimeout(() => {
            landingProgressCircle.setAttribute('stroke-dasharray', `${progressPercentage}, 100`);
            if (progressPercentage === 100) {
                landingProgressCircle.style.stroke = 'var(--primary)';
            }
        }, 100);
    }
}

function startQuizDirectly() {
    switchView('dashboard');
    document.getElementById('quiz-section-anchor').scrollIntoView({behavior: 'smooth'});
}

// --- Journey Flow Logic ---

function startJourney() {
    // Only reset if it's currently at 0, otherwise resume
    updateJourneyUI();
    switchView('journey');
}

function buildStepper() {
    stepperNodesContainer.innerHTML = '';
    for (let i = 0; i < state.totalSteps; i++) {
        const node = document.createElement('div');
        node.className = 'step-node';
        node.innerText = i + 1;
        
        node.addEventListener('click', () => {
            if (i <= state.currentStep) goToStep(i);
        });
        
        stepperNodesContainer.appendChild(node);
    }
}

function updateStepperUI() {
    const progress = (state.currentStep / (state.totalSteps - 1)) * 100;
    stepperProgress.style.width = `${progress}%`;
    
    const nodes = stepperNodesContainer.children;
    for (let i = 0; i < nodes.length; i++) {
        nodes[i].className = 'step-node'; 
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
    
    stepCardWrapper.style.opacity = '0';
    stepCardWrapper.style.transform = 'translateY(10px)';
    
    setTimeout(() => {
        learnMoreBox.classList.remove('expanded');
        
        uiStepIcon.innerHTML = `<i class="${data.icon}"></i>`;
        uiStepNumber.innerText = `Step ${state.currentStep + 1} of ${state.totalSteps}`;
        uiStepTitle.innerText = data.title;
        uiStepExp.innerText = data.explanation;
        uiStepDetails.innerText = data.learnMore;
        
        btnPrev.disabled = state.currentStep === 0;
        
        if (state.currentStep === state.totalSteps - 1) {
            btnNext.innerHTML = 'Finish Journey <i class="fa-solid fa-flag-checkered"></i>';
            btnNext.style.background = 'var(--green)'; 
        } else {
            btnNext.innerHTML = 'Next Step <i class="fa-solid fa-arrow-right"></i>';
            btnNext.style.background = ''; 
        }
        
        updateStepperUI();
        
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
    updateLandingProgress(); // So if they go back to home, it shows 100%
}

// --- Dashboard & Knowledge Cards ---

function buildKnowledgeCards() {
    knowledgeGrid.innerHTML = '';
    electionData.knowledgeCards.forEach((card, index) => {
        const el = document.createElement('div');
        el.className = 'k-card-dash';
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
            const isCurrentlyExpanded = el.classList.contains('expanded');
            
            // Close all
            document.querySelectorAll('.k-card-dash').forEach(cardEl => {
                cardEl.classList.remove('expanded');
            });
            
            // Open this one if it wasn't already expanded
            if (!isCurrentlyExpanded) {
                el.classList.add('expanded');
            }
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
    
    uiQFeedback.classList.add('hidden');
    uiQFeedback.className = 'q-feedback hidden'; 
    btnNextQuestion.classList.add('hidden');
    uiQOptions.innerHTML = '';
    
    uiQProgress.innerText = `Question ${state.quiz.currentQuestion + 1}/${state.quiz.total}`;
    uiQScore.innerText = state.quiz.score;
    uiQText.innerText = qData.question;
    
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
    
    const options = uiQOptions.querySelectorAll('.opt-btn');
    options.forEach(btn => btn.disabled = true);
    
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
        
        const correctBtn = options[qData.answer];
        correctBtn.classList.add('correct');
        correctBtn.querySelector('.opt-icon').className = 'fa-solid fa-circle-check opt-icon';
        
        uiQFeedback.classList.add('error');
        uiQFeedback.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> <span class="text">Incorrect. The right answer is highlighted.</span>`;
    }
    
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
    
    uiFinalScoreText.innerText = `${score}/${total}`;
    
    setTimeout(() => {
        let strokeColor = 'var(--error)';
        if(percentage >= 80) strokeColor = 'var(--success)';
        else if(percentage >= 50) strokeColor = '#F59E0B'; 
        
        uiScoreCirclePath.style.stroke = strokeColor;
        uiScoreCirclePath.setAttribute('stroke-dasharray', `${percentage}, 100`);
    }, 100);
    
    if (score === total) {
        uiFinalMessage.innerText = "Perfect score! You are a true democratic scholar.";
    } else if (score >= total / 2) {
        uiFinalMessage.innerText = "Good job! You have a solid grasp of the process.";
    } else {
        uiFinalMessage.innerText = "Keep exploring the journey to improve your knowledge!";
    }
}

// --- Timeline Logic ---
function buildTimeline() {
    const timelineContainer = document.getElementById('timeline-container');
    if (!timelineContainer) return;
    
    timelineContainer.innerHTML = '';
    
    electionData.steps.forEach((step, index) => {
        const item = document.createElement('div');
        item.className = 'timeline-item';
        
        item.innerHTML = `
            <div class="timeline-marker bg-light-blue">
                <i class="${step.icon} text-blue"></i>
            </div>
            <div class="timeline-content">
                <div class="timeline-step">Step ${index + 1}</div>
                <h3>${step.title}</h3>
                <p>${step.explanation}</p>
            </div>
        `;
        
        timelineContainer.appendChild(item);
    });
}

// --- Voter ID Logic ---
function buildVoterIdUI() {
    const root = document.getElementById('voterid-root');
    if (!root) return;
    const tl = i18n[currentLang];
    const data = voterIdData;
    
    // Helper to get translated field or fallback to English
    const getVal = (field) => {
        if (typeof field === 'object') return field[currentLang] || field['en'];
        return field;
    };

    root.innerHTML = `
        <div class="vid-header">
            <div class="vid-h-left">
                <i class="fa-solid fa-id-card-clip vid-h-icon"></i>
                <div class="vid-h-titles">
                    <h2 class="vid-h-title">${tl.title}</h2>
                    <p class="vid-h-sub">${tl.subtitle}</p>
                </div>
            </div>
        </div>

        <div class="vid-cards-wrapper">
            <!-- FRONT -->
            <div class="vid-card vid-front">
                <div class="vid-ribbon">FRONT</div>
                <div class="vid-top-bar">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg" alt="Emblem" class="vid-emblem">
                    <div class="vid-eci-text">
                        <h3>${tl.eciLocal}</h3>
                        <h4>${tl.eci}</h4>
                    </div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/4/43/Election_Commission_of_India_Logo_2.png" alt="ECI Logo" class="vid-eci-logo">
                </div>
                <div class="vid-f-content">
                    <div class="vid-epic-hero">${data.epicNo}</div>
                    <div class="vid-person-info">
                        <div class="vid-photo-wrap">
                            <div class="vid-photo-placeholder"><i class="fa-solid fa-user"></i></div>
                        </div>
                        <div class="vid-details">
                            <div class="vid-field">
                                <span class="vid-lbl">${tl.nameLbl}</span>
                                <strong class="vid-val">${getVal(data.name)}</strong>
                            </div>
                            <div class="vid-field">
                                <span class="vid-lbl">${tl.fnameLbl}</span>
                                <strong class="vid-val">${getVal(data.fatherName)}</strong>
                            </div>
                            <div class="vid-field">
                                <span class="vid-lbl">${tl.genderLbl}</span>
                                <strong class="vid-val">${getVal(data.gender)}</strong>
                            </div>
                            <div class="vid-field">
                                <span class="vid-lbl">${tl.dobLbl}</span>
                                <strong class="vid-val">${data.dob}</strong>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="vid-footer">${tl.footerFront}</div>
            </div>

            <!-- BACK -->
            <div class="vid-card vid-back">
                <div class="vid-ribbon">BACK</div>
                <div class="vid-b-content">
                    <div class="vid-b-left">
                        <div class="vid-qr-placeholder"><i class="fa-solid fa-qrcode"></i></div>
                        <div class="vid-scan-txt">${tl.scanApp}</div>
                        <div class="vid-qr-epic">${data.epicNo}</div>
                    </div>
                    <div class="vid-b-right">
                        <div class="vid-field-flex">
                            <span class="vid-lbl">${tl.epicLbl}</span>
                            <span class="vid-val">${data.epicNo}</span>
                        </div>
                        <div class="vid-field-flex">
                            <span class="vid-lbl">${tl.serialLbl}</span>
                            <span class="vid-val">${data.serialNo}</span>
                        </div>
                        <div class="vid-field-flex">
                            <span class="vid-lbl vid-lbl-long">${tl.assemblyLbl}</span>
                            <span class="vid-val">${getVal(data.assembly)}</span>
                        </div>
                        <div class="vid-field-flex">
                            <span class="vid-lbl vid-lbl-long">${tl.partLbl}</span>
                            <span class="vid-val">${getVal(data.partNo)}</span>
                        </div>
                        <div class="vid-field-flex vid-field-block">
                            <span class="vid-lbl">${tl.pollingLbl}</span>
                            <span class="vid-val">${getVal(data.pollingStation)}</span>
                        </div>
                        <div class="vid-field-flex mt-2">
                            <span class="vid-lbl">${tl.downDate}</span>
                            <span class="vid-val">${data.downloadDate}</span>
                        </div>
                    </div>
                </div>
                <div class="vid-b-footer">
                    <div class="vid-bf-item"><i class="fa-solid fa-phone"></i> ${tl.helpLine}</div>
                    <div class="vid-bf-item"><i class="fa-solid fa-globe"></i> ${tl.website}</div>
                </div>
            </div>
        </div>

        <div class="vid-info-section">
            <div class="vid-qr-details">
                <div class="vid-qr-placeholder-sm"><i class="fa-solid fa-qrcode"></i></div>
                <p class="vid-sm-txt bold mt-1">${tl.scanApp}</p>
                <div class="vid-sm-info">
                    <div><b>${tl.downDate}</b> ${data.downloadDate}</div>
                    <div><b>${tl.pollDate}</b> ${tl.na}</div>
                    <div><b>${tl.timings}</b> ${tl.na}</div>
                </div>
            </div>

            <div class="vid-info-card">
                <div class="vid-info-grid">
                    <div class="vid-info-left">
                        <h3 class="vid-info-title">${tl.aboutTitle}</h3>
                        <ul class="vid-info-list">
                            <li>
                                <div class="vid-info-icon"><i class="fa-solid fa-shield-halved"></i></div>
                                <span>${tl.about1}</span>
                            </li>
                            <li>
                                <div class="vid-info-icon"><i class="fa-solid fa-user-check"></i></div>
                                <span>${tl.about2}</span>
                            </li>
                            <li>
                                <div class="vid-info-icon"><i class="fa-solid fa-fingerprint"></i></div>
                                <span>${tl.about3}</span>
                            </li>
                            <li>
                                <div class="vid-info-icon"><i class="fa-solid fa-check-to-slot"></i></div>
                                <span>${tl.about4}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Start App
document.addEventListener('DOMContentLoaded', init);
