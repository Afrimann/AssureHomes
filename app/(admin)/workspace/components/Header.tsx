'use client'
import ProfileDropdown from "@/app/components/general/ProfileDropDown";
import { Menu } from "lucide-react";
import { useSidebar } from "../context/SidebarContext";

interface Props {
    pageTitle: string
}
export default function Header({ pageTitle }: Props) {
    const { toggleSidebar } = useSidebar();
    return (
        <div className="top-0 z-40 sticky bg-white shadow-sm px-6 py-4 w-full">
            <div className='flex justify-between items-center gap-4'>
                <h2 className='font-semibold text-[18px] md:text-[20px]'>{pageTitle}</h2>
                <div className='flex items-center gap-4'>
                    <div className='shadow-sm rounded-full'>
                        <ProfileDropdown />
                    </div>
                    <button
                        onClick={toggleSidebar}
                        className="p-2 rounded-lg hover:bg-gray-100 md:hidden"
                    >
                        <Menu className="h-6 w-6 text-gray-600" />
                    </button>
                </div>
            </div>
        </div>
    )
}
