import Image from 'next/image';
import React from 'react';
import Button from '../shared/Button';
import { useRouter } from 'next/router';


const NamazSection = () => {
const router = useRouter();
  return (
    <div className="container mt-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center">
        <div className="w-full relative order-2 md:order-1">
          <Image className='rounded-3xl' src="/images/namazHero.jpg" width={700} height={700} alt="about-section-image" />
        </div>
        <div className="order-1 md:order-2 py-10 md:py-0">
          <h2 className="text-3xl font-semibold">
            <span className="text-gray-800">Научись читать намаз</span>
          </h2>
          <div className="inline-block w-20 h-1 bg-primary-900 rounded-full"></div>
          <div className="mt-4 text-gray-700 tracking-wider text-sm text-justify">
            <p>
            Намаз – второй столп Ислама, после шахады (произнесения слов свидетельства о том, что Аллах Единственен и что Мухаммад – Посланник Аллаха). Мусульманин, после того, как определил для себя свой духовный путь, то есть всем сердцем искренне поверил в Аллаха, должен благодарить своего Создателя. Одним из основных действий в вознесении благодарностей Всевышнему является усердие в исполнении повелений Аллаха.
            </p>
            <p className="mt-2">
            Намаз – это великая тайна между Аллахом и Его рабом, где мусульманин вверяет себя и свои внутренние, душевные переживания своему Творцу.
            </p>

            <div className="mt-6">
            <Button className="px-4 md:px-6 py-2 md:py-3" onClick={(e) => router.push('/namaz')}>
              Приступить
            </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NamazSection;