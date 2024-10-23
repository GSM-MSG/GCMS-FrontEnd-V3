import { useState } from 'react';
import MenuBar from '../MenuBar';
import { KababMenu } from '@/assets/icons';

const MenuBarButton = () => {
  const [modal, setModal] = useState<boolean>(false);

  return (
    <div className="relative cursor-pointer">
      <div onClick={() => setModal(!modal)}>
        <KababMenu />
      </div>
      {modal && <MenuBar />}
    </div>
  );
};

export default MenuBarButton;
