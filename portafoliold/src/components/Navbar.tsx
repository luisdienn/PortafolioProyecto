import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useEffect } from "react";
import GoogleTranslateWidget from './GoogleTranslateWidget';

const navigation = [
    { name: 'Inicio', href: '#inicio', current: false },
    { name: 'Sobre Mí', href: '#sobremi', current: false },
    { name: 'Proyectos', href: '#proyectos', current: false },
    { name: 'Habilidades', href: '#habilidades', current: false },
    { name: 'Contacto', href: '#contacto', current: false },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

function useSmoothScrollWithOffset(offset = 70) {
    useEffect(() => {
        const handleClick = (e: any) => {
            const anchor = e.target.closest('a[href^="#"]');
            if (anchor) {
                const id = anchor.getAttribute('href').slice(1);
                const el = document.getElementById(id);
                if (el) {
                    e.preventDefault();
                    const y = el.getBoundingClientRect().top + window.scrollY - offset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                }
            }
        };
        document.addEventListener('click', handleClick);
        return () => document.removeEventListener('click', handleClick);
    }, [offset]);
}

export default function Navbar() {
    useSmoothScrollWithOffset(70);

    return (
        <Disclosure as="nav" className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-sm">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex shrink-0 items-center">
                            <img
                                alt="Your Company"
                                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                                className="h-8 w-auto"
                            />
                        </div>
                        <div className="hidden sm:ml-6 sm:block sm:flex-1 sm:flex sm:justify-end">
                            <div className="flex items-center space-x-4">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        aria-current={item.current ? 'page' : undefined}
                                        className={classNames(
                                            item.current
                                                ? 'font-dm-sans hover:bg-gray-700 text-white'
                                                : 'font-dm-sans text-gray-300 hover:bg-gray-700 hover:text-white',
                                            'px-3 py-2 text-sm font-medium'
                                        )}
                                    >
                                        {item.name}
                                    </a>
                                ))}

                                {/* Widget envuelto en contenedor Tailwind */}
                                <div>
                                    <div className=" pt-1 pl-2 ">
                                        <GoogleTranslateWidget />
                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button*/}
                        <DisclosureButton className="group relative inline-flex items-center justify-center p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
                            <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
                        </DisclosureButton>
                    </div>



                </div>
            </div>

            <DisclosurePanel className="sm:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3">
                    {navigation.map((item) => (
                        <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            aria-current={item.current ? 'page' : undefined}
                            className={classNames(
                                item.current ? 'font-dm-sans hover:bg-gray-700 text-white' : 'font-dm-sans text-gray-300 hover:bg-gray-700 hover:text-white',
                                'block px-3 py-2 text-base font-medium',
                            )}
                        >
                            {item.name}

                        </DisclosureButton>

                    ))}
                </div>
            </DisclosurePanel>
        </Disclosure>
    )
}
