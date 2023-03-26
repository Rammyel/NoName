import React from 'react';
import './style.scss'
import {dsnCN} from "../../hooks/helper";

function InfoBox({className}) {
    return (

        <div className={dsnCN('box-info-contact', className)}>
            <h3>Начинаете новый проект?</h3>
            <h5 className="mt-30">Личная встреча в Москве</h5>
            <p className="mt-10">
                Пожалуйста, предоставьте подробную информацию о проекте:
                Идею, объём, дедлайн, бюджет и сопутствующую информацию.
            </p>

            <ul className="mt-30">
                <li>
                    <span className="mr-10">Call Us</span>
                    <a href="tel:+7-(914)-322-56-71" target="_blank" rel="noreferrer">+7-(914)-322-56-71</a>
                </li>
                <li>
                    <span className="mr-10">Telegram</span>
                    <a href="https://tlgg.ru/rammyel" target="_blank" rel="noreferrer">@Rammyel</a>
                </li>
                <li>
                    <span className="mr-10">Email</span>
                    <a href="mailto:office@n-name.ru" target="_blank" rel="noreferrer">office@n-name.ru</a>
                </li>
                <li>
                    <span className="mr-10">Address</span>
                    <a href="#0" target="_blank" rel="noreferrer">Moscow, Innovation Centre Skolkovo, Bolshoi Boulevard 42/1</a>
                </li>
            </ul>
        </div>

    );
}

export default InfoBox;