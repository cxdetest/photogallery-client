import React, { useState, useContext, useCallback } from 'react';
import { MdDeleteOutline } from 'react-icons/md';
import { RxUpdate } from 'react-icons/rx';
import { deletePhoto } from '../utils';
import { Context } from '../context/ModalContext';
import axios from 'axios';

const Home = () => {
  const [gallery, setGallery] = useState([]);
  const { showModal, setShowModal, setID } = useContext(Context);
  const getData = useCallback(() => {
    axios.get('http://localhost:5417/api/').then((res) => setGallery(res.data));
  }, []);

  getData();
  return (
    <>
      <h2>Photo Gallery</h2>
      <section className='gallery'>
        {gallery.map((photo) => (
          <article key={photo._id} className='card'>
            <img src={photo.image.url} alt={photo.title} />
            <span className='info'>
              <h2>{photo.title}</h2>
              <p>{photo.description}</p>
              <span className='flex-container'>
                <RxUpdate
                  onClick={() => {
                    setID(photo._id);
                    setShowModal(!showModal);
                  }}
                />
                <MdDeleteOutline onClick={() => deletePhoto(photo._id)} />
              </span>
            </span>
          </article>
        ))}
      </section>
    </>
  );
};

export default Home;
