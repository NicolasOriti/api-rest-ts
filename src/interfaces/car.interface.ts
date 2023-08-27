export interface ICar {
  name: string;
  color: string;
  gas: 'Gasoline' | 'Diesel' | 'Electric' | 'Hybrid';
  year: number;
  description: string;
  price: number;
}
