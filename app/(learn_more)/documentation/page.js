/**
 * v0 by Vercel.
 * @see https://v0.dev/t/s2VMOP3qAgs
 */
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex min-h-screen">
      <aside
        className="lg:hidden w-64 bg-gray-100 dark:bg-gray-800 p-4 fixed inset-y-0 left-0 transform -translate-x-full overflow-auto h-full transition-transform duration-200 ease-in-out"
        id="mobileNav"
      >
        <nav>
          <ul className="space-y-2">
            <li>
              <Link className="text-gray-700 dark:text-gray-300" href="#">
                Section 1
              </Link>
            </li>
            <li>
              <Link className="text-gray-700 dark:text-gray-300" href="#">
                Section 2
              </Link>
            </li>
            <li>
              <Link className="text-gray-700 dark:text-gray-300" href="#">
                Section 3
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
      <aside className="hidden lg:block w-64 bg-gray-100 dark:bg-gray-800 p-4">
        <nav>
          <ul className="space-y-2">
            <li>
              <Link className="text-gray-700 dark:text-gray-300" href="#">
                Section 1
              </Link>
            </li>
            <li>
              <Link className="text-gray-700 dark:text-gray-300" href="#">
                Section 2
              </Link>
            </li>
            <li>
              <Link className="text-gray-700 dark:text-gray-300" href="#">
                Section 3
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-4">
        <button className="lg:hidden fixed top-0 right-0 m-4">
          <svg
            className="h-6 w-6 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
          </svg>
        </button>
        <section className="space-y-4" id="section1">
          <h2 className="text-2xl font-bold">Section 1</h2>
          <p className="text-gray-600 dark:text-gray-400">This is a short description for Section 1.</p>
          <ul className="space-y-2">
            <li>
              <h3 className="text-xl font-semibold">Subtopic 1.1</h3>
              <p className="text-gray-600 dark:text-gray-400">This is a description for Subtopic 1.1.</p>
              <pre className="p-2 bg-gray-200 dark:bg-gray-700 rounded">
                {`"<div className="example\">This is a code snippet for Subtopic 1.1</div>"`}
              </pre>
            </li>
            <li>
              <h3 className="text-xl font-semibold">Subtopic 1.2</h3>
              <p className="text-gray-600 dark:text-gray-400">This is a description for Subtopic 1.2.</p>
              <pre className="p-2 bg-gray-200 dark:bg-gray-700 rounded">
                {`"<div className="example\">This is a code snippet for Subtopic 1.2</div>"`}
              </pre>
            </li>
          </ul>
        </section>
        <section className="space-y-4" id="section2">
          <h2 className="text-2xl font-bold">Section 2</h2>
          <p className="text-gray-600 dark:text-gray-400">This is a short description for Section 2.</p>
          <ul className="space-y-2">
            <li>
              <h3 className="text-xl font-semibold">Subtopic 2.1</h3>
              <p className="text-gray-600 dark:text-gray-400">This is a description for Subtopic 2.1.</p>
              <pre className="p-2 bg-gray-200 dark:bg-gray-700 rounded">
                {`"<div className="example\">This is a code snippet for Subtopic 2.1</div>"`}
              </pre>
            </li>
            <li>
              <h3 className="text-xl font-semibold">Subtopic 2.2</h3>
              <p className="text-gray-600 dark:text-gray-400">This is a description for Subtopic 2.2.</p>
              <pre className="p-2 bg-gray-200 dark:bg-gray-700 rounded">
                {`"<div className="example\">This is a code snippet for Subtopic 2.2</div>"`}
              </pre>
            </li>
          </ul>
        </section>
        <section className="space-y-4" id="section3">
          <h2 className="text-2xl font-bold">Section 3</h2>
          <p className="text-gray-600 dark:text-gray-400">This is a short description for Section 3.</p>
          <ul className="space-y-2">
            <li>
              <h3 className="text-xl font-semibold">Subtopic 3.1</h3>
              <p className="text-gray-600 dark:text-gray-400">This is a description for Subtopic 3.1.</p>
              <pre className="p-2 bg-gray-200 dark:bg-gray-700 rounded">
                {`"<div className="example\">This is a code snippet for Subtopic 3.1</div>"`}
              </pre>
            </li>
            <li>
              <h3 className="text-xl font-semibold">Subtopic 3.2</h3>
              <p className="text-gray-600 dark:text-gray-400">This is a description for Subtopic 3.2.</p>
              <pre className="p-2 bg-gray-200 dark:bg-gray-700 rounded">
                {`"<div className="example\">This is a code snippet for Subtopic 3.2</div>"`}
              </pre>
            </li>
          </ul>
        </section>
      </main>
    </div>
  )
}

