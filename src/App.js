import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import { Outlet } from 'react-router-dom';
import { fetchNewAlbum, fetchTopAlbum, fetchSongs } from './API/Api'
function App() {
  const [data, setData] = useState({});

  const generateData = (key, source) => {
    source().then((data) => {
      setData((prevData) => {
        return { ...prevData, [key]: data }
      })
    })
  }
  useEffect(() => {
    generateData("topAlbums", fetchTopAlbum)
    generateData("newAlbums", fetchNewAlbum)
    generateData("songs", fetchSongs)
  }, [])

  const { topAlbums = [], newAlbums = [], songs = [] } = data;
  return (
    <>
      <Navbar searchData={[...topAlbums, ...newAlbums]} />
      <Outlet context={{ data: { topAlbums, newAlbums, songs } }} />
    </>
  );
}

export default App;
