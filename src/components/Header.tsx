import { CgMenuGridO } from 'react-icons/cg';
import { WiMoonAltFull } from 'react-icons/wi';

export function Header() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="leadin text-xl font-black text-zinc-800">TTM</h1>
        <p className="font-medium leading-3 text-zinc-400">time task manager</p>
      </div>
      <div className='flex gap-2'>
        <button className="cursor-grab">
          <WiMoonAltFull
            size={26}
            className="text-zinc-400 transition duration-300 hover:text-zinc-800"
          />
        </button>
        <button className="cursor-grab">
          <CgMenuGridO
            size={26}
            className="text-zinc-400 transition duration-300 hover:text-zinc-800"
          />
        </button>
      </div>
    </div>
  );
}
