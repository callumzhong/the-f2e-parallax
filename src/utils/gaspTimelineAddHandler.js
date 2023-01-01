import gsap from "gsap";

export function gsapSetHandler({ target, vars }) {
  const elements = gsap.utils.toArray(target);
  return elements.map((element, idx) =>
    gsap.set(element, Array.isArray(vars) ? vars[idx] : vars)
  );
}

export function gsapToHandler({ target, vars }) {
  const elements = gsap.utils.toArray(target);
  return elements.map((element, idx) =>
    gsap.to(element, Array.isArray(vars) ? vars[idx] : vars)
  );
}

export default function gaspTimelineAddHandler({ tl, config }) {
  if (Array.isArray(config.default)) {
    config.default.forEach(({ target, vars }) => {
      gsapSetHandler({
        target,
        vars,
      });
    });
  }

  if (config.default && !Array.isArray(config.default)) {
    gsapSetHandler({
      target: config.default.target,
      vars: config.default.vars,
    });
  }

  if (Array.isArray(config.child)) {
    config.child.forEach(({ type, target, vars, position = 0 }) => {
      const tweens =
        type === "set"
          ? gsapSetHandler({
              target,
              vars,
            })
          : gsapToHandler({
              target,
              vars,
            });

      tweens.forEach((tween, idx) => {
        tl.add(tween, Array.isArray(position) ? position[idx] : position);
      });
    });
  } else {
    tl.add(
      gsapToHandler({
        target: config.target,
        vars: config.vars,
      }),
      config.position ?? 0
    );
  }
}
