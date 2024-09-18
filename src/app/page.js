'use client';

import { useState } from 'react';
import FormRegister from './components/FormRegister';
import SuccessMessage from './components/SuccessMessage';

export default function Home() {
  const [registered, setRegistered] = useState(false);
  const [code, setCode] = useState('');

  const handleRegister = (registrationData) => {
    // Simulación del registro y generación de código alfanumérico
    const generatedCode = Math.random().toString(36).substring(2, 10).toUpperCase();
    setCode(generatedCode);
    setRegistered(true);
  };

  return (
    <div className=''>
      {!registered ? (
        <FormRegister onRegister={handleRegister} />
      ) : (
        <SuccessMessage code={code} />
      )}
    </div>
  );
}
