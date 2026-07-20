const { expect } = require('@playwright/test')

class ActivityPage {
    constructor(page) {
        this.page=page
        this.DateInput = page.locator('#from')
        this.ApplyBtn = page.getByRole('button', { name: 'Apply' });
        this.Title = page.locator('p.subtitle')
    }

    async setFromDate(date) {
        await this.DateInput.fill(date)
    }

    async clickApplyBtn() {
        await this.ApplyBtn.click()
    }
}

        module.exports = {ActivityPage } 

