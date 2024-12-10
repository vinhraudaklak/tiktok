import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import styles from './PopperMenu.module.scss';
import Popper from '../Popper/Popper';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);

const PopperMenu = ({ children, width, items = [] }) => {
    const renderItem = () => {
        return items.map((item, index) => <MenuItem key={index} data={item} />);
    };

    return (
        <Tippy
             delay={[0, 700]}
            // interactive Cho phép active vào element.
            interactive
            // Xác định vị trí cho tippy.
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menuList')} tabIndex="-1" {...attrs} style={width ? { width: width } : {}}>
                    <Popper className={cx('wrapPopper')}>{renderItem()}</Popper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
};

export default PopperMenu;
