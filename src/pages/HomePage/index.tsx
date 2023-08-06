import { Facebook, MoveRight, PhoneCall, Twitter } from "lucide-react";
import { Header } from "../../components/Header";
import { Link } from 'react-router-dom'
import { Helmet } from "react-helmet-async";
import { SectionTitle } from "../../components/SectionTitle";
import { Footer } from "../../components/Footer";
import { ContactForm } from "../../components/ContactForm";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css"

interface TestimonialProps {
    author: string
    text: string
    customerSince: number
}

const testimonials = [
    {
        author: 'Melissa Thorne',
        text: `They are really amazing!!! My house now looks prettier than before! I'd like to thank also to all Furniture's team for all effort since the beginning`,
        customerSince: 2015
    },
    {
        author: 'Theresa Dempsey',
        text: `I really love it! The result was way better than I expect, so I would like to thank you all.I definetely recommend it! `,
        customerSince: 2021
    },
    {
        author: 'Josh DeVille',
        text: `Great value for money! It was definitely awesome, you guys nailed it. Top-notch quality and I recommend for anyone that are interested`,
        customerSince: 2019
    }
]

const images = [
    {
        original: "https://images.unsplash.com/photo-1633505412556-82c0921e8f4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=929&q=80",
        thumbnail: "https://images.unsplash.com/photo-1633505412556-82c0921e8f4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=929&q=80",
    },
    {
        original: "https://images.unsplash.com/photo-1615873968403-89e068629265?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80",
        thumbnail: "https://images.unsplash.com/photo-1615873968403-89e068629265?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80",
    },
    {
        original: "https://images.unsplash.com/photo-1605774337664-7a846e9cdf17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
        thumbnail: "https://images.unsplash.com/photo-1605774337664-7a846e9cdf17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    },
];

export function HomePage() {
    return (
        <>
            <Helmet>
                <title>Furniture | Home Page</title>
                <meta name="title" content="Furniture | Home Page" />
                <meta name="description" content="Created for learning purposes, this website related to architecture and furniture" />
            </Helmet>
            <main>
                <Header />
                <section className="flex items-center mx-auto max-w-7xl min-h-[80vh] max-2xl:m-0 max-md:grid max-lg:min-h-full">
                    <div className="w-3/5 max-md:w-full">
                        <img
                            src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=792&q=80"
                            alt="A living room image on a sunny day"
                            title="A living room image on a sunny day"
                            className="rounded-r-xl min-[1500px]:rounded-xl max-md:rounded-none"
                        />
                    </div>
                    <div className="grid w-2/5 px-7 max-md:w-full max-md:py-7">
                        <h1 className="text-yellow-700 text-3xl font-title font-bold">A sofiscated approach for your house</h1>
                        <span className="text-yellow-700/70 py-8">Your furniture with a touch of elegance</span>
                        <Link to={'/'} className="bg-yellow-700 flex w-max gap-12 py-1.5 px-3 text-white rounded">See More <MoveRight /></Link>
                    </div>
                </section>
                <section className="py-24 mx-auto grid max-w-7xl p-6 lg:px-8 max-md:pb-12">
                    <SectionTitle title="A room designed especially for you" />
                    <section className="pt-20 flex items-center max-md:grid">
                        <div className="w-1/2 pr-48 text-justify grid gap-10 max-md:w-full max-md:px-4 max-md:pb-12">
                            <p className="text-yellow-700/75">Present to us your idea and we will created different scenarios so you can change the one that suits you the most.</p>
                            <button className="bg-yellow-700 flex w-max gap-12 py-1.5 px-3 text-white rounded">See Projects <MoveRight /></button>
                        </div>
                        <div className="w-1/2 shadow-2xl max-md:w-full">
                            <ImageGallery
                                items={images}
                                showPlayButton={false}
                                showBullets={true}
                                showThumbnails={true}
                                showFullscreenButton={false}
                                showNav={false}
                            />
                            {/*<img src="" alt="All credits to Spacejoy" />*/}
                        </div>
                    </section>
                </section>
                <section className="pt-24 mx-auto grid max-w-7xl lg:px-8 max-md:pb-12">
                    <SectionTitle title="What people think about Furniture?" />
                    <section className="sm:py-32">
                        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 max-lg:py-8">
                            <ul role="list" className="grid max-w-2xl grid-cols-1 gap-6 mx-auto sm:gap-8 lg:max-w-none lg:grid-cols-3 max-lg:py-8">
                                {
                                    testimonials.map((testimonial: TestimonialProps) => {
                                        return (
                                            <li>
                                                <ul role="list" className="flex flex-col item gap-y-6 sm:gap-y-8">
                                                    <li>
                                                        <figure className="relative h-full p-6 bg-white rounded-3xl border border-yellow-700/10">
                                                            <blockquote className="relative">
                                                                <p className="text-base text-gray-500 text-justify">{testimonial.text}</p>
                                                            </blockquote>
                                                            <figcaption className="relative flex items-center justify-between pt-6 mt-6 border-t border-gray-100">
                                                                <div>
                                                                    <h3>
                                                                        {testimonial.author}
                                                                    </h3>

                                                                    <span className="mt-1 text-sm text-yellow-700/75">
                                                                        Furniture's customer since {testimonial.customerSince}
                                                                    </span>
                                                                </div>
                                                                <div className="overflow-hidden rounded-full bg-gray-50">
                                                                </div>
                                                            </figcaption>
                                                        </figure>
                                                    </li>
                                                </ul>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </section>
                </section>
                <section className="pt-20 mx-auto grid max-w-7xl p-6 lg:px-8">
                    <SectionTitle title="Get in contact" />
                    <section className="py-20 sm:py-32">
                        <div className="flex items-center gap-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 max-md:grid">
                            <ContactForm />
                            <aside className="max-md:grid max-md:justify-center">
                                or
                            </aside>
                            <div className="grid gap-6 text-yellow-700 max-md:justify-center">
                                <div className="flex gap-x-2">
                                    <PhoneCall />: +1 234-567-8910
                                </div>
                                <div className="flex gap-x-2">
                                    <Facebook /> | <Twitter />: @furniture
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
                <Footer />
            </main>
        </>
    )
}