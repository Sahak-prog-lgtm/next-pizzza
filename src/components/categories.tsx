import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';

interface Props {
     className?: string;
}
const categories = ["Все","Мясные","Сладкие","Вегетарианские","С курицей" ]

export const Categories: React.FC<Props> = (props) => {
     const {className} = props;
     return (
        <ul className={cn("flex items-center gap-2 bg-gray-200 rounded-2xl px-1 py-3", className)}>
            {
                categories.map(item => (
                    <li key={item}>
                        <Link className={cn("px-3 py-2 rounded-2xl", item === "Все" && "bg-white")} key={item} href={`#${item}`}>{item}</Link>
                    </li>
                ))
            }
        </ul>
    );
}