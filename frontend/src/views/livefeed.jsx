import useRecentIOC from "../hooks/useRecentIOCS.js";
import {
  rankFamilies,
  buildDailyChart,
  groupByIOCType,
  rankTags,
  sortRecentStream,
} from "../utils/processor.js";

function LiveFeed() {
  const recent = useRecentIOC();

  if (recent?.data) console.log(sortRecentStream(recent.data.data));
  // if (recent?.data) console.log(recent.data.data);
  return <h1>Live Feed</h1>;
}

export default LiveFeed;
