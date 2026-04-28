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
            content: "Voting is a formal method by which a group makes a decision or expresses an opinion. It is the core mechanism of democratic governance, allowing people to choose their representatives."
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
    ]
};

const voterIdData = {
    epicNo: "UZV4665527",
    name: {
        en: "Rohan Madhav Jaiswar",
        hi: "रोहन माधव जायसवाल",
        mr: "रोहन माधव जैस्वार",
        ta: "ரோஹன் மாதவ் ஜைஸ்வர்"
    },
    fatherName: {
        en: "Madhav Jaiswar",
        hi: "माधव जायसवाल",
        mr: "माधव जैस्वार",
        ta: "மாதவ் ஜைஸ்வர்"
    },
    gender: { en: "Male", hi: "पुरुष", mr: "पुरुष", ta: "ஆண்" },
    dob: "26-08-1995",
    serialNo: "1950",
    assembly: {
        en: "176 - Vandre East",
        hi: "176 - वांद्रे पूर्व",
        mr: "176 - वांद्रे पूर्व",
        ta: "176 - பாந்த்ரா கிழக்கு"
    },
    partNo: {
        en: "1 - Matunga Railway Colony",
        hi: "1 - माटुंगा रेलवे कॉलोनी",
        mr: "1 - माटुंगा रेल्वे कॉलनी",
        ta: "1 - மாதுங்கா ரயில்வே காலனி"
    },
    pollingStation: {
        en: "Matunga Railway Colony School, Matunga (East), Mumbai - 400019",
        hi: "माटुंगा रेलवे कॉलोनी स्कूल, माटुंगा (पूर्व), मुंबई - 400019",
        mr: "माटुंगा रेल्वे कॉलनी शाळा, माटुंगा (पूर्व), मुंबई - 400019",
        ta: "மாதுங்கா ரயில்வே காலனி பள்ளி, மாதுங்கா (கிழக்கு), மும்பை - 400019"
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

const languages = [
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'हिंदी' },
    { code: 'mr', name: 'मराठी' },
    { code: 'ta', name: 'தமிழ்' }
];