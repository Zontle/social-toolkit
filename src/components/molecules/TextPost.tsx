import { FunctionComponent, useState, ChangeEvent } from 'react';
import Button from '../atoms/button';
import { AstronautIcon } from '../../assets/icons/astronaut';
import { RainbowIcon } from '../../assets/icons/rainbow';
import Input from '../atoms/input';
export interface TextPostProps {
  className?: string;
  placeholder?: string;
  onSubmit?: Function;
}
// TODO Add media upload icons
const TextPost: FunctionComponent<TextPostProps> = ({
  children,
  className,
  onSubmit = () => ({}),
  placeholder = 'What’s on you mind?'
}) => {
  const [text, setText] = useState('');
  const _handleSubmit = () => {
    onSubmit({
      text
    });
  };
  const _handleSetText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
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
          placeholder={placeholder}
          onChange={_handleSetText}
        />
        <div className="triggers">
          <div className="icons"></div>
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
