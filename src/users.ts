import { IUser } from './models.js';

const users: IUser[] = [];

export const add = (user: IUser) => {
  users.push(user);
};

export const remove = (userId: string) => {
  const userIndex = users.findIndex((user) => user.id === userId);
  users.splice(userIndex, 1);
};

export const updateUser = (user: IUser) => {
  const userIndex = users.findIndex((u) => u.id === user.id);
  users[userIndex] = user;
};

export const get = (id: string) => {
  const userIndex = users.findIndex((u) => u.id === id);
  return users[userIndex];
};

export const getAll = () => {
  return users;
};

export const isUserExist = (userId: string) => {
  return users.findIndex((u) => u.id === userId) !== -1;
};
