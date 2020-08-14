import React, {useEffect, useState} from "react";
import {Button, Checkbox, Form, Dropdown, Input} from 'semantic-ui-react'

import './style.scss'

const DELIVERY_OPTIONS = [
    {key: 1, text: 'самовивіз', value: 1},
    {key: 2, text: 'на відділення Нової Пошти', value: 2},
    {key: 3, text: 'кур‘єром', value: 3},
]

const CUSTOMER_DEFAULT = {
    name: {value: '', isValid: false},
    surname: {value: '', isValid: false},
    email: {value: '', isValid: false},
    phone: {value: '', isValid: false},
}

const DELIVERY_DEFAULT = {
    method: {value: '', isValid: false},
    city: {value: '', isValid: false},
    postOffice: {value: '', isValid: false}
}

const ADDRESS_DEFAULT = {
    city: {value: '', isValid: false},
    street: {value: '', isValid: false},
    built: {value: '', isValid: false},
    apartment: {value: '', isValid: false},
}

const CheckoutForm = () => {
    const [error, setError] = useState(false)

    const [checkboxValue, setCheckboxValue] = useState('')
    const [deliveryMethod, setDeliveryMethod] = useState(null)

    //CHECKOUT
    const [customer, setCustomer] = useState(CUSTOMER_DEFAULT)
    const [delivery, setDelivery] = useState(DELIVERY_DEFAULT)
    const [address, setAddress] = useState(ADDRESS_DEFAULT)

    const handleConnectionChange = ({target}) => setCheckboxValue(target.innerText)
    const handleDeliveryChange = (e, {value}) => {
        setDeliveryMethod(value)
    }

    const validate = (key, value) => {
        switch (key) {
            case 'name': {
               return /^[A-Za-zА-Яа-я]{2,50}$/.test(value)
            }
            case 'surname': {
                return /^[A-Za-zА-Яа-я]{2,50}$/.test(value)
            }
            case 'email': {
                return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
            }
            case 'phone': {
                return /^\+?\d{10,12}$/.test(value)
            }
        }
    }

    const handleOnSubmit = (e) => {
        const isValidateCustomer = Object.values(customer).every( val => val.isValid)

        if (!isValidateCustomer) {

            setError(true)
        }
    }

    const handleChange = ({target: {id, name, value}}) => {
        switch (id) {
            case 'customer': {
                setCustomer({...customer, [name]: {value: value, isValid: validate(name, value)}})
            }
        }
    }

    return (
        <Form>
            <Form.Input
                error={error && !customer.surname.isValid ? { content: 'Будь ласка, введіть прізвище', pointing: 'below' } : null}
                fluid
                label='Прізвище'
                placeholder='Введіть прізвище...'
                name='surname'
                onChange={handleChange}
                id='customer'
            />
            <Form.Input
                error={error && !customer.name.isValid ? { content: 'Будь ласка, введіть ім‘я', pointing: 'below' } : null}
                fluid
                label='Ім‘я'
                placeholder='Введіть ім‘я...'
                name='name'
                onChange={handleChange}
                id='customer'
            />
            <Form.Input
                error={error && !customer.email.isValid ? { content: 'Будь ласка, введіть ел. пошту', pointing: 'below' } : null}
                fluid
                label='Ел. пошта'
                placeholder='Введіть ел. пошту...'
                name='email'
                onChange={handleChange}
                id='customer'
            />
            <Form.Input
                error={error && !customer.phone.isValid ? { content: 'Будь ласка, введіть номер телефону', pointing: 'below' }: null}
                fluid
                label='Телефон'
                placeholder='Введіть номер телефон...'
                name='phone'
                onChange={handleChange}
                id='customer'
            />
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
            <button
                    className='basic-button'
                    type='submit'
                    onClick={handleOnSubmit}
            >Готово</button>
        </Form>
    )
}

export default CheckoutForm;
