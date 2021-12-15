import { tuneFeedMapper } from "./tuneFeed.mapper";

describe('tuneFeedMapper', () => {
  it('should return null', () => {
    var data = tuneFeedMapper(null);
    expect(data).toEqual(null);
  });

  it('should map value', () => {
    var data = tuneFeedMapper(json);

    expect(data?.tunes).toBeDefined;
    expect(data?.tunes[0]).toBeDefined;
    expect(data?.tunes[0].title).toEqual('30 - Adele');
    expect(data?.tunes[0].category).toEqual('Pop');
    expect(data?.tunes[0].artist).toEqual('Adele');;
    expect(data?.tunes[0].imageUrl).toEqual('https://is5-ssl.mzstatic.com/image/thumb/Music115/v4/73/6d/7c/736d7cfb-c79d-c9a9-4170-5e71d008dea1/886449666430.jpg/170x170bb.png');;
  });
});

const json = {
    "feed": {
        "author": {
            "name": {
                "label": "iTunes Store"
            },
            "uri": {
                "label": "http://www.apple.com/itunes/"
            }
        },
        "entry": [{
                "im:name": {
                    "label": "30"
                },
                "im:image": [
                    {
                        "label": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/73/6d/7c/736d7cfb-c79d-c9a9-4170-5e71d008dea1/886449666430.jpg/55x55bb.png",
                        "attributes": {
                            "height": "55"
                        }
                    },
                    {
                        "label": "https://is5-ssl.mzstatic.com/image/thumb/Music115/v4/73/6d/7c/736d7cfb-c79d-c9a9-4170-5e71d008dea1/886449666430.jpg/60x60bb.png",
                        "attributes": {
                            "height": "60"
                        }
                    },
                    {
                        "label": "https://is5-ssl.mzstatic.com/image/thumb/Music115/v4/73/6d/7c/736d7cfb-c79d-c9a9-4170-5e71d008dea1/886449666430.jpg/170x170bb.png",
                        "attributes": {
                            "height": "170"
                        }
                    }
                ],
                "im:itemCount": {
                    "label": "12"
                },
                "im:price": {
                    "label": "$9.99",
                    "attributes": {
                        "amount": "9.99",
                        "currency": "USD"
                    }
                },
                "im:contentType": {
                    "im:contentType": {
                        "attributes": {
                            "term": "Album",
                            "label": "Album"
                        }
                    },
                    "attributes": {
                        "term": "Music",
                        "label": "Music"
                    }
                },
                "rights": {
                    "label": "℗ 2021 Melted Stone under exclusive license to Columbia Records, a Division of Sony Music Entertainment"
                },
                "title": {
                    "label": "30 - Adele"
                },
                "link": {
                    "attributes": {
                        "rel": "alternate",
                        "type": "text/html",
                        "href": "https://music.apple.com/us/album/30/1590035691?uo=2"
                    }
                },
                "id": {
                    "label": "https://music.apple.com/us/album/30/1590035691?uo=2",
                    "attributes": {
                        "im:id": "1590035691"
                    }
                },
                "im:artist": {
                    "label": "Adele",
                    "attributes": {
                        "href": "https://music.apple.com/us/artist/adele/262836961?uo=2"
                    }
                },
                "category": {
                    "attributes": {
                        "im:id": "14",
                        "term": "Pop",
                        "scheme": "https://music.apple.com/us/genre/music-pop/id14?uo=2",
                        "label": "Pop"
                    }
                },
                "im:releaseDate": {
                    "label": "2021-11-19T00:00:00-07:00",
                    "attributes": {
                        "label": "November 19, 2021"
                    }
                }
            }
        ],
        "updated": {
            "label": "2021-12-10T07:49:48-07:00"
        },
        "rights": {
            "label": "Copyright 2008 Apple Inc."
        },
        "title": {
            "label": "iTunes Store: Top Albums"
        },
        "icon": {
            "label": "http://itunes.apple.com/favicon.ico"
        },
        "link": [{
                "attributes": {
                    "rel": "alternate",
                    "type": "text/html",
                    "href": "https://itunes.apple.com/WebObjects/MZStore.woa/wa/viewTop?cc=us&id=1&popId=11"
                }
            },
            {
                "attributes": {
                    "rel": "self",
                    "href": "https://mzstoreservices-int.dslb.apple.com/us/rss/topalbums/limit=10/json"
                }
            }
        ],
        "id": {
            "label": "https://mzstoreservices-int.dslb.apple.com/us/rss/topalbums/limit=10/json"
        }
    }
}