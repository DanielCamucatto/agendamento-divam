import React, { useState } from 'react';
import CustomInput from '../components/input';
import CustomButton from '../components/button';
import psicologosData from '../../data/psychologists.json';
import ListPsychologists from '../components/ListPsychologists';

type Psicologo = {
  nome: string;
  sobrenome: string;
  areaAtuacao: string;
  numeroRF: string;
  tempoAtuacao?: string;
};

const Main: React.FC = () => {
  const [filter, setFilter] = useState<string>('');
  const [filteredPsychologists, setFilteredPsychologists] = useState<Psicologo[]>(psicologosData);
  const [showAllPsychologists, setShowAllPsychologists] = useState<boolean>(true);
  const [notFoundMessage, setNotFoundMessage] = useState<boolean>(false);
  const [invalidInput, setInvalidInput] = useState<boolean>(false);

  const handleButtonClick = () => {
    const filteredNames = psicologosData.filter((psy) =>
      psy.nome.toLowerCase().includes(filter.toLowerCase())
    );

    if (filteredNames.length === 0) {
      setShowAllPsychologists(true);
      setNotFoundMessage(true);
    } else {
      setFilteredPsychologists(filteredNames);
      setShowAllPsychologists(false);
      setNotFoundMessage(false);
    }
  };

  const handleFilterChange = (value: string) => {
    if (/[0-9!@#$%^&*(),.?":{}|<>]/.test(value)) {
      setInvalidInput(true);
      setFilter('');
      setShowAllPsychologists(true);
      setNotFoundMessage(false);
    } else {
      setFilter(value);
      setInvalidInput(false);
    }
  };

  const handleInvalidInput = () => {
    setInvalidInput(true);
    setFilter('');
  };

  return (
    <div>
      <h1 className='main-title'>Agende sua consulta com os melhores psicólogos online - fácil, rápido e seguro</h1>
      <div className="input-box">
        <CustomInput
          type="text"
          placeholder="Procure seu terapeuta aqui"
          handleFilterChange={handleFilterChange}
          handleInvalidInput={handleInvalidInput} // Aqui você pode adicionar uma função caso deseje tratar o evento de entrada inválida
        />
        <CustomButton onClick={handleButtonClick}>Buscar</CustomButton>
      </div>
      {invalidInput && <p className='invalid-input'>Números e caracteres especiais não são permitidos.</p>}
      {notFoundMessage && <p className='invalid-input'>Não encontramos ninguém com esse nome.</p>}
      <ListPsychologists filteredPsychologists={showAllPsychologists ? psicologosData : filteredPsychologists} />
    </div>
  );
};

export default Main;

