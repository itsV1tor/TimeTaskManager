export function Form() {
  return (
    <div className="flex flex-col gap-2 border-b pb-4">
      <input
        type="text"
        className="group w-full rounded-md border px-4 py-2 text-zinc-800 outline-none"
        placeholder="Insert the Task..."
      />
      <input
        type="text"
        className="group w-full rounded-md border px-4 py-2 text-zinc-800 outline-none"
        placeholder="Insert the Description..."
      />
    </div>
  );
}
