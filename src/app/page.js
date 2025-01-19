"use client"
import { useState, useEffect } from "react";
import Image from 'next/image';
import Albums from '../Components/Albums.js';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function Home() {


  const theme = createTheme({

    palette: {
      primary: {
        main: '#1DB954',

      },

      secondary: {
        main: '#f44336',

      },
    },
  });

  return (
    <div>


      <ThemeProvider theme={theme}>
        <Albums />

      </ThemeProvider>
    </div>
  );
}



