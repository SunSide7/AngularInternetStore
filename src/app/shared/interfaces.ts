export interface User {
  email: string;
  password: string;
}

export interface StuffItem {
  name: string;
  image: string;
  description: string;
  id: string;
}

export interface ProfileInfo {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface Stuff {
  name: string
  image: string
  quantity: number
  description: string
  id: string
  deleted: boolean
}
