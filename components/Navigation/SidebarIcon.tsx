import HamburgerIcon from '../../icons/hamburger.svg';
import CloseIcon from '../../icons/close.svg';

interface IProps {
  open: () => void;
  isOpen: boolean;
}

const SidebarIcon: React.FC<IProps> = (props) => {
  return (
    <button
      onClick={props.open}
      className="xl:hidden fill-current text-white bg-gray-900 z-20 fixed bottom-10 right-10 h-16 w-16 flex items-center justify-center rounded-full"
    >
      {props.isOpen ? <CloseIcon /> : <HamburgerIcon />}
    </button>
  );
};

export default SidebarIcon;
