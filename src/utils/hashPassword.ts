import bcrypt from 'bcrypt';
import { SALT_ROUNDS } from './constants';

export const hashPassword = async (password: string): Promise<string> => {
  const saltRounds = SALT_ROUNDS;
  return await bcrypt.hash(password, saltRounds);
};

export const comparePassword = async (
  password: string,
  hashedPassword: string
): Promise<boolean> => {
  return bcrypt.compare(password, hashedPassword);
};
