'use client';

import { Container, Row, Col, Button } from 'react-bootstrap';

const Hero = () => {
  return (
    <Container 
      fluid 
      className="text-white text-center py-5 position-relative animated-gradient-bg"
      style={{
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden', // Ensure content doesn't overflow
      }}
    >
      <Row className="py-5 z-1" style={{ position: 'relative' }}>
        <Col>
          <h1 className="display-4 fw-bold">
            남들보다 한 발 앞선 부동산 인사이트, 지금 당신의 메일함으로
          </h1>
          <p className="lead mt-3">
            복잡한 부동산 시장, 핵심만 골라 쉽게 설명해 드립니다.
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

export default Hero;
