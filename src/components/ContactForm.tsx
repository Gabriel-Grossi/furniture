import { Send } from "lucide-react";

export function ContactForm() {
    return (
        <form action="" className="grid w-1/2 gap-y-4 max-md:w-full">
            <label htmlFor="name" className="text-yellow-700">Name</label>
            <input type="text" name="name" id="name" className="rounded-sm border-none ring-1 ring-yellow-700 text-sm focus:ring focus:ring-offset-1 focus:ring-yellow-700" placeholder="Type your name here" required />
            <label htmlFor="email" className="text-yellow-700">E-mail</label>
            <input type="email" name="email" id="email" className="rounded-sm border-none ring-1 ring-yellow-700 text-sm focus:ring focus:ring-offset-1 focus:ring-yellow-700" placeholder="Type your e-mail here" required />
            <label htmlFor="phone" className="text-yellow-700">Phone</label>
            <input type="tel" name="" id="phone" className="rounded-sm border-none ring-1 ring-yellow-700 text-sm focus:ring focus:ring-offset-1 focus:ring-yellow-700" placeholder="Type your phone here" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />
            <label htmlFor="message" className="text-yellow-700">Message</label>
            <textarea name="message" id="message" className="rounded-sm border-none ring-1 ring-yellow-700 text-sm focus:ring focus:ring-offset-1 focus:ring-yellow-700" placeholder="Type your message here" required />
            <button type="button" className="bg-yellow-700 py-2 px-4 flex gap-4 items-center w-max text-gray-50 rounded shadow focus:ring focus:outline-none focus:ring-offset-1 focus:ring-yellow-700">
                Submit message <Send />
            </button>
        </form >
    )
}