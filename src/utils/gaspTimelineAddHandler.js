import gsapSetHandler from "./gsapSetHandler";
import gsapToHandler from "./gsapToHandler";

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
      if (!vars.scrollTrigger) {
        tweens.forEach((tween, idx) => {
          tl.add(tween, Array.isArray(position) ? position[idx] : position);
        });
      }
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
