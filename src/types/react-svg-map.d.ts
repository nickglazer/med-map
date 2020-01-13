declare module "react-svg-map" {

  import React = __React;

  export type SVGMapProps = {
    map: {
      viewBox: string,
      locations: {
        path: string,
        id: string,
        name?: string
      }[],
      label?: string
    },
    className?: string,
    role?: string,
    locationClassName?: string | ((...args: any[]) => any),
    locationTabIndex?: string | ((...args: any[]) => any),
    locationRole?: string,
    onLocationMouseOver?: (...args: any[]) => any,
    onLocationMouseOut?: (...args: any[]) => any,
    onLocationMouseMove?: (...args: any[]) => any,
    onLocationClick?: (...args: any[]) => any,
    onLocationKeyDown?: (...args: any[]) => any,
    onLocationFocus?: (...args: any[]) => any,
    onLocationBlur?: (...args: any[]) => any,
    isLocationSelected?: (...args: any[]) => any
  };

  export function SVGMap(
    props: SVGMapProps
  ): React.Component<any, any>;

  export = SVGMap;
}
