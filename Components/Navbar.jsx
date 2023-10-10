"use client";
import styles from "./Navbar.module.css";
import useHandleResize from "../Components/useHandleResize";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  const [isMobile, setIsMobile] = useState(false); // This is where setIsMobile is defined
  const [showMobile, setShowMobile] = useState(false);

  useHandleResize(setIsMobile);

  const toggleHamburger = () => {
    setDropdown(false); // Close the dropdown when toggling the hamburger
    setShowMobile(!showMobile);
  };

  const handleDropdownClick = (e) => {
    e.stopPropagation();
    setDropdown(!dropdown);
  };

  const handleNavLinkClick = (route) => {
    navigate(route);
    setDropdown(false);
    setShowMobile(false);
  };

  return (
    <div>
      <div className="navbar">
        {typeof window !== "undefined" && isMobile && (
          <div
            className={`${styles.hamburgericon} ${
              showMobile && !dropdown ? styles.open : ""
            }`}
            onClick={toggleHamburger}
          >
            <div className={styles.line} />
            <div className={styles.line} />
            <div className={styles.line} />
          </div>
        )}
        {(showMobile || !isMobile || dropdown) && (
          
          <ul className={`${styles.nav} ${dropdown ? styles.open : ""}`}>
            <li className={styles.navitem}>
              <Link href="/">Home</Link>
            </li>
       
  <li className={styles.navitem}>
              <Link href="/Customspaces">Custom Spaces</Link>
            </li>
                 <li className={styles.navitem}>
              <Link href="/Inspiration">Inspiration</Link>
            </li>
            <li className={styles.navitem}>
              <Link href="/Finishes">Finishes</Link>
            </li>
            <li className={styles.navitem}>
              <Link href="/Consultation">Book a Consultation</Link>
            </li>
            <li className={styles.navitem}>
              <Link href="/Contact">Contact</Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Navbar;
