import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"
import { BrowserRouter } from "react-router-dom"
import { Router } from "./Router"
import { AllProductsProvider } from "./contexts/AllProductsProvider"
import { CartContextProvider } from "./contexts/CartContext"

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <AllProductsProvider>
          <CartContextProvider>
            <Router />
          </CartContextProvider>
        </AllProductsProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App