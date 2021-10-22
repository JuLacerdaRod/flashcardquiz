import React, { useState } from "react";
import FlashcardList from "./components/FlashcardList";
import "./App.css";

function App() {
  const [cards] = useState(SAMPLE_CARDS);

  return <FlashcardList flashcards={cards} />;
}

const SAMPLE_CARDS = [
  {
    id: 1,
    question: "What does HTML stand for?",
    answer: "Hyper Text Markup Language",
    options: [
      "Home Tool Markup Language",
      "Hyper Text Module Language",
      "Hyper Text Markup Language",
      "Hyperlink Markup Language",
    ],
  },
  {
    id: 2,
    question: "The <title> element must be located inside...",
    answer: "the <head> element",
    options: ["the <head> element", "the <body> element"],
  },
  {
    id: 3,
    question: "Where we can use the <style> tag?",
    answer: "In the <head> and <body> elements",
    options: [
      "In the <head> element",
      "In the <body> element",
      "In the <head> and <body> elements",
    ],
  },
  {
    id: 4,
    question: "Which is the correct HTML tag for a new paragraph?",
    answer: "<p>",
    options: ["<paragraph>", "<p>", "<pre>"],
  },
  {
    id: 5,
    question: "<h3> is the biggest heading tag.",
    answer: "False",
    options: ["True", "False"],
  },
  {
    id: 6,
    question: "<h6> is the smallest heading tag.",
    answer: "True",
    options: ["True", "False"],
  },
  {
    id: 7,
    question: "Which tag is used to create a hyperlink?",
    answer: "<a>",
    options: ["<a>", "<img>", "<dl>", "<link>"],
  },
  {
    id: 8,
    question: "How you can open a link in a new window?",
    answer: 'target="_blank"',
    options: ['target="_new"', 'target="_window"', 'target="_blank"'],
  },
  {
    id: 9,
    question: "Which of the following tags is used to create an ordered list?",
    answer: "<ol>",
    options: ["<ul>", "<ol>"],
  },
  {
    id: 10,
    question: "How to write an HTML Comment ?",
    answer: "<!-- This is an HTML comment -->",
    options: [
      "// This is an HTML comment",
      " /* This is an HTML comment */",
      "<!-- This is an HTML comment -->",
    ],
  },
  {
    id: 11,
    question: "How to make a text italic?",
    answer: "<i>Some text.</i>",
    options: [
      "<em>Some text.</em>",
      "<italic>Some text.</italic>",
      "<i>Some text.</i>",
      "<strong>Some text.</strong>",
    ],
  },
  {
    id: 12,
    question:
      "Which of the following table tags is used to create a table row?",
    answer: "<tr>",
    options: ["<th>", "<td>", "<tr>", "<table>"],
  },
  {
    id: 13,
    question:
      "Which of the following optional table tags is used to add a short description above a table?",
    answer: "<caption>",
    options: ["<description>", "<caption>", "<title>"],
  },
  {
    id: 14,
    question: "What is the HTML element used to display an image?",
    answer: "<img>",
    options: ["<image>", "<picture>", "<img>", "<pic>"],
  },
  {
    id: 15,
    question:
      "What is the HTML attribute used to reference the location of an image inside the <img> tag?",
    answer: "src",
    options: ["href", "link", "location", "src"],
  },
  {
    id: 16,
    question:
      "Which of the following tags is used to create an unordered list?",
    answer: "<ul>",
    options: ["<ul>", "<ol>"],
  },
  {
    id: 17,
    question: "The <br> tag is used to add a...",
    answer: "line break",
    options: ["space", "line break", "word break", "paragraph break"],
  },
  {
    id: 18,
    question: "How you can open the link in a new window?",
    answer: 'target="_blank"',
    options: ['target="_new"', 'target="_window"', ' target="_blank"'],
  },
  {
    id: 19,
    question:
      "What HTML form input must be used to present multiple options, but select only one?",
    answer: '<input type="radio">',
    options: [
      '<input type="text">',
      '<input type="radio">',
      '<input type="checkbox">',
    ],
  },
  {
    id: 20,
    question:
      "What is the HTML form input used to send information of the form to the server?",
    answer: '<input type="submit">',
    options: [
      '<input type="send">',
      '<input type="submit">',
      '<input type="mail">',
      '<input type="server">',
    ],
  },
];

export default App;
