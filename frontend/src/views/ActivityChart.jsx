import { BarChart, XAxis, YAxis, Bar, CartesianGrid } from "recharts";
import { buildDailyChart } from "../utils/processor";
import { useMemo } from "react";
// build the top familes panel using rank families and family card compoponents.
// each cards links to /family/:

// Using recharts barchat with build daily chart output .
// one bar per day, dates on x axis ioc count ony.
// data structure is date, count
export function ActivityChart({ iocs }) {
  const data = useMemo(() => buildDailyChart(iocs), [iocs]);
  return (
    <BarChart data={data} responsive width={"100%"} height={"100%"}>
      <CartesianGrid strokeDasharray={"3 3"} />
      <YAxis />
      <XAxis dataKey="date" />
      <Bar dataKey="count" />
    </BarChart>
  );
}
