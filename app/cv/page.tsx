"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import resume from "./resume";

function RotatingCubeAtMouse() {
  const cubeRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    let angle = 0;
    let animationFrame: number;

    const animate = () => {
      angle += 1;
      if (cubeRef.current) {
        cubeRef.current.style.transform = `rotateY(${angle}deg) rotateX(${angle / 2}deg)`;
      }
      animationFrame = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });

      // Check if hovering over clickable elements
      const target = e.target as HTMLElement;
      const isClickable =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") !== null ||
        target.closest("button") !== null ||
        window.getComputedStyle(target).cursor === "pointer";
      setIsHovering(isClickable);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        left: pos.x - 12,
        top: pos.y - 12,
        pointerEvents: "none",
        zIndex: 1000,
        transform: isHovering ? "scale(0.3)" : "scale(1)",
        transition: "transform 0.2s ease-out",
      }}
      className="perspective-600"
    >
      <div
        ref={cubeRef}
        className="cube w-6 h-6 relative"
        style={{
          transformStyle: "preserve-3d",
          transition: "transform 0.1s linear",
        }}
      >
        {/* Cube faces with programming language logos */}
        <div
          className="absolute w-6 h-6 bg-blue-500 flex items-center justify-center text-white text-xs font-bold"
          style={{ transform: "rotateY(0deg) translateZ(12px)" }}
        >
          Py
        </div>
        <div
          className="absolute w-6 h-6 bg-blue-600 flex items-center justify-center text-white text-xs font-bold"
          style={{ transform: "rotateY(180deg) translateZ(12px)" }}
        >
          TS
        </div>
        <div
          className="absolute w-6 h-6 bg-yellow-400 flex items-center justify-center text-black text-xs font-bold"
          style={{ transform: "rotateX(90deg) translateZ(12px)" }}
        >
          JS
        </div>
        <div
          className="absolute w-6 h-6 bg-red-700 flex items-center justify-center text-white text-xs font-bold"
          style={{ transform: "rotateX(-90deg) translateZ(12px)" }}
        >
          C
        </div>
        <div
          className="absolute w-6 h-6 bg-orange-500 flex items-center justify-center text-white text-xs font-bold"
          style={{ transform: "rotateY(90deg) translateZ(12px)" }}
        >
          Jv
        </div>
        <div
          className="absolute w-6 h-6 bg-blue-900 flex items-center justify-center text-white text-xs font-bold"
          style={{ transform: "rotateY(-90deg) translateZ(12px)" }}
        >
          SQL
        </div>
      </div>
      <style>{`
        .perspective-600 {
          perspective: 600px;
        }
        * {
          cursor: none !important;
        }
      `}</style>
    </div>
  );
}

export default function CV() {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-black p-6 print:bg-white print:text-black cursor-none">
      <RotatingCubeAtMouse />
      <div className="max-w-4xl mx-auto bg-white dark:bg-zinc-900 shadow-lg rounded-lg p-8 print:shadow-none animate-fade-in">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-6 md:gap-8 mb-8">
          {/* Image to the left */}
          <div className="flex-shrink-0">
            <Image
              src="/photo.jpg"
              alt="Headshot"
              width={120}
              height={120}
              className="rounded-full border-2 border-zinc-200 dark:border-zinc-800"
            />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-black dark:text-zinc-50">
              {resume.name}
            </h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mt-1">
              {resume.title}
            </p>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2">
              {resume.location} •{" "}
              <a
                href={`mailto:${resume.email}`}
                className="underline text-blue-600 dark:text-blue-400 hover:text-blue-700 transition-colors"
              >
                {resume.email}
              </a>{" "}
              • <span>{resume.phone}</span>
            </p>
            <div className="mt-4 flex justify-center md:justify-start gap-3">
              <a
                href={resume.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-sm px-3 py-1 rounded bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href={resume.github}
                target="_blank"
                rel="noreferrer"
                className="text-sm px-3 py-1 rounded bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-colors"
              >
                GitHub
              </a>
              <button
                onClick={() => window.print()}
                className="text-sm px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700 active:scale-95 transition-all"
                aria-label="Download or print resume"
              >
                Print / Save PDF
              </button>
            </div>
          </div>
        </div>

        <hr className="my-6 border-zinc-200 dark:border-zinc-800" />

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-black dark:text-zinc-50 mb-2">
            About
          </h2>
          <p
            className="text-zinc-700 dark:text-zinc-300 leading-relaxed animate-slide-up opacity-0"
            style={{ animationDelay: "80ms" }}
          >
            {resume.about}
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-black dark:text-zinc-50 mb-4">
            Experience
          </h2>
          <div className="space-y-4">
            {resume.experience.map((job, idx) => (
              <article
                key={idx}
                className="pb-2 animate-slide-up opacity-0"
                style={{ animationDelay: `${120 + idx * 80}ms` }}
              >
                <div className="flex justify-between items-baseline">
                  <div>
                    <h3 className="text-lg font-medium text-black dark:text-zinc-50">
                      {job.role}
                    </h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      {job.company}
                    </p>
                  </div>
                  <p className="text-sm text-zinc-500 dark:text-zinc-500">
                    {job.period}
                  </p>
                </div>
                <ul className="list-disc list-inside text-zinc-700 dark:text-zinc-300 mt-2 space-y-1">
                  {job.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-6 grid md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-xl font-semibold text-black dark:text-zinc-50 mb-3">
              Education
            </h2>
            <div className="space-y-3">
              {resume.education.map((edu, i) => (
                <div
                  key={i}
                  className="animate-slide-up opacity-0"
                  style={{ animationDelay: `${200 + i * 80}ms` }}
                >
                  <h3 className="text-md font-medium text-black dark:text-zinc-50">
                    {edu.degree}
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    {edu.school} • {edu.year}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-black dark:text-zinc-50 mb-3">
              Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {resume.skills.map((s, i) => (
                <span
                  key={i}
                  className="text-sm bg-zinc-200 dark:bg-zinc-800 px-3 py-1 rounded transform transition-all hover:scale-105 animate-slide-up opacity-0"
                  style={{ animationDelay: `${240 + i * 50}ms` }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </section>

        <footer
          className="text-center text-sm text-zinc-600 dark:text-zinc-400 mt-6 animate-slide-up opacity-0"
          style={{ animationDelay: "320ms" }}
        >
          <p>Ouvert aux opportunités — available for full-time roles.</p>
          <p className="mt-1">
            <a
              href={`mailto:${resume.email}`}
              className="underline text-blue-600 dark:text-blue-400"
            >
              {resume.email}
            </a>
          </p>
        </footer>
      </div>
    </main>
  );
}