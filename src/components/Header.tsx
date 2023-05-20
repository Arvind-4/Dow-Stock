import Link from 'next/link';

export default function Header() {
  return (
    <nav className='bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800'>
      <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl'>
        <Link href='/' className='flex items-center'>
          {/* <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" /> */}
          <span className='self-center text-xl font-semibold whitespace-nowrap dark:text-white'>
            Next + Tailwind + Chart.js
          </span>
        </Link>
      </div>
    </nav>
  );
}
