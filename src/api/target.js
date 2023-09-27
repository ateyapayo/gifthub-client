const baseUrl = process.env.REACT_APP_BACKEND_API;

export const getTarget = async () => {
  const res = await fetch(`${baseUrl}/target`);
  const target = await res.json();
  return target;
};

export const updateTarget = async (target) => {
  const res = await fetch(`${baseUrl}/target`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(target),
  });

  const updatedTarget = await res.json();
  return updatedTarget;
};
