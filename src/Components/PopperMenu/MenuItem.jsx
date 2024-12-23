import Button from '~/Components/Button/Button';
import styles from './PopperMenu.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
const MenuItem = ({ data, onClick }) => {
    const classes = cx('menuItem', {
        separate: data.separate,
    });
    return (
        <Button className={classes} leftIcon={data.icon} to={data.to} onClick={onClick}>
            {data.title}
        </Button>
    );
};

export default MenuItem;
