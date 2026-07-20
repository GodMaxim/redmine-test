const { expect } = require('@playwright/test')

class LoginPage {
    constructor(page) {
        this.page=page
        this.UsernameInput = page.locator('#username')
        this.PasswordInput = page.locator('#password')
        this.SubmitBtn = page.locator('#login-submit')
        this.ErrorMessage = page.getByText('Invalid user or password')
    }

        async Username(query) {
            await this.UsernameInput.fill(query)
        }

        async Password(query) {
            await this.PasswordInput.fill(query)
        }
        
        async clickSubmit() {
        await this.SubmitBtn.click()
        }
    }

        module.exports = { LoginPage } 
