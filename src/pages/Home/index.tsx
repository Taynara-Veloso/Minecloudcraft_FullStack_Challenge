import * as zod from 'zod'
import { useContext } from 'react';
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from "react-hook-form";
import { GameSessionContext } from '../../contexts/SessionContext';
import { NewSessionForm } from './components/NewSessionForm';

const newFormGameSessionValidationSchema = zod.object({
  hostname: zod.string().min(1, 'enter hostname'),
  players: zod
    .number()
    .min(1, 'The session must have at least 1 player')
    .max(4, 'The session must have a maximum of 4 players'),
  gamemap: zod.string().max(1, 'Select an option'),
  gamemode: zod.string().max(1, 'Select an option'),
})

type CreateSessionData = zod.infer<typeof newFormGameSessionValidationSchema>

export function Home(){
  const { createNewSession } = useContext(GameSessionContext);

  const newGameSessionForm = useForm<CreateSessionData>({
    resolver: zodResolver(newFormGameSessionValidationSchema),
    defaultValues: {
      hostname: '',
      players: 1,
      gamemap: '',
      gamemode: '',
    },
  });

  const { handleSubmit, reset } = newGameSessionForm;

  function handleCreateNewGameSession(data: CreateSessionData){
    console.log('formData', data)
    createNewSession(data)
    reset()
  }

  return (
    <form className="flex flex-col justify-center m-auto" onSubmit={handleSubmit(handleCreateNewGameSession)}>
      <FormProvider {...newGameSessionForm}>
        <NewSessionForm/>
      </FormProvider>
      <button 
        type="submit" 
        className="w-[610px] min-w-96 m-auto bg-[--green-600] text-white rounded-2xl py-3 shadow-shape :hover">
        Create new game session
      </button>
    </form>
  )
}
