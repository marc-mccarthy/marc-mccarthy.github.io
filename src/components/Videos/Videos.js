import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Page, Frame, VideoContainer, AspectRatio } from './Videos.styles.js';
import LoadingBar from '../LoadingBar/LoadingBar';

function Resume() {
  const dispatch = useDispatch();

  const videos = useSelector(store => store.videosReducer);

  useEffect(() => {
    dispatch({ type: 'GET_VIDEOS_SAGA' });
  }, []);

  return (
    <div>
      {videos.length === 0 ? (
        <LoadingBar />
      ) : (
      <Page>
        {videos.map((video, index) => {
          return (
            <VideoContainer key={index}>
              <h3>{video.video_name}</h3>
              <AspectRatio key={index}>
                <Frame
                  frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen
                  title={video.video_name}
                  src={video.link}
                ></Frame>
              </AspectRatio>
            </VideoContainer>
          )
        })}
      </Page>
      )}
    </div>
  );
}

export default Resume;
