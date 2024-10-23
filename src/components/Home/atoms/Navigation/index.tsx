'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigate = () => {
  const pathname = usePathname();

  const navItems = [
    { name: '전공 동아리', shortName: '전공', id: 'major' },
    { name: '자율 동아리', shortName: '자율', id: 'autonomous' },
    { name: '취업 동아리', shortName: '취업', id: 'career' },
    { name: '팀 동아리', shortName: '팀', id: 'team' },
  ];

  return (
    <div className="flex items-center gap-x-7 mobile:gap-x-3">
      {navItems.map((item) => (
        <Link
          key={item.id}
          href={`/${item.id}`}
          className={`text-h3 mobile:rounded-sm mobile:px-5 mobile:py-2 mobile:text-h5 ${
            pathname === `/${item.id}`
              ? 'text-white mobile:bg-white mobile:text-black'
              : 'text-gray-450 mobile:bg-gray-100'
          }`}
        >
          <span
            className="before:content-[attr(data-full-name)] mobile:before:content-[attr(data-short-name)]"
            data-short-name={item.shortName}
            data-full-name={item.name}
          />
        </Link>
      ))}
    </div>
  );
};

export default Navigate;
