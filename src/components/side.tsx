import Footer from "./footer";
import { Navbar } from "./nav";

export default function Side() {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div className="">
        <h1 className="text-4xl text-slate-200 font-bold tracking-tight sm:text-5xl text-nowrap">
          Aravind Sanjeev
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          Frontend Engineer  
        </h2>
        <p className="mt-4 max-w-xs leading-normal">
          I design, develop, and maintain web applications from front to back.
        </p>
        <Navbar />
      </div>
      <Footer />
    </header>
  );
}
