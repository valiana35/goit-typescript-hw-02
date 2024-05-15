import { FC, ReactNode } from "react";
import css from "./LoadMoreBtn.module.css";

interface LoadBtnProps {
    children: ReactNode;
    onClick: () => void;
    disabled: boolean;
}

const LoadMoreBtn: FC<LoadBtnProps> = ({ children, onClick, disabled }) => {
    return (
        <div className={css.loadMore}>
        <button type="button" onClick={onClick} disabled={disabled} className={css.loadMoreBtn}>{children}</button>
        </div>
    );
}

export default LoadMoreBtn;