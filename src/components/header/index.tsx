import { HeaderBar } from './styles/Header';
import { HeaderList } from './styles/HeaderList';
import { HeaderListContent } from './styles/HeaderListContent';
import { HeaderContainer } from './styles/HeaderContainer';
import { HeaderMenu } from './styles/HeaderMenu';
import HiddenMenu from '../hidden-menu';

export default function Header() {
  const showHiddenMenu = () => {
    const hiddenMenu = document.querySelector('#hidden-menu');

    if (hiddenMenu?.classList.contains('hidden')) {
      hiddenMenu.classList.remove('hidden');
      hiddenMenu.classList.add('flex');
      return;
    }

    if (hiddenMenu?.classList.contains('flex')) {
      hiddenMenu.classList.remove('flex');
      hiddenMenu.classList.add('hidden');
      return;
    }
  };

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
              <HeaderListContent onClick={showHiddenMenu} className="text-2xl" href="#">
                <i className="lni lni-menu"></i>
              </HeaderListContent>
            </li>
          </HeaderList>
        </HeaderMenu>
      </HeaderContainer>
      <HiddenMenu />
    </HeaderBar>
  );
}
