"use client";

import { useState } from "react";
import { updateStock } from "@/services/inventoryApi";

export default function StockControls({
  id,
  quantity,
  onRefresh,
}: {
  id: string;
  quantity: number;
  onRefresh: () => void;
}) {
  const [amount, setAmount] = useState(0);
  const [loading, setLoading] = useState(false);

  const canRemove = amount > 0 && amount <= quantity;

  const handleUpdate = async (change: number) => {
    if (change === 0) return;

    try {
      setLoading(true);
      await updateStock(id, change);
      onRefresh();
      setAmount(0);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <input
        type="number"
        min={0}
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value) || 0)}
        className="w-16 border rounded px-1 text-sm"
      />

      <button
        disabled={loading || amount === 0}
        onClick={() => handleUpdate(amount)}
        className="px-2 py-1 bg-green-100 text-green-700 rounded text-sm disabled:opacity-50"
      >
        + Add
      </button>

      <button
        disabled={loading || !canRemove}
        onClick={() => handleUpdate(-amount)}
        className="px-2 py-1 bg-red-100 text-red-700 rounded text-sm disabled:opacity-50"
      >
        − Remove
      </button>
    </div>
  );
}
