import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"
import { BrowserRouter } from "react-router-dom"
import { Router } from "./Router"
import { AllProductsProvider } from "./contexts/AllProductsContext"
import { CartContextProvider } from "./contexts/CartContext"
import { AddressProvider } from "./contexts/AddressContext"
import { PaymentMethodProvider } from "./contexts/PaymentMethodContext"

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <AllProductsProvider>
          <CartContextProvider>
            <AddressProvider>
              <PaymentMethodProvider>
                <Router />
              </PaymentMethodProvider>
            </AddressProvider>
          </CartContextProvider>
        </AllProductsProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App