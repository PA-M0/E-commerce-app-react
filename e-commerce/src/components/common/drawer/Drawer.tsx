import * as React from 'react';
import Cart from '../cart/Cart.tsx';
import styles from './Drawer.module.scss';

enum DrawerDirection {
  Left = 'Left',
  Right = 'Right',
}

type Props = {
  isOpen: boolean;
  children: React.ReactNode;
  direction?: DrawerDirection;
  onClose: () => void;
};

const Drawer = ({
  isOpen,
  children,
  direction = DrawerDirection.Right,
  onClose,
}: Props) => {
  const drawerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleClickOutside = (event: MouseEvent) => {
    if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  const classNames = `${styles.Drawer} ${styles[direction]} ${
    isOpen ? styles.Open : ''
  }`;

  return (
    <div className={classNames} ref={drawerRef}>
      <div className={styles.Close} onClick={onClose}>
        X
      </div>
      <div className={styles.Content}>
        <Cart />
      </div>
    </div>
  );
};

export { Drawer, DrawerDirection };
