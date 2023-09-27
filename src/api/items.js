const baseUrl = process.env.REACT_APP_BACKEND_API;

console.log("THIS IS BASE URL ---> ".baseUrl);

export const getItems = async () => {
  const res = await fetch(`${baseUrl}/items`);
  const items = await res.json();
  return items;
};
