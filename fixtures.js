const { test, expect } = require('@playwright/test');
const { MainPage } = require('./Page/MainPage');
const { IssuesPage } = require('./Page/IssuesPage');
const { ActivityPage } = require('./Page/ActivityPage');
const { GuidePage } = require('./Page/GuidePage');
const { LoginPage } = require('./Page/LogInPage');

exports.test = test.extend({
  page: async ({ context }, use) => {

    await context.route('**/translate.googleapis.com/**', route => route.abort());
    await context.route('**/translate.google.com/**', route => route.abort());
    await context.route('**/*translate_a*', route => route.abort());

    const adBlockList = [
      'doubleclick.net',
      'googlesyndication.com',
      'googleadservices.com',
      'adservice.google.com',
      'ads.pubmatic.com',
      'cdn.adnxs.com'
    ];

    await context.route('**/*', (route) => {
      const url = route.request().url();
      if (adBlockList.some((domain) => url.includes(domain))) {
        route.abort();
      } else {
        route.continue();
      }
    })

    const page = await context.newPage();
    await use(page);
  },

  mainPage: async ({ page }, use) => {
    await use(new MainPage(page));
  }, 

  issuesPage: async ({ page }, use) => {
    await use(new IssuesPage(page));
  }, 

  activityPage: async ({ page }, use) => {
    await use(new ActivityPage(page));
  }, 

  guidePage: async ({ page }, use) => {
    await use(new GuidePage(page));
  }, 

  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  }
});


exports.expect = expect;