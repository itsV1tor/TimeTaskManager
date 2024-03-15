import { Task } from './Task';

export function Tasks() {
  return (
    <div className="m-auto w-full max-w-[720px] px-4 gap-4 flex flex-col">
      <Task />
      <Task/>
    </div>
  );
}
