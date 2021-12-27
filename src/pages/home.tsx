import React, { useContext } from 'react'
import { Container, Row } from 'reactstrap'
import ZipcodeDistance from '../components/zicodedistance'
import Zipcode from '../components/zipcode'
import { Context } from '../store'

interface Props {  }

const Home: React.FC<Props> = () => {

    const [state, dispatch] = useContext(Context)

    console.log("state.zipcodeDistances ==>", state.zipcodeDistances);

    return (
        <div style={{width: "100%"}}>
            <Row>
                <ZipcodeDistance zipcodeDistances={state.zipcodeDistances}></ZipcodeDistance>
            </Row>
            <Container>
            <Row style={{ justifyContent: 'center' }}>
                <Zipcode zipcodes={state.zipcodes} dispatch={dispatch} />
            </Row>
            </Container>
        </div>
    )
}

export default Home
