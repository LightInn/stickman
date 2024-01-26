import React, {useEffect, useRef} from 'react';
import Head from 'next/head'
import 'animate.css/animate.min.css'
import Image from "next/image";
import PB from "../utils/pb";


export default function Thank() {


    return (
        <div className="text-Sky-50 snap-y snap-proximity bg-slate-1000 font-varela-round h-[100vh]">


            <main className="bg-white w-full h-full flex flex-col justify-center items-center align-middle">

                <h2>
                    MERCI !
                </h2>

                <p>
                    Reviens plus tard pour voir la reponse de la communaute
                </p>
            </main>
        </div>
    )
}
