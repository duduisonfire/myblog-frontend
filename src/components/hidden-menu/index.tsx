import { HiddenHeaderList } from '../hidden-menu/styles/HiddenHeaderList';
import { HiddenHeaderListContent } from '../hidden-menu/styles/HiddenHeaderListContent';
import { HiddenHeaderContainer } from '../hidden-menu/styles/HiddenHeaderContainer';
import { HiddenHeaderMenu } from './styles/HiddenHeaderMenu';

export default function HiddenMenu() {
  return (
    <HiddenHeaderContainer id="hidden-menu">
      <HiddenHeaderMenu>
        <HiddenHeaderList>
          <li>
            <HiddenHeaderListContent href="#">Home</HiddenHeaderListContent>
          </li>
          <li>
            <HiddenHeaderListContent href="#">Meus Projetos</HiddenHeaderListContent>
          </li>
          <li>
            <HiddenHeaderListContent href="#">Sobre Mim</HiddenHeaderListContent>
          </li>
        </HiddenHeaderList>
      </HiddenHeaderMenu>
    </HiddenHeaderContainer>
  );
}
