'use client'
import ProfileDropDown from '@/app/components/pages/vendor-dashboard/ProfileDropDown'
import NotificationDropdown from '@/app/components/pages/vendor-dashboard/NotificationDropdown'
import Image from 'next/image'
import { Menu } from 'lucide-react'
import { useSidebar } from '@/app/(vendor)/context/SidebarContext'
export default function HeadBanner() {
  const { toggleSidebar } = useSidebar()
  return (
    <div className="top-0 z-40 sticky bg-white shadow-sm px-6 py-4 w-full">
      {/* welcome user */}
      <div className='flex justify-between items-center gap-4'>
        <h2 className='font-semibold text-[18px] md:text-[20px] truncate'>Analytics & Insight</h2>
        {/* icons */}
        <div className='flex flex-row-reverse items-center gap-4 shrink-0'>
          <button
            onClick={toggleSidebar}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 shrink-0"
          >
            <Menu className="h-6 w-6 text-gray-600" />
          </button>
          <div className='shadow-sm rounded-full shrink-0'>
            <ProfileDropDown />
          </div>
          <div className='shadow-sm rounded-full shrink-0'>
            <NotificationDropdown />
          </div>
        </div>
      </div>
    </div>
  )
}
