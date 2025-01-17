import Topbar from "@/components/top-nav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Topbar />
      {children}
    </>
  );
}
