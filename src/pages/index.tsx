import React, {useRef} from 'react';
import Head from 'next/head'
import 'animate.css/animate.min.css'
import Link from "next/link";
import {Navbar} from "../components/navbar";
import Image from "next/image";

export default function Home() {
    const imageRef = useRef<HTMLImageElement>(null);

    return (
        <div className="text-Sky-50 snap-y snap-proximity bg-slate-1000 font-varela-round">
            <Head>
                <title>Inscription</title>
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

                <h1
                    className="text-5xl text-center left-[500px] text-Sky-50">
                    Best stickman of the day
                </h1>


                <Image
                    src="/PP.png"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                />


                {/*<div className="glitch-image"></div>*/}
                {/*<div className="glitch-image"></div>*/}
                {/*<div className="glitch-image"></div>*/}
                {/*<div className="glitch-image"></div>*/}
                {/*<div className="glitch-image"></div>*/}
                {/*<div className="glitch-image"></div>*/}


                <Link href={"/stickmen"} className="text-5xl text-center left-[500px] text-Sky-50 cursor-pointer">I
                    love stickman</Link>
            </main>


            <section>


            </section>


        </div>
    )
}
