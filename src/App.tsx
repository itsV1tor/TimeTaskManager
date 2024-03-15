import { Header } from './components/Header';

export function App() {
  return (
    <div className="grid h-screen w-full place-items-center p-8 antialiased">
      <div className="w-full max-w-[1080px] rounded-md border p-8">
        <Header />
      </div>
    </div>
  );
}
