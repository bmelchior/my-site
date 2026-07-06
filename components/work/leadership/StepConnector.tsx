type StepConnectorProps = {
  className?: string;
};

export default function StepConnector({ className = "" }: StepConnectorProps) {
  return (
    <div className={`step-connector ${className}`} aria-hidden="true">
      <div className="step-connector__line" />
      <div className="step-connector__dot" />
      <div className="step-connector__line" />
    </div>
  );
}
