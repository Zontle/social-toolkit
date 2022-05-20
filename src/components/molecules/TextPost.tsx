import React, { FunctionComponent, useState, ChangeEvent } from 'react';
import Upload from 'rc-upload';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import Button from '../atoms/button';
import Input from '../atoms/input';
import { AstronautIcon } from '../../assets/icons/astronaut';
import { RainbowIcon } from '../../assets/icons/rainbow';

import { fileToBase64 } from '../../utils/file';
export interface TextPostProps {
  className?: string;
  placeholder?: string;
  onSubmit?: Function;
  children?: React.ReactNode;
}
export interface FileProps {
  file: any;
  uri: string;
}
// TODO Add media upload icons
const TextPost: FunctionComponent<TextPostProps> = ({
  children,
  className,
  onSubmit = () => ({}),
  placeholder = 'What’s on you mind?'
}) => {
  const [text, setText] = useState('');
  const [files, setFiles] = useState<FileProps[]>([]);
  const _handleSubmit = () => {
    onSubmit({
      text,
      files
    });
    setFiles([]);
    setText('');
  };
  const _handleSetText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };
  const _handleUploadFile = async (rcFile: any): Promise<string> => {
    setFiles([
      ...files,
      {
        file: rcFile,
        uri: await fileToBase64(rcFile)
      }
    ]);
    return '';
  };
  const _renderImageList = () => {
    let images: React.ReactNode[] = [];
    for (let file of files) {
      images.push(
        <div className="image-preview-wrapper">
          <img src={file?.uri} />
        </div>
      );
    }
    return images;
  };
  return (
    <div className={`text-post ${className}`}>
      <div className="user-wrapper">
        <div className="icon-user">
          <div className="icon-profile">
            <AstronautIcon width="23.815" height="27.218" fill="#328bd2" />
          </div>
          <div className="bar-icon">
            <RainbowIcon
              widthSvg="auto"
              heightSvg="auto"
              widthWakes="150"
              heightOne="13"
              heightTwo="8"
              heightThree="3"
              fillOne="#328bd2"
              fillTwo="#d33682"
              fillThree="#eee8d5"
              viewBox="0 0 20 130"
            />
          </div>
        </div>

        {children}
      </div>
      <div className="media-wrapper">
        <Input
          type="textarea"
          size="large"
          normalized
          className="text-input"
          placeholder={placeholder}
          onChange={_handleSetText}
        />
        <div className="images-container">{_renderImageList()}</div>
        <div className="triggers">
          <div className="icons">
            <Upload action={_handleUploadFile}>
              <FontAwesomeIcon icon={faImage} className="upload-icon" />
            </Upload>
          </div>
          <div className="action">
            <Button type="primary" size="large" onClick={_handleSubmit}>
              Post
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TextPost;
