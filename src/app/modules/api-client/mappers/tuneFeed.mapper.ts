import { TuneCollection } from "src/app/model/TuneCollection";
import { TuneModel } from "src/app/model/TuneModel";
import { tuneModelMapper } from "./tuneModel.mapper";


export function tuneFeedMapper(data: any): TuneCollection | null {
  if (!data) {
    return null;
  }

  const feed = data['feed'];
  if (!feed) {
    return null;
  }

  const entry = feed['entry'];
  if (!entry) {
    return null;
  }

  if (typeof entry.length !== 'number' || entry.length === 0) {
    return null;
  }

  const tuneCollection: TuneCollection = {
    tunes: new Array<TuneModel>(),
  };

  entry.forEach((x: any) => {
    if (x) {
      const tune = tuneModelMapper(x);
      if (tune) {
        tuneCollection.tunes.push(tune);
      }
    }
  });

  return tuneCollection;
}
