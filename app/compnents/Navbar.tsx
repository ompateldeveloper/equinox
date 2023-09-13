import Link from "next/link";


export default function Navbar() {
  return (
    <nav>
        <div className="p-2 flex place-items-center ">
            <Link href={'/'}>
                <div className="logo text-white p-8 font-bold text-xl">
                    <span className= "text-teal-500">EQ</span>
                    uinox
                </div>
            </Link>
            
            <div className="ml-auto flex justify-between">
              <div className="grid">
                  <div className="text-gray-300">Logged in as <span className="text-teal-500">{"ompateldeveloper"}</span></div>
                  <Link href={"logout"} className="logout-btn text-gray-500 block ml-auto">Logout</Link>
              </div>
              {/* <>
              <Link href={"/login"}><div className="login-btn h-10 m-1 align-middle px-4 py-2 rounded-lg text-white hover:text-teal-400 ease-in-out duration-300"><span className="opacity-90 ">Login</span></div></Link>
              <Link href={"/signup"}><div className="signup-btn h-10 m-1 align-middle px-4 py-2 rounded-lg text-white hover:text-teal-400 ease-in-out duration-300"><span className="opacity-90">Sign Up</span></div></Link>
              </> */}
            </div>
        </div>
    </nav>
  )
}
