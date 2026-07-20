const { test, expect } = require('../fixtures');
import { log } from 'node:console'
import { ActivityPage } from '../Page/ActivityPage'
import { GuidePage} from '../Page/GuidePage'
import { IssuesPage } from '../Page/IssuesPage'
import { LoginPage } from '../Page/LogInPage'
import { MainPage} from '../Page/MainPage'

test.describe ("Redmine site", () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    });

    test("Validate Login with Invalid Credentials", async ({ page, mainPage, loginPage }) => {
      await mainPage.clickLogIn()
      await loginPage.Username('123')
      await loginPage.Password('123')
      await loginPage.clickSubmit()
      await page.waitForTimeout(3000);
      await expect(loginPage.ErrorMessage).toBeVisible({ timeout: 10000 })
      await expect(loginPage.ErrorMessage).toContainText('Invalid user or password')
      });

    test("Verify Language Switch", async ({ page, mainPage, guidePage }) => {
      await mainPage.clickGuide()
      await guidePage.clickGermanLang()
      await page.waitForTimeout(3000)
      await expect(page).toHaveURL(/.*DeGuide/)
    });

     test("Verify search functionality on the main page", async ({ page, mainPage }) => {
      await mainPage.Search('Testing')
      await page.waitForTimeout(3000)
      await expect(mainPage.SearchResult).toContainText('Testing')
     });

     test("Verify 'Clear' Filter Functionality on Issues Page", async ({ page, mainPage, issuesPage }) => {
      await mainPage.clickIssues()
      await issuesPage.setStatus('is')
      await issuesPage.clickApply()
      await page.waitForTimeout(3000)
      await expect(issuesPage.ErrorMessage).toContainText('Status cannot be blank')
      await issuesPage.clickClear()
      await expect(page).toHaveURL(/.*issues\?set_filter/)
     });

      test("Verify Calendar Date Filter", async ({ page, mainPage, activityPage }) => {
        await mainPage.clickActivity()
        await activityPage.setFromDate('2026-07-10')
        await activityPage.clickApplyBtn()
        await page.waitForTimeout(3000)
        await expect(activityPage.Title).toContainText('From 2026-07-08 to 2026-07-10')
        await expect(page).toHaveURL(/.*from=2026-07-10/)
    });
   });
