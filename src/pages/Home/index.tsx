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
  const { createNewSession } = useContext(GameSessionContext)

  const newGameSessionForm = useForm<CreateSessionData>({
    resolver: zodResolver(newFormGameSessionValidationSchema),
    defaultValues: {
      hostname: '',
      players: 0,
      gamemap: 'Choose the map',
      gamemode: 'Choose mode',
    },
  })

  const { handleSubmit, watch, reset } = newGameSessionForm

  const hostnameWatch = watch('hostname')
  const isSubmitDisabled = !hostnameWatch

  function handleCreateNewGameSession(data: CreateSessionData){
    createNewSession(data)
    reset()
  }

  return (
    <form className="flex flex-col justify-center m-auto">
      <FormProvider {...newGameSessionForm}>
        <NewSessionForm/>
      </FormProvider>
      <button onSubmit={handleSubmit(handleCreateNewGameSession)} disabled={isSubmitDisabled} className="w-[610px] min-w-96 m-auto bg-[--green-600] text-white rounded-2xl py-3 shadow-shape :hover">
        Create new game session
      </button>
    </form>
  )
}
