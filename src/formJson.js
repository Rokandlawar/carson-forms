const formJson = {
    type: 'form',
    data: {
        Email: 'asd@asd.com',
        Company: 'aircosta',
        access:'internal',

    },
    fields: {
        Email: {
            type: 'textbox',
            name: 'Email',
            label:'Email',
            className: 'col-6',
            requried: true
        },
        Company: {
            type: 'dropdown',
            name: 'Company',
            label:'Company',
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
            label:'Access',
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
        address: {
            type: 'group',
            isGrid:true,
            className:'col-12',
            fields:{
                contact: {
                    type: 'textbox',
                    name: 'contact',
                    label:'contact',
                    className: 'col-3',
                    requried: true
                },
                phone:{
                    type: 'textbox',
                    name: 'phone',
                    label:'phone',
                    className: 'col-3',
                    requried: true
                },
                location:{
                    type:'group',
                    isGrid:true,
                    className:'col-12',
                    fields:{
                        city:{
                            type: 'textbox',
                            name: 'city',
                            label:'city',
                            className: 'col-3',
                            requried: true
                        },
                        state:{
                            type: 'textbox',
                            name: 'state',
                            label:'state',
                            className: 'col-3',
                            requried: true
                        }
                    }
                }
            }
           
        },

    }
}

export default formJson