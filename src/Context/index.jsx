import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  const [items, setItems] = useState(null);
  // useEffect para consumir la api:
  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  // Context para el filtrado de items:
  // Para cuando reciba algo en el input de busqueda:
  const [filteredItems, setFilteredItems] = useState(null);

  // Filter items by title

  const [searchByTitle, setSearchByTitle] = useState(null);

  // Filter items by category

  const [searchByCategory, setSearchByCategory] = useState(null);

  console.log("searchByCategory:", searchByCategory);

  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter((item) =>
      item.title.toLowerCase().includes(searchByTitle.toLowerCase())
    );
  };

  const filteredItemsByCategory = (items, searchByCategory) => {
    return items?.filter((item) =>
      item?.category.name.toLowerCase().includes(searchByCategory.toLowerCase())
    );
  };

  const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
    if (searchType === "BY_TITLE") {
      return filteredItemsByTitle(items, searchByTitle);
    }

    if (searchType === "BY_CATEGORY") {
      return filteredItemsByCategory(items, searchByCategory);
    }
    if (searchType === "BY_TITLE_AND_CATEGORY") {
      return filteredItemsByCategory(items, searchByCategory).filter((item) =>
        item.title.toLowerCase().includes(searchByTitle.toLowerCase())
      );
    }
    if (!searchType) {
      return items;
    }
  };

  useEffect(() => {
    if (searchByTitle && searchByCategory)
      setFilteredItems(
        filterBy(
          "BY_TITLE_AND_CATEGORY",
          items,
          searchByTitle,
          searchByCategory
        )
      );
    if (searchByTitle && !searchByCategory)
      setFilteredItems(
        filterBy("BY_TITLE", items, searchByTitle, searchByCategory)
      );
    if (!searchByTitle && searchByCategory)
      setFilteredItems(
        filterBy("BY_CATEGORY", items, searchByTitle, searchByCategory)
      );
    if (!searchByTitle && !searchByCategory)
      setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory));
  }, [items, searchByTitle, searchByCategory]);

  const [count, setCount] = useState(0);
  const [isPDOpen, setIsPDOpen] = useState(false);
  const openPD = () => setIsPDOpen(true);
  const closePD = () => setIsPDOpen(false);

  const [isMyCartOpen, setIsMyCartOpen] = useState(false);
  const openMyCart = () => setIsMyCartOpen(true);
  const closeMyCart = () => setIsMyCartOpen(false);

  const [productToShow, setProductToShow] = useState({
    title: "",
    price: "",
    description: "",
    image: [],
  });

  const [cartProducts, setCartProducts] = useState([]);

  const [totalPrice, setTotalPrice] = useState(0);

  const [order, setOrder] = useState([]);

  const [orderNumber, setOrderNumber] = useState(1);

  const [orderCount, setOrderCount] = useState(0);

  const [mostrarMessage, setMostrarMessage] = useState(false);
  const showMessage = () => {
    setMostrarMessage(true);
  };
  const hideMessage = () => {
    setMostrarMessage(false);
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        isPDOpen,
        openPD,
        closePD,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
        isMyCartOpen,
        openMyCart,
        closeMyCart,
        totalPrice,
        setTotalPrice,
        order,
        setOrder,
        orderNumber,
        setOrderNumber,
        orderCount,
        setOrderCount,
        mostrarMessage,
        setMostrarMessage,
        showMessage,
        hideMessage,
        items,
        setItems,
        searchByTitle,
        setSearchByTitle,
        filteredItems,
        setFilteredItems,
        searchByCategory,
        setSearchByCategory,
        filteredItemsByCategory,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
ShoppingCartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
