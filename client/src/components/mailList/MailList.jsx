import "./mailList.css";

const MailList = () => {
    return (
        <div className="mail">
            <span className="mailDesc">Поможем определить ваши таланты!</span>
            <div className="mailInputContainer">
                <input type="text" placeholder="Ваша почта" />
                <button>Оставить заявку</button>
            </div>
        </div>
    );
};

export default MailList;
