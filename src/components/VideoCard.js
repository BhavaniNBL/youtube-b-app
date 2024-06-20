import React from 'react'
// import Button from './Button'

const VideoCard = ({videoInfo}) => {
  // console.log("videoinfo", videoInfo);
  const {snippet, statistics} = videoInfo;
  const {channelTitle, title, thumbnails } = snippet;
  return (
    <div className='p-2 m-2 w-40 shadow-lg rounded-lg'>
       <img className="rounded-lg font-bold " alt="thumbnail" src={thumbnails.medium.url} />
       <ul>
        <li className='font-bold py-2'>{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount}</li>
       </ul>

    </div>
  )
}
export const AdVideoCard = ({videoInfo}) => {
  return  (
  <div className='p-1 m-1 border border-red-900'>
   <VideoCard videoInfo={videoInfo}/>
  </div>
  )

}

export default VideoCard