import "./footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="fLists">
                <ul className="fList">
                    <li className="fListItem">
                        <img
                            src="https://thumb.tildacdn.com/tild6163-6330-4033-a261-613230643530/-/resize/350x/-/format/webp/noroot.png"
                            alt=""
                        />
                    </li>
                    <li className="fListItem">© 2023 AtlasAcademy</li>
                </ul>
                <ul className="fList">
                    <li className="fListItem">Алматы, Казахстан, ул. Достык 162, корпус 4.</li>
                    <li className="fListItem">+7 776 992 6633</li>
                    <li className="fListItem">contact@atlas-academy.kz</li>
                </ul>
                <ul className="fList">
                    <li className="fListItem">Реквизиты</li>
                    <li className="fListItem">Справка государственной регистрации</li>
                    <li className="fListItem">Terms & conditions</li>
                </ul>
            </div>
            <div className="fText">Copyright © 2023 AtlasAcademy.</div>
        </div>
    );
};

export default Footer;
