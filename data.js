const electionData = {
    steps: [
        {
            icon: "fa-solid fa-id-card",
            title: "Voter Registration",
            explanation: "The first step in any election is ensuring you are registered to vote. Citizens must enroll themselves in the electoral roll to be eligible to cast a ballot.",
            learnMore: "To register, you usually need to be of voting age (18+ in many countries) and provide proof of identity and residence. Voter IDs are issued after verification."
        },
        {
            icon: "fa-solid fa-user-check",
            title: "Eligibility Check",
            explanation: "Before an election, it's crucial to verify that your name is actively listed on the current electoral roll. If not, you cannot vote.",
            learnMore: "You can often check your status online via the election commission's portal or via SMS services provided by the government."
        },
        {
            icon: "fa-solid fa-file-signature",
            title: "Candidate Nomination",
            explanation: "Individuals who wish to run for office file their nomination papers. The election commission scrutinizes these papers strictly.",
            learnMore: "Candidates must transparently declare their assets, criminal records (if any), and educational qualifications in affidavits during this process."
        },
        {
            icon: "fa-solid fa-bullhorn",
            title: "Campaigning",
            explanation: "Candidates and political parties present their policies and manifestos to the public, aiming to win voter support.",
            learnMore: "Campaigning involves rallies, debates, and digital advertising. By law, all campaigning must stop 48 hours before polling begins (the 'silence period')."
        },
        {
            icon: "fa-solid fa-person-booth",
            title: "Voting Process",
            explanation: "On election day, registered voters go to designated polling stations to cast their votes securely and secretly.",
            learnMore: "Voters use Electronic Voting Machines (EVMs) or paper ballots. Indelible ink is applied to the voter's finger to prevent double voting."
        },
        {
            icon: "fa-solid fa-chart-bar",
            title: "Vote Counting",
            explanation: "After voting concludes, EVMs or ballot boxes are securely transported to centers where votes are tallied under heavy security.",
            learnMore: "Representatives of all major candidates are present during the counting process to ensure absolute transparency and fairness."
        },
        {
            icon: "fa-solid fa-trophy",
            title: "Result Declaration",
            explanation: "The election commission officially announces the final results. The candidate with the highest number of valid votes wins.",
            learnMore: "In a parliamentary system, the party or coalition winning a majority of seats forms the government, and their leader usually becomes the executive head."
        }
    ],
    knowledgeCards: [
        {
            icon: "fa-solid fa-vote-yea",
            title: "What is Voting?",
            content: "Voting is a formal method by which a group makes a decision or expresses an opinion. It is the core mechanism of democratic governance, allowing people to choose geometric representatives."
        },
        {
            icon: "fa-solid fa-microchip",
            title: "What is an EVM?",
            content: "An Electronic Voting Machine (EVM) is a secure device used to record and count votes electronically. It consists of a Control Unit and a Balloting Unit, preventing tampering and speeding up results."
        },
        {
            icon: "fa-solid fa-landmark-dome",
            title: "Why Elections Matter?",
            content: "Elections are the heartbeat of democracy. They ensure peaceful transitions of power, hold current leaders accountable, and give citizens a direct voice in the policies that shape their society."
        },
        {
            icon: "fa-solid fa-users",
            title: "Who can vote?",
            content: "Universal Adult Suffrage ensures that generally, any citizen who has reached the legal voting age (often 18) and is registered on the electoral roll is eligible to vote, regardless of wealth, gender, or status."
        }
    ],
    quiz: [
        {
            question: "What is the minimum age to vote in most modern democracies?",
            options: ["16 Years", "18 Years", "21 Years", "25 Years"],
            answer: 1
        },
        {
            question: "What does EVM stand for?",
            options: ["Election Verification Module", "Electronic Voting Machine", "Electoral Voice Mechanism", "Electronic Validation Method"],
            answer: 1
        },
        {
            question: "What must happen 48 hours before polling begins?",
            options: ["Voting starts", "Results are declared", "Campaigning must stop", "Nominations are filed"],
            answer: 2
        },
        {
            question: "Who is responsible for scrutinizing candidate nomination papers?",
            options: ["The Police Force", "The Supreme Court", "The Election Commission", "The Current Prime Minister"],
            answer: 2
        },
        {
            question: "What is applied to a voter's finger to prevent double voting?",
            options: ["Bandage", "Indelible Ink", "A Stamp", "Clear Tape"],
            answer: 1
        }
    ],
    stateTimelines: {
        "Maharashtra": [
            { date: "Oct 15, 2024", event: "Date of Notification" },
            { date: "Oct 22, 2024", event: "Last Date of Making Nominations" },
            { date: "Oct 23, 2024", event: "Scrutiny of Nominations" },
            { date: "Oct 25, 2024", event: "Last Date of Withdrawal" },
            { date: "Nov 20, 2024", event: "Date of Poll" },
            { date: "Nov 23, 2024", event: "Date of Counting" }
        ],
        "Delhi": [
            { date: "Jan 05, 2025", event: "Date of Notification" },
            { date: "Jan 12, 2025", event: "Last Date of Making Nominations" },
            { date: "Jan 13, 2025", event: "Scrutiny of Nominations" },
            { date: "Jan 15, 2025", event: "Last Date of Withdrawal" },
            { date: "Feb 08, 2025", event: "Date of Poll" },
            { date: "Feb 11, 2025", event: "Date of Counting" }
        ],
        "Karnataka": [
            { date: "Apr 13, 2023", event: "Date of Notification" },
            { date: "Apr 20, 2023", event: "Last Date of Making Nominations" },
            { date: "Apr 21, 2023", event: "Scrutiny of Nominations" },
            { date: "Apr 24, 2023", event: "Last Date of Withdrawal" },
            { date: "May 10, 2023", event: "Date of Poll" },
            { date: "May 13, 2023", event: "Date of Counting" }
        ]
    },
    chatResponses: [
        { keywords: ["where", "polling booth", "station"], response: "You can find your polling booth by visiting the NVSP portal and searching your name in the electoral roll, or by using the Voter Helpline App." },
        { keywords: ["documents", "register", "proof"], response: "To register, you need: 1. Address Proof (Aadhar, Utility Bill). 2. Age Proof (Birth Certificate, Pan Card). 3. A Passport-sized Photo." },
        { keywords: ["evm", "machine", "how to vote"], response: "An EVM (Electronic Voting Machine) has buttons next to candidate names and symbols. You press the blue button next to your choice, and a beep confirms your vote." },
        { keywords: ["age", "18", "can i vote"], response: "You must be 18 years old on January 1st of the election year to be eligible to vote." }
    ],
    documentsChecklist: [
        { id: "doc1", label: "Aadhar Card or Passport (Identity & Address Proof)" },
        { id: "doc2", label: "PAN Card or Birth Certificate (Age Proof)" },
        { id: "doc3", label: "Recent Passport Size Photograph" }
    ]
};

const voterIdData = {
    epicNo: "ABC1234567",
    name: {
        en: "Aarav Sharma",
        hi: "आरव शर्मा",
        mr: "आरव शर्मा",
        ta: "ஆரவ் சர்மா"
    },
    fatherName: {
        en: "Rajesh Sharma",
        hi: "राजेश शर्मा",
        mr: "राजेश शर्मा",
        ta: "ராஜேஷ் சர்மா"
    },
    gender: { en: "Male", hi: "पुरुष", mr: "पुरुष", ta: "ஆண்" },
    dob: "26-08-1995",
    serialNo: "1234",
    assembly: {
        en: "123 - Sample Assembly",
        hi: "123 - नमूना विधानसभा",
        mr: "123 - नमुना विधानसभा",
        ta: "123 - மாதிரி சட்டமன்றம்"
    },
    partNo: {
        en: "1 - Sample Part",
        hi: "1 - नमूना भाग",
        mr: "1 - नमुना भाग",
        ta: "1 - மாதிரி பகுதி"
    },
    pollingStation: {
        en: "Sample Polling Station, City - 400000",
        hi: "नमूना मतदान केंद्र, शहर - 400000",
        mr: "नमुना मतदान केंद्र, शहर - 400000",
        ta: "மாதிரி வாக்குச்சாவடி, நகரம் - 400000"
    },
    downloadDate: "28-12-2025"
};

const i18n = {
    en: {
        title: "Indian Voter ID Card (EPIC)",
        subtitle: "Electoral Photo Identity Card issued by Election Commission of India",
        chooseLang: "Choose Language",
        front: "FRONT",
        back: "BACK",
        eci: "ELECTION COMMISSION OF INDIA",
        eciLocal: "भारत निर्वाचन आयोग",
        nameLbl: "Name :",
        fnameLbl: "Father's Name :",
        genderLbl: "Gender :",
        dobLbl: "Date of Birth / Age :",
        epicLbl: "Epic no. :",
        serialLbl: "Serial No. :",
        assemblyLbl: "Assembly Constituency No. and Name :",
        partLbl: "Part No. and Name :",
        pollingLbl: "Polling Station Address :",
        scanApp: "Scan By VHA/BLO App",
        footerFront: "e-Electors Photo Identity Card",
        downDate: "Downloaded Date :",
        pollDate: "Poll Date :",
        timings: "Timings :",
        na: "N.A",
        helpLine: "1950",
        website: "https://ceoelection.maharashtra.gov.in/eci/",
        aboutTitle: "About Voter ID (EPIC)",
        about1: "The Voter ID card is an official document issued by the Election Commission of India.",
        about2: "It is used as proof of identity and citizenship during elections.",
        about3: "Every registered voter in India is issued a unique EPIC number.",
        about4: "Helps ensure free, fair and transparent elections in India."
    },
    hi: {
        title: "भारतीय मतदाता पहचान पत्र (EPIC)",
        subtitle: "भारत निर्वाचन आयोग द्वारा जारी निर्वाचक फोटो पहचान पत्र",
        chooseLang: "भाषा चुनें",
        front: "FRONT",
        back: "BACK",
        eci: "ELECTION COMMISSION OF INDIA",
        eciLocal: "भारत निर्वाचन आयोग",
        nameLbl: "नाम / Name :",
        fnameLbl: "पिता का नाम / Father's Name :",
        genderLbl: "लिंग / Gender :",
        dobLbl: "जन्म तिथि / Date of Birth / Age :",
        epicLbl: "एपिक सं. / Epic no. :",
        serialLbl: "क्रम संख्या / Serial No. :",
        assemblyLbl: "विधानसभा क्षेत्र सं. और नाम :",
        partLbl: "भाग सं. और नाम :",
        pollingLbl: "मतदान केंद्र का पता :",
        scanApp: "VHA/BLO ऐप द्वारा स्कैन करें",
        footerFront: "ई-मतदाता फोटो पहचान पत्र",
        downDate: "डाउनलोड तिथि:",
        pollDate: "मतदान की तिथि :",
        timings: "समय :",
        na: "लागू नहीं",
        helpLine: "1950",
        website: "https://ceoelection.maharashtra.gov.in/eci/",
        aboutTitle: "वोटर आईडी (EPIC) के बारे में",
        about1: "वोटर आईडी कार्ड भारत चुनाव आयोग द्वारा जारी एक आधिकारिक दस्तावेज़ है।",
        about2: "यह चुनावों के दौरान पहचान और नागरिकता के प्रमाण के रूप में कार्य करता है।",
        about3: "भारत में हर पंजीकृत मतदाता को एक विशिष्ट EPIC नंबर जारी किया जाता है।",
        about4: "भारत में स्वतंत्र, निष्पक्ष और पारदर्शी चुनाव सुनिश्चित करने में मदद करता है।"
    },
    mr: {
        title: "भारतीय मतदार ओळखपत्र (EPIC)",
        subtitle: "भारतीय निवडणूक आयोगाने जारी केलेले मतदार फोटो ओळखपत्र",
        chooseLang: "भाषा निवडा",
        front: "FRONT",
        back: "BACK",
        eci: "ELECTION COMMISSION OF INDIA",
        eciLocal: "भारत निर्वाचन आयोग",
        nameLbl: "नाव / Name :",
        fnameLbl: "वडिलांचे नाव / Father's Name :",
        genderLbl: "लिंग / Gender :",
        dobLbl: "जन्मतारीख / Date of Birth / Age :",
        epicLbl: "मतदार फोटो ओळखपत्र क्र. / Epic no. :",
        serialLbl: "अनुक्रमांक / Serial No. :",
        assemblyLbl: "विधानसभा मतदारसंघ क्रमांक आणि नाव :",
        partLbl: "भाग क्रमांक आणि नाव :",
        pollingLbl: "मतदान केंद्राचा पत्ता :",
        scanApp: "Scan By VHA/BLO App",
        footerFront: "e-Electors Photo Identity Card - ई-मतदार फोटो ओळखपत्र",
        downDate: "Downloaded Date:",
        pollDate: "मतदानाची तारीख / Poll Date :",
        timings: "वेळ / Timings :",
        na: "N.A",
        helpLine: "1950",
        website: "https://ceoelection.maharashtra.gov.in/eci/",
        aboutTitle: "About Voter ID (EPIC)",
        about1: "The Voter ID card is an official document issued by the Election Commission of India.",
        about2: "It is used as proof of identity and citizenship during elections.",
        about3: "Every registered voter in India is issued a unique EPIC number.",
        about4: "Helps ensure free, fair and transparent elections in India."
    },
    ta: {
        title: "இந்திய வாக்காளர் அடையாள அட்டை (EPIC)",
        subtitle: "இந்திய தேர்தல் ஆணையத்தால் வழங்கப்பட்ட வாக்காளர் புகைப்பட அடையாள அட்டை",
        chooseLang: "மொழியைத் தேர்ந்தெடுக்கவும்",
        front: "FRONT",
        back: "BACK",
        eci: "ELECTION COMMISSION OF INDIA",
        eciLocal: "இந்திய தேர்தல் ஆணையம்",
        nameLbl: "பெயர் / Name :",
        fnameLbl: "தந்தை பெயர் / Father's Name :",
        genderLbl: "பாலினம் / Gender :",
        dobLbl: "பிறந்த தேதி / Date of Birth / Age :",
        epicLbl: "எபிக் எண் / Epic no. :",
        serialLbl: "வரிசை எண் / Serial No. :",
        assemblyLbl: "சட்டமன்ற தொகுதி எண் மற்றும் பெயர் :",
        partLbl: "பாகம் எண் மற்றும் பெயர் :",
        pollingLbl: "வாக்குச்சாவடி முகவரி :",
        scanApp: "Scan By VHA/BLO App",
        footerFront: "மின்-வாக்காளர் புகைப்பட அடையாள அட்டை",
        downDate: "Downloaded Date:",
        pollDate: "வாக்குப்பதிவு தேதி / Poll Date :",
        timings: "நேரம் / Timings :",
        na: "N.A",
        helpLine: "1950",
        website: "https://ceoelection.maharashtra.gov.in/eci/",
        aboutTitle: "வாக்காளர் அடையாள அட்டை பற்றி (EPIC)",
        about1: "வாக்காளர் அடையாள அட்டை என்பது இந்திய தேர்தல் ஆணையத்தால் வழங்கப்படும் அதிகாரப்பூர்வ ஆவணமாகும்.",
        about2: "இது தேர்தலின் போது அடையாளம் மற்றும் குடியுரிமைக்கான சான்றாகப் பயன்படுத்தப்படுகிறது.",
        about3: "இந்தியாவில் பதிவுசெய்யப்பட்ட ஒவ்வொரு வாக்காளருக்கும் தனித்துவமான EPIC எண் வழங்கப்படுகிறது.",
        about4: "இந்தியாவில் சுதந்திரமான, நியாயமான மற்றும் வெளிப்படையான தேர்தல்களை உறுதி செய்ய உதவுகிறது."
    }
};

const appTranslations = {
    en: {
        navHome: "Home",
        navJourney: "Journey",
        navKB: "Knowledge Base",
        navQuiz: "Quiz",
        navTimeline: "Timeline",
        navVid: "Voter ID",
        navTools: "Tools",
        navStart: "Start Journey",
        heroPre: "Interactive Learning",
        heroT1: "Explore. Learn.",
        heroT2: "Understand Elections.",
        heroDesc: "A step-by-step interactive journey to help you understand how elections work, from registration to results.",
        btnStart: "Start Learning Journey",
        btnExplore: "Explore Features",
        lblTheme: "Theme",
        lblLang: "Language",
        footerText: "Your Vote, Your Power",
        journeyBack: "Back to Home",
        kbPreviewMsg: "Knowledge Base Preview",
        quote1: "Elections are not just about choosing leaders, but about choosing the future.",
        progTitle: "Your Progress",
        progStart: "Start Now",
        quizTitle: "Test Your Knowledge",
        quizIntro: "Ready for a quick challenge?",
        quizStartBtn: "Start Quiz",
        timelineTitle: "Election Process Timeline"
    },
    hi: {
        navHome: "होम",
        navJourney: "यात्रा",
        navKB: "ज्ञानकोष",
        navQuiz: "प्रश्नोत्तरी",
        navTimeline: "टाइमलाइन",
        navVid: "वोटर आईडी",
        navTools: "उपकरण",
        navStart: "यात्रा शुरू करें",
        heroPre: "इंटरएक्टिव लर्निंग",
        heroT1: "खोजें। सीखें।",
        heroT2: "चुनावों को समझें।",
        heroDesc: "पंजीकरण से लेकर परिणामों तक चुनाव कैसे काम करते हैं, यह समझने के लिए एक चरण-दर-चरण इंटरैक्टिव यात्रा।",
        btnStart: "यात्रा शुरू करें",
        btnExplore: "सुविधाएँ खोजें",
        lblTheme: "थीम",
        lblLang: "भाषा",
        footerText: "आपका वोट, आपकी शक्ति",
        journeyBack: "होम पर वापस जाएं",
        kbPreviewMsg: "ज्ञानकोष पूर्वावलोकन",
        quote1: "चुनाव केवल नेताओं को चुनने के बारे में नहीं हैं, बल्कि भविष्य को चुनने के बारे में हैं।",
        progTitle: "आपकी प्रगति",
        progStart: "अभी शुरू करें",
        quizTitle: "अपने ज्ञान का परीक्षण करें",
        quizIntro: "क्या आप चुनौती के लिए तैयार हैं?",
        quizStartBtn: "प्रश्नोत्तरी शुरू करें",
        timelineTitle: "चुनाव प्रक्रिया टाइमलाइन"
    },
    mr: {
        navHome: "मुख्यपृष्ठ",
        navJourney: "प्रवास",
        navKB: "ज्ञानकोष",
        navQuiz: "मंजुषा",
        navTimeline: "टाइमलाइन",
        navVid: "मतदार ओळखपत्र",
        navTools: "साधने",
        navStart: "प्रवास सुरू करा",
        heroPre: "परस्परसंवादी शिक्षण",
        heroT1: "शोधा. शिका.",
        heroT2: "निवडणुका समजून घ्या.",
        heroDesc: "नोंदणीपासून ते निकालापर्यंत निवडणुका कशा चालतात हे समजून घेण्यासाठी एक टप्प्याटप्प्याने परस्परसंवादी प्रवास.",
        btnStart: "प्रवास सुरू करा",
        btnExplore: "वैशिष्ट्ये शोधा",
        lblTheme: "थीम",
        lblLang: "भाषा",
        footerText: "तुमचे मत, तुमची शक्ती",
        journeyBack: "मुख्यपृष्ठावर परत जा",
        kbPreviewMsg: "ज्ञानकोष पूर्वावलोकन",
        quote1: "निवडणुका म्हणजे केवळ नेते निवडणे नव्हे, तर भविष्य निवडणे.",
        progTitle: "तुमची प्रगती",
        progStart: "आता सुरू करा",
        quizTitle: "तुमच्या ज्ञानाची चाचणी घ्या",
        quizIntro: "तुम्ही आव्हानासाठी तयार आहात का?",
        quizStartBtn: "मंजुषा सुरू करा",
        timelineTitle: "निवडणूक प्रक्रिया टाइमलाइन"
    },
    ta: {
        navHome: "முகப்பு",
        navJourney: "பயணம்",
        navKB: "அறிவு தளம்",
        navQuiz: "வினாடி வினா",
        navTimeline: "காலவரிசை",
        navVid: "வாக்காளர் அட்டை",
        navTools: "கருவிகள்",
        navStart: "பயணத்தை தொடங்கு",
        heroPre: "ஊடாடும் கற்றல்",
        heroT1: "ஆராயுங்கள். கற்றுக்கொள்ளுங்கள்.",
        heroT2: "தேர்தலை புரிந்து கொள்ள.",
        heroDesc: "பதிவு முதல் முடிவுகள் வரை தேர்தல் எவ்வாறு செயல்படுகிறது என்பதைப் புரிந்துகொள்ள ஒரு படிப்படியான ஊடாடும் பயணம்.",
        btnStart: "கற்றலை தொடங்கு",
        btnExplore: "அம்சங்களை ஆராயுங்கள்",
        lblTheme: "தீம்",
        lblLang: "மொழி",
        footerText: "உங்கள் வாக்கு, உங்கள் சக்தி",
        journeyBack: "முகப்புக்கு திரும்பு",
        kbPreviewMsg: "அறிவு தளம் முன்னோட்டம்",
        quote1: "தேர்தல்கள் தலைவர்களைத் தேர்ந்தெடுப்பது மட்டுமல்ல, எதிர்காலத்தைத் தேர்ந்தெடுப்பது பற்றியது.",
        progTitle: "உங்கள் முன்னேற்றம்",
        progStart: "இப்போதே தொடங்கு",
        quizTitle: "உங்கள் அறிவை சோதிக்கவும்",
        quizIntro: "ஒரு சவாலுக்கு தயாரா?",
        quizStartBtn: "வினாடி வினாவை தொடங்கு",
        timelineTitle: "தேர்தல் செயல்முறை காலவரிசை"
    }
};

const languages = [
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'हिंदी' },
    { code: 'mr', name: 'मराठी' },
    { code: 'ta', name: 'தமிழ்' }
];