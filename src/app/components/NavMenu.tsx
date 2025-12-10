"use client"
import React, { useEffect, useState } from "react";
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import deverseLogo from '../assets/deverse-logo.png'
import Image from "next/image";

export default function Nav(props: any) {
const navigationVal = [
    { name: 'Home', href: '#', current: true },
    { name: 'Tech Stacks', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Contact', href: '#', current: false },
    { name: 'Resume', href: 'https://drive.google.com/file/d/1MiOUuX6jgosHpybcmS-0JwdADlJ4QPu6/view?usp=sharing', current: false }
];

    const [navigation, updateNav] = useState(navigationVal);
    const [navVis, setNavVis] = useState(false)
    const [mobMenuVis, setMenuVis] = useState(false)
    function focusOnClicked(itemName: any) {
        const updatedNav = navigation.map(item => ({
            ...item,
            current: item.name === itemName
        }));
        updateNav(updatedNav);
    }

    function classNames(...classes: any) {
        return classes.filter(Boolean).join(' ');
    }

    function getClPos(itemName: string) {
        const element = document.getElementById(itemName);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
    
    useEffect(()=>
    {
        console.log(navVis)
    }, [navVis])
    return (
        <Disclosure as="nav" className="bg-gray-300 dark:bg-slate-400 fixed w-full z-50 top-0">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 dark:bg-slate-800">
                    <div className="relative flex h-16 items-center justify-center">
                            <div className="flex items-start ">
                                <div className="flex-shrink-0 sm:hidden">
                    <div className="absolute left-0 flex items-center sm:hidden top-2">
                    <Disclosure.Button
                    onClick={() => { setNavVis(!navVis) }}
                    className="inline-flex items-center justify-center p-2 text-black hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    >
                    <span className="sr-only">Open main menu</span>
                    {navVis ? (
                        <XMarkIcon className="block h-7 w-7" aria-hidden="true" />
                    ) : (
                        <Bars3Icon className="block h-8 w-8" aria-hidden="true" />
                    )}
                    </Disclosure.Button>
                </div>
                                </div>
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                    {navigation.map((item) => (
                                        item.name === "Resume" ? (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={classNames(
                                                    'text-white hover:bg-gray-700 hover:text-white',
                                                    'px-3 py-2 text-sm font-medium rounded-md cursor-pointer'
                                                )}
                                            >
                                                {item.name}
                                            </a>
                                        ) : (
                                            <a
                                                key={item.name}
                                                onClick={() => { focusOnClicked(item.name); getClPos(item.name) }}
                                                className={classNames(
                                                    item.current ? 'bg-gray-900 text-white' : 'text-white hover:bg-gray-700 hover:text-white',
                                                    'px-3 py-2 text-sm font-medium rounded-md cursor-pointer'
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </a>
                                        )
                                    ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {navVis && <Disclosure.Panel className="sm:hidden">
                        { <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-100">
                            {navigation.map((item) => (
                                <a
                                    //id={item.name}
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => { focusOnClicked(item.name); getClPos(item.name); }}
                                    className={classNames(
                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-500 hover:bg-gray-700 hover:text-white',
                                        'block px-3 py-2 text-base font-medium rounded-md cursor-pointer'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>}
                    </Disclosure.Panel>}
                </>
            )}
        </Disclosure>
    );
}
