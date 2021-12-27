import React from 'react'
import AsyncSelect from 'react-select/async'
import { Row, Col, Input, Button } from 'reactstrap'
import { ActionType, ZipcodeType } from '../types'
import { addZipcode, setZipcodes, searchZip, zipcodeDistance } from '../store/actions'

interface Props {
    zipcodes: ZipcodeType[]
    dispatch: React.Dispatch<ActionType>
}

const Zipcode: React.FC<Props> = ({ zipcodes, dispatch }) => {

    const loadOptions = async (
        inputValue: string,
        callback: (options: any) => void
    ) => {
        if(inputValue) {
            let response = await searchZip(inputValue)
            let options = response.data.slice(0, 6) // First 6 options
            options = options.map((option: any) => {
                return {
                    ...option,
                    label: option.zip
                }
            }) // Adding label with the name of zip, so it can be shown on AsyncSelect
            if (response.data) {
                callback(options);
            }
        }
    };

    const onAsyncSelect = (id: number | null, value: any) => {
        let newvalue = { ...value }
        var newZipcodes = [...zipcodes];
        var index = newZipcodes.findIndex(newZipcode => newZipcode.id === id)
        delete newvalue.label
        newZipcodes[index] = newvalue
        dispatch(setZipcodes(newZipcodes))
    }

    const onProceed = async () => {
        let newzipcodes = zipcodes.filter(zipcode => zipcode.id !== null)
        console.log(newzipcodes)
        if (newzipcodes.length) {
            dispatch(await zipcodeDistance(newzipcodes))
        }
    }

    return (
        <div style={{ width: '250px' }}>
            <Row>
                <Col className='text-left'>
                    <Button onClick={onProceed}>Proceed</Button>
                </Col>
            </Row>
            {zipcodes.map((zipcode, index) => <Row key={index}>
                <Col xs={"auto"}>
                    <AsyncSelect
                        cacheOptions
                        className='asyncselect'
                        loadOptions={loadOptions}
                        defaultOptions
                        onChange={(value) => onAsyncSelect(zipcode.id, value)}
                    />
                </Col>
                <Col xs={"auto"}>
                    {index === (zipcodes.length - 1) ? <Button
                        disabled={!zipcode.id}
                        onClick={() => dispatch(addZipcode())}
                    >
                        +
                    </Button> : null}
                </Col>
            </Row>)}
        </div>
    )
}

export default Zipcode