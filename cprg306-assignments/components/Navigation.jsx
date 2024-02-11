import Link from "next/link"

const Navigation = () => {
    return(
        <div className="grid grid-rows-2">
            <Link href="./week-2" className="hover:text-green-500  hover:underline">Week 2 Assignment</Link>
            <Link href="./week-3" className="hover:text-green-500  hover:underline">Week 3 Assignment</Link>
            <Link href="./week-4" className="hover:text-green-500  hover:underline">Week 4 Assignment</Link>
        </div>
    )
}

export default Navigation