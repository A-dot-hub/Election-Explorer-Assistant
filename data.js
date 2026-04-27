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
