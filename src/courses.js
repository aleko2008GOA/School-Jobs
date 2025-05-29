const blogs = [
    {
        title: "Journalism",
        profession: "ჟურნალისტიკა",
        author: "ნანა ჩოკორაია",
        description: "Alalalalalalla",
        img: {
            src: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/IMG_Academy_Logo.svg/1200px-IMG_Academy_Logo.svg.png",
            ratio: 9 / 16,
            alt: "ნანა ჩოკორაია"
        },
        rate: 10.4,
        video: {
            src: "https://www.youtube.com/embed/s_Fr_GO7fi4?si=4PQs9xGAqa_1NJj_",
            title: "YouTube video player",
            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
            referrerPolicy: "strict-origin-when-cross-origin",
            ratio: 560 / 315
        }
    },
    {
        title: "Journalism",
        profession: "ჟურნალისტიკა",
        author: "ნანა ჩოკორაია",
        description: "Alalalalalalla",
        img: {
            src: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/IMG_Academy_Logo.svg/1200px-IMG_Academy_Logo.svg.png",
            ratio: 9 / 16,
            alt: "ნანა ჩოკორაია"
        },
        rate: 10.4,
        video: {
            src: "https://www.youtube.com/embed/s_Fr_GO7fi4?si=4PQs9xGAqa_1NJj_",
            title: "YouTube video player",
            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
            referrerPolicy: "strict-origin-when-cross-origin",
            ratio: 560 / 315
        }
    }
];

const statistic = [
    { name: 'კომპიუტერული მეცნიერება', vote: 35 },
    { name: 'სამედიცინო', vote: 19 },
    { name: 'ბიზნეს ადმინისტრირება და მენეჯმენტი', vote: 48 },
    { name: 'ფილოლოგია', vote: 7 },
    { name: 'სამართალი', vote: 27 },
    { name: 'მეცნიერება და კვლევა', vote: 23 },
    { name: 'ჟურნალისტიკა', vote: 11 },
    { name: 'ელექტრო-ინჟინერია', vote: 39 },
    { name: 'კომპიუტერული დიზაინი', vote: 12 },
    { name: 'დიპლომატია და საერთაშორისო საკითხები', vote: 17 },
    { name: 'კულტურა და მედიახელოვნება', vote: 15 }
];

export { blogs, statistic };