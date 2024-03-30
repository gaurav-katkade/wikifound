import Link from "next/link"

type props={
    result:Result
}

export default function Item({result}:props){
    const itemTextCol =<div>
        <Link href={`https://en.wikipedia.org/?curid=${result.pageid}`}>
        <h2 className="m-1 mb-4 text-center">
            
            {result.title}
            
        </h2>
        <p>{result.extract}</p>
        </Link>
    </div>

    const content = <div className="justify-self-center p-2 m-4 bg-red-200 w-60 shadow-sm bg-opacity-15 shadow-white rounded">
        <div className=" bg-black bg-opacity-5 ">
        {
            result?.thumbnail?.source ?
            <img className="object-contain h-52 w-full object-center bg-red-400 border-2"src={result.thumbnail.source} alt={result.title}
            ></img> :<img className="object-contain h-52 w-full" src="icon-image-not-found-free-vector.jpg"></img>
        }
        </div>
        {itemTextCol}
    </div>

    return content;
}