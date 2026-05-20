import { useState, useEffect } from 'react'
import './App.css'

type FormState = {
  name: string;
  email: string;
  password: string;
};

function App() {

 const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (   e: React.ChangeEvent<HTMLInputElement>   ) => {
    e.preventDefault();
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password) {
    alert("All fields are required");
    return;
  }

    console.log("Form submitted:", form);
    
    setForm({
      name: "",
      email: "",
      password: ""
    })
  };

  return (
    <>
      <div className="h-screen w-full flex items-center justify-center bg-gray-100 px-4">
      
      <form onSubmit={handleSubmit} className="w-full max-w-sm bg-white shadow-lg rounded-2xl p-6 space-y-5">
        
        <h2 className="text-2xl font-semibold text-gray-800 text-center">
          Sign Up
        </h2>

        {/* Name */}
        <div className="space-y-1">
          <label htmlFor="name" className="text-sm font-medium text-gray-600">
            Your Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="John Doe"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Email */}
        <div className="space-y-1">
          <label htmlFor="email" className="text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="xyz@gmail.com"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Password */}
        <div className="space-y-1">
          <label htmlFor="password" className="text-sm font-medium text-gray-600">
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Enter password"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded-md font-medium hover:bg-green-600 active:scale-[0.98] transition"
        >
          Submit
        </button>
      </form>
    </div>
    </>
  )
}

export default App
