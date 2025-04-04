import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "AIzaSyBVTcsUxG6xdrAQCV5BIyVepbO7bqquwfY" });

export const useGeminiAI = () => {
  return async (msg, setMsg, setLoading) => {
    setLoading(true)
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: `you are my content writer, so first read my message and Enhance this message more beatiful with easy words and less text, remember don't write anything because whataver you give response directly it will shown to the user so directly leave a perfect response not anything, and if any spelling mistake correct that and use the same language according to the prompt and response a smart answer and don't response same message again: ${msg}`,
    });
    setMsg(response.text)
    setLoading(false)
  };
};
