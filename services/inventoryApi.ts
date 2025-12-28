import axios from "axios";

const BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5001";

const API = axios.create({
  baseURL: `${BASE_URL}/api`,
});

if (typeof window !== "undefined") {
  console.log("API BASE URL:", `${BASE_URL}/api`);
}

export const getInventory = () => API.get("/inventory");
export const addItem = (data: any) => API.post("/inventory", data);
export const updateStock = (id: string, quantityChange: number) =>
  API.patch(`/inventory/${id}`, { quantityChange });
export const deleteItem = (id: string) =>
  API.delete(`/inventory/${id}`);

