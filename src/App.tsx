import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  MenuItem,
  Snackbar,
  TextField,
} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import React, { useEffect, useState } from "react";
import "./App.css";
import { BakeryMenuItem } from "./BakeryMenuItem";
import { Cart } from "./Cart";

export interface IMenuItem {
  allergens: string[];
  description: string;
  image: string;
  item: string;
  price: number;
  subtype: string;
  type: string;
}

function App() {
  // Full menu
  const fullMenu: IMenuItem[] = [
    {
      item: "Vanilla Macaron",
      type: "Cookie",
      subtype: "Macaron",
      allergens: ["Dairy", "Eggs", "Nuts"],
      image: "VanillaMacaron.png",
      price: 3,
      description:
        "Our famous vanilla bean macaron with white chocolate ganache filling.",
    },
    {
      item: "Chocolate Macaron",
      type: "Cookie",
      subtype: "Macaron",
      allergens: ["Dairy", "Eggs", "Nuts"],
      image: "ChocolateMacaron.png",
      price: 3,
      description:
        "Our famous dark chocolate macaron with dark chocolate ganache filling.",
    },
    {
      item: "Raspberry Macaron",
      type: "Cookie",
      subtype: "Macaron",
      allergens: ["Dairy", "Eggs", "Nuts"],
      image: "RaspberryMacaron.png",
      price: 3,
      description:
        "Our famous raspberry macaron with raspberry buttercream filling.",
    },
    {
      item: "Pistachio Macaron",
      type: "Cookie",
      subtype: "Macaron",
      allergens: ["Dairy", "Eggs", "Nuts"],
      image: "PistachioMacaron.png",
      price: 3,
      description:
        "Our famous pistachio macaron with white chocolate pistachio ganache filling.",
    },
    {
      item: "Lemon Macaron",
      type: "Cookie",
      subtype: "Macaron",
      allergens: ["Dairy", "Eggs", "Nuts"],
      image: "LemonMacaron.png",
      price: 3,
      description: "Our famous lemon macaron with lemon curd filling.",
    },
    {
      item: "Classic Profiterole",
      type: "Pastry",
      subtype: "Profiterole",
      allergens: ["Dairy", "Eggs", "Flour"],
      image: "VanillaProfiterole.jpeg",
      price: 5,
      description: "Our classic vanilla profiterole.",
    },
    {
      item: "Chocolate Profiterole",
      type: "Pastry",
      subtype: "Profiterole",
      allergens: ["Dairy", "Eggs", "Flour"],
      image: "ChocolateProfiterole.jpeg",
      price: 5,
      description: "Our classic profiterole topped with chocolate ganache.",
    },
    {
      item: "Chocolate Profiterole with Nuts",
      type: "Pastry",
      subtype: "Profiterole",
      allergens: ["Dairy", "Eggs", "Flour", "Nuts"],
      image: "NutsProfiterole.jpeg",
      price: 5,
      description:
        "Our classic profiterole topped with chocolate ganache and nuts.",
    },
    {
      item: "Classic Croissant",
      type: "Pastry",
      subtype: "Croissant",
      allergens: ["Dairy", "Eggs", "Flour"],
      image: "Croissant.jpeg",
      price: 4,
      description: "Our classic buttery croissant.",
    },
    {
      item: "Chocolate Croissant",
      type: "Pastry",
      subtype: "Croissant",
      allergens: ["Dairy", "Eggs", "Flour"],
      image: "ChocolateCroissant.jpeg",
      price: 5,
      description: "Our classic buttery croissant filled with chocolate.",
    },
    {
      item: "Apricot Croissant",
      type: "Pastry",
      subtype: "Croissant",
      allergens: ["Dairy", "Eggs", "Flour"],
      image: "ApricotCroissant.jpeg",
      price: 5,
      description: "Our classic buttery croissant filled with apricot jam.",
    },
    {
      item: "Strawberry Croissant",
      type: "Pastry",
      subtype: "Croissant",
      allergens: ["Dairy", "Eggs", "Flour"],
      image: "StrawberryCroissant.jpeg",
      price: 5,
      description: "Our classic buttery croissant filled with strawberry jam.",
    },
    {
      item: "Custard Croissant",
      type: "Pastry",
      subtype: "Croissant",
      allergens: ["Dairy", "Eggs", "Flour"],
      image: "CustardCroissant.jpeg",
      price: 5,
      description: "Our classic buttery croissant filled with vanilla custard.",
    },
    {
      item: "Madeleine",
      type: "Cookie",
      subtype: "Mini",
      allergens: ["Dairy", "Eggs", "Flour"],
      image: "Madeleine.jpeg",
      price: 3,
      description: "Our sweet vanilla madeleine.",
    },
    {
      item: "Canele",
      type: "Cake",
      subtype: "Mini",
      allergens: ["Dairy", "Eggs", "Flour"],
      image: "Canele.jpeg",
      price: 5,
      description: "Our sweet vanilla rum cake with custard filling.",
    },
    {
      item: "Chocolate Fondant",
      type: "Cake",
      subtype: "Mini",
      allergens: ["Dairy", "Eggs", "Flour"],
      image: "ChocolateFondant.jpeg",
      price: 5,
      description: "Our dark chocolate truffle with salted caramel filling.",
    },
    {
      item: "Hot Chocolate",
      type: "Drink",
      subtype: "Hot",
      allergens: ["Dairy"],
      image: "HotChocolate.jpeg",
      price: 5,
      description: "Our rich, dark chocolate French hot chocolate.",
    },
    {
      item: "Coffee",
      type: "Drink",
      subtype: "Hot",
      allergens: [],
      image: "Coffee.jpeg",
      price: 3,
      description: "A plain black coffee.",
    },
    {
      item: "Palmier",
      type: "Cookie",
      subtype: "Mini",
      allergens: ["Dairy", "Eggs", "Flour"],
      image: "Palmier.jpeg",
      price: 4,
      description: "Our classic buttery palmier.",
    },
    {
      item: "Coconut Truffle",
      type: "Candy",
      subtype: "Truffle",
      allergens: ["Dairy", "Nuts"],
      image: "Coconut.jpeg",
      price: 2,
      description: "Our white chocolate truffle with coconut coating.",
    },
    {
      item: "Dark Chocolate Vanilla Truffle",
      type: "Candy",
      subtype: "Truffle",
      allergens: ["Dairy"],
      image: "DarkVanilla.jpeg",
      price: 2,
      description: "Our dark chocolate truffle with vanilla filling.",
    },
    {
      item: "Dark Chocolate Caramel Truffle",
      type: "Candy",
      subtype: "Truffle",
      allergens: ["Dairy"],
      image: "DarkCaramel.jpeg",
      price: 2,
      description: "Our dark chocolate truffle with salted caramel filling.",
    },
    {
      item: "Milk Chocolate Caramel Truffle",
      type: "Candy",
      subtype: "Truffle",
      allergens: ["Dairy"],
      image: "MilkCaramel.jpeg",
      price: 2,
      description: "Our milk chocolate truffle with salted caramel filling.",
    },
    {
      item: "Milk Chocolate Peanut Truffle",
      type: "Candy",
      subtype: "Truffle",
      allergens: ["Dairy", "Nuts"],
      image: "MilkNuts.jpeg",
      price: 2,
      description: "Our milk chocolate truffle with peanuts.",
    },
    {
      item: "Strawberry Rhubarb Truffle",
      type: "Candy",
      subtype: "Truffle",
      allergens: ["Dairy"],
      image: "StrawberryRhubarb.jpeg",
      price: 2,
      description:
        "Our white chocolate truffle with strawberry coating and rhubarb filling.",
    },
    {
      item: "Vanilla Truffle",
      type: "Candy",
      subtype: "Truffle",
      allergens: ["Dairy"],
      image: "VanillaTruffle.jpeg",
      price: 2,
      description: "Our milk chocolate truffle filled with vanilla ganache.",
    },
  ];

  // State variables
  const [allergensChecked, setAllergensChecked] = useState<boolean[]>([
    false,
    false,
    false,
    false,
  ]);
  const [cakeChecked, setCakeChecked] = useState<boolean>(true);
  const [candyChecked, setCandyChecked] = useState<boolean>(true);
  const [cartItems, setCartItems] = useState<
    Map<string, { price: number; quantity: number }>
  >(new Map());
  const [cookiesChecked, setCookiesChecked] = useState<boolean>(true);
  const [currentMenu, setCurrentMenu] = useState<IMenuItem[]>(fullMenu);
  const [drinksChecked, setDrinksChecked] = useState<boolean>(true);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [pastriesChecked, setPastriesChecked] = useState<boolean>(true);
  const [sortBy, setSortBy] = useState<string>("Price");
  const [updateCart, setUpdateCart] = useState(true);

  const handleSortChange = (event: SelectChangeEvent) => {
    setSortBy(event.target.value as string);
  };

  const addToCart = (itemName: string, itemPrice: number) => {
    const message = itemName + " added to cart";
    setNotificationMessage(message);
    const quantity = cartItems.get(itemName)?.quantity ?? 0;
    const items = cartItems;
    items.set(itemName, {
      price: itemPrice,
      quantity: quantity + 1,
    });
    setCartItems(items);
    setUpdateCart(!updateCart);
    setNotificationOpen(true);
    setTimeout(() => {
      setNotificationOpen(false);
    }, 1500);
  };

  const subFromCart = (itemName: string, itemPrice: number) => {
    const quantity = cartItems.get(itemName)?.quantity ?? 0;
    const items = cartItems;
    let message = "";

    if (quantity > 1) {
      message = itemName + " removed from cart";
      items.set(itemName, {
        price: itemPrice,
        quantity: quantity - 1,
      });
      setCartItems(items);
      setUpdateCart(!updateCart);
    } else if (quantity == 1) {
      message = itemName + " removed from cart";
      items.delete(itemName);
      setCartItems(items);
      setUpdateCart(!updateCart);
    } else {
      message = "Nothing to remove from cart";
    }
    setNotificationMessage(message);
    setNotificationOpen(true);
    setTimeout(() => {
      setNotificationOpen(false);
    }, 1500);
  };

  // Filter menu
  useEffect(() => {
    let menu = fullMenu;
    if (cookiesChecked == false) {
      menu = menu.filter((item) => item.type != "Cookie");
    }
    if (pastriesChecked == false) {
      menu = menu.filter((item) => item.type != "Pastry");
    }
    if (cakeChecked == false) {
      menu = menu.filter((item) => item.type != "Cake");
    }
    if (candyChecked == false) {
      menu = menu.filter((item) => item.type != "Candy");
    }
    if (drinksChecked == false) {
      menu = menu.filter((item) => item.type != "Drink");
    }

    if (allergensChecked[0]) {
      menu = menu.filter((item) => !item.allergens.includes("Dairy"));
    }
    if (allergensChecked[1]) {
      menu = menu.filter((item) => !item.allergens.includes("Eggs"));
    }
    if (allergensChecked[2]) {
      menu = menu.filter((item) => !item.allergens.includes("Flour"));
    }
    if (allergensChecked[3]) {
      menu = menu.filter((item) => !item.allergens.includes("Nuts"));
    }
    setCurrentMenu(menu);
  }, [
    cookiesChecked,
    pastriesChecked,
    drinksChecked,
    allergensChecked,
    cakeChecked,
    candyChecked,
  ]);

  const categoryKey = (a: IMenuItem, b: IMenuItem) => {
    if (a.type < b.type) {
      return -1;
    } else if (a.type > b.type) {
      return 1;
    } else {
      if (a.subtype < b.subtype) {
        return -1;
      } else if (a.subtype > b.subtype) {
        return 1;
      }
      return 0;
    }
  };
  const alphaKey = (a: IMenuItem, b: IMenuItem) => {
    if (a.item < b.item) {
      return -1;
    } else if (a.item > b.item) {
      return 1;
    } else {
      return 0;
    }
  };
  const priceKey = (a: IMenuItem, b: IMenuItem) => {
    if (a.price < b.price) {
      return -1;
    } else if (a.price > b.price) {
      return 1;
    } else {
      return 0;
    }
  };

  let key =
    sortBy == "Price"
      ? priceKey
      : sortBy == "Category"
      ? categoryKey
      : alphaKey;

  return (
    <div className="App">
      <div className="header">
        <h1>La Patisserie CS1300</h1>
      </div>
      <div className="contentWrapper">
        <div className="filters">
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Sort by</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={sortBy}
              label="Sort by"
              onChange={handleSortChange}
            >
              <MenuItem value="Category">Category</MenuItem>
              <MenuItem value="Alphabetical">Alphabetical</MenuItem>
              <MenuItem value="Price">Price</MenuItem>
            </Select>
          </FormControl>
          <br />
          <Button
            onClick={() => {
              setAllergensChecked([false, false, false, false]);
              setCookiesChecked(true);
              setCakeChecked(true);
              setPastriesChecked(true);
              setDrinksChecked(true);
              setCandyChecked(true);
            }}
          >
            Reset filters
          </Button>
          <p>Types:</p>
          <FormControlLabel
            label="All"
            control={
              <Checkbox
                checked={
                  cookiesChecked &&
                  cakeChecked &&
                  pastriesChecked &&
                  drinksChecked &&
                  candyChecked
                }
                indeterminate={
                  cookiesChecked != cakeChecked ||
                  cookiesChecked != pastriesChecked ||
                  cookiesChecked != candyChecked ||
                  cookiesChecked != drinksChecked
                }
                onChange={() => {
                  if (
                    cookiesChecked &&
                    cakeChecked &&
                    pastriesChecked &&
                    drinksChecked &&
                    candyChecked
                  ) {
                    setCookiesChecked(false);
                    setCakeChecked(false);
                    setPastriesChecked(false);
                    setDrinksChecked(false);
                    setCandyChecked(false);
                  } else {
                    setCookiesChecked(true);
                    setCakeChecked(true);
                    setPastriesChecked(true);
                    setDrinksChecked(true);
                    setCandyChecked(true);
                  }
                }}
              />
            }
          />
          <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
            <FormGroup>
              <FormControlLabel
                label="Cakes"
                control={
                  <Checkbox
                    checked={cakeChecked}
                    onChange={() => setCakeChecked(!cakeChecked)}
                  />
                }
              />
              <FormControlLabel
                label="Candies"
                control={
                  <Checkbox
                    checked={candyChecked}
                    onChange={() => setCandyChecked(!candyChecked)}
                  />
                }
              />
              <FormControlLabel
                label="Cookies"
                control={
                  <Checkbox
                    checked={cookiesChecked}
                    onChange={() => {
                      setCookiesChecked(!cookiesChecked);
                    }}
                  />
                }
              />
              <FormControlLabel
                label="Drinks"
                control={
                  <Checkbox
                    checked={drinksChecked}
                    onChange={() => {
                      setDrinksChecked(!drinksChecked);
                    }}
                  />
                }
              />
              <FormControlLabel
                label="Pastries"
                control={
                  <Checkbox
                    checked={pastriesChecked}
                    onChange={() => {
                      setPastriesChecked(!pastriesChecked);
                    }}
                  />
                }
              />
            </FormGroup>
          </Box>
          <br />
          <p>Ingredients:</p>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={allergensChecked[0]}
                  onChange={() => {
                    setAllergensChecked([
                      !allergensChecked[0],
                      allergensChecked[1],
                      allergensChecked[2],
                      allergensChecked[3],
                    ]);
                  }}
                />
              }
              label="No dairy"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={allergensChecked[1]}
                  onChange={() =>
                    setAllergensChecked([
                      allergensChecked[0],
                      !allergensChecked[1],
                      allergensChecked[2],
                      allergensChecked[3],
                    ])
                  }
                />
              }
              label="No eggs"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={allergensChecked[2]}
                  onChange={() =>
                    setAllergensChecked([
                      allergensChecked[0],
                      allergensChecked[1],
                      !allergensChecked[2],
                      allergensChecked[3],
                    ])
                  }
                />
              }
              label="No flour"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={allergensChecked[3]}
                  onChange={() =>
                    setAllergensChecked([
                      allergensChecked[0],
                      allergensChecked[1],
                      allergensChecked[2],
                      !allergensChecked[3],
                    ])
                  }
                />
              }
              label="No nuts"
            />
          </FormGroup>
        </div>
        <div className="scrollable">
          {currentMenu.length == 0 && (
            <h2 style={{ marginLeft: "50px" }}>
              {" "}
              <em>No items meeting selected criteria</em>
            </h2>
          )}

          <div className="menu">
            {currentMenu
              .sort(key)
              .filter((element, index) => index % 2 == 0)
              .map((item, i) => {
                return (
                  <div key={i}>
                    <BakeryMenuItem
                      addToCart={addToCart}
                      allergens={item.allergens}
                      description={item.description}
                      image={item.image}
                      item={item.item}
                      price={item.price}
                      subFromCart={subFromCart}
                      subtype={item.subtype}
                      type={item.type}
                    />
                  </div>
                );
              })}
          </div>
          <div className="menu">
            {currentMenu
              .sort(key)
              .filter((element, index) => index % 2 != 0)
              .map((item, i) => {
                return (
                  <div key={i}>
                    <BakeryMenuItem
                      addToCart={addToCart}
                      allergens={item.allergens}
                      description={item.description}
                      image={item.image}
                      item={item.item}
                      price={item.price}
                      subFromCart={subFromCart}
                      subtype={item.subtype}
                      type={item.type}
                    />
                  </div>
                );
              })}
          </div>
        </div>
        <Cart
          cartItems={cartItems}
          setCartItems={setCartItems}
          updateCart={updateCart}
        />
        <Snackbar open={notificationOpen} message={notificationMessage} />
      </div>
    </div>
  );
}

export default App;
