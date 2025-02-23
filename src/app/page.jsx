"use client"
import { useState, useEffect } from "react";
import Image from 'next/image';
import App from '../Components/App.jsx';
import { createTheme, ThemeProvider } from '@mui/material/styles';


export default function Home() {


  const theme = createTheme({

    palette: {
      primary: {
        main: '#6A0DAD',

      },

      secondary: {
        main: '#f44336',

      },
    },
  });

  return (
    <div>


      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </div>
  );
}



