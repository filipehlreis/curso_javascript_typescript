import { ImageEditor } from './image-editor';
import { ImageEditorBackupManager } from './image-editor-backup-manager';

const imageEditor = new ImageEditor('/media/image.png', 'png');
const backupManager = new ImageEditorBackupManager(imageEditor);

console.log(imageEditor);

backupManager.backup();
imageEditor.convertFormatTo('gif');
console.log(imageEditor);

backupManager.backup();
imageEditor.convertFormatTo('jpg');
console.log(imageEditor);

backupManager.backup();
imageEditor.convertFormatTo('bmp');
console.log(imageEditor);

backupManager.backup();
imageEditor.convertFormatTo('tiff');
console.log(imageEditor);

backupManager.showMementos();

backupManager.undo();
console.log(imageEditor); // bmp

backupManager.undo();
console.log(imageEditor); // jpg

backupManager.undo();
console.log(imageEditor); // gif

backupManager.undo();
console.log(imageEditor); // png

backupManager.undo(); // no mememtos
console.log(imageEditor); // png
