import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '8c2adb66-cdec-4c32-b63b-a0662f3b4d75',
};

export const sampleWithPartialData: IAuthority = {
  name: 'd202b4c3-93cf-4072-a870-b20d60b50c06',
};

export const sampleWithFullData: IAuthority = {
  name: 'baecd371-9953-4526-93dd-502806742e95',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
