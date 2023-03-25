import React from "react";

import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Cart from "../cart/index";
import * as Styles from "./styles";
import { loginUser, logoutUser } from "../../redux/user/action";
import { selectProductsCount } from "../../redux/cart/cart.selector";

function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const { currentUser } = useSelector((rootReducer) => rootReducer.userReducer);
  const dispatch = useDispatch();
  const productsCount = useSelector(selectProductsCount);

  const handleLoginClick = () => {
    dispatch(loginUser({ name: "Igor", email: "igor@bandeira.com" }));
  };

  const handleLogoutClick = () => {
    dispatch(logoutUser());
  };

  const handleCartClick = () => {
    setCartIsVisible(true);
  };

  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <Styles.Container>
      <Styles.Logo>
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "yellow",
            fontFamily: "Tilt Prism",
          }}
        >
          ControLovers
        </Link>
        <span role="img" aria-label="Heart">
          💛
        </span>
        <img
          src="https://icon-library.com/images/multimedia_stick_game_play_controller-512.png"
          alt="control"
          style={{ height: 35, marginBottom: -10 }}
        />
        <Styles.Dropdown onClick={handleDropdownClick}>
          <p>Marca do Controle:</p>
          {showDropdown && (
            <ul>
              <li>
                <Link
                  to="/playstation"
                  style={{ textDecoration: "none", color: "yellow" }}
                >
                  Playstation
                </Link>
              </li>
              <li>
                <Link
                  to="/xbox"
                  style={{ textDecoration: "none", color: "yellow" }}
                >
                  Xbox
                </Link>
              </li>
            </ul>
          )}
        </Styles.Dropdown>
      </Styles.Logo>
      <Styles.Buttons>
        {currentUser ? (
          <div onClick={handleLogoutClick}>
            <img
              src="http://www.clker.com/cliparts/j/h/A/z/H/9/yellow-user-icon.svg"
              alt="profile"
              style={{ height: 25 }}
            />
          </div>
        ) : (
          <div onClick={handleLoginClick}>Login</div>
        )}
        <div onClick={handleCartClick}>Carrinho({productsCount})</div>
      </Styles.Buttons>
      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
}

export default Header;
