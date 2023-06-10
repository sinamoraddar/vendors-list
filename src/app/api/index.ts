export async function getVendors(page: number) {
  const res = await fetch(
    `https://snappfood.ir/mobile/v3/restaurant/vendors-list?lat=35.754&long=51.328&page =${page}&page_size=10`
  );

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
