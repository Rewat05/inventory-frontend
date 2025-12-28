// import axios from "axios";

// const API = axios.create({
//   baseURL: "http://localhost:5001/api",
// });

// export const getInventory = () => API.get("/inventory");

// export const addItem = (data: any) =>
//   API.post("/inventory", data);

// export const updateStock = (id: string, quantityChange: number) =>
//   API.patch(`/inventory/${id}`, { quantityChange });

// export const deleteItem = (id: string) =>
//   API.delete(`/inventory/${id}`);


import axios from "axios";

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL + "/api",
});

export const getInventory = () => API.get("/inventory");

export const addItem = (data: any) =>
  API.post("/inventory", data);

export const updateStock = (id: string, quantityChange: number) =>
  API.patch(`/inventory/${id}`, { quantityChange });

export const deleteItem = (id: string) =>
  API.delete(`/inventory/${id}`);
