import { LogoWrapper } from './logo.styled'
import logoText from '../../assets/logo/logoText.svg'
import { Link, useLocation } from 'react-router-dom'
import { CaretLeft } from '@phosphor-icons/react'

export function Logo() {

  const location = useLocation()

  return (
    <LogoWrapper route={location.pathname !== '/'}>
      <Link className='backToHome' to={"/"}>
        <CaretLeft size={30} color='#ffff'/>
      </Link>
      <Link to="/">
        <img src={logoText} />
      </Link>
    </LogoWrapper>
  )
}