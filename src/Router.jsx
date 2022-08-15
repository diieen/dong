import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Ongs } from "./routes/_ongs";

export function Router(){
    return(
        <Routes>
            <Route path="" element={<Home />} />
            <Route path="/ong/:slug" element={<Ongs />} />
        </Routes>
    )
}