const questions = [
    { q: "A product is marked 20% above cost price and sold at 10% discount on marked price. What is the profit percentage?", options: { A: "8%", B: "10%", C: "12%", D: "15%" }, answer: "C" },
    { q: "The ratio of boys to girls in a class is 4:5. If there are 36 students in total, how many boys are there?", options: { A: "14", B: "16", C: "18", D: "20" }, answer: "C" },
    { q: "A train travels 180 km in 2.5 hours. What is its average speed?", options: { A: "60 KM/HR", B: "65 KM/HR", C: "70 KM/HR", D: "72 KM/HR" }, answer: "D" },
    { q: "A number is increased by 15% and then decreased by 15%. What is the net effect?", options: { A: "0% gain", B: "1.5% loss", C: " 2.25% loss", D: "3% loss" }, answer: "C" },
    { q: "The average of 6 numbers is 24. If five of them are 20, 22, 24, 26, and 28, what is the sixth number?", options: { A: "22", B: "24", C: "26", D: "28" }, answer: "C" },
    { q: "If 3𝑥−7=203x−7=20, what is the value of 𝑥x?", options: { A: "7", B: "8", C: "9", D: "10" }, answer: "B" },
    { q: " A shopkeeper buys an item for 800 and sells it for 920. What is the profit percentage?", options: { A: "12", B: "14", C: "15", D: "16" }, answer: "B" },
    { q: "A mixture contains milk and water in the ratio 5:3. If 8 liters of water are added, the ratio becomes 5:5. How much milk was there initially?", options: { A: "10 Litres", B: "12 Litres", C: "15 Litres", D: "20 Litres" }, answer: "C" },
    { q: "A student scores 68, 72, 75, and 85 in four subjects. What is the average score?", options: { A: "72.5", B: "74.5", C: "75", D: "76.5" }, answer: "B" },
    { q: "If 12 workers can complete a task in 15 days, how many days will 18 workers take, assuming equal efficiency?", options: { A: "8", B: "10", C: "12", D: "14" }, answer: "B" },
    { q: "Read the sentence and choose the correct option: “Neither the teacher nor the students _ ready.”", options: { A: " Was.", B: "Were.", C: "Is.", D: "Has." }, answer: "B" },
    { q: "Choose the word closest in meaning to “analyze.”", options: { A: "Guess", B: "Examine", C: "Ignore", D: "Hide" }, answer: "B" },
    { q: " Choose the correct sentence.", options: { A: "She has went to Kolkata.", B: "She have gone to Kolkata.", C: "She has gone to Kolkata.", D: " She gone to Kolkata." }, answer: "C" },
    { q: " Fill in the blank: He was angry _ the delay in the result.", options: { A: "For", B: "At", C: "With", D: "On" }, answer: "C" },
    { q: "Choose the antonym of “temporary.", options: { A: "Brief", B: "Short-term", C: " Permanent", D: "Recent" }, answer: "C" },
    { q: "Read the passage and answer:“Many students choose a course only because their friends selected it. However, a better decision is based on personal interest, aptitude, and future goals.”What is the main idea of the passage?", options: { A: "Friends should always choose the same course ", B: " Course selection should depend on personal suitability", C: " Future goals do not matter", D: "Aptitude tests are unnecessary" }, answer: "B" },
    { q: "Choose the correct meaning of “reliable.”", options: { A: "Trustworthy", B: "Funny", C: "Expensive", D: "Lazzy" }, answer: "A" },
    { q: "Choose the sentence with correct punctuation.", options: { A: "However the result was delay", B: "However, the result was delayed.", C: "However the result, was delayed.", D: "However; the result was delayed" }, answer: "B" },
    { q: "Find the next number in the series: 3, 6, 12, 24, _", options: { A: "30", B: "36", C: "48", D: "60" }, answer: "C" },
    { q: "If all pens are stationery and some stationery items are blue, which statement must be true?", options: { A: "All pens are blue", B: " Some stationery items may be blue", C: "No pens are blue", D: "All blue items are pens" }, answer: "B" },
    { q: "In a code, TABLE is written as UBMCF. How is CHAIR written?", options: { A: "DIBJS", B: "DICJS", C: " DJBIS", D: "EHJKT" }, answer: "A" },
    { q: "A man walks 5 km north, then 3 km east, then 5 km south. How far is he from the starting point?", options: { A: "2", B: "3", C: "5", D: "8" }, answer: "A" },
    { q: "Find the odd one out.", options: { A: "Triangle", B: "Square", C: "Circle", D: "Cube" }, answer: "D" },
    { q: "If yesterday was Thursday, what day will it be after 10 days?", options: { A: "Friday", B: "Saturday", C: "Sunday", D: "Monday" }, answer: "B" },
    { q: "Statement: All science students study biology or physics. Some biology students also study chemistry.", options: { A: " All science students study chemistry", B: "Some biology students may study chemistry", C: "No science student studies biology", D: "All chemistry students are science students" }, answer: "B" },
    { q: "A seating arrangement question: Five students sit in a row. A is to the left of B, B is to the left of C. Who is in the middle?", options: { A: "A", B: "B", C: "C", D: "Cannot be determined" }, answer: "B" },
    { q: "A student’s marks in five subjects are: 70, 75, 80, 85, and 90. What is the total?", options: { A: "390", B: "400", C: "405", D: "410" }, answer: "C" },
    { q: "In a class, 40% of students like science, 30% like commerce, and the rest like arts. If there are 50 students, how many like arts?", options: { A: "10", B: "15", C: "20", D: "25" }, answer: "C" },
    { q: "A company sold 200 units in January, 240 in February, and 300 in March. What was the percentage increase from January to March?", options: { A: "20%", B: "30%", C: "40%", D: "50%" }, answer: "C" },
    { q: "If a bar chart shows sales of A, B, C, and D as 40, 50, 60, and 70 respectively, what is the average sales value?", options: { A: "50", B: "55", C: "60", D: "65" }, answer: "B" },
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

function startTest() {
    const stream = document.getElementById('stream').value;
    const marks = document.getElementById('marks').value;
    const location = document.getElementById('location').value;
    const budget = document.getElementById('budget').value;

    if (!stream || !marks || !location || !budget) {
        return alert("Please fill out all profile fields to continue.");
    }

    function selectOption(selectedKey) {
    const correctKey = questions[currentQuestion].answer;
    
    if (selectedKey === correctKey) {
        score++;
        
        if (currentQuestion >= 0 && currentQuestion <= 9) {
            sectionScores.numerical++;
        } else if (currentQuestion >= 10 && currentQuestion <= 17) {
           async function finishTest() {
    document.getElementById('step-test').classList.add('hidden');
    document.getElementById('step-results').classList.remove('hidden');
    
    const pNum = (sectionScores.numerical / maxScores.numerical) * 100;
    const pVer = (sectionScores.verbal / maxScores.verbal) * 100;
    const pLog = (sectionScores.logical / maxScores.logical) * 100;
    const pSpa = (sectionScores.spatial / maxScores.spatial) * 100;
    const pInt = (sectionScores.interest / maxScores.interest) * 100;

    let courseMatches = courseWeights.map(course => {
        const courseScore = 
            (pNum * (course.numerical / 100)) +
            (pVer * (course.verbal / 100)) +
            (pLog * (course.logical / 100)) +
            (pSpa * (course.spatial / 100)) +
            (pInt * (course.interest / 100));

        return {
            name: course.name,
            score: parseFloat(courseScore.toFixed(2))
        };
    });

    courseMatches.sort((a, b) => b.score - a.score);

    const topCoursesOver75 = courseMatches.filter(c => c.score > 75);
    let bestFitCourse = "";
    let bestFitScore = 0;

    if (topCoursesOver75.length > 0) {
        bestFitCourse = topCoursesOver75[0].name;
        bestFitScore = topCoursesOver75[0].score;
    } else {
        bestFitCourse = courseMatches[0].name;
        bestFitScore = courseMatches[0].score;
    }

    const tableRows = courseMatches.map(c => `
        <tr class="border-b border-blue-100 hover:bg-blue-50 transition">
            <td class="py-3 px-2 text-blue-900">${c.name}</td>
            <td class="py-3 px-2 text-blue-900 font-semibold">${c.score}%</td>
        </tr>
    `).join('');

    const reportContent = document.getElementById('report-content');
    reportContent.innerHTML = `
        <div class="p-6 bg-white border border-blue-200 shadow-sm rounded-lg mb-6">
            <h2 class="text-2xl font-bold text-blue-800 mb-4">1. Your Assessment Results</h2>
            
            <div class="bg-green-50 border border-green-200 p-4 rounded-lg mb-6">
                <p class="text-lg text-green-900"><strong>Best Fit Course:</strong> <span class="font-bold">${bestFitCourse}</span></p>
                <p class="text-sm text-green-700">Highest matching score: ${bestFitScore}%</p>
                ${topCoursesOver75.length === 0 ? '<p class="text-xs text-orange-600 mt-1">Note: No course achieved over 75%, so your highest overall match has been selected.</p>' : ''}
            </div>

            <h3 class="text-xl font-bold text-blue-800 mb-3">Complete Weighted Score List</h3>
            <table class="w-full text-left border-collapse">
                <thead>
                    <tr class="border-b-2 border-blue-200 bg-blue-50">
                        <th class="py-3 px-2 text-blue-800 font-bold">Course</th>
                        <th class="py-3 px-2 text-blue-800 font-bold">Weighted score</th>
                    </tr>
                </thead>
                <tbody>
                    ${tableRows}
                </tbody>
            </table>
        </div>

        <div id="ai-status" class="text-center py-6">
            <div class="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-700 mx-auto mb-4"></div>
            <p class="text-gray-600 font-medium animate-pulse">AI is filtering colleges for ${bestFitCourse} based on your budget, location, and marks...</p>
        </div>
        <div id="ai-colleges-container" class="prose max-w-none text-gray-700 mt-6"></div>
    `;

    try {
        const res = await fetch('/.netlify/functions/recommend', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ assignedCourses: [bestFitCourse], profile: userProfile })
        });
        
        if (!res.ok) throw new Error("API responded with an error");
        
        const data = await res.json();
        
        document.getElementById('ai-status').classList.add('hidden');
        document.getElementById('ai-colleges-container').innerHTML = data.html;
        
        document.getElementById('print-btn').classList.remove('hidden');
        document.getElementById('reset-btn').classList.remove('hidden');
    } catch (err) {
        console.error(err);
        document.getElementById('ai-status').classList.add('hidden');
        document.getElementById('ai-colleges-container').innerHTML = `<div class="p-4 bg-red-100 text-red-700 rounded-lg">Error connecting to the AI college database.</div>`;
        document.getElementById('reset-btn').classList.remove('hidden');
    }
}
