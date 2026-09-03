import fetch from 'node-fetch';
import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export default async (req) => {
    if (req.method !== "POST") return new Response("Method Not Allowed", { status: 405 });

    try {
        const body = await req.json();
        const { score, dominantTrait, profile } = body;

        // 1. STRICT DETERMINISTIC RULES (No AI Intervention Here)
        // Mapped exactly to the provided "Course-fit hint" guidelines from the PDF
        const courseGuidelines = {
            A: ["Engineering", "Computer Science", "Analytics"],
            B: ["Law", "Humanities", "Media", "Management"],
            C: ["Design", "Architecture", "Creative Fields"],
            D: ["People-focused courses", "HR", "Education", "Social Work"]
        };

        const assignedCourses = courseGuidelines[dominantTrait];
        
        let aptitudeFit = "Needs more exploration and guidance";
        if (score >= 32) aptitudeFit = "Very strong aptitude fit";
        else if (score >= 24) aptitudeFit = "Strong aptitude fit";
        else if (score >= 16) aptitudeFit = "Moderate aptitude fit";

        // 2. Fetch Live Search Data
        const searchQuery = `Top colleges in ${profile.location} for ${assignedCourses.join(' and ')} 2026 admissions`;
        const serpUrl = `https://serpapi.com/search.json?engine=google&q=${encodeURIComponent(searchQuery)}&api_key=${process.env.SERPAPI_KEY}`;
        
        let liveColleges = "Standard universities in the region.";
        try {
            const serpRes = await fetch(serpUrl);
            const serpData = await serpRes.json();
            liveColleges = serpData.organic_results?.slice(0, 5).map(r => `${r.title} - ${r.snippet}`).join(' | ') || liveColleges;
        } catch (e) {
            console.error("SerpApi fetch failed.");
        }

        // 3. AI AS A STRICT COLLEGE FILTER & RANKER
        const prompt = `
        You are an AI college filtering system. 
        The student has completed an assessment, and their exact courses have ALREADY been decided by the system.
        
        DETERMINED COURSES (DO NOT CHANGE THESE):
        ${assignedCourses.join(', ')}
        
        STUDENT PROFILE FILTER:
        - 12th Stream: ${profile.stream}
        - 12th Marks: ${profile.marks}%
        - Preferred Location: ${profile.location}
        - Budget Preference: ${profile.budget}
        - Search Data Context: ${liveColleges}

        INSTRUCTIONS:
        Write a clean HTML report using <h2>, <h3>, <ul>, <li>, <p>. Do NOT output markdown code blocks (\`\`\`html).
        
        Structure the output EXACTLY like this:
        1. "Assessment Summary": State their aptitude fit (${aptitudeFit}, Score: ${score}/40) and state the determined courses.
        2. "College Rankings": For EACH of the determined courses, list 3 specific colleges that best match the student's Profile Filter (Stream, Marks, Location, Budget). Use the Search Data to help rank them. Explain briefly why each college fits their specific filter.
        Do not suggest alternative career paths. Stick strictly to the determined courses.`;

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
