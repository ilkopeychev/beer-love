# React Beer APP

  Beer api created to be a unique project that uses templating to show data on the page and to be delivered to Limechain.
 
 ## Used stack
    react Context, Hooks, localStorage, hashed data structures, async functions
 ## Tasks done:
    1. The web app is listing some/all of the beers.
    2. API allows search, it is applied.
    3. Separate list of the items user favorited and they are saved into to local storrage, not saved to database
    4.  - Sound added achieved with useSound hook
    5. "Get Random Beer" - When user clicks it show one random beer.
    6. FavouriteBeers are stored under key "FavouritesSet"(local storage)  which is set(hashed data with no repetition)
    7. Able to make a wallet and connect it to Metamask (Chrome Widget).
       Appi first detects if Metamask is connected to our domain. If not, user see red message. 
    8. Unlock the FE functionality only if a wallet is connected. After metamask is connected user should be able to see
       interactive blurred screen with only one button active which is ConnectWallet. After wallet is connected user 
       is free to use the app.
 
## Resources
https://punkapi.com/


## Built With
- [https://punkapi.com/](https://punkapi.com/) - a api for beer information
- [material-ui.com](material-ui.com) - a JavaScript library for building user interfaces(Webpack and Babel configurations setted)
- [Font Awesome](https://fontawesome.com/) - a resource for icons
- useSound hook
- [Ethers.js - ethers.io](Ethers.js - ethers.io) - a JavaScript library that allows developers to interact with the Ethereum blockchain

## Author
* **Ilko Peychev** - *React Developer*
