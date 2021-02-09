interface AlertProps {
  alert?: Alert;
}

const AlertItem = ({ alert }: AlertProps) => {
  if (!alert) {
    return null;
  }
  return (
    <div className={`alert alert-${alert.type}`}>
      <i className='fas fa-info-circle'></i> {alert.message}
    </div>
  );
};

export default AlertItem;
