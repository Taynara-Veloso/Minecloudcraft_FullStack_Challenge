import { createContext, ReactNode, useState } from "react"

interface CreateSessionData {
  hostname: string;
  players: number;
  gamemap: string;
  gamemode: string;
}

interface SessionContextType {
  sessions: CreateSessionData[];
  createNewSession: (data: CreateSessionData) => void;
}

export const GameSessionContext = createContext({} as SessionContextType)

interface SessionContextProviderProps {
  children: ReactNode
}

export const SessionContextProvider: React.FC<SessionContextProviderProps> = ({ children }) => {
  const [sessions, setSessions] = useState<CreateSessionData[]>([]);

  function createNewSession(data: CreateSessionData){
    console.log('sessionData:', data)
    setSessions(prevSessions => [...prevSessions, data])
  }

  return (
    <GameSessionContext.Provider value={{createNewSession, sessions}}>
      {children}
    </GameSessionContext.Provider>
  )
} 
