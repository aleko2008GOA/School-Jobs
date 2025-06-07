const blogs = [
    {
        title: "Lawyer",
        profession: "იურისტი",
        author: "თამარ ღლონტი",
        description: "Alalalalalalla",
        img: {
            src: new URL('./assets/images/professions/lawyer.jpeg', import.meta.url).href,
            ratio: 3 / 4,
            alt: "თამარ ღლონტი"
        },
        rate: 27,
        video: {
            src: "https://www.youtube.com/embed/etNvPt6aAKU?si=N3e6zOPy41eatjJz",
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
        description: 
            `ამ ინტერვიუში ნანა ჩოკორაია, სპორტული ჟურნალისტი, გვიზიარებს საკუთარ პროფესიულ გზას. გაიგებ:
            <ul>
                <li>როგორ დაიწყო მისი კარიერა სპორტულ მედიაში</li>
                <li>რა უნარებია საჭირო წარმატებული ჟურნალისტისთვის</li>
                <li>როგორია მისი სამუშაო დღის სტრუქტურა</li>
                <li>რეალური სირთულეები და წარმატებები სფეროში</li>
            </ul>`,
        img: {
            src: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/IMG_Academy_Logo.svg/1200px-IMG_Academy_Logo.svg.png",
            ratio: 3 / 4,
            alt: "ნანა ჩოკორაია"
        },
        rate: 11,
        video: {
            src: "https://www.youtube.com/embed/s_Fr_GO7fi4?si=4PQs9xGAqa_1NJj_",
            title: "YouTube video player",
            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
            referrerPolicy: "strict-origin-when-cross-origin",
            ratio: 560 / 315
        }
    },
    {
        title: "Business",
        profession: "ბიზნეს ადმინისტრირება და მენეჯმანტი",
        author: "",
        description: 
            ``,
        img: {
            src: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/IMG_Academy_Logo.svg/1200px-IMG_Academy_Logo.svg.png",
            ratio: 3 / 4,
            alt: ""
        },
        rate: 48,
        video: {
            src: "",
            title: "YouTube video player",
            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
            referrerPolicy: "strict-origin-when-cross-origin",
            ratio: 560 / 315
        }
    },
    {
        title: "Electrical-Engineering",
        profession: "ელექტრონული ინჟინერია",
        author: "",
        description: 
            ``,
        img: {
            src: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/IMG_Academy_Logo.svg/1200px-IMG_Academy_Logo.svg.png",
            ratio: 3 / 4,
            alt: ""
        },
        rate: 39,
        video: {
            src: "",
            title: "YouTube video player",
            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
            referrerPolicy: "strict-origin-when-cross-origin",
            ratio: 560 / 315
        }
    },
    {
        title: "Computer-Science",
        profession: "კომპიუტერული მეცნიერება",
        author: "",
        description: 
            ``,
        img: {
            src: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/IMG_Academy_Logo.svg/1200px-IMG_Academy_Logo.svg.png",
            ratio: 3 / 4,
            alt: ""
        },
        rate: 35,
        video: {
            src: "",
            title: "YouTube video player",
            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
            referrerPolicy: "strict-origin-when-cross-origin",
            ratio: 560 / 315
        }
    },
    {
        title: "Science",
        profession: "მეცნიერება და კვლევა",
        author: "",
        description: 
            ``,
        img: {
            src: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/IMG_Academy_Logo.svg/1200px-IMG_Academy_Logo.svg.png",
            ratio: 3 / 4,
            alt: ""
        },
        rate: 23,
        video: {
            src: "",
            title: "YouTube video player",
            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
            referrerPolicy: "strict-origin-when-cross-origin",
            ratio: 560 / 315
        }
    },
    {
        title: "Medical",
        profession: "სამედიცინო",
        author: "",
        description: 
            ``,
        img: {
            src: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/IMG_Academy_Logo.svg/1200px-IMG_Academy_Logo.svg.png",
            ratio: 3 / 4,
            alt: ""
        },
        rate: 19,
        video: {
            src: "",
            title: "YouTube video player",
            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
            referrerPolicy: "strict-origin-when-cross-origin",
            ratio: 560 / 315
        }
    },
    {
        title: "Diplomacy",
        profession: "დიპლომატია და საერთაშორისო ურთიერთობები",
        author: "",
        description: 
            ``,
        img: {
            src: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/IMG_Academy_Logo.svg/1200px-IMG_Academy_Logo.svg.png",
            ratio: 3 / 4,
            alt: ""
        },
        rate: 17,
        video: {
            src: "",
            title: "YouTube video player",
            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
            referrerPolicy: "strict-origin-when-cross-origin",
            ratio: 560 / 315
        }
    },
    {
        title: "Culture",
        profession: "კულტურა და მედიახელოვნება",
        author: "",
        description: 
            ``,
        img: {
            src: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/IMG_Academy_Logo.svg/1200px-IMG_Academy_Logo.svg.png",
            ratio: 3 / 4,
            alt: ""
        },
        rate: 15,
        video: {
            src: "",
            title: "YouTube video player",
            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
            referrerPolicy: "strict-origin-when-cross-origin",
            ratio: 560 / 315
        }
    },
    {
        title: "Graphic-Design",
        profession: "გრაფიკული დიზაინი",
        author: "",
        description: 
            ``,
        img: {
            src: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/IMG_Academy_Logo.svg/1200px-IMG_Academy_Logo.svg.png",
            ratio: 3 / 4,
            alt: ""
        },
        rate: 12,
        video: {
            src: "",
            title: "YouTube video player",
            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
            referrerPolicy: "strict-origin-when-cross-origin",
            ratio: 560 / 315
        }
    },
    {
        title: "Philology",
        profession: "ფილოლოგია",
        author: "",
        description: 
            ``,
        img: {
            src: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/IMG_Academy_Logo.svg/1200px-IMG_Academy_Logo.svg.png",
            ratio: 3 / 4,
            alt: ""
        },
        rate: 19,
        video: {
            src: "",
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