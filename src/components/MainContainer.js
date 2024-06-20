import React from 'react';
import VideoContainer from './VideoContainer';
import ButtonList from './ButtonList';



const MainContainer = () => {
  
  return (
    <div className="main-ct overflow-x-auto">
      <ButtonList />
      <VideoContainer />
    </div>
  )
}

export default MainContainer