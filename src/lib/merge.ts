import { extendTailwindMerge } from 'tailwind-merge'

export const merge = extendTailwindMerge({
  classGroups: {
    boxShadow: [
      {
        shadow: [
          {
            light: ['input', 'card', 'dropdown'],
            dark: ['input', 'card', 'dropdown'],
          },
        ],
      },
    ],
    borderRadius: [
      {
        rounded: [
          {
            light: ['small', 'default', 'full'],
            dark: ['small', 'default', 'full'],
          },
        ],
      },
    ],
    fontSize: [
      {
        text: [
          {
            light: ['default', 'title', 'metric'],
            dark: ['default', 'title', 'metric'],
          },
        ],
      },
    ],
  },
})
