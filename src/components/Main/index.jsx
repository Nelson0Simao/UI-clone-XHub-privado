import React from 'react'
import ListInformation from './../ListInformation'
import VideoCard from './../Cards'
import BoxMoreInfo from './../BoxMoreInfo'
import Description from './../Description'
import Footer from './../Footer'
import BoxRedeSocial from './../BoxRedeSocial'
import './style.scss'

export default function Main(){

  return (
    <div class="main">
        <h1>Vídeos populares Internacionalmente</h1>
    <ListInformation />
    <div class="content-cards">
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
    </div>
     <BoxMoreInfo />
     <Description />
     <Footer />
      <BoxRedeSocial />
    </div>
  )
}
