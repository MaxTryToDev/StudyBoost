import * as process from "node:process";

interface ServerResponse<T> {
  status: "success" | "error"
  message?: string
  record?: number
  data?: T
  error: any
}

function getUrl(url: string) {
  return `${process.env.REACT_APP_SERVER_URL}/${url}`
}

export const get = async (url: string) => {
  const newUrl = getUrl(url);

  try {
    const response = await fetch(newUrl, {method: "GET"})
    return await response.json();

  } catch (err) {
    console.error(err);
  }

};
export const post = async <T>(url: string, data: T) => {
  const newUrl = getUrl(url);
  try {
    const response = await fetch(newUrl, {method: "POST", body: JSON.stringify(data)})
    return await response.json();

  } catch (err) {
    console.error(err);
  }
};


export const patch = async <T>(url: string, data: T): Promise<ServerResponse<T>> => {
  const newUrl = getUrl(url);

  try {
    const response = await fetch(newUrl, {method: "PATCH", body: JSON.stringify(data)})
    const res = await response.json();
    return res

  } catch (err: any) {
    console.error(err);
    return err;
  }
};

export const deletes = async (url: string) => {
  const newUrl = getUrl(url);

  try {
    const response = await fetch(newUrl, {method: "DELETE"})
    return await response.json();

  } catch (err) {
    console.error(err);
  }
};