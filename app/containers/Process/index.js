import React, { memo } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

// components
import Button from '../../components/Button1';

// redux
import saga from './redux/saga';
import reducer from './redux/reducer';
import { process } from './redux/actions';

// utils
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';

// selectors
import { makeSelectRequesting } from './redux/selectors';
import { makeSelectfuncRequesting } from '../Home/redux/selectors';

// styles
import Container from './style';

// constants
const key = 'process';

function Process({ onSubmitForm, funcType, requesting }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const startProcessPdftoJpg = () => {
    const data = {
      task: localStorage.getItem('task'),
      tool: 'pdfjpg',
      files: [
        {
          server_filename: localStorage.getItem('server_filename'),
          filename: 'Untitled File',
        },
      ],
    };
    onSubmitForm(data);
  };

  const startProcessImagetoPdf = () => {
    const data = {
      task: localStorage.getItem('task'),
      tool: 'imagepdf',
      files: [
        {
          server_filename: localStorage.getItem('server_filename'),
          filename: 'Untitled File',
        },
      ],
    };
    onSubmitForm(data);
  };

  const startProcesshtmltoPdf = () => {
    const data = {
      task: localStorage.getItem('task'),
      tool: 'htmlpdf',
      files: [
        {
          server_filename: localStorage.getItem('server_filename'),
          filename: 'Untitled File',
        },
      ],
    };
    onSubmitForm(data);
  };

  const startProcess = () => {
    if (funcType === 'PdftoJpg') {
      startProcessPdftoJpg();
    } else if (funcType === 'ImagetoPdf') {
      startProcessImagetoPdf();
    } else {
      startProcesshtmltoPdf();
    }
  };

  return (
    <Container>
      <div>
        {funcType === 'PdftoJpg' ? <h1 className="header">PDF to JPG</h1> : ''}
        {funcType === 'ImagetoPdf' ? (
          <h1 className="header">Image to PDF</h1>
        ) : (
          ''
        )}
        {funcType === 'htmltoPdf' ? (
          <h1 className="header">HTMl to PDF</h1>
        ) : (
          ''
        )}
        <div className="pt-5">
          <Button
            text="Start Process"
            variant="primary"
            className="ml-auto mr-auto mt-3"
            onClick={() => startProcess()}
            loading={requesting}
          />
        </div>
      </div>
    </Container>
  );
}

const mapStateToProps = createStructuredSelector({
  funcType: makeSelectfuncRequesting(),
  requesting: makeSelectRequesting(),
});

export const mapDispatchToProps = dispatch => ({
  onSubmitForm: data => dispatch(process(data)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Process);
