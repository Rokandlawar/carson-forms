const formJson = {
    type: 'stepper',
    data: {
        Email: 'asd@asd.com',
        Company: 'aircosta',
        access: 'internal'

    },
    steps: [
        ['Email','Company'],
        ['access']
    ],
    fields: {
        Email: {
            type: 'textbox',
            name: 'Email',
            label: 'Email',
            className: 'col-6',
            requried: true
        },
        Company: {
            type: 'dropdown',
            name: 'Company',
            label: 'Company',
            className: 'col-6',
            requried: true,
            items: [
                {
                    name: 'Aircosta',
                    value: 'aircosta'
                },
                {
                    name: 'WaterMill',
                    value: 'watermill'
                }
            ]
        },
        access: {
            type: 'checkbox',
            name: 'access',
            className: 'col-6',
            requried: true,
            label: 'Access',
            items: [
                {
                    name: 'internal',
                    value: 'internal'
                },
                {
                    name: 'external',
                    value: 'external'
                }
            ]
        },

    }
}

export default formJson