export default function makeLogExperiment ({ createExperiment }) {
  return async function logExperiment (httpRequest) {
    try {
      const experiment = await createExperiment(httpRequest.body);
      return {
        headers: {
          "Content-Type": "application/json",
          "Last-Modified": new Date(experiment.updatedAt).toUTCString()
        },
        statusCode: 201,
        body: { experiment }
      };
    } catch (e) {
      console.error(e);

      return {
        headers: {
          "Content-Type": "application/json"
        },
        statusCode: 400,
        body: {
          error: e.message
        }
      };
    }
  };
}
