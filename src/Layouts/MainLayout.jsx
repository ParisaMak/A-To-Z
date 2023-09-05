
import { MultiLevelMenu, Navbar, Footer } from '../pages';

const MainLayout = ({ children }) => (
  <div className='w-full h-full flex flex-col ' >
    <Navbar />
    <MultiLevelMenu />
    <div className='w-full flex flex-1'>
      {children}
    </div>
    <Footer />
  </div>
);

export default MainLayout;