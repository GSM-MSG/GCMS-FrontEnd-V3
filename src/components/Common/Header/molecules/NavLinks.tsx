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

  return (
    <div className="flex items-center gap-12 mobile:hidden">
      {role === 'student' && (
        <>
          <NavLink
            current={path === '/myClub'}
            onClick={() => route.push('/myClub')}
            text="내 동아리"
          />
          <NavLink
            current={path === '/community'}
            onClick={() => route.push('/community')}
            text="커뮤니티"
          />
        </>
      )}
      <NavLink
        current={path === '/notice'}
        onClick={() => route.push('/notice')}
        text="공지사항"
      />
      <ProfileImage src={TestProfileImg} />
    </div>
  );
};

export default NavLinks;
