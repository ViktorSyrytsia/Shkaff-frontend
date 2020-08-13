import React, {useEffect, useState} from "react";
import {Button, Checkbox, Form, Dropdown, Input} from 'semantic-ui-react'

import './style.scss'

const DELIVERY_OPTIONS = [
    {key: 1, text: 'самовивіз', value: 1},
    {key: 2, text: 'на відділення Нової Пошти', value: 2},
    {key: 3, text: 'кур‘єром', value: 3},
]

const CUSTOMER_DEFAULT = {
    name: '',
    surname: '',
    email: '',
    phone: '',
}

const DELIVERY_DEFAULT = {
    method: '',
    city: '',
    postOffice: ''
}

const ADDRESS_DEFAULT = {
    city: '',
    street: '',
    built: '',
    apartment: '',
}

const CheckoutForm = () => {
    const [error, setError] = useState(false)

    const [checkboxValue, setCheckboxValue] = useState('')
    const [deliveryMethod, setDeliveryMethod] = useState(null)

    //CHECKOUT
    const [customerToSend, setCustomerToSend] = useState(CUSTOMER_DEFAULT)
    const [deliveryToSend, setDeliveryToSend] = useState(DELIVERY_DEFAULT)
    const [addressToSend, setAddressToSend] = useState(ADDRESS_DEFAULT)

    const handleConnectionChange = ({target}) => setCheckboxValue(target.innerText)
    const handleDeliveryChange = (e, {value}) => {
        console.log(value)
        setDeliveryMethod(value)
    }

    const handleOnSubmit = (e) => {
        const isValidateCustomer = Object.values(customerToSend).every( val => val)

        console.log(customerToSend)

        if (!isValidateCustomer) {
            console.log('setEror')
            setError(true)
        }
    }

    const handleChange = ({target}) => {
        console.dir(target)
        switch (target.id) {
            case 'customer': {
                setCustomerToSend({...customerToSend, [target.name]: target.value})
            }
        }

        setError(false)
    }

    return (
        <Form>
            <Form.Input
                error={error && !customerToSend.surname  && { content: 'Будь ласка, введіть прізвище', pointing: 'below' }}
                fluid
                label='Прізвище'
                placeholder='Введіть прізвище...'
                name='surname'
                onChange={handleChange}
                id='customer'
            />
            <Form.Input
                error={error && !customerToSend.name && { content: 'Будь ласка, введіть ім‘я', pointing: 'below' }}
                fluid
                label='Ім‘я'
                placeholder='Введіть ім‘я...'
                name='name'
                onChange={handleChange}
                id='customer'
            />
            <Form.Input
                error={error && { content: 'Будь ласка, введіть ел. пошту', pointing: 'below' }}
                fluid
                label='Ел. пошта'
                placeholder='Введіть ел. пошту...'
                name='email'
                onChange={handleChange}
                id='customer'
            />
            <Form.Input
                error={error && { content: 'Будь ласка, введіть номер телефону', pointing: 'below' }}
                fluid
                label='Телефон'
                placeholder='Введіть номер телефон...'
                name='phone'
                onChange={handleChange}
                id='customer'
                type='number'
            />
{/*
            <Form.Field required error={error && !!customerToSend.name}>
                <label>Введіть імя...</label>
                <input name='name' id='customer' placeholder='Введіть імя...' onChange={handleChange}/>
            </Form.Field>
            <Form.Field required error={!customerToSend.phone || !!error}>
                <label>Телефон</label>
                <Input  name='phone' data-id='customer' className='phone' type='number' placeholder='Введіть телоефон...' onChange={handleChange}/>
            </Form.Field>
            <Form.Field required error={!customerToSend.email || !!error}>
                <label>Ел. пошта</label>
                <Input name='email' data-id='customer' type='email' placeholder='Введіть ел.пошту...' onChange={handleChange}/>
            </Form.Field>*/}
            <Form.Field required>
                Спосіб зв‘язку: <b>{checkboxValue}</b>
            </Form.Field>
            <Form.Field>
                <Checkbox
                    radio
                    data-id='connection'
                    label='Ел. пошта'
                    name='connectionMethod'
                    checked={checkboxValue === 'Ел. пошта'}
                    onChange={handleConnectionChange}
                />
            </Form.Field>
            <Form.Field>
                <Checkbox
                    radio
                    data-id='connection'
                    label='Телефон'
                    name='connectionMethod'
                    checked={checkboxValue === 'Телефон'}
                    onChange={handleConnectionChange}
                />
            </Form.Field>
            <Form.Field>
                <Checkbox
                    radio
                    data-id='connection'
                    label='Telegram'
                    name='connectionMethod'
                    checked={checkboxValue === 'Telegram'}
                    onChange={handleConnectionChange}
                />
            </Form.Field>
            <Form.Field>
                <Checkbox
                    radio
                    data-id='connection'
                    label='Viber'
                    name='connectionMethod'
                    checked={checkboxValue === 'Viber'}
                    onChange={handleConnectionChange}
                />
            </Form.Field>
            <Dropdown
                data-id='delivery'
                onChange={handleDeliveryChange}
                options={DELIVERY_OPTIONS}
                placeholder='Виберіть спосіб'
                selection
                value={deliveryMethod}
            />
            {
                deliveryMethod === 2 && (
                    <>
                        <Form.Field required>
                            <label>Місто</label>
                            <Input data-id='delivery' placeholder='Введіть місто...'/>
                        </Form.Field>
                        <Form.Field required>
                            <label>Номер відділння</label>
                            <Input data-id='delivery' placeholder='Введіть номер відділення Нової Пошти'/>
                        </Form.Field>
                    </>
                )
            }
            {
                deliveryMethod === 3 && (
                    <>
                        <Form.Field required>
                            <label>Місто</label>
                            <Input data-id='delivery' placeholder='Введіть назву міста...'/>
                        </Form.Field>
                        <Form.Field required>
                            <label>Вулиця</label>
                            <Input data-id='delivery' placeholder='Введіть назву вулиці...'/>
                        </Form.Field>
                        <Form.Field required>
                            <label>Будинок</label>
                            <Input data-id='delivery' placeholder='Введіть номер будинок...'/>
                        </Form.Field>
                        <Form.Field required>
                            <label>Квартира</label>
                            <Input data-id='delivery' placeholder='Введіть номер квартири...'/>
                        </Form.Field>
                    </>
                )
            }
            <br/>
            <Button inverted
                    color='black'
                    size='big'
                    id='submit-button'
                    type='submit'
                    onClick={handleOnSubmit}
            >Готово</Button>
        </Form>
    )
}

export default CheckoutForm;
