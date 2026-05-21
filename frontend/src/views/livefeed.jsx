import useRecentIOC from "../hooks/useRecentIOCS.js";
import { rankFamilies, buildDailyChart } from "../utils/processor.js";

function LiveFeed() {
  const recent = useRecentIOC();
  // if (recent?.data) console.log(rankFamilies(recent.data.data));
  if (recent?.data) console.log(buildDailyChart(recent.data.data));
  return <h1>Live Feed</h1>;
}

export default LiveFeed;
