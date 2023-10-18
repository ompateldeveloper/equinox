"use client";
import Link from "next/link";
import { useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useRouter } from "next/navigation";

export default function Login() {
  const [details,setDetails] = useState({email:"ompatel.developer@gmail.com",password:"ASDfgh123!"})
  const [err,setErr] =useState("")
  const [isLoading, setIsLoading] = useState(false)
  const {dispatch} = useAuthContext()
  
  const router = useRouter();
  
  
  async function handleSubmit(e:React.SyntheticEvent<HTMLFormElement>){
        e.preventDefault()
        let {email,password} = details
        setIsLoading(true)
        setErr("")
    
        const response = await fetch('http://localhost:4000/api/user/login', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({ email, password })
        })
        const json = await response.json()
    
        if (!response.ok) {
          setIsLoading(false)
          setErr(json.err)
        }
        if (response.ok) {
          localStorage.setItem('user', JSON.stringify(json))
          dispatch({type: 'LOGIN', payload: json})    
          setIsLoading(false)
          router.push("/discover")
        }
    }

  
  return (
    <div className="login flex justify-center place-items-center flex-col" >
        <form className=" rounded-2xl border-2 border-teal-900 px-8  py-12" onSubmit={handleSubmit} >
          <div className="title m-2 text-xl text-white">Login</div>
            <div className="email relative pt-6 m-3">
                <input type="text" name="email" id="email" className=" w-64 peer/email bg-transparent border-0 border-b-2 border-b-gray-500 focus:border-b-teal-500 outline-none text-white transition duration-300 " onChange={(e)=>{setDetails(prev=>({...prev,email:e.target.value}))}} value={details.email} />
                <label htmlFor="email" className={" peer-focus/email:text-teal-500 text-gray-500 absolute left-0  peer-focus/email:text-xs peer-focus/email:-translate-y-5 transition-all duration-300 select-none"+ (details?.email?.length ? " text-xs -translate-y-5 ":" translate-y-0")}>Email</label>
            </div> 
            <div className="password relative pt-6 m-3 mt-6">
                <input type="text" name="password" id="password" className=" w-64 peer/password bg-transparent border-0 border-b-2 border-b-gray-500 focus:border-b-teal-500 outline-none text-white transition duration-300" onChange={(e)=>{setDetails(prev=>({...prev,password:e.target.value}))}} value={details.password}/>
                <label htmlFor="password" className={" peer-focus/password:text-teal-500 text-gray-500 absolute left-0  peer-focus/password:text-xs peer-focus/password:-translate-y-5 transition-all duration-300 select-none"+ (details?.password?.length ? " text-xs -translate-y-5 ":" translate-y-0")}>Password</label>
            </div> 
            <div className="error text-red-500 text-sm m-3 ">{err}</div>
            <button disabled={isLoading}  className=" self-start py-2 px-6 rounded-full m-2 mt-8 bg-teal-500" >
              Login
            </button>
            <div className="not-user text-gray-300 m-3 text-sm">
              Not User? &nbsp;
              <Link href={'/signup'} className="text-teal-500" >Sign Up</Link>
            </div>
        </form>
    </div>
  )
}
