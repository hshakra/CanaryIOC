import useRecentIOC from "../hooks/useRecentIOS";

function LiveFeed() {
  const recent = useRecentIOC();
  console.log(recent);
  return <h1>Live Feed</h1>;
}

export default LiveFeed;
