import getAllSolutionsIds from '../../lib/getAllSolutionsIds';
import NavButton from './NavButton';

interface IProps {
  isOpen: boolean;
}

const Sidebar: React.FC<IProps> = (props) => {
  return (
    <aside className="">
      <div
        className={`fixed xl:sticky top-10 mt-10 left-10 h-sidebar w-60 overflow-y-scroll bg-purple-400 z-10 xl:block ${
          props.isOpen ? '' : 'hidden'
        }`}
      >
        {getAllSolutionsIds().map((solution, idx) => {
          return <NavButton key={idx} id={solution.params.solution} />;
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
