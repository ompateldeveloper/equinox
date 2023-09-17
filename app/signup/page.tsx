"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useRouter } from "next/navigation";

export default function Signup() {
    const [details,setDetails] =useState({name:"",email:"",password:""})
    const [isLoading, setIsLoading] = useState(false)
    const {dispatch} = useAuthContext()
    const [err,setErr] =useState("")
    const router = useRouter();



    async function handleSubmit(e:React.SyntheticEvent<HTMLFormElement>){
        e.preventDefault()
        let {name,email,password} = details
            setIsLoading(true)
            setErr("")
        
            const response = await fetch('http://localhost:4000/api/user/signup', {
              method: 'POST',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({name, email, password })
            })
            const json = await response.json()
        
            if (!response.ok) {
              setIsLoading(false)
              setErr(json.err)
            }
            if (response.ok) {
              // save the user to local storage
              localStorage.setItem('user', JSON.stringify(json))
        
              // update the auth context
              dispatch({type: 'LOGIN', payload: json})
              router.push("/discover")
    
              // update loading state
              setIsLoading(false)
            } 
    }



    return (
      <div className="login flex justify-center place-items-center h-64 flex-col">
          <form className=" rounded-2xl border-2 border-teal-900 px-8 mt-32 py-12" onSubmit={handleSubmit}  >
              <div className="title m-2 text-xl text-white">Sign Up</div>
              <div className="name relative pt-6 m-3">
                  <input type="text" name="name" id="name" className=" w-64 peer/name bg-transparent border-0 border-b-2 border-b-gray-500 focus:border-b-teal-500 outline-none text-white transition duration-300 " onChange={(e)=>{setDetails(prev=>({...prev,name:e.target.value}))}} value={details.name}/>
                  <label htmlFor="name" className={" peer-focus/name:text-teal-500 text-gray-500 absolute left-0  peer-focus/name:text-xs peer-focus/name:-translate-y-5 transition-all duration-300 select-none peer-"+(details?.name?.length ? " text-xs -translate-y-5 te ":"translate-y-0")}>Name</label>
              </div> 
              <div className="email relative pt-6 m-3">
                  <input type="email" name="email" id="email" className=" w-64 peer/email bg-transparent border-0 border-b-2 border-b-gray-500 focus:border-b-teal-500 outline-none text-white transition duration-300 " onChange={(e)=>{setDetails(prev=>({...prev,email:e.target.value}))}} value={details.email}/>
                  <label htmlFor="email" className={" peer-focus/email:text-teal-500 text-gray-500 absolute left-0  peer-focus/email:text-xs peer-focus/email:-translate-y-5 transition-all duration-300 select-none peer-"+(details?.email?.length ? " text-xs -translate-y-5 te ":"translate-y-0")}>Email</label>
              </div> 
              <div className="password relative pt-6 m-3 mt-6">
                  <input type="password" name="password" id="password" className=" w-64 peer/password bg-transparent border-0 border-b-2 border-b-gray-500 focus:border-b-teal-500 outline-none text-white transition duration-300" onChange={(e)=>{setDetails(prev=>({...prev,password:e.target.value}))}} value={details.password}/>
                  <label htmlFor="password" className={"peer-focus/password:text-teal-500 text-gray-500 absolute left-0  peer-focus/password:text-xs peer-focus/password:-translate-y-5 transition-all duration-300 select-none"+ (details?.password?.length ? " text-xs -translate-y-5 ":"translate-y-0")}>Password</label>
              </div> 
              <div className="error text-red-500 text-sm m-3 ">{err}</div>
              <button disabled={isLoading} className="self-start py-2 px-6 rounded-full m-2 mt-8 bg-teal-500" type="submit">
                  Register
              </button>
              <div className="not-user text-gray-300 m-3 text-sm">
                  Already a user? &nbsp;
                  <Link href={'/login'} className="text-teal-500 " >Login</Link>
              </div>
          </form>
      </div>
    )
}
