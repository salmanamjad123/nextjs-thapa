import React from 'react';
import MovieCard from "@/app/components/MovieCard";


const Movie = async () => {

    await new Promise(resolve => setTimeout(resolve, 2000));


    const url = process.env.RAPID_KEY;

    const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'a20cc4ea7amsh7e5412324d5ba89p130580jsn759490830f5d',
          'X-RapidAPI-Host': 'netflix54.p.rapidapi.com',
        }
    };

    const res = await fetch(url, options);
    const data = await res.json();
    const main_data = data.titles;
    console.log(main_data,"main")

    return (
        <>
            <section >
                <div className='mx-5'>
                    <h1 className="text-center my-10">Series & Movie</h1>
                    <div className="grid grid-cols-4 gap-6">
                  
                        {
                            main_data.map((curElem) => {
                                return <MovieCard key={curElem.id} {...curElem} />
                            })
                        }
                  
                    </div>
                  
                </div>
            </section>
        </>
    );
};

export default Movie;