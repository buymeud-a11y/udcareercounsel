# 🎯 CareerPath AI

A privacy-first, deterministic career counseling web application designed to help Class 12 students identify their ideal career tracks and discover top-rated, localized colleges. 

The application utilizes a custom 40-question cognitive assessment and an advanced weighted mathematical matrix to calculate career aptitude, paired with a serverless AI backend for real-time college filtering.

---

## 🏗 Architecture & Tech Stack

| Component | Technology Used |
| :--- | :--- |
| **Frontend Markup** | HTML5 |
| **Styling** | Tailwind CSS (via CDN) |
| **Client-Side Logic** | Vanilla JavaScript (ES6+) |
| **Backend API** | Node.js (Netlify Serverless Functions) |
| **Hosting & Deployment** | Netlify (GitHub Integration) |

---

## 🧠 The Deterministic Scoring Engine

* **Assessment Structure:** A 40-question array dynamically evaluating five specific cognitive and preference domains: Numerical (10), Verbal (8), Logical (8), Spatial (4), and Interest (10).
* **Weighted Matrix:** A custom mathematical model that cross-references the user's raw percentage in each category against predefined, heavily researched metric weights for 10 distinct career tracks.
* **Threshold Logic:** An autonomous filter that isolates the highest-scoring match, applying a strict 75% confidence threshold to determine an absolute "Best Fit," complete with fallback protocols for scores below the baseline.

---

## 💻 User Interface & Experience

* **SPA Behavior:** Operates fluidly as a Single Page Application, utilizing JavaScript DOM manipulation to inject questions and transition between states (Profile -> Test -> Results) without requiring page reloads.
* **Premium Visual Language:** Features a custom dark theme utilizing a `#090B14` background, contrasted with neon purple (`#7C3AED`) and cyan (`#06B6D4`) UI elements for a modern, high-end aesthetic.
* **PDF Optimization:** Implements customized `@media print` CSS rules to override default browser behaviors, ensuring the exact dark mode styling and gradient elements are preserved during local document export.

---

## 🔒 Privacy & AI Integration

* **Zero-Retention Model:** Operates entirely in the client's active browser memory. Demographic inputs and test scores are never stored in a database and are immediately destroyed upon closing the window or refreshing the page.
* **Asynchronous Filtering:** Executes a secure `POST` request to a serverless Netlify function (`recommend.mjs`), passing only the final winning course and strict demographic parameters (budget, location, marks) to fetch highly localized, real-time college data from the AI.

---

## 🚀 Deployment 
This project is configured for continuous deployment via Netlify. Any changes pushed to the `main` branch of this GitHub repository will automatically trigger a new build and deploy to the live URL.
