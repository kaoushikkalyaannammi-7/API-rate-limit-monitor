import '../styles/main.css';

function AddApiModal({name,limit,timeUnit,windowSize,setName,setLimit,setWindowSize,setTimeUnit ,onClose,onSubmit}){
    return(
        <div className="modal-overlay" onClick={onClose} data-testid="modal-overlay">
            <div 
                className="modal-content" 
                onClick={(e) => e.stopPropagation()}
                data-testid="modal-content"
            >
                <div className="modal-header">
                    <h2 className="modal-title" data-testid="modal-title">Add New API</h2>
                    <button 
                        className="modal-close" 
                        onClick={onClose}
                        type="button"
                        aria-label="Close modal"
                        data-testid="modal-close-button"
                    >
                        ×
                    </button>
                </div>
                
                <form className="modal-form" onSubmit={onSubmit} data-testid="add-api-form">
                    <div className="modal-form-group">
                        <label className="modal-form-label" htmlFor="api-name">
                            API Name
                        </label>
                        <input
                            id="api-name"
                            className="modal-form-input"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="e.g., GitHub API"
                            type="text"
                            required
                            data-testid="api-name-input"
                        />
                    </div>
                    
                    <div className="modal-form-group">
                        <label className="modal-form-label" htmlFor="api-limit">
                            Rate Limit
                        </label>
                        <input
                            id="api-limit"
                            className="modal-form-input"
                            value={limit}
                            onChange={(e) => setLimit(e.target.value)}
                            placeholder="e.g., 100"
                            type="number"
                            min="1"
                            required
                            data-testid="api-limit-input"
                        />
                    </div>
                    
                    <div className="modal-form-group">
                        <label className="modal-form-label">
                            Time Window
                        </label>
                        <div className="modal-form-row">
                            <input
                                className="modal-form-input"
                                type="number"
                                placeholder="Time value"
                                value={windowSize}
                                onChange={(e) => setWindowSize(e.target.value)}
                                min="1"
                                required
                                data-testid="time-window-input"
                            />
                            <select
                                className="modal-form-select"
                                value={timeUnit}
                                onChange={(e) => setTimeUnit(e.target.value)}
                                data-testid="time-unit-select"
                            >
                                <option value="seconds">Seconds</option>
                                <option value="minutes">Minutes</option>
                                <option value="hours">Hours</option>
                            </select>
                        </div>
                    </div>

                    <div className="modal-actions">
                        <button 
                            className="btn-modal-primary" 
                            type="submit"
                            data-testid="modal-submit-button"
                        >
                            Add API
                        </button>
                        <button 
                            className="btn-modal-secondary" 
                            type="button" 
                            onClick={onClose}
                            data-testid="modal-cancel-button"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );

}
export default AddApiModal;