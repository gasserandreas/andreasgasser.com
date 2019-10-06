import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components';

const Styled = {
  Header: styled.header`
    background: rebeccapurple;
    margin-bottom: 1.45rem;
  `,
  HeaderText: styled.h1`
    margin: 0 auto;
    max-width: 960px;
    padding: 1.45rem 1.0875rem;
  `,
  Link: styled(Link)`
    color: white;
    textDecoration: none;
  `,
}

const Header = ({ siteTitle }) => (
  <Styled.Header>
    <Styled.HeaderText>
      <Styled.Link to="/">
        {siteTitle}
      </Styled.Link>
    </Styled.HeaderText>
  </Styled.Header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
