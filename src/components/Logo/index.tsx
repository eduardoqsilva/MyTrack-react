import { LogoWrapper } from './logo.styled'
import logoText from '../../assets/logo/logoText.svg'
import { Link } from 'react-router-dom'

export function Logo() {
  return (
    <LogoWrapper>
      <Link to="/">
        <img src={logoText} />
      </Link>
    </LogoWrapper>
  )
}