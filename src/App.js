import React, { useState, useEffect } from 'react';
import FlashcardList from './components/FlashcardList';
import './App.css';
import axios from 'axios';

function App() {
  const [flashcards, setFlashcards] = useState(FLASHCARD_DATA)
  useEffect(() => {
    axios.get('https://opentdb.com/api.php?amount=10')
      .then(res => {
        setFlashcards(res.data.results.map((item, index) => {
          const answer = decodeString(item.correct_answer);
          const options = [
            ...item.incorrect_answers.map(a => decodeString(a)),
            answer]
          return {
            id: `$${index}-${Date.now()}`,
            question: decodeString(item.question),
            answer: answer,
            options: options.sort(() => Math.random() - .5)
          }
        }))
      })
  }, [])

  function decodeString(str) {
    const textArea = document.createElement('textarea');
    textArea.innerHTML = str
    return textArea.value;
  }

  return (
    <div className="container">
      <FlashcardList flashcards={flashcards} />
    </div>
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
    answer: '3'
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
    answer: 'answer'
  }
]

export default App;
