export function Footer() {
  return (
    <footer className="border-t border-purple-900 bg-purple-100/95 dark:bg-[#1A0826]/95 backdrop-blur supports-[backdrop-filter]:bg-purple-100/60 dark:supports-[backdrop-filter]:bg-[#1A0826]/60">
      <div className="px-4 sm:px-6 lg:px-8 py-8">
      <p className="text-sm text-purple-900/90 dark:text-purple-100/90 text-center">
            © {new Date().getFullYear()} DuckFoo. All rights reserved.
          </p>
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8"> */}
          {/* <div> */}
            {/* <h3 className="text-lg font-semibold mb-4 text-purple-950 dark:text-white">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-sm text-purple-900/90 dark:text-purple-100/90 hover:text-yellow-600 dark:hover:text-yellow-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/" className="text-sm text-purple-900/90 dark:text-purple-100/90 hover:text-yellow-600 dark:hover:text-yellow-300">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-sm text-purple-900/90 dark:text-purple-100/90 hover:text-yellow-600 dark:hover:text-yellow-300">
                  Careers
                </Link>
              </li>
            </ul> */}
          {/* </div> */}
          {/* Repeat the same pattern for other sections */}
        {/* </div> */}
        {/* <div className="mt-12 pt-8 border-t">

        </div> */}
      </div>
    </footer>
  )
}

