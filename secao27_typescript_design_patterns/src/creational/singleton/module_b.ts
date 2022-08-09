// import { MyDatabaseClassic } from './db/my-database-classic';
// import { MyDatabaseModule } from './db/my-database-module';

import { MyDatabaseFunction } from './db/my-database-function';
import { myDatabaseClassic as myDatabaseFromModuleA } from './module_a';

// const myDatabaseClassic = MyDatabaseClassic.instance;
// const myDatabaseClassic = MyDatabaseModule;
const myDatabaseClassic = MyDatabaseFunction;
myDatabaseClassic.add({ name: 'Maria', age: 83 });
myDatabaseClassic.add({ name: 'Renata', age: 39 });
myDatabaseClassic.add({ name: 'Fred', age: 18 });

myDatabaseClassic.show();

console.log(myDatabaseClassic === myDatabaseFromModuleA);
