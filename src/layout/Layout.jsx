import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BsUpload } from 'react-icons/bs';
import { Context } from '../context/ModalContext';
import Modal from '../components/Modal';

const Layout = ({ children }) => {
  const { showModal, setShowModal, setID } = useContext(Context);

  return (
    <>
      <header>
        <Link to='/'>
          <h1>PG</h1>
        </Link>
        <input type='text' name='search' className='search' />
        <button
          type='button'
          className='btn'
          onClick={() => {
            setShowModal(!showModal);
            setID(null);
          }}
        >
          <BsUpload />
        </button>
      </header>

      <div className='container'>{children}</div>

      {showModal && <Modal />}

      <footer>
        PhotoGallery &copy; {new Date().getFullYear()} | All rights reserved.
      </footer>
    </>
  );
};

export default Layout;
