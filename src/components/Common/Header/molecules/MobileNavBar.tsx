import { usePathname, useRouter } from 'next/navigation';
import { Club, Community, Home, Notice, PersonRound } from '@/assets/icons';

const navItems = [
  { path: '/', icon: Home },
  { path: '/myClub', icon: Club },
  { path: '/community', icon: Community },
  { path: '/notice', icon: Notice },
  { path: '/profile', icon: PersonRound },
];

export const MobileNavBar = () => {
  const route = useRouter();
  const currentPath = usePathname();

  return (
    <nav className="hidden mobile:fixed mobile:bottom-0 mobile:left-0 mobile:flex mobile:w-full mobile:justify-between mobile:bg-black mobile:px-5">
      {navItems.map(({ path, icon: Icon }) => (
        <button
          key={path}
          onClick={() => route.push(path)}
          className="px-5 py-4 focus:outline-none"
        >
          <Icon current={currentPath === path} />
        </button>
      ))}
    </nav>
  );
};
