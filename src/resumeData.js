const ResumeAPI = {
  allData: {
    main: {
      name: "Eugene Nagornyi",
      occupation: "Web developer",
      description: "I create websites and web applications of all types",
      image: "profilepic.jpg",
      bio: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      email: "uhen.dn@gmail.com",
      phone: "+38-096-557-558-7",
      address: {
        street: "D. Galitskoho street",
        city: "Dnipro",
        zip: "49102"
      },
      contactIcons: {
        phone: "phone.png",
        mail: "email.png",
        location: "location.png"
      },
      website: "https://megaweb.jacksparrow.com",
      resumeDownload: "http://something.com",
      skills: [{
          name: "HTML5",
          level: "90"
        },
        {
          name: "CSS",
          level: "90"
        },
        {
          name: "JavaScript",
          level: "70"
        },
        {
          name: "jQuery",
          level: "65"
        },
        {
          name: "Node JS",
          level: "50"
        },
        {
          name: "React JS",
          level: "50"
        },
        {
          name: "Wordpress",
          level: "50"
        },
        {
          name: "Photoshop",
          level: "30"
        }
      ]
    },
    resume: {
      education: [{
          school: "IT School Level UP",
          degree: "Junior Web Developer",
          graduated: "October 2018",
          description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. Nullam dictum felis eu pede mollis pretium."
        },
        {
          school: "National Metallurgical Academy of Ukraine",
          degree: "Bachelor of Economics",
          graduated: "June 2005",
          description: "This is Photoshops version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat"
        }
      ],
      work: [{
          company: "Freelancer",
          title: "Web Developer ",
          years: "March 2018 - Present",
          description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. Nullam dictum felis eu pede mollis pretium."
        },
        {
          company: "Self Employed",
          title: "Self Employed",
          years: "March 2009 - February 2018",
          description: "This is Photoshops version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat"
        }
      ],
      social: [{
          name: "facebook",
          url: "http://facebook.com",
          className: "fa fa-facebook"
        },
        {
          name: "twitter",
          url: "http://twitter.com",
          className: "fa fa-twitter"
        },
        {
          name: "google-plus",
          url: "http://googleplus.com",
          className: "fa fa-google-plus"
        },
        {
          name: "linkedin",
          url: "http://linkedin.com",
          className: "fa fa-linkedin"
        },
        {
          name: "instagram",
          url: "http://instagram.com",
          className: "fa fa-instagram"
        },
        {
          name: "github",
          url: "http://github.com",
          className: "fa fa-github"
        },
        {
          name: "skype",
          url: "http://skype.com",
          className: "fa fa-skype"
        }
      ]
    }
  },
  getAll: function () {
    return this.allData;
  }
};

export default ResumeAPI;