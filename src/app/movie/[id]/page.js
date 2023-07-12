import React from 'react';
import Image from "next/image";

const Page = async ({params}) => {
    const id = params.id;

    const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;

    const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'a20cc4ea7amsh7e5412324d5ba89p130580jsn759490830f5d',
          'X-RapidAPI-Host': 'netflix54.p.rapidapi.com',
        }
    };

    const res = await fetch(url, options);
    const data = await res.json();
    const main_data = data[0].details;

    return (

            <div >
                <h2 >   Netflix \ <span> {main_data.type} </span> </h2>
                <div >
                    <div>
                        <Image src={main_data.backgroundImage.url} alt={main_data.title} width={600} height={300} />
                    </div>
                    <div>
                        <h1>{main_data.title}</h1>
                        <p>{main_data.synopsis}</p>
                    </div>
                </div>
            </div>

    );
};

export default Page;