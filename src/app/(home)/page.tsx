import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-4 mt-20">
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

        <p className="text-lg text-fd-muted-foreground max-w-2xl mx-auto">
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
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 17V7c0-2-2-3-4-3-3 0-5 1-5 1v12c0 0 2 1 5 1 2 0 4-1 4-3Z"/><path d="M4 17V7c0-2 2-3 4-3 3 0 5 1 5 1"/></svg>
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
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/><path d="M8 3v18"/></svg>
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
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v3"/><path d="M18 6.1H6"/><path d="m2.6 9.1 2.8-2.8"/><path d="m18.6 6.3 2.8 2.8"/><path d="M21.4 14.9 18.6 12"/><path d="m2.6 15 2.8 2.8"/><path d="M18 18h-6"/><path d="m12 21-2.8-2.8"/></svg>
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
    </main>
  );
}
