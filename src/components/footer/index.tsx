import { footerContactList } from "../../data";
import "./styles.css";

const FooterComponent = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__header">
          <h3 className="footer__title">
            Strada Авто
          </h3>
          <p className="footer__description">
            Ваш путь к автомобилю мечты начинается здесь! Молодая, динамично развивающаяся компания по параллельному импорту автомобилей.
          </p>
        </div>

        <div className="footer__contacts">
          <h4 className="footer__subtitle">Контакты</h4>
          <div className="footer__contact-list">
            {footerContactList.map((contact) =>
              <div key={contact.id + contact.text} className="footer__contact-item">
                <span className="footer__contact-icon">{contact.icon}</span>
                <span className="footer__contact-text">{contact.text}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="footer__copyright">
        <p className="footer__copyright-title">© 2025 Strada Авто. Все права защищены.</p>
        <p className="footer__copyright-subtitle">
          Designed & Developed /
          <a href="https://github.com/AlbertRevazov" target="_blank" rel="noopener noreferrer"> Revazov A.</a>/
        </p>
      </div>
    </footer>
  )
}

export default FooterComponent;
