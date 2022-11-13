import ReactDOM from "react-dom";

export default function User() {
  return ReactDOM.createPortal(
    <a
      href="https://2022.thef2e.com/users"
      target="_blank"
      rel="noreferrer"
      className="absolute top-3 right-2 inline-block h-10 w-10 bg-btn-user bg-cover text-transparent hover:bg-btn-user-hover active:bg-btn-user-pressed"
    >
      user
    </a>,
    document.querySelector("body")
  );
}
