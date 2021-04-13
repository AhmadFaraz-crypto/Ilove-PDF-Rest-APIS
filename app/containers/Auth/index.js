import React, { memo } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

// components
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import Input from '../../components/Input';
import Button from '../../components/Button1';

// redux
import { makeSelectRequesting } from './redux/selectors';
import saga from './redux/saga';
import reducer from './redux/reducer';
import { auth } from './redux/actions';

// utils

// styles
import Container from './style';

// constants
const key = 'auth';

const schema = yup.object().shape({
  public_key: yup.string().required('This is Required'),
});

function Auth({ onSubmitForm, requesting }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleOnSubmit = data => {
    onSubmitForm(data);
  };

  return (
    <Container>
      <div>
        <div>
          <p className="label-text">Please Enter Your Project Public key</p>
        </div>
        <form onSubmit={handleSubmit(handleOnSubmit)}>
          <div className="d-flex align-items-center justify-content-center">
            <Input {...register('public_key')} />
            <Button
              text="Submit"
              className="ml-3"
              variant="primary"
              loading={requesting}
            />
          </div>
          {errors.public_key && (
            <p className="errors">{errors.public_key.message}</p>
          )}
        </form>
        <div>
          <p className="mt-3 label-text">
            Project public key that you can find in{' '}
            <a href="https://developer.ilovepdf.com/login" target="_blank">
              admin panel
            </a>
          </p>
        </div>
      </div>
    </Container>
  );
}

const mapStateToProps = createStructuredSelector({
  requesting: makeSelectRequesting(),
});

export const mapDispatchToProps = dispatch => ({
  onSubmitForm: data => dispatch(auth(data)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Auth);
