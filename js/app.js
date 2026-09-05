const questions = [
    { q: "A product is marked 20% above cost price and sold at 10% discount on marked price. What is the profit percentage?", options: { A: "8%", B: "10%", C: "12%", D: "15%" }, answer: "C" },
    { q: "The ratio of boys to girls in a class is 4:5. If there are 36 students in total, how many boys are there?", options: { A: "14", B: "16", C: "18", D: "20" }, answer: "C" },
    { q: "A train travels 180 km in 2.5 hours. What is its average speed?", options: { A: "60 KM/HR", B: "65 KM/HR", C: "70 KM/HR", D: "72 KM/HR" }, answer: "D" },
    { q: "A number is increased by 15% and then decreased by 15%. What is the net effect?", options: { A: "0% gain", B: "1.5% loss", C: " 2.25% loss", D: "3% loss" }, answer: "C" },
    { q: "Simple interest on Rs.5,000 at 8% per annum for 3 years is :", options: { A: "Rs.1000", B: "Rs.1200", C: "Rs.1400", D: "Rs.1600" }, answer: "B" },
    { q: "If 3𝑥−7=203x−7=20, what is the value of 𝑥x?", options: { A: "7", B: "8", C: "9", D: "10" }, answer: "B" },
    { q: " A shopkeeper buys an item for 800 and sells it for 920. What is the profit percentage?", options: { A: "12", B: "14", C: "15", D: "16" }, answer: "B" },
    { q: "A mixture contains milk and water in the ratio 5:3. If 8 liters of water are added, the ratio becomes 5:5. How much milk was there initially?", options: { A: "10 Litres", B: "12 Litres", C: "15 Litres", D: "20 Litres" }, answer: "C" },
    { q: "A student scores 68, 72, 75, and 85 in four subjects. What is the average score?", options: { A: "72.5", B: "74.5", C: "75", D: "76.5" }, answer: "B" },
    { q: "If 12 workers can complete a task in 15 days, how many days will 18 workers take, assuming equal efficiency?", options: { A: "8", B: "10", C: "12", D: "14" }, answer: "B" },
    { q: "Read the sentence and choose the correct option: “Neither the teacher nor the students _ ready.”", options: { A: " Was.", B: "Were.", C: "Is.", D: "Has." }, answer: "B" },
    { q: "Choose the word closest in meaning to “analyze.”", options: { A: "Guess", B: "Examine", C: "Ignore", D: "Hide" }, answer: "B" },
    { q: " Choose the correct sentence.", options: { A: "She has went to Kolkata.", B: "She have gone to Kolkata.", C: "She has gone to Kolkata.", D: " She gone to Kolkata." }, answer: "C" },
    { q: " A 'bibliography' in a book refers to :", options: { A: "Maps", B: "List of Sources", C: "Author's Photo", D: "Graphs" }, answer: "B" },
    { q: "'Ephemeral' most closely means :", options: { A: "Eternal", B: "Short-lived", C: " Powerful", D: "Confusing" }, answer: "B" },
    { q: "Read the passage and answer:“Many students choose a course only because their friends selected it. However, a better decision is based on personal interest, aptitude, and future goals.”What is the main idea of the passage?", options: { A: "Friends should always choose the same course ", B: " Course selection should depend on personal suitability", C: " Future goals do not matter", D: "Aptitude tests are unnecessary" }, answer: "B" },
    { q: "Choose the Odd one out:", options: { A: "Novel", B: "Essay", C: "Poem", D: "Chapter" }, answer: "D" },
    { q: "Choose the sentence with correct punctuation.", options: { A: "However the result was delay", B: "However, the result was delayed.", C: "However the result, was delayed.", D: "However; the result was delayed" }, answer: "B" },
    { q: "Which number does not belong?"121","144","169","196","225","250":", options: { A: "121", B: "196", C: "225", D: "250" }, answer: "D" },
    { q: "If all pens are stationery and some stationery items are blue, which statement must be true?", options: { A: "All pens are blue", B: " Some stationery items may be blue", C: "No pens are blue", D: "All blue items are pens" }, answer: "B" },
    { q: "In a code where A=1, B=2,....Z=26, what is the value of CAT?", options: { A: "21", B: "22", C: " 24", D: "26" }, answer: "C" },
    { q: "A man walks 5 km north, then 3 km east, then 5 km south. How far is he from the starting point?", options: { A: "2", B: "3", C: "5", D: "8" }, answer: "A" },
    { q: "Find the odd one out.", options: { A: "Triangle", B: "Square", C: "Circle", D: "Cube" }, answer: "D" },
    { q: "If yesterday was Thursday, what day will it be after 10 days?", options: { A: "Friday", B: "Saturday", C: "Sunday", D: "Monday" }, answer: "B" },
    { q: "Statement: All science students study biology or physics. Some biology students also study chemistry.", options: { A: " All science students study chemistry", B: "Some biology students may study chemistry", C: "No science student studies biology", D: "All chemistry students are science students" }, answer: "B" },
    { q: "A seating arrangement question: Five students sit in a row. A is to the left of B, B is to the left of C. Who is in the middle?", options: { A: "A", B: "B", C: "C", D: "Cannot be determined" }, answer: "B" },
    { q: "Looking at a Cylinder from directly above, you see a :", options: { A: "Rectangle", B: "Triangle", C: "Circle", D: "Square" }, answer: "C" },
    { q: "The letter 'b' rotated 180 degree becomes which letter?", options: { A: "d", B: "p", C: "q", D: "b" }, answer: "C" },
    { q: "If you unfold a standard cube, how many squares are in the net?", options: { A: "4", B: "5", C: "6", D: "8" }, answer: "C" },
    { q: "How many faces does a Triangular prism have?", options: { A: "4", B: "5", C: "6", D: "7" }, answer: "A" },
    { q: "Which activity do you enjoy most?", options: { A: "Solving number problems", B: "Reading and writing", C: "Drawing and creating visuals", D: "Organizing people and tasks" }, answer: "A" },
    { q: " When working on a project, you prefer to:", options: { A: " Analyze data", B: " Debate ideas", C: "Design something visually", D: "Lead a groups" }, answer: "A" },
    { q: "Which subject do you naturally like most?", options: { A: "Mathematics", B: "English", C: "Art / Design", D: "Social Science" }, answer: "A" },
    { q: "You are happiest when your work involves:", options: { A: "Logic and problem-solving", B: "Communication and expression", C: " Creativity and visual thinking", D: "Management and teamwork" }, answer: "A" },
    { q: "In a future career, you would rather:", options: { A: "Build solutions to technical problems", B: "Write, speak, or persuade", C: "Create designs or concepts", D: "Work with people and decisions" }, answer: "A" },
    { q: "Which task feels easiest to you?", options: { A: "Interpreting charts and numbers", B: "Summarizing a passage", C: "Sketching a layout", D: "Coordinating a group activity" }, answer: "A" },
    { q: "A shop gives 25% discount on an item marked 1600. What is the selling price?", options: { A: "1100", B: "1150", C: "1200", D: "1250" }, answer: "C" },
    { q: "Find the next term in the series: 2, 5, 11, 23, _", options: { A: "35", B: "45", C: "47", D: "49" }, answer: "C" },
    { q: "Read the statement: “Career choice should match interest and ability.”Which option best supports the statement?", options: { A: "Random choices are best", B: "Personal fit improves success", C: "Only marks matter", D: "Friends decide careers better" }, answer: "B" },
    { q: "A student is strong in logic, numbers, and data interpretation, but weak in drawing. Which course cluster is most suitable?", options: { A: "Design and fine arts", B: "Engineering / analytics", C: "Literature and journalism", D: "Social work only" }, answer: "B" },
    ];

let currentQuestion = 0;
let score = 0;
let answerCounts = { A: 0, B: 0, C: 0, D: 0 };
let userProfile = {};

let sectionScores = {
    numerical: 0,
    verbal: 0,
    logical: 0,
    spatial: 0,
    interest: 0
};

const maxScores = {
    numerical: 10,
    verbal: 8,
    logical: 8,
    spatial: 4,
    interest: 10
};

const courseWeights = [
    { name: "Engineering", numerical: 30, verbal: 10, logical: 30, spatial: 20, interest: 10 },
    { name: "Computer Science / IT", numerical: 30, verbal: 10, logical: 35, spatial: 10, interest: 15 },
    { name: "Commerce / B.Com", numerical: 25, verbal: 20, logical: 20, spatial: 5, interest: 30 },
    { name: "BBA / Management", numerical: 15, verbal: 25, logical: 20, spatial: 5, interest: 35 },
    { name: "Law", numerical: 10, verbal: 35, logical: 25, spatial: 5, interest: 25 },
    { name: "Humanities", numerical: 10, verbal: 35, logical: 20, spatial: 5, interest: 30 },
    { name: "Journalism / Mass Communication", numerical: 10, verbal: 40, logical: 15, spatial: 5, interest: 30 },
    { name: "Design / Fine Arts", numerical: 10, verbal: 15, logical: 15, spatial: 40, interest: 20 },
    { name: "Architecture", numerical: 25, verbal: 10, logical: 20, spatial: 35, interest: 10 },
    { name: "Psychology / Social Work", numerical: 10, verbal: 30, logical: 20, spatial: 5, interest: 35 }
];

// Map standard emojis to your courses
const courseIcons = {
    "Engineering": "⚙️", "Computer Science / IT": "💻", "Commerce / B.Com": "📊",
    "BBA / Management": "🏢", "Law": "⚖️", "Humanities": "🧠",
    "Journalism / Mass Communication": "📰", "Design / Fine Arts": "🎨",
    "Architecture": "🏛️", "Psychology / Social Work": "🤝"
};

function startTest() {
    const stream = document.getElementById('stream').value;
    const marks = document.getElementById('marks').value;
    const location = document.getElementById('location').value;
    const budget = document.getElementById('budget').value;

    if (!stream || !marks || !location || !budget) {
        return alert("Please fill out all profile fields to continue.");
    }

    userProfile = { stream, marks, location, budget };

    document.getElementById('step-profile').classList.add('hidden');
    document.getElementById('step-test').classList.remove('hidden');
    renderQuestion();
}

function renderQuestion() {
    if (currentQuestion >= questions.length) return finishTest();
    
    const qData = questions[currentQuestion];
    
    // Inject the dark theme question card
    document.getElementById('step-test').innerHTML = `
        <div class="bg-cardBg p-8 rounded-2xl border border-gray-800 shadow-xl max-w-3xl mx-auto mt-8">
            <div class="flex items-center space-x-4 mb-8 border-b border-gray-800 pb-6">
                <div class="w-12 h-12 bg-blue-900/30 text-accentCyan rounded-xl flex items-center justify-center font-bold border border-blue-800/50 text-xl">${currentQuestion + 1}</div>
                <h2 class="text-2xl font-bold text-white leading-relaxed">${qData.q}</h2>
            </div>
            <div class="space-y-4">
                ${Object.entries(qData.options).map(([key, text]) => `
                    <button onclick="selectOption('${key}')" class="w-full text-left p-5 border border-gray-700 rounded-xl hover:border-accentPurple hover:bg-gray-800/50 transition text-gray-300 font-medium flex items-center group">
                        <span class="w-8 h-8 rounded-lg bg-gray-800 text-gray-400 flex items-center justify-center mr-4 group-hover:bg-accentPurple group-hover:text-white transition">${key}</span>
                        ${text}
                    </button>
                `).join('')}
            </div>
        </div>
    `;
}

function selectOption(selectedKey) {
    const correctKey = questions[currentQuestion].answer;
    
    if (selectedKey === correctKey) {
        score++;
        if (currentQuestion >= 0 && currentQuestion <= 9) sectionScores.numerical++;
        else if (currentQuestion >= 10 && currentQuestion <= 17) sectionScores.verbal++;
        else if (currentQuestion >= 18 && currentQuestion <= 25) sectionScores.logical++;
        else if (currentQuestion >= 26 && currentQuestion <= 29) sectionScores.spatial++;
        else if (currentQuestion >= 30 && currentQuestion <= 39) sectionScores.interest++;
    }
    
    answerCounts[selectedKey]++; 
    currentQuestion++;
    renderQuestion();
}

async function finishTest() {
    document.getElementById('step-test').classList.add('hidden');
    document.getElementById('step-results').classList.remove('hidden');
    
    // Update Navbar to show completion checks
    const navButtons = document.querySelectorAll('header nav button');
    if(navButtons.length === 3) {
        navButtons[0].className = "px-6 py-2 text-green-400 bg-green-900/20 border border-green-800 rounded-full text-sm font-semibold";
        navButtons[0].innerText = "✓ Profile";
        navButtons[1].className = "px-6 py-2 text-green-400 bg-green-900/20 border border-green-800 rounded-full text-sm font-semibold";
        navButtons[1].innerText = "✓ Aptitude Test";
        navButtons[2].className = "px-6 py-2 bg-accentPurple rounded-full text-sm font-semibold shadow-neon text-white";
    }
    
    const pNum = (sectionScores.numerical / maxScores.numerical) * 100;
    const pVer = (sectionScores.verbal / maxScores.verbal) * 100;
    const pLog = (sectionScores.logical / maxScores.logical) * 100;
    const pSpa = (sectionScores.spatial / maxScores.spatial) * 100;
    const pInt = (sectionScores.interest / maxScores.interest) * 100;

    let courseMatches = courseWeights.map(course => {
        const courseScore = (pNum * (course.numerical/100)) + (pVer * (course.verbal/100)) + (pLog * (course.logical/100)) + (pSpa * (course.spatial/100)) + (pInt * (course.interest/100));
        return { name: course.name, score: parseFloat(courseScore.toFixed(1)), icon: courseIcons[course.name] || "🎓" };
    });

    courseMatches.sort((a, b) => b.score - a.score);

    const topCoursesOver75 = courseMatches.filter(c => c.score > 75);
    const bestFit = topCoursesOver75.length > 0 ? topCoursesOver75[0] : courseMatches[0];

    // Generate HTML for the course progress bars
    const courseListHTML = courseMatches.map((c, index) => `
        <div class="bg-cardBg p-5 rounded-xl border ${index === 0 ? 'border-accentPurple shadow-[0_0_15px_rgba(124,58,237,0.2)]' : 'border-gray-800'} mb-4 flex flex-col">
            <div class="flex justify-between items-center mb-3">
                <div class="flex items-center space-x-3">
                    <span class="text-2xl">${c.icon}</span>
                    <span class="font-bold text-white text-lg">${c.name} ${index === 0 ? '<span class="ml-2 text-xs bg-purple-900/50 text-purple-300 px-2 py-1 rounded-full border border-purple-700">TOP MATCH</span>' : ''}</span>
                </div>
                <span class="font-bold text-accentCyan">${c.score}%</span>
            </div>
            <div class="w-full bg-gray-800 rounded-full h-2">
                <div class="bg-gradient-to-r from-accentPurple to-accentCyan h-2 rounded-full" style="width: ${c.score}%"></div>
            </div>
        </div>
    `).join('');

    const reportContent = document.getElementById('report-content');
    reportContent.innerHTML = `
        <div class="text-center mb-10 mt-4">
            <div class="text-5xl mb-4">⚙️</div>
            <span class="px-4 py-1 border border-green-800 bg-green-900/20 rounded-full text-xs font-semibold tracking-widest text-green-400 mb-4 inline-block">
                ✓ ASSESSMENT COMPLETE — 40 QUESTIONS
            </span>
            <h2 class="text-4xl font-extrabold text-white mb-2">Best Fit: <span class="text-accentPurple">${bestFit.name}</span></h2>
            <p class="text-textMuted">Combined aptitude + interest score: ${bestFit.score}%</p>
            ${topCoursesOver75.length === 0 ? '<p class="text-xs text-orange-400 mt-2">Note: No course achieved over 75%, so your highest overall match has been selected.</p>' : ''}
        </div>

        <!-- Section Breakdown -->
        <div class="bg-cardBg p-6 rounded-2xl border border-gray-800 mb-10">
            <h3 class="text-xs font-bold text-textMuted uppercase tracking-wider mb-6">Your Aptitude Breakdown</h3>
            <div class="grid grid-cols-2 gap-8">
                <div>
                    <div class="flex justify-between text-sm font-semibold mb-2"><span class="text-accentCyan">🔢 Numerical</span> <span>${sectionScores.numerical}/${maxScores.numerical}</span></div>
                    <div class="w-full bg-gray-800 rounded-full h-1.5"><div class="bg-accentCyan h-1.5 rounded-full" style="width: ${pNum}%"></div></div>
                </div>
                <div>
                    <div class="flex justify-between text-sm font-semibold mb-2"><span class="text-purple-400">📖 Verbal</span> <span>${sectionScores.verbal}/${maxScores.verbal}</span></div>
                    <div class="w-full bg-gray-800 rounded-full h-1.5"><div class="bg-purple-400 h-1.5 rounded-full" style="width: ${pVer}%"></div></div>
                </div>
                <div>
                    <div class="flex justify-between text-sm font-semibold mb-2"><span class="text-yellow-500">📐 Spatial</span> <span>${sectionScores.spatial}/${maxScores.spatial}</span></div>
                    <div class="w-full bg-gray-800 rounded-full h-1.5"><div class="bg-yellow-500 h-1.5 rounded-full" style="width: ${pSpa}%"></div></div>
                </div>
                <div>
                    <div class="flex justify-between text-sm font-semibold mb-2"><span class="text-pink-500">🧠 Logical</span> <span>${sectionScores.logical}/${maxScores.logical}</span></div>
                    <div class="w-full bg-gray-800 rounded-full h-1.5"><div class="bg-pink-500 h-1.5 rounded-full" style="width: ${pLog}%"></div></div>
                </div>
            </div>
        </div>

        <!-- Tabs / Headers -->
        <div class="flex space-x-4 mb-6 border-b border-gray-800 pb-4">
            <div class="w-1/2 text-center py-3 bg-accentPurple rounded-xl font-bold text-white shadow-neon flex items-center justify-center space-x-2">
                <span>📊</span> <span>All Course Scores</span>
            </div>
            <div class="w-1/2 text-center py-3 bg-cardBg border border-gray-700 rounded-xl font-bold text-textMuted flex items-center justify-center space-x-2">
                <span>🏛️</span> <span>AI College Matches</span>
            </div>
        </div>

        <!-- Course List -->
        <div class="mb-10">
            ${courseListHTML}
        </div>

        <!-- AI College Matches -->
        <div class="bg-cardBg p-8 rounded-2xl border border-gray-800 mb-8">
            <div class="flex items-center space-x-3 mb-6 border-b border-gray-800 pb-4">
                <span class="text-2xl">🤖</span>
                <h3 class="text-xl font-bold text-white">AI Real-Time Filtering</h3>
            </div>
            
            <div id="ai-status" class="text-center py-8">
                <div class="animate-spin rounded-full h-10 w-10 border-b-2 border-accentCyan mx-auto mb-4"></div>
                <p class="text-gray-400 font-medium animate-pulse">Filtering top colleges for ${bestFit.name} based on your criteria...</p>
            </div>
            
            <!-- prose-invert ensures text is readable on dark background -->
            <div id="ai-colleges-container" class="prose prose-invert max-w-none text-gray-300"></div>
        </div>

        <!-- Action Buttons -->
        <div class="flex space-x-4">
            <button onclick="window.print()" class="w-2/3 py-4 bg-accentPurple hover:bg-purple-600 transition rounded-xl font-bold text-white shadow-neon flex items-center justify-center space-x-2">
                <span>🖨️</span> <span>Print / Download PDF</span>
            </button>
            <button onclick="location.reload()" class="w-1/3 py-4 bg-gray-800 hover:bg-gray-700 transition rounded-xl font-bold text-white border border-gray-700">
                Start Over
            </button>
        </div>
    `;

    try {
        const res = await fetch('/.netlify/functions/recommend', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ assignedCourses: [bestFit.name], profile: userProfile })
        });
        if (!res.ok) throw new Error("API error");
        
        const data = await res.json();
        document.getElementById('ai-status').classList.add('hidden');
        document.getElementById('ai-colleges-container').innerHTML = data.html;
    } catch (err) {
        console.error(err);
        document.getElementById('ai-status').classList.add('hidden');
        document.getElementById('ai-colleges-container').innerHTML = `<div class="p-4 bg-red-900/30 border border-red-800 text-red-400 rounded-lg">Error connecting to the AI college database.</div>`;
    }
}
