import { Field, Form, Formik, FormikHelpers } from 'formik';
import toast, { Toaster } from 'react-hot-toast';
import css from './SearchBar.module.css'
import { FC, FormEvent } from 'react';

interface SerchProps {
    onSubmit: (text: string) => void
}

interface FormikInteface {
    query: string
}

const SearchBar: FC<SerchProps> = ({ onSubmit }) => {

    const handleSubmit = (values: FormikInteface, actions: FormikHelpers<FormikInteface>) => {
        if (values.query.trim() ==="") {
            toast.error("Fill the search field")
        }
        onSubmit(values.query.trim())
        actions.resetForm()
      
        
}

    return (
        <header className={css.header}>
            <Formik
                initialValues={{ query: "" }}
            onSubmit ={handleSubmit}>
                <Form
                className={css.form}
                >
                    
                    <Field
                    className={css.input}
                    type="text"
                    name="query"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos">
                        
                </Field>
                    <button type="submit">Search</button>
                    <div><Toaster
                        position="top-center"
                        toastOptions={{
                            duration: 5000,
                            style: {
                                marginTop: "45px",
                                background: '#363636',
                                color: '#fff',
                            },
                        }}
                    />
                    </div>

                    
            </Form>
            </Formik>
    </header>
    )
}

export default SearchBar