import ReactDOM from "react-dom";

export default function Menu() {
  return ReactDOM.createPortal(
    <div className="absolute top-0 left-0 pt-3">
      <button
        type="button"
        className="h-11 w-10 bg-btn-burger-open bg-cover text-transparent hover:bg-btn-burger-open-hover active:bg-btn-burger-open-pressed "
      >
        menu
      </button>
    </div>,
    document.querySelector("body")
  );
}
