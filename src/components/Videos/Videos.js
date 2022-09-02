import React from 'react'
import { Page, Frame, VideoContainer, AspectRatio } from './Videos.styles.js';

let videos = [
  {
    videoName: 'Greener Foot(prints): Road Trip Edition',
    link: 'https://www.youtube.com/embed/hHFNIzP0SUg',
  },
];

function Resume() {

  return (
    <Page>
      {videos.map((video, index) => {
        return (
          <VideoContainer>
            <h3>{video.videoName}</h3>
            <AspectRatio key={index}>
              <Frame
                frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen
                title={video.videoName}
                src={video.link}
              ></Frame>
            </AspectRatio>
          </VideoContainer>
        )
      })}
    </Page>
  );
}

export default Resume;
