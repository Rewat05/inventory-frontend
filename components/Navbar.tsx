"use client";

import { Warehouse } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const linkClass = (href: string) =>
    `px-4 py-2 rounded-lg text-sm font-medium transition
     ${
       pathname === href
         ? "bg-indigo-600 text-white"
         : "text-gray-300 hover:bg-white/10"
     }`;

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

      {/* Navigation Buttons */}
      <div className="flex items-center gap-3">
        <Link href="/" className={linkClass("/")}>
          Dashboard
        </Link>

        <Link href="/add-item" className={linkClass("/add-item")}>
          + Add Item
        </Link>
      </div>
    </header>
  );
}



// "use client";

// import { Warehouse } from "lucide-react";

// export default function Navbar() {
//   return (
//     <header className="px-6 py-4 flex items-center justify-between">
//       {/* Logo + Title */}
//       <div className="flex items-center gap-3">
//         <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
//           <Warehouse className="text-white" size={20} />
//         </div>

//         <h1 className="text-lg font-semibold tracking-wide">
//           Insyd Inventory
//         </h1>
//       </div>

//       {/* Right side (visual only) */}
//       {/* <div className="flex items-center gap-4 text-gray-400">
//         <span className="text-sm">Admin</span>
//         <div className="w-8 h-8 rounded-full bg-gray-600" />
//       </div> */}
//     </header>
//   );
// }