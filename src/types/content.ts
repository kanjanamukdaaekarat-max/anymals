export type Species={slug:string;commonName:string;scientificName:string;category:string;careLevel:string;lifespan:string;adultSize:string;temperature:string;humidity:string;feeding:string;habitat:string;morphs:string;image:string;imageAlt:string}
export type Article={id:string;title:string;category:string;tags:string[];excerpt:string;readTime:string;image:string;imageAlt:string;author?:string}
export type CommunityPost={id:string;title:string;category:string;author:string;votes:number;replies:number;species?:string;createdAt:string;pinned?:boolean}
