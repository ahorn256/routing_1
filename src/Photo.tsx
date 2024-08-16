import React from "react";
import { Link, useParams } from "react-router-dom";

const Photo:React.FC = () => {
  const params = useParams();

  return (
    <>
      <h2>Foto</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo praesentium nostrum similique ipsum, beatae dolore! Cumque dolore saepe neque labore quis sed error, vitae nostrum assumenda sit nemo sint quo!</p>    
      <img src={`https://picsum.photos/id/${params.id}/460/240`} alt="" />
      <br/>
      <Link to='..'>Zurück</Link>
    </>
  );
}

export default Photo;
