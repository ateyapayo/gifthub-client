export const getItems = async () => {
  const res = await fetch("https://gifthub-server.vercel.app/items");
  const items = await res.json();
  return items;
};
