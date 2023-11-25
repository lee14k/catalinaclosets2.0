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
  const [activeDropdown, setActiveDropdown] = useState("");
  const customSpacesItems = ["Closets", "Bedrooms", "Kitchen", "Living Rooms","Office", "Mudroom", "Laundry", "Garage"];
  const toggleDropdown = (dropdownName) => {
    if (activeDropdown === dropdownName) {
      setActiveDropdown(""); // If the clicked dropdown is already active, close it
    } else {
      setActiveDropdown(dropdownName);
    }
  };

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
    <div className="navigation">
      <div className="navbar pt-48 ">
        {typeof window !== "undefined" && isMobile && (
          <div
            className={`${styles.hamburgericon} ${
              showMobile && !dropdown ? styles.open : ""
            } `}
            onClick={toggleHamburger}
          >
            <div className={styles.line} />
            <div className={styles.line} />
            <div className={styles.line} />
          </div>
        )}
        {(showMobile || !isMobile || dropdown) && (
          <ul
            className={`${styles.nav} ${dropdown ? styles.open : ""} ${
              isMobile ? "mobile" : ""
            }`}
          >
            <li className={styles.navitem}>
              <Link href="/">Home</Link>
            </li>

<button>
            <li className={styles.navitem}onClick={() => toggleDropdown("CustomSpaces")}>
           
                Custom Spaces{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>{" "}
            </li>
               {activeDropdown === "CustomSpaces" && (
              <ul className={`${styles.submenu} ${isMobile ? "mobile" : ""}`}>
                {customSpacesItems.map((item, index) => (
                  <li key={index} className={styles.navitem}>
                    <Link href={`/${item}`}>{item}</Link>
                  </li>
                ))}
              </ul>
            )}
            </button>
          
            <li className={styles.navitem}>
              <Link className={styles.navitem} href="/Gallery">
                Gallery
           
              </Link>
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
