import React from 'react';
import { AiFillCloseCircle, AiFillCloseSquare, AiOutlineClose } from 'react-icons/ai';
import { FiMenu, FiUser } from 'react-icons/fi';
import { useRouter } from 'next/router';

const Header = () => {
  const [open, setOpen] = React.useState(false)
  const router = useRouter();

  const onClickBurger = () => {
    setOpen(!open)
  }
  return (
    <header className="shadow-sm sticky top-0 bg-white z-50">
      <div className="container h-16 flex justify-between items-center ">
        <div className='flex items-end'>
          <h1 onClick={(e) => router.push('/')} className="text-2xl text-primary-500 font-semibold cursor-pointer">Muslims App</h1>
          <span className='ml-1'>beta</span>
        </div>
        <div onClick={onClickBurger}>
          {
            open ? <AiOutlineClose size={40}/> : <FiMenu size={40}/>
          }
          <div>
            {
              open ?  (
              <div className='absolute z-50 left-0 w-full translate-y-3 bg-primary-800 h-full]'>
                <div className='container py-10 md:flex justify-between '>
                  <div className='mb-5 md:mb-0'>
                    <h1 className='font-bold text-xl'>Вероучение</h1>
                    <h2 className='cursor-pointer' onClick={(e) => router.push('/posts')}>Читать статьи</h2>
                    <h2 className='cursor-pointer'>Биография Пророка Мухаммада ﷺ</h2>
                    <h2 className='cursor-pointer' onClick={(e) => router.push('/namaz')}>Инструкция по намазу</h2>
                    <h2 className='cursor-pointer' onClick={(e) => router.push('/dashboard')}>Читать Коран</h2>
                    <h2 className='cursor-pointer'>Таджвид</h2>
                  </div>
                  <div className='mb-5 md:mb-0'>
                    <h1 className='font-bold text-xl'>Полезное</h1>
                    <h2 className='cursor-pointer' onClick={(e) => router.push('/asma-ul-husna')}>Асма уль Хусна</h2>
                    <h2 className='cursor-pointer' onClick={(e) => router.push('/namaz')}>Время намаза</h2>
                    <h2 className='cursor-pointer'>Книги</h2>
                  </div>
                  <div>
                    <h1 className='font-bold text-xl'>Другое</h1>
                    <h2 className='cursor-pointer'>Связаться с нами</h2>
                    <h2 className='cursor-pointer'>Instagram</h2>
                    <h2 className='cursor-pointer'>Telegram</h2>
                  </div>
                </div>
              </div> ) : null
            }
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
