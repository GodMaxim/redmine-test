const { expect } = require('@playwright/test')

class MainPage {
    constructor(page) {
        this.page=page;
        this.LogInBtn = page.locator('a[href="/login"]');
        this.GuideBtn = page.locator('#sidebar a.wiki-page', { hasText: "User's Guide" })
        this.SearchInput = page.locator('#q')
        this.IssueTab = page.locator('a.issues', { hasText: 'Issues' })
        this.ActivityTab = page.locator('a.activity', { hasText: 'Activity' })
        this.SearchResult = page.locator('#search-results')
        }

        async clickLogIn() {
          await this.LogInBtn.click();
        }

        async clickGuide() {
          await this.GuideBtn.click()
        }

  async Search(query) {
    await this.SearchInput.fill(query)
    await this.SearchInput.press('Enter')
  }

  async clickIssues() {
    await this.IssueTab.click()
  }

  async clickActivity() {
    await this.ActivityTab.click()
  }
}
    module.exports = { MainPage }        
