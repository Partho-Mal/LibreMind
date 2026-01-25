from app.services.risk_service import RiskService


def test_high_risk():
    service = RiskService()
    assert service.assess("I want to kill myself") == "high"


def test_low_risk():
    service = RiskService()
    assert service.assess("Hello, how are you") == "low"
