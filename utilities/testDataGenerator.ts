import { faker } from "@faker-js/faker";

export function generateNewClientData() {
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password({ length: 10, memorable: true }),
    phone: faker.phone.number("+1##########"),
    address: faker.location.streetAddress(),
    city: faker.location.city(),
    zipCode: faker.location.zipCode(),
    country: faker.location.country(),
  };
}
