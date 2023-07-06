const landingPage = {
  name: 'landingPage',
  title: 'Landing Page',
  type: 'document',
  fields: [
    // Navbar
    {
      name: 'status',
      title: 'Status',
      type: 'object',
      fields: [
        {
          name: 'name',
          title: 'Name',
          type: 'string',
        },
        {
          name: 'active',
          title: 'Active',
          type: 'boolean',
        },
      ],
    },
    // Hero
    {
      name: 'hero',
      title: 'Hero',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'hightlight',
          title: 'Highlight',
          type: 'string',
        },
        {
          name: 'subtitle',
          title: 'Subtitle',
          type: 'text',
        },
        {
          name: 'callToAction',
          title: 'Call to action',
          type: 'string',
        },
        {
          name: 'secondButton',
          title: 'Second button',
          type: 'string',
        },
        {
          name: 'dividerText',
          title: 'Divider text',
          type: 'string',
        },
      ],
    },
    // About Me
    {
      name: 'aboutMe',
      title: 'About Me',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'title',
          type: 'string',
        },
        {
          name: 'body',
          title: 'Body',
          type: 'text',
        },
        {
          name: 'services',
          title: 'Services',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'title',
                  title: 'Title',
                  type: 'string',
                },
                {
                  name: 'description',
                  title: 'Description',
                  type: 'text',
                },
                {
                  name: 'body',
                  title: 'Body',
                  type: 'text',
                },
              ],
            },
          ],
        },
        {
          name: 'skills',
          title: 'Skills',
          type: 'array',
          of: [{ type: 'string' }],
        },
      ],
    },
    // Process
    {
      name: 'process',
      title: 'Process',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'body',
          title: 'Body',
          type: 'text',
        },
        {
          name: 'subtitle',
          title: 'Subtitle',
          type: 'string',
        },
        {
          name: 'subBody',
          title: 'Sub-body',
          type: 'string',
        },
        {
          name: 'button',
          title: 'Button',
          type: 'string',
        },
        {
          name: 'steps',
          title: 'Steps',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'title', title: 'Title', type: 'string' },
                { name: 'description', title: 'Description', type: 'text' },
                { name: 'image', title: 'Image', type: 'image' },
              ],
            },
          ],
        },
      ],
    },
    // Pricing
    {
      name: 'pricing',
      title: 'Pricing',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'prices',
          title: 'Prices',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'title',
                  title: 'Title',
                  type: 'string',
                },
                {
                  name: 'description',
                  title: 'Description',
                  type: 'text',
                },
                {
                  name: 'price',
                  title: 'Price',
                  type: 'string',
                },
                {
                  name: 'included',
                  title: 'Included',
                  type: 'array',
                  of: [{ type: 'string' }],
                },
                {
                  name: 'highlight',
                  title: 'Highlight',
                  type: 'boolean',
                },
              ],
            },
          ],
        },
        {
          name: 'disclaimer',
          title: 'Disclaimer',
          type: 'text',
        },
      ],
    },
    // Projects
    {
      name: 'projects',
      title: 'Projects',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
        },
        {
          name: 'project',
          title: 'project',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'title',
                  title: 'Title',
                  type: 'string',
                },
                {
                  name: 'image',
                  title: 'Image',
                  type: 'image',
                },
                {
                  name: 'description',
                  title: 'Description',
                  type: 'text',
                },
                {
                  name: 'url',
                  title: 'URL',
                  type: 'url',
                },
                {
                  name: 'github',
                  title: 'GitHub',
                  type: 'url',
                },
              ],
            },
          ],
        },
      ],
    },
    // Blog
    {
      name: 'blog',
      title: 'Blog',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
        },
      ],
    },
    // Contact
    {
      name: 'contact',
      title: 'Contact',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
      ],
    },
  ],
}

export default landingPage
