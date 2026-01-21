"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import resume from "./resume";

export default function CV() {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-black p-6 md:p-12 print:bg-white print:text-black">
      <div className="max-w-5xl mx-auto bg-white dark:bg-zinc-900 shadow-md rounded-lg p-8 md:p-12 print:shadow-none animate-fade-in">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-6 md:gap-8 mb-10">
          {/* Image to the left */}
          <div className="flex-shrink-0">
            <Image
              src="/photo.jpg"
              alt="Headshot"
              width={140}
              height={140}
              className="rounded-full border-2 border-zinc-300 dark:border-zinc-700"
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
            {resume.availability && (
              <p className="text-sm text-blue-600 dark:text-blue-400 mt-2 font-medium">
                {resume.availability}
              </p>
            )}
            <div className="mt-4 flex justify-center md:justify-start gap-3">
              <a
                href={resume.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-sm px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-all shadow-md hover:shadow-lg font-medium"
              >
                LinkedIn
              </a>
              <a
                href={resume.github}
                target="_blank"
                rel="noreferrer"
                className="text-sm px-4 py-2 rounded-lg bg-zinc-800 dark:bg-zinc-700 text-white hover:bg-zinc-900 dark:hover:bg-zinc-600 transition-all shadow-md hover:shadow-lg font-medium"
              >
                GitHub
              </a>
              <a
                href="/CV_Antoine_Combaldieu.pdf"
                download
                className="text-sm px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 active:scale-95 transition-all shadow-md hover:shadow-lg font-medium"
                aria-label="Download or print resume"
              >
                Download PDF
              </a>
            </div>
          </div>
        </div>

        <hr className="my-6 border-zinc-200 dark:border-zinc-800" />

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-black dark:text-zinc-50 mb-3 pb-2 border-b border-zinc-300 dark:border-zinc-700">
            About
          </h2>
          <p
            className="text-zinc-700 dark:text-zinc-300 leading-relaxed animate-slide-up opacity-0"
            style={{ animationDelay: "80ms" }}
          >
            {resume.about}
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-black dark:text-zinc-50 mb-5 pb-2 border-b-2 border-blue-500 dark:border-blue-600">
            Experience
          </h2>
          <div className="space-y-5">
            {resume.experience.map((job, idx) => (
              <article
                key={idx}
                className="pb-3 border-l-3 border-blue-500 dark:border-blue-600 pl-4 animate-slide-up opacity-0"
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

        <section className="mb-8 grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold text-black dark:text-zinc-50 mb-4 pb-2 border-b border-zinc-300 dark:border-zinc-700">
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
                  {edu.description && (
                    <p className="text-sm text-zinc-500 dark:text-zinc-500 mt-1">
                      {edu.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-black dark:text-zinc-50 mb-4 pb-2 border-b border-zinc-300 dark:border-zinc-700">
              Skills
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2">Python</h3>
                <div className="flex flex-wrap gap-2">
                  {resume.skills.python.map((s, i) => (
                    <span
                      key={i}
                      className="text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-3 py-1 rounded font-medium"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2">Infrastructure & DevOps</h3>
                <div className="flex flex-wrap gap-2">
                  {resume.skills.infrastructure.map((s, i) => (
                    <span
                      key={i}
                      className="text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-3 py-1 rounded font-medium"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2">Technologies complémentaires</h3>
                <div className="flex flex-wrap gap-2">
                  {resume.skills.other.map((s, i) => (
                    <span
                      key={i}
                      className="text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-3 py-1 rounded font-medium"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-black dark:text-zinc-50 mb-5 pb-2 border-b-2 border-blue-500 dark:border-blue-600">
            Projets
          </h2>
          <div className="space-y-4">
            {resume.projects.map((project, idx) => (
              <div
                key={idx}
                className="p-4 rounded border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/30 animate-slide-up opacity-0"
                style={{ animationDelay: `${280 + idx * 60}ms` }}
              >
                <h3 className="text-md font-semibold text-black dark:text-zinc-50">
                  {project.name}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                  {project.description}
                </p>
                <div className="flex gap-2 mt-2">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block text-xs px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700 transition-colors font-medium"
                    >
                      Voir le projet →
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-xs px-3 py-1 rounded bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-colors font-medium"
                    >
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8 grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold text-black dark:text-zinc-50 mb-4 pb-2 border-b border-zinc-300 dark:border-zinc-700">
              Associations étudiantes
            </h2>
            <div className="space-y-3">
              {resume.associations.map((assoc, i) => (
                <div
                  key={i}
                  className="animate-slide-up opacity-0"
                  style={{ animationDelay: `${320 + i * 60}ms` }}
                >
                  <h3 className="text-md font-medium text-black dark:text-zinc-50">
                    {assoc.role}
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    {assoc.period}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-black dark:text-zinc-50 mb-4 pb-2 border-b border-zinc-300 dark:border-zinc-700">
              Langues
            </h2>
            <div className="space-y-2">
              {resume.languages.map((lang, i) => (
                <div
                  key={i}
                  className="animate-slide-up opacity-0"
                  style={{ animationDelay: `${360 + i * 60}ms` }}
                >
                  <h3 className="text-md font-medium text-black dark:text-zinc-50">
                    {lang.language} — {lang.level}
                  </h3>
                  {lang.note && (
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                      {lang.link ? (
                        <a
                          href={lang.link}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 px-2 py-1 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors text-xs font-medium border border-zinc-300 dark:border-zinc-700"
                        >
                          {lang.note}
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      ) : (
                        lang.note
                      )}
                    </p>
                  )}
                </div>
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