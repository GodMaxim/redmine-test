const { expect } = require('@playwright/test')

class IssuesPage {
    constructor(page) {
        this.page=page
        this.StatusMenu = page.locator('#operators_status_id')
        this.ApplyBtn = page.locator('a.icon.icon-checked', { hasText: 'Apply' })
        this.ErrorMessage = page.locator('#errorExplanation')
        this.ClearBtn = page.getByRole('link', { name: 'Clear' })
    }
    
    async setStatus(statusName) {
        await this.StatusMenu.selectOption({ label: statusName })
    }


    async clickApply() {
        await this.ApplyBtn.click()
    }

    async clickClear() {
        await this.ClearBtn.click()
    }
}
         module.exports = { IssuesPage } 