const questions = [
    { q: "A student scores 72 out of 90. What is the percentage?", options: { A: "72%", B: "75%", C: "80%", D: "85%" }, answer: "C" },
    { q: "If the ratio of boys to girls in a class is 3:5 and there are 24 boys, how many girls are there?", options: { A: "30", B: "32", C: "36", D: "40" }, answer: "C" },
    { q: "Choose the correct synonym for 'rapid'.", options: { A: "Slow", B: "Quick", C: "Weak", D: "Late" }, answer: "B" },
    { q: "Which task do you enjoy most?", options: { A: "Solving number problems", B: "Reading and writing", C: "Drawing or designing", D: "Organizing people and events" }, answer: "A" },
    { q: "In a future career, you would most like to:", options: { A: "Solve technical problems", B: "Communicate and persuade", C: "Design creative products", D: "Help and manage people" }, answer: "A" }
];

let currentQuestion = 0;
let score = 0;
let answerCounts = { A: 0, B: 0, C: 0, D: 0 };
let userProfile = {};

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
    document.getElementById('question-tracker').innerText = `Question ${currentQuestion + 1} of ${questions.length}`;
    document.getElementById('question-container').innerText = qData.q;
    
    const optionsHtml = Object.entries(qData.options).map(([key, text]) => 
        `<button onclick="selectOption('${key}')" class="text-left p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition bg-white shadow-sm">${key}. ${text}</button>`
    ).join('');
    
    document.getElementById('options-container').innerHTML = optionsHtml;
}

function selectOption(selectedKey) {
    const correctKey = questions[currentQuestion].answer;
    if (selectedKey === correctKey) score++;
    answerCounts[selectedKey]++; 
    
    currentQuestion++;
    renderQuestion();
}

async function finishTest() {
    document.getElementById('step-test').classList.add('hidden');
    document.getElementById('step-results').classList.remove('hidden');
    document.getElementById('loading').classList.remove('hidden');

    const sortedTraits = Object.entries(answerCounts).sort((a, b) => b[1] - a[1]);
    const dominantTraitKey = sortedTraits[0][0];

    try {
        const res = await fetch('/.netlify/functions/recommend', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                score, 
                dominantTrait: dominantTraitKey, 
                profile: userProfile 
            })
        });
        
        if (!res.ok) throw new Error("API responded with an error");
        
        const data = await res.json();
        
        document.getElementById('loading').classList.add('hidden');
        document.getElementById('report-content').innerHTML = data.html;
        document.getElementById('print-btn').classList.remove('hidden');
        document.getElementById('reset-btn').classList.remove('hidden');
    } catch (err) {
        console.error(err);
        document.getElementById('loading').classList.add('hidden');
        document.getElementById('report-content').innerHTML = `<div class="p-4 bg-red-100 text-red-700 rounded-lg">Error generating report.</div>`;
        document.getElementById('reset-btn').classList.remove('hidden');
    }
}
