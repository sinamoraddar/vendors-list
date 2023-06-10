export async function getVendors(page: number) {
  const res = await fetch(
    `https://snappfood.ir/mobile/v3/restaurant/vendors-list?extra-filter=%7B%22spot%22:+%22list%22%7D&lat=35.774&long=51.418&page=${page}&page_size=10&updateChannels=[%22master%22,%22jek%22,%22twentyPercent%22,%22fiftyPercent%22,%22SeventyPercent%22,%22D1%22,%22transactor%22]&filters=%7B%7D&client=PWA&optionalClient=PWA&deviceType=PWA&appVersion=5.6.6&optionalVersion=5.6.6&UDID=d756c1bd-18bf-43f5-83a7-18546b80cb0a`
  );

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
