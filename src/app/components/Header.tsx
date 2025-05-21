"use client";

import React, { useState, useEffect } from "react";

import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { menuItems } from "../_lib/const";
import { NavMenuItem } from "../_lib/types";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Detect scrolling to change header style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <a
            href="#"
            className="text-2xl font-bold bg-gradient-to-r from-primary/80 to-accent/10 rounded-full bg-clip-text "
          >
            Jovanni Jungco
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item: NavMenuItem) => (
              <NavLink key={item.name} href={item.href}>
                {item.name}
              </NavLink>
            ))}
            <Button asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X size={24} className="text-foreground" />
            ) : (
              <Menu size={24} className="text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 py-5 space-y-4">
            <MobileNavLink href="#home" onClick={toggleMobileMenu}>
              Home
            </MobileNavLink>
            <MobileNavLink href="#about" onClick={toggleMobileMenu}>
              About
            </MobileNavLink>
            <MobileNavLink href="#skills" onClick={toggleMobileMenu}>
              Skills
            </MobileNavLink>
            <MobileNavLink href="#projects" onClick={toggleMobileMenu}>
              Projects
            </MobileNavLink>
            <MobileNavLink href="#testimonials" onClick={toggleMobileMenu}>
              Testimonials
            </MobileNavLink>
            <Button className="w-full" asChild>
              <a href="#contact" onClick={toggleMobileMenu}>
                Contact Me
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

const NavLink = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => (
  <a
    href={href}
    className="text-foreground hover:text-primary font-medium transition-colors"
  >
    {children}
  </a>
);

const MobileNavLink = ({
  children,
  href,
  onClick,
}: {
  children: React.ReactNode;
  href: string;
  onClick: () => void;
}) => (
  <a
    href={href}
    className="block text-foreground hover:text-primary font-medium py-2 transition-colors"
    onClick={onClick}
  >
    {children}
  </a>
);

export default Header;
