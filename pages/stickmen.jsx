import React, {useEffect, useRef} from 'react';
import Head from 'next/head'
import 'animate.css/animate.min.css'
import Particles from 'react-tsparticles';
import Image from "next/image";
import Link from "next/link";
import {useState} from 'react'
import {StarIcon, XCircleIcon} from '@heroicons/react/20/solid'
import {RadioGroup} from '@headlessui/react'
import {CurrencyDollarIcon, GlobeAmericasIcon} from '@heroicons/react/24/outline'
import {ExclamationTriangleIcon} from '@heroicons/react/20/solid'

export default function Home() {
    const imageRef = useRef(null);

    const product = {


        name: 'Soldier Stickman',
        price: '95,00€',
        rating: 4.7,
        href: '#',
        images: [
            {
                id: 1,
                imageSrc: '/shop.png',
                imageAlt: "Back of women's Basic Tee in black.",
                primary: true,
            },
            {
                id: 2,
                imageSrc: '/printmaterial.png',
                imageAlt: "Side profile of women's Basic Tee in black.",
                primary: false,
            },
            {
                id: 3,
                imageSrc: '/product-shot-02.jpg',
                imageAlt: "Front of women's Basic Tee in black.",
                primary: false,
            },
        ],
        description: `
    <p>    Un cadre en aluminium léger et durable, avec le "Soldat Stickman" imprimé sur avec une encre de qualité. </p>
    <p>
    Pour decorer vos murs, ou pour offrir à vos proches, ce cadre est parfait pour vous.
    </p>
  `,
        details: [
            'Aluminium brillant',
            'Pas de cadre',
            'coleurs vives',
            'Pas de support mural fourni',
        ],
    }
    const policies = [


        {name: 'Livraison', icon: GlobeAmericasIcon, description: 'Livraison gratuite en France'},
        {name: 'Format', icon: CurrencyDollarIcon, description: "60x30 cm"},
    ]


    // const [selectedColor, setSelectedColor] = useState(product.colors[0])

    const [reviewsOpen, setReviewsOpen] = useState(false)
    const [payerOpen, setPayerOpen] = useState(false)


    // @ts-ignore
    return (
        <div className="text-Sky-50 snap-y snap-proximity bg-slate-1000 font-varela-round">
            <Head>
                <title>Stickmen</title>
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


            <div className="bg-white">
                <div className="pb-16 pt-6 sm:pb-24">
                    <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <ol role="list" className="flex items-center space-x-4">

                            <li className="text-sm">
                                <a href={product.href} aria-current="page"
                                   className="font-medium text-gray-500 hover:text-gray-600">
                                    {product.name}
                                </a>
                            </li>
                        </ol>
                    </nav>
                    <div className="mx-auto mt-8 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                        <div className="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
                            <div className="lg:col-span-5 lg:col-start-8">
                                <div className="flex justify-between">
                                    <h1 className="text-xl font-medium text-gray-900">{product.name}</h1>
                                    <p className="text-xl font-medium text-gray-900">{product.price}</p>
                                </div>
                                {/* Reviews */}
                                <div className="mt-4">
                                    <h2 className="sr-only">Reviews</h2>
                                    <div className="flex items-center">
                                        <p className="text-sm text-gray-700">
                                            {product.rating}
                                            <span className="sr-only"> out of 5 stars</span>
                                        </p>
                                        <div className="ml-1 flex items-center">
                                            {[0, 1, 2, 3, 4].map((rating) => (
                                                <StarIcon
                                                    key={rating}
                                                    className={
                                                        (product.rating > rating ? 'text-yellow-400' : 'text-gray-200') +
                                                        'h-5 w-5 flex-shrink-0'
                                                    }
                                                    aria-hidden="true"
                                                />
                                            ))}
                                        </div>
                                        <div aria-hidden="true" className="ml-4 text-sm text-gray-300">
                                            ·
                                        </div>
                                        <div className="ml-4 flex">
                                            <a href="#"

                                               onClick={
                                                   (e) => {
                                                       e.preventDefault()
                                                       setReviewsOpen(!reviewsOpen)
                                                   }
                                               }


                                               className={!reviewsOpen ? " " : "hidden  " + "text-sm font-medium text-indigo-600 hover:text-indigo-500"}>
                                                See all reviews
                                            </a>


                                        </div>

                                    </div>
                                    <div
                                        className={!reviewsOpen ? "hidden " : "block  " + " rounded-md mt-8 bg-yellow-50 p-4"}>
                                        <div className="flex">
                                            <div className="flex-shrink-0">
                                                <ExclamationTriangleIcon className="h-5 w-5 text-yellow-400"
                                                                         aria-hidden="true"/>
                                            </div>
                                            <div className="ml-3">
                                                <h3 className="text-sm font-medium text-yellow-800">Non non non</h3>
                                                <div className="mt-2 text-sm text-yellow-700">
                                                    <p>
                                                        Vous n'avez pas acces au revus pour le moments, snif snif
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Image gallery */}
                            <div
                                className="mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0">
                                <h2 className="sr-only">Images</h2>

                                <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 lg:gap-8">


                                    {product.images.map((image) => (
                                        <Image
                                            key={image.id}
                                            src={image.imageSrc}
                                            alt={image.imageAlt}
                                            width={500}
                                            height={500}
                                            className={
                                                (image.primary ? 'lg:col-span-2 lg:row-span-2' : 'hidden lg:block') +
                                                'rounded-lg'
                                            }
                                        />
                                    ))}
                                </div>
                            </div>

                            <div className="mt-8 lg:col-span-5">
                                <form
                                    onSubmit={
                                        (e) => {
                                            e.preventDefault()
                                            setPayerOpen(true)
                                        }
                                    }
                                >


                                    <button
                                        type="submit"
                                        className="mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                    >
                                        Payer
                                    </button>
                                </form>


                                <div className={!payerOpen ? "hidden" : "block " + " mt-10 rounded-md bg-red-50 p-4"}>
                                    <div className="flex">
                                        <div className="flex-shrink-0">
                                            <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true"/>
                                        </div>
                                        <div className="ml-3">
                                            <h3 className="text-sm font-medium text-red-800">Mince</h3>
                                            <div className="mt-2 text-sm text-red-700">
                                                <ul role="list" className="list-disc space-y-1 pl-5">
                                                    <li>Je n'ai pas encore mis en place le formulaire de payement :c
                                                    </li>
                                                    <li>Mais si tu es vraiment interesser, tu peux me contacter sur
                                                        discord !
                                                    </li>
                                                    <li>Je te donnerais mon paypal et je t'enverrais le produit !</li>
                                                    <li>Mon discord : A toi de deviner ! hihi</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                {/* Product details */}
                                <div className="mt-10">


                                    <h2 className="text-sm font-medium text-gray-900">Description</h2>

                                    <div
                                        className="prose prose-sm mt-4 text-gray-500"
                                        dangerouslySetInnerHTML={{__html: product.description}}
                                    />
                                </div>

                                <div className="mt-8 border-t border-gray-200 pt-8">
                                    <h2 className="text-sm font-medium text-gray-900">Fabric &amp; Care</h2>

                                    <div className="prose prose-sm mt-4 text-gray-500">
                                        <ul role="list">
                                            {product.details.map((item) => (
                                                <li key={item}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Policies */}
                                <section aria-labelledby="policies-heading" className="mt-10">
                                    <h2 id="policies-heading" className="sr-only">
                                        Our Policies
                                    </h2>

                                    <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                                        {policies.map((policy) => (
                                            <div key={policy.name}
                                                 className="rounded-lg border border-gray-200 bg-gray-50 p-6 text-center">
                                                <dt>
                                                    <policy.icon
                                                        className="mx-auto h-6 w-6 flex-shrink-0 text-gray-400"
                                                        aria-hidden="true"/>
                                                    <span
                                                        className="mt-4 text-sm font-medium text-gray-900">{policy.name}</span>
                                                </dt>
                                                <dd className="mt-1 text-sm text-gray-500">{policy.description}</dd>
                                            </div>
                                        ))}
                                    </dl>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
