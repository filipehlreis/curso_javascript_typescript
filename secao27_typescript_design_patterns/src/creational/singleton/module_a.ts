// import { MyDatabaseClassic } from './db/my-database-classic';
// import { MyDatabaseModule } from './db/my-database-module';

import { MyDatabaseFunction } from './db/my-database-function';

// const myDatabaseClassic = MyDatabaseClassic.instance;
// const myDatabaseClassic = MyDatabaseModule;
const myDatabaseClassic = MyDatabaseFunction;
myDatabaseClassic.add({ name: 'Luiz', age: 32 });
myDatabaseClassic.add({ name: 'Filipe', age: 29 });
myDatabaseClassic.add({ name: 'Joaquina', age: 22 });
myDatabaseClassic.add({ name: 'Thiago', age: 75 });

export { myDatabaseClassic };
