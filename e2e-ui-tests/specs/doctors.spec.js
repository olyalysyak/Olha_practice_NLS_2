const { test, expect, request } = require('@playwright/test');
const { users } = require('../../test-data/users');
const config = require("../../playwright.config");
const { DoctorsPage } = require('../pages/doctorsPage');
const { LoginPage } = require('../pages/loginPage');

let loginPage;
let doctorsPage;

const user = users[config.default.use.env].user;

test.describe('Open Doctors Page tests', () => {

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.open();

        await loginPage.login(user.email, user.password);
        await expect(page).toHaveURL('http://omega-stage.qa.nolimit.school/vertical/default-dashboard');
        doctorsPage = new DoctorsPage(page);
    });

    test.only('Open Doctors Page', async ({ page }) => {
        await doctorsPage.doctors();
        await expect(page).toHaveURL('http://omega-stage.qa.nolimit.school/vertical/doctors');
    });


});
