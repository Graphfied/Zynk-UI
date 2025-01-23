// import Link from 'next/link';
// import { useRouter } from 'next/router';

// const componentsList = [
//     { name: '3D Card Effect', slug: '3d-card-effect' },
//     { name: '3D Pin', slug: '3d-pin' },
// ];

// const DocLayout = ({ children }: { children: React.ReactNode }) => {
//     const router = useRouter();

//     return (
//         <div className="flex min-h-screen bg-black text-gray-200">
//             {/* Left Navigation */}
//             <aside className="w-80 border-r border-gray-800 p-6">
//                 <h1 className="text-2xl font-bold mb-6">NextOmniUI</h1>
//                 <nav className="space-y-4">
//                     {componentsList.map((component) => (
//                         <Link key={component.slug} href={`/doc/${component.slug}`} className={`block text-gray-400 hover:text-white ${router.query.component === component.slug ? 'text-white font-semibold' : ''}`}>
//                             {component.name}
//                             {/* {component.badge && <span className="ml-2 px-2 py-1 bg-green-600 text-xs rounded-md">{component.badge}</span>} */}
//                         </Link>
//                     ))}
//                 </nav>
//             </aside>

//             {/* Right Side Content */}
//             <main className="flex-1 p-10">
//                 {children}
//             </main>
//         </div>
//     );
// };

// export default DocLayout;
