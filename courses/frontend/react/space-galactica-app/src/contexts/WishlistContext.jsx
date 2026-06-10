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
