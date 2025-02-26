import { Page, Locator } from "@playwright/test";
import { BasePage } from "./base.page";
import { SIGNUP_PAGE_TEXT } from "../../constants/signUpPageText";

export class SignupPage extends BasePage {
  readonly signupForm: Locator;
  //Account Information
  readonly title: Locator;
  readonly name: Locator;
  readonly emailAddress: Locator;
  readonly password: Locator;
  readonly dateOfBirth: Locator;
  readonly dayDateOfBirth: Locator;
  readonly monthDateOfBirth: Locator;
  readonly yearDateOfBirth: Locator;
  readonly signUpNewsLetter: Locator;
  readonly receiveSpecialOffers: Locator;

  //Address Information
  readonly addressForm: Locator;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly company: Locator;
  readonly addressFieldOne: Locator;
  readonly addressFieldTwo: Locator;
  readonly country: Locator;
  readonly state: Locator;
  readonly city: Locator;
  readonly zipCode: Locator;
  readonly mobileNumber: Locator;
  readonly createAccountButton: Locator;

  constructor(page: Page) {
    super(page);

    this.signupForm = this.page.locator(".login-form");
    //Account Information
    this.title = this.page.getByTestId("title");
    this.name = this.signupForm.getByTestId("name");
    this.emailAddress = this.signupForm.getByTestId("email");
    this.password = this.signupForm.getByTestId("password");
    this.dateOfBirth = this.signupForm.getByTestId("signup-dob");
    this.dayDateOfBirth = this.signupForm.getByTestId("days");
    this.monthDateOfBirth = this.signupForm.getByTestId("months");
    this.yearDateOfBirth = this.signupForm.getByTestId("years");
    this.signUpNewsLetter = this.signupForm.locator("#newsletter");
    this.receiveSpecialOffers = this.signupForm.locator("#optin");

    //Address Information
    this.firstName = this.signupForm.getByTestId("first_name");
    this.lastName = this.signupForm.getByTestId("last_name");
    this.company = this.signupForm.getByTestId("company");
    this.addressFieldOne = this.signupForm.getByTestId("address");
    this.addressFieldTwo = this.signupForm.getByTestId("address2");
    this.country = this.signupForm.getByTestId("country");
    this.state = this.signupForm.getByTestId("state");
    this.city = this.signupForm.getByTestId("city");
    this.zipCode = this.signupForm.getByTestId("zipcode");
    this.mobileNumber = this.signupForm.getByTestId("mobile_number");
    this.createAccountButton = this.signupForm.getByTestId("create-account");
  }

  async registerNewUser(
    title: string,
    password: string,
    dayDateOfBirth: string,
    monthDateOfBirth: string,
    yearDateOfBirth: string,
    signUpForNewsletter: boolean,
    receiveSpecialOffers: boolean,
    firstName: string,
    lastName: string,
    company: string,
    addressFieldOne: string,
    addressFieldTwo: string,
    country: string,
    state: string,
    city: string,
    zipCode: string,
    mobileNumber: string
  ) {
    if (title == SIGNUP_PAGE_TEXT.TITLE_MR) {
      await this.title.nth(0).click();
    } else {
      await this.title.nth(1).click();
    }
    await this.password.fill(password);
    await this.dayDateOfBirth.selectOption(dayDateOfBirth);
    await this.monthDateOfBirth.selectOption(monthDateOfBirth);
    await this.yearDateOfBirth.selectOption(yearDateOfBirth);

    if (signUpForNewsletter) {
      await this.signUpNewsLetter.check();
    } else {
      await this.signUpNewsLetter.uncheck();
    }
    if (receiveSpecialOffers) {
      await this.receiveSpecialOffers.check();
    } else {
      await this.receiveSpecialOffers.uncheck();
    }

    await this.firstName.fill(firstName);
    await this.lastName.fill(lastName);
    await this.addressFieldOne.fill(addressFieldOne);
    await this.addressFieldTwo.fill(addressFieldTwo);
    await this.company.fill(company);
    await this.country.selectOption(country);
    await this.state.fill(state);
    await this.city.fill(city);
    await this.zipCode.fill(zipCode);
    await this.mobileNumber.fill(mobileNumber);
    await this.createAccountButton.click();
  }
}
