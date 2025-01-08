/**
 * @type {import('tinacms').Collection}
 */
export default {
  label: "Blog Posts",
  name: "post",
  path: "content/post",
  fields: [
    {
      type: "string",
      label: "Title",
      name: "title",
    },
    {
      type: "rich-text",
      label: "Blog Post Body",
      name: "body",
      isBody: true,
    },
    {
			name: 'featured_image',
			label: 'Featured Image',
			type: 'object',
			fields: [
				{
					type: 'image',
					name: 'imageURL',
					label: 'Image URL',
					ui: {
						component: 'image-detailed',
					},
				},
				{
					type: 'string',
					name: 'imageType',
					label: 'Image Type',
					ui: {
						disabled: true,
					},
				},
				{
					type: 'number',
					name: 'imageHeight',
					label: 'Image Height (in px)',
					ui: {
						disabled: true,
						component: 'text',
					},
				},
				{
					type: 'number',
					name: 'imageWidth',
					label: 'Image Width (in px)',
					ui: {
						disabled: true,
						component: 'text',
					},
				},
			],
		},
  ],
  ui: {
    router: ({ document }) => {
      return `/posts/${document._sys.filename}`;
    },
  },
};
