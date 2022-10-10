import { faker } from '@faker-js/faker';

function generateArray() {
  return faker.random
    .word()
    .split('')
    .map(() => ({
      id: faker.datatype.uuid(),
      name: faker.random.word()
    }));
}

export default generateArray;
