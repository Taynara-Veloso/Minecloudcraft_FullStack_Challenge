import { CaretDown } from "phosphor-react";

export function Home(){
  return (
    <form id="submit_form" className="flex flex-col justify-center m-auto">
      <fieldset className="flex justify-center py-4 w-[680px]">
        <div className="flex flex-col justify-center w-full text-[--gray-100] space-y-3">
          <div className="flex flex-col px-10">
            <label className="flex justify-center text-2xl font-semibold pb-2">Host</label>
            <input className="h-12 rounded-xl bg-[--gray-900] text-center shadow-shape" type="text" id="event-host" aria-label="" placeholder="Enter the creator's name" required />
          </div>

          <div className="flex flex-col px-10">
            <label className="flex justify-center text-2xl font-semibold pb-2">Players</label>
            <input className="h-12 rounded-xl bg-[--gray-900] text-center shadow-shape" type="text" id="event-players" aria-label="" placeholder="Add players" required />
          </div>

          <div className="flex flex-col px-10 relative">
            <label className="flex justify-center text-2xl font-semibold pb-2">Map</label>
            <CaretDown className="size-5 pointer-events-none absolute top-3/4 transform -translate-y-1/2 right-14"/>
            <input className="h-12 rounded-xl bg-[--gray-900] text-center shadow-shape" type="text" id="event-map" aria-label="" placeholder="Choose the map" required />
          </div>

          <div className="flex flex-col px-10 relative">
            <label className="flex justify-center text-2xl font-semibold pb-2">Mode</label>
            <CaretDown className="size-5 pointer-events-none absolute top-3/4 transform -translate-y-1/2 right-14"/>
            <input className="h-12 rounded-xl bg-[--gray-900] text-center shadow-shape" type="text" id="event-mode" aria-label="" placeholder="Choose mode" required />
          </div>
        </div>
      </fieldset>
      <button className="w-[610px] min-w-96 m-auto bg-[--green-600] text-white rounded-2xl py-3 shadow-shape">
        Create new game session
      </button>
    </form>
  )
}