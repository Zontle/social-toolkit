import { IconProp, SizeProp } from "@fortawesome/fontawesome-svg-core";
import { faEllipsisH, faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FunctionComponent, MouseEventHandler } from "react";

interface IconsProps {
    onClick?: MouseEventHandler;
    size?: SizeProp;
}

export const IconMenu: FunctionComponent<IconsProps> = ({ onClick }) => {
    return (
        <button onClick={onClick}>
            <FontAwesomeIcon icon={faEllipsisH as IconProp} />
        </button>
    );
};

export const IconMenuPostSection: FunctionComponent<IconsProps> = ({ onClick, size }) => {
    return (
        <button onClick={onClick}>
            <FontAwesomeIcon icon={faEllipsisV as IconProp} size={size}/>
        </button>
    );
};