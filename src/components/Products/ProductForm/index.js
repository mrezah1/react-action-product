import React, { useState } from 'react'
import useFirstRender from 'hooks/useFirstRender'
import Card from 'components/global/Card'
import Button from 'components/global/Button'
import Input from 'components/global/Input'
import inputList from './inputs'
import useGlStyle from '../style'
import Api from 'Api'

const ProductForm = ({ dispatch }) => {
  const glCls = useGlStyle()
  const [inputs, setInputs] = useState(inputList)
  let firstRender = useFirstRender()
  const validationHandler = (value, validation) => {
    const { required } = validation
    let error = true
    if (required) error = value.trim() === ''
    return error
  }
  const changeInputHandler = (event, name) => {
    const { value } = event.target
    const newInputs = [...inputs]
    const selectInputIdx = newInputs.findIndex((a) => a.config.name === name)
    const selectInput = newInputs[selectInputIdx]
    selectInput.value = value
    selectInput.error = validationHandler(value, selectInput.validation)
    newInputs[selectInputIdx] = selectInput
    setInputs(newInputs)
  }
  const addProductHandler = (e) => {
    e.preventDefault()
    const isValidForm = inputs.every((input) => !input.error)
    if (isValidForm) {
      // title=inputs[0].value , price=inputs[1].value : 👇
      const [{ value: title }, { value: price }] = inputs

      Api.post('/products.json', { title, price })
        .then((res) => res.json())
        .then((res) => {
          dispatch({ type: 'ADD', product: { id: res.name, title, price } })
          // reset input value
          setInputs((inputs) =>
            inputs.map((input) => ({
              ...input,
              error: true,
              value: ''
            }))
          )
        })
        .catch((err) => console.log(err))
    }
  }

  return (
    <section>
      <Card>
        <form onSubmit={addProductHandler}>
          {inputs.map((item, idx) => (
            <Input
              key={idx}
              {...item.config}
              label={item.label}
              value={item.value}
              error={!firstRender && item.error}
              className={idx > 0 ? glCls.mt1 : ''}
              onChange={(e) => changeInputHandler(e, item.config.name)}
            />
          ))}
          <Button className={glCls.mt1}>Add</Button>
        </form>
      </Card>
    </section>
  )
}
export default React.memo(ProductForm)
