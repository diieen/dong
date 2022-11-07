import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Ongs } from "./routes/_ongs";
import { Report } from "./pages/Report";
import OngsList from "./pages/OngsList";
import Donate from "./pages/Donate";

export function Router(){
    return(
        <Routes>
            <Route path="" element={<Home />} />
            <Route path="ong" element={<OngsList />} />
            <Route path="/ong/:slug" element={<Ongs />} />
            <Route path="/reportar-abandono" element={<Report />} />
            <Route path="/doacao" element={<Donate />} />
        </Routes>
    )
}