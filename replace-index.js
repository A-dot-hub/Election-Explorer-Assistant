const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const replacements = [
    [
`                            <div class="stat-text">
                                <strong>7</strong>
                                <span>Core Steps</span>
                            </div>
                        </div>
                        <div class="stat-item">
                            <i class="fa-solid fa-book text-green"></i>
                            <div class="stat-text">
                                <strong>20+</strong>
                                <span>Knowledge Cards</span>
                            </div>
                        </div>
                        <div class="stat-item">
                            <i class="fa-solid fa-list-check text-orange"></i>
                            <div class="stat-text">
                                <strong>10</strong>
                                <span>Quiz Questions</span>
                            </div>
                        </div>
                        <div class="stat-item">
                            <i class="fa-solid fa-unlock text-purple"></i>
                            <div class="stat-text">
                                <strong>100%</strong>
                                <span>Free to Learn</span>
                            </div>`,
`                            <div class="stat-text">
                                <strong>7</strong>
                                <span data-i18n="stat1">Core Steps</span>
                            </div>
                        </div>
                        <div class="stat-item">
                            <i class="fa-solid fa-book text-green"></i>
                            <div class="stat-text">
                                <strong>20+</strong>
                                <span data-i18n="stat2">Knowledge Cards</span>
                            </div>
                        </div>
                        <div class="stat-item">
                            <i class="fa-solid fa-list-check text-orange"></i>
                            <div class="stat-text">
                                <strong>10</strong>
                                <span data-i18n="stat3">Quiz Questions</span>
                            </div>
                        </div>
                        <div class="stat-item">
                            <i class="fa-solid fa-unlock text-purple"></i>
                            <div class="stat-text">
                                <strong>100%</strong>
                                <span data-i18n="stat4">Free to Learn</span>
                            </div>`
    ],
    [
`                    <div class="f-content">
                        <h4 data-i18n="navJourney">Journey</h4>
                        <p>Follow the complete election process step by step</p>
                    </div>
                </div>
                <div class="feature-card" onclick="switchView('dashboard')">
                    <div class="f-icon bg-light-green"><i class="fa-solid fa-book-open text-green"></i></div>
                    <div class="f-content">
                        <h4 data-i18n="navKB">Knowledge Base</h4>
                        <p>Learn key concepts with interactive cards</p>
                    </div>
                </div>
                <div class="feature-card" onclick="switchView('timeline')">
                    <div class="f-icon bg-light-orange"><i class="fa-solid fa-clock-rotate-left text-orange"></i></div>
                    <div class="f-content">
                        <h4 data-i18n="navTimeline">Timeline</h4>
                        <p>See the election process as a timeline</p>
                    </div>
                </div>
                <div class="feature-card" onclick="switchView('voterid')">
                    <div class="f-icon bg-light-purple"><i class="fa-solid fa-id-card-clip text-purple"></i></div>
                    <div class="f-content">
                        <h4 data-i18n="navVid">Voter ID Card</h4>
                        <p>Explore your digital Voter ID</p>
                    </div>
                </div>
                <div class="feature-card" onclick="switchView('dashboard')">
                    <div class="f-icon bg-light-primary"><i class="fa-solid fa-graduation-cap text-primary"></i></div>
                    <div class="f-content">
                        <h4 data-i18n="navQuiz">Quiz</h4>
                        <p>Test your knowledge and earn a certificate</p>
                    </div>
                </div>
                <div class="feature-card" onclick="switchView('resources')">
                    <div class="f-icon bg-light-red"><i class="fa-solid fa-file-pdf text-red"></i></div>
                    <div class="f-content">
                        <h4>Resources</h4>
                        <p>Explore useful guides and references</p>
                    </div>`,
`                    <div class="f-content">
                        <h4 data-i18n="feat1">Journey</h4>
                        <p data-i18n="feat1Desc">Follow the complete election process step by step</p>
                    </div>
                </div>
                <div class="feature-card" onclick="switchView('dashboard')">
                    <div class="f-icon bg-light-green"><i class="fa-solid fa-book-open text-green"></i></div>
                    <div class="f-content">
                        <h4 data-i18n="feat2">Knowledge Base</h4>
                        <p data-i18n="feat2Desc">Learn key concepts with interactive cards</p>
                    </div>
                </div>
                <div class="feature-card" onclick="switchView('timeline')">
                    <div class="f-icon bg-light-orange"><i class="fa-solid fa-clock-rotate-left text-orange"></i></div>
                    <div class="f-content">
                        <h4 data-i18n="feat3">Timeline</h4>
                        <p data-i18n="feat3Desc">See the election process as a timeline</p>
                    </div>
                </div>
                <div class="feature-card" onclick="switchView('voterid')">
                    <div class="f-icon bg-light-purple"><i class="fa-solid fa-id-card-clip text-purple"></i></div>
                    <div class="f-content">
                        <h4 data-i18n="feat4">Voter ID Card</h4>
                        <p data-i18n="feat4Desc">Explore your digital Voter ID</p>
                    </div>
                </div>
                <div class="feature-card" onclick="switchView('dashboard')">
                    <div class="f-icon bg-light-primary"><i class="fa-solid fa-graduation-cap text-primary"></i></div>
                    <div class="f-content">
                        <h4 data-i18n="feat5">Quiz</h4>
                        <p data-i18n="feat5Desc">Test your knowledge and earn a certificate</p>
                    </div>
                </div>
                <div class="feature-card" onclick="switchView('resources')">
                    <div class="f-icon bg-light-red"><i class="fa-solid fa-file-pdf text-red"></i></div>
                    <div class="f-content">
                        <h4 data-i18n="feat6">Resources</h4>
                        <p data-i18n="feat6Desc">Explore useful guides and references</p>
                    </div>`
    ],
    [
`                            <div class="prog-info">
                                <h5>Journey Progress</h5>
                                <p class="text-sm text-muted mb-4" id="landing-progress-text">Start your learning journey to track your progress</p>
                                <button class="btn-primary w-100" onclick="window.startJourney()">
                                    <i class="fa-solid fa-rocket"></i> <span data-i18n="progStart">Start Now</span>
                                </button>`,
`                            <div class="prog-info">
                                <h5 data-i18n="progS1">Journey Progress</h5>
                                <p class="text-sm text-muted mb-4" id="landing-progress-text" data-i18n="progS2">Start your learning journey to track your progress</p>
                                <button class="btn-primary w-100" onclick="window.startJourney()">
                                    <i class="fa-solid fa-rocket"></i> <span data-i18n="progStart">Start Now</span>
                                </button>`
    ],
    [
`                    <div class="bot-card">
                        <i class="fa-solid fa-bolt text-gold"></i>
                        <h6>Easy to Understand</h6>
                        <p>Simple language for everyone</p>
                    </div>
                    <div class="bot-card">
                        <i class="fa-solid fa-hand-pointer text-blue"></i>
                        <h6>Interactive Learning</h6>
                        <p>Learn on any device</p>
                    </div>
                    <div class="bot-card">
                        <i class="fa-solid fa-shield text-green"></i>
                        <h6>Trusted Information</h6>
                        <p>Based on official ECI guidelines</p>
                    </div>`,
`                    <div class="bot-card">
                        <i class="fa-solid fa-bolt text-gold"></i>
                        <h6 data-i18n="bot1">Easy to Understand</h6>
                        <p data-i18n="bot1Desc">Simple language for everyone</p>
                    </div>
                    <div class="bot-card">
                        <i class="fa-solid fa-hand-pointer text-blue"></i>
                        <h6 data-i18n="bot2">Interactive Learning</h6>
                        <p data-i18n="bot2Desc">Learn on any device</p>
                    </div>
                    <div class="bot-card">
                        <i class="fa-solid fa-shield text-green"></i>
                        <h6 data-i18n="bot3">Trusted Information</h6>
                        <p>Based on official ECI guidelines</p>
                    </div>`
    ],
    [
`                    <div class="f-content">
                        <h4>Voter Service Portal</h4>
                        <p>Register to vote, check status, and download e-EPIC</p>
                    </div>
                </div>
                <div class="feature-card" onclick="window.open('https://eci.gov.in/', '_blank')">
                    <div class="f-icon bg-light-green"><i class="fa-solid fa-landmark text-green"></i></div>
                    <div class="f-content">
                        <h4>Election Commission of India</h4>
                        <p>Main website for Election Commission rules & notifications</p>
                    </div>
                </div>
                <div class="feature-card" onclick="window.open('https://play.google.com/store/apps/details?id=com.eci.citizen', '_blank')">
                    <div class="f-icon bg-light-orange"><i class="fa-solid fa-mobile-screen-button text-orange"></i></div>
                    <div class="f-content">
                        <h4>Voter Helpline App</h4>
                        <p>Download the official mobile app</p>
                    </div>`,
`                    <div class="f-content">
                        <h4 data-i18n="vsp">Voter Service Portal</h4>
                        <p>Register to vote, check status, and download e-EPIC</p>
                    </div>
                </div>
                <div class="feature-card" onclick="window.open('https://eci.gov.in/', '_blank')">
                    <div class="f-icon bg-light-green"><i class="fa-solid fa-landmark text-green"></i></div>
                    <div class="f-content">
                        <h4 data-i18n="eciApp">Election Commission of India</h4>
                        <p>Main website for Election Commission rules & notifications</p>
                    </div>
                </div>
                <div class="feature-card" onclick="window.open('https://play.google.com/store/apps/details?id=com.eci.citizen', '_blank')">
                    <div class="f-icon bg-light-orange"><i class="fa-solid fa-mobile-screen-button text-orange"></i></div>
                    <div class="f-content">
                        <h4 data-i18n="vha">Voter Helpline App</h4>
                        <p data-i18n="vhaDesc">Download the official mobile app</p>
                    </div>`
    ]
];

for(const item of replacements) {
    if(html.includes(item[0])) {
        html = html.replace(item[0], item[1]);
        console.log("Replaced block");
    } else {
        console.log("NOT FOUND block");
    }
}

fs.writeFileSync('index.html', html);
