import Link from "next/link"

const NotFound = () => {
    return (<div>
        <h1>Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <p>Please check the URL and try again.</p>
        <Link href="/">Home</Link>
        </div>)
}

export default NotFound