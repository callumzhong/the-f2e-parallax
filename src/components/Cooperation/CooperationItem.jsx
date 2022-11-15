import PropTypes from "prop-types";
import clsx from "clsx";
import H4 from "../UI/H4";

export default function CooperationItem({ items }) {
  return (
    <ul className="flex flex-col gap-5">
      {items.map((item, idx) => (
        <li
          className={clsx("mx-auto flex items-center justify-center gap-5", {
            "flex-row-reverse": idx % 2 === 0,
          })}
          key={item.id}
        >
          <div className="w-2/6">
            <div className="group mx-auto mb-4 w-max">
              <div className="mx-auto mb-3 h-[71px] w-[51px] bg-btn_joinHand bg-cover opacity-0 group-hover:opacity-100" />
              <div className="h-[60px] w-[103px] bg-btn_join bg-cover" />
            </div>
            <H4 className="text-center text-primary">{item.title}</H4>
          </div>
          <div className="w-2/6">
            <img src={item.image.path} alt="" />
          </div>
        </li>
      ))}
    </ul>
  );
}

CooperationItem.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.node.isRequired,
    })
  ).isRequired,
};
