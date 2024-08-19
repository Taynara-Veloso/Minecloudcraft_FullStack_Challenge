import { CaretDown } from "phosphor-react";
import { useFormContext } from "react-hook-form";

export function NewSessionForm(){
  const { register } = useFormContext()
  
  return (
    <div className="flex flex-col justify-center m-auto">
      <fieldset className="flex justify-center py-4 w-[680px]">
        <div className="flex flex-col justify-center w-full text-[--gray-100] space-y-3">
          <div className="flex flex-col px-10">
            <label htmlFor="hostname" className="flex justify-center text-2xl font-semibold pb-2">Host</label>
            <input className="h-12 rounded-xl bg-[--gray-900] text-center shadow-shape" 
              type="text" 
              id="hostname" 
              placeholder="Enter hostname" 
              required 
              {...register('hostname')}/>
          </div>

          <div className="flex flex-col px-10">
            <label htmlFor="players" className="flex justify-center text-2xl font-semibold pb-2">Players</label>
            <input className="h-12 rounded-xl bg-[--gray-900] text-center shadow-shape" 
              type="number" 
              id="players"
              placeholder="Add number of players 1-4" 
              min={1}
              max={4}
              required 
              {...register('players', { valueAsNumber: true })}/>
          </div>

          <div className="flex flex-col px-10 relative">
            <label htmlFor="gamemap" className="flex justify-center text-2xl font-semibold pb-2">Map</label>
            <CaretDown className="size-5 pointer-events-none absolute top-3/4 transform -translate-y-1/2 right-14"/>
            <input className="h-12 rounded-xl bg-[--gray-900] text-center shadow-shape"  
              id="gamemap" 
              placeholder="Enter map"
              required 
              {...register('gamemap')}
            />
          </div>

          <div className="flex flex-col px-10 relative">
            <label htmlFor="gamemode" className="flex justify-center text-2xl font-semibold pb-2">Mode</label>
            <CaretDown className="size-5 pointer-events-none absolute top-3/4 transform -translate-y-1/2 right-14"/>
            <input className="h-12 rounded-xl bg-[--gray-900] text-center shadow-shape" 
              type="text" 
              id="gamemode"
              placeholder="Choose mode" 
              required 
              {...register('gamemode')}/>
          </div>
        </div>
      </fieldset>
    </div>
  )
}
