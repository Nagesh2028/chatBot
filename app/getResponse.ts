// pages/api/getResponse.ts
import { NextApiRequest, NextApiResponse } from 'next';

const predefinedFacts = {
  "Who was the first President of the United States?": "George Washington was the first President of the United States.",
  "What year did the Titanic sink?": "The Titanic sank in 1912.",
  "Who was Cleopatra?": "Cleopatra VII was the last active ruler of the Ptolemaic Kingdom of Egypt.",
  "When did World War I begin?": "World War I began in 1914.",
  "What was the Great Wall of China built for?": "The Great Wall of China was built to protect against invasions and raids by nomadic groups.",
  "Who discovered America?": "Christopher Columbus is credited with discovering America in 1492, although indigenous peoples had been living there long before.",
  "What was the Renaissance?": "The Renaissance was a cultural movement that spanned from the 14th to the 17th century, marking a period of great cultural and intellectual development in Europe.",
  "Who was Napoleon Bonaparte?": "Napoleon Bonaparte was a French military leader and emperor who rose to prominence during the French Revolution and its associated wars.",
  "When was the Declaration of Independence signed?": "The Declaration of Independence was adopted on July 4, 1776.",
  "What is the Colosseum?": "The Colosseum is an ancient amphitheater located in Rome, Italy, known for its gladiatorial contests and public spectacles."
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { question } = req.query;
  const response = predefinedFacts[question as string] || "Sorry, I don't have an answer to that.";
  res.status(200).json({ response });
}
