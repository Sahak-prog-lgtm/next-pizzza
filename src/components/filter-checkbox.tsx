"use client"
import { cn } from '@/lib/utils';
import React from 'react';
import { Checkbox } from './ui';

interface Props {
     className?: string;
     text: string;
     value: string;
     onCheckedChange: (checked: boolean) => void;
     checked?: boolean
}

export const FilterCheckbox: React.FC<Props> = (props) => {
     const {className, text, value, onCheckedChange, checked} = props;
     return (
        <label className={cn("flex items-center gap-2", className)}>
            <Checkbox className='w-5 h-5' value={value} checked={checked} onCheckedChange={onCheckedChange} />
            {text}
        </label>
    );
}