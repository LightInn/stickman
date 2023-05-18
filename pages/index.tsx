import React, {useEffect, useRef} from 'react';
import Head from 'next/head'
import 'animate.css/animate.min.css'
import Particles from 'react-tsparticles';
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    const imageRef = useRef<HTMLImageElement>(null);

    return (
        <div className="text-Sky-50 snap-y snap-proximity bg-slate-1000 font-varela-round">
            <Head>
                <title>Stickman</title>
                <meta
                    name="description"
                    content="When the mountain cry, the flowers grow"
                />

                <link rel="preconnect" href="https://fonts.googleapis.com"/>

                {/*@ts-ignore*/}
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link
                    href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <main className="gradient-background">


                <div className="glitch-image"></div>
                <div className="glitch-image"></div>
                <div className="glitch-image"></div>
                <div className="glitch-image"></div>
                <div className="glitch-image"></div>
                <div className="glitch-image"></div>


                <Link href={"/stickmen"} className="text-5xl text-center left-[500px] text-Sky-50 cursor-pointer z-50">I
                    love stickman</Link>


                {/*<div className="stickman-container">*/}
                {/*    <Image*/}
                {/*        ref={imageRef}*/}
                {/*        src="/PP.png"*/}
                {/*        width={1000}*/}
                {/*        height={1000}*/}
                {/*        alt="Still thinking"*/}
                {/*    />*/}
                {/*</div>*/}
            </main>
        </div>
    )
}
