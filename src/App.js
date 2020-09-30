import React, { useState } from 'react';
import FlashcardList from './components/FlashcardList';

function App() {
  const [flashcards, setFlashcards] = useState(FLASHCARD_DATA)
  return (
    <FlashcardList flashcards={flashcards} />
  );
}

const FLASHCARD_DATA = [
  {
    id: 1,
    question: "What is 2+1?",
    options: [
      '2',
      '3',
      '4',
      '5'
    ],
    answer: '4'
  },
  {
    id: 2,
    question: "What is 3+2?",
    options: [
      '2',
      '3',
      '4',
      '5'
    ],
    answer: '5'
  }
]

export default App;
