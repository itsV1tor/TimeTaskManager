import React, { useContext } from "react";
import { AppContext, AppContextType } from "../contexts/AppContext";

export function Form() {
  const { inputTitle, setInputTitle, inputDescription, setInputDescription }:AppContextType = useContext(AppContext);

  const handleTitleInput= (event:React.ChangeEvent<HTMLInputElement>) => {
    setInputTitle(event.target.value)
    console.log(event)
  }
  const handleDescriptionInput= (event:React.ChangeEvent<HTMLInputElement>) => {
    setInputDescription(event.target.value)
    console.log(event)
  }

  return (
    <div className="flex flex-col gap-2 border-b pb-4">
      <input
        type="text"
        onChange={handleTitleInput}
        value={inputTitle ?? 'Undefined'}
        className="group w-full rounded-md border px-4 py-2 text-zinc-800 outline-none"
        placeholder="Insert the Task..."
      />
      <input
        type="text"
        onChange={handleDescriptionInput}
        value={inputDescription ?? 'Undefined'}
        className="group w-full rounded-md border px-4 py-2 text-zinc-800 outline-none"
        placeholder="Insert the Description..."
      />
    </div>
  );
}
