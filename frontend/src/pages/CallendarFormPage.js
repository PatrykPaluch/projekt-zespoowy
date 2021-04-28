import React from 'react';
import CallendarFormNav from '../components/CallendarFormNav';
import CallendarForm from '../components/CallendarForm';
import Navbar from '../components/Navbar';

const CallendarFormPage = () => {
    return (
      <>
        <Navbar/>
        <CallendarFormNav/>
        <CallendarForm klasa={{
          id: 1,
          nazwa: "1 A"
        }}/>
      </>
    )
}

export default CallendarFormPage
