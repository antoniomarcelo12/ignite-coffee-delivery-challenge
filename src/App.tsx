import { ThemeProvider } from "styled-components"
import { Header } from "./components/Header"
import { defaultTheme } from "./styles/themes/default"
import { Banner } from "./components/Banner"

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
        <Header />
        <Banner />
    </ThemeProvider>
  )
}

export default App
