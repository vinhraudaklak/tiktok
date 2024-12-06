import styles from './AccountItem.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles) 
const AccountItem = () => {
  return (
    <div className={cx('wrapper')}>
      <img className={cx('avatar')} src="https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/eca157e49c7078d80f4b2fcf3c9f8b67.jpeg?lk3s=a5d48078&nonce=63065&refresh_token=02c8631101cda546e424388df8278ea1&x-expires=1733644800&x-signature=8o5x8lAXEQMoL%2FXUqpRdXCOl%2B58%3D&shp=a5d48078&shcp=81f88b70" alt="Hooa" />
      
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>Nguyeen Vinh</span>
          <FontAwesomeIcon className={cx('checkIcon')} icon={faCircleCheck} />
        </h4>
        <span className={cx('userName')}>Ng.VInh@i</span>
      </div>
    </div>
  )
}

export default AccountItem