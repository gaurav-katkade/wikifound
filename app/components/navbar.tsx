import Link from "next/link"
import Search from "./search"
export default function Navbar(){
    return<header  className="container bg-red-400 p-1">
        <nav className="flex flex-col  justify-center md:justify-between p-1  md:flex-row items-center text-xl">
            <Link href="/">WikiFound!</Link>
            <Search></Search>
        </nav>
    </header>
} 