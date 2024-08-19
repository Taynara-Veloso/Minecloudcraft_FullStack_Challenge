import axios from "axios";
import { createContext, 
         ReactNode, 
         useEffect, 
         useState 
} from "react"

interface CreateSessionData {
  id: string;
  hostname: string;
  players: number;
  gamemap: string;
  gamemode: string;
}

interface SessionContextType {
  sessions: CreateSessionData[];
  currentSession: CreateSessionData | undefined;
  gameSessionId: string | null;
  API_URL: string;
  createNewSession: (data: CreateSessionData) => void;
}

const API_URL = 'https://1jz615yn7a.execute-api.us-east-1.amazonaws.com';
export const GameSessionContext = createContext({} as SessionContextType)

interface SessionContextProviderProps {
  children: ReactNode
}

export const SessionContextProvider: React.FC<SessionContextProviderProps> = ({ children }) => {
  const [sessions, setSessions] = useState<CreateSessionData[]>([]);
  const [gameSessionId, setGameSessionsId] = useState<string | null>(null);

  useEffect(() => {
    const fetchSessions = async () => {
      try {
        const response = await axios.get(`${API_URL}/sessions`);
        setSessions(response.data);
      } catch (error) {
        console.error("Error fetching sessions", error);
      }
    };

    fetchSessions();
  }, []);

  
  const createNewSession = async (data: CreateSessionData) => {
    try {
      await axios.post(`${API_URL}/sessions`, data);

      const response = await axios.get(`${API_URL}/sessions`);
      setSessions(response.data);
    } catch (error) {
      console.error('Error creating session', error);
    }
    setGameSessionsId(data.id);

  }

  const currentSession = sessions.find((gameSession) => gameSession.id === gameSessionId)

  console.log(currentSession)

  return (
    <GameSessionContext.Provider value={{createNewSession, sessions, currentSession, gameSessionId, API_URL}}>
      {children}
    </GameSessionContext.Provider>
  )
} 
