import Link from "next/link"

const Navigation = () => {
    return(
        <div className="grid grid-rows-2">
            <Link href="./week-2" className="hover:text-green-500  hover:underline">Week 2 Assignment</Link>
            <Link href="./week-3" className="hover:text-green-500  hover:underline">Week 3 Assignment</Link>
            <Link href="./week-4" className="hover:text-green-500  hover:underline">Week 4 Assignment</Link>
            <Link href="./week-5" className="hover:text-green-500  hover:underline">Week 5 Assignment</Link>
            <Link href="./week-6" className="hover:text-green-500  hover:underline">Week 6 Assignment</Link>
            <Link href="./week-7" className="hover:text-green-500  hover:underline">Week 7 Assignment</Link>
            <Link href="./week-8" className="hover:text-green-500  hover:underline">Week 8 Assignment</Link>
            <Link href="./week-10" className="hover:text-green-500  hover:underline">Week 10 Assignment</Link>
        </div>
    )
}

export default Navigation