import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from './styles'

export function Header() {
  return (
    <Container>
      <Profile to="/profile">
        <img
          src="https://avatars.githubusercontent.com/u/116025325?v=4"
          alt="Foto do usuário"
        />

        <div>
          <span>Bem-vindo</span>
          <strong>Christian Oliveira</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}