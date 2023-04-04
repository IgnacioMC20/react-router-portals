import ReactDOM from "react-dom";

interface Props {
    changeState: () => void
}

export const Modal = ({ changeState }: Props) => {



    return ReactDOM.createPortal(
        <div className="modal" tabIndex={-1} style={{ display: 'block' }}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Modal title</h5>
                        <button type="button" className="btn-close" onClick={changeState} aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p>Modal body text goes here.</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={changeState}>Close</button>
                    </div>
                </div>
            </div>
        </div>,
        document.getElementById("root")!
    );
};
