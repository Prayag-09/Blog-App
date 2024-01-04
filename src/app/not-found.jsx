import Link from "next/link";
const notFound = () => {
    return (
    <div>
        <h2>Not Found</h2>
        <Link href={"/"}> Return Home</Link>
    </div>
    )
}
export default notFound;