// export default function StatusBadge({ status }: { status: string }) {
//   const colors: any = {
//     FAST: "bg-green-100 text-green-700",
//     SLOW: "bg-yellow-100 text-yellow-700",
//     DEAD: "bg-red-100 text-red-700",
//   };

//   return (
//     <span className={`px-2 py-1 rounded text-xs ${colors[status]}`}>
//       {status}
//     </span>
//   );
// }


export default function StatusBadge({ status }: { status: string }) {
  const styles: any = {
    FAST: "text-green-400",
    SLOW: "text-yellow-400",
    DEAD: "text-red-400",
  };

  return (
    <span className={`text-sm font-medium ${styles[status]}`}>
      ● {status}
    </span>
  );
}
