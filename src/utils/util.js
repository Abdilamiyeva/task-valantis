import { MD5 } from "crypto-js";

export const generateXAuthHeaderValue = (password) => {
  const timestamp = new Date().toISOString().slice(0, 10).replace(/-/g, "");
  const authString = `${password}_${timestamp}`;
  return MD5(authString).toString();
};
