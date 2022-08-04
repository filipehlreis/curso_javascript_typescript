import { IndividualCustomer, EnterpriseCustomer } from './customer';

const createIndividualCustomer = (
  firstName: string,
  lastName: string,
  cpf: string,
): IndividualCustomer => {
  return new IndividualCustomer(firstName, lastName, cpf);
};

const createEnterpriseCustomer = (
  name: string,
  cnpj: string,
): EnterpriseCustomer => {
  return new EnterpriseCustomer(name, cnpj);
};

afterEach(() => jest.clearAllMocks());

describe('IndividualCustomer', () => {
  it('should have firstName, lastName and cpf', () => {
    const sut = createIndividualCustomer('Filipe', 'Reis', '111.111.111-12');
    expect(sut).toHaveProperty('firstName', 'Filipe');
    expect(sut).toHaveProperty('lastName', 'Reis');
    expect(sut).toHaveProperty('cpf', '111.111.111-12');
  });

  it('should have methods to get name and idn for individual customer', () => {
    const sut = createIndividualCustomer('Filipe', 'Reis', '111.111.111-12');
    expect(sut.getName()).toBe('Filipe Reis');
    expect(sut.getIDN()).toBe('111.111.111-12');
  });
});

describe('EnterpriseCustomer', () => {
  it('should have firstName, lastName and cpf', () => {
    const sut = createEnterpriseCustomer(
      'Nando o Sorridente',
      '111.111.111-12',
    );
    expect(sut).toHaveProperty('name', 'Nando o Sorridente');
    expect(sut).toHaveProperty('cnpj', '111.111.111-12');
  });

  it('should have methods to get name and idn for enterprise customer', () => {
    const sut = createEnterpriseCustomer(
      'Nando o Sorridente',
      '111.111.111-12',
    );
    expect(sut.getName()).toBe('Nando o Sorridente');
    expect(sut.getIDN()).toBe('111.111.111-12');
  });
});
