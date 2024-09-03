import * as React from "react"
import { Link, graphql } from "gatsby"
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';

import Layout from "../components/layout"
import Seo from "../components/seo"
import Banner from "../components/Banner/Banner";

const LandingPageIndex = ({ data, location }) => {
    const { t } = useTranslation();
    // const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location}>
        {/*<Seo title={t('seo')} />*/}
        {/*<h1>*/}
        {/*    <Trans i18nKey="title">Hi people</Trans>*/}
        {/*</h1>*/}
        <Banner/>
    </Layout>
  )
}

export default LandingPageIndex

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="All posts" />

export const pageQuery = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: { ns: { in: ["index"] }, language: { eq: $language } }
    ) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
