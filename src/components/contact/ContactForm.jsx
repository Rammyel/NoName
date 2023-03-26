import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import './style.scss';
import {dsnCN} from "../../hooks/helper";

function ContactForm({className}) {

    const form = useRef();
    const [loading, setLoading] = useState();
    const [result, setResult] = useState();

    const sendEmail = (e) => {
        e.preventDefault();
        setResult(false);
        setLoading(true);
        emailjs.sendForm(
            'service_mxt8ue9',
            'template_1f1243o',
            form.current,
            'bvnMqTU1Ir-7kgLNL')
            .then((result) => {
                setLoading(false);
                setResult(true);
                form.current.reset();
            }, (error) => {
                setLoading(false);
            });
    };

    setTimeout(() => setResult(false), 5000);


    return (
        <div className={dsnCN('form-box', className)}>
            <h3 className="mb-30">Оставьте отзыв =)</h3>
            <form ref={form} onSubmit={sendEmail}>
                <div className="input__wrap controls">
                    <div className="form-group">
                        <label>Как к Вам обращаться?</label>
                        <input id="form_name" type="text" name="name" placeholder="Напишите духовное имя."
                               required="required"/>
                    </div>

                    <div className="form-group">
                        <label>Ваш почтовый адрес? </label>
                        <input id="form_email" type="email" name="email" placeholder="Да. Нам всё ещё нужна Ваша почта."
                               required="required"/>
                    </div>

                    <div className="form-group">
                        <label>Что Вы хотите сказать?</label>
                        <textarea id="form_message" className="form-control" name="Творите."
                                  placeholder="Расскажите о себе и о своём внутреннем мире" required="required"
                        />
                    </div>

                    <div className="image-zoom">
                        <button type="submit">Вжууух!</button>
                    </div>
                    {loading && <div className="loading-message mt-20">Немного магии...</div>}
                    {result &&
                    <p className="success-message mt-20">Ваше сообщение забрала сова и она уже в пути! Будьте осторожны, с Вами скоро свяжутся....</p>}
                </div>
            </form>
        </div>
    );
}

export default ContactForm;