export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e3615681b9484ffb3aebbc5',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-big7bemk',
                  apiId: 'e393a588-c9ee-4fb2-8236-295b3f1891a9'
                },
                {
                  buildHookId: '5e3615690d7d3b1bf14a2cb9',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-y35t1eja',
                  apiId: '5e178c9f-476b-4767-b510-295fe5151e6a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sportyfred/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-y35t1eja.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
