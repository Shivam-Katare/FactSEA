import styles from '../styles/components/Layout.module.css';
import { useSignOut } from '@nhost/react';
import { useUserId } from '@nhost/react';
import { Link } from 'react-router-dom';
import { Menu } from '@headlessui/react';
import { useQuery } from '@apollo/client';
import { gql } from '@apollo/client';
import { IoIosLogOut } from "react-icons/io";
import { BsPersonCircle } from "react-icons/bs";
import { BsEmojiSmile } from "react-icons/bs";
const GET_USER_QUERY = gql`
  query GetUser($id: uuid!) {
    user(id: $id) {
      id
      email
      displayName
      metadata
      avatarUrl
    }
  }
`

const Layout = () => {
  const id = useUserId();
  const { data } = useQuery(GET_USER_QUERY, {
    variables: { id },
    skip: !id
  })
  const user = data?.user
  const { signOut } = useSignOut()
  const menuItems = [
    {
      label: 'Logout',
      onClick: signOut,
      icon: IoIosLogOut,
    },
  ];

  return (
    <div>
      <Menu as="div" className={styles.menu}>
        <Menu.Button className={styles['menu-button']}>
          <BsPersonCircle className='logo-person' />
        </Menu.Button>
        <Menu.Items className={styles['menu-items-container']}>
          <div className={styles['menu-header']}>
            <BsEmojiSmile className='display-avatar' />
            <div className={styles['user-details']}>
              <span>{user?.displayName}</span>
              <span className={styles['user-email']}>{user?.email}</span>
            </div>
          </div>

          <div className={styles['menu-items']}>
            {menuItems.map(({ label, href, onClick, icon: Icon }) => (
              <div key={label} className={styles['menu-item']}>
                <Menu.Item>
                  {href ? (
                    <Link to={href}>
                      <Icon />
                      <span>{label}</span>
                    </Link>
                  ) : (
                    <button onClick={onClick}>
                      <Icon />
                      <span>{label}</span>
                    </button>
                  )}
                </Menu.Item>
              </div>
            ))}
          </div>
        </Menu.Items>
      </Menu>
    </div>
  );
};

export default Layout;
