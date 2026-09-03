import fetch from 'node-fetch';
import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export default async (req) => {
    if (req.method !== "POST") return new Response("Method Not Allowed", { status: 405 });

    try {
        const body = await req.json();
        const { score, dominantTrait, stream, isConflicted } = body;

        let courseHint = "";
        if (dominantTrait === "A") courseHint = "Engineering, computer science, data analytics";
        else if (dominantTrait === "B") courseHint = "Law, humanities, media, business management";
        else if (dominantTrait === "C") courseHint = "Design, architecture, creative and visual fields";
        else if (dominantTrait === "D") courseHint = "Psychology, HR, education, social work";

        // Fetch Live College Data via SerpApi
        const searchQuery = `Top colleges in India for ${courseHint} 2026 admissions`;
        const serpUrl = `https://serpapi.com/search.json?engine=google&q=${encodeURIComponent(searchQuery)}&api_key=${process.env.SERPAPI_KEY}`;
        
        let liveColleges = "Standard top-tier universities.";
        try {
            const serpRes = await fetch(serpUrl);
            const serpData = await serpRes.json();
            liveColleges = serpData.organic_results?.slice(0, 4).map(r => `${r.title}`).join(', ') || liveColleges;
        } catch (e) {
            console.error("SerpApi fetch failed, falling back to LLM knowledge.");
        }

        // Base instructions for styling
        const styleInstructions = `Format the output in clean, semantic HTML (using <h2>, <h3>, <ul>, <li>, <p>, <strong>). Do NOT wrap the response in ```html blocks or include <html>, <head>, or <body> tags.`;

        let prompt = "";
        
        if (isConflicted) {
            prompt = `
            You are an expert career counselor for Indian students. 
            Student Profile (Anonymized): 12th Stream: ${stream}.
            
            EDGE CASE ALERT: This student's test results show highly mixed and conflicting interests. They are a "multi-potentialite".
            Recent Search Data context: ${liveColleges}.
            
            Write a clear, empathetic career roadmap. Include:
            1. An encouraging summary acknowledging their diverse interests as a strength.
            2. Suggest 3 interdisciplinary courses (e.g., B.Tech + MBA, Liberal Arts, UI/UX).
            3. CRITICAL: For EVERY SINGLE COURSE you suggest, provide a sub-list of EXACTLY 3 recommended colleges in India that offer it and accept students from the ${stream} stream.
            
            ${styleInstructions}`;
        } else {
            prompt = `
            You are an expert career counselor for Indian students. 
            Student Profile (Anonymized): 12th Stream: ${stream}.
            Aptitude Score: ${score}/40. 
            Recommended Fields based on test: ${courseHint}.
            Recent Search Data context: ${liveColleges}.

            Write a clear, structured career roadmap. Include:
            1. A brief summary of their aptitude fit.
            2. Top 3 recommended courses specifically tailored for a ${stream} student entering the ${courseHint} field.
            3. CRITICAL: For EVERY SINGLE COURSE you suggest, provide a sub-list of EXACTLY 3 highly-rated colleges/universities in India that offer that specific course. Base this on the student's profile and the search data provided.
            
            ${styleInstructions}`;
        }

        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
        });

        // Strip markdown code blocks if the LLM accidentally includes them
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
