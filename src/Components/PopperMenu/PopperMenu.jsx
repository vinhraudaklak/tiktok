import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import styles from './PopperMenu.module.scss';
import Popper from '../Popper/Popper';
import MenuItem from './MenuItem';
import HeaderMenu from './HeaderMenu';
import { useState } from 'react';

const cx = classNames.bind(styles);
const defaultFn = () => {};

const PopperMenu = ({ children, width, items = [], onChange = defaultFn }) => {
    const [history, setHistory] = useState([{ data: items }]);
    // Lấy phần tử cuối mảng:
    const current = history[history.length - 1];

    const renderItem = () => {
        return current.data.map((item, index) => {
            // !! => Chuyển quả kiểu dữ liệu boalean:
            const isParent = !!item.children;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            // Push thêm thì xí mới quay lại được.
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    return (
        <Tippy
            // Xác định vị trí.
            offset={[20, 15]}
            // tg ẩn
            delay={[0, 700]}
            // interactive Cho phép active vào element.
            interactive
            // Xác định vị trí cho tippy.
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menuList')} tabIndex="-1" {...attrs} style={width ? { width: width } : {}}>
                    <Popper className={cx('wrapPopper')}>
                        {history.length > 1 && (
                            <HeaderMenu
                                title="Language"
                                onBack={() => {
                                    setHistory((prev) => prev.slice(0, prev.length - 1));
                                }}
                            />
                        )}
                        {renderItem()}
                    </Popper>
                </div>
            )}
            // Khi ẩn đi tự về trang menu 1.
            onHidden={() => setHistory((prev) => prev.slice(0, 1))}
        >
            {children}
        </Tippy>
    );
};

export default PopperMenu;
