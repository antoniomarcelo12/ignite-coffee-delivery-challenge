import { ThemeProvider } from "styled-components"
import { Header } from "./components/Header"
import { defaultTheme } from "./styles/themes/default"
import { Banner } from "./components/Banner"
import { CoffeeList } from "./components/CoffeeList"
import { GlobalStyle } from "./styles/global"

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
        <Header />
        <Banner />
        <CoffeeList />
        <GlobalStyle />

    </ThemeProvider>
  )
}

export default App
