"use client";

import { useEffect, useState } from "react";
import { getInventory } from "@/services/inventoryApi";
import InventoryTable from "@/components/InventoryTable";
import InventoryChart from "@/components/InventoryChart";
import Pagination from "@/components/Pagination";
import { InventoryItem } from "@/types/inventory";

const ITEMS_PER_PAGE = 10; // ✅ pagination size

export default function Dashboard() {
  const [items, setItems] = useState<InventoryItem[]>([]);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("ALL");
  const [currentPage, setCurrentPage] = useState(1);

  // ✅ CENTRAL REFRESH FUNCTION
  const fetchInventory = async () => {
    const res = await getInventory();
    setItems(res.data);
  };

  useEffect(() => {
    fetchInventory();
  }, []);

  // ✅ Reset page when search or filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [query, filter]);

  // ✅ Search + filter
  const filteredItems = items.filter((item) => {
    const search = query.toLowerCase();

    const matchesSearch =
      item.name.toLowerCase().includes(search) ||
      item.sku.toLowerCase().includes(search) ||
      item.category?.toLowerCase().includes(search);

    const matchesFilter =
      filter === "ALL" ? true : item.status === filter;

    return matchesSearch && matchesFilter;
  });

  // ✅ Pagination logic
  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);

  const paginatedItems = filteredItems.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    // <main className="p-6 max-w-6xl mx-auto">
    <main className="p-8 max-w-7xl mx-auto space-y-8">
      <h1 className="text-3xl font-semibold tracking-tight mb-8 text-center">
        Inventory Dashboard
      </h1>

      {/* Search + Filter */}
      <div className="flex flex-wrap gap-3 mb-6">
        <input
          placeholder="Search by SKU, Name, or Category"
          className="input flex-1"
          onChange={(e) => setQuery(e.target.value)}
        />

        <select
          className="input w-40"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="ALL">All</option>
          <option value="FAST">FAST</option>
          <option value="SLOW">SLOW</option>
          <option value="DEAD">DEAD</option>
        </select>
      </div>

      <section className="card p-6 space-y-6">
        {/* Chart */}
        <div className="flex justify-center">
          <InventoryChart items={filteredItems} />
        </div>

        {/* Table */}
        <div className="mt-6">
          <InventoryTable
            items={paginatedItems}   // ✅ PAGINATED DATA
            onRefresh={fetchInventory}
          />
        </div>
      </section>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </main>
  );
}
