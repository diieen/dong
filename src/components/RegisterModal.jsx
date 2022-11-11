import { X } from 'phosphor-react';
import registerUser from "../database/register";

const RegisterModal = (props) => {
    const { setIsOpen, setLoginType } = props;

    const register = (e) => {
        e.preventDefault();

        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value,
            phone: e.target.phone.value,
            cpf: e.target.cpf.value,
            cep: e.target.cep.value,
            street: e.target.street.value,
            number: e.target.number.value,
            complement: e.target.complement.value,
            district: e.target.district.value,
            city: e.target.city.value,
            state: e.target.state.value
        }

        registerUser(data).then(() => {
            alert('Usuário cadastrado com sucesso!');
            window.reload();
        })
    }

    const maskCep = (e) => {
        let value = e.target.value;
        value = value.replace(/\D/g, "");
        value = value.replace(/(\d{5})(\d)/, "$1-$2");
        e.target.value = value;
    }

    const maskCpf = (e) => {
        let value = e.target.value;
        value = value.replace(/\D/g, "");
        value = value.replace(/(\d{3})(\d)/, "$1.$2");
        value = value.replace(/(\d{3})(\d)/, "$1.$2");
        value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
        e.target.value = value;
    }

    const maskPhone = (e) => {
        let value = e.target.value;
        value = value.replace(/\D/g, "");
        value = value.replace(/(\d{2})(\d)/, "($1) $2");
        value = value.replace(/(\d{4})(\d)/, "$1-$2");
        e.target.value = value;
    }

    const getAdress = (e) => {
        const cep = e.target.value;

        if (cep.length === 9) {
            const url = `https://viacep.com.br/ws/${cep}/json/`;
            fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    document.querySelector("input[name='street']").value = data.logradouro;
                    document.querySelector("input[name='district']").value = data.bairro;
                    document.querySelector("input[name='city']").value = data.localidade;
                    document.querySelector("input[name='state']").value = data.uf;

                    console.log(data)

                    data.logradouro != "" ? document.querySelector("input[name='street']").setAttribute('disabled', true) : document.querySelector("input[name='street']").removeAttribute('disabled')
                    data.bairro != "" ? document.querySelector("input[name='district']").setAttribute('disabled', true) : document.querySelector("input[name='district']").removeAttribute('disabled')
                    data.localidade != "" ? document.querySelector("input[name='city']").setAttribute('disabled', true) : document.querySelector("input[name='city']").removeAttribute('disabled')
                    data.uf != "" ? document.querySelector("input[name='state']").setAttribute('disabled', true) : document.querySelector("input[name='state']").removeAttribute('disabled')
                });
        }
    }

    return (
        <div className="container-modal-register">
            <div className='icon-x' onClick={() => {
                setIsOpen(false);
                setLoginType(true);
            }}>
                <X size={40} color="#B87932" />
            </div>
            <div className="register-content-1">
                <span className="content-1-text">CADASTRE-SE</span>
            </div>
            <form action="" className='form-register' onSubmit={(e) => register(e)}>
                <div className='form-content'>
                    <div className="register-content-2">
                        <p>Informações Pessoais :</p>
                        <input type="text" className="input register-name" name="name" placeholder='Nome' required />
                        <input type="email" className="input register-email" name="email" placeholder='Ex: teste@gmail.com' required />
                        <input type="password" className="input register-password" name="password" placeholder='Senha' required />
                        <div className='flex gap-10'>
                            <input type="text" className="input register-phone" name="phone" maxLength={15} onChange={(e) => maskPhone(e)} placeholder='Telefone' required />
                            <input type="text" className="input register-cpf" name="cpf" maxLength={14} onChange={(e) => maskCpf(e)} placeholder='CPF' required />
                        </div>
                    </div>
                    <div className="register-content-2">
                        <p className=''>Endereço :</p>
                        <div className='flex gap-10'>
                            <input type="text" className="input register-cep" maxLength={9} onChange={(e) => (maskCep(e), getAdress(e))} name="cep" placeholder='CEP' required />
                            <p className='text-cep'>Não sabe seu CEP? <a href="">Consute aqui.</a></p>
                        </div>
                        <input type="text" className="input register-address" name="street" placeholder='Rua' required />
                        <div className='flex gap-10'>
                            <input type="text" className="input register-number" name="number" placeholder='Numero' required />
                            <input type="text" className="input register-complement" name="complement" placeholder='Complemento' />
                        </div>
                        <input type="text" className="input register-bairro" name="district" placeholder='Bairro' required />
                        <div className='flex gap-10'>
                            <input type="text" className="input register-city" name="city" placeholder='Cidade' required />
                            <input type="text" className="input register-state" name="state" placeholder='Estado' required />
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <button type="submit" className="btn-register">Cadastre-se</button>
                </div>
            </form>
            <div className="flex justify-center cursor-pointer" onClick={() => { setLoginType(true) }}>
                <p>Já possui conta? Clique aqui.</p>
            </div>
        </div>
    );
}

export default RegisterModal;