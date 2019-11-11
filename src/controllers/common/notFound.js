export default async () => {
  return {
    headers: {
      "Content-Type": "application/json"
    },
    body: { error: "Content not found" },
    statusCode: 404
  };
};
