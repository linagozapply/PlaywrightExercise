# Playwright Test Automation Project  

## Overview  
This project is built using **Playwright**, a modern test automation framework designed for reliable UI testing. Playwright provides a robust mechanism for selecting UI elements and executing tests efficiently across multiple devices.The test suite validates the **complete purchase flow** on the website **[Automation Exercise](https://automationexercise.com/)**.   

## Features  
- **Automated UI Testing**: Ensures smooth functionality of the full purchase flow.  
- **Cross-Browser & Device Testing**: Runs tests on both **desktop** and **mobile views**.  
- **Dynamic Element Selection**: Configured to handle elements without dedicated test data attributes.  
- **Headless & UI Mode Support**: Runs tests either in **headless mode** or using the **Playwright UI tool**.  
## Link to Document of the Test Case
https://docs.google.com/document/d/1LUrOxf1xRRDM-7ZGWpmg_T2OObNoJQXw1-PSFNYV0wg/edit?usp=sharing

## Project Configuration  

### Selecting Elements  
Since the website lacks consistent `data-testid` attributes, alternative strategies were used:  
- **Preferred:** `data-qa` attributes were used where available. The Playwright config was updated as follows:  
  ```js
  testIdAttribute: "data-qa"; // Enables `getByTestId()` to use `data-qa`
  ```  
- **Alternative:** Elements were located using:  
  - **ID selectors** (when available)  
  - **Role-based locators** (using text stored in `Contents`)  
  - **Class names** (minimized due to the possibility of change by developers)  

### Running Tests on Desktop & Mobile  
The website has **no UI differences** between desktop and mobile views. To simulate mobile testing, the **Playwright config file** was updated with the following device profile:  
  ```js
  {
    name: "Mobile Chrome",
    use: { browserName: "chromium", ...devices["Pixel 5"] },
  },
  ```  

## Running the Tests  

### 1. Headless Mode  
Execute tests in headless mode using:  
```sh
npx playwright test
```  

### 2. UI Mode (Playwright Test Runner)  
Run tests with a visual UI interface using:  
```sh
npx playwright test --ui
```  

## Project Structure  
```sh
📂 test-automation-project  
 ├── 📂 constants/       # Contains text for elements and slug   
 ├── 📂 fixtures/        # Contains fixtures files
 ├── 📂 page-object/     # POM
    ├── 📂 modals/       # Contains modals
    ├── 📂 pages/        # Contains pages with elements and actions
    ├── 📂 sections/     # Contains sections with elements and actions that are part of the page
 ├── 📂 tests/           # Contains test case  
 ├── 📂 utilities/       # Contains all the utilities for generating data or actions on fields
 ├── 📂 reports/         # Test execution reports (if enabled)  
 ├── 📜 playwright.config.js  # Playwright settings file  
 ├── 📜 package.json     # Project dependencies  
 ├── 📜 README.md        # Project documentation  
```  

## Prerequisites  
Before running tests, ensure you have:  
- **Node.js** installed (LTS recommended)  
- Playwright installed via:  
  ```sh
  npm install 
  ```  
- Browsers test result:  
  ```sh
 npx playwright show-report
  ```  


## Future Improvements  
- Enhance test coverage with additional edge cases.  
- Integrate reporting tools like **Allure** for better test insights.  
- Implement a CI/CD pipeline for automated test execution.  

---  

## Feedback  
Let me know if you need any additional sections to improve the README further! 🚀
