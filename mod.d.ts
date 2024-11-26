import { ReactElement } from 'react';

interface CardProps {
  title: string;
  description?: string;
  imageUrl?: string;
  onAction?: () => void;
  actionLabel?: string;
}

declare const Card: (props: CardProps) => ReactElement;
export default Card;