export function rankFamilies(iocs) {
  const counts = {};

  //loop through all IOCS collecting IOCS
  for (let a = 0; a < iocs.length; a++) {
    if (iocs[a].malware_printable in counts) {
      counts[iocs[a].malware_printable]++;
    } else {
      counts[iocs[a].malware_printable] = 1;
    }
  }

  //sort by descending count
  //slice top 10
  return Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([name, count]) => ({ name, count }));
}

export function buildDailyChart(iocs) {
  let dailyIOCS = {};

  /*
  Group IOCS by date
  NOTE: iocs first seen looks like `"2026-05-21 21:58:26 UTC"`
  */
  for (let a = 0; a < iocs.length; a++) {
    const datePortion = iocs[a].first_seen.split(" ")[0];
    if (datePortion in dailyIOCS) {
      dailyIOCS[datePortion]++;
    } else {
      dailyIOCS[datePortion] = 1;
    }
  }

  // sorting and filling gaps
  const finalDaily = [];
  for (let c = 6; c >= 0; c--) {
    const d = new Date();
    d.setDate(d.getDate() - c);
    const dateStr = d.toISOString().split("T")[0];
    finalDaily.push({
      date: dateStr,
      count: dailyIOCS[dateStr] || 0,
    });
  }

  return finalDaily;
}
