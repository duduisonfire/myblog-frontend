import { HeaderBar } from './styles/Header';
import { HeaderList } from './styles/HeaderList';
import { HeaderListContent } from './styles/HeaderListContent';
import { HeaderContainer } from './styles/HeaderContainer';
import { HeaderMenu } from './styles/HeaderMenu';

export default function Header() {
  return (
    <HeaderBar>
      <HeaderContainer>
        <HeaderMenu>
          <HeaderList>
            <li>
              <HeaderListContent className="hidden md:block" href="#">
                Home
              </HeaderListContent>
            </li>
            <li>
              <HeaderListContent className="hidden md:block" href="#">
                Meus Projetos
              </HeaderListContent>
            </li>
            <li>
              <HeaderListContent className="hidden md:block" href="#">
                Sobre Mim
              </HeaderListContent>
            </li>
          </HeaderList>
        </HeaderMenu>
        <HeaderMenu>
          <HeaderList>
            <li>
              <HeaderListContent className="text-2xl" href="#">
                <i className="lni lni-user"></i>
              </HeaderListContent>
            </li>
            <li className="md:hidden">
              <HeaderListContent className="text-2xl" href="#">
                <i className="lni lni-menu"></i>
              </HeaderListContent>
            </li>
          </HeaderList>
        </HeaderMenu>
      </HeaderContainer>
    </HeaderBar>
  );
}