
import { Plus, SlidersHorizontal } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { Button, Title } from './ui';

interface Props {
    className?: string;
    id?: number;
    title: string;
    price: number;
    imgUrl: string;
    ingredients: string;
}

export const Card: React.FC<Props> = (props) => {
    const { className, title, price, imgUrl, ingredients } = props;
    return (
        <article className={className}>
            <div className='relative bg-orange-100 rounded-2xl p-4'>
                <Image className='mx-auto' src={imgUrl} alt='' width={210} height={210} />
                <button className='absolute top-2 right-2 cursor-pointer'>
                    <SlidersHorizontal className='text-primary' />
                </button>
            </div>
            <Title className='mb-3 ' size={'s'} text={title} />
            <p className='text-gray-400 max-w-[285px] mb-3'>
               {ingredients}
            </p>
            <div className='flex items-center justify-between'>
                <span><span className='font-bold'>от {price}₽</span></span>
                <Button variant="secondary">
                    <Plus /> Добавить
                </Button>
            </div>
        </article>
    );
}