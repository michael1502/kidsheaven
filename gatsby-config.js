module.exports = {
    


plugins: [
  {
    resolve: `gatsby-plugin-postcss-sass`,
    options: {
      precision: 8, 
    },
  },

  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `src`,
      path: `${__dirname}/src/`,
    },
  },
  {
    resolve:`gatsby-source-filesystem`,
    options:{
      name:`images`,
      path:`${__dirname}/src/images`
    }
  },
  {
    resolve:`gatsby-transformer-sharp`,
    options:{
      quality:100,
    }
  },
 
  `gatsby-plugin-sharp`,


]

}