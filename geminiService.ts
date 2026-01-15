
import { GoogleGenAI } from "@google/genai";
import { AxisResult, Persona } from "./types";

export const generateSpiritualInsight = async (persona: Persona, results: AxisResult[]) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
  
  const resultsSummary = results.map(r => 
    `${r.leftLabel} vs ${r.rightLabel}: ${r.percentageLeft}% vs ${r.percentageRight}%`
  ).join(", ");

  const prompt = `
    Jesteś ekspertem w teologii duchowości i kierownictwie duchowym. 
    Użytkownik właśnie ukończył test "Stylów Duchowości". 
    Oto jego wyniki:
    Persona: ${persona.name}
    Opis persony: ${persona.description}
    Szczegółowe osie: ${resultsSummary}

    Napisz krótkie, inspirujące "Słowo na drogę" (ok. 100-150 słów). 
    Skup się na tym, jak ten konkretny układ cech może pomóc użytkownikowi w zbliżeniu się do Boga w jego obecnym momencie życia. 
    Używaj języka wspierającego, ciepłego i zakorzenionego w tradycji chrześcijańskiej. 
    Nie oceniaj, tylko zachęcaj. Unikaj banałów.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Niech Pan Cię błogosławi i strzeże na Twojej drodze duchowej.";
  }
};
