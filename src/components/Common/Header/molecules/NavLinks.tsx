import { usePathname, useRouter } from 'next/navigation';
import NavLink from '../atoms/NavLink';
import ProfileImage from '../atoms/ProfileImage';
import TestProfileImg from '@/assets/png/testProfileImg.png';

interface Props {
  role: 'student' | 'admin';
}

const NavLinks = ({ role }: Props) => {
  const route = useRouter();
  const path = usePathname();

  const navItems = [
    { path: '/myClub', text: '내 동아리', role: 'student' },
    { path: '/community', text: '커뮤니티', role: 'student' },
    { path: '/notice', text: '공지사항', role: 'all' },
  ];

  return (
    <div className="flex items-center gap-12 mobile:hidden">
      {navItems
        .filter((item) => item.role === role || item.role === 'all')
        .map((item) => (
          <NavLink
            key={item.text}
            current={path === item.path}
            onClick={() => route.push(item.path)}
            text={item.text}
          />
        ))}
      <ProfileImage src={TestProfileImg} />
    </div>
  );
};

export default NavLinks;
