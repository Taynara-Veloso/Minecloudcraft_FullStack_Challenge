import { createContext, ReactNode, useReducer } from "react"
import { Session } from "../reducers/gameSession/reducer";

interface CreateSessionData {
  hostname: string;
  players: number;
  gamemap: string;
  gamemode: string;
}

interface SessionContextType {
  session: Session[]
  createNewSession: (data: CreateSessionData) => void
}

export const GameSessionContext = createContext({} as SessionContextType)

interface SessionContextProviderProps {
  children: ReactNode
}

export function SessionContextProvider({ children }: SessionContextProviderProps) {
  const [state, dispatch] = useReducer()

  function createNewSession(data: CreateSessionData){

    const newSession: Session = {
      sessionId,
      hostname: data.hostname,
      players: data.players,
      gamemap: data.gamemap,
      gamemode: data.gamemode,
    }

    dispatch(addNewSession(newSession))
  }

  return (
    <GameSessionContext.Provider value={{createNewSession}}>
      {children}
    </GameSessionContext.Provider>
  )
} 