/**
 * DOM content loaded
 */

document.addEventListener('DOMContentLoaded', () => {

/*  ==========================================================================
    Tabs
    ==========================================================================  */

    /**
     * Select all elements that act as tab triggers or tab targets
     */

    const tabTriggers = document.querySelectorAll('.js-tab');
    const tabTargets = document.querySelectorAll('.tab');

    /**
     * Update the active state of tab triggers
     * @param {string} tabId - The ID of the currently active tab
     */

    const tabTriggersUpdate = (tabId) => {
        for (const tabTrigger of tabTriggers) {
            const tabTriggerParent = tabTrigger.closest('.nav__item');
            tabTriggerParent.classList.remove('nav__item--active');
            if (tabTrigger.dataset.tab == tabId) {
                tabTriggerParent.classList.add('nav__item--active');
            }
        }
    };

    /**
     * Update the active state of tab targets
     * @param {string} tabId - The ID of the currently active tab
     */

    const tabTargetsUpdate = (tabId) => {
        for (const tabTarget of tabTargets) {
            tabTarget.classList.remove('tab--active');
            if (tabTarget.dataset.tab == tabId) {
                tabTarget.classList.add('tab--active');
            }
        }
    };

    /**
     * Add a click event listener to each tab trigger
     */

    for (const tabTrigger of tabTriggers) {
        tabTrigger.addEventListener('click', (e) => {
            e.preventDefault();
            const tabId = tabTrigger.dataset.tab;
            tabTriggersUpdate(tabId);
            tabTargetsUpdate(tabId);
        });
    }

/*  ==========================================================================
    Cases
    ==========================================================================  */

    /**
     * Select all elements that act as case triggers or case targets
     */

    const casesTriggers = document.querySelectorAll('.js-cases');
    const casesTargets = document.querySelectorAll('.cases__item');

    /**
     * Update the active state of the cases triggers
     * @param {string} casesId - The ID of the currently active case
     */

    const casesTriggersUpdate = (casesId) => {
        for (const casesTrigger of casesTriggers) {
            casesTrigger.classList.remove('subnav__link--active');
            if (casesTrigger.dataset.cases == casesId) {
                casesTrigger.classList.add('subnav__link--active');
            }
        }
    };

    /**
     * Update the active state of the case targets
     * @param {string} casesId - The ID of the currently active case
     */

    const casesTargetsUpdate = (casesId) => {
        for (const casesTarget of casesTargets) {
            casesTarget.classList.remove('cases__item--active');
            if (casesTarget.dataset.cases == casesId) {
                casesTarget.classList.add('cases__item--active');
            }
        }
    };

    /**
     * Add click event listeners to each case trigger
     */

    for (const casesTrigger of casesTriggers) {
        casesTrigger.addEventListener('click', (e) => {
            e.preventDefault();
            const casesId = casesTrigger.dataset.cases;
            casesTriggersUpdate(casesId);
            casesTargetsUpdate(casesId);
        });
    }

});