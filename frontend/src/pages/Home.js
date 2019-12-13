/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Spinner, Row, Col, Container,
} from 'reactstrap';
import CompanyInfo from '../components/home/CompanyInfo';

const Home = () => {
  const [companyInfo, setCompanyInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setError] = useState(false);

  useEffect(() => {
    const fetchCompanyInfo = async () => {
      await axios
        .get('http://localhost:9000/company_info')
        .then((result) => {
          if (result.status === 200) {
            setCompanyInfo(result.data);
          } else {
            setError(true);
          }
        })
        .catch(() => {
          setError(true);
        });
      setIsLoading(false);
    };
    fetchCompanyInfo();
  }, []);

  return (
    <div className="home-div">
      {(() => {
        if (isLoading) {
          return (
            <Row className="center-spinner">
              <Spinner />
            </Row>
          );
        }
        if (isError) {
          return (
            <div className="padding-bottom-1 alert alert-danger" role="alert">
              Error trying to fetch company information
            </div>
          );
        }
        return (
          <div className="row mtop">
            <div className="col-md-2" />
            <div className="col-md-8 smallBox">
              <div className="row">
                <Col md="7" sm="5">
                  <strong className="field-name">Company: </strong>
                  {companyInfo.companyKey}
                </Col>
                <Col md="5" sm="7">
                  <strong className="field-name">Company Tax ID: </strong>
                  {companyInfo.companyTaxID}
                </Col>
              </div>
              <hr />
              <CompanyInfo companyInformation={companyInfo} />
            </div>
          </div>
        );
      })()}
    </div>
  );
};
export default Home;
