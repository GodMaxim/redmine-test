const { expect } = require('@playwright/test')

class LoginPage {
    constructor(page) {
        this.page=page
        this.UsernameInput = page.locator('#username')
        this.PasswordInput = page.locator('#password')
        this.SubmitBtn = page.locator('#login-submit')
        this.ErrorMessage = page.getByText('Invalid user or password')
    }

        async Username(text) {
            await this.UsernameInput.fill(text)
        }

        async Password(text) {
            await this.PasswordInput.fill(text)
        }
        
        async clickSubmit() {
        await this.SubmitBtn.click()
        }
    }

        module.exports = { LoginPage } 
