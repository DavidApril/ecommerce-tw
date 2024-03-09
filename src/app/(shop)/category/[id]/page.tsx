'use client';

import { notFound } from "next/navigation";


interface Props {
    params: {
        id: string;
    }
}

export default function({ params }: Props){

    const { id } = params
    if( id === 'kids'){
        notFound()
    }

    return <h1>Category page { id }</h1>
}