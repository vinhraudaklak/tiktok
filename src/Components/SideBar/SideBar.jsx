import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles)

const SideBar = () => {
  return (
    <aside className={cx('wrapper')}>
      <h2>Side bar</h2>
    </aside>
  )
}

export default SideBar