// 404.js
import Link from 'next/link'
import React from 'react';
import Head from 'next/head'
import 'animate.css/animate.min.css'
import {Navbar} from "../components/navbar";
import Image from "next/image";


export default function FourOhFour() {
    return <>


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


        <main className="gradient-background flex flex-col ">


            <h1
                className="text-5xl text-center left-[500px] text-Sky-50"
            >Cette page n'existe pas encore... Oops 😂</h1>

            <div className="glitch-image"></div>
            <div className="glitch-image"></div>
            <div className="glitch-image"></div>
            <div className="glitch-image"></div>
            <div className="glitch-image"></div>
            <div className="glitch-image"></div>

            <br/>
            <br/>


            <Link href={"/app"} className="text-5xl text-center left-[500px] text-Sky-50 cursor-pointer">retourner au
                menu</Link>
        </main>


    </>
}

