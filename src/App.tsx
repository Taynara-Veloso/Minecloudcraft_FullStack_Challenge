import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { SessionContextProvider } from "./contexts/SessionContext";

export default function App() {
  return (
    <BrowserRouter>
      <SessionContextProvider>
        <Router />
      </SessionContextProvider>
    </BrowserRouter>
  )
}
