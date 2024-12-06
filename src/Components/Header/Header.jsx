import { images } from '~/assets/images/index.js';
import styles from './Header.module.scss';
import Popper from '~/Components/Popper/Popper';

import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
// Thư viện Tippy] giúp hover vào hiện ra phần tử.
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { useState } from 'react';
import { useEffect } from 'react';
import AccountItem from '../AccountItem/AccountItem';

const cx = classNames.bind(styles);
const Header = () => {
 const [searchResult, setSearchResult] = useState([]);

 useEffect(() => {
  setTimeout(() => {
   setSearchResult([]);
  }, 0);
 }, []);

 return (
  <header className={cx('wrapper')}>
   <div className={cx('inner')}>
    <div className={cx('logo')}>
     <img src={images.logo} alt="tiktok" />
    </div>
    {/* Search */}
    <Tippy
     // visible Dk để hiện elements.
     visible={searchResult.length > 0}
     // interactive Cho phép active vào element.
     interactive
     render={(attrs) => (
      <div className={cx('searchResult')} tabIndex="-1" {...attrs}>
       <Popper>
        <h4 className={cx('searchTitle')}>Accounts</h4>
        <AccountItem />
        <AccountItem />
        <AccountItem />
       </Popper>
      </div>
     )}
    >
     <div className={cx('search')}>
      <input placeholder="Search accounts and video..." spellCheck={false} />

      <button className={cx('clear')}>
       <FontAwesomeIcon icon={faCircleXmark} />
      </button>

      <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

      <button className={cx('searchBtn')}>
       <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
     </div>
    </Tippy>
    {/* Actions */}
    <div className={cx('actions')}></div>
   </div>
  </header>
 );
};

export default Header;
