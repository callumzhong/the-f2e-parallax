import ImageBtnUser from "@/assets/btn/btn_user.png";
import ImageBtnUserHover from "@/assets/btn/btn_user_h.png";
import ImageBtnUserPressed from "@/assets/btn/btn_user_p.png";

export default function User() {
  return (
    <a
      href="https://2022.thef2e.com/users"
      target="_blank"
      rel="noreferrer"
      className="group absolute top-3 right-2 h-10 w-10 lg:top-[30px] lg:right-5 xl:h-[min(7.8125vh,80px)] xl:w-[min(5.56vw,80px)]"
    >
      <img
        className="group-hover:hidden group-active:hidden"
        src={ImageBtnUser}
        alt=""
      />
      <img
        className="hidden group-hover:block group-active:hidden"
        src={ImageBtnUserHover}
        alt=""
      />
      <img
        className="hidden group-active:block"
        src={ImageBtnUserPressed}
        alt=""
      />
    </a>
  );
}
