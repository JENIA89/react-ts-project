export interface iUserAddress {
  street: string;
  city: string;
  zipcode: string;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  address: iUserAddress;
}

export interface ITodo {
  id: number;
  title: string;
  completed: boolean;
}