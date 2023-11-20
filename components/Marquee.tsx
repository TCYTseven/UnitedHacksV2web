import Marquee from 'react-fast-marquee';
import Image from 'next/image';

export interface Partner {
  title: string;
  url: string;
  image: string;
}

export default function PartnerMarquee({ partners }:{ partners: Partner[] }) {
  return (
    <Marquee
      speed={150}
      gradientColor={[255, 255, 255]}
      className="mb-10 mt-5 lg:mb-20"
    >
      {partners.map((val, i) => (
        <div
          key={i}
          className="mr-10 mt-8 cursor-pointer duration-300 hover:-translate-y-2"
          onClick={() => window.open(val.url, '_ blank')}
        >
          <Image
            className="h-[75px] w-full max-w-[150px] rounded-lg object-contain md:h-[100px] md:max-w-[200px] lg:h-[150px] lg:max-w-[350px]"
            src={val.image}
            width={0}
            height={0}
            sizes="100vw"
            alt="Partners"
          />
        </div>
      ))}
    </Marquee>
  );
}