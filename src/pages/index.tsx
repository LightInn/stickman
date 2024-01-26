import React, {useEffect, useRef} from 'react';
import Head from 'next/head'
import 'animate.css/animate.min.css'
import Image from "next/image";
import PB from "../utils/pb";
import {router} from "next/client";
import {useRouter} from "next/router";


export default function Home() {


    const [message, setMessage] = React.useState('');
    const pb = PB.get();

    const router = useRouter();

    useEffect(() => {
        loadStickmen();
    }, []);


    async function loadStickmen() {


        try {


            // you can also fetch all records at once via getFullList
            const records = await pb.collection('message').getFullList({
                sort: '-created',
            });


            console.log(records);
            setMessage(records[0].message);

        } catch (e) {
            // handle errors
            console.log(e);
        }

    }


    async function handleSubmit(event: any) {
        event.preventDefault();


        try {

            // example create data
            const data = {
                "message": event.target.message.value,
            };

            const record = await pb.collection('message').create(data);

            router.push('/thank');


        } catch (e) {
            // handle errors

            console.log(e);
        }

    }


    return (
        <div className="text-Sky-50 snap-y snap-proximity bg-slate-1000 font-varela-round">
            <Head>
                <title>Inscription</title>
                <meta
                    name="Stickman.fr"
                    content="Ecris un message pour la prochaine personne qui viendra sur le site"
                />

                <link rel="preconnect" href="https://fonts.googleapis.com"/>

                {/*@ts-ignore*/}
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link
                    href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap"
                    rel="stylesheet"
                />
            </Head>


            <main className="bg-white">

                <h1>
                    Stickman . FR
                </h1>


                <div className="flex w-full ">

                    <Image
                        src="/stickman.png"
                        alt="Picture of the author"
                        width={500}
                        height={500}
                    />


                    <div className="readzone border-2 border-black w-1/2 ">
                        <h2>
                            Message de la personne précédente :
                        </h2>
                        <p className="p-8 text-blue-900">
                            {message}
                        </p>
                    </div>
                </div>


                <div className="h-[50px]"></div>

                {/*     text aera */}
                <form className="flex flex-col items-center justify-center" onSubmit={handleSubmit}>
                    <label htmlFor="message" className="text-3xl font-bold text-center">
                        Laisse un message pour la prochaine personne
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows={10}
                        cols={50}
                        className="border-2 border-black rounded-lg p-2 m-2"
                    />
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
                    >
                        Envoyer
                    </button>
                </form>
            </main>
        </div>
    )
}
