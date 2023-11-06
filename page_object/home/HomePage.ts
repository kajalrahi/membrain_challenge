import { Locator, Page } from "@playwright/test";
const { expect } = require('@playwright/test');

// Read the test data from JSON file
const testData = JSON.parse(JSON.stringify(require('../../test_data/test_data.json')))


class HomePage{
    page:Page
    logoMembrain:Locator
    linkProducts:Locator
    linkSeeMembrain:Locator
    textMakeHowYouSellWhyYouWin:Locator

    constructor(page: Page) {
        this.page = page
        this.logoMembrain = (page.locator('.site-logo--logo'))
        this.linkProducts = page.getByRole('menuitem', { name: 'Products' })
        this.linkSeeMembrain = page.getByRole('menuitem', { name: 'See Membrain' })
        this.textMakeHowYouSellWhyYouWin =page.getByRole('heading', { name: 'MAKE HOW YOU SELL WHY YOU WIN' })
    }

    async verifyMembrainHomePage() {
        await expect(this.logoMembrain).toBeVisible()
        await this.linkProducts.isVisible()
        await this.linkSeeMembrain.isVisible()
        await this.textMakeHowYouSellWhyYouWin.isVisible()
    }

    async launchUrl(){
        await this.page.goto(testData.url)
    }

}export default HomePage;
