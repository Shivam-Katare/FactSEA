import React, { useEffect, useState } from 'react'
import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client';
import { Container, Row, Col, Tab } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';
import "./fact.css"
import "./commonfacts.css"
import SpecialFacts from './SpecialFacts';
import WiredFacts from './WiredFacts';
import { Link } from 'react-router-dom';

const GET_FACTS = gql`
  query {
    factsofnature {
      factname
      id
      imgurl
    }
  }
`;

function Facts() {

  const { data, loading } = useQuery(GET_FACTS);
  const [users, setUsers] = useState([])

  useEffect(() => {
    if (data) {
      setUsers(data.factsofnature);
    }

  }, [data])

  if (loading) {
    return <div>Loading...</div>
  }
  return (
    <>
      <div className='all-facts-container'>
        <h1 className='neon'> Special Facts</h1>
        <SpecialFacts />
        <WiredFacts />
        <section className="project" id="project">
          <Container>
            <Row>
              <Col size={12}>
                <TrackVisibility>
                  {({ isVisible }) =>
                    <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                      <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <h1 className='common-facts-heading'>Common Facts</h1>
                        <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                          <Tab.Pane eventKey="first">
                            <Row>
                              {
                                users.map((val) => {
                                  return (
                                    <Col size={12} sm={6} md={4}>
                                      <div className="proj-imgbx">
                                        <img src={val.imgurl} alt="Facts" />
                                        <div className="proj-txtx">
                                          <span>{val.factname}</span>
                                        </div>
                                      </div>
                                    </Col>
                                  )
                                })
                              }
                            </Row>
                          </Tab.Pane>
                        </Tab.Content>
                      </Tab.Container>
                    </div>}
                </TrackVisibility>
              </Col>
            </Row>
          </Container>
          <div>
            <a href='https://earthhow.com/earth-facts/' target="_blank">
            <button class="know-image-custom-btn know-image-gallery-btn"><span>More Facts ⤤</span></button>
            </a>
          </div>

          <div>
            <Link to="/">
            <button class="know-image-custom-btn know-image-gallery-btn"><span>Return Back</span></button>
            </Link>
          </div>
        </section>
      </div >
    </>
  )
}

export default Facts