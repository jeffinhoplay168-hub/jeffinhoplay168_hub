
export enum UserRank {
  SOLDIER = 'Soldado',
  NOBLE = 'Nobre',
  KING = 'Rei do Império'
}

export interface BarberService {
  id: string;
  name: string;
  price: number;
  duration: string;
  description: string;
}

export interface Promotion {
  id: string;
  title: string;
  description: string;
  discountPrice?: number;
  originalPrice?: number;
}
