import React, { useContext, useState, useEffect, useCallback } from 'react';
import { Formik, Form, Field } from 'formik';
import { sendPhoto, updatePhoto } from '../utils';
import { Context } from '../context/ModalContext';
import axios from 'axios';

const PhotoForm = () => {
  const [photo, setPhoto] = useState({});
  const { showModal, setShowModal, id, setID } = useContext(Context);

  const getData = useCallback(() => {
    axios.get('http://localhost:5417/api/' + id).then((res) => {
      const { title, description, image } = res.data;
      const { url } = image;
      setPhoto({ title, description, url });
    });
  }, [id]);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <Formik
      initialValues={{ title: '', description: '' }}
      onSubmit={(values, actions) => {
        const { title, description } = values;
        id === null
          ? sendPhoto(values)
          : updatePhoto(id, { title, description });
        setShowModal(!showModal);
        actions.resetForm();
        setID(null);
      }}
    >
      {({ setFieldValue }) => (
        <>
          <Form>
            {id !== null && (
              <img
                src={photo.url}
                alt={photo.title}
                onClick={() => setShowModal(!showModal)}
              />
            )}
            <span className='flex-info'>
              <Field
                type='text'
                name='title'
                placeholder='title'
                autoComplete='off'
                required
              />
              <Field
                type='text'
                name='description'
                placeholder='description'
                autoComplete='off'
                required
              />
              {id === null && (
                <input
                  type='file'
                  name='image'
                  onChange={(e) => setFieldValue('image', e.target.files[0])}
                  className='btn'
                  required
                />
              )}
              <button type='submit'>Submit</button>
            </span>
          </Form>
        </>
      )}
    </Formik>
  );
};

export default PhotoForm;
