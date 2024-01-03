import Link from "next/link";

const links = () => {

    const linkList = [
        {
            title : 'Home',
            path  : '/home'
        },
        {
            title : 'About',
            path  : '/about'
        },
        {
            title : 'Contact',
            path  : '/contact'
        },
        {
            title : 'Blogs',
            path  : '/blog'
        },
        {
            title : 'Admin',
            path  : '/admin'
        },
    ]

    return (
        <div>
            {linkList.map((link) => (
                <Link key={link.title} href={link.path}> {link.title}</Link>
            ))}
        </div>
    )
}
export default links;