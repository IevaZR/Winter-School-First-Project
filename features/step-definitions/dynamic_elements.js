import { Given, When, Then } from "@cucumber/cucumber";
import { browser, $ } from "@wdio/globals";
import dynamic_elementsPage from "../page-objects/dynamic_elements.page.js";

When ("I press the Start button", async function() {
    await dynamic_elementsPage.startButton.click()
})