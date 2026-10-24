import type { Metadata } from "next";
import { Bodoni_Moda, Instrument_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const sans = Instrument_Sans({ variable: "--font-sans", subsets: ["latin"], weight: ["400", "500", "600"] });
const serif = Bodoni_Moda({ variable: "--font-serif", subsets: ["latin"], weight: "variable", style: ["normal", "italic"], axes: ["opsz"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://anneboulletv4.vercel.app"),
  title: { default: "Anne Boullet Studio · Décoratrice d'intérieur à La Rochelle", template: "%s · Anne Boullet Studio" },
  description:
    "Conseil, conception et décoration pour les particuliers et les professionnels, à une heure autour de La Rochelle, sur l'Île de Ré et Oléron.",
  robots: { index: false, follow: false },
};


export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${sans.variable} ${serif.variable}`} suppressHydrationWarning>
      <body>
        <a className="skip" href="#contenu">Aller au contenu</a>
        <div className="page">
          <div className="wrap v2 v4">
            <Header />
            <main id="contenu">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
