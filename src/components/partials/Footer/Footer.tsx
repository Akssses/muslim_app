import { BsTelegram, BsWhatsapp } from "react-icons/bs"
import { FiInstagram, FiMail, FiPhone } from "react-icons/fi"
import s from './Footer.module.css'
import { useRouter } from 'next/router';
import React from "react";


const Footer = () => {
    const [modal, setModal] = React.useState(false)
    const router = useRouter();
    const onClickModal = () => {
        setModal(!modal)
    }
    return (
        <div className="bg-black text-white mt-40">
            <div className="container py-10">
                <div className={s.footer_block}>
                    <div className={s.soc}>
                        <div className="flex items-center gap-3">
                            <FiMail size={30}/>
                            <h1 className="text-xl font-bold">muslmsapp.kg@gmail.com</h1>
                        </div>
                        <div className="flex items-center gap-3 mt-5">
                            <FiPhone size={30}/>
                            <h1 className="text-2xl font-bold">+996 990 777 820</h1>
                        </div>
                        <div className="flex gap-10 mt-10">
                            <FiInstagram size={50}/>
                            <BsTelegram size={50}/>
                            <BsWhatsapp size={50}/>
                        </div>
                    </div>
                    <div className={s.footer_nav}>
                        <div>
                            <h1 className="text-2xl">Навигация</h1>
                            <h2 onClick={(e) => router.push('/')}>Главное</h2>
                            <h2 onClick={(e) => router.push('/')}>О нас</h2>
                            <h2 onClick={(e) => router.push('/dashboard')}>Коран</h2>
                            <h2>FAQ</h2>
                        </div>
                        <div>
                            <h1 className="text-2xl">Полезное</h1>
                            <h2 onClick={(e) => router.push('/namaz')}>Намаз</h2>
                            <h2 onClick={(e) => router.push('/posts')}>Вероучение</h2>
                            <h2>Таджвид</h2>
                        </div>
                        <div>
                            <h1 className="text-2xl">Помощь</h1>
                            <h2 onClick={onClickModal}>Контакты</h2>
                            <h2>Тех поддержка</h2>
                            <h2>Связаться с нами</h2>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className="container pb-5">Muslims App 2022</h1>
        </div>
    )
}

export default Footer