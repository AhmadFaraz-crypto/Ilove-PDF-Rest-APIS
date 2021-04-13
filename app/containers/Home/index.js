import React, { memo } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

// components
import { Row, Col } from 'react-bootstrap';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import Card from '../../components/Card';

// redux
import saga from './redux/saga';
import reducer from './redux/reducer';
import { verify } from './redux/actions';

// utils

// selectors
import { makeSelectRequesting } from './redux/selectors';

// styles
import Container from './style';

// constants
const key = 'verify';

function Home({ onSubmitForm }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const handle = () => {
    onSubmitForm();
  };

  return (
    <Container>
      <div>
        <h1 className="header">
          Every tool you need to work with PDFs in one place
        </h1>
        <h3 className="sub-header">
          Every tool you need to use PDFs, at your fingertips. All are 100% FREE
          and easy to use! Merge, split, compress, convert, rotate, unlock and
          watermark PDFs with just a few clicks.
        </h3>
        <div className="pt-5">
          <Row>
            <Col lg={4}>
              <Card bgColor="primary">
                <div className="p-5" onClick={() => handle()}>
                  <h3 className="card-title">JPG to PDF</h3>
                  <p className="card-des">
                    Convert JPG images to PDF in seconds. Easily adjust
                    orientation and margins.
                  </p>
                </div>
              </Card>
            </Col>
            <Col lg={4}>
              <Card bgColor="primary">
                <div className="p-5">
                  <h3 className="card-title">PDF to JPG</h3>
                  <p className="card-des">
                    Convert each PDF page into a JPG or extract all images
                    contained in a PDF.
                  </p>
                </div>
              </Card>
            </Col>
            <Col lg={4}>
              <Card bgColor="primary">
                <div className="p-5">
                  <h3 className="card-title">HTML to PDF</h3>
                  <p className="card-des">
                    Convert webpages in HTML to PDF. Copy and paste the URL of
                    the page you want and convert it to PDF with a click.
                  </p>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  );
}

const mapStateToProps = createStructuredSelector({
  requesting: makeSelectRequesting(),
});

export const mapDispatchToProps = dispatch => ({
  onSubmitForm: () => dispatch(verify()),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Home);
