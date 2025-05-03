import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Github, Twitter, Linkedin, BookOpen, Languages, Blocks } from 'lucide-react';
import { siteConfig } from '../metadata.config';

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: siteConfig.name,
            description: siteConfig.description,
            applicationCategory: 'ProgrammingLanguage',
            operatingSystem: 'Cross-platform',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD',
            },
            author: {
              '@type': 'Organization',
              name: 'SopLang Team',
              url: siteConfig.url,
            },
          }),
        }}
      />
      <main className="flex flex-1 flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-4 mt-20 md:mt-0">
        <div className="max-w-3xl text-center space-y-6">
          <div className="flex items-center justify-center space-x-3 mb-8">
            <Image 
              src="/Soplang-01.png"
              alt="Soplang Logo"
              width={40}
              height={40}
              className="dark:hidden"
            />
            <Image 
              src="/Soplang-02.png"
              alt="Soplang Logo"
              width={40}
              height={40}
              className="hidden dark:block"
            />
            <h1 className="text-4xl font-bold tracking-tight">Soplang</h1>
          </div>

          <p className="text-2xl font-bold text-fd-muted-foreground">
            The First-Somali Programming Language
          </p>

          <p className="text-lg text-fd-muted-foreground max-w-2xl mx-auto font-sans">
            An interpreted programming language that uniquely combines static and dynamic typing systems with syntax based on the Somali language.
          </p>

          <div className="flex items-center justify-center gap-4 pt-4">
            <Link
              href="/docs"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-fd-ring disabled:pointer-events-none disabled:opacity-50 bg-fd-primary/80 text-fd-primary-foreground shadow hover:bg-fd-primary/90 h-9 px-4 py-2"
            >
              Documentation
            </Link>
            <Link
              href="/play"
              className="text-sm font-medium hover:text-fd-emphasis transition-colors relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-current after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
            >
              Try Playground
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="group relative overflow-hidden rounded-2xl border border-fd-border bg-gradient-to-b from-fd-subtle/50 to-transparent p-6 transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-b from-fd-emphasis/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
              <div className="relative space-y-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-fd-emphasis/10 text-fd-emphasis">
                  <BookOpen size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Dual Type System</h3>
                  <p className="mt-2 text-sm text-fd-muted-foreground leading-relaxed">
                    Combines <code className="text-xs bg-fd-subtle px-1.5 py-0.5 rounded-md">tiro</code> & <code className="text-xs bg-fd-subtle px-1.5 py-0.5 rounded-md">qoraal</code> static typing with <code className="text-xs bg-fd-subtle px-1.5 py-0.5 rounded-md">door</code> dynamic typing
                  </p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-fd-border bg-gradient-to-b from-fd-subtle/50 to-transparent p-6 transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-b from-fd-emphasis/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative space-y-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-fd-emphasis/10 text-fd-emphasis">
                  <Languages size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Somali-based Syntax</h3>
                  <p className="mt-2 text-sm text-fd-muted-foreground leading-relaxed">
                    Natural programming in Somali with <code className="text-xs bg-fd-subtle px-1.5 py-0.5 rounded-md">qor</code> for print and <code className="text-xs bg-fd-subtle px-1.5 py-0.5 rounded-md">howl</code> for functions
                  </p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-fd-border bg-gradient-to-b from-fd-subtle/50 to-transparent p-6 transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-b from-fd-emphasis/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative space-y-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-fd-emphasis/10 text-fd-emphasis">
                  <Blocks size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Multiple Paradigms</h3>
                  <p className="mt-2 text-sm text-fd-muted-foreground leading-relaxed">
                    Write code your way with support for functional, procedural, and object-oriented patterns
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="w-full max-w-3xl mx-auto py-8 mt-16  border-t border-fd-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-fd-muted-foreground">
            <div className="flex items-center justify-center gap-2">
              <span> {new Date().getFullYear()} <span className="font-bold inline items-center justify-center ">Soplang</span> Software Foundation</span>
              <span className="hidden md:inline">·</span>
              <span>v0.1.0-alpha</span>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="https://github.com/soplang"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-fd-emphasis transition-colors"
              >
                <span className="sr-only">GitHub</span>
                <Github size={20} />
              </Link>
              <Link
                href="https://twitter.com/soplangorg"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-fd-emphasis transition-colors"
              >
                <span className="sr-only">Twitter</span>
                <Twitter size={20} />
              </Link>
              <Link
                href="https://facebook.com/soplangorg"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-fd-emphasis transition-colors"
              >
                <span className="sr-only">Facebook</span>
                <Facebook size={20} />
              </Link>
              <Link
                href="https://linkedin.com/company/soplang"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-fd-emphasis transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <Linkedin size={20} />
              </Link>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
