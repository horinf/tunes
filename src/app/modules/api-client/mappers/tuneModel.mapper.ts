import { TuneModel } from "src/app/model/TuneModel";

export function tuneModelMapper(data: any): TuneModel | null {
  if (!data) {
    return null;
  }

  let imageUrl;
  const images = data['im:image'];
  if (images && images.length > 0) {
    const lastImage = images[images.length - 1];
    imageUrl = lastImage.label;
  }

  const tune: TuneModel = {
    artist: data['im:artist']?.label,
    title: data['title']?.label,
    link: data['id']?.label,
    imageUrl: imageUrl,
    price: data['im:price']?.label,
    category: data['category']?.attributes?.label,
    id: data['id']?.attributes['im:id'],
    rights: data['rights']?.label,
    releaseDate: data['im:releaseDate']?.label,
  }

  return tune;
}
