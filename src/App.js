import Head from "./components/Head";
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import Body from "./components/Body";
import "./App.css";
import { Provider } from "react-redux";
import store from "./utils/store";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import Random from "./components/Random";

const appRouter = createBrowserRouter([
  {
  path: '/',
  element:  <Body />,
  children: [
    {
      path:'/',
      element: <MainContainer />
    },
    {
      path: 'watch',
      element: <WatchPage />
    },
    {
      path: 'random',
      element: <Random />
    }
  ]
}

])
function App() {
  return (
    <Provider store={store}>
    
    <div>
    <Head />
    <RouterProvider router={appRouter}></RouterProvider>
    {/* <Body /> */}
   </div>
    
   </Provider>
  );
}

export default App;