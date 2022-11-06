import { X } from 'phosphor-react';

const RegisterModal = (props) => {
    const { setIsOpen, setLoginType } = props;
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
            <form action="" className='form-register'>
                <div className='form-content'>
                    <div className="register-content-2">
                        <p>Informações Pessoais :</p>
                        <input type="text" className="input register-name" placeholder='Nome' required />
                        <input type="email" className="input register-email" placeholder='Ex: teste@gmail.com' required />
                        <input type="password" className="input register-password" placeholder='Senha' required />
                        <div className='flex gap-10'>
                            <input type="text" className="input register-phone" placeholder='Telefone' required />
                            <input type="text" className="input register-cpf" placeholder='CPF' required />
                        </div>
                    </div>
                    <div className="register-content-2">
                        <p className=''>Endereço :</p>
                        <div className='flex gap-10'>
                            <input type="text" className="input register-cep" placeholder='CEP' required />
                            <p className='text-cep'>Não sabe seu CEP? <a href="">Consute aqui.</a></p>
                        </div>
                        <input type="text" className="input register-address" placeholder='Endereço' required />
                        <div className='flex gap-10'>
                            <input type="text" className="input register-number" placeholder='Numero' required />
                            <input type="text" className="input register-complement" placeholder='Complemento' />
                        </div>
                        <input type="text" className="input register-bairro" placeholder='Bairro' required />
                        <div className='flex gap-10'>
                            <input type="text" className="input register-city" placeholder='Cidade' required />
                            <input type="text" className="input register-state" placeholder='Estado' required />
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <button type="submit" className="btn-register">Casdastre-se</button>
                </div>
            </form>
            <div className="flex justify-center cursor-pointer" onClick={() => { setLoginType(true) }}>
                <p>Já possui conta? Clique aqui.</p>
            </div>
        </div>
    );
}

export default RegisterModal;