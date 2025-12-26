
import { BarberService, Promotion } from './types';

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
    id: '3',
    name: 'Barba Imperial',
    price: 25,
    duration: '35 min',
    description: 'Desenho preciso com toalha quente e navalha.'
  },
  {
    id: '4',
    name: 'Combo Rei (Cabelo + Barba)',
    price: 50,
    duration: '1h 20min',
    description: 'A experiência completa do Império com desconto no combo.'
  },
  {
    id: '5',
    name: 'Sobrancelha',
    price: 10,
    duration: '15 min',
    description: 'Limpeza e alinhamento do design.'
  },
  {
    id: '6',
    name: 'Pigmentação',
    price: 15,
    duration: '20 min',
    description: 'Cobertura de falhas e realce do contorno.'
  }
];

export const PROMOTIONS: Promotion[] = [
  {
    id: 'p1',
    title: 'Terça Maluca',
    description: 'Corte Social por apenas R$ 20,00 o dia todo.',
    discountPrice: 20
  },
  {
    id: 'p2',
    title: 'Clube Fidelidade',
    description: 'Complete 5 selos e ganhe o 6º corte totalmente grátis!',
  }
];
