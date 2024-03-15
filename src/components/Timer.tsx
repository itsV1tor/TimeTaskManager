import { FaPlay, FaPause, FaStop } from 'react-icons/fa';

export function Timer() {
  return (
    <div className="m-auto flex w-full max-w-[720px] flex-col items-center gap-4">
      <p className="text-5xl text-center font-medium text-zinc-800">
        <span>00</span>:<span>00</span>
      </p>

      <div className="flex gap-8 items-center">
        <button>
          <FaPlay className="fill-zinc-400 transition duration-300 hover:fill-zinc-800" />
        </button>
        <button>
          <FaPause className="fill-zinc-400 transition duration-300 hover:fill-zinc-800" />
        </button>
        <button>
          <FaStop className="fill-zinc-400 transition duration-300 hover:fill-zinc-800" />
        </button>
      </div>

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
