import React from "react";
import ContentLoader from "react-content-loader";

const RoomSkeleton = () => (
    <ContentLoader
    speed={2}
    width={300}
    height={410}
    viewBox="0 0 300 410"
    backgroundColor="#b5b5b5"
    foregroundColor="#ecebeb"
  >
    <rect x="135" y="66" rx="0" ry="0" width="0" height="1" />
    <rect x="36" y="187" rx="5" ry="5" width="116" height="23" />
    <rect x="36" y="223" rx="5" ry="5" width="237" height="32" />
    <rect x="40" y="261" rx="2" ry="2" width="15" height="15" />
    <rect x="97" y="261" rx="2" ry="2" width="15" height="15" />
    <rect x="68" y="261" rx="2" ry="2" width="15" height="15" />
    <rect x="127" y="262" rx="2" ry="2" width="15" height="15" />
    <rect x="157" y="261" rx="2" ry="2" width="15" height="15" />
    <rect x="35" y="3" rx="5" ry="5" width="247" height="174" />
  </ContentLoader>
)

export {RoomSkeleton};