import Link from "next/link";

export default function WorkbenchNavbar() {
  return (
    <>
      <nav className="">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link
                href="/workbench"
                className="text-fuchsia-600 text-xl font-semibold hover:text-fuchsia-500"
              >
                Workbench
              </Link>
            </div>
            <div className=" flex space-x-4">
              <Link href="/" className="text-gray-600 hover:text-fuchsia-600">
                Portfolio
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
