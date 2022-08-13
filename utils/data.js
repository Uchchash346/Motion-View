import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            name: 'admin',
            email: 'test@example.com',
            password: bcrypt.hashSync('12345678'),
            isAdmin: true
        },
        {
            name: 'mahmudur',
            email: 'mahmud@example.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: true
        }
    ],
    products: [
        {
            name: 'Xiaomi Capsule In-ear Headphones',
            slug: 'xiaomi-capsule-in-ear-headphones',
            category: 'Headphones',
            image: '/images/headphone1.jpg',
            price: '840',
            brand: 'Xiaomi',
            rating: '4.5',
            numReviews: '10',
            countInStock: '21',
            description: 'A popular Earphone',
        },
        {
            name: 'Haylou GS (LS09A) Smart Watch Global Version',
            slug: 'haylou-gs-ls09a-smart-watch-global-version',
            category: 'Watch',
            image: '/images/watch1.jpg',
            price: '2880',
            brand: 'Haylou',
            rating: '4.7',
            numReviews: '12',
            countInStock: '9',
            description: 'A popular Watch',
        },
        {
            name: 'Redmi Monitor 21.45" Full HD',
            slug: 'redmi-monitor-2145-full-hd',
            category: 'Monitor',
            image: '/images/monitor1.jpg',
            price: '12950',
            brand: 'Redmi',
            rating: '4.2',
            numReviews: '13',
            countInStock: '2',
            description: 'A popular Monitor',
        },
        {
            name: 'Amazfit GTS 4 Mini Smart Watch Global Version',
            slug: 'amazfit-gts-4-mini-smart-watch-global-version',
            category: 'Watch',
            image: '/images/watch2.jpg',
            price: '9380',
            brand: 'Amazfit',
            rating: '4.7',
            numReviews: '10',
            countInStock: '20',
            description: 'A popular Watch',
        },
        {
            name: 'Amazfit GTR 3 Pro Limited Edition',
            slug: 'amazfit-gtr-3-pro-limited-edition',
            category: 'Watch',
            image: '/images/watch3.jpg',
            price: '27700',
            brand: 'Xiaomi',
            rating: '4.9',
            numReviews: '17',
            countInStock: '21',
            description: 'A popular Watch',
        },
        {
            name: 'Haylou Moripods ANC',
            slug: 'haylou-moripods-anc',
            category: 'Headphones',
            image: '/images/headphone2.jpg',
            price: '2900',
            brand: 'Haylou',
            rating: '4.4',
            numReviews: '13',
            countInStock: '27',
            description: 'A popular Earphone',
        },
    ],
};

export default data;