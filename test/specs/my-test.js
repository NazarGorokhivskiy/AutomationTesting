const assert = require('chai').assert

describe('Opencart tests', () => {
    it('The most expensive Desktop shoulb be equal to "Sony VAIO"', () => {
        browser.url('http://openncart.herokuapp.com/')

        expect(browser).toHaveTitle('Your Store');

        const desktopNavItem = $(".nav.navbar-nav>li.dropdown:first-child");
        desktopNavItem.click();

        const showAllLink = $(".dropdown-menu > a");
        showAllLink.click();

        $("#input-sort").selectByAttribute("value", "http://openncart.herokuapp.com/index.php?route=product/category&path=20&sort=p.price&order=DESC")

        const firstDesktop = $('.product-layout.product-grid.col-lg-4.col-md-4.col-sm-6.col-xs-12')

        const captionElemText = firstDesktop.$(".caption h4 a").getText()

        expect(captionElemText).toBe("Sony VAIO")
    })
})