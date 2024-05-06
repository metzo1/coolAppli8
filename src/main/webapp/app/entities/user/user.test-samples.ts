import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 5781,
  login: 'SZqM_',
};

export const sampleWithPartialData: IUser = {
  id: 18064,
  login: '5',
};

export const sampleWithFullData: IUser = {
  id: 18094,
  login: 'JDl',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
