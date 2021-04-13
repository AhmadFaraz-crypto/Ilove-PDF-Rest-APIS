import React, { useRef, useState, memo } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

// components
import Button from '../../components/Button1';
import Input from '../../components/Input';

// redux
import saga from './redux/saga';
import reducer from './redux/reducer';
import { upload } from './redux/actions';

// utils
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';

// selectors
import { makeSelectRequesting } from './redux/selectors';
import { makeSelectfuncRequesting } from '../Home/redux/selectors';

// styles
import Container from './style';

// constants
const key = 'upload';

function UploadFile({ uploadData, funcType, requesting }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const docInput = useRef(null);

  const [imageUpload, setImageUpload] = useState();
  const [websiteUrl, setWebsiteUrl] = useState('');

  const handleOnSubmit = () => {
    const formData = new FormData();
    formData.append('file', imageUpload);
    formData.append('task', localStorage.getItem('task'));
    uploadData(formData);
  };

  const convertHtmltoPdf = () => {
    const formData = new FormData();
    formData.append('cloud_file', websiteUrl);
    formData.append('task', localStorage.getItem('task'));
    uploadData(formData);
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
          {funcType === 'PdftoJpg' ? (
            <div>
              <input
                ref={docInput}
                type="file"
                className="d-none"
                onChange={e => setImageUpload(e.target.files[0])}
                accept="application/pdf"
              />
              {imageUpload && (
                <p className="mb-3 image-text">{imageUpload.name}</p>
              )}
              <Button
                text="Select a File"
                variant="primary"
                className="m-auto"
                onClick={() => docInput.current.click()}
              />
            </div>
          ) : (
            ''
          )}
          {funcType === 'ImagetoPdf' ? (
            <div>
              <input
                ref={docInput}
                type="file"
                className="d-none"
                onChange={e => setImageUpload(e.target.files[0])}
                accept="image/*"
              />
              {imageUpload && (
                <p className="mb-3 image-text">{imageUpload.name}</p>
              )}
              <Button
                text="Select a File"
                variant="primary"
                className="m-auto"
                onClick={() => docInput.current.click()}
              />
            </div>
          ) : (
            ''
          )}
          {funcType === 'htmltoPdf' ? (
            <div>
              <Input
                placeholder="Enter Website Url"
                onChange={e => setWebsiteUrl(e.target.value)}
              />
            </div>
          ) : (
            ''
          )}
        </div>
        {imageUpload && (
          <div className="mt-3">
            <Button
              text="Convert"
              variant="primary"
              className="m-auto"
              onClick={() => handleOnSubmit()}
              loading={requesting}
            />
          </div>
        )}
        {websiteUrl && (
          <div className="mt-3">
            <Button
              text="Convert"
              variant="primary"
              className="m-auto"
              onClick={() => convertHtmltoPdf()}
              loading={requesting}
            />
          </div>
        )}
      </div>
    </Container>
  );
}

const mapStateToProps = createStructuredSelector({
  funcType: makeSelectfuncRequesting(),
  requesting: makeSelectRequesting(),
});

export const mapDispatchToProps = dispatch => ({
  uploadData: data => dispatch(upload(data)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(UploadFile);
