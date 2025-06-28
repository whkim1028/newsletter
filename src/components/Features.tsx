'use client';

import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaBrain, FaCogs } from 'react-icons/fa';

const Features = () => {
  return (
    <Container className="text-center py-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <h2 className="fw-bold mb-5">구독과 동시에 얻게 될 것들</h2>
        </Col>
      </Row>
      <Row>
        {/* Dominance Target Feature */}
        <Col md={6} className="mb-4">
          <Card className="h-100 p-4 border-2 border-primary card-hover-effect">
            <Card.Body>
              <Card.Title as="h3" className="fw-bold"><FaBrain size={48} color="var(--primary-green)" /></Card.Title>
              <Card.Title as="h4" className="fw-bold my-3">
                AI가 선별한 시장 주도 핵심 정보
              </Card.Title>
              <Card.Text>
                AI가 방대한 데이터를 분석하고 <strong className="text-primary">가장 중요한 시장 주도 핵심 정보</strong>를 선별하여, 당신이 남들보다 빠르게 투자 기회를 포착하도록 돕습니다.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Balance Target Feature */}
        <Col md={6} className="mb-4">
          <Card className="h-100 p-4 border-2 border-secondary card-hover-effect">
            <Card.Body>
              <Card.Title as="h3" className="fw-bold"><FaCogs size={48} color="var(--accent-gold)" /></Card.Title>
              <Card.Title as="h4" className="fw-bold my-3">
                최첨단 자동화로 매주 받아보는 맞춤형 리포트
              </Card.Title>
              <Card.Text>
                <strong className="text-secondary">최첨단 자동화 시스템</strong>을 통해 외부 데이터 수집부터 AI 분석, 뉴스레터 발송까지 모든 과정이 자동화되어, 매주 가장 신선하고 정확한 정보를 받아볼 수 있습니다.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Features;
