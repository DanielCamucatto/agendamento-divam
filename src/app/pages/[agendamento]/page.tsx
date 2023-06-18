'use client'
import React, { ChangeEvent, useState } from "react";
import { useSearchParams } from "next/navigation";
import CardWrapper from "../../styles/CardStyle";
import CustomButton from "@/app/components/button";
import { format } from 'date-fns';

export default function Agendamento() {
  const params = useSearchParams();
  const paramsName = params.get('name');
  const paramsLastName = params.get('lastName');
  const paramsNumber = params.get('number');
  const paramsTempo = params.get('tempo');
  const paramsAtuacao = params.get('atuacao');
  const fullName = `${paramsName} ${paramsLastName}`


  const [activeSection, setActiveSection] = useState('#about');
  const [selectedDateTime, setSelectionDateTime] = useState<string | null>(null);
  const [selectedOption, setSelectedOptions] = useState<string | null>(null);
  const [message, setMessage] = useState('');

  const handleButtonClick = (targetSection: string) => {
    setActiveSection(targetSection)
  }

  const handleDateTimeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedDate = new Date(e.target.value);
    const formattedDateTime = format(selectedDate, 'HH:mm dd/MM/yy');
    setSelectionDateTime(formattedDateTime);
  }

  const handleAccept = () => {
    setSelectedOptions('Aceitar');
    setMessage('Você agendou sua consulta');
  }

  const handleDecline = () => {
    setSelectedOptions('Recusar');
    setMessage('Você Recusou a consulta')
  }

  return (
    <CardWrapper>
      <div className={`card ${activeSection === 'about' ? '' : 'is-active'}`} data-state={activeSection}>
        <div className="card-header">
          <div
            className="card-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1566738780863-f9608f88f3a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2378&q=80')",
            }}
          />
          <img
            className="card-avatar"
            src="https://via.placeholder.com/100"
            alt="Avatar"
          />
          <h1 className="card-fullname">{fullName}</h1>
          <h2 className="card-jobtitle">{paramsAtuacao}</h2>
        </div>
        <div className="card-main">
          {activeSection === 'about' && (
            <div className="card-content">
              <div className="card-subtitle">Sobre mim</div>
              <p className="card-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                dapibus, tellus ac cursus commodo, tortor mauris condimentum
                nibh, ut fermentum massa justo sit amet risus. Maecenas sed diam
                eget risus varius blandit sit amet non magna. Morbi leo risus,
                porta ac consectetur ac, vestibulum at eros.
              </p>
            </div>
          )}
          {activeSection === 'experience' && (
            <div className="card-content">
              <div className="card-subtitle">Agende sua consulta</div>
              <h3 className="text-color-primary">Selecione o melhor dia e horário</h3>
              <p className="card-desc">

              </p>
              <input type="datetime-local" name="" id="" onChange={handleDateTimeChange} />
              {selectedDateTime && (
                <div>
                  <p className="text-color-primary">Você escolheu {selectedDateTime}.</p>
                  <p className={selectedOption === 'Aceitar' ? 'accept' : 'decline'}>{message}</p>
                  <button onClick={handleAccept}>Confirmar</button>
                  <button onClick={handleDecline}>Rejeitar</button>
                </div>
              )}
            </div>
          )}
          {activeSection === 'contact' && (
            <div className="card-content">
              <div className="card-subtitle">Contato</div>
              <p className="card-desc">
                E-mail: {fullName}@divam.com
              </p>
              <p className="card-desc">
                Telefone: 55 (11) 99999-9999
              </p>
              <CustomButton>Me mande sua dúvida</CustomButton>
            </div>
          )}
          <div className="card-buttons">
            <button
              className={`is-active ${activeSection === 'about' ? 'is-active' : ''}`}
              data-section="about"
              onClick={() => handleButtonClick('about')}
            >
              Sobre
            </button>
            <button
              className={`${activeSection === 'experience' ? 'is-active' : ''}`}
              data-section="experience"
              onClick={() => handleButtonClick('experience')}
            >
              Agende uma consulta
            </button>
            <button
              className={`${activeSection === 'contact' ? 'is-active' : ''}`}
              data-section="contact"
              onClick={() => handleButtonClick('contact')}
            >
              Contato
            </button>
          </div>
        </div>
      </div>
    </CardWrapper>

  )
}