'use client'

import {useState} from "react";

const ContactForm = () => {
    const[user, setUser] = useState({
        username:"",
        email:"",
        phone:"",
        message:""
    })
    const [status, setStatus] = useState(null);


    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;

        setUser((prevUser) => ({...prevUser, [name] : value}));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('api/contact', {
                method:'POST',
                headers:{"Content_Type":"application/json"},
                body: JSON.stringify({
                    username:user.username,
                    email:user.email,
                    phone:user.phone,
                    message:user.message
                })
            })
            // Set the status based on the response from the API route
            if (response.status === 200) {
                setUser({
                    username: "",
                    email: "",
                    phone: "",
                    message: ""
                })
                setStatus('success');
            } else {
                setStatus('error');
            }

        }catch (e) {
            console.log(e)
        }

    }



    return (
        <>
            <div className="w-full max-w-xs">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" name="username" htmlFor="username">
                            Username
                        </label>

                        <input onChange={handleChange} value={user.username} name="username" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" name="email" htmlFor="email">
                            Email
                        </label>
                        <input onChange={handleChange} value={user.email} name="email" className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="" />

                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" name="phone" htmlFor="phone">
                            Phone No
                        </label>
                        <input onChange={handleChange} value={user.phone} name="phone" className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="text" placeholder="" />

                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" name="message" htmlFor="description">
                            Description
                        </label>
                        <textarea onChange={handleChange} value={user.message} name="message" className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="description" type="text" placeholder="" />

                    </div>
                    <div className="flex items-center justify-between">

                        {status === 'success' && <p >Thank you for your message!</p>}
                        {status === 'error' && <p>There was an error submitting your message. Please try again.</p>}
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Send message
                        </button>

                    </div>
                </form>

            </div>

        </>
    )
}

export default ContactForm