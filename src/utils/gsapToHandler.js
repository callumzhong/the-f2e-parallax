import gsap from "gsap";

export default function gsapToHandler({ target, vars }) {
  const elements = gsap.utils.toArray(target);
  return elements.map((element, idx) =>
    gsap.to(element, Array.isArray(vars) ? vars[idx] : vars)
  );
}
