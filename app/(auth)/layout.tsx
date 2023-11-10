import Navbar from "./Navbar";

export default function AuthLayout({children}:{children:React.ReactNode}) {
  return (
    <div>
        <Navbar/>
        {children}
    </div>
  )
}
