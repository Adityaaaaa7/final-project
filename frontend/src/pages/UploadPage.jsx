import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function App() {
  const [email, setEmail] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [filePreview, setFilePreview] = useState(null);

  const handleLogin = () => {
    if (!email || !email.includes("@")) {
      alert("Please enter a valid email address");
      return;
    }
    setLoggedIn(true);
  };

  const handleUpload = async () => {
    if (!file) return alert("Please select a file");
    setUploading(true);
    setUploadProgress(0);

    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 150);

    await new Promise((r) => setTimeout(r, 1500));
    alert(`✅ "${file.name}" uploaded successfully!`);
    setFile(null);
    setFilePreview(null);
    setUploading(false);
    setUploadProgress(0);
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      const previewUrl = URL.createObjectURL(selectedFile);
      setFilePreview(previewUrl);
    }
  };

  const zigzag = [
    { title: "🧰 Technologies Used", content: ["React + Vite", "Tailwind CSS", "Framer Motion", "ICP Backend (soon)"], align: "left" },
    { title: "📚 What I Learned", content: ["Frontend structuring", "Animations with Framer", "Custom layouting", "Deploying with ICP"], align: "right" },
    { title: "🌍 Real-World Use Cases", content: ["Web3 File Hosting", "Decentralized Websites", "CDN for dApps", "Secure Cloud Alt."], align: "left" },
  ];

  if (!loggedIn) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-4">
        <motion.h1 
          initial={{ y: -50, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 1 }}
          className="text-4xl font-extrabold mb-6"
        >
          📧 Login to Access the Decentralized CDN
        </motion.h1>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="px-4 py-2 rounded-lg text-black w-72 mb-4"
        />
        <button
          onClick={handleLogin}
          className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full font-semibold"
        >
          Continue
        </button>
      </div>
    );
  }

  return (
    <div className="font-sans bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white min-h-screen overflow-x-hidden">

      {/* MODERN HERO SECTION */}
      <div className="relative flex justify-center items-center h-screen px-4">
        <div className="bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-3xl shadow-xl p-10 max-w-3xl w-full text-center">
          <motion.h1 
            initial={{ y: -50, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ duration: 1 }}
            className="text-5xl font-extrabold mb-4"
          >
            📡 <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-white">Decentralized CDN on ICP</span>
          </motion.h1>
          <p className="text-lg mb-8">
            Join the future of content. Secure your work on-chain, earn without middlemen, and thrive in a decentralized world powered by Internet Computer Protocol.
          </p>
          <button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition">
            🚀 Get Started
          </button>
        </div>

        {/* Upload Box - right side */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.7 }}
          className="absolute right-10 top-1/2 transform -translate-y-1/2 bg-white text-black shadow-xl p-6 rounded-2xl w-80 border border-gray-200"
        >
          <h2 className="text-lg font-bold text-blue-700 mb-2">Upload File</h2>

          <input
            type="file"
            id="file-upload"
            onChange={handleFileChange}
            className="hidden"
          />
          <label
            htmlFor="file-upload"
            className="cursor-pointer inline-block bg-gray-100 hover:bg-gray-200 text-sm text-gray-700 px-4 py-2 rounded mb-2 border border-gray-300"
          >
            📂 Choose File
          </label>

          {file && <p className="text-sm text-gray-700 mb-2">📁 {file.name}</p>}

          {filePreview && (
            <div className="mb-2">
              <p className="text-xs text-gray-600 mb-1">Preview:</p>
              <img src={filePreview} alt="Preview" className="w-full h-32 object-cover rounded border" />
            </div>
          )}

          {uploading && (
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
              <div
                className="bg-green-500 h-2.5 rounded-full"
                style={{ width: `${uploadProgress}%` }}
              ></div>
            </div>
          )}

          <button
            onClick={handleUpload}
            disabled={!file || uploading}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full"
          >
            {uploading ? "Uploading..." : "Upload"}
          </button>
        </motion.div>
      </div>

      {/* ZIG ZAG SECTIONS */}
      <div className="py-20 space-y-16">
        {zigzag.map((section, i) => (
          <div
            key={i}
            className={`w-1/2 p-6 rounded-3xl bg-blue-200 text-black shadow-md ${section.align === "left" ? "ml-0 mr-auto" : "ml-auto mr-0"}`}
          >
            <h3 className="text-xl font-bold text-blue-800 mb-2">{section.title}</h3>
            <ul className="list-disc list-inside space-y-1">
              {section.content.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* IMPORTANT POINTS */}
      <div className="px-6 py-10 bg-white text-black">
        <h2 className="text-2xl font-bold text-green-700 mb-4">📌 Important Points</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>This app showcases a decentralized content delivery network (CDN)</li>
          <li>Built using React, Tailwind CSS, and Framer Motion</li>
          <li>Files will be uploaded to ICP backend (coming next!)</li>
        </ul>
      </div>

      {/* FOOTER */}
      <div className="bg-black text-white py-8 px-6 text-center">
        <p className="mb-2">Github: <a href="#" className="underline">example link</a></p>
        <p className="mb-2">LinkedIn: <a href="#" className="underline">example link</a></p>
        <p>Instagram: <a href="#" className="underline">example link</a></p>
      </div>
    </div>
  );
}
