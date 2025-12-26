
import { BarberService, Promotion, UserRank } from './types';

export const SERVICES: BarberService[] = [
  {
    id: '1',
    name: 'Corte Social',
    price: 25,
    duration: '40 min',
    description: 'Corte clássico tesoura ou máquina, acabamento padrão.'
  },
  {
    id: '2',
    name: 'Corte Degradê',
    price: 30,
    duration: '50 min',
    description: 'Degradê moderno (Fade) com acabamento detalhado.'
  },
  {
    id: '7',
    name: 'Corte com Tesoura',
    price: 40,
    duration: '1h',
    description: 'Corte inteiramente na tesoura para um caimento mais natural e clássico.'
  },
  {
    id: '3',
    name: 'Barba Desenhada ou Tirada',
    price: 20,
    duration: '30 min',
    description: 'Desenho preciso da barba ou remoção completa com navalha.'
  },
  {
    id: '4',
    name: 'Combo Cabelo e Barba',
    price: 50,
    duration: '1h 15min',
    description: 'A experiência completa: corte e barba com desconto no combo.'
  },
  {
    id: '5',
    name: 'Sobrancelha',
    price: 8,
    duration: '10 min',
    description: 'Alinhamento e limpeza do design da sobrancelha.'
  },
  {
    id: '6',
    name: 'Pezinho',
    price: 8,
    duration: '10 min',
    description: 'Limpeza e contorno do acabamento do cabelo.'
  }
];

export const PROMOTIONS: Promotion[] = [
  {
    id: 'p1',
    title: 'Combo Rei do FDS',
    description: 'Combo Cabelo + Barba por apenas R$ 45 aos sábados.',
    originalPrice: 50,
    discountPrice: 45
  },
  {
    id: 'p2',
    title: 'Amigo do Império',
    description: 'Traga um novo súdito e ganhe 10% de desconto no seu próximo serviço.',
  }
];

export const RANKS_INFO = {
  [UserRank.SOLDIER]: {
    minCuts: 0,
    benefits: 'Início da jornada no Império.'
  },
  [UserRank.NOBLE]: {
    minCuts: 3,
    benefits: '5% de desconto em qualquer serviço.'
  },
  [UserRank.KING]: {
    minCuts: 5,
    benefits: 'PRÓXIMO CORTE GRÁTIS + 10% de desconto fixo.'
  }
};
