"use client";

import { Disclosure } from "@headlessui/react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function MobileMenu() {
  return (
    <Disclosure as="nav" className="bg-white border-b border-gray-200 md:hidden">
      {({ open }) => (
        <>
          <div className="flex justify-between items-center p-4">
            <h1 className="text-xl font-bold">UI Lab Studio</h1>
            <Disclosure.Button className="p-2 rounded-md border hover:bg-gray-100">
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Disclosure.Button>
          </div>
          <Disclosure.Panel className="flex flex-col gap-4 p-4 border-t border-gray-200">
            <Link href="/">ホーム</Link>
            <Link href="/blogs">ブログ</Link>
            <Link href="/contact">お問い合わせ</Link>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
