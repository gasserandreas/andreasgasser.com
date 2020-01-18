import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Box } from 'rebass/styled-components';

import Text from '../Base/Text';

// import { StaticQuery, graphql } from 'gatsby';

// import NonStretchedImage from '../NonStretchedImage/NonStretchedImage';

const Styles = {
  SiteName: styled(Text)`
    font-size: 1.1rem;
    font-weight: 400;
    margin-bottom: 1rem;
  `,
  Name: styled(Text)`
    display: block;
    margin: 0.25rem 0;

    strong {
      font-weight: 600;
    }
  `,
  JobDescription: styled(Text)(({ theme }) => `
    color: ${theme.colors.muted};
    font-size: 0.9rem;
    margin-top: 1rem;
  `),
  // Image: styled(NonStretchedImage)(() => `
  //   border-radius: 0.5rem;
  //   margin-bottom: 1rem;
  // `),
};

export const Header = () => (
  <Box>
    <Styles.SiteName>
      Hi I
      {'\''}
      am
      <Styles.Name>
        <strong>Andreas</strong>
        {' '}
        Gasser
      </Styles.Name>
    </Styles.SiteName>
    {/* <Styles.Image fluid={data.file.childImageSharp.fluid} /> */}
    <Styles.JobDescription>
      Front end architect
      <br />
      Senior software engineer
      <br />
      UX advocate
    </Styles.JobDescription>
  </Box>
);

Header.propTypes = {
  data: PropTypes.shape({
    file: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fluid: PropTypes.any,
      }),
    }),
  }),
};

Header.defaultProps = {
  data: {},
};

export default Header;

// export const query = graphql`
//   query {
//     file(relativePath: { eq: "me.jpg" }) {
//       childImageSharp {
//         fluid(maxWidth: 700, quality: 100) {
//         # fluid(maxWidth: 700, quality: 100, grayscale: true, ) {
//           ...GatsbyImageSharpFluid
//           presentationWidth
//         }
//       }
//     }
//   }
// `;

// export default (props) => (
//   <StaticQuery
//     query={query}
//     render={(data) => (
//       <Header
//         {...props}
//         data={data}
//       />
//     )}
//   />
// );
