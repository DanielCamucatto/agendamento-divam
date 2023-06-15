import React from 'react';
import CustomInput from '../components/input'
import CustomButton from '../components/button';
import ListPsychologists from '../components/ListPsychologists';

const Main: React.FC = () => {
    const handleClick = () => {
        console.log('Botão clicado!');
    };

    return (
        <div>
            <h1>Minha Página Principal</h1>
            <div className="input-box">
                <CustomInput type="text" placeholder='Procure seu terapeuta aqui' />
                <CustomButton onClick={handleClick}>Buscar</CustomButton>
            </div>
            <ListPsychologists />
        </div>
    );
};

export default Main;
