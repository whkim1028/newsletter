'use client';

import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaChartLine, FaShieldAlt } from 'react-icons/fa';

const Problem = () => {
  return (
    <Container className="text-center py-5">
      <Row>
        <Col>
          <h2 className="fw-bold mb-5">혹시 이런 고민, 하고 계신가요?</h2>
        </Col>
      </Row>
      <Row>
        {/* Dominance Target */}
        <Col md={6} className="mb-4">
          <Card className="h-100 p-4 card-hover-effect">
            <Card.Body>
              <Card.Title as="h3" className="fw-bold"><FaChartLine size={48} color="var(--primary-green)" /></Card.Title>
              <Card.Title as="h4" className="fw-bold my-3">
                성공적인 투자의 기회를 놓치고 있습니까?
              </Card.Title>
              <Card.Text>
                남들은 이미 저점 매수, 고점 매도로 자산을 불려나가는데, 나만 뒤쳐지는 것 같아 불안하신가요? 최고의 타이밍은 기다려주지 않습니다.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Balance Target */}
        <Col md={6} className="mb-4">
          <Card className="h-100 p-4 card-hover-effect">
            <Card.Body>
              <Card.Title as="h3" className="fw-bold"><FaShieldAlt size={48} color="var(--accent-gold)" /></Card.Title>
              <Card.Title as="h4" className="fw-bold my-3">
                잘못된 정보로 인한 실패가 두렵습니까?
              </Card.Title>
              <Card.Text>
                수많은 정보의 홍수 속에서 무엇을 믿어야 할지 막막하신가요? 한 번의 잘못된 선택이 소중한 자산에 큰 손실을 입힐 수 있습니다.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Problem;
