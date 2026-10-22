import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { siteSettings } from "@/content/data";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { themeInitScript } from "@/components/ThemeToggle";
import "@/styles/globals.css";

const mono = JetBrains_Mono({ variable: "--font-jetbrains-mono", subsets: ["latin"] });
const sans = Plus_Jakarta_Sans({ variable: "--font-plus-jakarta", subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: siteSettings.title, template: `%s | Arielle Turullols` },
  description: siteSettings.description,
  openGraph: { title: siteSettings.title, description: siteSettings.description, type: "website" },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = { themeColor: "#F9F9F8" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${mono.variable} ${sans.variable} antialiased`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-screen flex flex-col bg-page text-ink transition-colors duration-200">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:px-3 focus:py-2 focus:bg-ink focus:text-page focus:rounded-control font-mono text-xs"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main" className="flex-1 max-w-[1200px] w-full mx-auto px-4 sm:px-6 py-8 sm:py-12">
          {children}
        </main>
        <div className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 mt-12 sm:mt-16 flex justify-end">
          <BackToTop />
        </div>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
