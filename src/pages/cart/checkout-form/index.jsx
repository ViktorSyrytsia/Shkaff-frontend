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


        if (!isValidateCustomer) {
            console.log('setEror')
            setError(true)
        }
    }

    const handleChange = ({target}) => {
        switch (target.dataset.id) {
            case 'customer': {
                setCustomerToSend({...customerToSend, [target.name]: target.value})
            }
        }

        setError(false)
    }

    useEffect(() => {
        console.log(customerToSend)
    }, [customerToSend])


    return (
        <Form>
            <Form.Field required error={error && !customerToSend.surname}>
                <label>Прізвище</label>
                <Input  name='surname' data-id='customer' placeholder='Введіть прізвище...' onChange={handleChange}/>
            </Form.Field>
            <Form.Field required error={error && !!customerToSend.name}>
                <label>Ім‘я</label>
                <Input name='name' data-id='customer' placeholder='Введіть імя...' onChange={handleChange}/>
            </Form.Field>
            <Form.Field required error={!customerToSend.phone || !!error}>
                <label>Телефон</label>
                <Input  name='phone' data-id='customer' className='phone' type='number' placeholder='Введіть телоефон...' onChange={handleChange}/>
            </Form.Field>
            <Form.Field required error={!customerToSend.email || !!error}>
                <label>Ел. пошта</label>
                <Input name='email' data-id='customer' type='email' placeholder='Введіть ел.пошту...' onChange={handleChange}/>
            </Form.Field>
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
