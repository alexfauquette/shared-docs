export type Sponsors = {
    name: string;
    description: string;
    href: string;
}

export type GoldSponsors = Sponsors & {
    src: string;
    srcSet?: string;
}
export type DiamondSponsors = GoldSponsors & {
    srcDark: string;
    srcSetDark?: string;
    srcSquare: string;
    logoWidth: string;
    logoHeight: string;
}

export const GOLD_SPONSORS: GoldSponsors[] = [
    {
        src: '/static/sponsors/tidelift.svg',
        name: 'Tidelift',
        description: 'Enterprise-ready open-source software.',
        href: 'https://tidelift.com/',
    },
    {
        src: 'https://images.opencollective.com/dialmycalls/f5ae9ab/avatar/40.png',
        srcSet: 'https://images.opencollective.com/dialmycalls/f5ae9ab/avatar/120.png 3x',
        name: 'DialMyCalls',
        description: 'Send text messages, calls, and emails.',
        href: 'https://www.dialmycalls.com/?utm_source=mui.com&utm_medium=referral&utm_content=homepage',
    },
    {
        src: 'https://images.opencollective.com/react-pdf-kit/c8e1c25/logo/40.png',
        srcSet: 'https://images.opencollective.com/react-pdf-kit/c8e1c25/logo/120.png 3x',
        name: 'React PDF Kit',
        description: 'Powerful, Fast, Dev-Friendly React PDF Viewer.',
        href: 'https://www.react-pdf-kit.dev/?utm_source=mui.com&utm_medium=referral&utm_content=homepage',
    },
];

export const BACKLINKS_SPONSORS: Sponsors[] = [
    {
        name: 'Goread.io',
        description: 'Instagram followers, likes, views, and comments.',
        href: 'https://goread.io/?utm_source=mui.com&utm_medium=referral&utm_content=homepage',
    },
    {
        name: 'Buzzoid',
        description: 'Instant delivery Instagram followers.',
        href: 'https://buzzoid.com/?utm_source=mui.com&utm_medium=referral&utm_content=homepage',
    },
    {
        name: 'Twicsy',
        description: 'Instant delivery Instagram followers.',
        href: 'https://twicsy.com/?utm_source=mui.com&utm_medium=referral&utm_content=homepage',
    },
    {
        name: 'Views4You',
        description: 'Social media growth services.',
        href: 'https://views4you.com/?utm_source=mui.com&utm_medium=referral&utm_content=homepage',
    },
    {
        name: 'Poprey',
        description: 'Buy Instagram likes with crypto.',
        href: 'https://poprey.com/?utm_source=mui.com&utm_medium=referral&utm_content=homepage',
    },
    {
        name: 'SocialWick',
        description: 'Buy Instagram followers.',
        href: 'https://www.socialwick.com/instagram/followers',
    },
    {
        name: 'Follower24',
        description: 'Social media success.',
        href: 'https://www.follower24.de/?utm_source=mui.com&utm_medium=referral&utm_content=homepage',
    },
];

export const DIAMOND_SPONSORS: DiamondSponsors[] = [
    {
        src: '/static/sponsors/doit-light.svg',
        srcDark: '/static/sponsors/doit-dark.svg',
        srcSquare: "/static/sponsors/doit-square.svg",
        name: 'Doit International',
        description: 'Technology and cloud expertise to buy, optimize and manage public cloud.',
        href: 'https://www.doit.com/?utm_source=mui.com&utm_medium=referral&utm_content=homepage',
        logoHeight: '29px',
        logoWidth: '70px',
    },
    {
        src: '/static/sponsors/formengine-light.svg',
        srcDark: '/static/sponsors/formengine-dark.svg',
        srcSquare: "/static/sponsors/formengine-square.svg",
        name: 'FormEngine Core',
        description: 'Stop building forms with MUI manually! Try the smart way — use FormEngine Core.',
        href: 'https://formengine.io/lightweight-react-json-schema-form-builder-library-for-mui?utm_source=mui&utm_medium=sponsor&utm_campaign=mui&utm_content=stop-manually&utm_term=smartway',
        logoHeight: '23.2px',
        logoWidth: 'auto',
    },
];
