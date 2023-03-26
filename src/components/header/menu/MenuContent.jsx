import React from 'react';
import {dsnCN} from "../../../hooks/helper";

function MenuContent({className}) {
    const socialData = [
        {link: "#0", name: "Dribbble."},
        {link: "#0", name: "Behance."},
        {link: "#0", name: "Linkedin."},
        {link: "#0", name: "Twitter."}
    ];
    return (
        <div className={dsnCN('container-content  d-flex flex-column justify-content-center', className)}>
            <div className="nav__info">
                <div className="nav-content">
                    <h5 className="sm-title-block mb-10">Studio</h5>
                    <p>
                        26-30 New Damietta <br/> El-Mahalla El-Kubra, SK1 66LM
                    </p>

                </div>
                <div className="nav-content mt-30">
                    <h5 className="sm-title-block mb-10">Contact</h5>
                    <p className="links over-hidden mb-1">
                        <a className="link-hover" href="tel:+7-914-322-56-71" data-hover-text="+7-914-322-56-71">
                            +7-914-322-56-71
                        </a>
                    </p>
                    <p className="links over-hidden">
                        <a className="link-hover" href="mailto:chekhov@n-name.ru"
                           data-hover-text="chekhov@n-name.ru">chekhov@n-name.ru</a>
                    </p>
                </div>
            </div>
            <div className="nav-social nav-content mt-30">
                <div className="nav-social-inner p-relative">
                    <h5 className="sm-title-block mb-10">Follow us</h5>
                    <ul>
                        {socialData.map((item, index) =>
                            <li key={index}>
                                <a href={item.link} target="_blank" rel="nofollow noopener noreferrer">{item.name}</a>
                            </li>)}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default MenuContent;