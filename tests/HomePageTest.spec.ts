import { test, expect } from '@playwright/test';
import HomePage from '../page_object/home/HomePage';

test('Test that when membrane url is launched then logo and all menu items are displayed', async ({page}) => {

  let homePage = new HomePage(page)

  // Step1: Launch URL on browser
  homePage.launchUrl()

  // Step2:  Verify Home Page and its menu
  await homePage.verifyMembrainHomePage()
});