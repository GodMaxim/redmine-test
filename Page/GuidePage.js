const { expect } = require('@playwright/test')

class GuidePage {
    constructor(page) {
        this.GermanLang = page.getByRole('link', { name: 'German' })
        this.TranslationTitle = page.getByRole('a.wiki-anchor', { name : 'Translations of the Redmine guide'})
    }

        async clickGermanLang() {
           await this.GermanLang.click() 
        }

    }

         module.exports = { GuidePage } 
