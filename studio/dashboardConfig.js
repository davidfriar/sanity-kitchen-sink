export default {
  widgets: [
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
                  buildHookId: '620f46a737f9ad3c086eb248',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-47szj3v1',
                  apiId: '57e0473d-00e9-4047-9d2d-6abbb5239cc2'
                },
                {
                  buildHookId: '620f46a8b5ab24ef094c3c96',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-6jy2s6cg',
                  apiId: 'd04accb1-f35d-4476-9798-e4909b1ede4a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/davidfriar/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-6jy2s6cg.netlify.app', category: 'apps'}
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
