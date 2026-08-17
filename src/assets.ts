import heroBgUrl from "../assets/hero-bg.png";
import logoUrl from "../assets/logo.png";
import logoGif from "../assets/logo.gif";
import videoFinanceUrl from "../assets/videos/video-finance.svg";
import videoInventoryUrl from "../assets/videos/video-inventory.svg";
import videoOverviewUrl from "../assets/videos/video-overview.svg";
import photo01Url from "../assets/photos/blizbooks-photo-01.svg";
import photo02Url from "../assets/photos/blizbooks-photo-02.svg";
import photo03Url from "../assets/photos/blizbooks-photo-03.svg";
import photo04Url from "../assets/photos/blizbooks-photo-04.svg";
import photo05Url from "../assets/photos/blizbooks-photo-05.svg";
import photo06Url from "../assets/photos/blizbooks-photo-06.svg";
import photo07Url from "../assets/photos/blizbooks-photo-07.svg";
import photo08Url from "../assets/photos/blizbooks-photo-08.svg";
import photo09Url from "../assets/photos/blizbooks-photo-09.svg";
import photo10Url from "../assets/photos/blizbooks-photo-10.svg";
import photo11Url from "../assets/photos/blizbooks-photo-11.svg";
import photo12Url from "../assets/photos/blizbooks-photo-12.svg";

const heroScreenModules = import.meta.glob<string>("../assets/hero/*.png", {
  eager: true,
  import: "default",
  query: "?url",
});

const posPhotoModules = import.meta.glob<string>("../assets/pos/*.png", {
  eager: true,
  import: "default",
  query: "?url",
});

const inventoryPhotoModules = import.meta.glob<string>("../assets/inventory/*.png", {
  eager: true,
  import: "default",
  query: "?url",
});

const employeePhotoModules = import.meta.glob<string>("../assets/employee/*.png", {
  eager: true,
  import: "default",
  query: "?url",
});

const reviewPhotoModules = import.meta.glob<string>("../assets/reviews/p*.png", {
  eager: true,
  import: "default",
  query: "?url",
});

function sortAssetModules(modules: Record<string, string>): string[] {
  return Object.entries(modules)
    .sort(([left], [right]) => left.localeCompare(right, undefined, { numeric: true }))
    .map(([, url]) => url);
}

export const heroScreenUrls = sortAssetModules(heroScreenModules);
export const posPhotoUrls = sortAssetModules(posPhotoModules);
export const inventoryPhotoUrls = sortAssetModules(inventoryPhotoModules);
export const employeePhotoUrls = sortAssetModules(employeePhotoModules);
export const reviewPhotoUrls = sortAssetModules(reviewPhotoModules);

export const photoAssets = [
  photo01Url,
  photo02Url,
  photo03Url,
  photo04Url,
  photo05Url,
  photo06Url,
  photo07Url,
  photo08Url,
  photo09Url,
  photo10Url,
  photo11Url,
  photo12Url,
];

export {
  heroBgUrl,
  logoUrl,
  logoGif,
  videoFinanceUrl,
  videoInventoryUrl,
  videoOverviewUrl,
};
