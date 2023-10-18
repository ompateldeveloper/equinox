import Navbar from "../compnents/Navbar";

export default function AuthLayout({children}:{children:React.ReactNode}) {
  return (
    <div>
        <Navbar/>
        {children}
    </div>
  )
}
