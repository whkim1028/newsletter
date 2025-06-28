'use client';

import { Container, Row, Col } from 'react-bootstrap';
import { FaRobot, FaDatabase } from 'react-icons/fa';

const Solution = () => {
  return (
    <Container fluid className="text-center py-5" style={{ backgroundColor: '#f8f9fa' }}>
      <Row className="justify-content-center">
        <Col md={8}>
          <h2 className="fw-bold mb-4">감으로 하는 투자는 이제 그만, 데이터가 당신의 무기가 됩니다.</h2>
          <p className="lead mb-5">
            AI와 전문가의 분석으로 당신의 투자를 성공으로 이끌어 드립니다.
          </p>
        </Col>
      </Row>
      <Row>
        {/* Dominance Target */}
        <Col md={6} className="mb-4">
          <div className="p-4">
            <h3 className="fw-bold"><FaRobot size={48} color="var(--primary-green)" /></h3>
            <h4 className="fw-bold my-3">AI 기반 독점 데이터 분석과 전문가 인사이트</h4>
            <p className="text-muted">
              일반에 공개되지 않는 독점 데이터와 AI의 정교한 분석, 현직 전문가의 깊이 있는 통찰을 통해 시장의 흐름을 꿰뚫는 전략적 인사이트를 얻으세요.
            </p>
          </div>
        </Col>

        {/* Balance Target */}
        <Col md={6} className="mb-4">
          <div className="p-4">
            <h3 className="fw-bold"><FaDatabase size={48} color="var(--accent-gold)" /></h3>
            <h4 className="fw-bold my-3">AI가 검증한 데이터 기반의 안정적인 리스크 관리</h4>
            <p className="text-muted">
              AI가 수집하고 검증한 정확한 데이터를 기반으로 잠재적 리스크를 미리 파악하고, 시장 변동성 속에서도 소중한 자산을 안전하게 지키는 방법을 배우세요.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Solution;
