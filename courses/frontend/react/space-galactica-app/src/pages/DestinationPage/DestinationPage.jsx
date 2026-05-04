import { useState } from "react";
import styles from "./DestinationPage.module.css";
import PlanetCard from "./PlanetCard";
import { AddWishlistItem } from "./AddWishlistItem";
import { PlanetsWishlistItem } from "./PlanetsWishlistItem";

const planets = [
  {
    name: "Europa",
    description:
      "Europa, one of Jupiter’s moons, is an icy world with a hidden ocean beneath its surface. This mysterious moon is a prime candidate for the search for extraterrestrial life, making it a thrilling destination for space explorers.",
    thumbnail: "/destination/image-europa.png",
  },
  {
    name: "Mars",
    description:
      "Mars, the Red Planet, is a barren yet fascinating world with vast deserts, towering volcanoes, and the deepest canyon in the solar system. As humanity’s next frontier, Mars invites us to dream of colonization and the possibilities of life beyond Earth.",
    thumbnail: "/destination/image-mars.png",
  },
  {
    name: "Moon",
    description:
      "Our closest celestial neighbor, the Moon, is a silent witness to Earth's history. With its stunning craters and desolate landscapes, the Moon offers a unique glimpse into space exploration's past and future, making it a perfect destination for lunar adventurers.",
    thumbnail: "/destination/image-moon.png",
  },
  {
    name: "Titan",
    description:
      "Titan, Saturn's largest moon, is a world of dense atmosphere and liquid methane lakes. This enigmatic moon is shrouded in a thick orange haze, concealing a landscape that is both alien and strangely familiar, beckoning explorers to uncover its secrets.",
    thumbnail: "/destination/image-titan.png",
  },
];

export const Destinations = () => {
  const [planetsWishlist, setPlanetsWishlist] = useState([]);

  const onAddWishlistItem = (name, thumbnail) => {
    setPlanetsWishlist([...planetsWishlist, { name, thumbnail }]);
  };

  const isPlanetInWishlist = (planetName) => {
    // 🧑🏽‍🚀 Task - Week 2
    // This should be a simple function to check if a given planet is selected.
    // You will need to work with the array of planets wishlist.
    return planetsWishlist.some((planet) => planet.name === planetName);
  };

  const togglePlanetSelection = (name, thumbnail) => {
    // 🧑🏽‍🚀 Task - Week 2
    // When a planet is selected or deselected (toggled), the state of the wishlist planets should be updated accordingly by
    // calling the addPlanetToWishlist or removePlanetFromWishlist function. You will need a condition here.
    isPlanetInWishlist(name)
      ? removePlanetFromWishlist(name)
      : addPlanetToWishlist(name, thumbnail);
  };

  const addPlanetToWishlist = (name, thumbnail) => {
    // 🧑🏽‍🚀 Task - Week 2
    // Add the planet to the planets wishlist state.
    setPlanetsWishlist([...planetsWishlist, { name, thumbnail }]);
  };

  const removePlanetFromWishlist = (name) => {
    // 🧑🏽‍🚀 Task - Week 2
    // Remove the planet from the planets wishlist state.
    setPlanetsWishlist(
      planetsWishlist.filter((planet) => planet.name !== name),
    );
  };

  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>Travel destinations</h1>
        <section className="card">
          <h2>Wishlist</h2>
          {/* 🧑🏽‍🚀 Task - Week 2 */}
          {/* Display the number of wishlist planets, if there are any planets in the wishlist. */}
          {/* 🧑🏽‍🚀 Use a variable to display the number of wishlist planets:  */}

          {planetsWishlist.length > 0 && (
            <p>
              You have {planetsWishlist.length} planet
              {planetsWishlist.length > 1 ? "s" : ""} in your wishlist.
            </p>
          )}
          {/* Display the "no planets" message if the wishlist is empty. */}
          {planetsWishlist.length === 0 && (
            <p>No planets in your wishlist :(</p>
          )}

          {/* 🧑🏽‍🚀 Task - Week 3 */}
          {/* Use the AddWishlistItem component here. */}
          <AddWishlistItem onAddWishlistItem={onAddWishlistItem} />

          {/* 🧑🏽‍🚀 Task - Week 3*/}
          {/* Use .map() to display the wishlist planets with the PlanetsWishlistItem component.  */}
          <h3>Your current wishlist</h3>
          <div className={styles.wishlistList}>
            {planetsWishlist.map((planet) => (
              <PlanetsWishlistItem
                name={planet.name}
                thumbnail={planet.thumbnail}
                onRemove={() => removePlanetFromWishlist(planet.name)}
              />
            ))}
          </div>
        </section>
        <section className="card">
          <h2>Possible destinations</h2>
          {/* 🧑🏽‍🚀 Task - Week 2 */}
          {/* Add all 4 planets: Europa, Moon, Mars, Titan.  */}
          {/* Use the README.md file for descriptions. */}
          {/* Create a <PlanetCard /> component, which accepts the following props: name, description, thumbnail, isSelected, togglePlanetSelection */}
          <PlanetCard
            name={planets[0].name.toUpperCase()}
            description={planets[0].description}
            thumbnail={planets[0].thumbnail}
            isSelected={isPlanetInWishlist(planets[0].name)}
            togglePlanetSelection={() =>
              togglePlanetSelection(planets[0].name, planets[0].thumbnail)
            }
          />
          <PlanetCard
            name={planets[1].name.toUpperCase()}
            description={planets[1].description}
            thumbnail={planets[1].thumbnail}
            isSelected={isPlanetInWishlist(planets[1].name)}
            togglePlanetSelection={() =>
              togglePlanetSelection(planets[1].name, planets[1].thumbnail)
            }
          />
          <PlanetCard
            name={planets[2].name.toUpperCase()}
            description={planets[2].description}
            thumbnail={planets[2].thumbnail}
            isSelected={isPlanetInWishlist(planets[2].name)}
            togglePlanetSelection={() =>
              togglePlanetSelection(planets[2].name, planets[2].thumbnail)
            }
          />
          <PlanetCard
            name={planets[3].name.toUpperCase()}
            description={planets[3].description}
            thumbnail={planets[3].thumbnail}
            isSelected={isPlanetInWishlist(planets[3].name)}
            togglePlanetSelection={() =>
              togglePlanetSelection(planets[3].name, planets[3].thumbnail)
            }
          />
        </section>
      </main>
    </div>
  );
};

export default Destinations;

// 🧑🏽‍🚀 Task - Week 4 - part 2
// Hate to break it to you, but you will have to make some changes to the code you already wrote.
// Now that you have context, grab and use the context data in this.
// You will need to replace some of the variables and functions with the ones from the context.
