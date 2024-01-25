import React from 'react';
import Header from '../../component/Header/Header';
import ConditionalRendering from '../../component/ConditionalRendering/ConditionalRendering';
import MyForm from '../../component/Form/MyForm';

const LandingPage = () => {
  return (
    <div>
      <Header />
      <ConditionalRendering />
      <MyForm />
    </div>
  );
};

export default LandingPage;
