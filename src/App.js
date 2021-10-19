import React, { useState } from 'react'
import FlashcardList from './components/FlashcardList';
import './App.css'

function App() {
  const [cards] = useState(SAMPLE_CARDS);

  return (
    <FlashcardList flashcards={cards} />
  );
}

const SAMPLE_CARDS = [
  {
    id: 1,
    question: 'HTML stands for',
    answer: 'Hyper Text Markup Language',
    options: ['Hyper Text Modul Language', 'Hyper Text Markup Language', 'Hyper Test Markup Language', 'Hyperlink Markup Language']
  },
  {
    id: 2,
    question: 'The <title> element must be located inside',
    answer: 'the <head> element',
    options: ['the <head> element', 'the <body> element']
  },
  {
    id: 3,
    question: 'Which tag is used to create a hyperlink?',
    answer: '<a>',
    options: ['<a>', '<img>', '<dl>', '<link>']
  },
  {
    id: 4,
    question: 'How you can open the link in a new window?',
    answer: 'target="_blank"',
    options: ['target="_new"', 'target="_window"', 'target="_blank"'] 
  },
  {
    id: 5,
    question: 'Which of the following tags is used to create an ordered list?',
    answer: '<ol>',
    options: ['<ul>', '<ol>'] 
  },
  {
    id: 6,
    question: 'How to write an HTML Comment ?',
    answer: '<!-- This is an HTML comment -->',
    options: ['// This is an HTML comment', ' /* This is an HTML comment */', '<!-- This is an HTML comment -->', ''] 
  },
  {
    id: 7,
    question: 'How to make a text italic?',
    answer: '<i>Some text.</i>',
    options: ['<em>Some text.</em>', '<italic>Some text.</italic>', '<i>Some text.</i>', '<strong>Some text.</strong>'] 
  },
  {
    id: 8,
    question: 'Which of the following table tags is used to create a table row?',
    answer: '<tr>',
    options: ['<th>', '<td>', '<tr>', '<table>'] 
  },
  {
    id: 9,
    question: 'What is the HTML element used to display an image?',
    answer: '<img>',
    options: ['<image>', '<picture>', '<img>', '<pic>'] 
  },
  {
    id: 10,
    question: 'How you can open the link in a new window?',
    answer: 'target="_blank"',
    options: ['target="_new"', 'target="_window"', ' target="_blank"'] 
  },
  {
    id: 11,
    question: 'What HTML form input must be used to present multiple options, but select only one?',
    answer: '<input type="radio">',
    options: ['<input type="text">', '<input type="radio">', '<input type="checkbox">'] 
  },
  {
    id: 12,
    question: '<h3> is the biggest heading tag.',
    answer: 'False',
    options: ['True', 'False'] 
  }
]

export default App;
