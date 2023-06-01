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
const likedPosts = [];


posts.forEach(post => {
    const postStructure = socialPostStructure(post);
    container.appendChild(postStructure);
  });


// Function Post Structure
function socialPostStructure (post) {
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
        profilePic.src = `${post.author.image}`;
        profilePic.alt = `${post.author.name}`;  
        
        if (post.author.image === null) {
            profilePic.classList.add('profile-pic-default');
            const nameInitials = post.author.name
            .split(' ')
            .map(name => name[0])
            .join('');
            profilePic.alt = nameInitials;
          }

        const postMetaData = document.createElement('div');
        postMetaData.classList.add('post-meta__data');

        const postMetaAuthor = document.createElement('div');
        postMetaAuthor.classList.add('post-meta__author');
        postMetaAuthor.textContent = `${post.author.name}`;

        const postMetaTime = document.createElement('div');
        postMetaTime.classList.add('post-meta__time');

        // Convert date format
        const dateParts = post.created.split('-');
        const newDate = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;

        // In case nothing to return for neww algortitm timeAgo
        // postMetaTime.textContent = newDate;

        // Calculate time difference
        const createdDate = new Date(post.created);
        const currentDate = new Date();
        const timeDiff = currentDate - createdDate;

        // Calculate months, days, hours, minutes, and seconds
        const { months, days, hours, minutes, seconds } = convertMsToTime(timeDiff);
            
        // Display time difference
        const timeUnits = [
          { value: months, unit: 'mesi' },
          { value: days, unit: 'giorni' },
          { value: hours, unit: 'ore' },
          { value: minutes, unit: 'minuti' },
          { value: seconds, unit: 'secondi' }
        ];
    
        let timeAgo = '';
    
        timeUnits.forEach(({ value, unit }) => {
            if (value > 0 && timeAgo === '') {
              timeAgo = `${value} ${unit}`;
            }
          });
          
          timeAgo += ' fa';

        postMetaTime.textContent = timeAgo;

    // Text Post Content
        const postText = document.createElement('div');
        postText.classList.add('post__text');
        postText.textContent = post.content;

    // Image Post Content
        const postImage = document.createElement('div');
        postImage.classList.add('post__image');

        const image = document.createElement('img');
        image.src = `${post.media}`;
        image.alt = `Post Created: ${post.created}`;
        

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
        likesCounter.innerHTML = `
        Piace a 
            <b id="like-counter-${post.id}" class="js-likes-counter">${post.likes}</b> 
        persone`;
        likeButton.setAttribute('data-postid', `${post.id}`)


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

        const likeCounter = likesCounter.querySelector('.js-likes-counter');
        let isLiked = false;
      
        // Event listener for the like button
        likeButton.addEventListener('click', () => {
          if (isLiked) {
            likeButton.classList.remove('like-button--liked');
            post.likes--;
            likeCounter.textContent = post.likes;
            isLiked = false;

            const index = likedPosts.indexOf(post.id);
            if (index !== -1) {
              likedPosts.splice(index, 1); // Remove the post id from likedPosts array
            }
          } else {
            likeButton.classList.add('like-button--liked');
            post.likes++;
            likeCounter.textContent = post.likes;
            isLiked = true;

            if (!likedPosts.includes(post.id)) {
                likedPosts.push(post.id); // Add the post id to likedPosts array
            }
          }
          console.log('Post Liked:', `id=${likedPosts}`);
        });

      
    // Return the post itself
    return postContainer;
}

function convertMsToTime(milliseconds) {
    let seconds = Math.floor(milliseconds / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);
    let months = Math.floor(days / 30);
  
    seconds = seconds % 60;
    minutes = minutes % 60;
    hours = hours % 24;
    days = days % 30;
    months = months % 12;
  
    return { months, days, hours, minutes, seconds };
  }
  

