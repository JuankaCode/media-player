import Singleton from './Singleton';

const a = Singleton.getInstance();
const b = Singleton.getInstance();

console.log(`A is iqual to B? ${a===b}`);