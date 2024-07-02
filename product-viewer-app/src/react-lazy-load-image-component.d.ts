declare module 'react-lazy-load-image-component' {
    import { FC, ImgHTMLAttributes } from 'react';
  
    interface LazyLoadImageProps extends ImgHTMLAttributes<HTMLImageElement> {
      alt?: string;
      effect?: 'blur' | 'black-and-white' | 'opacity' | 'none';
      height?: string | number;
      src: string;
      placeholderSrc?: string;
      threshold?: number;
      width?: string | number;
      afterLoad?: () => void;
      beforeLoad?: () => void;
      delayMethod?: 'debounce' | 'throttle';
      delayTime?: number;
      useIntersectionObserver?: boolean;
      visibleByDefault?: boolean;
    }
  
    export const LazyLoadImage: FC<LazyLoadImageProps>;
  }
  