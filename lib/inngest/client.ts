import { Inngest } from "inngest";

export const inngest = new Inngest({
    id: "skillsync-ai",
    name: "skillsync-ai",
    credentials: {
        gemini: {
            apiKey: process.env.GEMINI_API_KEY
        }
    }
})