import MapView, { Animated, MAP_TYPES, ProviderPropType } from './MapView';
import Marker from './MapMarker';
import Overlay from './MapOverlay';

export { default as Polyline } from './MapPolyline';
export { default as Heatmap } from './MapHeatmap';
export { default as Polygon } from './MapPolygon';
export { default as Circle } from './MapCircle';
export { default as UrlTile } from './MapUrlTile';
export { default as WMSTile } from './MapWMSTile';
export { default as LocalTile } from './MapLocalTile';
export { default as Callout } from './MapCallout';
export { default as CalloutSubview } from './MapCalloutSubview';
export { default as AnimatedRegion } from './AnimatedRegion';
export { default as Geojson } from './Geojson';

export { Marker, Overlay };
export { Animated, MAP_TYPES, ProviderPropType };

export * from './ProviderConstants';

export const MarkerAnimated = Marker.Animated;
export const OverlayAnimated = Overlay.Animated;

export default MapView;
