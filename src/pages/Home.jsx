import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import dataOngs from "../database/ongs"
import Modal from "../components/Modal";
import LoginModal from "../components/LoginModal";
import "../sass/_home.scss"
import RegisterModal from "../components/RegisterModal";

export function Home() {
  const navigate = useNavigate();
  const [ongs, setOngs] = useState([]);
  const [search, setSearch] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [loginType, setLoginType] = useState(true);

  useEffect(() => {
    dataOngs.then((data) => {
      setOngs(data);
    });
  }, [])

  const filteredOngs = search.length > 0
    ? ongs.filter(ong => ong.name.toLowerCase().includes(search.toLowerCase()))
    : [];

  return (
    <div>
      <h1 onClick={() => {setIsOpen(true)}}>Home</h1>
      <Modal isOpen={isOpen}>
        {
          loginType ? <LoginModal setIsOpen={setIsOpen} setLoginType={setLoginType}/> : <RegisterModal setIsOpen={setIsOpen} setLoginType={setLoginType}/>
        }
      </Modal>
      <button onClick={() => navigate("/report")}>Report</button>
      <input type="text" onChange={e => setSearch(e.target.value)}/>
      {
        filteredOngs.length > 0 ? (
          <div>
            {
              filteredOngs.map((ong, index) => {
                return (
                  <div key={index} onClick={() => navigate(`/ong/${ong.slug}`)}>
                    <img width="300" src={ong.logo} alt={`Logo ${ong.name}`} />
                    <p>{ong.name}</p>
                  </div>
                )
              })
            }
          </div>
        ) : (
          <div>
            {
              ongs.length > 0 && (
                ongs.map((ong, index) => {
                  return (
                    <div key={index} onClick={() => navigate(`/ong/${ong.slug}`)}>
                      <img width="300" src={ong.logo} alt={`Logo ${ong.name}`} />
                      <p>{ong.name}</p>
                    </div>
                  )
                })
              )
            }
          </div>
        )
      }
    </div>
  );
}
