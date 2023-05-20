import React, {useEffect, useRef} from 'react';
import Head from 'next/head'
import 'animate.css/animate.min.css'
import Link from "next/link";
import Image from "next/image";
import PB from '/src/utils/pb';
import {useRouter} from "next/router";
import {Navbar} from "../../components/navbar";

export default function App() {

    const pb = PB.get();

    const [stickmen, setStickmen] = React.useState(null);
    const [error, setError] = React.useState(null);


    useEffect(() => {
        loadStickmen();
    }, []);


    async function loadStickmen() {


        try {
            const resultList = await pb.collection('stickmen').getList(1, 50,
                {'$autoCancel': false}
            );


            setStickmen(resultList);

        } catch (e) {
            // handle errors

            console.log();

            setError(e.message);
        }

    }


    return (
        <div className="text-Sky-50 snap-y snap-proximity bg-slate-1000 font-varela-round">
            <Head>
                <title>Classement des stickmen</title>
                <meta
                    name="description"
                    content="Inscription à stickman.fr. Créer un compte pour accéder à l'application. partagez vos stickman avec la communauté"
                />


                <link rel="preconnect" href="https://fonts.googleapis.com"/>

                {/*@ts-ignore*/}
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link
                    href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <Navbar/>

            <main className="gradient-background   flex flex-col">


                {
                    error && <div className="text-red-500">{error}</div>
                }

                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-4xl font-bold text-center text-Sky-50">Classement des stickmen</h1>
                    <p className="text-center text-Sky-50">Les meilleurs stickmen de la communauté</p>
                </div>

                <div className="flex flex-col items-center justify-center">
                    {
                        stickmen &&
                        stickmen.items.map((stickman, index) => {

                            return (
                                <div key={index} className="flex flex-col items-center justify-center">
                                    <div className="flex flex-col items-center justify-center">

                                        <Image

                                            src={pb.files.getUrl(stickman, stickman.avatar)}
                                            alt="stickman"
                                            width={200}
                                            height={200}
                                            className="rounded-full"


                                        />


                                        test
                                    </div>
                                </div>
                            )
                        })


                    }
                </div>


            </main>


        </div>
    )
}

