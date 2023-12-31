"use client";
import Link from "next/link";
import { useAuthContext } from "../hooks/useAuthContext";
import { useGlobalContext } from "../hooks/useGlobalContext";


export default function Navbar() {
  const {user,dispatch} = useAuthContext()
  const {navCollapse,setNavCollapse} = useGlobalContext()

  const handleLogout = ()=>{
        // remove user from storage
        localStorage.removeItem('user')

        // dispatch logout action
        dispatch({ type: 'LOGOUT' })
  }
  
  return (
    <nav>
        {!navCollapse && <div className=" p-2 flex place-items-center transition h-20 " >
            <Link href={'/'} className="p-8 select-none">
                <div className="logo text-white font-bold text-xl">
                    Hibi
                    <span className= "text-transparent bg-clip-text bg-gradient-to-br from-teal-500  to-violet-600 ">EQ</span>
                </div>
                <div className="tagline text-xs  text-zinc-100">Let it Resonate</div>
            </Link>
            
            <div className="ml-auto flex justify-between">
             { user? (<div className="grid mr-4">
                  <div className="text-gray-300">🎧 / <span className="text-teal-500">{user.name}</span></div>
                  <div onClick={handleLogout} className="logout-btn cursor-pointer  text-gray-500 block ml-auto">Logout</div>
              </div>):
              (<>
              <Link href={"/login"}><div className="login-btn h-10 m-1 align-middle px-4 py-2 rounded-lg text-white hover:text-teal-400 ease-in-out duration-300"><span className="opacity-90 ">Login</span></div></Link>
              <Link href={"/signup"}><div className="signup-btn h-10 m-1 align-middle px-4 py-2 rounded-lg text-white hover:text-teal-400 ease-in-out duration-300"><span className="opacity-90">Sign Up</span></div></Link>
              </>)}
            </div>
        </div>}
    </nav>
  )
}
