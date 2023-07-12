
import Image from "next/image";
import Link from "next/link";
const MovieCard = (curElem) => {

    const {id, type, title, synopsis} = curElem.jawSummary;

    return (
        <>
            <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)]" >
                <p>{type}</p>
                <div >
                    <Image src={curElem.jawSummary.backgroundImage.url} alt={title} width={260} height={200} />
                </div>
                <div >
                    <h2>{title.substring(0,18)}</h2>
                    <p>
                        {`${synopsis.substring(0,66)} ...`}
                    </p>

                    <Link href={`/movie/${id}`}>
                        <button className="bg-black text-white px-5 py-2 rounded"> 
                            Read More
                        </button>
                    </Link>
                </div>
            </div>

        </>
    );
};

export default MovieCard;