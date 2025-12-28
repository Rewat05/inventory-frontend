"use client";

import { deleteItem } from "@/services/inventoryApi";

export default function DeleteItemButton({ id }: { id: string }) {
  const handleDelete = async () => {
    const confirm = window.confirm(
      "Are you sure you want to delete this item?"
    );
    if (!confirm) return;

    await deleteItem(id);
    window.location.reload();
  };

  return (
    <button
      onClick={handleDelete}
      className="text-xs text-red-600 hover:underline"
    >
      Delete
    </button>
  );
}
