import gsap from "gsap";

export default function gsapSetHandler({ target, vars }) {
  const elements = gsap.utils.toArray(target);
  return elements.map((element, idx) =>
    gsap.set(element, Array.isArray(vars) ? vars[idx] : vars)
  );
}
