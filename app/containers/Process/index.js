import React, { useState, memo } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

// components
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import Input from '../../components/Input';
import Button from '../../components/Button1';

// redux
import saga from './redux/saga';
import reducer from './redux/reducer';
import { process } from './redux/actions';

// utils

// selectors
import { makeSelectRequesting } from './redux/selectors';

// styles
import Container from './style';

// constants
const key = 'process';

function Process({ onSubmitForm }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const [fileName, setFileName] = useState('');

  const startProcess = () => {
    const data = {
      task: localStorage.getItem('task'),
      tool: 'pdfjpg',
      files: [
        {
          server_filename: localStorage.getItem('server_filename'),
          filename: fileName,
        },
      ],
    };
    onSubmitForm(data);
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
          <Input
            placeholder="Plesae Enter File Name"
            onChange={e => setFileName(e.target.value)}
          />
          <Button
            text="Start Process"
            variant="primary"
            className="ml-auto mr-auto mt-3"
            onClick={() => startProcess()}
          />
        </div>
      </div>
    </Container>
  );
}

const mapStateToProps = createStructuredSelector({
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
