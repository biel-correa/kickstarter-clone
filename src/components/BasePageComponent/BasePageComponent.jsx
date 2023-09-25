import Header from '../Header/Header'

export default function BasePageComponent({ children }) {
  return (
    <>
      <Header/>
      <div className="mt-2">
        { children }
      </div>
    </>
  )
}