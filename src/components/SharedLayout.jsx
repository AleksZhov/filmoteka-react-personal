import { Outlet } from 'react-router-dom';
import { Container, Header, Navlink } from './App.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Navlink to="/">Home</Navlink>
          <Navlink to="/movies">Movies</Navlink>
        </nav>
      </Header>
      <Outlet />
    </Container>
  );
};
