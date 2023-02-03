import { HeaderBar } from './styles/Header';
import { HeaderList } from './styles/HeaderList';
import { HeaderListContent } from './styles/HeaderListContent';
import { HeaderMenu } from './styles/HeaderMenu';
import { HeaderNavigate } from './styles/HeaderNavigate';

export default function Header() {
  return (
    <HeaderBar>
      <HeaderMenu>
        <HeaderNavigate>
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
        </HeaderNavigate>
        <HeaderNavigate>
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
        </HeaderNavigate>
      </HeaderMenu>
    </HeaderBar>
  );
}
