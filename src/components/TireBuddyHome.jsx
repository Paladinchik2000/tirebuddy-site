import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const PRIMARY_RED = '#E63946'

function Logo() {
    return (
        <div className="flex items-center gap-3 select-none">
            <img
                src="https://i.imgur.com/hNgWir3.png"
                alt="Buddy logo"
                className="h-8 w-8 rounded-full object-contain shadow-sm"
            />
            <span className="text-xl md:text-2xl font-extrabold tracking-tight text-slate-900">
                Tire<span className="text-slate-800">Buddy</span>
            </span>
        </div>
    )
}

function NavBar() {
    return (
        <header className="sticky top-0 z-30 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/80 border-b border-slate-100">
            <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
                <Logo />
                <nav className="hidden md:flex items-center gap-8 text-sm text-slate-700">
                    <a className="hover:text-slate-900" href="#home">Home</a>
                    <a className="hover:text-slate-900" href="#services">Services</a>
                    <a className="hover:text-slate-900" href="#about">About</a>
                    <a className="hover:text-slate-900" href="#booking">Booking</a>
                    <a className="hover:text-slate-900" href="#blog">Blog</a>
                    <a
                        href="#booking"
                        className="ml-2 rounded-full px-4 py-2 font-semibold text-white shadow-sm hover:shadow transition"
                        style={{ background: PRIMARY_RED }}
                    >
                        Book Now
                    </a>
                </nav>
            </div>
        </header>
    )
}

function Toast({ message, type }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className={`fixed bottom-6 right-6 px-5 py-3 rounded-lg shadow-lg text-white font-medium ${type === 'success' ? 'bg-green-600' : 'bg-red-600'
                }`}
        >
            {message}
        </motion.div>
    )
}

function Booking() {
    const [submitted, setSubmitted] = useState(false)
    const [errors, setErrors] = useState({})
    const [toast, setToast] = useState(null)
    const [postalCode, setPostalCode] = useState('')

    const validate = (data) => {
        const newErrors = {}
        if (!data.get('name')) newErrors.name = 'Name is required'
        if (!data.get('phone')) newErrors.phone = 'Phone number is required'
        if (!data.get('address')) newErrors.address = 'Address is required'
        if (!data.get('vehicleMake')) newErrors.vehicleMake = 'Vehicle Make is required'
        if (!data.get('vehicleModel')) newErrors.vehicleModel = 'Vehicle Model is required'
        if (!data.get('postalCode')) newErrors.postalCode = 'Postal Code is required'
        if (!data.get('service')) newErrors.service = 'Please select a service'
        return newErrors
    }

    const handlePostalChange = (e) => {
        let value = e.target.value.toUpperCase().replace(/\s+/g, '')
        if (value.length > 3) {
            value = value.slice(0, 3) + ' ' + value.slice(3)
        }
        setPostalCode(value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = e.target
        const data = new FormData(form)
        const validationErrors = validate(data)

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors)
            return
        }

        setErrors({})

        try {
            const res = await fetch('https://formspree.io/f/xwprnndy', {
                method: 'POST',
                body: data,
                headers: { Accept: 'application/json' },
            })

            if (res.ok) {
                setSubmitted(true)
                setToast({ message: '✅ Booking sent successfully!', type: 'success' })
                form.reset()
                setPostalCode('')
            } else {
                setToast({ message: '❌ Something went wrong, please try again.', type: 'error' })
            }
        } catch (err) {
            setToast({ message: '❌ Network error. Please try again later.', type: 'error' })
        }

        setTimeout(() => setToast(null), 4000)
    }

    return (
        <section id="booking" className="bg-white py-16 border-t border-slate-200 relative">
            <AnimatePresence>{toast && <Toast message={toast.message} type={toast.type} />}</AnimatePresence>

            <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-12 items-start">
                {/* Booking Form */}
                <div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Book Your Service in 2 Minutes</h2>
                    <p className="text-slate-600 mb-8">Quick, friendly, and mobile — we come to your driveway!</p>

                    {!submitted ? (
                        <form className="grid gap-4" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <input name="name" type="text" placeholder="Name" className={`border rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 ${errors.name ? 'border-red-400 ring-red-300' : 'border-slate-300 focus:ring-red-400'}`} />
                                    {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
                                </div>
                                <div>
                                    <input name="phone" type="tel" placeholder="Phone" className={`border rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 ${errors.phone ? 'border-red-400 ring-red-300' : 'border-slate-300 focus:ring-red-400'}`} />
                                    {errors.phone && <p className="text-sm text-red-500 mt-1">{errors.phone}</p>}
                                </div>
                            </div>

                            <div>
                                <input name="address" type="text" placeholder="Address" className={`border rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 ${errors.address ? 'border-red-400 ring-red-300' : 'border-slate-300 focus:ring-red-400'}`} />
                                {errors.address && <p className="text-sm text-red-500 mt-1">{errors.address}</p>}
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <input name="vehicleMake" type="text" placeholder="Vehicle Make" className={`border rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 ${errors.vehicleMake ? 'border-red-400 ring-red-300' : 'border-slate-300 focus:ring-red-400'}`} />
                                    {errors.vehicleMake && <p className="text-sm text-red-500 mt-1">{errors.vehicleMake}</p>}
                                </div>
                                <div>
                                    <input name="vehicleModel" type="text" placeholder="Vehicle Model" className={`border rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 ${errors.vehicleModel ? 'border-red-400 ring-red-300' : 'border-slate-300 focus:ring-red-400'}`} />
                                    {errors.vehicleModel && <p className="text-sm text-red-500 mt-1">{errors.vehicleModel}</p>}
                                </div>
                            </div>

                            <div>
                                <input
                                    name="postalCode"
                                    type="text"
                                    value={postalCode}
                                    onChange={handlePostalChange}
                                    placeholder="Postal Code (e.g. A1A 1A1)"
                                    maxLength={7}
                                    className={`border rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 ${errors.postalCode ? 'border-red-400 ring-red-300' : 'border-slate-300 focus:ring-red-400'}`}
                                />
                                {errors.postalCode && <p className="text-sm text-red-500 mt-1">{errors.postalCode}</p>}
                            </div>

                            <div>
                                <select name="service" className={`border rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 ${errors.service ? 'border-red-400 ring-red-300' : 'border-slate-300 focus:ring-red-400'}`}>
                                    <option value="">Select Service</option>
                                    <option>Tire Change</option>
                                    <option>Punctured Tire Repair</option>
                                    <option>Gutter Cleaning</option>
                                    <option>Fall Cleanup</option>
                                </select>
                                {errors.service && <p className="text-sm text-red-500 mt-1">{errors.service}</p>}
                            </div>

                            <textarea name="message" placeholder="Additional details (optional)" rows={3} className="border border-slate-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-red-400" />

                            <button type="submit" className="rounded-full px-6 py-3 font-semibold text-white shadow-md hover:shadow-lg transition" style={{ background: PRIMARY_RED }}>
                                Book Now
                            </button>
                        </form>
                    ) : (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="p-6 border border-slate-200 rounded-xl bg-green-50 text-green-700">
                            <h3 className="font-bold text-lg">Thank you!</h3>
                            <p>Your booking has been received. We’ll contact you shortly to confirm your appointment.</p>
                        </motion.div>
                    )}
                </div>

                {/* Contact + Map Section */}
                <div className="space-y-6">
                    <div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">We’ll Take Care of the Rest!</h3>
                        <p className="text-slate-600 mb-4">Once you submit the form, our friendly team will contact you to confirm your appointment within 15 minutes.</p>
                        <a href="tel:+14164285819" className="inline-block rounded-full px-6 py-3 font-semibold text-white shadow hover:shadow-lg transition" style={{ background: PRIMARY_RED }}>
                            Call Us Now
                        </a>
                    </div>

                    <div className="aspect-video w-full rounded-xl overflow-hidden shadow border border-slate-200">
                        <iframe
                            title="TireBuddy Service Area"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.526698232996!2d-79.38318468450488!3d43.65322697912161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d1f0d8c0ab%3A0xb7e5d7d642f9b6c!2sToronto%2C%20ON!5e0!3m2!1sen!2sca!4v1678378366115!5m2!1sen!2sca"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                    <div className="text-slate-600 text-sm">
                        <p>📍 Serving: Toronto, Mississauga, Oakville, Burlington</p>
                        <p>📞 +1 416 428 5819</p>
                        <p>✉️ info@tirebuddy.ca</p>
                        <p>🕒 Mon–Sun, 8am–8pm</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default function TireBuddyHome() {
    return (
        <div className="min-h-screen bg-[#F4F4F4] text-slate-800">
            <NavBar />
            <Booking />
            <footer className="border-t border-slate-200 bg-white">
                <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-slate-500 flex flex-col md:flex-row items-center justify-between gap-3">
                    <p>© {new Date().getFullYear()} TireBuddy. All rights reserved.</p>
                    <p>Made with ❤️ in Canada. “Your Tire’s Best Friend.”</p>
                </div>
            </footer>
        </div>
    )
}
