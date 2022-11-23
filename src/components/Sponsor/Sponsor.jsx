import Button from "../Button";
import Title from "../Title";
import ImageLogoBlockstudio from "@/assets/main/logo_blockstudio.png";
import ImageLogoKdanmobile from "@/assets/main/logo_kdanmobile.png";
import ImageLogoTitansoft from "@/assets/main/logo_titansoft.png";
import ImageFrame from "../ImageFrame";

export default function Sponsor() {
  return (
    <section>
      <Title>贊助單位</Title>
      <div className='flex flex-wrap gap-11 px-5 text-center'>
        <div className='w-full px-12'>
          <ImageFrame
            href='sdads'
            className='mx-auto mb-4 h-[200px] w-[200px] lg:h-[250px] lg:w-[250px]'
          >
            <img src={ImageLogoBlockstudio} alt='' />
          </ImageFrame>
          <Button variant='outline' color='secondary'>
            #版塊設計
          </Button>
        </div>
        <div className='w-full px-12'>
          <ImageFrame
            href='sdads'
            className='mx-auto mb-4 h-[200px] w-[200px] lg:h-[250px] lg:w-[250px]'
          >
            <img src={ImageLogoTitansoft} alt='' />
          </ImageFrame>
          <Button variant='outline' color='secondary'>
            #鈦坦科技
          </Button>
        </div>
        <div className='w-full px-12'>
          <ImageFrame
            href='sdads'
            className='mx-auto mb-4 h-[200px] w-[200px] lg:h-[250px] lg:w-[250px]'
          >
            <img src={ImageLogoKdanmobile} alt='' />
          </ImageFrame>
          <Button variant='outline' color='secondary'>
            #凱鈿科技
          </Button>
        </div>
      </div>
    </section>
  );
}
