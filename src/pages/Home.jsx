import { useNavigate } from "react-router-dom";
import "../sass/_home.scss"

export function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => navigate("/report")}>Report</button>
      <input type="text" onChange={e => setSearch(e.target.value)}/>
      <a href="/ong">Lista de ongs</a>
    </div>
  );
}
