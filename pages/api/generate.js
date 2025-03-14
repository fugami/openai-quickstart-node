import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: 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,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  const completion = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: generatePrompt(req.body.animal),
    temperature: 0.6,
  
  });
  res.status(200).json({ result: completion.data.choices[0].text });
}


function generatePrompt(animal) {
  const capitalizedAnimal =
    animal[0].toUpperCase() + animal.slice(1).toLowerCase();
  return `Tell me the following philosopher's answer to the meaning of life.

Philosopher: Plato
Answer: The meaning of life for Plato is the pursuit of knowledge.
Philosopher: Nietzsche
Answer: The meaning of life for Nietzsche is to live authentically and powerfully.
Philosopher: ${capitalizedAnimal}
Answer:`;
}
