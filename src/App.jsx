import { BrowserRouter } from "react-router";
import AppRouter from "./Routes/AppRouter";
import { ThemeProvider } from "./Context/ThemeContext";

function App() {

  return (
    <>
    <ThemeProvider>
      <BrowserRouter>
        <AppRouter/>
      </BrowserRouter>
    </ThemeProvider>
    </>
  )
}

export default App
