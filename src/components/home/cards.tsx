import React from "react";
import { useState, useEffect } from "react";

export default function Cards() {
    const [isScrolling, setIsScrolling] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolling(window.scrollY > 0);
            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
            
    }
}, []);
return (
    <div className={`flex flex-col items-center justify-center gap-6 py-12 transition-opacity duration-500 ${isScrolling ? 'opacity-100' : 'opacity-0'}`}></div>
)
};

