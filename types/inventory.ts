export interface InventoryItem {
  _id: string;
  sku: string;
  name: string;
  category?: string;
  quantity: number;
  reorderLevel: number;
  status: "FAST" | "SLOW" | "DEAD";
  lowStock: boolean;
  lastSoldAt?: string;
}
