import { images } from '~/assets/images/index.js';
import styles from './Header.module.scss';
import Popper from '~/Components/Popper/Popper';
import AccountItem from '../AccountItem/AccountItem';
import Button from '../Button/Button';
import PopperMenu from '../PopperMenu/PopperMenu';

import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowRightToBracket,
    faCircleQuestion,
    faCircleXmark,
    faCloudArrowUp,
    faEarthAmericas,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faMagnifyingGlass,
    faSpinner,
    faUserTie,
} from '@fortawesome/free-solid-svg-icons';
// Thư viện Tippy] giúp hover vào hiện ra phần tử.
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { useState, useEffect } from 'react';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);
// Note: quy ước thằng nào có children thì thằng đó có cấp hai.
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAmericas} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'Language',
                    title: 'English',
                    children: {
                        title: 'Language',
                        data: [
                            {
                                type: 'Language1',
                                code: 'en1',
                                title: 'English1',
                            },
                            {
                                type: 'Language1',
                                code: 'vi1',
                                title: 'Tiếng Việt1',
                            },
                        ],
                    },
                },
                {
                    type: 'Language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

const Header = () => {
    const [searchResult, setSearchResult] = useState([]);
    const currentUser = true;

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);

    // Handle Logic:
    const handleMenuOnChange = (menuItem) => {
        switch (menuItem.type) {
            case 'languages':
                // Handle Change Language.
                break;
            default:
        }
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUserTie}  />,
            title: 'View profile',
            to: '/@hoaa',
        },
        {
            icon: <FontAwesomeIcon icon={faTiktok} />,
            title: 'Get coins',
            to: '/coins',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faArrowRightToBracket} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },

    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* Logo  */}
                <div className={cx('logo')}>
                    <img src={images.logo} alt="tiktok" />
                </div>

                {/* Search */}
                <HeadlessTippy
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
                </HeadlessTippy>

                {/* Actions */}

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy content="Upload video" placement="bottom" delay={[0, 200]}>
                                <button className={cx('actionBtn')}>
                                    <FontAwesomeIcon icon={faCloudArrowUp} />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <PopperMenu visible width="224px" items={currentUser ? userMenu :MENU_ITEMS} onChange={handleMenuOnChange}>
                        {currentUser ? (
                            <img
                                className={cx('userAvatar')}
                                alt="NguyenA"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8S3I6KP510EXnPjyEhheLidDuiLGXakMu5g&s"
                            />
                        ) : (
                            <button className={cx('moreBtn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </PopperMenu>
                </div>
            </div>
        </header>
    );
};

export default Header;
