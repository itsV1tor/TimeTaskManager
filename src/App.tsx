import { Header } from './components/Header';
import { Timer } from './components/Timer';
import { Tasks } from './components/Tasks';

export function App() {
  return (
    <div className="grid h-screen w-full place-items-center p-8 antialiased">
      <div className="flex w-full max-w-[1080px] flex-col gap-8 rounded-md border p-8">
        <Header />
        <Timer />
        <Tasks />
      </div>
    </div>
  );
}
