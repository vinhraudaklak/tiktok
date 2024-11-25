import Header from '~/Components/Header/Header'

const OnlyHeader = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="Content">
          {children}
        </div>
      </div>
    </div>
  )
}

export default OnlyHeader