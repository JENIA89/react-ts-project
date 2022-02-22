import React, { FC } from 'react'

export enum CardVariant {
  outlined = 'outlined',
  primary = 'primary'
}

interface Cardprops {
    width?: string;
    height?: string;
    children?: React.ReactChild | React.ReactNode;
    variant: CardVariant;
}

const Card: FC<Cardprops> = ({width, height, variant, children}) => {
  return (
    <div style={{width,
      height,
      border: variant === CardVariant.outlined ? '2px solid #000' : 'none',
      background: variant == CardVariant.primary ? 'lightgray' : ''}}>
      {children}
    </div>
  )
}

export default Card