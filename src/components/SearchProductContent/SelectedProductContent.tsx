import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveImage } from "../../redux/reducers/productReducer";
import { RootState } from "../../redux/store/store";
import ZoomProductImage from "../ZoomProductImage/ZoomProductImage";

import "./SelectedProductContent.scss";

interface Props {
  image: string;
  description?: string;
  actionBuyItemPosition: ClientRect | null;
}

const SelectedProductContent: React.FC<Props> = ({ actionBuyItemPosition }) => {
  const dispatch = useDispatch();
  const productDetails = useSelector(
    (state: RootState) => state.product.details
  );
  const images = useSelector((state: RootState) => state.product.images);
  const activeImage = useSelector(
    (state: RootState) => state.product.activeImage
  );
  const [showZoom, setShowZoom] = useState(false);
  const [zoomPosition, setZoomPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const handleImageClick = (img: any) => {
    dispatch(setActiveImage(img));
  };

  const handleMouseMove = (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    setShowZoom(true);
    if (activeImage) {
      const { left, top, width, height } =
        e.currentTarget.getBoundingClientRect();
      const x = ((e.pageX - left) / width) * 100;
      const y = ((e.pageY - top) / height) * 100;
      setZoomPosition({ x, y });
    }
  };

  const handleMouseLeave = () => {
    setShowZoom(false);
  };

  return (
    <div className="selected-product-content">
      <div className="thumbnail-container">
        {images.map((img, index) => (
          <img
            key={index}
            src={img.secure_url}
            alt="thumbnail"
            className={`thumbnail ${activeImage?.secure_url === img.secure_url ? 'active-thumbnail' : ''}`}
            onClick={() => handleImageClick(img)}
          />
        ))}
      </div>

      <img
        src={activeImage?.secure_url}
        alt={productDetails.title}
        className="product-image"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      />

      {showZoom && <ZoomProductImage imageUrl={activeImage?.secure_url} zoomPosition={zoomPosition} actionBuyItemPosition={actionBuyItemPosition}/>}
    </div>
  );
};

export default SelectedProductContent;
