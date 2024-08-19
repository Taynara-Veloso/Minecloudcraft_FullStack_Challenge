import { useContext } from "react"
import { GameSessionContext } from "../../contexts/SessionContext"

export function History(){
  const { session } = useContext(GameSessionContext)

  return (
    <div className="flex flex-1 flex-col w-[900px] m-auto my-12">
      <h1 className="text-2xl font-semibold mx-3 my-4 drop-shadow-[6px_6px_6px_rgba(0,0,0,50)]">History</h1>

      <div className="relative overflow-x-auto rounded-t-xl">
        <table className="w-full text-sm text-left rtl:text-right">
          <thead className="text-lg bg-[--gray-500]">
            <tr className="border-b-8 border-[--gray-700]">
              <th scope="col" className="px-6 py-3 text-center border-r-4 border-[--gray-700]">
                Host
              </th>
              <th scope="col" className="px-6 py-3 text-center border-r-4 border-[--gray-700]">
                Players
              </th>
              <th scope="col" className="px-6 py-3 text-center border-r-4 border-[--gray-700]">
                Map
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Mode
              </th>
            </tr>
          </thead>
          <tbody>
            {session.map((listSessions) => {
              return (
                <tr key={listSessions.sessionId} className="bg-[--gray-800] border-b-4 border-[--gray-700] text-base">
                  <th scope="row" className="px-6 py-4 font-light whitespace-nowrap text-white truncate text-center border-r-4 border-[--gray-700]">
                    {listSessions.hostname}
                  </th>
                  <td className="px-6 py-4 text-center border-r-4 border-[--gray-700]">
                    {listSessions.players}
                  </td>
                  <td className="px-6 py-4 text-center border-r-4 border-[--gray-700]">
                    {listSessions.gamemap}
                  </td>
                  <td className="px-6 py-4 text-center">
                    {listSessions.gamemode}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}