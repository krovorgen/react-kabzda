export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    backgrounds: {
        default: 'twitter',
        values: [
            {
                name: 'twitter',
                value: '#aad6e2',
            },
            {
                name: 'facebook',
                value: '#3b5998',
            },
        ],
    },
};
