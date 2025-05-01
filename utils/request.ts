const params = {
  mode: "cors",
  headers: {
    "GPB-guid": "custom",
    "GPB-requestId": "custom",
    Authorization: "custom",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,HEAD,POST,DELETE,UPDATE",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Max-Age": "3600",
  },
} as RequestInit;

type RequestProps = {
  url: string;
  body?: string;
};

const request = ({ url, body }: RequestProps) => {
    const currentParams = {
      ...(body
        ? {
            ...params,
            headers: {
              ...params.headers,
              "Content-Type": "application/json",
            },
          }
        : params),
    };
  
    return fetch(`${url}`, {
      ...currentParams,
      method: body ? "POST" : "GET",
      body,
    })
      .then((data) => data.json())
      .catch((error) => SyntaxError(error));
  };
  
  export default request;