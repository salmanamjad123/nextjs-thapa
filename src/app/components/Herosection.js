
import Link from "next/link";
import Image from "next/image";

const Herosection = ({title,imageUrl}) => {
    return (
        <div className=" bg-1 text-white">
            <div className="grid grid-cols-2 gap-4">
                <div className="div">
                    <h1 className="my-5">{title}</h1>
                    <p> From award-winning dramas to blockbuster action movies, we&apos;ve got you covered. Browse
                        our
                        selection of the latest and greatest movies, and find your new favorite today.
                    </p>
                    <Link href="/movie">
                        <Link href="/movie">
                            <button type="button " className="bg-black my-5 px-5 py-3 rounded">
                                Explore Movies
                            </button>
                        </Link>

                    </Link>
                </div>
                <div >
                    <Image src={imageUrl} alt="watching netflix" width={500} height={500} />
                </div>
            </div>
        </div>
    )
}

export default Herosection