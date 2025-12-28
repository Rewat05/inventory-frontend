"use client";

import { Warehouse } from "lucide-react";

export default function Navbar() {
  return (
    <header className="px-6 py-4 flex items-center justify-between">
      {/* Logo + Title */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
          <Warehouse className="text-white" size={20} />
        </div>

        <h1 className="text-lg font-semibold tracking-wide">
          Insyd Inventory
        </h1>
      </div>

      {/* Right side (visual only) */}
      {/* <div className="flex items-center gap-4 text-gray-400">
        <span className="text-sm">Admin</span>
        <div className="w-8 h-8 rounded-full bg-gray-600" />
      </div> */}
    </header>
  );
}