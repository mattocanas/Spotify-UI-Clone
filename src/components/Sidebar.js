import React from "react";
import "../styles/Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useStateProviderValue } from "../state/StateProvider";

function Sidebar() {
  const [{ playlists }, dispatch] = useStateProviderValue();

  return (
    <div className='sidebar'>
      <img
        className='sidebar__logo'
        src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg'
        alt='logo'
      />
      <SidebarOption Icon={HomeIcon} option='Home' />
      <SidebarOption Icon={SearchIcon} option='Search' />
      <SidebarOption Icon={LibraryMusicIcon} option='Your Library' />
      <br />
      <strong className='sidebar__title'>Playlists</strong>
      <hr />
      {playlists?.items?.map((playlist) => (
        <SidebarOption option={playlist.name} />
      ))}
    </div>
  );
}

export default Sidebar;
