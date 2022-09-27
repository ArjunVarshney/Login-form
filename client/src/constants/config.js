export const API_NOTIFICATION_MESSAGES = {
  loading: {
    title: "loading",
    message: "Data is being loaded, please wait",
  },
  success: {
    title: "success",
    message: "Data successfull loaded",
  },
  responseFailure: {
    title: "error",
    message: "An error occured while fetching response from the server",
  },
  requestFailure: {
    title: "error",
    message: "An error occured while parsing the request data",
  },
  networkError: {
    title: "error",
    message:
      "Unable to connect with the server, Please check internet connectivity",
  },
};

//NEED SERVICE CALL: {url:'/', method='POST/GET/PUT/PATCH/DELETE', params: true/false, query: true/false}
export const SERVICE_URLS = {
  userSignup: { url: "/signup", method: "POST" },
};
