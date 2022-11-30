import ImageCharacterF2E from "@/assets/character/character_f2e.png";
import ImageCharacterTeam from "@/assets/character/character_team.png";
import ImageCharacterUI from "@/assets/character/character_ui.png";
import { raceAnimation } from "../Footer";
import Title from "../Title/Title";
import { H5 } from "../Typography";
import CooperationList from "./CooperationList";

const items = [
  {
    id: "cooperation-1",
    title: "前端工程師",
    image: {
      path: ImageCharacterF2E,
    },
  },
  {
    id: "cooperation-2",
    title: "UI設計師",
    image: {
      path: ImageCharacterUI,
    },
  },
  {
    id: "cooperation-3",
    title: "團體組(UI+前端)",
    image: {
      path: ImageCharacterTeam,
    },
  },
];

export function cooperationAnimationHandler(gsap) {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".cooperation-section",
      markers: true,
      start: "top top",
      end: "+=800",
      scrub: true,
    },
  });

  raceAnimation.cooperation(tl);
}

export default function Cooperation() {
  return (
    <section className="cooperation-section relative w-full pt-[59px] pb-[207px] lg:pb-[55.30vh]">
      <Title>本屆主題：互動式網頁設計？</Title>
      <H5 className="-mt-10 mb-10 text-center text-secondary-dark">
        以下兩個角色進行攜手合作
      </H5>
      <CooperationList items={items} />
    </section>
  );
}
