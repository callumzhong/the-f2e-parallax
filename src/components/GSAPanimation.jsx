import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import TextPlugin from "gsap/TextPlugin";
import PropTypes from "prop-types";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

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

function gaspTimelineAddHandler({ tl, config }) {
  if (Array.isArray(config)) {
    config.forEach(({ type, target, vars, position = 0 }) => {
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

export default function GSAPanimation({ child: Child, configs }) {
  const childRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      configs.forEach((config) => {
        mm.add(config.conditions, () => {
          // conditions 解析度下的 gsapSet 直接調整 css
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

          // 滾動
          if (!config.timeline) return;
          const tl = gsap.timeline(config.timeline);
          gaspTimelineAddHandler({
            tl,
            config: config.animations,
          });
        });
      });
    }, childRef);
    return () => ctx.revert();
  }, []);

  return <Child ref={childRef} />;
}

GSAPanimation.propTypes = {
  configs: PropTypes.arrayOf(
    PropTypes.shape({
      conditions: PropTypes.string.isRequired,
      default: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
      timeline: PropTypes.shape({
        scrollTrigger: PropTypes.shape({
          trigger: PropTypes.string,
          pin: PropTypes.bool,
          start: PropTypes.string,
          end: PropTypes.string,
          scrub: PropTypes.number,
        }),
      }),
      animations: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    })
  ).isRequired,
  child: PropTypes.elementType.isRequired,
};
