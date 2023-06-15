// import React, { useState } from 'react';
// import CustomInput from '../components/input';
// import CustomButton from '../components/button';
// import psicologosData from '../../data/psychologists.json';
// import ListPsychologists from '../components/ListPsychologists';

// type Psicologo = {
//     nome: string;
//     sobrenome: string;
//     areaAtuacao: string;
//     numeroRF: string;
//     tempoAtuacao?: string;
// };

// const Main: React.FC = () => {
//     const [filter, setFilter] = useState<string>('');
//     const [filteredPsychologists, setFilteredPsychologists] = useState<Psicologo[]>(psicologosData);
//     const [filteredName, setFilteredName] = useState<string>('');

//     const handleButtonClick = () => {
//         const psicologoEncontrado = psicologosData.find((psicologo) =>
//             psicologo.nome.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
//         );

//         if (!psicologoEncontrado) {
//             alert('O nome não foi encontrado na lista de psicólogos.')
//         } else {
//             setFilteredPsychologists([psicologoEncontrado]);
//             setFilteredName(psicologoEncontrado.nome);
//             setFilter('');
//         }
//     };

//     const handleFilterChange = (value: string) => {
//         setFilter(value);
//     };

//     return (
//         <div>
//             <h1>Minha Página Principal</h1>
//             <div className="input-box">
//                 <CustomInput type="text" placeholder="Procure seu terapeuta aqui" handleFilterChange={handleFilterChange} />
//                 <CustomButton onClick={handleButtonClick}>Buscar</CustomButton>
//             </div>
//             <ListPsychologists filteredPsychologists={filteredPsychologists} />
//         </div>
//     );
// };

// export default Main;



// import React, { useState } from 'react';
// import CustomInput from '../components/input';
// import CustomButton from '../components/button';
// import psicologosData from '../../data/psychologists.json';
// import ListPsychologists from '../components/ListPsychologists';

// type Psicologo = {
//   nome: string;
//   sobrenome: string;
//   areaAtuacao: string;
//   numeroRF: string;
//   tempoAtuacao?: string;
// };

// const Main: React.FC = () => {
//   const [filter, setFilter] = useState<string>('');
//   const [filteredPsychologists, setFilteredPsychologists] = useState<Psicologo[]>(psicologosData);
//   const [foundPsychologist, setFoundPsychologist] = useState<Psicologo | null>(null);

//   const handleButtonClick = () => {
//     const psicologoEncontrado = psicologosData.find((psicologo) =>
//       psicologo.nome.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
//     );

//     if (!psicologoEncontrado) {
//       setFoundPsychologist(null);
//     } else {
//       setFoundPsychologist(psicologoEncontrado);
//     }
//   };

//   const handleFilterChange = (value: string) => {
//     setFilter(value);
//   };

//   return (
//     <div>
//       <h1>Minha Página Principal</h1>
//       <div className="input-box">
//         <CustomInput
//           type="text"
//           placeholder="Procure seu terapeuta aqui"
//           value={filter}
//           onChange={handleFilterChange}
//         />
//         <CustomButton onClick={handleButtonClick}>Buscar</CustomButton>
//       </div>
//       {foundPsychologist ? (
//         <ListPsychologists filteredPsychologists={[foundPsychologist]} />
//       ) : (
//         <p>Nome não encontrado na lista de psicólogos.</p>
//       )}
//     </div>
//   );
// };

// export default Main;

// import React, { useState } from 'react';
// import CustomInput from '../components/input';
// import CustomButton from '../components/button';
// import psicologosData from '../../data/psychologists.json';
// import ListPsychologists from '../components/ListPsychologists';

// type Psicologo = {
//   nome: string;
//   sobrenome: string;
//   areaAtuacao: string;
//   numeroRF: string;
//   tempoAtuacao?: string;
// };

// const Main: React.FC = () => {
//   const [filter, setFilter] = useState<string>('');
//   const [filteredPsychologists, setFilteredPsychologists] = useState<Psicologo[]>(psicologosData);

//   const handleButtonClick = () => {
//     const pattern = /^[a-zA-Z\s]*$/; // Apenas letras e espaços são permitidos
//     if (!pattern.test(filter)) {
//       console.log('Números e caracteres especiais não são permitidos');
//       return;
//     }
//     const psicologoEncontrado = psicologosData.find((psicologo) =>
//       psicologo.nome.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
//     );

//     if (!psicologoEncontrado) {
//       setFilteredPsychologists(psicologosData);
//     } else {
//       setFilteredPsychologists([psicologoEncontrado]);
//     }
//   };

//   const handleFilterChange = (value: string) => {
//     setFilter(value);
//   };

//   return (
//     <div>
//       <h1>Minha Página Principal</h1>
//       <div className="input-box">
//         <CustomInput
//           type="text"
//           placeholder="Procure seu terapeuta aqui"
//           value={filter}
//           onChange={handleFilterChange}
//         />
//         <CustomButton onClick={handleButtonClick}>Buscar</CustomButton>
//       </div>
//       <ListPsychologists filteredPsychologists={filteredPsychologists} />
//     </div>
//   );
// };

// export default Main;




// import React, { useState } from 'react';
// import CustomInput from '../components/input';
// import CustomButton from '../components/button';
// import psicologosData from '../../data/psychologists.json';
// import ListPsychologists from '../components/ListPsychologists';

// type Psicologo = {
//   nome: string;
//   sobrenome: string;
//   areaAtuacao: string;
//   numeroRF: string;
//   tempoAtuacao?: string;
// };

// interface CustomInputProps {
//   type: string;
//   placeholder?: string;
//   handleFilterChange: (value: string) => void;
//   handleInvalidInput: () => void;
// }

// const Main: React.FC = () => {
//   const [filter, setFilter] = useState<string>('');
//   const [filteredPsychologists, setFilteredPsychologists] = useState<Psicologo[]>(psicologosData);
//   const [errorMessage, setErrorMessage] = useState<string>('');

//   const handleButtonClick = () => {
//     const newTest = psicologosData.find((psy) => psy.nome === filter);

//     if (!newTest) {
//       setFilteredPsychologists([]);
//       setErrorMessage('Não encontramos ninguém com esse nome.');
//     } else {
//       setFilteredPsychologists([newTest]);
//       setErrorMessage('');
//     }
//   };

//   const handleFilterChange = (value: string) => {
//     setFilter(value);
//     setErrorMessage('');
//   };

//   const handleInvalidInput = () => {
//     setErrorMessage('Número ou caractere especial não permitido.');
//   };

//   return (
//     <div>
//       <h1>Minha Página Principal</h1>
//       <div className="input-box">
//         <CustomInput
//           type="text"
//           placeholder="Procure seu terapeuta aqui"
//           handleFilterChange={handleFilterChange}
//           handleInvalidInput={handleInvalidInput}
//         />
//         <CustomButton onClick={handleButtonClick}>Buscar</CustomButton>
//       </div>
//       {errorMessage && <p>{errorMessage}</p>}
//       <ListPsychologists filteredPsychologists={filteredPsychologists} />
//     </div>
//   );
// };

// export default Main;



// import React, { useState } from 'react';
// import CustomInput from '../components/input';
// import CustomButton from '../components/button';
// import psicologosData from '../../data/psychologists.json';
// import ListPsychologists from '../components/ListPsychologists';

// type Psicologo = {
//   nome: string;
//   sobrenome: string;
//   areaAtuacao: string;
//   numeroRF: string;
//   tempoAtuacao?: string;
// };

// const Main: React.FC = () => {
//   const [filter, setFilter] = useState<string>('');
//   const [filteredPsychologists, setFilteredPsychologists] = useState<Psicologo[]>(psicologosData);
//   const [showAllPsychologists, setShowAllPsychologists] = useState<boolean>(true);

//   const handleButtonClick = () => {
//     const filteredNames = psicologosData.filter((psy) =>
//       psy.nome.toLowerCase().includes(filter.toLowerCase())
//     );

//     if (filteredNames.length === 0) {
//       setShowAllPsychologists(true);
//     } else {
//       setFilteredPsychologists(filteredNames);
//       setShowAllPsychologists(false);
//     }
//   };

//   const handleFilterChange = (value: string) => {
//     setFilter(value);
//   };

//   const handleInvalidInput = () => {
//     console.log('Número ou caractere especial não permitido');
//   };

//   return (
//     <div>
//       <h1>Minha Página Principal</h1>
//       <div className="input-box">
//         <CustomInput
//           type="text"
//           placeholder="Procure seu terapeuta aqui"
//           handleFilterChange={handleFilterChange}
//           handleInvalidInput={handleInvalidInput}
//         />
//         <CustomButton onClick={handleButtonClick}>Buscar</CustomButton>
//       </div>
//       <ListPsychologists filteredPsychologists={showAllPsychologists ? psicologosData : filteredPsychologists} />
//     </div>
//   );
// };

// export default Main;


// import React, { useState } from 'react';
// import CustomInput from '../components/input';
// import CustomButton from '../components/button';
// import psicologosData from '../../data/psychologists.json';
// import ListPsychologists from '../components/ListPsychologists';

// type Psicologo = {
//   nome: string;
//   sobrenome: string;
//   areaAtuacao: string;
//   numeroRF: string;
//   tempoAtuacao?: string;
// };

// const Main: React.FC = () => {
//   const [filter, setFilter] = useState<string>('');
//   const [filteredPsychologists, setFilteredPsychologists] = useState<Psicologo[]>(psicologosData);
//   const [showAllPsychologists, setShowAllPsychologists] = useState<boolean>(true);
//   const [notFoundMessage, setNotFoundMessage] = useState<boolean>(false);

//   const handleButtonClick = () => {
//     const filteredNames = psicologosData.filter((psy) =>
//       psy.nome.toLowerCase().includes(filter.toLowerCase())
//     );

//     if (filteredNames.length === 0) {
//       setShowAllPsychologists(true);
//       setNotFoundMessage(true);
//     } else {
//       setFilteredPsychologists(filteredNames);
//       setShowAllPsychologists(false);
//       setNotFoundMessage(false);
//     }
//   };

//   const handleFilterChange = (value: string) => {
//     setFilter(value);
//     setNotFoundMessage(false);
//   };

//   const handleInvalidInput = () => {
//     console.log('Número ou caractere especial não permitido');
//   };

//   return (
//     <div>
//       <h1>Minha Página Principal</h1>
//       <div className="input-box">
//         <CustomInput
//           type="text"
//           placeholder="Procure seu terapeuta aqui"
//           handleFilterChange={handleFilterChange}
//           handleInvalidInput={handleInvalidInput}
//         />
//         <CustomButton onClick={handleButtonClick}>Buscar</CustomButton>
//       </div>
//       {notFoundMessage && <p>Não encontramos ninguém com esse nome.</p>}
//       <ListPsychologists filteredPsychologists={showAllPsychologists ? psicologosData : filteredPsychologists} />
//     </div>
//   );
// };

// export default Main;

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
      <h1>Minha Página Principal</h1>
      <div className="input-box">
        <CustomInput
          type="text"
          placeholder="Procure seu terapeuta aqui"
          handleFilterChange={handleFilterChange}
          handleInvalidInput={handleInvalidInput} // Aqui você pode adicionar uma função caso deseje tratar o evento de entrada inválida
        />
        <CustomButton onClick={handleButtonClick}>Buscar</CustomButton>
      </div>
      {invalidInput && <p style={{ color: 'red' }}>Números e caracteres especiais não são permitidos.</p>}
      {notFoundMessage && <p>Não encontramos ninguém com esse nome.</p>}
      <ListPsychologists filteredPsychologists={showAllPsychologists ? psicologosData : filteredPsychologists} />
    </div>
  );
};

export default Main;

