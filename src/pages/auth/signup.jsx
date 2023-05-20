import React, {useRef} from 'react';
import Head from 'next/head'
import 'animate.css/animate.min.css'
import Link from "next/link";
import Image from "next/image";
import PB from '/src/utils/pb';
import {useRouter} from "next/router";
import {ExclamationTriangleIcon} from "@heroicons/react/20/solid";

export default function SignIn() {

    const [username, setUsername] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [passwordConfirm, setPasswordConfirm] = React.useState("");

    const [error, setError] = React.useState(null);

    const router = useRouter();

    async function handleSubmit(event) {
        event.preventDefault();

        const pb = PB.get();


        try {

            const data = {
                "username": "test_username",
                "email": email,
                "emailVisibility": false,
                "password": password,
                "passwordConfirm": passwordConfirm,
                "name": ""
            };


            const record = await pb.collection('users').create(data);

            // (optional) send an email verification request
            await pb.collection('users').requestVerification(email);


            // after the above you can also access the auth data from the authStore
            console.log(pb.authStore.isValid);
            console.log(pb.authStore.token);
            console.log(pb.authStore.model.id);

            router.push('/app');


        } catch (e) {
            // handle errors


            setError(e.data);

            console.log(e.data);
        }

    }


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


            <main className="gradient-background   flex flex-col">


                <div
                    className={" rounded-md mt-8 bg-yellow-50 p-4 mb-32"}>
                    <div className="flex">
                        <div className="flex-shrink-0">
                            <ExclamationTriangleIcon className="h-5 w-5 text-yellow-400"
                                                     aria-hidden="true"/>
                        </div>
                        <div className="ml-3">
                            <h3 className="text-sm font-medium text-yellow-800">ATTENTION</h3>
                            <div className="mt-2 text-sm text-yellow-700">
                                <p>
                                    Le site n'est pas terminé, il est en cours de développement.
                                </p>
                                <p>
                                    Toutes les fonctionnalités ne sont pas encore disponibles.
                                </p>
                                <p>
                                    Merci de votre compréhension.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <form className="form"

                      onSubmit={handleSubmit}
                >
                    <div className="title">Bienvenue,<br/><span>Inscris-toi, c'est gratuit</span></div>

                    <input type="text" placeholder="Username" name="username"
                           onChange={(e) => setUsername(e.target.value)}
                    />

                    {error && error.data && error.data.username &&
                        <div className="error">{error.data.username.message}</div>
                    }

                    <input type="email" placeholder="Email" name="email"
                           onChange={(e) => setEmail(e.target.value)}
                    />

                    {error && error.data && error.data.email &&
                        <div className="error">{error.data.email.message}</div>
                    }

                    <input type="password" placeholder="Password" name="password"
                           onChange={(e) => setPassword(e.target.value)}
                    />

                    {error && error.data && error.data.password &&
                        <div className="error">{error.data.password.message}</div>
                    }


                    <input type="password" placeholder="Confirm Password" name="passwordconfirm"
                           onChange={(e) => setPasswordConfirm(e.target.value)}
                    />

                    {error && error.data && error.data.passwordConfirm &&
                        <div className="error">{error.data.passwordConfirm.message}</div>
                    }


                    {/*     GOOGLE ET FACEBOOK      */}

                    {/*< div className="login-with flex justify-center items-center w-full">*/}
                    {/*    <div className="button-log">*/}
                    {/*        <svg className="icon" height="56.6934px" id="Layer_1"*/}
                    {/*             version="1.1"*/}
                    {/*             viewBox="0 0 56.6934 56.6934" width="56.6934px"*/}
                    {/*             xmlns="http://www.w3.org/2000/svg">*/}
                    {/*            <path*/}
                    {/*                d="M51.981,24.4812c-7.7173-0.0038-15.4346-0.0019-23.1518-0.001c0.001,3.2009-0.0038,6.4018,0.0019,9.6017  c4.4693-0.001,8.9386-0.0019,13.407,0c-0.5179,3.0673-2.3408,5.8723-4.9258,7.5991c-1.625,1.0926-3.492,1.8018-5.4168,2.139  c-1.9372,0.3306-3.9389,0.3729-5.8713-0.0183c-1.9651-0.3921-3.8409-1.2108-5.4773-2.3649  c-2.6166-1.8383-4.6135-4.5279-5.6388-7.5549c-1.0484-3.0788-1.0561-6.5046,0.0048-9.5805  c0.7361-2.1679,1.9613-4.1705,3.5708-5.8002c1.9853-2.0324,4.5664-3.4853,7.3473-4.0811c2.3812-0.5083,4.8921-0.4113,7.2234,0.294  c1.9815,0.6016,3.8082,1.6874,5.3044,3.1163c1.5125-1.5039,3.0173-3.0164,4.527-4.5231c0.7918-0.811,1.624-1.5865,2.3908-2.4196  c-2.2928-2.1218-4.9805-3.8274-7.9172-4.9056C32.0723,4.0363,26.1097,3.995,20.7871,5.8372  C14.7889,7.8907,9.6815,12.3763,6.8497,18.0459c-0.9859,1.9536-1.7057,4.0388-2.1381,6.1836  C3.6238,29.5732,4.382,35.2707,6.8468,40.1378c1.6019,3.1768,3.8985,6.001,6.6843,8.215c2.6282,2.0958,5.6916,3.6439,8.9396,4.5078  c4.0984,1.0993,8.461,1.0743,12.5864,0.1355c3.7284-0.8581,7.256-2.6397,10.0725-5.24c2.977-2.7358,5.1006-6.3403,6.2249-10.2138  C52.5807,33.3171,52.7498,28.8064,51.981,24.4812z"></path>*/}
                    {/*        </svg>*/}
                    {/*    </div>*/}
                    {/*    <div className="button-log">*/}
                    {/*        <svg xmlns="http://www.w3.org/2000/svg"*/}
                    {/*             width="56.693px" viewBox="0 0 56.693 56.693" version="1.1"*/}
                    {/*             id="Layer_1" height="56.693px" className="icon">*/}
                    {/*            <path*/}
                    {/*                d="M40.43,21.739h-7.645v-5.014c0-1.883,1.248-2.322,2.127-2.322c0.877,0,5.395,0,5.395,0V6.125l-7.43-0.029  c-8.248,0-10.125,6.174-10.125,10.125v5.518h-4.77v8.53h4.77c0,10.947,0,24.137,0,24.137h10.033c0,0,0-13.32,0-24.137h6.77  L40.43,21.739z"/>*/}
                    {/*        </svg>*/}
                    {/*    </div>*/}
                    {/*</div>*/}


                    {
                        error &&
                        <div className="text-red text-center text-sm font-bold mt-2">
                            {error.message}
                        </div>
                    }

                    <button className="button-confirm">S'inscrire →</button>

                </form>
            </main>


        </div>
    )
}

