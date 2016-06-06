import { seedGroceryList } from '../seed-data/grocery-list';

export const getGroceryList = () => {
    return new Promise((resolve, reject) => {
        resolve(seedGroceryList);
    });
}
