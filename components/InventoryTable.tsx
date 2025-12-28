"use client";

import { InventoryItem } from "@/types/inventory";
import StatusBadge from "./StatusBadge";
import StockControls from "./StockControls";
import DeleteItemButton from "./DeleteItemButton";

export default function InventoryTable({
  items,
  onRefresh,
}: {
  items: InventoryItem[];
  onRefresh: () => void;
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left">SKU</th>
            <th className="p-3">Name</th>
            <th className="p-3">Qty</th>
            <th className="p-3">Status</th>
            <th className="p-3">Action</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item) => (
            // <tr
            //   key={item._id}
            //   className={`border-t ${
            //     item.lowStock ? "bg-red-50" : ""
            //   }`}
            // >
            <tr
            key={item._id}
            className={`border-b border-white/5 transition
              ${
                item.lowStock
                  ? "bg-red-900/20 border-l-4 border-red-500"
                  : "hover:bg-white/5"
              }`}
          >

              <td className="p-3">{item.sku}</td>
              <td className="p-3">{item.name}</td>
              <td className="p-3 font-medium">{item.quantity}</td>
              <td className="p-3">
                <StatusBadge status={item.status} />
              </td>

              {/* ✅ ACTION COLUMN */}
              <td className="p-3 flex gap-2 items-center">
                <StockControls
                  id={item._id}
                  quantity={item.quantity}   // ✅ PASS CURRENT STOCK
                  onRefresh={onRefresh}
                />

                <DeleteItemButton
                  id={item._id}
                  onRefresh={onRefresh}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
