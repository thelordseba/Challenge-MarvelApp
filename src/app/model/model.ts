export interface MarvelResponse {
    code: number,
    status: string,
    data: Data
  }
  
  export interface Data {
    results: Hero []
  }
  
  export interface Hero {
    id: number,
    name: string,
    description: string,
    thumbnail: Thumbnail,
    comics: Comic,
    series: Serie,
    stories: Storie
  }
  
  export interface Thumbnail {
    path: string,
    extension: string
  }
  
  export interface Comic {
    items: Item [],
    returned: number  
  }
  
  export interface Serie {
    items: Item [],
    returned: number  
  }
  
  export interface Storie {
    items: Item [],
    returned: number  
  }
  
  export interface Item {
    resourceURI: string,
    name: string  
  }