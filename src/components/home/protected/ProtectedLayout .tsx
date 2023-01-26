import { useReactiveVar } from '@apollo/client';
import { Navigate,  useLocation } from 'react-router-dom';
import { LOGIN_ROUTE_NAME } from '../../../routers/route-name-constants';
import { authVar } from '../../../stores/authstore';
import Layout from '../../layout/Layout';

//Complete guide to authentication with React Router v6
//https://blog.logrocket.com/complete-guide-authentication-with-react-router-v6/
function ProtectedLayout () {
  const isLoggedIn = useReactiveVar(authVar).isLogin;
    // const routeInfo = useReactiveVar(routeVar);
    const location = useLocation();
    if(!isLoggedIn){
      return <Navigate to={LOGIN_ROUTE_NAME} state={{from: location}} replace={true} />;
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
