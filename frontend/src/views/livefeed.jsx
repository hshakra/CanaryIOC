import useRecentIOC from "../hooks/useRecentIOCS.js";
import {
  rankFamilies,
  buildDailyChart,
  groupByIOCType,
  rankTags,
  sortRecentStream,
} from "../utils/processor.js";
import { ActivityChart } from "./ActivityChart.jsx";

function LiveFeed() {
  const recent = useRecentIOC();

  // guard
  if (recent.isLoading) return <div>Loading..</div>;
  if (recent.isError) return <div>Loading..</div>;

  // if (recent?.data) console.log(sortRecentStream(recent.data.data));
  // if (recent?.data) console.log(rankFamilies(recent.data.data));
  // if (recent?.data) console.log(buildDailyChart(recent.data.data));
  // if (recent?.data) console.log(groupByIOCType(recent.data.data));
  // if (recent?.data) console.log(rankTags(recent.data.data));
  // if (recent?.data) console.log(recent.data.data);
  return (
    <div>
      <ActivityChart iocs={recent.data.data} />
    </div>
  );
}

export default LiveFeed;
