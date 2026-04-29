const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const strReplace = [
    ['<h4>Journey</h4>', '<h4 data-i18n="feat1">Journey</h4>'],
    ['<p>Follow the complete election process step by step</p>', '<p data-i18n="feat1Desc">Follow the complete election process step by step</p>'],
    ['<h4>Knowledge Base</h4>', '<h4 data-i18n="feat2">Knowledge Base</h4>'],
    ['<p>Learn key concepts with interactive cards</p>', '<p data-i18n="feat2Desc">Learn key concepts with interactive cards</p>'],
    ['<h4>Timeline</h4>', '<h4 data-i18n="feat3">Timeline</h4>'],
    ['<p>See the election process as a timeline</p>', '<p data-i18n="feat3Desc">See the election process as a timeline</p>'],
    ['<h4>Voter ID Card</h4>', '<h4 data-i18n="feat4">Voter ID Card</h4>'],
    ['<p>Explore your digital Voter ID</p>', '<p data-i18n="feat4Desc">Explore your digital Voter ID</p>'],
    ['<h4>Quiz</h4>', '<h4 data-i18n="feat5">Quiz</h4>'],
    ['<p>Test your knowledge and earn a certificate</p>', '<p data-i18n="feat5Desc">Test your knowledge and earn a certificate</p>'],
    ['<p class="text-sm text-muted mb-4" id="landing-progress-text">Start your learning journey to track your progress</p>', '<p class="text-sm text-muted mb-4" id="landing-progress-text" data-i18n="progS2">Start your learning journey to track your progress</p>'],
    ['<h6>Interactive Learning</h6>', '<h6 data-i18n="bot2">Interactive Learning</h6>'],
    ['<p>Learn on any device</p>', '<p data-i18n="bot2Desc">Learn on any device</p>'],
    ['<h6>Trusted Information</h6>', '<h6 data-i18n="bot3">Trusted Information</h6>'],
    ['Personalize Your Journey', '<span data-i18n="onboardTitle">Personalize Your Journey</span>'],
    ['<p>Tell us a bit about yourself so we can guide you better.</p>', '<p data-i18n="onboardDesc">Tell us a bit about yourself so we can guide you better.</p>'],
    ['Are you a first-time voter?</label>', 'Are you a first-time voter?</label>'], // needs replace below
    ['Have you registered to vote?</label>', 'Have you registered to vote?</label>'], // needs replace below
];

// Re-doing the onboard labels specifically:
html = html.replace('>Are you a first-time voter?</label>', ' data-i18n="onboardQ1">Are you a first-time voter?</label>');
html = html.replace('>Have you registered to vote?</label>', ' data-i18n="onboardQ2">Have you registered to vote?</label>');
html = html.replace('<option value="yes">Yes</option>', '<option value="yes" data-i18n="onboardA1Yes">Yes</option>');
html = html.replace('<option value="no">No</option>', '<option value="no" data-i18n="onboardA1No">No</option>');
html = html.replace('<option value="no">No, I need to register</option>', '<option value="no" data-i18n="onboardA2No">No, I need to register</option>');
html = html.replace('<option value="yes">Yes, I am registered</option>', '<option value="yes" data-i18n="onboardA2Yes">Yes, I am registered</option>');
html = html.replace('>Start My Journey</button>', ' data-i18n="onboardBtn">Start My Journey</button>');

for(const item of strReplace) {
    if(html.includes(item[0])) {
        html = html.replace(item[0], item[1]);
    }
}
fs.writeFileSync('index.html', html);
