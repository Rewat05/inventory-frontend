// "use client";

// import { deleteItem } from "@/services/inventoryApi";

// export default function DeleteItemButton({ id }: { id: string }) {
//   const handleDelete = async () => {
//     const confirm = window.confirm(
//       "Are you sure you want to delete this item?"
//     );
//     if (!confirm) return;

//     await deleteItem(id);
//     window.location.reload();
//   };

//   return (
//     <button
//       onClick={handleDelete}
//       className="text-xs text-red-600 hover:underline"
//     >
//       Delete
//     </button>
//   );
// }


"use client";

import { deleteItem } from "@/services/inventoryApi";

type DeleteItemButtonProps = {
  id: string;
  onRefresh: () => void;
};

export default function DeleteItemButton({
  id,
  onRefresh,
}: DeleteItemButtonProps) {
  const handleDelete = async () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this item?"
    );
    if (!confirmed) return;

    await deleteItem(id);
    onRefresh(); // ✅ refresh inventory without reload
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
