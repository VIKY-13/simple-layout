import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const DATA = [
  {
    heading: "AlgoExpert",
    list: [
      "200 of the best coding interiew questions.",
      "In-depth video explanations.",
      "A feature-rich in-browser IDE.",
      "A feature-rich in-browser IDE. In-depth video explanations. A feature -ric in-browser IDE.",
    ]
  },
  {
    heading: "SystemsExpert",
    list: [
      "200 of the best coding interiew questions.",
      "In-depth video explanations.",
      "A feature-rich in-browser IDE.",
    ]
  },
  {
    heading: "FrontEndExpert",
    list: [
      "200 of the best coding interiew questions.",
      "In-depth video explanations.",
      "A feature-rich in-browser IDE.",
    ]
  },
  {
    heading: "FrontEndExpert",
    list: [
      "200 of the best coding interiew questions.",
      "In-depth video explanations.",
      "A feature-rich in-browser IDE.",
    ]
  },
  {
    heading: "FrontEndExpert",
    list: [
      "200 of the best coding interiew questions.",
      "In-depth video explanations.",
      "A feature-rich in-browser IDE.",
    ]
  },
  {
    heading: "FrontEndExpert",
    list: [
      "200 of the best coding interiew questions.",
      "In-depth video explanations.",
      "A feature-rich in-browser IDE.",
    ]
  }
]

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App containers={DATA} />
  </StrictMode>,
)
