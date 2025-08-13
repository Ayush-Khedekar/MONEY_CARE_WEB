import Navigations from "./Navigations";

type Props = {
  onLinkClick: (id: string) => void;
  activeSection?: string;
};

const NavBarItems = ({ onLinkClick, activeSection }: Props) => {
  return (
    <ul className="flex flex-col">
      <Navigations onLinkClick={onLinkClick} activeSection={activeSection} />
    </ul>
  );
};

export default NavBarItems;
