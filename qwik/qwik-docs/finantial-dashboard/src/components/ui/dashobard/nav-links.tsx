import { component$ } from "@builder.io/qwik";
import { HiDocumentDuplicateOutline, HiHomeOutline, HiUserGroupOutline } from "@qwikest/icons/heroicons";

const links = [
    { name:'Home', href:'/dashobard', icon: HiHomeOutline },
    { name:'Invoices', href:'/dashobard/invoices', icon: HiDocumentDuplicateOutline },
    { name:'Customers', href:'/dashobard/customers', icon: HiUserGroupOutline },
]


export const NavLinks = component$(() => {
    return (
      <>
        {links.map((link) => {
          const LinkIcon = link.icon;
          return (
            <a
              key={link.name}
              href={link.href}
              class="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
            >
              <LinkIcon class="w-6" />
              <p class="hidden md:block">{link.name}</p>
            </a>
          );
        })}
      </>
    );
  });