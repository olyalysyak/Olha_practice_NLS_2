const { BasePage } = require("./basePage");
exports.RegistrationPage = class RegistrationPage extends BasePage {

    constructor(page) {
        super(page, '/sign-up');
        this.fullName = page.locator("[placeholder='Full name']");
        this.emailAddress = page.locator("[placeholder='Email address']");
        this.password = page.locator("[type='password']");
        this.registerButton = page.getByRole('button');
        this.signInLink = page.locator("[href='/sign-in']");
    }

    async register(userFullName, userEmailAddress, userPassword) {
        await this.fullName.type(userFullName);
        await this.emailAddress.type(userEmailAddress);
        await this.password.type(userPassword);
        await this.registerButton.click();

    }

    async signIn() {
        await this.signInLink.click(); 
    }

}