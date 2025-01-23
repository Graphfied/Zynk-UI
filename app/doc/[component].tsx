// import { useRouter } from 'next/router';
// import Link from 'next/link';
// import Header from '../components/header';

// const componentsList = [
//     { name: '3D Card Effect', slug: '3d-card-effect' },
//     { name: '3D Pin', slug: '3d-pin' },
//     { name: 'Animated Modal', slug: 'animated-modal' },
//     { name: 'Button Component', slug: 'button' },
// ];

// const ComponentPage = () => {
//     const router = useRouter();
//     const { component } = router.query;

//     return (
//         <div className="min-h-screen bg-black text-gray-200">
//             <Header />
//             <div className="flex">
//                 {/* Left Sidebar */}
//                 <aside className="w-80 border-r border-gray-800 p-6">
//                     <h1 className="text-2xl font-bold mb-6">NextOmniUI</h1>
//                     <nav className="space-y-4">
//                         {componentsList.map((comp) => (
//                             <Link key={comp.slug} href={`/doc/${comp.slug}`} className="block text-gray-400 hover:text-white">
//                                 {comp.name}
//                             </Link>
//                         ))}
//                     </nav>
//                 </aside>

//                 {/* Right Content */}
//                 <main className="flex-1 p-10">
//                     <h2 className="text-3xl font-semibold capitalize">{component?.toString().replace('-', ' ')}</h2>
//                     {component === 'button' ? (
//                         <div className="mt-6">
//                             <button className="px-6 py-3 bg-blue-600 text-white rounded-md shadow-lg hover:bg-blue-500">
//                                 Click Me
//                             </button>
//                             <pre className="mt-4 bg-gray-800 p-4 rounded text-gray-200">
//                                 {`<button className="px-6 py-3 bg-blue-600 text-white rounded-md shadow-lg hover:bg-blue-500">
//   Click Me
// </button>`}
//                             </pre>
//                         </div>
//                     ) : (
//                         <p className="mt-4">This is the documentation for the <b>{component}</b> component.</p>
//                     )}
//                 </main>
//             </div>
//         </div>
//     );
// };

// export default ComponentPage;
