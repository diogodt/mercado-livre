import React, { CSSProperties } from 'react';
import './ZoomProductImage.scss';

interface Props {
  imageUrl: string;
  zoomPosition: {
    x: number;
    y: number;
  };
  actionBuyItemPosition: ClientRect | null;
}

const ZoomProductImage: React.FC<Props> = ({ imageUrl, zoomPosition, actionBuyItemPosition }) => {
  const zoomStyles: CSSProperties = actionBuyItemPosition ? {
    position: 'absolute',
    left: actionBuyItemPosition.left,
    top: actionBuyItemPosition.top,
} : {};

  return (
    <div className="zoom-container" style={zoomStyles}>
      <img
        src={imageUrl}
        alt="Zoomed Product"
        style={{
          transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
          transform: 'scale(2)',
        }}
      />
    </div>
  );
}

export default ZoomProductImage;