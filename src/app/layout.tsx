import "../styles/globals.css";
import Footer from "./components/ui/Footer";
import Navbar from "./components/ui/Navbar";
import { ThemeProvider } from "@/app/components/ThemeProvider";

export const metadata = {
  title: "Pype AI",
  description: "Pype AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`h-full flex flex-col justify-between`}>
        {/* TODO: dark and light theme in progress */}
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="">
            <Navbar />
            <main>{children}</main>
          </div>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
