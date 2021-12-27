import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { ZipcodeDistanceType } from '../types'

interface Props {
    zipcodeDistances: ZipcodeDistanceType[]
}

const ZipcodeDistance: React.FC<Props> = ({ zipcodeDistances }) => {
    return (
        <Container>
            <Row>
                <div className='zipcodeContainer'>
                    {zipcodeDistances.map((zipcodeDistance, index) => <React.Fragment key={index}>
                        <div className='zipcodes'>{zipcodeDistance.zip}</div>
                        {index !== (zipcodeDistances.length - 1) ? <div className='zipcodedistance'>{zipcodeDistance.distance}</div> : null}
                    </React.Fragment>
                    )}
                </div>
            </Row>
        </Container>
    )
}

export default ZipcodeDistance