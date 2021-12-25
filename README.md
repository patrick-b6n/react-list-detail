# react-list-detail

Proof-of-concept for a list-detail page without using modals.

**Goals**

* keep loaded list items
* keep list scroll position

Uses `outlet` of `react-router-dom` for easy parent-child views to keep the loaded list items.

Implements a custom `useRestoreScrollPosition()` hook, to restore the scroll position of `window` based on a given condition. 