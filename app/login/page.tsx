import Link from "next/link";

export default function Login() {
  return (
    <div className="login flex justify-center place-items-center h-64 flex-col">
        <form className=" rounded-2xl border-2 border-teal-900 px-8 mt-32 py-12"  >
          <div className="title m-2 text-xl text-white">Login</div>
            <div className="email relative pt-6 m-3">
                <input type="text" name="email" id="email" className=" w-64 peer/email bg-transparent border-0 border-b-2 border-b-gray-500 focus:border-b-teal-500 outline-none text-white transition duration-300 " />
                <label htmlFor="email" className=" peer-focus/email:text-teal-500 text-gray-500 absolute left-0 translate-y-0 peer-focus/email:text-xs peer-focus/email:-translate-y-5 transition-all duration-300 select-none">Email</label>
            </div> 
            <div className="password relative pt-6 m-3 mt-6">
                <input type="text" name="password" id="password" className=" w-64 peer/password bg-transparent border-0 border-b-2 border-b-gray-500 focus:border-b-teal-500 outline-none text-white transition duration-300" />
                <label htmlFor="password" className=" peer-focus/password:text-teal-500 text-gray-500 absolute left-0 translate-y-0 peer-focus/password:text-xs peer-focus/password:-translate-y-5 transition-all duration-300 select-none">Password</label>
            </div> 
            <button className="self-start py-2 px-6 rounded-full m-2 mt-8 bg-teal-500">
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
