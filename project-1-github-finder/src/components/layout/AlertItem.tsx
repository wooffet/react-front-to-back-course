import { useContext } from 'react';
import { AlertContext } from '../../context/alert/alertContext';
import { AlertContextType } from '../../types/github-finder';

const AlertItem = () => {
  const { alert } = useContext(AlertContext) as AlertContextType;
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
