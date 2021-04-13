import React, { useRef, useState, memo } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

// components
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import Button from '../../components/Button1';

// redux
import saga from './redux/saga';
import reducer from './redux/reducer';
import { upload } from './redux/actions';

// utils

// selectors
import { makeSelectRequesting } from './redux/selectors';

// styles
import Container from './style';

// constants
const key = 'upload';

function PDFtoJPG({ onSubmitForm }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const docInput = useRef(null);

  const [imageUpload, setImageUpload] = useState();

  const handleUpload = e => {
    setImageUpload(e.target.files[0]);
  };

  const handleOnSubmit = () => {
    const formData = new FormData();
    formData.append('file', imageUpload);
    formData.append('task', localStorage.getItem('task'));
    onSubmitForm(formData);
  };

  return (
    <Container>
      <div>
        <h1 className="header">PDF to JPG</h1>
        <h3 className="sub-header">
          Convert each PDF page into a JPG or extract all images contained in a
          PDF.
        </h3>
        <div className="pt-5">
          <input
            ref={docInput}
            type="file"
            className="d-none"
            onChange={e => handleUpload(e)}
          />
          {imageUpload && <p className="mb-3 image-text">{imageUpload.name}</p>}
          <Button
            text="Select a File"
            variant="primary"
            className="m-auto"
            onClick={() => docInput.current.click()}
          />
        </div>
        {imageUpload && (
          <div className="mt-3">
            <Button
            text="Convert"
            variant="primary"
            className="m-auto"
            onClick={() => handleOnSubmit()}
          />
          </div>
        )}
      </div>
    </Container>
  );
}

const mapStateToProps = createStructuredSelector({
  requesting: makeSelectRequesting(),
});

export const mapDispatchToProps = dispatch => ({
  onSubmitForm: data => dispatch(upload(data)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(PDFtoJPG);
