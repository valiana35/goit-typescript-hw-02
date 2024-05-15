import { ReactNode } from "react";
import css from "./LoadMoreBtn.module.css";

type Props = {
    children: ReactNode;
    onClick: () => void;
    disabled: boolean;
}

const LoadMoreBtn = ({ children, onClick, disabled }: Props) => {
    return (
        <div className={css.loadMore}>
        <button type="button" onClick={onClick} disabled={disabled} className={css.loadMoreBtn}>{children}</button>
        </div>
    );
}

export default LoadMoreBtn;