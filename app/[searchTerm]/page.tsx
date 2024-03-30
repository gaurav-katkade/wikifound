import { Metadata } from "next"
import getAllResults from "@/lib/getAllResults"
import Item from "./components/Item"
type props={
    params:{searchTerm:string}
}
export const metadata:Metadata ={
    title:"information",
    description:""
}
export default async function searchResults({params :{searchTerm}}:props){
    const wikiData:Promise<SearchResult> = getAllResults(searchTerm);
    const data = await wikiData;
    const results: Result[] | undefined = data?.query?.pages
    const content = <main className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
       {results?
        Object.values(results).map((ele)=>{
            return <Item key={ele.pageid} result={ele}></Item>
        })
        :<p className="mt-24 col-span-4 text-center">Result Not Found !!</p>
       }
    </main>
    return content;

}