import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpcWTIONhW9DYqLJ6_86M8_rdSP36l3k8",
  authDomain: "itanflor-d953c.firebaseapp.com",
  projectId: "itanflor-d953c",
  storageBucket: "itanflor-d953c.appspot.com",
  messagingSenderId: "507364128093",
  appId: "1:507364128093:web:73393c144777734cdaa4b4"
};

// Initialize Firebase
initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
