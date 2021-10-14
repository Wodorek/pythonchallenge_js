import NavMenu from '../Navigation/NavMenu';

const Layout: React.FC = (props) => {
  return (
    <div className="relative">
      <NavMenu />
      <div className="bg-red-200 w-4/5 mx-auto">{props.children}</div>
    </div>
  );
};

export default Layout;
