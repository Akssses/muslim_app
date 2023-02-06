import Header from '@/components/partials/Header'
import Footer from '@/components/partials/Footer/Footer';
import Button from '@/components/shared/Button';
import { useRouter } from 'next/router';
import PrayersPage from '../components/forNamaz/prayerTimes/PrayersPage'

const NamazPage = () => {
    const router = useRouter();
    return (
        <div>
            <Header/>
            <div className='container mt-20'>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center">
                    <img className="rounded-3xl" src="./images/namazHero2.jpg" alt="" />
                    <div>
                        <h1 className="text-3xl ">Намаз</h1>
                        <div className="inline-block w-20 h-1 bg-primary-900 rounded-full mb-5"></div>
                        <p>Намаз – второй столп Ислама, после шахады (произнесения слов свидетельства о том, что Аллах Единственен и что Мухаммад – Посланник Аллаха). Мусульманин, после того, как определил для себя свой духовный путь, то есть всем сердцем искренне поверил в Аллаха, должен благодарить своего Создателя. Одним из основных действий в вознесении благодарностей Всевышнему является усердие в исполнении повелений Аллаха.</p>
                        <Button className="px-4 md:px-6 py-2 md:py-3 mt-5" onClick={(e) => router.push('/')}>
                            Подробнее
                        </Button>
                    </div>
                </div>
                <div className='bg-primary-800 mt-10 rounded-3xl py-5'>
                    <PrayersPage/>
                </div>
                <div className='mt-20 border p-5 rounded-xl'>
                    <p className='text-xl'>В Священном Коране Всевышний говорит нам:</p>
                    <h1 className='mt-5 text-2xl font-bold'>СОВЕРШАЙТЕ НАМАЗ, ВЫПЛАЧИВАЙТЕ ЗАКЯТ И КРЕПКО ДЕРЖИТЕСЬ ЗА АЛЛАХА (22:78) </h1>
                    <h1 className='mt-5 text-2xl font-bold'>ВОИСТИНУ, НАМАЗ ПРЕДПИСАН ВЕРУЮЩИМ В ОПРЕДЕЛЁННОЕ ВРЕМЯ (4:103)</h1>
                </div>
                <div className='block md:flex items-center justify-center gap-40 mt-20'>
                    <div>
                        <img className='mx-auto' src="./images/men.png" alt="men" />
                        <h1 className='text-xl font-bold text-center underline duration-300 cursor-pointer hover:text-primary-900' onClick={(e) => router.push('/men-namaz/prayers')}>Намаз мужчинам</h1>
                    </div>
                    <div>
                        <img className='mx-auto' src="./images/women.png" alt="women" />
                        <h1 className='text-xl font-bold text-center underline duration-300 cursor-pointer hover:text-primary-900' onClick={(e) => router.push('/women-namaz/prayers-w')}>Намаз женщинам</h1>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default NamazPage