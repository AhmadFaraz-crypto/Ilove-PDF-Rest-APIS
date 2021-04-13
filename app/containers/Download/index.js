import React, { memo } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

// components
import Button from '../../components/Button1';

// redux
import saga from './redux/saga';
import reducer from './redux/reducer';
import { download } from './redux/actions';

// utils
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';

// selectors
import { makeSelectRequesting } from './redux/selectors';

// styles
import Container from './style';

// constants
const key = 'download';

function Download({ onSubmitForm }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  return (
    <Container>
      <div>
        <h1 className="header">PDF to JPG</h1>
        <h3 className="sub-header">
          Convert each PDF page into a JPG or extract all images contained in a
          PDF.
        </h3>
        <div className="pt-5">
          <Button
            text="Download"
            variant="primary"
            className="ml-auto mr-auto mt-3"
            onClick={() => onSubmitForm()}
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
  onSubmitForm: () => dispatch(download()),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Download);
