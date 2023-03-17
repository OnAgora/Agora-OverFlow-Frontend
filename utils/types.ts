export type NftInfo = {
    "id": string
    "name": string,
    "description": string,
    "metadataId": number,
    "serial": number,
    "collectionName": string,
    "address": string,
    "creatorHandleName": string,
    "image": string,
    "isListed": boolean,
    "isMinted": boolean,
    "price": number,
    "slug": string,
    "createdAt": string,
    "updatedAt": string,
    "nFTsListName": string
}

export type CreatorInfo = {
    "name": string,
    "handleName": string,
    "creatorType": string,
    "description": string,
    "avatarUrl": string,
    "bannerUrl": string,
    "body": string,
    "twitter": string,
    "instagram": string,
    "facebook": string,
    "discord": string,
    "slug": string,
    "published": boolean,
}

export type CollectionInfo = {
    "name": string,
    "creatorHandleName": string,
    "address": string,
    "launchDate": string,
    "published": true,
    "categoryName": string,
    "description": string,  
    "avatarUrl": string,
    "bannerUrl": string,
    "videoUrl": string,
    "twitter": string,
    "instagram": string,
    "facebook": string,
    "discord": string,
    "isMinting": boolean,
    "slug": string,
    "createdAt": string,
    "updatedAt": string,
    "ListedName": string,
}

export type CollectionInfoWithCreatorNFTs = {
    "name": string,
    "creatorHandleName": string,
    "address": string,
    "launchDate": string,
    "published": true,
    "categoryName": string,
    "description": string,  
    "avatarUrl": string,
    "bannerUrl": string,
    "videoUrl": string,
    "twitter": string,
    "instagram": string,
    "facebook": string,
    "discord": string,
    "isMinting": boolean,
    "slug": string,
    "createdAt": string,
    "updatedAt": string,
    "ListedName": string,

    "creator": CreatorInfo,
    "NFTs": Array<NftInfo>,
}

export type CollectionInfoWithCategory = {
    "name": string,
    "creatorHandleName": string,
    "address": string,
    "launchDate": string,
    "published": true,
    "categoryName": string,
    "description": string,  
    "avatarUrl": string,
    "bannerUrl": string,
    "videoUrl": string,
    "twitter": string,
    "instagram": string,
    "facebook": string,
    "discord": string,
    "isMinting": boolean,
    "slug": string,
    "createdAt": string,
    "updatedAt": string,
    "ListedName": string,

    "category": CategoryInfo,
}

export type CollectionInfoWithCreatorCategory = {
    "name": string,
    "creatorHandleName": string,
    "address": string,
    "launchDate": string,
    "published": true,
    "categoryName": string,
    "description": string,  
    "avatarUrl": string,
    "bannerUrl": string,
    "videoUrl": string,
    "twitter": string,
    "instagram": string,
    "facebook": string,
    "discord": string,
    "isMinting": boolean,
    "slug": string,
    "createdAt": string,
    "updatedAt": string,
    "ListedName": string,

    "creator": CreatorInfo,
    "category": CategoryInfo,
}

export type CategoryInfo = {
    "name": string,
    "imageUrl": string,
    "color": string,
}