import { cn } from '@/lib/utils';
import React from 'react';

type TileSizes = "s" | "m" | "l";

interface Props {
     className?: string;
     size: TileSizes;
     text: string;
}

export const Title: React.FC<Props> = (props) => {
     const {className,text,size} = props;

     const setMapTag = {
        s: "h3",
        m: "h2",
        l: "h1"
     }

     const setMapSize = {
        s: "text-[22px]",
        m: "text-[26px]",
        l: "text-[36px]"
     }

     return (
        React.createElement(
            setMapTag[size],
            {className: cn(setMapSize[size], className)},
            text
        )
    );
}