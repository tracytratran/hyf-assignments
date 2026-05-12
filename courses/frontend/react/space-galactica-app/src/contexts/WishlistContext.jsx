// 🧑🏽‍🚀 Task - Week 4 - part 1
// Create a Wishlist context to share the wishlist data across components.
// There is a /src/contexts folder- you will have to create a new file there.
// You will have to import and use the context provider here, so that all routes can access the context.
// The context should have the following properties:
// - planetsWishlist: an array of objects, each with a name and a thumbnail property.
// - addPlanetToWishlist: a function that adds an item to the wishlist.
// - removePlanetFromWishlist: a function that removes an item from the wishlist.
// - isPlanetInWishlist: a function that checks if an item is in the wishlist.
// - wishlistCount: a number that represents the number of items in the wishlist.
// ❗ NOTE: you have already created some of the above in other components. Copy those implementations into the context and adjust them if needed.

import { createContext, useContext, useState } from "react";

const WishlistContext = createContext(null);

export function WishlistProvider({ children }) {
  const [planetsWishlist, setPlanetsWishlist] = useState([]);

  const addPlanetToWishlist = (name, thumbnail) => {
    setPlanetsWishlist([...planetsWishlist, { name, thumbnail }]);
  };

  const removePlanetFromWishlist = (name) => {
    setPlanetsWishlist(
      planetsWishlist.filter((planet) => planet.name !== name),
    );
  };

  const isPlanetInWishlist = (planetName) => {
    return planetsWishlist.some((planet) => planet.name === planetName);
  };

  const wishlistCount = () => {
    return planetsWishlist.length;
  };

  return (
    <WishlistContext.Provider
      value={{
        planetsWishlist,
        addPlanetToWishlist,
        removePlanetFromWishlist,
        isPlanetInWishlist,
        wishlistCount,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishList() {
  return useContext(WishlistContext);
}
