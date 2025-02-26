import { da, faker } from "@faker-js/faker";
import { sign } from "crypto";
import { stat } from "fs";


export function generateNewClientData() {
  return {
    title: faker.person.prefix(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    password: faker.internet.password({ length: 10, memorable: true }),
    dayDateOfBirth: "1",
    monthDateOfBirth: faker.date.month(),
    yearDateOfBirth: "1985",
    signupForNewsletter: true,
    receiveSpecialOffers: true,
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    company: faker.company.name(),
    address: faker.location.streetAddress(),
    addressTwo: faker.location.buildingNumber(),
    country: "Canada",
    state: "BC",
    city: faker.location.city(),
    zipCode: faker.location.zipCode(),
    phone: faker.phone.number({ style: "international" }),
  };
}

