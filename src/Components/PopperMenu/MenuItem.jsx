import Button from "~/Components/Button/Button"
import styles from './PopperMenu.module.scss'
import classNames from "classnames/bind"

const cx = classNames.bind(styles)
const MenuItem = ({ data }) => {
  
  return (
    <Button 
      className={cx('menuItem')}
      leftIcon={data.icon}
      to={data.to}

    >
      {data.title}
    </Button>
  )
}

export default MenuItem