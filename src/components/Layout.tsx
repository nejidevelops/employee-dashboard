import { Outlet } from 'react-router-dom';
import TopAppBar from './TopAppBar';
import SideNavBar from './SideNavBar';
import MobileNav from './MobileNav';

export default function Layout() {
  return (
    <div className="bg-[#f8faff] min-h-screen">
      <TopAppBar />
      <div className="flex">
        <SideNavBar />
        <main className="md:ml-64 flex-1 p-8 pb-24 md:pb-8">
          <Outlet />
        </main>
      </div>
      <MobileNav />
    </div>
  );
}
