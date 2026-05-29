export const service = {
  name: 'service',
  title: 'Services',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titel',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
    },
    {
      name: 'tagline',
      title: 'Kurzbeschreibung',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Beschreibung',
      type: 'text',
    },
    {
      name: 'order',
      title: 'Reihenfolge',
      type: 'number',
    },
  ],
}
