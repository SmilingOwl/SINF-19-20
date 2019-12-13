import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';

const Info = ({
  id, description, barcode, complementaryDescription,
}) => (
  <Row>
    <Col sm={{ size: '8', offset: 2 }} className="smallBox">
      <Row>
        <Col md="5">
          <strong className="field-name">Name: </strong>
          {' '}
          {description}
        </Col>
        <Col md="3">
          <strong className="field-name">Code: </strong>
          {' '}
          {id}
        </Col>
        <Col md="4" className="align-right">
          <strong className="field-name">Barcode: </strong>
          {' '}
          {barcode}
        </Col>
      </Row>
      <hr />
      <Row>
        <Col md="12">
          <strong className="field-name">Description: </strong>
          {' '}
          {complementaryDescription}
        </Col>
      </Row>
    </Col>
  </Row>
);

Info.propTypes = {
  id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  barcode: PropTypes.string.isRequired,
  complementaryDescription: PropTypes.string.isRequired,
};

export default Info;
