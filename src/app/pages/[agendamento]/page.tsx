'use client'
import React from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function Agendamento(){
    const params = useSearchParams();
    const paramsName = params.get('name');
    const paramsLastName = params.get('lastName');
    const paramsNumber = params.get('number');
    const paramsTempo = params.get('tempo');
    const paramsAtuacao = params.get('atuacao');
    const fullName = `${paramsName} ${paramsLastName}`
     
    // const teste = router.query
    return (
      <div>
        <h1>Marcar consulta com {fullName}</h1>
        <p>{paramsAtuacao}</p>
        <p>{paramsNumber}</p>
        <p>{paramsTempo}</p>

        <input type="datetime-local" name="" id="" />
      </div>
      
    )
}