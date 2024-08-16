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
            <label htmlFor="amountPlayers" className="flex justify-center text-2xl font-semibold pb-2">Players</label>
            <input className="h-12 rounded-xl bg-[--gray-900] text-center shadow-shape" 
              type="number" 
              id="amountPlayers"
              placeholder="Add number of players 1-4" 
              required 
              {...register('amountPlayers')}/>
          </div>

          <div className="flex flex-col px-10 relative">
            <label htmlFor="eventMap" className="flex justify-center text-2xl font-semibold pb-2">Map</label>
            <CaretDown className="size-5 pointer-events-none absolute top-3/4 transform -translate-y-1/2 right-14"/>
            <select className="h-12 rounded-xl bg-[--gray-900] text-center shadow-shape"  
              id="eventMap" 
              required 
              {...register('eventMap')}
            >
              <option value="Cave">Cave</option>
              <option value="City">City</option>
              <option value="Forest">Forest</option>
              <option value="Random">Random</option>
            </select>
          </div>

          <div className="flex flex-col px-10 relative">
            <label htmlFor="eventMode" className="flex justify-center text-2xl font-semibold pb-2">Mode</label>
            <CaretDown className="size-5 pointer-events-none absolute top-3/4 transform -translate-y-1/2 right-14"/>
            <input className="h-12 rounded-xl bg-[--gray-900] text-center shadow-shape" 
              type="text" 
              id="eventMode"
              placeholder="Choose mode" 
              required 
              {...register('eventMode')}/>
          </div>
        </div>
      </fieldset>
    </div>
  )
}