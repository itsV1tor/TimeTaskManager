import { CgMenuGridO } from 'react-icons/cg';

export function Header() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="leadin text-xl font-black text-zinc-800">TTM</h1>
        <p className="font-medium leading-3 text-zinc-400">time task manager</p>
      </div>
      <button className="cursor-grab">
        <CgMenuGridO
          size={26}
          className="text-zinc-400 transition duration-300 hover:text-zinc-800"
        />
      </button>
    </div>
  );
}
