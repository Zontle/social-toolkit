import { SizeProp } from "@fortawesome/fontawesome-svg-core";
import { faBell, faCog, faComment, faEllipsisH, faHeart, faHome, faPlus, faRetweet, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FunctionComponent, MouseEventHandler } from "react";

interface IconsProps {
    onClick?: MouseEventHandler;
    size?: SizeProp;
}

export const IconHeart: FunctionComponent<IconsProps> = ({ onClick }) => {
    return (
        <button onClick={onClick}>
            <FontAwesomeIcon icon={faHeart} />
        </button>
    );
};

export const IconRetweet: FunctionComponent<IconsProps> = ({ onClick }) => {
    return (
        <button onClick={onClick}>
            <FontAwesomeIcon icon={faRetweet} />
        </button>
    );
};

export const IconComment: FunctionComponent<IconsProps> = ({ onClick, size }) => {
    return (
        <button onClick={onClick}>
            <FontAwesomeIcon icon={faComment} size={size}/>
        </button>
    );
};

export const IconMenu: FunctionComponent<IconsProps> = ({ onClick }) => {
    return (
        <button onClick={onClick}>
            <FontAwesomeIcon icon={faEllipsisH} />
        </button>
    );
};

export const IconPlus: FunctionComponent<IconsProps> = ({ onClick, size }) => {
    return (
        <button onClick={onClick}>
            <FontAwesomeIcon icon={faPlus} size={size}/>
        </button>
    );
};

export const IconHome: FunctionComponent<IconsProps> = ({ onClick, size }) => {
    return (
        <button onClick={onClick}>
            <FontAwesomeIcon icon={faHome} size={size} />
        </button>
    );
};

export const IconBell: FunctionComponent<IconsProps> = ({ onClick, size }) => {
    return (
        <button onClick={onClick}>
            <FontAwesomeIcon icon={faBell} size={size} />
        </button>
    );
};

export const IconUser: FunctionComponent<IconsProps> = ({ onClick, size }) => {
    return (
        <button onClick={onClick}>
            <FontAwesomeIcon icon={faUserCircle} size={size} />
        </button>
    );
};

export const IconSettings: FunctionComponent<IconsProps> = ({ onClick, size }) => {
    return (
        <button onClick={onClick}>
            <FontAwesomeIcon icon={faCog} size={size} />
        </button>
    );
};