import Image from 'next/image';

import RoadStep from '@/components/pages/home/steps/road-step';

const ROAD_STEPS = [
  <>Записатись на навчання принести документи і підписати договір</>,
  <>Теоретична підготовка в автошколі</>,
  <>Іспит з теорії в сервісному центрі МВС</>,
  <>Практична підготовка в автошколі</>,
  <>Практичний іспит в сервісному центрі МВС</>,
  <>Отримати водійське посвідчення</>,
];

const CAR_IMAGE = {
  width: 502,
  height: 1254,
  src: '/images/home/purple-car-1.png',
};

export default function Steps() {
  return (
    <section id="steps" className="relative h-full scroll-mt-[150px] max-lg:scroll-mt-[76px]">
      <Image
        id="steps"
        {...CAR_IMAGE}
        alt='car'
        className="max-w-[180px] sticky left-1/2 top-[35%] rotate-180 -translate-x-1/2 z-[3] mb-[-375px] max-lg:mb-[-188px] max-md:max-w-[90px]"
      />
      <div className="max-w-container mx-auto relative grid grid-cols-[1fr_200px_1fr] max-md:grid-cols-[1fr_100px_1fr] ">
        {ROAD_STEPS.map((text, index) => (
          <RoadStep step={index + 1} text={text} key={index} />
        ))}
      </div>
    </section>
  );
}
