"use client";

import { useState } from "react";
import { addItem } from "@/services/inventoryApi";
import { useRouter } from "next/navigation";

export default function AddItemPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    sku: "",
    name: "",
    category: "",
    quantity: 0,
    reorderLevel: 10,
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await addItem(form);
    router.push("/");
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-xl font-semibold mb-4">Add Inventory Item</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="sku"
          placeholder="SKU"
          required
          className="input"
          onChange={handleChange}
        />
        <input
          name="name"
          placeholder="Product Name"
          required
          className="input"
          onChange={handleChange}
        />
        <input
          name="category"
          placeholder="Category"
          className="input"
          onChange={handleChange}
        />
        <input
          name="quantity"
          type="number"
          placeholder="Quantity"
          className="input"
          onChange={handleChange}
        />
        <input
          name="reorderLevel"
          type="number"
          placeholder="Reorder Level"
          className="input"
          onChange={handleChange}
        />

        <button className="btn-primary w-full">Add Item</button>
      </form>
    </div>
  );
}
