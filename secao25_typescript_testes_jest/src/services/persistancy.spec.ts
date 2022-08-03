describe('TESTANDO ALGUMA COISA', () => {
  it('should return one (IT)', () => {
    const number = 1;
    expect(number).not.toBe(1);
  });
});

describe('TESTANDO OUTRA COISA', () => {
  test('should return Filipe (TEST)', () => {
    const name = 'Filipe';
    expect(name).toBe('Filipe');
  });
});
