
import Link from "next/link";
import Image from "next/image";


const Header = () => {
    return (
        <header className='flex justify-between px-10 shadow-lg py-7 '>
            <div className=''>
                <Link href="/">
                    <Image src="/next.svg" alt="my logo image" width={150} height={40} />
                </Link>

            </div>
            <div className="flex">
                <Link href="/about" className="mr-3">about</Link>
                <Link href="/contact" className="mr-3">contact</Link>
                <Link href="/movie" className="mr-3">movie</Link>
          
            </div>
        </header>
    );
};

export default Header;