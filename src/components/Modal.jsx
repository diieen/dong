import "../sass/modal.scss"

const Modal = (props) => {
    const { children, isOpen } = props;
    return (
        <div className={isOpen ? "modal" : "hidden"}>
            {children}
        </div>
    )
}

export default Modal;