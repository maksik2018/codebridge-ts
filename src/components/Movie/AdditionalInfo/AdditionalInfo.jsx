import React from "react";
import { PropTypes } from "prop-types";
import { NavLink, Route, useRouteMatch, Switch } from "react-router-dom";
import { Cast } from "../../Cast";
import { Reviews } from "../../Reviews";
import s from "./AdditionalInfo.module.css";

function AdditionalInfo({ id }) {
  const match = useRouteMatch();
  return (
    <>
      <div className={s.nav}>
        <p className={s.header}>Additional information</p>
        <NavLink
          className={s.link}
          activeClassName={s.active}
          to={`${match.url}/cast`}
        >
          Cast
        </NavLink>

        <NavLink
          className={s.link}
          activeClassName={s.active}
          to={`${match.url}/reviews`}
        >
          Review
        </NavLink>
      </div>
      <Switch>
        <Route path={`${match.url}/cast`}>
          <Cast id={id} />
        </Route>
        <Route path={`${match.url}/reviews`}>
          <Reviews id={id} />
        </Route>
      </Switch>
    </>
  );
}

AdditionalInfo.propTypes = {
  id: PropTypes.number,
};

export default AdditionalInfo;

