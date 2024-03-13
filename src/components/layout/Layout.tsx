import { useReactiveVar } from '@apollo/client';
import { Outlet } from 'react-router-dom';
import { Header } from '../../page/Home/header/header';
import { authVar } from '../../stores/authstore';
import { routeVar } from '../../stores/route-info-store';

//디프레스트
function Layout() {
  const isLoggedIn = useReactiveVar(authVar).isLogin;
  const routeInfo = useReactiveVar(routeVar);
  return ( //scroll_container 스크롤 보이게..
    <div className='h-full'>
      {/* {isLoggedIn && routeInfo.header.isVisible && <Header />} */}
      <main className='h-full'>
        <Outlet />
      </main>
     
    </div>
  );
}

export default Layout;
