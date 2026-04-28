const electionData = {
    steps: [
        {
            icon: "fa-solid fa-id-card",
            title: { en: "Voter Registration", hi: "मतदाता पंजीकरण", mr: "मतदार नोंदणी", ta: "வாக்காளர் பதிவு" },
            explanation: { 
                en: "The first step in any election is ensuring you are registered to vote. Citizens must enroll themselves in the electoral roll.", 
                hi: "किसी भी चुनाव में पहला कदम यह सुनिश्चित करना है कि आप मतदान के लिए पंजीकृत हैं।", 
                mr: "कोणत्याही निवडणुकीतील पहिले पाऊल म्हणजे तुमची मतदान करण्यासाठी नोंदणी झाली आहे याची खात्री करणे.", 
                ta: "எந்தவொரு தேர்தலிலும் முதல் படி நீங்கள் வாக்களிக்க பதிவு செய்யப்பட்டுள்ளீர்களா என்பதை உறுதி செய்வதாகும்." 
            },
            learnMore: { 
                en: "To register, you usually need to be of voting age (18+) and provide proof of identity and residence.", 
                hi: "पंजीकरण करने के लिए, आपको मतदान की आयु (18+) का होना चाहिए और पहचान और निवास का प्रमाण देना होगा।", 
                mr: "नोंदणी करण्यासाठी, तुम्हाला मतदानाच्या वयाचे (१८+) असणे आणि ओळख आणि निवासाचा पुरावा देणे आवश्यक आहे.", 
                ta: "பதிவு செய்ய, நீங்கள் வாக்களிக்கும் வயதை (18+) அடைந்திருக்க வேண்டும் மற்றும் அடையாளம் மற்றும் வசிப்பிடத்திற்கான சான்றை வழங்க வேண்டும்." 
            }
        },
        {
            icon: "fa-solid fa-user-check",
            title: { en: "Eligibility Check", hi: "पात्रता जांच", mr: "पात्रता तपासणी", ta: "தகுதி சோதனை" },
            explanation: { 
                en: "Before an election, it's crucial to verify that your name is actively listed on the current electoral roll.", 
                hi: "चुनाव से पहले, यह सत्यापित करना महत्वपूर्ण है कि आपका नाम वर्तमान मतदाता सूची में है।", 
                mr: "निवडणुकीपूर्वी, तुमचे नाव वर्तमान मतदार यादीत असल्याचे सत्यापित करणे महत्त्वाचे आहे.", 
                ta: "தேர்தலுக்கு முன், உங்கள் பெயர் நடப்பு வாக்காளர் பட்டியலில் உள்ளதா என்பதை சரிபார்க்க வேண்டியது அவசியம்." 
            },
            learnMore: { 
                en: "You can often check your status online via the election commission's portal.", 
                hi: "आप चुनाव आयोग के पोर्टल के माध्यम से ऑनलाइन अपनी स्थिति की जांच कर सकते हैं।", 
                mr: "तुम्ही बहुधा निवडणूक आयोगाच्या पोर्टलवरून तुमची स्थिती ऑनलाइन तपासू शकता.", 
                ta: "தேர்தல் ஆணையத்தின் போர்டல் மூலம் உங்கள் நிலையை ஆன்லைனில் சரிபார்க்கலாம்." 
            }
        },
        {
            icon: "fa-solid fa-file-signature",
            title: { en: "Candidate Nomination", hi: "उम्मीदवार नामांकन", mr: "उमेदवार नामांकन", ta: "வேட்பாளர் நியமனம்" },
            explanation: { 
                en: "Individuals who wish to run for office file their nomination papers. The election commission scrutinizes these papers strictly.", 
                hi: "जो व्यक्ति चुनाव लड़ना चाहते हैं, वे अपना नामांकन पत्र दाखिल करते हैं। चुनाव आयोग इनकी सख्ती से जांच करता है।", 
                mr: "ज्या व्यक्तींना निवडणूक लढवायची आहे ते त्यांचे नामांकन पत्र दाखल करतात. निवडणूक आयोग कागदपत्रांची कडक छाननी करतो.", 
                ta: "தேர்தலில் போட்டியிட விரும்பும் நபர்கள் தங்கள் வேட்புமனு ஆவணங்களை தாக்கல் செய்கின்றனர்." 
            },
            learnMore: { 
                en: "Candidates must transparently declare their assets, criminal records (if any), and educational qualifications.", 
                hi: "उम्मीदवारों को अपनी संपत्ति, आपराधिक रिकॉर्ड और शैक्षणिक योग्यता की घोषणा करनी चाहिए।", 
                mr: "उमेदवारांनी त्यांची मालमत्ता, गुन्हेगारी रेकॉर्ड आणि शैक्षणिक पात्रता पारदर्शकपणे घोषित करणे आवश्यक आहे.", 
                ta: "வேட்பாளர்கள் தங்கள் சொத்துக்கள், குற்றவியல் பதிவுகள் மற்றும் கல்வித் தகுதிகளை வெளிப்படையாக அறிவிக்க வேண்டும்." 
            }
        },
        {
            icon: "fa-solid fa-bullhorn",
            title: { en: "Campaigning", hi: "चुनाव प्रचार", mr: "निवडणूक प्रचार", ta: "பிரச்சாரம்" },
            explanation: { 
                en: "Candidates and political parties present their policies and manifestos to the public.", 
                hi: "उम्मीदवार और राजनीतिक दल अपनी नीतियों और घोषणापत्र को जनता के सामने पेश करते हैं।", 
                mr: "उमेदवार आणि राजकीय पक्ष त्यांची धोरणे आणि जाहीरनामा जनतेसमोर मांडतात.", 
                ta: "வேட்பாளர்கள் மற்றும் அரசியல் கட்சிகள் தங்கள் கொள்கைகள் மற்றும் தேர்தல் அறிக்கைகளை பொது மக்களிடம் முன்வைக்கின்றனர்." 
            },
            learnMore: { 
                en: "Campaigning involves rallies and debates. By law, all campaigning must stop 48 hours before polling begins.", 
                hi: "प्रचार में रैलियां और बहस शामिल हैं। कानून के अनुसार, मतदान शुरू होने से 48 घंटे पहले प्रचार बंद हो जाना चाहिए।", 
                mr: "प्रचारामध्ये रॅली आणि वादविवाद यांचा समावेश असतो. कायद्यानुसार, मतदान सुरू होण्याच्या ४८ तास आधी प्रचार थांबवणे आवश्यक आहे.", 
                ta: "பிரச்சாரத்தில் பேரணிகள் மற்றும் விவாதங்கள் அடங்கும். சட்டப்படி, வாக்குப்பதிவுக்கு 48 மணி நேரத்திற்கு முன்பே பிரச்சாரம் முடிவடையும்." 
            }
        },
        {
            icon: "fa-solid fa-person-booth",
            title: { en: "Voting Process", hi: "मतदान प्रक्रिया", mr: "मतदान प्रक्रिया", ta: "வாக்களிக்கும் முறை" },
            explanation: { 
                en: "On election day, registered voters go to designated polling stations to cast their votes.", 
                hi: "चुनाव के दिन पंजीकृत मतदाता अपना वोट डालने के लिए मतदान केंद्रों पर जाते हैं।", 
                mr: "निवडणुकीच्या दिवशी नोंदणीकृत मतदार मतदान करण्यासाठी मतदान केंद्रांवर जातात.", 
                ta: "தேர்தல் நாளில், பதிவு செய்யப்பட்ட வாக்காளர்கள் தங்களுக்கு ஒதுக்கப்பட்ட வாக்குச்சாவடிகளுக்கு சென்று வாக்களிக்கின்றனர்." 
            },
            learnMore: { 
                en: "Voters use Electronic Voting Machines (EVMs). Indelible ink is applied to the voter's finger.", 
                hi: "मतदाता ईवीएम का उपयोग करते हैं। मतदाता की उंगली पर अमिट स्याही लगाई जाती है।", 
                mr: "मतदार ईव्हीएम वापरतात. मतदाराच्या बोटावर न पुसता येणारी शाई लावली जाते.", 
                ta: "வாக்காளர்கள் மின்னணு வாக்குப்பதிவு இயந்திரங்களை (EVMs) பயன்படுத்துகின்றனர்." 
            }
        },
        {
            icon: "fa-solid fa-chart-bar",
            title: { en: "Vote Counting", hi: "मतगणना", mr: "मतमोजणी", ta: "வாக்கு எண்ணிக்கை" },
            explanation: { 
                en: "After voting concludes, EVMs are securely transported to centers where votes are tallied.", 
                hi: "मतदान समाप्त होने के बाद, ईवीएम को सुरक्षित रूप से मतगणना केंद्रों तक पहुंचाया जाता है।", 
                mr: "मतदान संपल्यानंतर, ईव्हीएम सुरक्षितपणे मतमोजणी केंद्रांवर नेले जातात.", 
                ta: "வாக்குப்பதிவு முடிந்ததும், வாக்குகள் எண்ணப்படும் மையங்களுக்கு EVM-கள் பாதுகாப்பாக கொண்டு செல்லப்படுகின்றன." 
            },
            learnMore: { 
                en: "Representatives of all major candidates are present during the counting process to ensure absolute transparency.", 
                hi: "पारदर्शिता सुनिश्चित करने के लिए सभी प्रमुख उम्मीदवारों के प्रतिनिधि मतगणना के दौरान उपस्थित रहते हैं।", 
                mr: "संपूर्ण पारदर्शकता सुनिश्चित करण्यासाठी सर्व प्रमुख उमेदवारांचे प्रतिनिधी मतमोजणी प्रक्रियेदरम्यान उपस्थित असतात.", 
                ta: "முழுமையான வெளிப்படைத்தன்மையை உறுதி செய்வதற்காக முக்கிய வேட்பாளர்களின் பிரதிநிதிகள் வாக்கு எண்ணும் போது இருப்பார்கள்." 
            }
        },
        {
            icon: "fa-solid fa-trophy",
            title: { en: "Result Declaration", hi: "परिणाम की घोषणा", mr: "निकाल घोषणा", ta: "முடிவு அறிவிப்பு" },
            explanation: { 
                en: "The election commission officially announces the final results. The candidate with the highest number of valid votes wins.", 
                hi: "चुनाव आयोग आधिकारिक तौर पर अंतिम परिणामों की घोषणा करता है। सबसे अधिक वोट पाने वाला उम्मीदवार जीतता है।", 
                mr: "निवडणूक आयोग अधिकृतपणे अंतिम निकाल जाहीर करतो. सर्वाधिक वैध मते मिळवणारा उमेदवार जिंकतो.", 
                ta: "தேர்தல் ஆணையம் அதிகாரப்பூர்வமாக இறுதி முடிவுகளை அறிவிக்கிறது. அதிக வாக்களிக்கப்பட்ட வேட்பாளர் வெற்றி பெறுகிறார்." 
            },
            learnMore: { 
                en: "In a parliamentary system, the party winning a majority of seats forms the government.", 
                hi: "संसदीय प्रणाली में, अधिकांश सीटें जीतने वाली पार्टी सरकार बनाती है।", 
                mr: "संसदीय प्रणालीमध्ये, बहुसंख्य जागा जिंकणारा पक्ष सरकार स्थापन करतो.", 
                ta: "பாராளுமன்ற அமைப்பில், பெரும்பான்மை இடங்களை வெல்லும் கட்சி அரசாங்கத்தை அமைக்கிறது." 
            }
        }
    ],
    knowledgeCards: [
        {
            icon: "fa-solid fa-vote-yea",
            title: { en: "What is Voting?", hi: "मतदान क्या है?", mr: "मतदान म्हणजे काय?", ta: "வாக்களிப்பு என்றால் என்ன?" },
            content: { en: "Voting is a method by which a group makes a decision or expresses an opinion.", hi: "मतदान एक ऐसा तरीका है जिसके द्वारा एक समूह निर्णय लेता है।", mr: "मतदान ही एक पद्धत आहे ज्याद्वारे एखादा गट निर्णय घेतो.", ta: "வாக்களிப்பு என்பது ஒரு குழு ஒரு முடிவை எடுக்கும் முறையாகும்." }
        },
        {
            icon: "fa-solid fa-microchip",
            title: { en: "What is an EVM?", hi: "EVM क्या है?", mr: "EVM म्हणजे काय?", ta: "EVM என்றால் என்ன?" },
            content: { en: "An Electronic Voting Machine (EVM) is a secure device used to record and count votes.", hi: "ईवीएम एक सुरक्षित उपकरण है जिसका उपयोग वोट रिकॉर्ड करने के लिए किया जाता है।", mr: "इलेक्ट्रॉनिक मतदान यंत्र (EVM) हे मतदानाची नोंद आणि मोजणी करणारे एक सुरक्षित साधन आहे.", ta: "EVM என்பது வாக்குகளைப் பதிவு செய்யப் பயன்படும் ஒரு பாதுகாப்பான சாதனமாகும்." }
        },
        {
            icon: "fa-solid fa-landmark-dome",
            title: { en: "Why Elections Matter?", hi: "चुनाव क्यों मायने रखते हैं?", mr: "निवडणुका का महत्त्वाच्या आहेत?", ta: "தேர்தல்கள் ஏன் முக்கியம்?" },
            content: { en: "Elections are the heartbeat of democracy. They ensure transitions of power.", hi: "चुनाव लोकतंत्र की धड़कन हैं।", mr: "निवडणुका लोकशाहीची धडकन आहेत.", ta: "தேர்தல்கள் ஜனநாயகத்தின் இதயம்." }
        },
        {
            icon: "fa-solid fa-users",
            title: { en: "Who can vote?", hi: "कौन मतदान कर सकता है?", mr: "कोण मतदान करू शकते?", ta: "யார் வாக்களிக்கலாம்?" },
            content: { en: "Universally, any citizen who has reached the legal voting age and is registered.", hi: "कोई भी नागरिक जो मतदान की आयु तक पहुँच चुका है और पंजीकृत है।", mr: "कोणताही नागरिक ज्याने मतदानाचे वय पूर्ण केले आहे आणि नोंदणीकृत आहे.", ta: "வாக்களிக்கும் வயதை எட்டிய பதிவு செய்யப்பட்ட எந்தவொரு குடிமகனும்." }
        }
    ],
    quiz: [
        {
            question: { en: "What is the minimum age to vote in most modern democracies?", hi: "मतदान करने की न्यूनतम आयु क्या है?", mr: "मतदानासाठी किमान वय किती आहे?", ta: "வாக்களிக்க குறைந்தபட்ச வயது என்ன?" },
            options: { en: ["16 Years", "18 Years", "21 Years", "25 Years"], hi: ["16 वर्ष", "18 वर्ष", "21 वर्ष", "25 वर्ष"], mr: ["१६ वर्षे", "१८ वर्षे", "२१ वर्षे", "२५ वर्षे"], ta: ["16 வயது", "18 வயது", "21 வயது", "25 வயது"] },
            answer: 1
        },
        {
            question: { en: "What does EVM stand for?", hi: "EVM का पूर्ण रूप क्या है?", mr: "ईव्हीएम (EVM) म्हणजे काय?", ta: "EVM என்பதன் விரிவாக்கம் என்ன?" },
            options: { en: ["Evaluation Module", "Electronic Voting Machine", "Voice Mechanism", "Voting Method"], hi: ["एवैल्यूएशन मॉड्यूल", "इलेक्ट्रॉनिक वोटिंग मशीन", "वॉयस मैकेनिज्म", "वोटिंग मेथड"], mr: ["मूल्यमापन मॉड्यूल", "इलेक्ट्रॉनिक व्होटिंग मशीन", "व्हॉइस मेकॅनिझम", "व्होटिंग मेथड"], ta: ["மதிப்பீட்டு தொகுதி", "மின்னணு வாக்குப்பதிவு இயந்திரம்", "குரல் பொறிமுறை", "வாக்களிக்கும் முறை"] },
            answer: 1
        },
        {
            question: { en: "What must happen 48 hours before polling begins?", hi: "मतदान शुरू होने से 48 घंटे पहले क्या होना चाहिए?", mr: "मतदान सुरू होण्यापूर्वी ४८ तास काय झाले पाहिजे?", ta: "வாக்குச்சாவடிக்கு 48 மணி நேரத்திற்கு முன்பு என்ன நடக்க வேண்டும்?" },
            options: { en: ["Voting starts", "Results are declared", "Campaigning must stop", "Nominations are filed"], hi: ["मतदान शुरू", "परिणाम की घोषणा", "प्रचार बंद होना चाहिए", "नामांकन"], mr: ["मतदान सुरू", "निकाल जाहीर", "प्रचार थांबणे आवश्यक", "नामांकन"], ta: ["வாக்குப்பதிவு", "முடிவு", "பிரச்சாரம் முடிவடையும்", "நியமனம்"] },
            answer: 2
        }
    ],
    stateTimelines: {
        "Maharashtra": [
            { date: "Oct 15, 2024", event: { en: "Notification", hi: "अधिसूचना", mr: "अधिसूचना", ta: "அறிவிப்பு" } },
            { date: "Nov 20, 2024", event: { en: "Date of Poll", hi: "मतदान", mr: "मतदान", ta: "வாக்குப்பதிவு" } },
            { date: "Nov 23, 2024", event: { en: "Results", hi: "परिणाम", mr: "निकाल", ta: "முடிவு" } }
        ],
        "Delhi": [
            { date: "Jan 05, 2025", event: { en: "Notification", hi: "अधिसूचना", mr: "अधिसूचना", ta: "அறிவிப்பு" } },
            { date: "Feb 08, 2025", event: { en: "Date of Poll", hi: "मतदान", mr: "मतदान", ta: "வாக்குப்பதிவு" } },
            { date: "Feb 11, 2025", event: { en: "Results", hi: "परिणाम", mr: "निकाल", ta: "முடிவு" } }
        ],
        "Karnataka": [
            { date: "Apr 13, 2023", event: { en: "Notification", hi: "अधिसूचना", mr: "अधिसूचना", ta: "அறிவிப்பு" } },
            { date: "May 10, 2023", event: { en: "Date of Poll", hi: "मतदान", mr: "मतदान", ta: "வாக்குப்பதிவு" } },
            { date: "May 13, 2023", event: { en: "Results", hi: "परिणाम", mr: "निकाल", ta: "முடிவு" } }
        ]
    },
    chatResponses: [
        { keywords: ["where", "polling booth", "station", "कहाँ"], response: { en: "You can find your polling booth on NVSP portal.", hi: "आप अपने मतदान केंद्र को एनवीएसपी (NVSP) पोर्टल पर खोज सकते हैं।", mr: "तुम्ही एनव्हीएसपी पोर्टलवर तुमचे मतदान केंद्र शोधू शकता.", ta: "NVSP போர்ட்டலில் உங்கள் வாக்குச்சாவடியை நீங்கள் காணலாம்." } },
        { keywords: ["documents", "register", "proof", "दस्तावेज़", "नोंदणी"], response: { en: "Needed: Identity Proof, Age Proof, Photo.", hi: "जरूरी: पहचान प्रमाण, आयु प्रमाण, फोटो।", mr: "आवश्यक: ओळख पुरावा, वयाचा पुरावा, फोटो.", ta: "தேவை: அடையாள சான்று, வயது சான்று, புகைப்படம்." } },
        { keywords: ["evm", "machine", "how to vote", "कैसे"], response: { en: "An EVM has candidate names. Press the blue button.", hi: "ईवीएम में बटन होते हैं। नीला बटन दबाएं।", mr: "ईव्हीएममध्ये बटन असतात. निळे बटण दाबा.", ta: "EVM-ல் பட்டன்கள் உள்ளன. நீல நிற பொத்தானை அழுத்தவும்." } },
        { keywords: ["age", "18", "can i vote"], response: { en: "You must be 18+ to vote.", hi: "मतदान के लिए 18+ होना चाहिए।", mr: "मतदानासाठी १८+ असणे आवश्यक आहे.", ta: "வாக்களிக்க உங்களுக்கு 18+ வயது இருக்க வேண்டும்." } }
    ],
    documentsChecklist: [
        { id: "doc1", label: { en: "Aadhar Card or Passport", hi: "आधार कार्ड या पासपोर्ट", mr: "आधार कार्ड किंवा पासपोर्ट", ta: "ஆதார் அட்டை அல்லது கடவுச்சீட்டு" } },
        { id: "doc2", label: { en: "PAN Card or Birth Certificate", hi: "पैन कार्ड या जन्म प्रमाण पत्र", mr: "पॅन कार्ड किंवा जन्म प्रमाणपत्र", ta: "பான் அட்டை அல்லது பிறப்பு சான்றிதழ்" } },
        { id: "doc3", label: { en: "Recent Photo", hi: "नवीनतम फोटो", mr: "अलीकडील फोटो", ta: "சமீபத்திய புகைப்படம்" } }
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
        navResources: "Resources",
        navAbout: "About",
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
        timelineTitle: "Election Process Timeline",
        toolsTitle: "Document Checklist",
        toolsDesc: "Ensure you have these before registering",
        resTitle: "Resources",
        resDesc: "Helpful links and external references",
        aboutTitle: "About this Project",
        aboutSub: "Details about the submission",
        chatTitle: "Election Assistant",
        chatGreet: "Hi! I am your Election Assistant. Ask me anything like 'Where is my polling booth?' or 'What age is required to vote?'"
    },
    hi: {
        navHome: "होम",
        navJourney: "यात्रा",
        navKB: "ज्ञानकोष",
        navQuiz: "प्रश्नोत्तरी",
        navTimeline: "टाइमलाइन",
        navVid: "वोटर आईडी",
        navTools: "उपकरण",
        navResources: "संसाधन",
        navAbout: "हमारे बारे में",
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
        timelineTitle: "चुनाव प्रक्रिया टाइमलाइन",
        toolsTitle: "दस्तावेज़ चेकलिस्ट",
        toolsDesc: "पंजीकरण से पहले सुनिश्चित करें कि आपके पास ये हैं",
        resTitle: "संसाधन",
        resDesc: "उपयोगी लिंक और बाहरी संदर्भ",
        aboutTitle: "इस प्रोजेक्ट के बारे में",
        aboutSub: "Google Prompt Wars सबमिशन के बारे में विवरण",
        chatTitle: "चुनाव सहायक",
        chatGreet: "नमस्ते! मैं आपका चुनाव सहायक हूँ। मुझसे पूछें 'मेरा मतदान केंद्र कहाँ है?' या 'मतदान की आयु क्या है?'"
    },
    mr: {
        navHome: "मुख्यपृष्ठ",
        navJourney: "प्रवास",
        navKB: "ज्ञानकोष",
        navQuiz: "मंजुषा",
        navTimeline: "टाइमलाइन",
        navVid: "मतदार ओळखपत्र",
        navTools: "साधने",
        navResources: "संसाधने",
        navAbout: "आमच्याबद्दल",
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
        timelineTitle: "निवडणूक प्रक्रिया टाइमलाइन",
        toolsTitle: "दस्तऐवज चेकलिस्ट",
        toolsDesc: "नोंदणी करण्यापूर्वी तुमच्याकडे हे असल्याची खात्री करा",
        resTitle: "संसाधने",
        resDesc: "उपयुक्त दुवे आणि बाह्य संदर्भ",
        aboutTitle: "या प्रकल्पाबद्दल",
        aboutSub: "Google Prompt Wars सबमिशनबद्दल तपशील",
        chatTitle: "निवडणूक सहाय्यक",
        chatGreet: "नमस्कार! मी तुमचा निवडणूक सहाय्यक आहे. मला विचारा 'माझे मतदान केंद्र कोठे आहे?' किंवा 'मतदानासाठी वय काय आहे?'"
    },
    ta: {
        navHome: "முகப்பு",
        navJourney: "பயணம்",
        navKB: "அறிவு தளம்",
        navQuiz: "வினாடி வினா",
        navTimeline: "காலவரிசை",
        navVid: "வாக்காளர் அட்டை",
        navTools: "கருவிகள்",
        navResources: "வளங்கள்",
        navAbout: "எங்களைப் பற்றி",
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
        timelineTitle: "தேர்தல் செயல்முறை காலவரிசை",
        toolsTitle: "ஆவண சரிபார்ப்பு பட்டியல்",
        toolsDesc: "பதிவு செய்வதற்கு முன் இவை உங்களிடம் உள்ளதா என்பதை உறுதிப்படுத்தவும்",
        resTitle: "வளங்கள்",
        resDesc: "பயனுள்ள இணைப்புகள் மற்றும் வெளிப்புற குறிப்புகள்",
        aboutTitle: "இந்த திட்டம் பற்றி",
        aboutSub: "Google Prompt Wars சமர்ப்பிப்பு பற்றிய விவரங்கள்",
        chatTitle: "தேர்தல் உதவியாளர்",
        chatGreet: "வணக்கம்! நான் உங்கள் தேர்தல் உதவியாளர். 'என் வாக்குச்சாவடி எங்கே உள்ளது?' அல்லது 'வாக்களிக்க வயது என்ன?' என கேட்கலாம்."
    }
};

const languages = [
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'हिंदी' },
    { code: 'mr', name: 'मराठी' },
    { code: 'ta', name: 'தமிழ்' }
];