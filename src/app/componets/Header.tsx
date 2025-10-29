"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY <= 0) {
        setShow(true);
      } else if (currentScrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-16 bg-blue-500 z-10 transition-transform duration-300 flex items-center justify-center text-white text-4xl ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <Link href="/">UI Lab Studio</Link>
    </div>
  );
};

export default Header;
