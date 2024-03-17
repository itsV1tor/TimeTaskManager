import { Task } from './Task';

export function Tasks() {
  return (
    <div className="m-auto w-full px-4 gap-4 flex flex-col">
      <Task title = 'desenvolver background' totalTime= '01:00' description= 'descrição qualquer'/>
    </div>
  );
}
