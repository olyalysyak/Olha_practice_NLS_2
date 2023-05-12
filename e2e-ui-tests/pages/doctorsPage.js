const { BasePage } = require("./basePage");
exports.DoctorsPage = class DoctorsPage extends BasePage {

    constructor(page) {
        super(page, '/vertical/doctors');
        this.doctorsButton = page.locator("//span[contains(text(),'Doctors')]");

    }
    
    async doctors() {
        await this.doctorsButton.click(); 
    }



}