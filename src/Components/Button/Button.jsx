import styles from './Button.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
const Button = ({
    to,
    href,
    onClick,
    className,
    leftIcon,
    rightIcon,
    primary = false,
    outline = false,
    rounded = false,
    text = false,
    disabled = false,
    small = false,
    large = false,
    children,
    ...passProps
}) => {
    let Component = 'button';
    const props = {
        onClick,
        ...passProps,
    };
    // Tăng tính bảo mật: Clear event listener when btn is disabled.
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Component = Link;
    } else if (href) {
        props.href = href;
        Component = 'a';
    }

    const classes = cx('wrapper', {
        [className]: className,
        leftIcon,
        rightIcon,
        primary,
        outline,
        rounded,
        text,
        disabled,
        small,
        large,
    });

    return (
        <Component className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}

        </Component>
    );
};

export default Button;
