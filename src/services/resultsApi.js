import { db } from './firebase';
export const results = () => db.ref('results');