import * as zod from 'zod';
import { useContext } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { GameSessionContext } from '../../contexts/SessionContext';

const newFormGameSessionValidationSchema = zod.object({
  id: zod.string(),
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

  const { register, handleSubmit, reset } = useForm<CreateSessionData>({
    resolver: zodResolver(newFormGameSessionValidationSchema),
    defaultValues: {
      hostname: '',
      players: 1,
      gamemap: '',
      gamemode: '',
    },
  });

  const handleCreateNewGameSession = async (data: CreateSessionData) => {
    try {
      console.log("Data:", data);
      await createNewSession(data)
      reset()
    }catch(error){
      console.error("Error:", error)
    }
    
  }

  const handleFormSubmitAndRedirect = async () => {
    const form = document.getElementById('formSession') as HTMLFormElement;
    
    if (form) {
      try {
        const formData = new FormData(form);
        const response = await fetch(form.action, {
          method: form.method,
          body: formData,
        });

        if (!response.ok) {
          throw new Error('Form submission failed');
        }

        window.location.href = '/history';
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(handleCreateNewGameSession)} method='post' id="formSession" action="https://1jz615yn7a.execute-api.us-east-1.amazonaws.com" className="flex flex-col justify-center m-auto">
      <div className="flex flex-col justify-center m-auto">
        <fieldset className="flex justify-center py-4 w-[680px]">
          <div className="flex flex-col justify-center w-full text-[--gray-100] space-y-3">
            <div className="flex flex-col px-10">
              <label htmlFor="hostname" className="flex justify-center text-2xl font-semibold pb-2">Host</label>
              <input form="formSession" className="h-12 rounded-xl bg-[--gray-900] text-center shadow-shape" 
                type="text" 
                id="hostname" 
                placeholder="Enter hostname"
                {...register('hostname')}/>
            </div>

            <div className="flex flex-col px-10">
              <label htmlFor="players" className="flex justify-center text-2xl font-semibold pb-2">Players</label>
              <input form="formSession" className="h-12 rounded-xl bg-[--gray-900] text-center shadow-shape" 
                type="number" 
                id="players"
                placeholder="Add number of players 1-4" 
                min={1}
                max={4}
                {...register('players', { valueAsNumber: true })}/>
            </div>

            <div className="flex flex-col px-10">
              <label htmlFor="gamemap" className="flex justify-center text-2xl font-semibold pb-2">Map</label>
              <input form="formSession" className="h-12 rounded-xl bg-[--gray-900] text-center shadow-shape"
                id="gamemap" 
                placeholder="Enter map"
                {...register('gamemap')}
              />
            </div>

            <div className="flex flex-col px-10">
              <label htmlFor="gamemode" className="flex justify-center text-2xl font-semibold pb-2">Mode</label>
              <input form="formSession" className="h-12 rounded-xl bg-[--gray-900] text-center shadow-shape"
                id="gamemode"
                placeholder="Enter mode"
                {...register('gamemode')}/>
            </div>
          </div>
        </fieldset>
      </div>
      <button
        type="submit"
        formMethod='post'
        form='formSession'
        onClick={handleSubmit(handleFormSubmitAndRedirect)}
        className="w-[610px] min-w-96 m-auto bg-[--green-600] text-white rounded-2xl py-3 shadow-shape :hover"
      >
        Create new game session
      </button>
    </form>
  )
}
