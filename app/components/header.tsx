import Link from 'next/link';

const Header = () => {
    return (
        <header className="w-full fixed z-10 py-4 px-40 bg-black border-b border-gray-800">
            <div className="flex justify-between items-center">
                <h1 className="text-white text-2xl font-bold">ZYNKUI</h1>
                <nav className="flex gap-6">
                    <Link href="/" className="text-gray-300 hover:text-white">Home</Link>
                    <Link href="/doc" className="text-gray-300 hover:text-white">Docs</Link>
                    <Link href="/components" className="text-gray-300 hover:text-white">Support us</Link>
                    <Link href="/components" className="text-gray-300 bg-purple-700 px-2 rounded hover:text-white">Github</Link>

                </nav>
            </div>
        </header>
    );
};

export default Header;
