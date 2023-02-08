
import { Routes, Route } from "react-router-dom"
import SecondPg from "./pages/data";
import Home from "./pages/home";
import {Container} from "@mui/material"
import ResponsiveAppBar from "./components/appBar";
function App() {
//  const [count, setCount] = useState(0);

  return (
    <Container>
      <ResponsiveAppBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="pg2" element={<SecondPg/>} />
        {/* <Route path="contact" element={<Contact />} /> */}
      </Routes>
    </Container>
  );
}

export default App;
