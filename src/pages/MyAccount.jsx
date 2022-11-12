import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import BreadCrumb from "../components/Breadcrumb";
import getUsers from '../database/users';
import MyAccountSelector from "../components/MyAccountSelector";
import "../sass/myaccount.scss";

const MyAccount = () => {
    const url = useLocation();
    const [user, setUser] = useState();

    const saveUser = () => {
        getUsers.then((data) => {
            let users = data.find((user) => user.email === localStorage.user);
            if (users) {
                setUser(users)
            }
        });
    }

    const isLogged = () => {
        const user = localStorage.user;
        if (!user) return window.location.href = "/";
        saveUser();
    }
        
    useEffect(() => {
        isLogged();
    }, []);

    return (
        <div className="my-account">
            <div>
                <BreadCrumb items={url}/>
            </div>
            <div>
                <h2 className="my-account-title">Ola, {user?.name}</h2>
                {/*svg*/}
            </div>
            <p className="my-account-paragraph">Bem vindo a sua conta</p>
            <MyAccountSelector user={user}/>
        </div>
    );
}

export default MyAccount;