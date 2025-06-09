import { Groq } from "groq-sdk";  //imported Groq
import prompt from "../../groq_prompt";

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY || "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",    //added api key
});

export async function getChatResponse(message:string){     //starting with thee response function.
    try{
        const completion = await groq.chat.completions.create({
          messages : [
            {
                role: "system",
                content : prompt
            },
            {
                role: "user", 
                content: message
              }
          ],
          model: "llama3-8b-8192"  
        });
        return completion.choices[0]?.message?.content || "Sorry , I couldn't process that.";
    } catch (error) {
        return "I'm having trouble right now . Please try again." ;
    }
}