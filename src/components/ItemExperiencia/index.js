import React from 'react'
import Image from 'next/image'

export default function ItemExperiencia ({ funcao, instituicao, prazo, descricao, imagemSrc }) {
    return (
        <div className="flex items-center w-max my-6">
            <Image
                className="flex rounded-xl w-12 h-12 mr-4 mb-auto"
                src={imagemSrc}
                width={500}
                height={500}
            />
            <div>
                <h2 className="text-xl font-bold text-gray-600 mb-1">{funcao}</h2>
                <p className="text-gray-500 font-light my-1">{instituicao} • {prazo}</p>
                <p className="text-gray-500 font-light">• {descricao}</p>
            </div>
        </div>
    )
}
