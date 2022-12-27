import TitleSection from "../TitleSection/TitleSection";
import QuestionList from "./QuestionList";

export function HandleOfQuestionAnimation(gsap) {
  const mm = gsap.matchMedia();
  mm.add("(min-width:1280px)", () => {
    gsap.set(".flower", {
      y: 200,
    });
    gsap.set(".question-list>li:nth-child(2)", {
      opacity: 0,
    });
    gsap.set(".question-list>li:nth-child(1)", {
      x: -20,
      opacity: 0,
    });
    gsap.set(".question-list>li:nth-child(3)", {
      x: 20,
      opacity: 0,
    });
    gsap.set(".question-section__title", {
      opacity: 0,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#question-section",
        markers: true,
        pin: true,
        start: "top top",
        end: "+=500",
        scrub: 1,
      },
    });
    tl.addLabel("part-1")
      .to(
        ".footer-section__race",
        {
          scale: 0.7,
          y: 80,
        },
        "part-1"
      )
      .to(
        ".flower",
        {
          y: -20,
          opacity: 1,
        },
        "part-1"
      )
      .to(
        ".question-section__title",
        {
          opacity: 1,
        },
        "part-1"
      )
      .addLabel("part-2")
      .to(
        ".question-list >li:nth-child(1)",
        {
          x: 0,
          opacity: 1,
        },
        "part-2"
      )
      .to(
        ".flower",
        {
          y: -30,
          scale: 0.8,
        },
        "part-2"
      )
      .addLabel("part-3")
      .to(
        ".question-list >li:nth-child(2)",
        {
          opacity: 1,
        },
        "part-3"
      )
      .to(
        ".flower",
        {
          y: -40,
          scale: 0.6,
        },
        "part-3"
      )
      .addLabel("part-4")
      .to(
        ".question-list >li:nth-child(3)",
        {
          x: 0,
          opacity: 1,
        },
        "part-4"
      )
      .to(
        ".flower",
        {
          y: -40,
          scale: 0.2,
          opacity: 0,
        },
        "part-4"
      )
      .addLabel("part-5")
      .to("#question-section *", { opacity: 0 }, "part-5")
      .to(
        ".footer-section__race",
        {
          scale: 1,
          y: 0,
        },
        "part-5"
      );
  });
}

export default function Question() {
  return (
    <section
      id="question-section"
      className="relative pb-[3.75rem] xl:min-h-screen xl:pb-0 xl:pt-[min(3.91vh,2.5rem)]"
    >
      <TitleSection className="question-section__title mx-auto mb-10 h-[4.5rem] w-full xl:mb-[min(3.91vh,2.5rem)] xl:h-[min(14.75vh,9.4375rem)]">
        你是否也有以下困擾？
      </TitleSection>
      <div className="mx-auto px-5 md:max-w-[29.75rem] xl:max-w-none xl:pl-5 xl:pr-[0.625rem] 2xl:max-w-[90rem]">
        <QuestionList />
      </div>
    </section>
  );
}
