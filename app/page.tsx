// export default function DatePickerWithPresets({
//   // children,
// }: {
//   // children: never;
// }) {
//   return (
//     <main className="flex overflow-hidden flex-col items-center justify-between">
//       {/* {children} */}
//     </main>
//   );
// }

function Page({ children }: any) {
  return (
    <main className="flex overflow-hidden flex-col items-center justify-between">
      {children}
    </main>
  );
}

export default Page;
