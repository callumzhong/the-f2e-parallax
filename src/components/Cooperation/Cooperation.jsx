import ImageCharacterF2E from "@/assets/character/character_f2e.png";
import ImageCharacterTeam from "@/assets/character/character_team.png";
import ImageCharacterUI from "@/assets/character/character_ui.png";
import H5 from "../UI/H5";
import Title from "../UI/Title";
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

export default function Cooperation() {
  return (
    <section className="relative w-full pt-[59px] pb-[200px]">
      <Title>本屆主題：互動式網頁設計？</Title>
      <H5 className="-mt-10 mb-10 text-center text-secondary-dark">
        以下兩個角色進行攜手合作
      </H5>
      <CooperationList items={items} />
    </section>
  );
}