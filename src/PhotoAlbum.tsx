import React from "react";
import { Link } from "react-router-dom";

type Props = {
  ids:string[];
}

const PhotoAlbum:React.FC<Props> = ({ids}) => {
  return (
    <>
      <h2>Fotoalbum</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo praesentium nostrum similique ipsum, beatae dolore! Cumque dolore saepe neque labore quis sed error, vitae nostrum assumenda sit nemo sint quo!</p>
        { ids.map(id => (
          <Link key={id} to={id}>
            <img src={`https://picsum.photos/id/${id}/460/240`} alt="" />
          </Link>
      ))}
    </>
  );
}

export default PhotoAlbum;
