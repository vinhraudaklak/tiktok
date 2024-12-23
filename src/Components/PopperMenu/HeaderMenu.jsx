import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind'

import styles from './PopperMenu.module.scss'

const cx = classNames.bind(styles);
const HeaderMenu = ({ title, onBack}) => {
  return (
    <header className={cx('header')}>
      <button
        className={cx('backBtn')}
        onClick={onBack}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <h4 className={cx('headerTitle')}>{title}</h4>
    </header>
  )
}

export default HeaderMenu