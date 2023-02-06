import { FiSunrise } from "react-icons/fi"
import Footer from "../../components/partials/Footer/Footer"
import Header from "../../components/partials/Header"
import { useRouter } from 'next/router';
import s from'./Card.module.css'
import Link from "next/link";

const MenNamaz = () => {
    const router = useRouter();
    return (
        <div>
            <Header/>
            <div className="mt-10">
                <h1 className="text-xl text-gray-400 container">Главная / Обучение намазу / Намаз мужчинам</h1>
                <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 container justify-center justify-items-center gap-10">
                    <div onClick={(e) => router.push('/men-namaz/fajr')} className={s.container}>
                        <div className={s.card}>
                            <div className={s.imgBx}>
                                <img src="/images/moon.png" alt="" />
                            </div>
                            <div className={s.contentBx}>
                            <h2>ФАДЖР</h2>
                            <p className="text-white">Утренний намаз</p>
                            <div className={s.size}>
                                <h3 className="mt-5">2 раакат фард</h3>
                                <h3>2 рааката сунны</h3>
                            </div>
                            <Link href="/men-namaz/fajr">Обучение</Link>
                            </div>
                        </div>
                    </div>
                    <div onClick={(e) => router.push('/men-namaz/zuhr')} className={s.container}>
                        <div className={s.card}>
                            <div className={s.imgBx}>
                                <img src="/images/sun.png" alt="" />
                            </div>
                            <div className={s.contentBx}>
                            <h2>ЗУХР</h2>
                            <p className="text-white">Дневной намаз</p>
                            <div className={s.size}>
                                <h3 className="mt-5">4 рааката сунны</h3>
                                <h3>4 раакат фард</h3>
                                <h3>2 рааката сунны</h3>
                            </div>
                            <Link href="/men-namaz/zuhr">Обучение</Link>
                            </div>
                        </div>
                    </div>
                    <div onClick={(e) => router.push('/men-namaz/asr')} className={s.container}>
                        <div className={s.card}>
                            <div className={s.imgBx}>
                                <img src="/images/sun2.png" alt="" />
                            </div>
                            <div className={s.contentBx}>
                            <h2>АСР</h2>
                            <p className="text-white">Послеполуденный намаз</p>
                            <div className={s.size}>
                                <h3 className="mt-5">4 раакат фард</h3>
                            </div>
                            <Link href="/men-namaz/asr">Обучение</Link>
                            </div>
                        </div>
                    </div>
                    <div onClick={(e) => router.push('/men-namaz/magrib')} className={s.container}>
                        <div className={s.card}>
                            <div className={s.imgBx}>
                                <img src="/images/sunset3.png" alt="" />
                            </div>
                            <div className={s.contentBx}>
                            <h2>МАГРИБ</h2>
                            <p className="text-white">Вечерний намаз</p>
                            <div className={s.size}>
                                <h3 className="mt-5">3 раакат фард</h3>
                                <h3>2 рааката сунны</h3>
                            </div>
                            <Link href="/men-namaz/magrib">Обучение</Link>
                            </div>
                        </div>
                    </div>
                    <div onClick={(e) => router.push('/men-namaz/isha')} className={s.container}>
                        <div className={s.card}>
                            <div className={s.imgBx}>
                                <img src="/images/moon.png" alt="" />
                            </div>
                            <div className={s.contentBx}>
                            <h2>Иша</h2>
                            <p className="text-white">Ночной намаз</p>
                            <div className={s.size}>
                                <h3 className="mt-5">4 раакат фард</h3>
                                <h3>2 рааката сунны</h3>
                            </div>
                            <Link href="/men-namaz/isha">Обучение</Link>
                            </div>
                        </div>
                    </div>
                    <div onClick={(e) => router.push('/men-namaz/vitr-vadjib')} className={s.container}>
                        <div className={s.card}>
                            <div className={s.imgBx}>
                                <img src="/images/night.png" alt="" />
                            </div>
                            <div className={s.contentBx}>
                            <h2>Витр</h2>
                            <p className="text-white">Ваджиб намаз</p>
                            <div className={s.size}>
                                <h3 className="mt-5">3 рааката</h3>
                            </div>
                            <Link href="/men-namaz/vitr-vadjib">Обучение</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default MenNamaz