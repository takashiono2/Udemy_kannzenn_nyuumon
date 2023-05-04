import { useState } from "react";
import { createPortal } from "react-dom";

import Toast from "./components/Toast";

const ToastPortal = ({children}) => {
  const target = document.querySelector('.container.start');
  return createPortal(children, target);
}


const Example = () => {
  const [toastOpen, setToastOpen] = useState(false);

  return (
    <div>
      <h3>
        トーストの作成（createPortal）
      </h3>
      <div className="container start"></div>
      <button
        type="button"
        onClick={() => setToastOpen(true)}
        disabled={toastOpen}
      >
        トーストを表示する
      </button>
      {toastOpen && (
        <ToastPortal>
          <Toast
            visible={toastOpen}
            handleCloseClick={() => setToastOpen(false)}
          />
        </ToastPortal>
      )}
    </div>
  );
};

export default Example;
