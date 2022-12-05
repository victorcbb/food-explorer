import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { Routes } from './Routes'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  </React.StrictMode>
)
