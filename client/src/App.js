import { BrowserRouter } from "react-router-dom";
import { UserContextProvider } from "./Context/UserContext";
import { useRoutes } from "./Routes/useRoutes";
import { BottomNav } from "./Components/BottomNav";
import { Header } from "./Components/Header";

function App() {
  const isLoggedIn = true;
  const routes = useRoutes(isLoggedIn);

  return (
    <UserContextProvider>
      <BrowserRouter>
        <div id="app">
          <Header />
          <div id="wrap">{routes}</div>
          <BottomNav />
        </div>
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
