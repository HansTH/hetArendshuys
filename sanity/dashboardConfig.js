// Load variables from `.env` as soon as possible
// require('dotenv').config({
//   path: `.env`,
// });

export default {
  widgets: [
    {
      name: 'netlify',
      options: {
        title: 'Netlify Deploy',
        sites: [
          // {
          //   title: 'Sanity Studio',
          //   apiId: 'xxxxx-yyyy-zzzz-xxxx-yyyyyyyy',
          //   buildHookId: 'xxxyyyxxxyyyyxxxyyy',
          //   name: 'sanity-gatsby-blog-20-studio',
          // },
          {
            title: 'Website',
          //   apiId: 'xxxxx-yyyy-zzzz-xxxx-yyyyyyyy',
          //   buildHookId: 'xxxyyyxxxyyyyxxxyyy',
          //   name: 'sanity-gatsby-blog-20-studio',
          // },
        ],
      },
    },
  ],
};
