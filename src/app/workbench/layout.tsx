import WorkbenchNavbar from "./nav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <WorkbenchNavbar />
      {children}
    </>
  );
}
