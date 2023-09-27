export const getTarget = async () => {
  const res = await fetch("https://gifthub-server.vercel.app/target");
  const target = await res.json();
  return target;
};

export const updateTarget = async (target) => {
  const res = await fetch("https://gifthub-server.vercel.app/target", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(target),
  });

  const updatedTarget = await res.json();
  return updatedTarget;
};
