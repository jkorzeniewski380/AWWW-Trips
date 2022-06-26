export const theme = {
    breakpoints: {
        sm: '30em',
        md: '48em',
        lg: '62em',
        xl: '80em',
        '2xl': '96em',
    },
    styles: {
        global: {
            '*': {
                boxSizing: 'border-box',
                padding: 0,
                margin: 0
            },
            'html, body': {
                minHeight: '100vh',
                lineHeight: '1rem'
            },
            body: {
                minWidth: '375px'
            },
            'body, #root': {
                margin: 0,
                padding: 0,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: '#FEFCDF',
                color: '#0A0099',
            },
            '#root': {
                width: '100%',
                minHeight: '100vh'
            },
            'h1, h2, h3': {
                fontFamily: 'Arial, sans-serif'
            },
            h1: {
                fontSize: 'x-large',
                fontWeight: 'bold',
                padding: '2px 4px'
            },
            h2: {
                fontSize: 'larger',
                fontWeight: 'bold',
                padding: '4px 8px'
            },
            h3: {
                fontSize: 'medium',
                fontWeight: 'normal',
                padding: '6px 12px'
            },
            main: {
                flexDirection: { base: 'column', lg: 'row' },
                alignItems: { base: 'center', lg: 'flex-start' },
                justifyContent: 'space-between',
            },
            'main a': {
                color: '#995a2f'
            },
            a: {
                _hover: {
                    backgroundColor: 'rgba(0,0,0,0.2)'
                }
            }
        }
    }
};
