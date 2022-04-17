import Link from "next/link"

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <h1 >SofiCode</h1>
            </div>
                <Link href="/"><a>HOME</a></Link>
                <Link href="/about"><a>ABOUT</a></Link>
                <Link href="/soficodes"><a>Soficode Listing</a></Link>
        </nav>
    )
}

export default Navbar
