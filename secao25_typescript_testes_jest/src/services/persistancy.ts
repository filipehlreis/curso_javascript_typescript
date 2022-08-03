import { PersistancyProtocol } from '../classes/interfaces/persistancy-protocol';

export class Persistancy implements PersistancyProtocol {
  saveOrder(): void {
    console.log('Pedido salvo com sucesso ...');
  }
}
