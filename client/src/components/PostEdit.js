import React from 'react'
import {Edit,SimpleForm,TextInput,DateInput} from 'react-admin';
const PostEdit = (props) => {
    return (
        <Edit title='Edit a post' {...props}>
            <SimpleForm> 
                <TextInput disabled source='id' />
                <TextInput multiline source='body' />
                <DateInput label='Published' source='publishedAt'/>
            </SimpleForm>

        </Edit>
    )
}

export default PostEdit
