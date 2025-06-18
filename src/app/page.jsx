"use client"
import { useState, useEffect } from "react";
import App from '../Components/App.jsx';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Head from 'next/head';

const theme = createTheme({
  typography: {
    fontFamily: '"Montserrat", sans-serif',
  },
  palette: {
    primary: {
      main: '#6A0DAD',
    },
    secondary: {
      main: '#f44336',
    },
  },
});

export default function Home() {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </>
  );
}
