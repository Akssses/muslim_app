import { useState } from 'react'
import asmaaUlHusnaa from '../../public/data/asmaaUlHusna.json'
import Header from "@/components/partials/Header";


const Asmaa = () => {
  const [name, setName] = useState({ name: 'Аллах', arabName: 'اللّٰه' })

  function createRows(names) {
    return names.map((n, i) => {
      return (
        <div className='' key={i}>
          <div className='container text-white flex justify-between text-center bg-primary-900  my-5 py-5 rounded-3xl' key={n.number} onClick={(e) => setName(asmaaUlHusnaa[i])}>
              <div className='font-bold'>{i + 1}</div>
              <div>{n.name}</div>
              <div>{n.arabName}</div>
          </div>
        </div>
      )
    })
  }

    return (
        <div>
            <Header/>
            <div className='container flex flex-col lg:flex-row justify-between items-center'>
              <div className='mt-10'>
                <h1 className='text-3xl font-semibold'>99 имён Аллаха</h1>
                <div className="inline-block w-20 h-1 bg-primary-900 rounded-full mb-5"></div>
                <p>От Абу Хурайры (да будет доволен им Аллах) передается, что Пророк (да благословит его Аллах и да приветствует) сказал:</p>
                <p className='font-semibold'>“Поистине у Аллаха девяносто девять Имен, сто Имен без одного, кто перечислит их, тот войдет в рай”</p>
                <p>И вышеупомянутое перечисление содержит в себе следующий смысл:
                  1- Заучивание их наизусть. <br />
                  2- Познание их смысла. <br />
                  3- Поступать, действовать согласно их смыслу: Когда познаешь что Он «Один», то не придаешь Ему в сотоварищи кого-то еще. Когда познаешь что Он «дающий средства к существованию», то не просишь пропитание от кого-либо другого. И когда познаешь что Он «Милосердный», то совершаешь те поступки повиновения, которые являются средством получения этого милосердия….. и т.д. <br />
                  4- Взывать к Нему посредством их.
                </p>
              </div>

            </div>
            <div className='text-center'>
                <div lang="en" title="Asmaa Ul Husnaa" description="A page where we div all the beautiful names of Allah." />
                  <div className="flex justify-center  mt-10 font-bold text-3xl">
                    <div className='flex'>
                        <div className="mr-10">{name.arabName}</div>
                        <div className="name highlight">{name.name}</div>
                    </div>
                  </div>
                  <div className="container">
                      <div className='grid  md:grid-cols-2 lg:grid-cols-2 justify-center gap-5'>{createRows(asmaaUlHusnaa.slice(0, 99))}</div>
                  </div>
            </div>
        </div>
    )
}

export default Asmaa