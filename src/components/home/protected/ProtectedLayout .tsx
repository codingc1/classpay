import { useReactiveVar } from '@apollo/client';
import { Navigate,  useLocation } from 'react-router-dom';
import { LOGIN_ROUTE_NAME, PAY_HOME } from '../../../routers/route-name-constants';
import { authVar } from '../../../stores/authstore';
import Layout from '../../layout/Layout';

//Complete guide to authentication with React Router v6
//https://blog.logrocket.com/complete-guide-authentication-with-react-router-v6/
//안쓰이는중..
function ProtectedLayout () {
  const isLoggedIn = useReactiveVar(authVar).isLogin;
    // const routeInfo = useReactiveVar(routeVar);
    const location = useLocation();
    // HOME과 classPayApp인지 체크
    // const isHome = location.pathname === '/';
    // const isClassPayApp = location.pathname === PAY_HOME;

      if(!isLoggedIn){ //LOGIN_ROUTE_NAME
        return <Navigate to={PAY_HOME} state={{from: location}} replace={true} />;
    }

    
  return (
    <Layout />
    // <div>
    //   {routeInfo.header.headerUpper && <HeaderUpper />}
    //   {isLoggedIn && routeInfo.header.homeMenu && <HeaderMenu /> }
    //   <main>
    //     <Outlet />
    //   </main>
    //   {routeInfo.header.footer && <Footer />}
    // </div>
  );
}

export default ProtectedLayout ;
