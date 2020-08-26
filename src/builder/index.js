import React, { useState } from 'react';
import Options from './options'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Generator from './generator'


const options = {
    components: {
        name: 'components',
        fields: {
            'textbox': { id: 'textbox', content: 'TextBox', index: 0 },
            'dropdown': { id: 'dropdown', content: 'DropDown', index: 1 },
            'checkbox': { id: 'checkbox', content: 'CheckBox', index: 2 }
        }
    },
    layout: {
        name: 'layout',
        fields: {
            'stepper': { id: 'stepper', content: 'Stepper', index: 3 },
            'tabs': { id: 'tabs', content: 'Tabs', index: 4 },
            'table': { id: 'table', content: 'Table', index: 5 }
        }
    }
}

const fieldsToCreate = {
    'textbox': { type: 'textbox' }
}




export default function Builder() {
    const [fields, setFields] = useState({ components: {}, order: [] })

    const onDragEnd = (result) => {
        console.log('onDragEnd', result)
        const { destination, source, draggableId } = result
        if (!destination) return
        if (destination.droppableId === source.droppableId && destination.index === source.index) return


        if (fieldsToCreate[draggableId]) {
            const newfields = { ...fields }
            console.log(newfields)
            newfields.components.current = { ...fieldsToCreate[draggableId], name: 'current' }
            //    setFields(newfields)

        }

    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className='row'>
                <Droppable droppableId="options">
                    {(provided, snapshot) => (
                        <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            className='col-2'
                        >
                            <Options data={options} />

                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
                <Droppable droppableId="configuration">
                    {(provided, snapshot) => (
                        <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            className='col-8'
                        >
                            configuration
                            <Generator components={fields.components} order={fields.order} />

                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
                <div className='col-2'>
                    Json Output
                </div>
            </div>
        </DragDropContext>
    )

}

