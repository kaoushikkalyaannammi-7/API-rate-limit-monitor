import '../styles/main.css';

function ProgressBar({ used, limit }) {
    
    
     const percentage = Math.min((used / limit) * 100, 100);
    
    // Determine color class based on percentage
    let colorClass = 'safe';
    let statusText = 'Safe';
    
    if (percentage >= 100) {
        colorClass = 'danger';
        statusText = 'Limit Exceeded';
    } else if (percentage >= 80) {
        colorClass = 'critical';
        statusText = 'Critical';
    } else if (percentage >= 50) {
        colorClass = 'warning';
        statusText = 'Warning';
    } else if (percentage >= 30) {
        colorClass = 'moderate';
        statusText = 'Moderate';
    }

    return (
        <div className="progress-bar-container" data-testid="progress-bar-container">
            <div className="progress-bar-label">
                <span>Usage Progress</span>
                <span className="progress-percentage" data-testid="progress-percentage">
                    {percentage.toFixed(0)}%
                </span>
            </div>
            
            <div className="progress-bar-wrapper" data-testid="progress-bar-wrapper">
                <div
                    className={`progress-bar-fill ${colorClass}`}
                    style={{ width: `${percentage}%` }}
                    data-testid="progress-bar-fill"
                />
            </div>
            
            <div className={`progress-status ${colorClass}`} data-testid="progress-status">
                {statusText}
            </div>
        </div>
    );
}
export default ProgressBar;