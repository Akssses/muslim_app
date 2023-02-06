import Link from 'next/link'
import React from 'react'
import { AiFillEye, AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { BsFillCalendarDateFill, BsShareFill } from 'react-icons/bs'
import { FiHeart } from 'react-icons/fi'
import s from './BlogCard.module.css'
import copy from 'copy-to-clipboard';


const BlogCard = ({title, date,coverImage, slug, excerpt, tags}) => {
    
    return (
        <div className='my-20'>
            <div className={s.card_blog}>
                <div>
                    <div className={s.image}>
                        <img src={coverImage.url} alt="img" />
                    </div>
                    <div className='sm:flex items-center justify-between'>
                        <div className={s.fav}>
                            <AiFillEye size={35}/>
                            <BsShareFill size={25}/>
                            <div className='flex gap-2 items-center'>
                                <BsFillCalendarDateFill size={25}/>
                                <h1 className='font-bold'>{date}</h1>
                            </div>
                        </div>
                        <div className='bg-[#00b424]  mt-5 sm:mt-0 -translate-y-[40px] rounded-full text-center text-white font-semibold py-1 w-[100px] cursor-pointer'>
                        {tags}
                        </div>
                    </div>
                </div>
                <div className={s.text}>
                    <h1 className='text-3xl font-bold '>{title}</h1>
                    <div className="inline-block w-20 h-1 bg-primary-900 rounded-full"></div>
                    <p>{excerpt}</p>
                    
                    
                    <Link href={"/posts/" + slug}>
                        <button className={s.read_button}>Читать</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default BlogCard