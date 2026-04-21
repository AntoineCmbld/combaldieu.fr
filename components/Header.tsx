'use client';

import { ChevronDown, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setShowMobileMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 shadow-sm">
      <div className="container mx-auto px-4">
        <nav className="relative flex min-h-[72px] items-center justify-between" role="navigation" aria-label="Navigation principale">

          {/* Left spacer (mirrors auth width for centering) */}
          <div className="flex-1" />

          {/* Center: Nav links */}
          <div className="hidden md:flex items-center space-x-8 absolute left-1/2 -translate-x-1/2">
            <Link
              href="/cv"
              className="text-sm font-medium text-zinc-900 dark:text-zinc-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              CV
            </Link>
            <div className="relative group">
              <button className="inline-flex items-center gap-1 text-sm font-medium text-zinc-900 dark:text-zinc-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Projects
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-md bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-1">
                  <Link
                    href="https://geometrics.combaldieu.fr"
                    target="_blank"
                    rel="noreferrer"
                    className="block px-4 py-2 text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                  >
                    GEOMetrics
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Mobile menu */}
          <div className="flex items-center gap-4">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600"
              aria-expanded={showMobileMenu}
              aria-label="Menu mobile"
            >
              {showMobileMenu ? (
                <X className="w-6 h-6 text-gray-900 dark:text-white" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6 text-gray-900 dark:text-white" aria-hidden="true" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {showMobileMenu && (
          <div
            ref={mobileMenuRef}
            className="mt-4 pb-4 space-y-2 md:hidden border-t border-zinc-200 dark:border-zinc-800 pt-4"
            role="navigation"
            aria-label="Menu mobile"
          >
            <Link
              href="/cv"
              onClick={() => setShowMobileMenu(false)}
              className="block px-4 py-2 text-sm font-medium text-zinc-900 dark:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors"
            >
              CV
            </Link>
            <div className="px-4 py-2">
              <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100 mb-1">Projects</p>
              <Link
                href="https://geometrics.combaldieu.fr"
                target="_blank"
                rel="noreferrer"
                onClick={() => setShowMobileMenu(false)}
                className="block pl-3 py-1 text-sm text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                GEOMetrics
              </Link>
            </div>

          </div>
        )}
      </div>
    </header>
  );
}