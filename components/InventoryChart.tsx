"use client";

import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { InventoryItem } from "@/types/inventory";

export default function InventoryChart({
  items,
}: {
  items: InventoryItem[];
}) {
  const dead = items.filter((i) => i.status === "DEAD").length;
  const active = items.length - dead;

  const data = [
    { name: "Active", value: active },
    { name: "Dead", value: dead },
  ];

  const COLORS = ["#22c55e", "#ef4444"];

  return (
    <div className="bg-white p-4 rounded shadow w-fit">
      <h3 className="font-medium mb-2">Inventory Health</h3>

      <PieChart width={220} height={220}>
        <Pie data={data} dataKey="value" outerRadius={80} label>
          {data.map((_, i) => (
            <Cell key={i} fill={COLORS[i]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
}
