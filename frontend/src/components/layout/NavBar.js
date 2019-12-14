import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar, NavbarToggler, NavItem, NavLink, Nav, Collapse,
} from 'reactstrap';
import isLogged from '../../common/isLogged';
import styles from './NavBar.module.css';

const NavBar = () => {
  const type = isLogged();
  const FinancialArea = () => (
    <NavItem>
      <NavLink href="/finances">
        <strong className="link">Financial Area</strong>
      </NavLink>
    </NavItem>
  );
  const Sales = () => (
    <NavItem>
      <NavLink href="/sales">
        <strong className="link">Sales</strong>
      </NavLink>
    </NavItem>
  );
  const Purchases = () => (
    <NavItem>
      <NavLink href="/purchases">
        <strong className="link">Purchases</strong>
      </NavLink>
    </NavItem>
  );
  const Inventory = () => (
    <NavItem>
      <NavLink href="/inventory">
        <strong className="link">Inventory</strong>
      </NavLink>
    </NavItem>
  );
  const Login = () => (
    <ul className="nav navbar-nav navbar-right">
      <li className="nav-item active logout">
        <Link className="nav-link" to="/login">
          <strong className="link">Login</strong>
        </Link>
      </li>
    </ul>
  );
  const LogOut = () => (
    <ul className="nav navbar-nav navbar-right">
      <li className="nav-item active logout">
        <Link className="nav-link" to="/logout">
          <strong className="link">Logout</strong>
        </Link>
      </li>
    </ul>
  );
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Navbar color="light" light expand="md">
        <NavbarToggler className={styles.navCollapse} onClick={toggle} />
        <Collapse  isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/">
                <strong className="link">Home</strong>
              </NavLink>
            </NavItem>
            {(() => {
              if (type === 'CEO') {
                return (
                  <>
                    <FinancialArea />
                    <Sales />
                    <Purchases />
                    <Inventory />
                  </>
                );
              }
              if (type === 'Shareholder') {
                return (
                  <>
                    <FinancialArea />
                    <Sales />
                  </>
                );
              }
              if (type === 'Head of Finances') {
                return (
                  <>
                    <FinancialArea />
                  </>
                );
              }
              if (type === 'Head of Sales') {
                return (
                  <>
                    <Sales />
                  </>
                );
              }
              if (type === 'Head of Purchases') {
                return (
                  <>
                    <Purchases />
                  </>
                );
              }
              if (type === 'Head of Logistics') {
                return (
                  <>
                    <Inventory />
                  </>
                );
              }
              return <></>;
            })()}
          </Nav>
        </Collapse>
        {(() => {
          if (isLogged() === null) {
            return <Login />;
          }
          return <LogOut />;
        })()}
      </Navbar>
    </>
  );
};

export default NavBar;
