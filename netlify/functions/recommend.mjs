import fetch from 'node-fetch';
import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export default async (req) => {
    if (req.method !== "POST") return new Response("Method Not Allowed", { status: 405 });

    try {
        const body = await req.json();
        const { assignedCourses, profile } = body;

        // Fetch Live Search Data based ONLY on the hardcoded courses
        const searchQuery = `Top colleges in ${profile.location} for ${assignedCourses.join(', ')} 2026 admissions`;
        const serpUrl = `https://serpapi.com/search.json?engine=google&q=${encodeURIComponent(searchQuery)}&api_key=${process.env.SERPAPI_KEY}`;
        
        let liveColleges = "Standard universities in the region.";
        try {
            const serpRes = await fetch(serpUrl);
            const serpData = await serpRes.json();
            liveColleges = serpData.organic_results?.slice(0, 5).map(r => `${r.title} - ${r.snippet}`).join(' | ') || liveColleges;
        } catch (e) {
            console.error("SerpApi fetch failed.");
        }

        // STRICT FILTER PROMPT
        const prompt = `
        You are a strict College Search and Filtering Database. Do NOT act as a career counselor. Do NOT evaluate if the courses fit the student. 
        
        The system has ALREADY assigned these courses to the student:
        ${assignedCourses.join(', ')}
        
        Student Filter Criteria:
        - 12th Marks: ${profile.marks}%
        - Location: ${profile.location}
        - Budget: ${profile.budget}
        - 12th Stream: ${profile.stream}
        - Web Search Context: ${liveColleges}

        INSTRUCTIONS:
        1. Format your response in simple HTML (using <h2>, <h3>, <ul>, <li>). Do NOT use markdown formatting like \`\`\`html.
        2. Create a section called "<h2>2. Filtered College Matches</h2>".
        3. For EVERY SINGLE COURSE listed above, you MUST list exactly 3 specific colleges.
        4. Use the Student Filter Criteria to rank and select the colleges (e.g., if budget is "Economical", prioritize government colleges; if location is "Mumbai", only show Mumbai colleges).
        5. Add a one-sentence bullet point under each college explaining why it passed the filter (mentioning marks, budget, or location).
        `;

        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
        });

        let cleanHtml = response.text.replace(/```html/g, '').replace(/```/g, '').trim();

        return new Response(JSON.stringify({ html: cleanHtml }), {
            status: 200,
            headers: { 
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*" 
            }
        });

    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: "Failed to process request." }), { 
            status: 500,
            headers: { "Content-Type": "application/json" }
        });
    }
};
