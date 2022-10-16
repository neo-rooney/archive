import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import RigsterForm from '../containers/auth/RigsterForm';

const RegisterPage = () => {
  return (
    <AuthTemplate>
      <RigsterForm />
    </AuthTemplate>
  );
};

export default RegisterPage;
