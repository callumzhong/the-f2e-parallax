import { H1 } from "../Typography";
import ActivityGroup from "./ActivityGroup";

export default function Content() {
  return (
    <div className="text-center">
      <H1 className="mb-5 inline-block rounded-[100px] bg-highlight py-2 px-10 text-white">
        互動式網頁設計
      </H1>
      <ActivityGroup />
    </div>
  );
}
