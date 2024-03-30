"use client"
import { useState } from "react"
import { useRouter } from "next/navigation";
export default function Search(){
    const [search,setSearch] = useState('');
    const router = useRouter()
    const handleSearch=(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        setSearch('');
        router.push(`/${search}/`)
    }
    return<form onSubmit={handleSearch}>
        <input className="placeholder-grey-600 text-gray-800 rounded"
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
        ></input>
        <button type="submit">🚀</button>
    </form>
}