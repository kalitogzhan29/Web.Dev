export interface Product{
 
  id: number;
  name: string;
  price: number;
  description: string;
  url:string;
  img:string;


}

export const products=[
  {
    id: 1,
    name: 'iPhone 11 128Gb Slim',
    price: 293040,
    description: 'Смартфон Apprating:4le iPhone 11 128Gb Slim Box черный',
    url:"https://kaspi.kz/shop/p/apple-iphone-11-128gb-slim-box-chernyi-100692388/?c=750000000#!/item",
    img:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h17/h14/31489167425566/apple-iphone-11-128gb-slim-box-cernyj-100692388-1-Container.jpg"
  },
  {
    id: 2,
    name: 'iPhone 14 256Gb',
    price: 497240 ,
    description: 'Apple iPhone 14 256Gb Blue Smartphone',
    url:"https://kaspi.kz/shop/p/apple-iphone-14-256gb-goluboi-106363155/?c=750000000#!/item",
    img:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hef/h97/63073056096286/apple-iphone-14-128gb-goluboj-106363155-1.jpg"
  },
  {
    id: 3,
    name: 'iPhone 14 Pro Max 256Gb',
    price: 693739,
    description: 'Apple iPhone 14 Pro Max 256Gb Smartphone Black',
    url:"https://kaspi.kz/shop/p/apple-iphone-14-pro-max-256gb-chernyi-106363289/?c=750000000#!/item",
    img:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h53/h6a/63073423065118/apple-iphone-14-pro-max-128gb-cernyj-106363289-1.jpg"
  },
  {
    id: 4,
    name: 'Galaxy A23 6 GB',
    price: 104605,
    description: 'Samsung Galaxy A23 Smartphone 6GB/128GB Black',
    url:"https://kaspi.kz/shop/p/samsung-galaxy-a23-6-gb-128-gb-chernyi-104348541/?c=750000000&tab=reviews#!/item",
    img:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb5/ha6/49792685244446/smartfon-samsung-galaxy-a23-sm-a235fzkkskz-128gb-black-104348541-1.jpg"
  },
  {
    id: 5,
    name: 'Galaxy A33 5G 6 GB/128 GB',
    price: 129670 ,
    description: 'Samsung Galaxy A33 5G 6GB/128GB Smartphone Black',
    url:"https://kaspi.kz/shop/p/samsung-galaxy-a33-5g-6-gb-128-gb-chernyi-104398547/?c=750000000#!/item",
    img:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h56/h8c/49894748160030/samsung-galaxy-a33-5g-6-gb-128-gb-cernyj-104398547-1.jpg"
  },
  {
    id: 6,
    name: 'Samsung Galaxy A33 5G',
    price: 129490,
    description: 'Samsung Galaxy A33 5G 6GB/128GB Blue Smartphone',
    url:"https://kaspi.kz/shop/p/samsung-galaxy-a33-5g-6-gb-128-gb-goluboi-104399147/?c=750000000#!/item",
    img:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc5/h03/49897401188382/smartfon-samsung-galaxy-a33-5g-128gb-sm-a336blbgskz-blue-104399147-1.jpg"
  },
  {
    id: 7,
    name: 'Xiaomi Redmi Note 11S',
    price: 128350,
    description: 'Xiaomi Red Note 10 Pro Smartphone 8GB/256GB Grey',
    url:"https://kaspi.kz/shop/p/xiaomi-redmi-note-10-pro-8-gb-256-gb-seryi-107221005/?c=750000000#!/item",
    img:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h45/h27/64487158087710/xiaomi-redmi-note-10-pro-8-gb-128-gb-seryi-107221005-1.jpg"
  },
  {
    id: 8,
    name: 'Xiaomi Red Note 11S',
    price: 114880 ,
    description: 'Xiaomi Red Note 11S Smartphone 8GB/128GB Grey',
    url:"https://kaspi.kz/shop/p/xiaomi-redmi-note-11s-8-gb-128-gb-seryi-104292774/?c=750000000#!/item",
    img:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5f/h50/49684457259038/xiaomi-redmi-note-11s-6-gb-128-gb-seryj-104292774-1.jpg"
  },
  {
    id: 9,
    name: 'Xiaomi Redmi Note 11 Pro',
    price: 128450,
    description: 'Xiaomi Red Note 11 Pro Smartphone 8GB/128GB White',
    url:"https://kaspi.kz/shop/p/xiaomi-redmi-note-11-pro-8-gb-128-gb-belyi-104020427/?c=750000000#!/item",
    img:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5b/h17/49217235550238/xiaomi-redmi-note-11-pro-8-128gb-seryj-104020427-1.jpg"
  },
  {
    id: 10,
    name: 'Huawei nova Y70',
    price: 104605,
    description: 'Huawei nova 70 Smartphone 4GB/128GB Black',
    url:"https://kaspi.kz/shop/p/huawei-nova-y70-4-gb-128-gb-chernyi-105191899/?c=750000000#!/item",
    img:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb5/ha6/49792685244446/smartfon-samsung-galaxy-a23-sm-a235fzkkskz-128gb-black-104348541-1.jpg"
  },
  {
    id: 11,
    name: 'Huawei Nova Y90',
    price: 129765 ,
    description: 'Huawei Nova Y90 Smartphone 4GB/128GB Green',
    url:"hhttps://kaspi.kz/shop/p/huawei-nova-y90-4-gb-128-gb-zelenyi-106096427/?c=750000000#!/item",
    img:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5e/hd6/61766061490206/huawei-nova-y90-4-gb-128-gb-zelenyj-106096427-1.jpg"
  },
  {
    id: 12,
    name: ' Huawei nova 10',
    price: 259890,
    description: 'Huawei nova 10 Smartphone 8GB/128GB silver',
    url:"https://kaspi.kz/shop/p/huawei-nova-10-8-gb-128-gb-serebristyi-107221419/?c=750000000#!/item",
    img:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h96/ha5/64493127335966/huawei-nova-10-8-gb-128-gb-serebristyi-podarok-watch-fit-2-i-selfie-stick-pro-107221419-1.jpg"
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/