import { FunctionComponent } from 'react';
import { Card } from './card';

interface TrendingProps {
  className?: string;
  username?: string;
  items?: Array<string>;
  title?: string;
  layout?: 'vertical' | 'horizontal';
}

const Trending: FunctionComponent<TrendingProps> = ({
  className,
  username,
  title = 'Trending for',
  items = [],
  layout = 'horizontal'
}) => {
  const _renderList = () => {
    return items.map((trend, index) => (
      <div className="trend-item" key={index}>
        {index + 1} {trend}
      </div>
    ));
  };
  return (
    <div className={`trending ${className}`}>
      <h1>Trending</h1>
      <Card>
        <div className="meta-info">
          <h3>{title}</h3>
          <p>@{username}</p>
        </div>
        <div className={`list-container ${layout}`}>{_renderList()}</div>
      </Card>
    </div>
  );
};

export default Trending;
