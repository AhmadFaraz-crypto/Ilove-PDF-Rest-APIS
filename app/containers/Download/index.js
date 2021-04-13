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

function Download({ downloadFile, requesting }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  return (
    <Container>
      <div>
        <h1 className="header">Download File</h1>
        <div className="pt-5">
          <Button
            text="Download"
            variant="primary"
            className="ml-auto mr-auto mt-3"
            onClick={() => downloadFile()}
            loading={requesting}
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
  downloadFile: () => dispatch(download()),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Download);
