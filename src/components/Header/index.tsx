import { NavLink } from 'react-router-dom'
import gameIcon from '../../assets/GameController.png'
import history from '../../assets/historyIcon.png'

export function Header(){
  return (
    <header className="w-full h-14 flex justify-between px-28 items-center bg-[--gray-800]">
      <h1 className="text-3xl items-center font-bold drop-shadow-[5px_10px_5px_rgba(0,0,0,50)]">Full-Stack Challenge</h1>
      <nav className="flex items-center gap-16">
        <NavLink to="/" className="border-t-2 border-b-4 border-transparent p-2 hover:border-b-[--green-500] [&.active]:border-b-[--green-500]">
          <img 
            src={gameIcon}
            width={35} 
            alt="" 
          />
        </NavLink>
        <NavLink to="/history" className="border-t-2 border-b-4 border-transparent hover:border-b-[--green-500] [&.active]:border-b-[--green-500]">
          <img 
            src={history}
            width={50} 
            alt="" 
          />
        </NavLink>
      </nav>
    </header>
  )
}