// ==UserScript==
// @name			Echelon :: Title Text
// @description 	Changes the window title formats.
// @author			aubymori
// @include			main
// ==/UserScript===

function changeTitleFormats()
{
    let root = document.documentElement;
    let titles = BrandUtils.getUserTitles();

    root.dataset.titleDefault = titles.default;
    root.dataset.titlePrivate = titles.private;
    root.dataset.contentTitleDefault = titles.contentDefault;
    root.dataset.contentTitlePrivate = titles.contentPrivate;

    /* Update initial title. */
    document.title = PrivateBrowsingUtils.isBrowserPrivate(gBrowser)
    ? titles.private
    : titles.default;
}