const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

const container = document.getElementById('container');
const postStructure = socialPostStructure();
container.appendChild(postStructure);


// Function Post Structure
function socialPostStructure () {
    const postContainer = document.createElement('div');
    postContainer.classList.add('post');

    // Header Post Content
        const postHeader = document.createElement('div');
        postHeader.classList.add('post__header');

        const postMeta = document.createElement('div');
        postMeta.classList.add('post-meta');

        const postMetaIcon = document.createElement('div');
        postMetaIcon.classList.add('post-meta__icon');

        const profilePic = document.createElement('img');
        profilePic.classList.add('profile-pic');
        profilePic.src = 'https://unsplash.it/300/300?image=15';
        profilePic.alt = 'Phil Mangione';    

        const postMetaData = document.createElement('div');
        postMetaData.classList.add('post-meta__data');

        const postMetaAuthor = document.createElement('div');
        postMetaAuthor.classList.add('post-meta__author');
        postMetaAuthor.textContent = 'Phil Mangione';

        const postMetaTime = document.createElement('div');
        postMetaTime.classList.add('post-meta__time');
        postMetaTime.textContent = '4 mesi fa';

    // Text Post Content
        const postText = document.createElement('div');
        postText.classList.add('post__text');
        postText.textContent = 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.';

    // Image Post Content
        const postImage = document.createElement('div');
        postImage.classList.add('post__image');

        const image = document.createElement('img');
        image.src = 'https://unsplash.it/600/300?image=171';
        image.alt = '';

    // Footer Post Content
        const postFooter = document.createElement('div');
        postFooter.classList.add('post__footer');

        const likesSection = document.createElement('div');
        likesSection.classList.add('likes', 'js-likes');  

        // Cta Section
        const likesCta = document.createElement('div');
        likesCta.classList.add('likes__cta');

        const likeButton = document.createElement('a');
        likeButton.classList.add('like-button', 'js-like-button');
        likeButton.href = '#';
        likeButton.innerHTML = `
        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
        <span class="like-button__label">Mi Piace</span>`;

        const likeButtonIcon = document.createElement('i');
        likeButtonIcon.classList.add('like-button__icon', 'fas', 'fa-thumbs-up');
        likeButtonIcon.setAttribute('aria-hidden', 'true');

        const likeButtonLabel = document.createElement('span');
        likeButtonLabel.classList.add('like-button__label');
        likeButtonLabel.textContent = 'Mi Piace';

        // Counter Section
        const likesCounter = document.createElement('div');
        likesCounter.classList.add('likes__counter');

        const likesCounterText = document.createElement('b');
        likesCounterText.id = 'like-counter-1';
        likesCounterText.classList.add('js-likes-counter');
        likesCounterText.textContent = '80';


    // All elements Appended to Post Container
        postContainer.appendChild(postHeader);
        postContainer.appendChild(postText);
        postContainer.appendChild(postImage);
        postContainer.appendChild(postFooter);

    // All elements appendend to Header Container
        postHeader.appendChild(postMeta);
        postMeta.appendChild(postMetaIcon);
        postMetaIcon.appendChild(profilePic);  

        postMeta.appendChild(postMetaData);
        postMetaData.appendChild(postMetaAuthor);
        postMetaData.appendChild(postMetaTime);

    // All elements appendend to Image Container
        postImage.appendChild(image);

    // All elements appendend to Footer Container
        postFooter.appendChild(likesSection);

        // Cta Section Append
        likesSection.appendChild(likesCta);
        likesCta.appendChild(likeButton);

        // Counter Section Append
        likesSection.appendChild(likesCounter);

    // Return the post itself
    return postContainer;
}

