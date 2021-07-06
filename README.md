# DuckDuckGo Browser Extensions

[![Build Status](https://travis-ci.org/duckduckgo/duckduckgo-privacy-extension.svg?branch=develop)](https://travis-ci.org/duckduckgo/duckduckgo-privacy-extension)

DuckDuckGo Firefox, Chrome, and Edge extensions

DuckDuckGo Privacy Extensions is distributed under the Apache 2.0 [License](LICENSE.md).

## Features

The extension provides users with an improved private browsing experience whilst maintaining "Privacy Simplified".

- [Removes known trackers from web pages] (https://spreadprivacy.com/duckduckgo-tracker-radar/)
  - Supports shims/surrogates - replaces some of the tracking scripts with stand-in's to avoid breakage
  - Uncloaks CNAME'd trackers.
- [Upgrades HTTP connections to be encrypted where possible](https://help.duckduckgo.com/duckduckgo-help-pages/privacy/smarter-encryption/)
- [Announces to a website they must not track or sell on your data](https://globalprivacycontrol.org/).
- Trims referrer header data
- Reduced fingerprintability of various browser features:
  - Canvas
  - Audio
  - Battery data
  - Screen sizes
  - Hardware acceleration
  - Temporary storage (Safari)
- Removes FLoC from Chromium based browsers
- Cookies
  - Reduces expiry of first party cookies set by third-party tracking scripts
  - Blocks third party cookies from known trackers
- Click to load for Facebook widgets

Additionally, we provide the ability for the user to disable these protections in the extension as well as [temporarily disabling them for broken sites too](https://github.com/duckduckgo/content-blocking-lists) that users have chosen to report.

## Latest Versions

[Firefox](https://addons.mozilla.org/en-US/firefox/addon/duckduckgo-for-firefox/)

[Chrome](https://chrome.google.com/webstore/detail/duckduckgo-privacy-essent/bkdgflcldnnnapblkhphbgpggdiikppg)

[Edge](https://microsoftedge.microsoft.com/addons/detail/duckduckgo-privacy-essent/caoacbimdbbljakfhgikoodekdnlcgpk)

### Safari

The code for the Safari extension is an Xcode project which you can find [here](https://github.com/duckduckgo/privacy-essentials-safari).

The Safari extension can be installed from the [App Store](https://apps.apple.com/us/app/duckduckgo-privacy-essentials/id1482920575?mt=12).


## Reporting a broken site

Report broken sites using the anonymous "Report Broken Site" link in the extension popup.

## Reporting bugs

See [Reporting bugs](CONTRIBUTING.md#reporting-bugs)

## Development

We're not accepting new feature pull requests right now. For bug fixes see [Development](CONTRIBUTING.md#development)

## Questions or help with the search engine
See [help pages](https://duck.co/help)
