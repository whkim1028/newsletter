'use client';

import { Container, Row, Col, Button } from 'react-bootstrap';

const FinalCTA = () => {
  return (
    <Container 
      fluid 
      className="text-white text-center py-5" 
      style={{ backgroundColor: '#0A2E5D' }} // Navy Blue
    >
      <Row className="py-5">
        <Col>
          <h2 className="display-5 fw-bold">
            AI가 분석한 부동산 인사이트, 지금 바로 경험하세요.
          </h2>
          <p className="lead mt-3">
            부동산 투자의 첫걸음, AI 기반의 가장 확실한 정보와 함께 지금 바로 시작하세요.
          </p>
          <Button 
            variant="warning" 
            size="lg" 
            className="mt-4"
            style={{ backgroundColor: '#FFD700', borderColor: '#FFD700' }} // Vibrant Gold
            href="https://maily.so/dailyrealestate" // 실제 구독 페이지로 연결
            target="_blank"
          >
            무료로 핵심 정보 받기
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default FinalCTA;
